import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../data/data.json";
import { FaRegEyeSlash } from "react-icons/fa";
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validateUser = data.Admin.username === username && data.Admin.password === password;
    if (validateUser) {
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="bg-white">
      <div className="flex min-h-screen items-center justify-center bg-white p-4">
        <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-lg bg-white">
          <div className=" md:flex w-full md:w-1/2 flex-col justify-center p-10 rounded-l-lg">
            <h2 className="mb-4 text-5xl font-bold font-Noto text-black">
              Sign in to
            </h2>
            <p className="mb-10 text-black font-Noto font-semibold">
              Lorem Ipsum is simply
            </p>
            <p className="text-black">
              If you don't have an account Register
              <br />
              <span>you can </span>
              <Link to={"/signup"} className="text-blue-600 underline ml-1">
                Register Here!
              </Link>
            </p>
          </div>

          <div className="w-full p-10 md:w-1/2">
            <h2 className="text-3xl font-semibold text-start font-Noto text-black mb-6">
              Sign in
            </h2>

            <form className="flex flex-col space-y-6" onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Enter Email or username"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:outline-none focus:border-purple-500"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:outline-none focus:border-purple-500"
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <FaRegEyeSlash />
                </button>
              </div>
              <div className="text-end">
                <p className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </p>
              </div>
              <button
                className="w-full rounded-md bg-indigo-700 p-3 text-white font-semibold hover:bg-indigo-800"
                type="submit"
              >
                Login
              </button>

              {error && (
                <div className="mt-4 p-3 text-center bg-red-100 text-red-800 rounded-md border border-red-300">
                  <span>Wrong Credentials</span>
                </div>
              )}
            </form>

            <div className="my-6 text-center text-gray-500">
              or continue with
            </div>

            <div className="flex justify-center space-x-4">
              <button className="flex items-center justify-center rounded-full ">
                <img src="apple.png" alt="Apple" className="h-6 w-6" />
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-full">
                <img src="Google.png" alt="Google" className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute bottom-0 left-1/3 transform md:block hidden">
              <img
                src="client.png"
                alt="man"
                className="w-[313px] h-[556px] left-[612px] top-[849px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
