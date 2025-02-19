import './App.css';
import Navbar from './components/Navbar';
import Container from './layout/Container';
import Booking from './pages/BookingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './layout/Content';
function App() {
  return (
    <Router>
      <header className="App-header">
        <Navbar />
      </header>

      <Container customClass="minHeight">
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route exact path="/booking" element={<Booking />} />
        </Routes>
      </Container>
    </Router>

  );
}

export default App;
