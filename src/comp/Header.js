import {useState,React}from "react";
import skct from "../assets/skct-logoo.png";
import bell from "../assets/bell.png";
import "../styles/Header.css";
function Header() {
  
  const [notification, setnotification] = useState(false);

  const handleNotify=()=>{
    setnotification(!notification);
  }
  
  return (
   
    <>
      <div className="h-cont">
          <div className="container">
            <div>
              <img src={skct} alt="logo" ></img>
            </div> 
              <div className="title">
                <h1>SRI KRISHNA COLLEGE OF TECHNOLOGY</h1>
                <p>An Autonomous Institution | Accredicted by NAAC with ‘A’ Grade </p>
              </div>
          </div >
      </div>
          <span className="notify">
            <img src={bell} alt="notify"></img>
            <h3 onClick={()=>handleNotify()}>Notifications</h3>
          </span>
      <h2 className="e-title">Event Grid 2025-2026</h2>
    
      {notification ? (
        <span className="message" >
        <div className="n-content">
           <p>This page is under development. We will notify you once it is ready.</p>
        </div>
     </span>
      ): null}
    </>
    
    
  );
}

export default Header;
