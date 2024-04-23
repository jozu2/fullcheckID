import React, { useState } from "react";
import TwoStepVerification from "./TwoStepVerification";
import BacktoLogin from "./BacktoLogin";
function ForgotPass() {
  const [showVerifyCode, setShowVerifyCode] = useState(false);

  const handleSendEmailBtn = () => {
    setShowVerifyCode(true);
  };

  return (
    <>
      {!showVerifyCode && (
        <>
          <div className="flex flex-col items-center p-20 text-base bg-sky-600 max-md:px-5 h-[100vh]">
            <BacktoLogin />
            <div className="flex flex-col p-12 mt-6 max-w-full font-semibold bg-white rounded-3xl shadow-sm w-[400px] max-md:px-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f66e9bd8f770a50a70d95ce8488b59d511fe1eadb3decf9a7a38ca33dd8ecbab?apiKey=3ae96302e69649f5be368f89230b0596&"
                className="self-center w-full aspect-[4.17]"
              />
              <div className="mt-10 mr-auto text-xl text-center text-neutral-800 max-sm:mr-auto max-md:text-xl">
                Forgot Password
              </div>
              <div className="mt-2 text-zinc-700 text-opacity-80 max-sm:mx-auto  max-sm:text-sm max-md:text-md text-sm">
                Enter your email and we’ll send you instructions to reset your
                password
              </div>
              <div className="justify-center items-start p-2.5 mt-6 whitespace-nowrap rounded-xl border border-solid border-neutral-300 leading-[121%] text-stone-300 max-md:pr-5">
                Email
              </div>
              <div
                className="cursor-pointer justify-center items-center px-9 py-3 mt-4 text-base text-white bg-blue-900 rounded-2xl max-md:px-5 text-center"
                onClick={handleSendEmailBtn}
              >
                Send to Email
              </div>
              <div className="cursor-pointer self-center mt-4 text-base font-bold text-center text-sky-600">
                <span className="">Didn’t get the email?</span>
                <span className="text-sky-600 "> Resend</span>
              </div>
            </div>
          </div>
        </>
      )}
      {showVerifyCode && (
        <>
          <TwoStepVerification />
        </>
      )}
    </>
  );
}

export default ForgotPass;
