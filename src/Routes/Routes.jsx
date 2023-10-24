import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/HomePage/Home";
import About from "../Pages/AboutPage/About";
import Services from "../Pages/ServicesPage/Services";
import Blog from "../Pages/BlogPage/Blog";
import Contact from "../Pages/ContactPage/Contact";
  
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
        }
      ]
    },
  ]);

export default router;