import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/SharePage/NotFound";
import Home from "../Pages/HomePage/Home";
import About from "../Pages/AboutPage/About";
import Services from "../Pages/ServicesPage/Services";
import Blog from "../Pages/BlogPage/Blog";
import Contact from "../Pages/ContactPage/Contact";
import Login from "../Pages/LoginPage/Login";
import SignUp from "../Pages/SignUpPage/SignUp";
import CheckOut from "../Pages/CheckOutPage/CheckOut";
import BookService from "../Pages/BookServicePage/BookService";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/services",
          element: <Services></Services>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/checkout/:id",
          element: <CheckOut></CheckOut>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "/book/:id",
          element: <BookService></BookService>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

export default router;