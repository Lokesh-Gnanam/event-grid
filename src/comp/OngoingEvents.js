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
                <div className="ongoing-content">
                    <img src={item.img} alt={item.title}  className="guest" />
                        <h2>{item.title}</h2>
                        <p className="description"> {item.des} </p>
                </div>
        
                
        
        <div className="details-cont">
        
                <div className="details">
                    <p >Venue:   {item.venue}</p>
                    <p >Date: {item.date}</p>
                    <p >Time: {item.time}</p>
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
