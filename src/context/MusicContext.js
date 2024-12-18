import { createContext, useState } from 'react';

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [musicList, setMusicList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matrixAudioPlayer, setMatrixAudioPlayer] = useState(new Audio(""));

  const addToMusicList = (value) => {
    if (musicList.length === 0) {
      setMusicList([value]);
      setCurrentIndex(-1);
    } else {
      setMusicList([...musicList, value]);
    }
  };

  return (
    <MusicContext.Provider
      value={{
        musicList,
        currentIndex,
        setCurrentIndex,
        addToMusicList,
        matrixAudioPlayer,
        setMatrixAudioPlayer,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};