import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';
import Sales from './components/sales';
import Admindashboard from './pages/admin-dashboard';
import ErrorPage from './pages/error-page';
import Login from './pages/login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/admindashboard'} element={<Admindashboard />}>
          {/* <Route index element={<Sales />} /> */}
          <Route path='sales' element={<Sales />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
