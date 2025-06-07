import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';
import   ProfilePhotoSelector  from '../../components/Inputs/ProfilePhotoSelector';
import { Link } from 'react-router-dom';
const Signup = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!fullName) {
      setError("Please enter full name.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return; 
    }

  

    setError("");

    console.log("Signup success!", { fullName, email, password });
  
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 mb-2 ">
      <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center  '>
        <h3 className='text-lg font-semibold text-black mt-8'>Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignUp}>

          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className='grid grid-cols-1 gap-2'>
            <Input
              value={fullName}
              onChange={({ target }) => {
                setFullName(target.value);
                setError(null);
              }}
              label="Full Name:"
              placeholder="lia"
              type="text"
            />

            <Input
            
              value={email}
              onChange={({ target }) => {
                setEmail(target.value);
                setError(null);}}
              label="Email Address"
              placeholder="lia@example.com"
              type="text"
            />

            <Input
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
                setError(null); }}
              label="Password"
              placeholder="Min 8 Characters"
              type="password"
            />
          </div>

          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

          <button type="submit" className='btn-primary mt-4 w-full'>SIGN UP</button>

      <p className='text-[13px] text-slate-800 mt-3'>
  Already have an account?{" "}
  <button
    className='font-medium text-primary underline cursor-pointer'
    type="button"
    onClick={() => {
      console.log("Navigating to login");
      navigate("/login");
    }}
  >
    Login
  </button>
</p>

        </form>
      </div>
    </div>
  );
};

export default Signup;
