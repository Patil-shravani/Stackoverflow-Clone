import React from "react";
import "./RightSidebar.css";
import Widget from "./Widget";
import WidgetTags from "./WidgetTags";

const RightSidebar = ({theme}) => {
  return (
    <aside className={`${theme} right-sidebar`}>
      <Widget />
      <WidgetTags />
    </aside>
  );
};

export default RightSidebar;
