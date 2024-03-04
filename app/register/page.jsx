"use client"

import "@styles/Register.scss"
import {FcGoogle} from "react-icons/fc"

const Register = () => {
  return (
    <div className="register">
      <img src="/assets/register.jpg" className="register_decor"/>
      <div className="register_content">
        <form action=" " className="register_content_form"_>
          <input placeholder="Username" name="username" required />
          <input placeholder="Emai" name="email" required />
          <input placeholder="Password" name="password" required />
          <input placeholder="Confirm Password" name="confirmPassword" required />
          <input id ="image" type="file" name="profileImage" accept="image/*" style={{display:"none"}} required />
          <label htmlFor="image"> 
            <img src="/assets/addImage.png" alt="add profile"/>
            <p>Upload Profile Photo</p>
          </label>
          <button type="submit">Register</button>
        </form>
        <button type="button" onClick={() => {}} className="google"><p>Log in With google</p>
        <FcGoogle />
        </button>
        <a href="/login">Already have an account log in here</a>
      </div>
    </div>
  )
}

export default Register