import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Navbar from './component/Navbar/index';
import Sidebar from './component/Sidebar/index';
import Dashboard from './pages/Dashboard';
import AccountsList from './pages/AccountsList';
import Inputs from './pages/Inputs';
import MoneyTransferList from './pages/MoneyTransferList';
import Home from './pages/Home';
import DepositList from './pages/DepositList';
import CashTransactions from './pages/CashTransactions';
import CreateAccount from './pages/CreateAccount'
// import BottomNavbar from './component/bottamNavbar';
import Footer from './pages/footer';
// import AccountList from './pages/AccountList';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "sidebar navbar"
    "sidebar main";
  height: 100vh;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "navbar"
      "main";
  }
`;

const MainContent = styled.main`
  grid-area: main;
  padding: 20px;
  overflow-y: auto;
`;

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <AppContainer>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <Navbar toggleSidebar={toggleSidebar} />
        <MainContent>
          <Routes>
            {/* Sidebar Routes */}
            
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/accountslist" element={<AccountsList />} />
            <Route path="/inputs" element={<Inputs />} />
            <Route path="/moneytransferlist" element={<MoneyTransferList />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            {/* Navbar Routes */}
            <Route path="/home" element={<Home />} />
            <Route path="/depositlist" element={<DepositList />} />
            <Route path="/cashtransactions" element={<CashTransactions />} />

          </Routes>
        </MainContent>
      </AppContainer>
      {/* <BottomNavbar/> */}
      <Footer/>
    </Router>
  );
}

export default App;
