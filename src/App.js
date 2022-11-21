import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ContactUsPage,
  MoviesPage,
  GamesPage,
  NotFoundPage,
} from "./pages";
import "@mui/icons-material";
import { Sidebar } from "./comps/sidebar/sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
