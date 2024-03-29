"use client";

import "@styles/Login.scss";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await before the signIn?
      const response = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
        callbackUrl: "/",
      });
      if (response.ok) {
        router.push("/");
        console.log("ok")
      }

      if (response.error) {
        setError("Invalid email or password. please try again!")
        console.log(response.error);
      }
    } catch (err) {
      console.log("here",err);
    }
  };

  const loginWithGoogle = () => {
    signIn("google", { callbackUrl: "/" });
  };
  return (
    <div className="login">
      <img src="/assets/login.jpg" alt="login" className="login_decor" />
      <div className="login_content">
        <form className="login_content_form" onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password?"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log in</button>
        </form>
        {error && <p className="error">{error}</p>}
        <button className="google" onClick={loginWithGoogle}>
          <p>Login with Google</p>
          <FcGoogle />
        </button>
        <a href="/register">Dont have an Account? Register here</a>
      </div>
    </div>
  );
};

export default Login;
