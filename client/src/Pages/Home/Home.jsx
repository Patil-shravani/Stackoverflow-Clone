import React from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";

const Home = ({ slideIn ,theme}) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} theme={theme}/>
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar  theme={theme}/>
      </div>
    </div>
  );
};

export default Home;
