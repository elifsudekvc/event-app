import "./App.css";
import SiteHome from "./components/page/SiteHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteMusic from "./components/page/SiteMusic";
import SiteTheatre from "./components/page/SiteTheatre";
import SiteDance from "./components/page/SiteDance";
import SiteSport from "./components/page/SiteSport";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
