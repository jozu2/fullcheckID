import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const mainImg =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/99c9dc240f95f80cf1424e3bb59bd07f47a8e44bc410ebb22d04097c5542b560?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c9dc240f95f80cf1424e3bb59bd07f47a8e44bc410ebb22d04097c5542b560?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c9dc240f95f80cf1424e3bb59bd07f47a8e44bc410ebb22d04097c5542b560?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c9dc240f95f80cf1424e3bb59bd07f47a8e44bc410ebb22d04097c5542b560?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c9dc240f95f80cf1424e3bb59bd07f47a8e44bc410ebb22d04097c5542b560?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c9dc240f95f80cf1424e3bb59bd07f47a8e44bc410ebb22d04097c5542b560?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c9dc240f95f80cf1424e3bb59bd07f47a8e44bc410ebb22d04097c5542b560?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c9dc240f95f80cf1424e3bb59bd07f47a8e44bc410ebb22d04097c5542b560?apiKey=3ae96302e69649f5be368f89230b0596&";
  const logoImg =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/0fa4a55e76d2b3d29c123fbc8cb288186f69c33a12fe61eff618d75a8254a6c4?apiKey=3ae96302e69649f5be368f89230b0596&";

  const navigate = useNavigate();
  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };
  const handleSignUp = () => {
    navigate("/registration");
  };
  return (
    <div className="main-container h-[100vh]  bg-sky-600">
      <div className="flex justify-center items-center px-18 max-md:py-10 py-6 bg-sky-600 max-md:px-3 max-sm:px-2.5 max-lg:px-2.5  max-sm:h-auto">
        <div className="mt-5 w-full rounded-3xl shadow-lg max-w-[1100px] max-md:max-w-full">
          {/* container */}
          <div className="flex max-md:flex-col max-md:gap-0">
            {/* login image */}
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full ">
              <img
                loading="lazy"
                srcSet={mainImg}
                className="grow w-full max-sm:aspect-[1] max-md:aspect-[1.07] max-lg:aspect-[.8] max-md:max-w-full max-md:rounded-tr-[23px] max-md:rounded-tl-[23px] min-[768px]:rounded-bl-[25px] rounded-tl-[25px]"
              />
            </div>

            {/* Login Form */}
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full ">
              <div className="flex flex-col grow self-stretch px-12 py-12  w-full max-sm:py-6 rounded-br-[25px] min-[768px]:rounded-tr-[25px]  text-base bg-white max-md:px-5 max-md:max-w-full max-md:rounded-bl-[23px] max-md:rounded-br-[23px]">
                <img
                  loading="lazy"
                  src={logoImg}
                  className="self-center max-w-full aspect-[3.85] w-[282px]"
                />

                <NavLink
                  to="/"
                  className="flex gap-1 px-2 mt-8 font-semibold text-sky-600 justify-center items-center cursor-pointer"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/427a6dfb50348309db0c360c9956276b741614a052067d396517a639612574c7?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="shrink-0 self-start w-2.5 aspect-[0.63] fill-sky-600 m-auto "
                  />
                  <div className="flex-1">Back to Homepage</div>
                </NavLink>
                <div className="mt-6 text-xl font-bold text-neutral-600">
                  Welcome to Full ID Check
                </div>
                <div className="mt-4 max-sm:mt-1 text-neutral-600">
                  Log in to your account by filling in the details below.
                </div>
                <div className="justify-center items-start px-4 py-3 mt-4 rounded-xl border border-solid border-neutral-300 leading-[121%] text-stone-300 max-md:pr-5">
                  Full name
                </div>
                <div className="flex flex-col justify-center px-5 py-2.5 mt-4 text-base leading-5 whitespace-nowrap rounded-xl border border-solid border-neutral-300 text-neutral-600">
                  <div className="flex gap-2.5 justify-between">
                    <div>••••••</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbc696b402762f0418e6fe14d8ed8ac4f8d225aeacadbf546675c9fc487125ec?apiKey=3ae96302e69649f5be368f89230b0596&"
                      className="shrink-0 aspect-[1.11] fill-stone-300 w-[21px] cursor-pointer"
                    />
                  </div>
                </div>
                <div className="justify-center items-center px-9 py-3 mt-4 text-base font-semibold text-white whitespace-nowrap bg-blue-900 rounded-2xl max-md:px-5 text-center cursor-pointer">
                  Login
                </div>
                <div
                  onClick={handleSignUp}
                  className="mt-4 text-sm text-center text-teal-400 cursor-pointer"
                >
                  Don’t have an account?
                  <span className="font-bold text-teal-400">Sign-up</span>
                </div>
                <div
                  className="justify-center items-center self-center px-16 py-0.5 mt-4 max-w-full text-sm text-center text-black text-opacity-80 w-[248px] max-md:px-5 max-sm:pb-10 cursor-pointer"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
