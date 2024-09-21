import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../context/auth';
import toast from "react-hot-toast"
import SearchInput from '../Form/SearchInput';
import useCategory from '../../hooks/useCategory';
import { useCart } from '../../context/cart';
import { HiShoppingBag } from "react-icons/hi2";
import { Badge } from 'antd';

export default function Header() {

  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [cart] = useCart();
  const handleLogout = () => {
    setAuth({
      ...auth, user: null, token: '',
    });
    localStorage.removeItem("auth");
    toast.success('Logout Successfully');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse nav_bar" id="navbarTogglerDemo01">
            <Link to={"/"} className="navbar-brand"><HiShoppingBag size={25} /> EcoMart</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  navbar_items_l">
              <SearchInput />
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link" >Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to={"/categories"} data-bs-toggle="dropdown">
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>All Categories</Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link className="dropdown-item" to={`/category/${c.slug}`}>{c.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to={"/register"} className="nav-link" >Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/login"} className="nav-link" >Login</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" href="*" role="button" data-bs-toggle="dropdown" style={{ border: "none" }}>
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li><NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="dropdown-item">Dashboard</NavLink></li>
                      <li><NavLink onClick={handleLogout} to={"/login"} className="dropdown-item">Logout</NavLink></li>
                    </ul>
                  </li>
                </>
              )

              }
              <li className="nav-item nav_cart">
                <Badge count={cart?.length} showZero offset={[4, 4]}>
                  <NavLink to={"/cart"} className="nav-link" >Cart</NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
