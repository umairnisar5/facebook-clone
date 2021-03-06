import React, { useState } from "react";

const SideBar = () => {
  const [state, setState] = useState([
    { id: 1, image: "/images/umair1.jpg", name: "React Development" },
    { id: 2, image: "/images/talha2.jpg", name: "JAVA Development" },
    { id: 3, image: "/images/hamza1.jpg", name: "React Native Development" },
    { id: 4, image: "/images/amir.jpg", name: "Block Chain" },
    { id: 5, image: "/images/mohsin.jpg", name: "React Development" },
    { id: 6, image: "/images/dawood.jpg", name: "Web Development" },
  ]);
  return (
    <div className="sidebar">
      {state.map((info) => (
        <div className="sidebar__list" key={info.id}>
          <div className="sidebar__list-img">
            <img src={info.image} alt="group image" />
          </div>
          <div className="sidebar__list-name">{info.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;