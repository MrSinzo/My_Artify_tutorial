"use client";

import "@styles/Register.scss";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  console.log(formData);
 const handlesubmit = async ( e) => {
  e.preventDefault()

    try {
      const registerform = new FormData()
    } catch (err) {
      console.log(err)
    }
  
 }
  return (
    <div className="register">
      <img src="/assets/register.jpg" className="register_decor" />
      <div className="register_content">
        <form className="register_content_form" _>
          <input
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <input
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleChange}
            required
          />
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile" />
            <p>Upload Profile Photo</p>
          </label>
          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="Profile Image Conatiner"
              style={{ maxWidth: "80px" }}
              onChange={handleChange}
            />
          )}
          <button type="submit">Register</button>
        </form>
        <button type="button" onClick={() => {}} className="google">
          <p>Log in With google</p>
          <FcGoogle />
        </button>
        <a href="/login">Already have an account log in here</a>
      </div>
    </div>
  );
};

export default Register;
