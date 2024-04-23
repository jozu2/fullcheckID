import React from "react";
import { useNavigate } from "react-router-dom";

function BacktoLogin() {
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="flex gap-2 justify-between mt-5 max-w-full font-bold text-center text-teal-400 w-[400px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dff8950984b569cc3ccca357cdf18f3e98a2567084055eb7da47c3523991cef5?apiKey=3ae96302e69649f5be368f89230b0596&"
          className="shrink-0 my-auto w-2.5 aspect-[0.63] fill-teal-400"
        />
        <div className="mr-auto cursor-pointer" onClick={redirectToLogin}>
          Back to Login
        </div>
      </div>
    </>
  );
}

export default BacktoLogin;
