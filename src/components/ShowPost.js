import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
const ShowPost = () => {
  const [state, setState] = React.useState([
    {
      id: 1,
      userImg: "/images/umair1.jpg",
      name: "Umair Nisar",
      time: "2h",
      text:
        "Babar Azam-led Pakistan squad arrives in Christchurch for New Zealand series",
      postImg: "/images/team.jpg",
    },
    {
      id: 2,
      userImg: "/images/talha1.jpg",
      name: "Talha Bajwa",
      time: "4h",
      text:
        "I do not want to take measures like a lockdown that will start hurting our economy which at the moment is showing signs of a robust recovery. Unfortunately, the Opposition's only goal is NRO at whatever cost to the lives of people & the country's economy.",
      postImg: "/images/imrankhan1.jpg",
    },
    {
      id: 3,
      userImg: "/images/hamza1.jpg",
      name: "Hamza",
      time: "2h",
      text:
        "When we say all educational institutions will close on Nov 26 and students will home learn, we mean ALL institutions  without exception",
      postImg: "/images/shafat1.jpg",
    },
    {
      id: 5,
      userImg: "/images/umair2.jpg",
      name: "Umair",
      time: "2h",
      text:
        "Do We still need Enterprise Data Warehouse Right-pointing triangle",
      postImg: "/images/react.jpg",
    },
    {
      id: 6,
      userImg: "/images/hamza1.jpg",
      name: "Hamza",
      time: "2h",
      text:
        "When we say all educational institutions will close on Nov 26 and students will home learn, we mean ALL institutions  without exception",
      postImg: "/images/shafat1.jpg",
    },
    {
      id: 7,
      userImg: "/images/hamza1.jpg",
      name: "Hamza",
      time: "2h",
      text:
        "When we say all educational institutions will close on Nov 26 and students will home learn, we mean ALL institutions  without exception",
      postImg: "/images/shafat1.jpg",
    },
    {
      id: 4,
      userImg: "/images/mohsin.jpg",
      name: "Mohsin Virq ",
      time: "2h",
      text:
        "Let there be no doubt anywhere that we know how to defend our country and will continue to do so with our combined national resolve",
      postImg: "/images/imrankhan2.jpg",
    },
  ]);
  return (
    <div className="show">
      {state.map((post) => (
        <div key={post.id} className="empty">
          <div className="show__header">
            <div className="show__header-img">
              <img src={post.userImg} alt="user" />
            </div>
            <div className="show__header-name">
              {post.name} <div className="date">{post.time}</div>
            </div>
          </div>
          <div className="show__body">
            <div className="show__body-text">{post.text}</div>
            <div className="show__body-img">
              <img src={post.postImg} alt="post" />
            </div>
          </div>
          <div className="show__reactions">
            <span className="reactions">
              <FaRegThumbsUp /> <span className="reactions-text">Like</span>
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions-text">Comments</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions-text">Share</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPost;
