import React from "react";
import data from "../db.json";
import "../styles/UpcomingEvents.css";

// import { useNavigate } from "react-router";

const UpcomingEvents = () => {
  
  const handleRegisterClick = (link) => {
    window.location.href = link; // Redirect to the link
  };

  return(
    <div >
    <h2 className="upcoming">UPCOMING EVENTS</h2>
    { data.upcoming && data.upcoming.length > 0 ? (
    data.upcoming.map((item, index)=>(
      <div className="event" key={index}>
      
      <div >
          <img src={item.img} alt="logo" className="image"></img>
      </div>
      <div className="event-det">
          <div>
          <h4>{item.title}</h4>
          </div>
          <div>
          <p className="descript">{item.des}</p>
          <br/>
            <div className="contact">
              <div  className="contact-cont">
                <p>{item.details}</p>
                <p>{item.contact}</p>
                <p>{item.contact1}</p>
              </div>
            </div>
          </div>
          <div>
          <button className="button"  onClick={() => handleRegisterClick(item.link)} >Register</button>
          </div>
      </div>
  </div>
    ))
  ) : (
    <div className="no-upcoming">
      <p className="no-events">🚨 There are no Upcoming events right now.</p> 
    </div>
  )
    }
    </div>
  );
   
};

export default UpcomingEvents;
