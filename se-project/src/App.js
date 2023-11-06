import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClintComplete from './Component/Clint/Clint_Complete';
import { useState, createContext } from 'react';
import HeaderClint from './Component/Clint/Clint';
import GigView from './Component/Clint/Gig_View';
import AddNewService from './Component/Saller/AddNewService';
import CompleteLanding from './Component/Home/CompleteLanding';
import SignIn from './Component/Login/Singin';
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
  const [Current_Service, Set_Current_Service] = useState(emptyData);
  const [HomeHeader, SetHomeHeader] = useState(false);
  const [UserToken , SetUserToken] = useState('');
  return (
    <> 
      <AppContext.Provider value={{ Current_Service, Set_Current_Service ,HomeHeader, SetHomeHeader}} > 
        <Router>
          {
            HomeHeader ?  <HeaderClint /> :<CompleteLanding />  
          }
          <Routes>
            {/* <Route path="/ClientHome" element={<ClintComplete />} /> */}
            <Route path="/ClientHome" element={<AddNewService />} />
            <Route path="/AddNewService" element={<AddNewService />} /> 
            <Route path="/Current-Saller" element={<GigView Current_Service={Current_Service} />} />
          </Routes> 
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
