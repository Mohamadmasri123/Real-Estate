import React, { useState } from "react";
import Header from "../components/Header";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header />
      <div className="bg-white rounded-md border w-80 mx-auto">
        <div>
          <form className="flex flex-col gap-y-3 mx-10">
            <h1 className="bold-22 mt-2 ml-10">Sign Up</h1>
            <input
              onChange={handleChange}
              value={formData.firstName}
              name="firstName"
              type="text"
              placeholder="First Name"
              className="border bg-white rounded-md p-2 text-slate-900"
            />
            <input
              onChange={handleChange}
              value={formData.lastName}
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="border bg-white rounded-md p-2 text-slate-900"
            />
            <input
              onChange={handleChange}
              value={formData.email}
              name="email"
              type="email"
              placeholder="Email Address"
              className="border bg-white rounded-md p-2 text-slate-900"
            />
            <input
              onChange={handleChange}
              value={formData.password}
              name="password"
              type="password"
              placeholder="Password"
              className="border bg-white rounded-md p-2 text-slate-900"
            />
            <input
              onChange={handleChange}
              value={formData.confirmPassword}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="border bg-white rounded-md p-2 text-slate-900"
            />
            <input
              onChange={handleChange}
              type="file"
              id="image"
              name="profileImage"
              accept="image/*"
              hidden
              required
            />
            <label htmlFor="image">
              <div className="flexCenter ring-1 ring-slate-900/10 p-1 h-16 w-16 rounded">
                {formData.profileImage ? (
                  <img
                    src={URL.createObjectURL(formData.profileImage)}
                    alt="profile"
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <p className="text-slate-900">
                    <FaDownload />
                  </p>
                )}
              </div>
            </label>
            <button className="btn-secondary rounded-md">Register</button>
          </form>
        </div>
        <div className="mx-9 my-4">
          Already have an account?
          <Link to="/login" className="text-violet-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
