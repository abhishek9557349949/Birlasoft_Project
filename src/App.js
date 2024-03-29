import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginAndSignup from './Components/LoginAndSignup/LoginAndSignup.jsx';
import OwnerLandingPage from './Components/OwnerLandingPage/OwnerLandingPage.jsx';
import ExicutiveLandingPage from './Components/ExicutiveLandingPage/ExicutiveLandingPage.jsx';
import AccountantLoginPage from './Components/AccountLoginPage/AccountantLoginPage.jsx';
import ManagerLandingPage from './Components/ManagerLandingPage/ManagerLandingPage.jsx';
import ExploreFeatures from './Components/ExploreFeatures/ExploreFeatures.jsx';
import ManageBills from './Components/ManageBills/ManageBills.jsx';
import CheckGst from './Components/CheckGst/CheckGST.jsx';
import Check_Inventory from './Components/Check_Inventory/Check_Inventory.jsx';
import Manage_Business from './Components/Manage_Business/Manage_Business.jsx';
import GenerateBill from './Components/GenerateBill/GenerateBill.jsx';
import AddItems from './Components/Check_Inventory/AddItems.jsx';
import UpdateProduct from './Components/Check_Inventory/UpdateProduct.jsx';

function App() {
  return (
    <div>
      <Router>
      <Routes>

        <Route path="/" element={<LoginAndSignup />} />
        <Route path="/add" element={<AddItems/>} />
        <Route path="/update" element={<UpdateProduct/>} />
        <Route path="/owner-home" element={<OwnerLandingPage />} />
        <Route path="/mgr-home" element={<ManagerLandingPage />} />
        <Route path="/acc-home" element={<AccountantLoginPage />} />
        <Route path="/exc-home" element={<ExicutiveLandingPage />} />
        <Route path="/explore-features" element={<ExploreFeatures />} />
        <Route path="/manage-bills" element={<ManageBills />} />
        <Route path="/gst" element={<CheckGst />} />
        <Route path="/Check_Inventory" element={<Check_Inventory />} />
        <Route path="/Manage_Business" element={<Manage_Business />} />
        <Route path="/generate-bill" element={<GenerateBill />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
