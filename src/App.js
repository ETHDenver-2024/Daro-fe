import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SideNavbar from "./components/SideNavbar";
import Create from "./pages/Create";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
        <BrowserRouter>
          <div className="flex bg-slate-200">
            <div className="basis-[11%]">
              <SideNavbar />
            </div>
            <div className="basis-[89%] ttt overflow min-h-screen max-h-screen overflow-y-hidden w-[95%] mx-auto">
              <NavBar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/create" element={<Create />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;
