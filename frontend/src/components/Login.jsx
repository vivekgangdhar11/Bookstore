import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <button className="btn bg-black text-white">Login</button>
            </form>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:underline"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              Sign up
            </Link>
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
