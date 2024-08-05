// src/utils/googleCalendar.js
import { gapi } from 'gapi-script';

const CLIENT_ID = '43407974542-q4hsviijsdl9kagq9a9l552tslnufech.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCWJy_HmUgcAn-64DkUt8qEuR3l1h8S7tw';
const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

export const initClient = (updateSignInStatus) => {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
      scope: SCOPES,
    }).then(() => {
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
      updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  });
};

export const handleAuthClick = () => {
  gapi.auth2.getAuthInstance().signIn();
};

export const handleSignoutClick = () => {
  gapi.auth2.getAuthInstance().signOut();
};

export const createGoogleMeet = (summary, description, startTime, endTime) => {
  return gapi.client.calendar.events.insert({
    calendarId: 'primary',
    resource: {
      summary,
      description,
      start: {
        dateTime: startTime,
        timeZone: 'America/Los_Angeles'
      },
      end: {
        dateTime: endTime,
        timeZone: 'America/Los_Angeles'
      },
      conferenceData: {
        createRequest: {
          requestId: "sample123",
          conferenceSolutionKey: { type: "hangoutsMeet" }
        }
      }
    },
    conferenceDataVersion: 1
  });
};
