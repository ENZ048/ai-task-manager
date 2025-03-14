import React from "react";

export default function LoginSignup() {
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <form className="w-150 h-[50vh] bg-gray-100 rounded flex flex-col justiy-center items-center">
        <input
          type="text"
          placeholder="Username"
        //   onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
        //   onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
        //   onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">Sign Up</button>
      </form>
    </div>
  );
}
