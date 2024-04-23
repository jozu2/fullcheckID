import React from "react";

function TopBanner({ bannerImg }) {
  return (
    <div>
      <div className="flex overflow-hidden relative flex-col items-start px-20 pt-12 pb-6 w-full text-lg text-white min-h-[200px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet={bannerImg}
          className="object-cover absolute inset-0 size-full "
        />
        <div className="min-[1700px]:ml-[15%] max-lg:m-auto">
          <div className="relative  text-3xl font-bold leading-7 max-md:max-w-full text-center lg:text-left max-lg:text-center">
            GOVERNANCE IN PREVENTING FRAUD​
          </div>
          <div className="relative mt-2   max-md:max-w-full max-lg:text-center">
            Dedicated to implementing robust fraud prevention strategies.
          </div>
          <div className="relative w-60 flex justify-center px-9 py-2 mt-4  font-semibold text-blue-900 bg-white rounded-[93.75px]  max-lg:m-auto">
            Get Verified Now!
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
