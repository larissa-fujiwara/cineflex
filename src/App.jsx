import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SuccessPage from "./components/SuccessPage";
import Films from "./components/filmSection/Films";
import Showtimes from "./components/scheduleSection/Showtimes";
import Seats from "./components/seatSection/Seats";
import { useState } from "react";


export default function App() {

  const [filmName, setFilmName] = useState('');
  const [showtime, setShowtime] = useState({});
  const [bookInfo, setBookInfo] = useState({});


  console.log(`Console.log no App': ${filmName}, ${showtime.date}, ${showtime.time}`);
  console.log(`Console.log no App: ${bookInfo.name}`);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Films setFilmName={setFilmName}/>}/>
          <Route path="/horarios/:filmId/:filmTitle" element={<Showtimes setShowtime={setShowtime}/>}/>
          <Route path="/assentos/:showtimeId/:weekday" element={<Seats setBookInfo={setBookInfo}/>}/>
          <Route path="/finalizado" element={<SuccessPage filmName={filmName} showtime={showtime} bookInfo={bookInfo}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}