import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((response) => {
        if (response.data.success) {
          alert("Signup successful! Please log in.");
          localStorage.setItem("user", JSON.stringify(response.data.user));
          
        } else {
          alert("Signup failed: " + response.data.message);
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          alert("Signup failed: " + error.response.data.message);
        } else {
          alert("An error occurred during signup. Please try again.");
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100 dark:bg-slate-900">
      <div className="max-w-md w-full p-8 rounded-lg shadow-lg bg-white dark:bg-slate-800 relative">
        {/* Cross button */}
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => navigate("/")}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4 text-center dark:text-white">
          Sign Up
        </h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs mx-auto"
            {...register("fullname", { required: true })}
          />
          {errors.fullname && (
            <span className="text-red-500 text-xs mx-auto">
              This field is required
            </span>
          )}
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs mx-auto"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mx-auto">
              This field is required
            </span>
          )}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs mx-auto"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 text-xs mx-auto">
              This field is required
            </span>
          )}
          <button
            className="btn bg-black text-white w-full max-w-xs mx-auto"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Already have an account?{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("my_modal_3").showModal();
            }}
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
