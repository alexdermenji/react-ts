import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.scss";
import { MainAsync } from "./pages/Main/MainAsync";
import { AboutAsync } from "./pages/About/AboutAsync";
import { Suspense } from "react";

export const App = () => {
  return (
    <div className="app">
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<MainAsync />} />
          <Route path="/about" element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
