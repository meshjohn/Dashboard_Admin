import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { registerLicense } from "@syncfusion/ej2-base";
import { Footer, Navbar, Sidebar, ThemeSettings } from "./component";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from "./pages";
import Pyramid from "./pages/Charts/Pyramid";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1NpR2dGfV5ycEVHYVZURHxdRU0DNHVRdkdnWXZcdHZWQ2BeWUV/WUI="
);

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    setCurrentColor,
    setCurrentMode
  } = useStateContext();
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  },[]);
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                onClick={() => setThemeSettings(true)}
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
              >
                <FiSettings></FiSettings>
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar></Sidebar>
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar></Sidebar>
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
            ${activeMenu ? "md:ml-72" : "flex-2"}`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar></Navbar>
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />}></Route>
                <Route path="/color-picker" element={<ColorPicker />}></Route>

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />}></Route>
                <Route path="/color-mapping" element={<ColorMapping />}></Route>
                <Route path="/pyramid" element={<Pyramid />}></Route>
                <Route path="/stacked" element={<Stacked />}></Route>
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
