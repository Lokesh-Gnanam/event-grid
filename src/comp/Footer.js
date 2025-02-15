import React from "react";
import  "../styles/Footer.css"
export default function Footer() {
  return (
    <footer >
      <div className="footer-content">
        <div>
        <h2 className="footer-logo">EVENT_GRID</h2>
        </div>
        <div className="info">
            <h2>Department of Artificial Intelligence and Data Science</h2>
            <p>Mr.LOKESH T (Design and Front-end Developer)</p>
            <p>Mr.Mithilesh E S (Backend Developer)</p>
            <p>Mr.Dhanasekar B (Developer)</p>
        </div> 
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>📧 eventmanager@gmail.com</p>
          <p>📷 @events_skct</p>
          <p>💬 chat.whatsapp.com</p>
        </div>
      </div>
    </footer>
  );
}
