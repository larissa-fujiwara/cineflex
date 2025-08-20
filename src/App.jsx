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
  const [buyerData, setBuyerData] = useState({});
  const [seatsInfo, setSeatsInfo] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Films setFilmName={setFilmName}/>}/>
          <Route path="/horarios/:filmId/:filmTitle" element={<Showtimes setShowtime={setShowtime}/>}/>
          <Route path="/assentos/:showtimeId/:weekday" element={<Seats setBuyerData={setBuyerData} setSeatsInfo={setSeatsInfo}/>}/>
          <Route path="/finalizado" element={<SuccessPage 
          filmName={filmName}
          setFilmName={setFilmName}
          showtime={showtime}
          setShowtime={setShowtime}
          buyerData={buyerData}
          setBuyerData={setBuyerData}
          seatsInfo={seatsInfo}
          setSeatsInfo={setSeatsInfo}
          />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}