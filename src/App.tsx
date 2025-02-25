import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />

      <main className='main-content'>
        <div className="wrapper">
          <Home />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
