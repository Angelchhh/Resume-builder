import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);


  const navigation = useNavigate();

  // handle login 
  const handleLogin = async (e) => { 
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid Email Address.");
      return;
    }
    if(!password) {
      setError("Please enter the password");
      return;
    }
    // login api call
    try{
       setLoading(true);
       
    } catch (error) {
      setError("Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=' w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
      <h3 className='text-lg font-bold text-black'>
Welcome Back
</h3>
<p className='text-sm text-slate-700 mt-[5px] mb-6'>
  Please enter your detail to login
   </p>
      <form onSubmit={handleLogin} className='text-2xl'>
        <Input className=''
          value={email}
          onChange={({target}) => setEmail(target.value)}
          label="Email Address"
          placeholder="lia@example.com"
          type="text"/>

           <Input
          value={password}
          onChange={({target}) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 Characters"
          type="password"/>

        {error && (<p className='text-red-500 text-xs pb-2.5 '>
          {error}
        </p>) }

        <button type="submit" className='btn-primary 'disabled={loading}>
            {loading ? "Logging in..." : "LOGIN"}
        </button>
        <p className='text-[13px] text-slate-800 -3'>
          Don't have an account?{" "}
          <button
          className='font-medium text-primary underline cursor-pointer mt-3'
          onclick={() => {
            setCurrentPage("SignUp");
          }}
        >
          SignUp
          </button>
</p>
      </form>
      
    </div>
  );
};

export default Login;
