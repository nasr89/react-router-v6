import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import AdminDetails from "./components/AdminDetails";
import React from "react";
import Profile from "./components/Profile";
import { ContextProvider } from "./components/Auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
//import About from "./components/About";
const LazyLoading = React.lazy(() => import("./components/About"));

function App() {
  return (
    <Router>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={
              <React.Suspense fallback="Loading.......">
                <LazyLoading />
              </React.Suspense>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page not found</h1>} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/products" element={<Products />}>
            {/* index route byezherle bel awwal lchild lli bna22i bel element */}
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="/users" element={<Users />}>
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="/users/admin" element={<AdminDetails />} />
          </Route>
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
