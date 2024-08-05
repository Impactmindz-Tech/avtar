import { useEffect, useState } from "react";
import Images from "@/constant/Images";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/utills/LocalStorageUtills";
import HeaderNavigation from "../HeaderNavigation";
import { switchProfile } from "@/utills/service/switchRole/RoleSwitch";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { getAllcountryApi } from "@/utills/service/userSideService/userService/UserHomeService";
import { initClient, handleAuthClick, handleSignoutClick, createGoogleMeet, deleteGoogleMeet } from "../../meetConfig/googlemeet";

function Header() {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [meetLink, setMeetLink] = useState('');
  const [eventId, setEventId] = useState('');
  const [duration, setDuration] = useState(30); // Default duration 30 minutes
  const [startTime, setStartTime] = useState('');
  const [timerId, setTimerId] = useState(null);
  const [countdown, setCountdown] = useState('');
  const [meetWindow, setMeetWindow] = useState(null);

  const updateSignInStatus = (isSignedIn) => {
    setIsSignedIn(isSignedIn);
  };

  useEffect(() => {
    initClient(updateSignInStatus);
  }, []);

  useEffect(() => {
    if (startTime) {
      const interval = setInterval(() => {
        const now = moment();
        const start = moment(startTime);
        const diff = start.diff(now);

        if (diff <= 0) {
          clearInterval(interval);
          setCountdown('Meeting is starting now!');
          createMeet();
        } else {
          const hours = Math.floor(diff / 3600000);
          const minutes = Math.floor((diff % 3600000) / 60000);
          const seconds = Math.floor((diff % 60000) / 1000);
          setCountdown(`${hours} hours ${minutes} minutes ${seconds} seconds remaining`);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTime]);

  const createMeet = () => {
    const startDateTime = moment(startTime).toDate();
    const endDateTime = new Date(startDateTime.getTime() + duration * 60000);

    const event = {
      summary: 'Google Meet',
      description: 'One-on-one meeting',
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'America/Los_Angeles',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'America/Los_Angeles',
      },
      conferenceData: {
        createRequest: {
          requestId: "sample123",
          conferenceSolutionKey: {
            type: "hangoutsMeet"
          },
        },
      },
    };

    createGoogleMeet(event).then((response) => {
      const meetUrl = response.result.hangoutLink;
      setMeetLink(meetUrl);
      setEventId(response.result.id);

      // Open the meeting in a new tab
      const newWindow = window.open(meetUrl, '_blank');
      setMeetWindow(newWindow);

      // Schedule the end of the meeting
      const timer = setTimeout(() => {
        endMeet();
      }, duration * 60000);

      setTimerId(timer);
    });
  };

  const endMeet = () => {
    if (eventId) {
      deleteGoogleMeet(eventId).then(() => {
        resetState();
      });
    }
    if (meetWindow) {
      meetWindow.close();
    }
  };

  const resetState = () => {
    setMeetLink('');
    setEventId('');
    setCountdown('');
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(null);
    }
  };
  const [loading, setLoading] = useState(false);
  const [countrys, setCountrys] = useState([]);
  const [role, setRole] = useState(getLocalStorage("user") ? getLocalStorage("user").Activeprofile : null);
  const [selectedCountry, setSelectedCountry] = useState(getLocalStorage("selectedCountry") || "");

  // useEffect(() => {
  //   if (role === "user") {
  //     navigate("/user/dashboard");
  //   } else if (role === "avatar") {
  //     navigate("/avatar/dashboard");
  //   }
  // }, [role]);

  const roleSwitch = async () => {
    const newRole = role === "user" ? "avatar" : "user";
    try {
      const response = await switchProfile(newRole);
      if (response?.isSuccess) {
        removeLocalStorage("user");
        setLocalStorage("user", response?.data);
        setRole(newRole);
        toast.success(response?.message);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getAllcountry = async () => {
    try {
      const response = await getAllcountryApi();
      if (response?.isSuccess) {
        setCountrys(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllcountry();
    initClient(updateSignInStatus);
  }, []);

  const handleCountryChange = (e) => {
    const selected = e.target.value;
    setSelectedCountry(selected);
    setLocalStorage("selectedCountry", selected);
  };



  const handlelive = () => {
    handleAuthClick();
  };

  return (
    <>
 
      {loading && <Loader />}
      <header className="flex justify-between items-center p-3">
        <select value={selectedCountry} onChange={handleCountryChange}>
          {countrys?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div className="brand">
          <img src={Images.AvatarWalk} alt="AvatarWalk" />
        </div>
        <div className="cursor-pointer flex gap-4 items-center">
          <button className="bg-[#ff5454] flex-1 py-[7px] text-white rounded-lg px-4 sm:hidden" onClick={roleSwitch}>
            {role === "user" ? "switch avatar" : "switch user"}
          </button>
          <button className="bg-[#ff5454] py-[7px] text-white rounded-lg px-4 sm:hidden" onClick={handlelive}>
            Live
          </button>
          <HeaderNavigation />
        </div>
      </header>
    </>
  );
}

export default Header;
