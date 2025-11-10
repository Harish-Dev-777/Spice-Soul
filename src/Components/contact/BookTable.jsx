import React from "react";
import "../../Styles/BookTable.css";

const BookTable = () => {
  return (
    <section className="book-section">
      <div className="book-content">
        <h1>Book a Table</h1>
        <p>
          Reserve your table online for an unforgettable{" "}
          <span>Spice & Soul</span> dining experience.
        </p>
      </div>

      <form className="book-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" />
          </div>
          <div className="form-group">
            <label htmlFor="guestsCount">Guests</label>
            <input type="number" id="guestsCount" name="guestsCount" placeholder="2" min="1" />
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
