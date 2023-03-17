import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';
import Sales from './components/sales';
import Users from './components/users';
import Admindashboard from './pages/admin-dashboard';
import Login from './pages/login';
import ErrorPage from './pages/error-page';
import Products from './components/products';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/admindashboard'} element={<Admindashboard />}>
          <Route index element={<Sales />} />
          <Route path='sales' element={<Sales />} />
          <Route path='products' element={<Products />} />
          <Route path='users' element={<Users />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
