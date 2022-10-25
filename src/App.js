import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";

import NavBar from "./components/NavBar";
import Order from "./components/Order";
import Products from "./components/Products";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
import Page404 from "./components/Page404";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import("./components/About"));

// Rules

// (1) First BrowserRouter Inside That Routes And Inside That Route

// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Element />} />
//   </Routes>
// </BrowserRouter>

// (2) Any Thing related to Rect Router Should Be Done In BrowserRouter

// (3) Use Link Instead Anchor Tag And Write "to" Instead of "href"

// <Link to='/'><h3>Home</h3></Link>

// (4) You Can Also Put Link In Components

// (5) You Should Always Write Link Path In Smaller Chase There Is Not Error But It Is Convention

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback="...Loading">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="/order" element={<Order />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />}>
            <Route path=":name" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="/products" element={<Products />}>
            <Route path="product" element={<FeaturedProduct />} />
            <Route path="new" element={<NewProduct />} />
            <Route index element={<NewProduct />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
