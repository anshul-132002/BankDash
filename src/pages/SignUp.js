import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    const newUser = { email, username, contactNumber, password };
    try {
      const response = await axios.post("http://localhost:3001/users", newUser);
      //!! throws error 
      navigate("/");
      return response;
    } catch (error) {
      setError("Please try again.");
    }
  };

  return (
    <div className="bg-white">
      <div className="flex min-h-screen items-center justify-center bg-white p-4">
        <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-lg bg-white">
          <div className=" md:flex w-full md:w-1/2 flex-col justify-center p-10 rounded-l-lg">
            <h2 className="mb-4 text-5xl font-bold font-Noto text-black">Sign Up to</h2>
            <p className="mb-10 text-black font-Noto font-semibold">
              Lorem Ipsum is simply
            </p>
            <p className="text-black">
              Already have an account? <br />
              <span>you can </span>
              <Link to={"/"} className="text-blue-600 underline ml-1">
                Login Here!
              </Link>
            </p>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full p-10 md:w-1/2">
            <h2 className="text-3xl font-semibold text-start mb-6 text-black">Sign Up</h2>

            <form className="flex flex-col space-y-6" onSubmit={handleSignUp}>
              <input
                type="email"
                required
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                placeholder="Create Username"
                required
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                placeholder="Contact Number"
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:outline-none focus:border-purple-500"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
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
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:outline-none focus:border-purple-500"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <FaRegEyeSlash />
                </button>
              </div>

              {error && (
                <div className="mt-4 p-3 text-center bg-red-100 text-red-800 rounded-md border border-red-300">
                  {error}
                </div>
              )}
              <button
                className="w-full rounded-md bg-indigo-700 p-3 text-white font-semibold hover:bg-indigo-800"
                type="submit"
              >
                Register
              </button>
            </form>

            <div className="my-6 text-center text-gray-500">or continue with</div>

            <div className="flex justify-center space-x-4">
              <button className="flex items-center justify-center rounded-full">
                <img src="apple.png" alt="Apple" className="h-6 w-6" />
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-full">
                <img src="Google.png" alt="Google" className="h-6 w-6" />
              </button>
            </div>

            {/* Hide image on smaller screens */}
            <div className="hidden md:block absolute bottom-0 left-1/3 transform">
              <img
                src="client.png"
                alt="man"
                className="w-[313px] h-[556px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
