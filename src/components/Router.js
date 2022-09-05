import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer';
import Home from '../pages/Home';
import Signin from '../pages/Sign-in';
import Signup from '../pages/Sign-up';
import User from '../pages/User';
import Transactions from '../pages/Transactions';
import Error404 from '../pages/Error404';



/**
 * BrowserRouter is return by the router function and contains header, routes and footer components
 * @returns BrowserRouter with routes and components
 */
 function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/user/:userId/transactions" element={<Transactions />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;