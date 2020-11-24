import React from "react";

const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/umair1.jpg", name: "Umair Nisar" },
    { id: 2, image: "/images/umair2.jpg", name: "Aasad Khan" },
    { id: 3, image: "/images/umair3.jpg", name: "Kamran Khan" },
    { id: 4, image: "/images/umair4.jpg", name: "Javed Khan" },
    { id: 5, image: "/images/talha1.jpg", name: "Fazal Khan" },
    { id: 6, image: "/images/hamza1.jpg", name: "Rahim Khan" },
    { id: 6, image: "/images/talha2.jpg", name: "Imran Khan" },
    { id: 7, image: "/images/profile.jpg", name: "Saeed Khan" },
    { id: 8, image: "/images/imrankhan1.jpg", name: "Bilal Khan" },
    { id: 9, image: "/images/imrankhan2.jpg", name: "Umer Khan" }
  ]);
  const openChat = (user) => {
    props.openChat(user);
  };
  return (
    <div className="chatBar">
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
          onClick={() => openChat(user)}
        >
          <div className="chatBar__list-img">
            <img src={user.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;
