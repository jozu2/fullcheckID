import React, { useState } from "react";
import BacktoLogin from "./BacktoLogin";
import PassUpdateSuccess from "./PassUpdateSuccess";

function UpdatePassword() {
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const handleUpdatePassword = () => {
    setUpdateSuccess(true);
  };
  return (
    <>
      {!updateSuccess && (
        <div className="flex flex-col items-center px-20 py-16 bg-sky-600 max-md:px-5 h-[100vh]">
          <BacktoLogin />
          <div className="flex flex-col p-12 mt-6 max-w-full text-sm bg-white rounded-3xl shadow-sm text-zinc-600 w-[420px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9246731a30a25c33df9fcb23d2d86a1c5470b5117cb16633726554b18ba3f1bd?apiKey=3ae96302e69649f5be368f89230b0596&"
              className="self-center max-w-full aspect-[3.85] w-[282px]"
            />
            <div className="mt-8 mr-auto text-xl font-semibold text-center text-neutral-800 max-sm:mr-auto">
              Reset Password
            </div>
            <div className="mt-2 text-base text-zinc-700 text-opacity-80">
              Enter your new password
            </div>
            <div className="flex flex-col justify-center px-5 py-2.5 mt-4 text-base leading-5 whitespace-nowrap rounded-xl border border-solid border-neutral-300 text-neutral-600">
              <div className="flex gap-2.5 justify-between">
                <div>••••••</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbc696b402762f0418e6fe14d8ed8ac4f8d225aeacadbf546675c9fc487125ec?apiKey=3ae96302e69649f5be368f89230b0596&"
                  className="shrink-0 aspect-[1.11] fill-stone-300 w-[21px]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center px-5 py-2.5 mt-6 text-base leading-5 whitespace-nowrap rounded-xl border border-solid border-neutral-300 text-neutral-600">
              <div className="flex gap-2.5 justify-between">
                <div>••••••</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbc696b402762f0418e6fe14d8ed8ac4f8d225aeacadbf546675c9fc487125ec?apiKey=3ae96302e69649f5be368f89230b0596&"
                  className="shrink-0 aspect-[1.11] fill-stone-300 w-[21px]"
                />
              </div>
            </div>
            <div className="mt-6 text-base leading-8">
              Your password should:
            </div>
            <div className="flex gap-3 py-px mt-2 text-green-700  max-sm:justify-center max-sm:items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d6d7dd7049db818d493a8a63b3dbfb4d51cbf22e18aedebf16d091a21f4a758?apiKey=3ae96302e69649f5be368f89230b0596&"
                className="shrink-0 self-start w-4 aspect-square"
              />
              <div className="flex-auto">
                Be at least 8 characters in length
              </div>
            </div>
            <div className="flex gap-2 mt-2 leading-4">
              <div className="shrink-0 self-start rounded-full border border-red-600 border-solid h-[17px] stroke-[1px] w-[17px]" />
              <div className="flex-auto">
                Contain both upper and lowercase alphabetic characters (e.g.
                A-Z, a-z)
              </div>
            </div>
            <div className="flex gap-2 mt-2 ">
              <div className="shrink-0 h-4 rounded-full border border-red-600 border-solid stroke-[1px] w-[17px]" />
              <div className="flex-auto">
                Have at least one numerical character (e.g. 0-9)
              </div>
            </div>
            <div className="flex gap-2 mt-2 leading-[120%]">
              <div className="shrink-0 rounded-full border border-red-600 border-solid h-[17px] stroke-[1px] w-[17px]" />
              <div className="flex-auto">
                Have at least one special character (e.g. ~!@#$%^&*()_-+=)
              </div>
            </div>
            <div
              className="justify-center  text-center cursor-pointer items-center px-9 py-3 mt-12 text-base font-semibold text-white whitespace-nowrap bg-blue-900 rounded-3xl max-md:px-5 max-md:mt-10"
              onClick={handleUpdatePassword}
            >
              Update
            </div>
          </div>
        </div>
      )}
      {UpdatePassword && <PassUpdateSuccess />}
    </>
  );
}

export default UpdatePassword;
