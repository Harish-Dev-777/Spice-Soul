import React from "react";
import "../../Styles/BookTable.css";

import { useState } from "react";
import axios from "axios";

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guestsCount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/book", formData);
      alert("✅ Table booked successfully!");
      setFormData({ name: "", date: "", time: "", guestsCount: "" });
    } catch (error) {
      alert("❌ Booking failed, try again!");
      console.log(error);
    }
  };

  return (
    <section className="book-section">
      <div className="book-content">
        <h1>Book a Table</h1>
        <p>
          Reserve your table at <span>Spice & Soul</span> for a perfect dining
          experience.
        </p>
      </div>

      <form className="book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Guests</label>
            <input
              type="number"
              name="guestsCount"
              value={formData.guestsCount}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="book-btn">
          Book Now
        </button>
      </form>
    </section>
  );
};

export default BookTable;
