import "./App.css";
import SiteHome from "./components/page/SiteHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteMusic from "./components/page/SiteMusic";
import SiteTheatre from "./components/page/SiteTheatre";
import SiteDance from "./components/page/SiteDance";
import SiteSport from "./components/page/SiteSport";
import MusicDetail from "./components/page/DetailPage/MusicDetail";
import DanceDetail from "./components/page/DetailPage/DanceDetail";
import TheatreDetail from "./components/page/DetailPage/TheatreDetail";
import SportDetail from "./components/page/DetailPage/SportDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiteHome></SiteHome>}></Route>
          <Route path="/SiteMusic" element={<SiteMusic></SiteMusic>}></Route>
          <Route path="/SiteTheatre" element={<SiteTheatre></SiteTheatre>}></Route>
          <Route path="/SiteDance" element={<SiteDance></SiteDance>}></Route>
          <Route path="/SiteSport" element={<SiteSport></SiteSport>}></Route>
          <Route path="/music/:id" element={<MusicDetail></MusicDetail>}></Route>
          <Route path="/dance/:id" element={<DanceDetail></DanceDetail>}></Route>
          <Route path="/theatre/:id" element={<TheatreDetail></TheatreDetail>}></Route>
          <Route path="/sport/:id" element={<SportDetail></SportDetail>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
