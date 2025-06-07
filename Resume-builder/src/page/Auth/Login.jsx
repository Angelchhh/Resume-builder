import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid Email Address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    // Simulated login API call
    try {
      setLoading(true);
      // await login logic here...
    } catch (error) {
      setError("Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 pb-4">
          <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center  '>
      <h3 className="text-lg font-bold text-black">Welcome Back</h3>
      <p className="text-sm text-slate-700 mt-[5px] mb-6">
        Please enter your details to login
      </p>

      <form onSubmit={handleLogin} className="text-2xl ">
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="lia@example.com"
          type="text"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 Characters"
          type="password"
        />
        

        {error && (
          <p className="text-red-500 text-xs mt-1">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="btn-primary mt-4 bg-cyan-700 hover:bg-cyan-950"
          disabled={loading}
        >
          {loading ? "Logging in..." : "LOGIN"}
        </button>

        <p className="text-[13px] text-slate-800 mt-7">
          Don't have an account?{" "}
          <button
            type="button"
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Login;
