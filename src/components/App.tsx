import Counter from "./Counter";
import "../styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import { Suspense } from "react";
import { useTheme } from "../theme/useTheme";
import { classNames } from "../helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={`/`}>Главная страница</Link>
      <Link to={`/about`}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<AboutPageAsync />} path={`/about`} />
          <Route element={<MainPageAsync />} path={`/`} />
        </Routes>
      </Suspense>

      <Counter />
    </div>
  );
};

export default App;
