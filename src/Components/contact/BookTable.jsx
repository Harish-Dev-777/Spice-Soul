import React, { useRef, useState } from "react";
import "../../Styles/BookTable.css";
import useGSAP from "../../hooks/useGSAP";
import gsap from "gsap";

const BookTable = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    tl.from(".form-header h2", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(".form-header p", {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, "-=0.6")
    .from(".booking-form", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4");

  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Table Booked:", formData);
    alert("Thank you! Your table has been requested.");
  };

  return (
    <section className="book-table-section" ref={containerRef}>
      <div className="form-container">
        <div className="form-header">
          <h2>Reserve Your Table</h2>
          <p>Join us for an unforgettable dining experience</p>
        </div>
        
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="name">Full Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="date">Date</label>
            </div>

            <div className="form-group">
              <input
                type="time"
                name="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="time">Time</label>
            </div>
          </div>

          <div className="form-group">
            <input
              type="number"
              name="guests"
              id="guests"
              min="1"
              max="20"
              value={formData.guests}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="guests">Number of Guests</label>
          </div>

          <button type="submit" className="submit-btn">
            Request Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookTable;
