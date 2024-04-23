import React, { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";

function ApplicationSent() {
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setEmailConfirmed(true);
    }, 3000);
  });
  return (
    <>
      {!emailConfirmed && (
        <div className="flex flex-col items-center font-bold bg-white mb-[35vh] mt-[5vh] max-sm:px-5">
          <div className="flex  flex-col justify-center w-full text-sm leading-5 bg-white max-w-[1200px] text-neutral-500 max-md:max-w-full" />
          <div className="flex justify-center items-center px-16 mt-52 max-w-full text-3xl tracking-tight leading-9 text-blue-900 w-[709px] max-md:px-5 max-md:mt-10">
            <div className="flex gap-4 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f1c05a6d8cfe54c788370c372a6dab340b5242f2e55661b3be584da81ff0491?apiKey=3ae96302e69649f5be368f89230b0596&"
                className="shrink-0 w-10 aspect-square "
              />
              <div className="my-auto">Application Sent</div>
            </div>
          </div>
          <div className="mt-6 text-base leading-6 text-center text-neutral-700 max-md:max-w-full">
            Please check your inbox and confirm your email to continue with your
            registration.
          </div>
          <div className="shrink-0 mt-6 max-w-full h-px border border-solid bg-neutral-100 border-neutral-100 w-[411px]" />
        </div>
      )}

      {emailConfirmed && <PersonalInfo />}
    </>
  );
}

export default ApplicationSent;
