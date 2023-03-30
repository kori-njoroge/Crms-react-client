import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';
import Sales from './components/sales';
import Users from './components/users';
import Admindashboard from './pages/admin-dashboard';
import Login from './pages/login';
import ErrorPage from './pages/error-page';
import Products from './components/products';
import Reports from './components/reports';
import Account from './components/account';
import Dashboard from './components/dashboard';
import StaffDashboard from './pages/staff/staff-dashboard';
import Customers from './components/customers';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/admin'} element={<Admindashboard />}>
          <Route index element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='sales' element={<Sales />} />
          <Route path='products' element={<Products />} />
          <Route path='users' element={<Users />} />
          <Route path='reports' element={<Reports />} />
          <Route path='account' element={<Account />} />
        </Route>
        <Route path={'/staff'} element={<StaffDashboard />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='sales' element={<Sales />} />
          <Route path='products' element={<Products />} />
          <Route path='users' element={<Customers />} />
          <Route path='account' element={<Account />} />
        </Route>

        {/* </Route> */}
        <Route path='*' element={<ErrorPage />} />
      </Routes >
    </BrowserRouter >
  );
}

export default App;
