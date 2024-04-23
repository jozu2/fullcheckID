import React from "react";

function SidePanel({ image }) {
  return (
    <>
      <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col text-2xl max-md:mt-10">
          <div className="max-md:w-[80%] max-md:m-auto flex flex-col items-center px-5 py-[100px] max-md:py-[60px] font-semibold rounded-2xl bg-gradient-to-br from-[#28b9bb] to-[#1c3775]">
            <img
              loading="lazy"
              srcSet={image}
              className="self-stretch w-full aspect-[1.07]"
            />
            <div className="tracking-tight leading-7 text-white">
              Ready to become a recognised, trusted, and sought-after
              professional around the world?
            </div>
            <div className="justify-center px-9 py-2 mt-10 max-w-full text-xl max-lg:text-[18px] text-blue-900 rounded-3xl bg-zinc-100 w-[236px] max-md:px-5 text-center ">
              Get Verified
            </div>
          </div>
          <div className=" max-md:w-[80%] max-md:m-auto max-md:mt-17 flex flex-col justify-end p-8 mt-10 rounded-3xl border border-sky-600 border-solid max-md:px-5 max-md:mt-16">
            <div className="flex gap-4 pr-1.5 font-bold tracking-tight leading-7 text-blue-900">
              <div>HAVE QUESTIONS?</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/360696ff1c20d18d9ce5589259d7ff26536857834672c907a1c9cb19106d38b3?apiKey=3ae96302e69649f5be368f89230b0596&"
                className="shrink-0 my-auto w-8 aspect-square"
              />
            </div>
            <div className="mt-1 text-xl tracking-tight leading-6 text-neutral-600">
              Reach out to us and ask your questions away
            </div>
            <div className=" justify-center px-8 py-3 mt-6 text-xl font-semibold text-white bg-sky-600 rounded-3xl max-md:pr-7 max-md:pl-7 text-center">
              Get Help
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidePanel;
