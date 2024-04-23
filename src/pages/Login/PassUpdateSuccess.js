import React from "react";
import { useNavigate } from "react-router-dom";

function PassUpdateSuccess() {
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="flex flex-col justify-center px-12 py-10 mx-auto mt-32 bg-white rounded-3xl shadow-2xl max-w-[502px] max-md:px-5">
        <div className="flex gap-2 justify-center px-10 max-md:px-5">
          <div className="flex justify-center items-center p-2.5 w-6 h-6 bg-blue-900 border border-blue-900 border-solid rounded-[100px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46904541822cd6bb3eb2714269186ffec81fdcaa8ea981371231fbf8f4af2154?apiKey=3ae96302e69649f5be368f89230b0596&"
              className="w-6 aspect-square"
            />
          </div>
          <div className="text-lg font-bold text-blue-900">
            Your password has been updated
          </div>
        </div>
        <div className="mt-4 text-sm leading-5 text-black">
          For security purposes we’ve sent an email to your account confirming
          this change.
        </div>
        <div
          className="cursor-pointer text-center justify-center items-center self-center px-9 py-3 mt-8 w-full text-base font-semibold text-white whitespace-nowrap bg-blue-900 rounded-2xl max-w-[371px] max-md:px-5"
          onClick={redirectToLogin}
        >
          Login
        </div>
      </div>
    </>
  );
}

export default PassUpdateSuccess;
