import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClintComplete from './Component/Clint/Clint_Complete';
import HeaderClint from './Component/Clint/Clint';
import GigView from './Component/Clint/Gig_View';
import AddNewService from './Component/Saller/AddNewService';
import CompleteLanding from './Component/Home/CompleteLanding';
import { ViewProfile } from './Component/Saller/ViewProfile';
import PlaceOrder from './Component/Clint/PlaceOrder';
import SallerDashboard from './Component/Saller/SallerDashboard';
import OrderSelecter from './Component/Saller/OrderSelecter';
import MapContainer from './Component/Saller/ViewMap';
import TestingCard from './Component/Saller/textingCard';
import ReactLoading from 'react-loading';

import './App.css'; // Import your styles

export const AppContext = createContext();

function App() {
  const emptyData = {
    url: [],
    title: '',
    Rating: 0,
    Price: 0,
    Orders: 0,
    Name: '',
    type: ''
  };

  const [loading, setLoading] = useState(true); // Loading state
  const [Current_Service, Set_Current_Service] = useState(emptyData);
  const [HomeHeader, SetHomeHeader] = useState(false);
  const [UserToken, SetUserToken] = useState('');

  useEffect(() => {
    // Simulate loading delay (replace this with actual data fetching logic)
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      {loading && (
        <div className="page-container-App">
          <ReactLoading
            type="bars"
            color="rgba(29, 191, 115, 1)"
            height={50}
            width={50}
          />
        </div>
      )}
      {!loading && (
        <AppContext.Provider value={{ Current_Service, Set_Current_Service, HomeHeader, SetHomeHeader }}>
          <ToastContainer />
          <Router>
            {HomeHeader ? <HeaderClint /> : <HeaderClint />}
            <Routes>
              <Route path="/login" element={<CompleteLanding />} />
              <Route path="/ViewAllServices" element={<ClintComplete />} />
              <Route path="/AddNewService" element={<AddNewService />} />
              <Route path="/ViewProfile" element={<ViewProfile />} />
              <Route path="/AddNewService" element={<AddNewService />} />
              <Route path="/Current-Saller" element={<GigView />} />
              <Route path="/PlaceOrder" element={<PlaceOrder />} /> 
          
              <Route path="/ViewMap" element={<MapContainer />} />
              <Route path="/TestingCard" element={<TestingCard />} />
            
              {/* Open New table  */}
              <Route path="/SallerDashboard" element={<SallerDashboard />} />
              <Route path="/OrderSelecter" element={<OrderSelecter />} />

            </Routes>
          </Router>
        </AppContext.Provider>
      )}

    </>
  );
}

export default App;
