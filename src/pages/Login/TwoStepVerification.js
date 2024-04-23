import React, { useState } from "react";
import BacktoLogin from "./BacktoLogin";
import UpdatePassword from "./UpdatePassword";

function TwoStepVerification() {
  const [ShowUpdatePassword, setGoToUpdatePassword] = useState(true);

  return (
    <>
      {!ShowUpdatePassword && (
        <>
          <div className="flex flex-col items-center p-20 bg-sky-600 max-md:px-5 h-[100vh]">
            <BacktoLogin />
            <div className="flex flex-col p-12 mt-6 max-w-full bg-white rounded-3xl shadow-sm w-[400px] max-md:px-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0515c2622ed9199edf94bde5a446c72d0f096dd64c6ce9f50af8b84b945c06d4?apiKey=3ae96302e69649f5be368f89230b0596&"
                className="self-center w-full aspect-[4.17]"
              />
              <div className="mt-10 text-xl font-semibold  text-neutral-800 max-sm:mr-auto text-start">
                Two Step Verification
              </div>
              <div className="mt-2 text-base  text-zinc-700 text-opacity-80  max-sm:text-sm max-md:text-md ">
                We sent a verification code to your email. Enter the code from
                the mobile in the field below.
              </div>
              <div className="flex gap-4 mt-6">
                <div className="flex-1 shrink-0 px-3 rounded-md border border-solid border-zinc-700 border-opacity-20 h-[46px]" />
                <div className="flex-1 shrink-0 px-3 rounded-md border border-solid border-zinc-700 border-opacity-20 h-[46px]" />
                <div className="flex-1 shrink-0 px-3 rounded-md border border-solid border-zinc-700 border-opacity-20 h-[46px]" />
                <div className="flex-1 shrink-0 px-3 rounded-md border border-solid border-zinc-700 border-opacity-20 h-[46px]" />
                <div className="flex-1 shrink-0 px-3 rounded-md border border-solid border-zinc-700 border-opacity-20 h-[46px]" />
                <div className="flex-1 shrink-0 px-3 rounded-md border border-solid border-zinc-700 border-opacity-20 h-[46px]" />
              </div>
              <div className="justify-center items-center px-9 py-3 mt-4 text-base font-semibold text-white whitespace-nowrap bg-blue-900 rounded-3xl max-md:px-5 text-center">
                Submit
              </div>
              <div className="cursor-pointer self-center mt-4 text-base font-bold text-center text-sky-600">
                <span className="">Didn’t get the email?</span>
                <span className="text-sky-600 "> Resend</span>
              </div>
            </div>
          </div>
        </>
      )}

      {ShowUpdatePassword && <UpdatePassword />}
    </>
  );
}

export default TwoStepVerification;
