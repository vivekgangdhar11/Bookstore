import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthProvider"; // ✅ import useAuth

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setAuthUser } = useAuth(); // ✅ get setAuthUser from context

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((response) => {
        if (response.data.success) {
          alert("Login successful!");
          localStorage.setItem("Users", JSON.stringify(response.data.user)); // ✅ Note key name is "Users" as in AuthProvider
          setAuthUser(response.data.user); // ✅ update context state
          document.getElementById("my_modal_3").close(); // optional
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
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              type="button"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}

            <button className="btn bg-black text-white" type="submit">
              Login
            </button>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-500 hover:underline"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
