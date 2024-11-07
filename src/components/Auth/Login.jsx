import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="outline-none focus:border-white bg-transparent text-lg mt-4 border-2 border-emerald-600 rounded-full px-6 py-2 placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email id"
          ></input>

          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="outline-none focus:border-white bg-transparent text-lg mt-5  border-2 border-emerald-600 rounded-full px-6 py-2 placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          ></input>

          <button
            type="submit"
            className="transition ease-in-out delay-100 bg-emerald-500 rounded-full hover:scale-110 hover:bg-emerald-400 duration-300 px-6 py-2 w-full mt-6 mb-5 text-lg"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
