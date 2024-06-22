import React, {
  createContext,
  useRef,
  ReactNode,
  RefObject,
  useState,
  useEffect,
} from "react";
import { songsData } from "../assets/assets";

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
  setTime: React.Dispatch<
    React.SetStateAction<{
      currentTime: TimeState;
      totalTime: TimeState;
    }>
  >;
  playWithId: (id: string | number) => Promise<void>;
  next: () => Promise<void>;
  previous: (id: any) => Promise<void>
  play: () => void;
  pause: () => void;
}

export const PlayerContext = createContext<PlayerContextProps | undefined>(
  undefined
);

interface PlayerContextProviderProps {
  children: ReactNode;
}

const PlayerContextProvider: React.FC<PlayerContextProviderProps> = ({
  children,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const seekBar = useRef<HTMLHRElement>(null);
  const seekBg = useRef<HTMLDivElement>(null);

  const [track, setTrack] = useState<any>(songsData[2]); // Adjust 'any' according to your songsData structure
  const [playerStatus, setPlayerStatus] = useState<boolean>(false);
  const [time, setTime] = useState<{
    currentTime: TimeState;
    totalTime: TimeState;
  }>({
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

  const previous =async()=>{

    if(track.id>0){
      await setTrack(songsData[track.id-1]);
      await audioRef.current?.play();
      setPlayerStatus(true)
    }
  }

  const next = async()=>{

    if(track.id < songsData.length-1){
      await setTrack(songsData[track.id+1]);
      await audioRef.current?.play();
      setPlayerStatus(true);
    }

  }

  const playWithId = async (id: string | number | any) => {
    await setTrack(songsData[id]);

    if (audioRef.current) {
      await audioRef.current.play();
    }

    setPlayerStatus(true);
  };

  useEffect(() => {
    const updateSeekBar = () => {
      if (audioRef.current) {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;

        if (seekBar.current) {
          seekBar.current.style.width = `${Math.floor(
            (currentTime / duration) * 100
          )}%`;
        }

        setTime({
          currentTime: {
            seconds: Math.floor(currentTime % 60),
            minutes: Math.floor(currentTime / 60),
          },
          totalTime: {
            seconds: Math.floor(duration % 60),
            minutes: Math.floor(duration / 60),
          },
        });
      }
    };

    const interval = setInterval(updateSeekBar, 1000);

    return () => clearInterval(interval);
  }, [audioRef, seekBar]);

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
    previous,
    playWithId,
    next,
    

  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
