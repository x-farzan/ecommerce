import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { signup, login } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let result = null;
    mode == "login"
      ? (result = login(data.email, data.password))
      : (result = signup(data.email, data.password));

    if (!result.success) {
      setError(result.message);
    } else {
      setError(null);
      setSuccess("Authentication successful!");
      navigate("/");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        {mode == "login" ? "Login" : "Signup"}
      </h1>
      <form
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && (
          <div className="text-sm bg-red-100 p-3 text-center">{error}</div>
        )}
        {success && (
          <div className="text-sm bg-green-100 p-3 text-center">{success}</div>
        )}
        <div className="mb-4"></div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email.message}</p>
        )}
        <div className="mb-4"></div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            maxLength: {
              value: 12,
              message: "Password must be less than 12 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic">
            {errors.password.message}
          </p>
        )}
        <div className="mb-10"></div>
        <button type="submit" className="btn btn-primary">
          {mode == "login" ? "Login" : "Signup"}
        </button>
        <div className="mb-4"></div>
        {mode == "login" ? (
          <p className="text-sm flex justify-center items-center">
            Don't you have an account?{" "}
            <span
              className="text-blue-500 hover:text-blue-700 cursor-pointer"
              onClick={() => {
                setMode("signup");
                setError(null);
              }}
            >
              Signup
            </span>
          </p>
        ) : (
          <p className="text-sm flex justify-center items-center">
            Already have an account?{" "}
            <span
              className="text-blue-500 hover:text-blue-700 cursor-pointer"
              onClick={() => {
                setMode("login");
                setError(null);
              }}
            >
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Auth;
