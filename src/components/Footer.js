import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center self-stretch px-16 pt-7 pb-11 mt-72 w-full bg-white border-t border-blue-900 border-solid text-neutral-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-0 max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/90549167c072cca20592d7f9d5e8c33ee00baf3dfc51c21b231671ca463bbd86?apiKey=3ae96302e69649f5be368f89230b0596&"
          className="shrink-0 max-w-full aspect-[4] w-[243px]"
        />
        <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
          <div className="flex gap-4 justify-center self-end py-1.5 text-base leading-5 max-md:flex-wrap">
            <div className="my-auto">Why Register?</div>
            <div>Benefit Page</div>
            <div>Requirements</div>
            <div>About Us </div>
            <div>Contact</div>
          </div>
          <div className="flex gap-5 pl-20 text-sm max-md:flex-wrap max-md:px-5">
            <div className="flex gap-4 py-1.5 leading-[145%] max-md:flex-wrap">
              <div>Terms & Conditions</div>
              <div>Anti-Bribery and Corruption Policy</div>
              <div>Privacy Policy</div>
            </div>
            <div className="my-auto text-right">
              © 2024 Full ID Check All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
