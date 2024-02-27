import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './allRoutes.css';
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import Tags from "./Pages/Tags/Tags";
import Users from "./Pages/Users/Users";
import UserProfile from "./Pages/UserProfile/UserProfile";

const AllRoutes = ({ slideIn, handleSlideIn  , theme}) => {
 

  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route
          path="/"
          element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} theme={theme} />}
        />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/AskQuestion" element={<AskQuestion />} />
        <Route
          path="/Questions"
          element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn} />}
        />
        <Route
          path="/Questions/:id"
          element={
            <DisplayQuestion slideIn={slideIn} handleSlideIn={handleSlideIn} />
          }
        />
        <Route
          path="/Tags"
          element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} />}
        />
        <Route
          path="/Users"
          element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}
        />
        <Route
          path="/Users/:id"
          element={
            <UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
