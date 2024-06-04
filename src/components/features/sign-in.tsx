"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "../ui/button";

const SignIn = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res.error) {
      setError(res.error);
    } else {
      // Handle successful login
      window.location.href = "/";
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <br />
        <Button type="submit">Sign In</Button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignIn;
