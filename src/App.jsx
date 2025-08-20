import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SuccessPage from "./components/SuccessPage";
import Films from "./components/filmSection/Films";
import Showtimes from "./components/scheduleSection/Showtimes";
import Seats from "./components/seatSection/Seats";
import { useState } from "react";


export default function App() {

  const [filmName, setFilmName] = useState('');

  console.log(filmName);


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Films setFilmName={setFilmName}/>}/>
          <Route path="/horarios/:filmId/:filmTitle" element={<Showtimes/>}/>
          <Route path="/assentos/:showtimeId/:weekday" element={<Seats/>}/>
          <Route path="/finalizado" element={<SuccessPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}