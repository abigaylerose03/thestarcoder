import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Interest from './Interest';
import NFTInterest from './NFTInterest';
import Home2 from './Home2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="signup" element={<Home2/>} />
        <Route path="interest" element={<Interest />} />
        <Route path="/interest/nftinterest" element={<NFTInterest />} />
      </Routes>
    </div>
  );
}
export default App;