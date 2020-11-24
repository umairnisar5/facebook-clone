import './App.css';
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="facebook">
        <SideBar />
        <Posts />
        <ChatBar openChat={openChat} />
        <ChatBox state={state} current={current} closeChat={closeChat} />
      </div>
    </div>
  )
 
}

export default App;
