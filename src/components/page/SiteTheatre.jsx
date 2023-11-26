import React, { useState } from 'react';
import SiteNavbar from './SiteNavbar';
import { Link } from 'react-router-dom';
import { theatreData } from '../data/theatre';

const SiteTheatre = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const uniqueCities = Array.from(new Set(theatreData.map(item => item.place.city)));

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

  const filteredTheatreData = theatreData.filter((item) => {
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
      <div>
        <label>
          Şehir Filtrele:
          <select value={selectedCity} onChange={(e) => filterByCity(e.target.value)}>
            <option value="">Hepsi</option>
            {uniqueCities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Min Fiyat:
          <input type="number" value={minPrice} onChange={(e) => filterByPrice(e.target.value, maxPrice)} />
        </label>
        <label>
          Max Fiyat:
          <input type="number" value={maxPrice} onChange={(e) => filterByPrice(minPrice, e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Başlangıç Tarihi:
          <input type="date" value={startDate} onChange={(e) => filterByDate(e.target.value, endDate)} />
        </label>
        <label>
          Bitiş Tarihi:
          <input type="date" value={endDate} onChange={(e) => filterByDate(startDate, e.target.value)} />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Etkinlik Adı</th>
            <th>Şehir</th>
            <th>Yer</th>
            <th>Gün</th>
            <th>Fiyat</th>
          </tr>
        </thead>
        <tbody>
          {filteredTheatreData.map((item) => (
            <tr key={item.id}>
              <td>
                <Link to={`/theatre/${item.id}`}>{item.name}</Link>
              </td>
              <td>
                <Link to={`/theatre/${item.id}`}>{item.place.city}</Link>
              </td>
              <td>
                <Link to={`/theatre/${item.id}`}>{item.place.location}</Link>
              </td>
              <td>
                <Link to={`/theatre/${item.id}`}>{formatDateString(item.date)}</Link>
              </td>
              <td>
                <Link to={`/theatre/${item.id}`}>{item.price}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SiteTheatre;

