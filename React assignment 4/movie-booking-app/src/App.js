// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import './styles.css';
const movies = [
  {
    id: 1,
    title: "Wonka",
    image: "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
    description: "Based on the extraordinary character at the center of Charlie and the Chocolate Factory...",
    price: 14.99,
    rating: 4.5,
    duration: "116 min",
    genre: "Fantasy/Adventure"
  },
  {
    id: 2,
    title: "Aquaman",
    image: "https://image.tmdb.org/t/p/w500/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
    description: "Black Manta seeks revenge on Aquaman...",
    price: 15.99,
    rating: 4.2,
    duration: "124 min",
    genre: "Action/Adventure"
  },
  {
    id: 3,
    title: "Migration",
    image: "https://lh6.googleusercontent.com/proxy/aJVMXrRpcZk7stJNSrSarO0rtH55xOhIX97KnHlGhRG1sMhYNv8Q3nJVuaEhBvvHa5LCQQfaiMHd9uV1kkOuuqIXiTwGxLdJlBKrVBQ8cdc",
    description: "A family of ducks try to convince their overprotective father...",
    price: 13.99,
    rating: 4.3,
    duration: "92 min",
    genre: "Animation"
  },
  {
    id: 4,
    title: "Anyone But You",
    image: "https://m.media-amazon.com/images/M/MV5BMDYwY2EzMjQtNjJjMS00OThhLWE4MGEtNDI2YjAwMTE5MDI5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "Two young people who, despite their obvious chemistry...",
    price: 12.99,
    rating: 4.0,
    duration: "103 min",
    genre: "Romance/Comedy"
  }
];


function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">MovieTime</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

function MovieList() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="main-title">Now Showing</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
            <div className="movie-poster">
              <img src={movie.image} alt={movie.title} />
              <div className="movie-rating">★ {movie.rating}</div>
            </div>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p className="movie-genre">{movie.genre}</p>
              <p className="movie-duration">{movie.duration}</p>
              <div className="movie-price">${movie.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const movie = movies.find(m => m.id === parseInt(id));

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else if (selectedSeats.length < 6) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <div className="container">
      <div className="movie-details">
        <div className="movie-details-left">
          <img src={movie.image} alt={movie.title} />
        </div>
        <div className="movie-details-right">
          <h2>{movie.title}</h2>
          <p className="movie-description">{movie.description}</p>
          <div className="movie-meta">
            <span>★ {movie.rating}</span>
            <span>{movie.duration}</span>
            <span>{movie.genre}</span>
          </div>
          <p className="price-tag">Ticket Price: ${movie.price}</p>
        </div>
      </div>

      <div className="booking-section">
        <h3>Select Your Seats</h3>
        <p className="seat-instructions">Select up to 6 seats</p>
        <div className="screen">Screen</div>
        <div className="seat-grid">
          {[...Array(30)].map((_, index) => (
            <div
              key={index}
              className={`seat ${selectedSeats.includes(index) ? 'selected' : ''} 
                         ${[2, 7, 12, 17, 22, 27].includes(index) ? 'aisle' : ''}`}
              onClick={() => handleSeatClick(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="seat-info">
          <div className="seat-legend">
            <span className="seat-sample"></span> Available
            <span className="seat-sample selected"></span> Selected
          </div>
          {selectedSeats.length > 0 && (
            <div className="selected-seats-info">
              <p>Selected Seats: {selectedSeats.map(s => s + 1).join(', ')}</p>
              <p>Total: ${(selectedSeats.length * movie.price).toFixed(2)}</p>
            </div>
          )}
        </div>
        <button 
          className={`book-button ${selectedSeats.length === 0 ? 'disabled' : ''}`}
          onClick={() => selectedSeats.length && navigate('/booking')}
        >
          Continue to Booking
        </button>
      </div>
    </div>
  );
}

function BookingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    paymentMethod: 'credit'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <div className="container">
      <div className="booking-container">
        <h2>Complete Your Booking</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input
              type="tel"
              value={formData.mobile}
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              required
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="form-group">
            <label>Payment Method</label>
            <select
              value={formData.paymentMethod}
              onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
            >
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
              <option value="upi">UPI</option>
            </select>
          </div>
          <button type="submit" className="submit-button">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}

function Confirmation() {
  const bookingId = Math.random().toString(36).substr(2, 9).toUpperCase();
  
  return (
    <div className="container">
      <div className="confirmation-card">
        <div className="success-icon">✓</div>
        <h2>Booking Confirmed!</h2>
        <div className="confirmation-details">
          <p className="booking-id">Booking ID: {bookingId}</p>
          <p>Your tickets have been sent to your email</p>
          <p>Please arrive 15 minutes before showtime</p>
          <Link to="/" className="home-link">Back to Movies</Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;