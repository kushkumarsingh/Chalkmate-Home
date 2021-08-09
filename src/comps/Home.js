import React from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

import shortid from "shortid"

import Header from "./Header";
import homepage from "../ui/homeimage.png"
import MeetingPage from "./Meeting";

function HomePage(props){

    const history = useHistory();

    const createMeeting = () => {
        console.log("Creating new Meeting");
        const uid = shortid.generate();
        history.push(`/${uid}`);
        // var ID = chalkmate.generateID(3 ,4);
        // history.push("/meeting/" + ID);
        // localStorage.setItem("meetID",ID);
    }

    return (
        <div className="home-page">
        <Header />
        <div className="home flex aic">
            <div className="meta">
                <h2 className="slogan s40 fontr b000">Premium Video Meetings.</h2>
                <h2 className="slogan s40 fontr b000">Now free for all.</h2>
                <h2 className="tagline s15 fontr c777 n">We've revamped our Google Meet service to make business meetings more secure.<br></br> Now it can be used for free and it is available to all.</h2>
                <div className="actions flex aic">
                    <button className="start fontr s15 cfff flex aic" onClick={e=>createMeeting()}>
                        <div className="s24"/>
                        <FontAwesomeIcon className="famr" icon={faVideo} />
                        New Meeting
                    </button>
                    <input className="room-code fontr s15" placeholder="Enter a code or link!"/>
                </div>
            </div>
            {/* <div className="tablet-frame">
                <div className="tablet rel">
                    <div className="notch abs"/>
                    <div className="hbtn abs"/>
                    <div className="screen abs">
                    <img src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg"/>
                    </div>
                </div>
            </div> */}
            <img src={homepage} />
        </div>
        </div>
    )
}

export default HomePage;