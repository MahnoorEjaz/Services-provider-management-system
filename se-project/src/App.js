import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" component={<Header />} />
          <Route path="/services" component={<Header />} />
        </Routes>
        <h1 style={{marginTop:'1000px'}}>dsd</h1>
      </Router>
    </>
  );
}

export default App;
