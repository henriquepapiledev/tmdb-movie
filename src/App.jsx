import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <h1 className="text-3xl font-bold">TMDB</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
