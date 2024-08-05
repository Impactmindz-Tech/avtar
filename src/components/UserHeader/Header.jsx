import { useEffect, useState } from "react";
import Images from "@/constant/Images";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/utills/LocalStorageUtills";
import HeaderNavigation from "../HeaderNavigation";
import { switchProfile } from "@/utills/service/switchRole/RoleSwitch";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { getAllcountryApi } from "@/utills/service/userSideService/userService/UserHomeService";
import { initClient, handleAuthClick, handleSignoutClick, createGoogleMeet } from "../../meetConfig/googlemeet";
import { Button, TextField, Typography } from '@mui/material';
//import moment from 'moment';

function Header() {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countrys, setCountrys] = useState([]);
  const [role, setRole] = useState(getLocalStorage("user") ? getLocalStorage("user").Activeprofile : null);
  const [selectedCountry, setSelectedCountry] = useState(getLocalStorage("selectedCountry") || "");

  const [meetLink, setMeetLink] = useState('');
  const [eventId, setEventId] = useState('');
  const [duration, setDuration] = useState(30); // Default duration 30 minutes
  //const [startTime, setStartTime] = useState(moment().format("YYYY-MM-DDTHH:mm:ss")); // Default to now

  const updateSignInStatus = (isSignedIn) => {
    setIsSignedIn(isSignedIn);
  };

  useEffect(() => {
    initClient(updateSignInStatus);
  }, []);

  useEffect(() => {
    if (role === "user") {
      navigate("/user/dashboard");
    } else if (role === "avatar") {
      navigate("/avatar/dashboard");
    }
  }, [role]);

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
  
  }, []);

  const handleCountryChange = (e) => {
    const selected = e.target.value;
    setSelectedCountry(selected);
    setLocalStorage("selectedCountry", selected);
  };
  console.log(meetLink,'link');

  const handleLiveButtonClick = async () => {
    if (!isSignedIn) {
      try {
        await handleAuthClick();
      } catch (error) {
        if (error.error === 'popup_closed_by_user') {
          toast.error("Authentication popup was closed before completing. Please try again.");
        } else {
          toast.error("An error occurred during authentication. Please try again.");
          console.error("Authentication error:", error);
        }
        return;
      }
    }

    const endTime = moment(startTime).add(duration, 'minutes').format("YYYY-MM-DDTHH:mm:ss");
    try {
      const response = await createGoogleMeet("Live Event", "Description of the event", startTime, endTime);
      const meetLink = response.result.hangoutLink;
      const eventId = response.result.id;
      setMeetLink(meetLink);
      setEventId(eventId);
      toast.success("Google Meet created successfully!");
      openMeetWindow(meetLink, duration);
    } catch (error) {
      console.log(error);
      toast.error("Failed to create Google Meet.");
    }
  };

  const openMeetWindow = (meetLink, duration) => {
    const meetWindow = window.open(meetLink, "_blank");
    setTimeout(() => {
      meetWindow.close();
    }, duration * 60000); // Convert minutes to milliseconds
  };

  return (
    <>   
      <section>

      </section>
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
          <button className="bg-[#ff5454] py-[7px] text-white rounded-lg px-4 sm:hidden" onClick={handleLiveButtonClick}>
            Live
          </button>
          <HeaderNavigation />
        </div>
      </header>
    </>
  );
}

export default Header;
