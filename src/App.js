import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Banner from './components/Banner';
import Ratings from './components/Ratings';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <section>
          <div>
            <Banner />
          </div>
        </section>
        <section>
          <div>
            <Products />
          </div>
        </section>
        <section>
          <div>
            <Ratings />
          </div>
        </section>
        <section>
          <div>
          <About/>
          </div>
        </section>
      </main>
      <footer>
       <Footer/>
      </footer>
    </div>
  );
}

export default App;
