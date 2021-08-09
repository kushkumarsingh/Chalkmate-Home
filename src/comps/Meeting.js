import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMicrophone,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

import Header from "./Header";

function MeetingPage(props){

    const history = useHistory();
    let { id } = useParams();
    
    const JoinCall = () => {
        console.log("Join Call");
        console.log(id);
        history.push(`/${id}/meeting#init`);
        //let {ID} = useParams();
        //console.log(ID);
        //var meetID = localStorage.getItem("meetID");
        //history.push('/${meetID}#init');
    }

    return (
        <div className="home-page">
        <Header />
        <div className="meeting flex aic abs abc">
            <div className="screen rel">
                <h2 className="error fontr cfff s15 abs n abc">Camera is off</h2>
                <div className="btns abs">
                    <button className="rel s24 cfff anim">
                        <FontAwesomeIcon className="" icon={faMicrophone} />
                        <div className="tip anim fontr abs s13 cfff">Turn Off Microphone</div>
                    </button>
                    <button className="rel s24 cfff anim">
                        <FontAwesomeIcon className="icon" icon={faVideo} />
                        <div className="tip anim fontr abs s13 cfff">Turn Off Webcam</div>
                    </button>
                </div>
            </div>
            <div className="stats rel">
                <h2 className="s20 fontr c333 fsfb mb30">Meeting Ready</h2>
                <h2 className="s14 fontr c777 uri n mb30">Lorem ipsum dolor sit amet, consectetur elit.<br></br>Sed sit amet gravida urna. Mauris non pretium erat.</h2>
                <div className="btns abs flex aic n">
                    <button className="s14 fontr cfff rel anim" onClick={e=>JoinCall()}>
                    <FontAwesomeIcon className="famr" icon={faVideo} />
                        Join Now
                    </button>
                    <button className="s14 fontr cfff rel anim">
                    <FontAwesomeIcon className="famr" icon={faDesktop} />
                        Present
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MeetingPage;