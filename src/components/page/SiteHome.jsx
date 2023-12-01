import React from "react";
import SiteNavbar from "./SiteNavbar";
import { useState, useEffect } from "react";
import "../css/site.css";
import { Link } from "react-router-dom";
import { musicData } from "../data/music";
import { danceData } from "../data/dance";
import { theatreData } from "../data/theatre";
import { sportData } from "../data/sport";

const EventCard = ({ eventData, eventType }) => {
  const formatDateString = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("tr-TR", options);
  };
  return (
    <div className="container">
      <div className="card" style={{ width: "16rem" }}>
        <Link to={`/${eventType}/${eventData.id}`}>
          <img
            className="picture"
            src={eventData.picture}
            alt={eventData.name}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/${eventType}/${eventData.id}`} className="text color2">
              {eventData.name}
            </Link>
          </h5>
          <p className="card-text">
            <Link to={`/${eventType}/${eventData.id}`} className="text color2">
              {eventData.place.city}
            </Link>
          </p>
          <p className="card-text">
            <Link to={`/${eventType}/${eventData.id}`} className="text color2">
              {eventData.place.location}
            </Link>
          </p>
          <p className="card-text">
            <Link to={`/${eventType}/${eventData.id}`} className="text color2">
              {formatDateString(eventData.date)}
            </Link>
          </p>
          <p className="card-text">
            <Link to={`/${eventType}/${eventData.id}`} className="text color2">
              {eventData.price} TL
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const SiteHome = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://www.biletix.com/static/images/live/spotlight/issanat-spott332899370.png",
    "https://www.biletix.com/static/images/live/spotlight/1923muzikalispotgorseli.png",
    "https://www.biletix.com/static/images/live/spotlight/keeperfestspott-391427709.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentImage]);

  const next = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectedMusic = musicData.find((music) => music.id === 1);
  const selectedDance = danceData.find((dance) => dance.id === 1);
  const selectedSport = sportData.find((dance) => dance.id === 1);
  const selectedTheatre = theatreData.find((dance) => dance.id === 1);

  return (
    <div>
      <SiteNavbar />
      <h4
        className="m-2 color2 Roboto"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Event App ile sana uygun etkinlikleri keşfet
      </h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={images[currentImage]}
          alt="slide"
          style={{
            width: "55rem",
            height: "30rem",
            marginTop: "20px",
            display: "flex",
          }}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <button
          type="button"
          onClick={prev}
          className="btn backgroundColor3 m-3"
        >
          Geri
        </button>
        <button
          type="button"
          onClick={prev}
          className="btn backgroundColor3 m-3 "
        >
          İleri
        </button>
      </div>
      <h2
        className="color2"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Popüler Etkinlikler:
      </h2>

      <div  style={{ display:'flex'}}>
        <div>
          {/* Music Event Card */}
          <EventCard eventData={selectedMusic} eventType="music" />
        </div>

        <div>
          {/* Dance Event Card */}
          <EventCard eventData={selectedDance} eventType="dance" />
        </div>
        <div>
          {/* Music Event Card */}
          <EventCard eventData={selectedSport} eventType="sport" />
        </div>
        <div>
          {/* Music Event Card */}
          <EventCard eventData={selectedTheatre} eventType="theatre" />
        </div>
      </div>
    </div>
  );
};

export default SiteHome;
