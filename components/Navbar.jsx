"use client";
import "/styles/Navbar.scss";
import { Menu, Person, Search, ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;

  console.log(user);

  const [dropDownMenu, setDropDownMenu] = useState(false);
  return (
    <div className="navbar">
      <a href="/">
        <img src="/assets/logo.png" alt="logo" />
      </a>

      <div className="navbar_search">
        <input type="text" placeholder="Search..." />
        <IconButton>
          <Search sx={{ color: "red" }} />
        </IconButton>
      </div>

      <div className="navbar_right">
        {user && (
          <a href="/cart" className="cart">
            <ShoppingCart sx={{color: "green"}}/>
            Cart <span>(2)</span>
          </a>
        ) 
        
      }
        <button
          className="navbar_right_account"
          onClick={() => setDropDownMenu(!dropDownMenu)}
        >
          <Menu sx={{ color: "green" }} />
          {!user ? (
            <Person sx={{ color: "gray" }} />
          ) : (
            <img
              src={user.profileImagePath}
              alt="profile"
              style={{ objectFit: "cover ", borderRadius: "50%" }}
            />
          )}
        </button>
        {dropDownMenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link href="/login">Log in</Link>
            <Link href="/register">Register</Link>
          </div>
        )}
        {dropDownMenu && user && (
          <div className="navbar_right_accountmenu">
            <Link href="/wishlist">Wishlist</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/order">Order</Link>
            <Link href="/shop">your shop</Link>
            <Link href="/create-work">Sell your work</Link>
            <a href="/">Logout</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
