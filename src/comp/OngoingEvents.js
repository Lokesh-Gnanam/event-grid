import React from "react";
import data from "../db.json";
import "../styles/OngoingEvents.css";
const OngoingEvents = () => {
  return (
    <div>
        <h2 className="ongoing">ONGOING EVENTS</h2>
        {
        data.ongoing && data.ongoing.length > 0 ? (
          data.ongoing.map((item,index)=>(
                <div className="ong-cont" key={index}>
                <div className="guest">
        
                </div>
        
                        <h2>{item.title}</h2>
                        <p> {item.des} </p>
                
        
        <div className="details-cont">
        
                <div className="details">
                    <p>{item.venue}</p>
                    <p>{item.date}</p>
                    <p>{item.time}</p>
                </div>
        </div>
        </div>
        ))
      ) : (
        <div className="no-cont">
          <p className="no-events">🚨 There are no ongoing events right now.</p> 
        </div>
      )
    }
    </div>
  )
}

export default OngoingEvents;
