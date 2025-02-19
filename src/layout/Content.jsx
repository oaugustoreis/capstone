
import Products from '../components/Products';
import Banner from '../components/Banner';
import Ratings from '../components/Ratings';
import About from '../components/About';
import Footer from '../components/Footer';
export default function Content() {
    return (
        <div className="App">
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
                        <About />
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}