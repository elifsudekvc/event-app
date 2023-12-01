import React, { useState } from 'react';
import SiteNavbar from './SiteNavbar';
import { Link } from 'react-router-dom';
import { sportData } from '../data/sport';

const SiteSport = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const uniqueCities = Array.from(new Set(sportData.map(item => item.place.city)));

  const filterByCity = (city) => {
    setSelectedCity(city);
  };

  const filterByPrice = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const filterByDate = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };
  const formatDateString = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  const filteredSportData = sportData.filter((item) => {
    const cityFilter = !selectedCity || item.place.city === selectedCity;
    const minPriceFilter = !minPrice || item.price >= parseFloat(minPrice);
    const maxPriceFilter = !maxPrice || item.price <= parseFloat(maxPrice);
    const startDateFilter = !startDate || new Date(item.date) >= new Date(startDate + 'T00:00:00Z');
    const endDateFilter = !endDate || new Date(item.date) <= new Date(endDate + 'T23:59:59Z');

    return cityFilter && minPriceFilter && maxPriceFilter && startDateFilter && endDateFilter;
  });

  return (
    <div>
    <SiteNavbar></SiteNavbar>
    <div className="filtreleme">
      <div className="sehirFiltre">
        <label>
          Şehir Filtrele:
          <select
            className="form-select"
            value={selectedCity}
            onChange={(e) => filterByCity(e.target.value)}
          >
            <option value="">Hepsi</option>
            {uniqueCities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="fiyatFiltre">
        <label>
          Min Fiyat:
          <input
            className="form-select"
            type="number"
            value={minPrice}
            onChange={(e) => filterByPrice(e.target.value, maxPrice)}
          />
        </label>
        <label>
          Max Fiyat:
          <input
            className="form-select"
            type="number"
            value={maxPrice}
            onChange={(e) => filterByPrice(minPrice, e.target.value)}
          />
        </label>
      </div>
      <div className="tarihFiltre">
        <label>
          Başlangıç Tarihi:
          <input
            className="form-select"
            type="date"
            value={startDate}
            onChange={(e) => filterByDate(e.target.value, endDate)}
          />
        </label>
        <label>
          Bitiş Tarihi:
          <input
            className="form-select"
            type="date"
            value={endDate}
            onChange={(e) => filterByDate(startDate, e.target.value)}
          />
        </label>
      </div>
    </div>
    <div className="d-flex flex-wrap justify-content-evenly ">
      {filteredSportData.map((item) => (
        <div className="card" style={{ width: "18rem" }}>
            <Link to={`/sport/${item.id}`} >
              <img className='picture' src={item.picture} alt={item.name} />
              </Link>
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/sport/${item.id}`} className="text color2" >{item.name}</Link>
            </h5>
            <p className="card-text">
              <Link to={`/sport/${item.id}`} className="text color2">{item.place.city}</Link>
            </p>
            <p className="card-text">
              <Link to={`/sport/${item.id}`} className="text color2">{item.place.location}</Link>
            </p>
            <p className="card-text">
              <Link to={`/sport/${item.id}`} className="text color2">
                {formatDateString(item.date)}
              </Link>
            </p>
            <p className="card-text">
              <Link to={`/sport/${item.id}`} className="text color2">{item.price} TL</Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default SiteSport;

