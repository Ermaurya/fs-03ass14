import React, { useState } from 'react';
import Relax from './assets/Relax_your_Brain.mp3';
import Kirpa from './assets/Kirpa_Karo_Shri_Ram.mp3';
import Kishori from './assets/Kishori_Kuch_Aisa.mp3'
import Bg from './assets/Devotional_Background_Music.mp3'

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: 'Devotional_Background_Music',
        file: Bg,
      },
      {
        name: 'Kishori_Kuch_Aisa',
        file: Kishori,
      },
      {
        name: 'Kirpa_Karo_Shri_Ram',
        file: Kirpa,
      },
      {
        name: 'Relax_your_Brain',
        file: Relax,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
