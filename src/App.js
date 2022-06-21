import React from 'react';
import Search from './Search'
import Home from './Home'
import Explore from './Explore'
import History from './History';
import Subscriptions from './Subscriptions';
import Library from './Library';
import PageNotFound from './404page'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/search/tseries" element={<Search />} />
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/history" element={<History />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/library" element={<Library />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
