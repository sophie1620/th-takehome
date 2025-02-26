import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="wrapper">
          <Home />
        </div>
      </main>
    </>
  )
}

export default App
