import { useContext } from "react";
import "./App.css";
import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { PlayerContext } from "./contexts/PlayerContext";

const App: React.FC = () => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("AnyComponent must be used within a PlayerContextProvider");
  }

  const { audioRef,track} = context;

  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex ">
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
};

export default App;
