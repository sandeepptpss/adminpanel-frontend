import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from '../components/Nav';
import NoPage from '../pages/NoPage';
import Home from '../pages/Home';
import Dashboard from '../components/Dashboard';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import ResetPassword from '../components/ResetPasswordPage';
import ForgotPasswordPage from '../components/ForgotPassword';
import Footer from '../components/Footer';
import ProtectedRoute from '../components/ProtectedRoute';
import Products from '../components/Products';

import Blog from '../components/blog';
import AboutUs from '../components/About';
import BlogDetails from '../components/blogDetails';
import UserProfile from '../components/UserProfile';
import MyCalendar from '../components/Calendar';


const NavLayout = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/admin/dashbord');
  return (
    <>
    {!isDashboardRoute && <Nav />}
    </>
  )
}
const FooterLayout = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/admin/dashbord');
  return(
    <>
    {!isDashboardRoute && <Footer />}
    </>
  );
};
const Router = () =>{
  return (
    <BrowserRouter>
      <NavLayout />
      <Routes>
        <Route path="/" element={ <ProtectedRoute> <Home/></ProtectedRoute>}/>
          <Route path="/profile" element={<UserProfile />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<ProtectedRoute><AboutUs/></ProtectedRoute>}/>
        <Route path="/blog" element={<ProtectedRoute><Blog/></ProtectedRoute>}/>
        <Route path="/blog-details/:id" element={<ProtectedRoute><BlogDetails/></ProtectedRoute>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={['admin']}><Dashboard /></ProtectedRoute>} />
        <Route path="/profile/:id" element={<UserProfile />} />
        
      </Routes>
      <FooterLayout />
    </BrowserRouter>
  );
};
export default Router;
