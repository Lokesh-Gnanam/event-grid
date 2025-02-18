import React from "react";
import Header from "./comp/Header";

import UpcomingEvents from "./comp/UpcomingEvents";
import OngoingEvents from "./comp/OngoingEvents";

import Footer from "./comp/Footer";


function App() {
  return (
    <div>
      <Header />

      <UpcomingEvents />
      <OngoingEvents />
      <Footer />
    </div>
  );
}

export default App;