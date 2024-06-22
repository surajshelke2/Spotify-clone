import React, { createContext, useRef, ReactNode, RefObject, useState } from 'react';
import { songsData } from '../assets/assets';

interface TimeState {
  seconds: number;
  minutes: number;
}

interface PlayerContextProps {
  audioRef: RefObject<HTMLAudioElement>;
  seekBar: RefObject<HTMLHRElement>;
  seekBg: RefObject<HTMLDivElement>;
  track: any; // Adjust this type according to your songsData structure
  setTrack: React.Dispatch<React.SetStateAction<any>>; // Adjust according to setTrack function
  playerStatus: boolean;
  setPlayerStatus: React.Dispatch<React.SetStateAction<boolean>>;
  time: {
    currentTime: TimeState;
    totalTime: TimeState;
  };
  setTime: React.Dispatch<React.SetStateAction<{
    currentTime: TimeState;
    totalTime: TimeState;
  }>>;
  play: () => void;
  pause: () => void;
}

export const PlayerContext = createContext<PlayerContextProps | undefined>(undefined);

interface PlayerContextProviderProps {
  children: ReactNode;
}

const PlayerContextProvider: React.FC<PlayerContextProviderProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const seekBar = useRef<HTMLHRElement>(null);
  const seekBg = useRef<HTMLDivElement>(null);

  const [track, setTrack] = useState<any>(songsData[2]); // Adjust 'any' according to your songsData structure
  const [playerStatus, setPlayerStatus] = useState<boolean>(false);
  const [time, setTime] = useState<{ currentTime: TimeState; totalTime: TimeState }>({
    currentTime: { seconds: 0, minutes: 0 },
    totalTime: { seconds: 0, minutes: 0 },
  });

  const play = () => {
    audioRef.current?.play();
    setPlayerStatus(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setPlayerStatus(false);
  };

  const contextValue: PlayerContextProps = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playerStatus,
    setPlayerStatus,
    time,
    setTime,
    play,
    pause,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
