import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MusicProvider } from './context/MusicContext';

import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import SearchManager from "./pages/SearchManager";
import UserProfile from "./pages/UserProfile";
import TrackPage from "./pages/TrackPage"
import Loading from "./pages/Loading";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <MusicProvider>
    <Router>
    
      <Navbar/>
      <div className="container mx-2 sm:mx-auto mt-32">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/search" element={<SearchManager />} />
        <Route path="/moods" element={<Loading />} />
        <Route path="/track/:trackId" element={<TrackPage />} />
        <Route path="/user/:handle" element={<UserProfile />} />
        <Route path="/user/:handle/tracks" element={<UserProfile />} />
      </Routes>
      </div>
      <AudioPlayer />
      <Footer />
    </Router>
    </MusicProvider>
  );
}

export default App;
