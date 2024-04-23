import React, { useState } from "react";
import ApplicationSent from "./ApplicationSent";

function Registration() {
  const [applySuccess, setApplySuccess] = useState(false);
  const handleApply = () => {
    setApplySuccess(true);
  };
  return (
    <>
      {!applySuccess && (
        <div className="flex flex-col mx-auto mt-12 max-w-[554px] max-sm:px-4">
          <div className="mt-1.5 w-full text-2xl font-bold tracking-tight leading-7 text-blue-900 max-md:max-w-full">
            Registration
          </div>
          <div className="justify-center items-start p-2.5 mt-6 w-full text-base leading-5 rounded-xl border border-solid border-neutral-300 text-stone-300 max-md:pr-5 max-md:max-w-full">
            Full name
          </div>
          <div className="flex gap-4 justify-center mt-4 text-base leading-5 text-stone-300 max-md:flex-wrap">
            <div className="flex gap-2.5 justify-between p-2.5 rounded-xl border border-solid border-neutral-300">
              <div>Type Of Developer</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/424f114ecf10b717dce4cb9e7dcf6c71a2f7d94ee847cd716c740d74ced0ef3c?apiKey=3ae96302e69649f5be368f89230b0596&"
                className="shrink-0 aspect-square w-[18px]"
              />
            </div>
            <div className="flex flex-1 gap-2.5 justify-between p-2.5 whitespace-nowrap rounded-xl border border-solid border-neutral-300">
              <div>Profession</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/424f114ecf10b717dce4cb9e7dcf6c71a2f7d94ee847cd716c740d74ced0ef3c?apiKey=3ae96302e69649f5be368f89230b0596&"
                className="shrink-0 aspect-square w-[18px]"
              />
            </div>
          </div>
          <div className="justify-center items-start p-2.5 mt-4 w-full text-base leading-5 whitespace-nowrap rounded-xl border border-solid border-neutral-300 text-stone-300 max-md:pr-5 max-md:max-w-full">
            Email
          </div>
          <div className="flex gap-2 items-center px-3.5 py-2 mt-4 text-base leading-5 rounded-xl border border-solid border-neutral-300 text-stone-300 max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d32d7523f12778f57249d1516af669c6c144c14fe85fea27a66cbd7a190c2f6e?apiKey=3ae96302e69649f5be368f89230b0596&"
              className="shrink-0 self-stretch my-auto w-6 aspect-[1.33]"
            />
            <div className="self-stretch my-auto">+61</div>
            <div className="shrink-0 self-stretch w-px h-6 border border-solid bg-stone-300 border-stone-300" />
            <div className="flex-auto self-stretch my-auto max-md:max-w-full">
              Phone Number
            </div>
          </div>
          <div className="justify-center items-start p-2.5 mt-4 w-full text-base leading-5 whitespace-nowrap rounded-xl border border-solid border-neutral-300 text-stone-300 max-md:pr-5 max-md:max-w-full">
            Password
          </div>
          <div className="mt-4 w-full text-base leading-8 text-zinc-600 max-md:max-w-full">
            Your password should:
          </div>
          <div className="flex gap-3 self-start py-px pr-5 mt-2 text-sm leading-7 text-green-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f332063c6cf7a96fb8a017ad4427f6b80d67366b034e839d8df3515c13ab2cee?apiKey=3ae96302e69649f5be368f89230b0596&"
              className="shrink-0 self-start w-4 aspect-square"
            />
            <div className="flex-auto">Be at least 8 characters in length</div>
          </div>
          <div className="flex gap-2 pr-5 mt-2 text-sm leading-4 text-zinc-600 max-md:flex-wrap">
            <div className="shrink-0 h-4 rounded-full border border-red-600 border-solid stroke-[1px] w-[17px]" />
            <div className="flex-auto max-md:max-w-full">
              Contain both upper and lowercase alphabetic characters (e.g. A-Z,
              a-z)
            </div>
          </div>
          <div className="flex gap-2 pr-5 mt-2 text-sm leading-7 text-zinc-600 max-md:flex-wrap">
            <div className="shrink-0 h-4 rounded-full border border-red-600 border-solid stroke-[1px] w-[17px]" />
            <div className="flex-auto max-md:max-w-full">
              Have at least one numerical character (e.g. 0-9)
            </div>
          </div>
          <div className="flex gap-2 pr-5 mt-2 text-sm leading-4 text-zinc-600 max-md:flex-wrap">
            <div className="shrink-0 rounded-full border border-red-600 border-solid h-[17px] stroke-[1px] w-[17px]" />
            <div className="flex-auto max-md:max-w-full">
              Have at least one special character (e.g. ~!@#$%^&*()_-+=)
            </div>
          </div>
          <div className="justify-center items-start p-2.5 mt-4 w-full text-base leading-5 rounded-xl border border-solid border-neutral-300 text-stone-300 max-md:pr-5 max-md:max-w-full">
            Confirm Password
          </div>
          <div className="flex gap-2 self-center pr-5 mt-4">
            <div className="flex flex-col justify-center">
              <div className="shrink-0 w-4 h-4 rounded-md bg-zinc-300" />
            </div>
            <div className="text-sm tracking-tight leading-4 text-neutral-600">
              I have read and accept the terms and conditions
            </div>
          </div>
          <div
            onClick={handleApply}
            className="cursor-pointer text-center justify-center items-center self-center px-9 py-3 mt-6 max-w-full text-base font-semibold text-white whitespace-nowrap bg-blue-900 rounded-3xl w-[281px] max-md:px-5"
          >
            Apply
          </div>
          <div className="self-center mt-4 text-base text-center text-teal-400">
            Already have an account?
            <span className="font-bold text-teal-400">Log-in</span>
          </div>
        </div>
      )}
      {applySuccess && <ApplicationSent />}
    </>
  );
}

export default Registration;
