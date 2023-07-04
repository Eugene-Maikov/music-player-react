import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Library from "../library/library";
import Feed from "../feed/feed";
import Trending from "../trending/trending";
import Player from "../player/player";
import Favorites from "../favorites/favorites";
import './home.css'
import Sidebar from "../../components/sidebar";

const Home = () => {
  return (
    <Router>
      <div className="main-body">

        {/* ====== Боковая панель (на всех страницах) ====== */}
        <Sidebar/>
        {/* ====== end Боковая панель ====== */}

        <Routes>
          <Route path="/library" element={<Library/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/trending" element={<Trending/>}/>
          <Route path="/player" element={<Player/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default Home;