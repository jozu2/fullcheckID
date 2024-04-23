import * as React from "react";

function PersonalInfo() {
  return (
    <div className="flex flex-col mx-auto leading-[121%] max-w-[660px] text-stone-300 max-sm:px-2.5">
      <div className="flex gap-4 justify-center  py-1 font-bold text-blue-900 leading-[120%] max-md:flex-wrap">
        <div className="flex-1 text-2xl tracking-tight max-md:max-w-full">
          Personal Information
        </div>
        <div className="text-3xl tracking-tight text-right">
          <span className="text-base tracking-tight leading-5 ">
            Serial Code
          </span>
          <span className="text-lg tracking-tight leading-6">10001</span>
        </div>
      </div>
      <div className="flex gap-4 justify-center  mt-4 w-full text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="flex-1 justify-center items-start p-2.5 rounded-xl border border-solid border-neutral-300 max-md:pr-5">
          Firstname
        </div>
        <div className="flex-1 justify-center items-start p-2.5 rounded-xl border border-solid border-neutral-300 max-md:pr-5">
          Middlename
        </div>
        <div className="flex-1 justify-center items-start p-2.5 rounded-xl border border-solid border-neutral-300 max-md:pr-5">
          Lastname
        </div>
      </div>
      <div className="flex gap-4 justify-center pl-8 mt-4 w-full text-base max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-4 justify-center px-2 my-auto text-lg whitespace-nowrap ">
          <div className="flex gap-2 py-1">
            <div className="shrink-0 w-4 h-4 bg-teal-400 rounded-full" />
            <div>Male</div>
          </div>
          <div className="flex gap-2 py-1">
            <div className="shrink-0 w-4 h-4 rounded-full bg-zinc-300" />
            <div>Female</div>
          </div>
        </div>
        <div className="flex-1 justify-center items-start p-2.5 rounded-xl border border-solid border-neutral-300 max-md:pr-5">
          Birthdate (dd/mm/yy)
        </div>
        <div className="flex-1 justify-center items-start p-2.5 whitespace-nowrap rounded-xl border border-solid border-neutral-300 max-md:pr-5">
          Birthplace
        </div>
      </div>
      <div className="mt-4 w-full text-base leading-6 text-neutral-600 max-md:max-w-full">
        Address
      </div>
      <div className="flex gap-4 justify-center mt-2 w-full text-base max-md:flex-wrap max-md:max-w-full">
        <div className="flex-1 justify-center items-start p-2.5 rounded-xl border border-solid border-neutral-300 max-md:pr-5">
          Unit #
        </div>
        <div className="flex-1 justify-center items-start p-2.5 whitespace-nowrap rounded-xl border border-solid border-neutral-300 max-md:pr-5">
          Street
        </div>
        <div className="flex-1 justify-center items-start p-2.5 whitespace-nowrap rounded-xl border border-solid border-neutral-300 max-md:pr-5">
          City
        </div>
      </div>
      <div className="flex gap-4 justify-center mt-4 w-full text-base max-md:flex-wrap max-md:max-w-full">
        <div className="flex-1 justify-center items-start p-2.5 rounded-xl border border-solid border-neutral-300 max-md:pr-5">
          State / Province
        </div>
        <div className="flex-1 justify-center items-start p-2.5 whitespace-nowrap rounded-xl border border-solid border-neutral-300 max-md:pr-5">
          Country
        </div>
        <div className="flex-1 justify-center items-start p-2.5 rounded-xl border border-solid border-neutral-300 max-md:pr-5">
          Postal Code
        </div>
      </div>
      <div className="mt-4 w-full text-base leading-6 text-neutral-600 max-md:max-w-full">
        Backup Email Address
      </div>
      <div className="justify-center items-start p-2.5 mt-2 w-full text-base rounded-xl border border-solid border-neutral-300 max-md:pr-5 max-md:max-w-full">
        Email Address
      </div>
      <div className="flex flex-col p-4 mt-4 w-full text-sm tracking-normal leading-5 bg-yellow-50 rounded-xl text-black text-opacity-80 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <span className="text-base font-bold leading-6">
            Next Of Kin or Emergency Person:
          </span>
          <br />
          <br />
          <span className="tracking-normal leading-5 text-black">
            As part of your membership sign-up, we ask you to provide the
            contact details of a family member or friend.
          </span>
          <br />
          <br />
          <span className="font-semibold tracking-normal leading-5 text-black">
            Why is this important?
          </span>
          <span className="tracking-normal leading-5 text-black">
            This contact will only be used in one specific situation: if you
            have unclaimed funds in your account. It's a precautionary measure
            to ensure that any unclaimed benefits can be appropriately managed
            and directed in case you're not reachable.
          </span>
          <br />
          <br />
          <span className="font-semibold tracking-normal leading-5 text-black">
            Respecting Your Privacy
          </span>
          <br />
          <span className="tracking-normal leading-5 text-black">
            Please be assured, this information is strictly for the purpose of
            handling unclaimed funds and will be kept confidential.
          </span>
          <br />
          <br />
          <span className="tracking-normal leading-5 text-black">
            Thank you for taking this step to secure your benefits and interests
            as a member of our community.
          </span>
        </div>
        <div className="mt-4 max-md:max-w-full">
          <span className="font-semibold">
            Commitment to Data Privacy and Security
          </span>
          <br />
          <br />
          <span className="tracking-normal leading-5 text-black">
            At Full ID Check, we prioritize your privacy. Once your application
            is approved, your personal information is removed from our online
            servers and securely stored offline. This practice ensures the
            utmost security and confidentiality of your data. 
          </span>
          <br />
          <span className="tracking-normal leading-5 text-black">
            For any questions about our data management, please contact us.
          </span>
        </div>
      </div>
      <div className="mt-4 w-full text-base leading-6 text-black text-opacity-80 max-md:max-w-full">
        Fullname (Firstname, Middle, Lastname)
      </div>
      <div className="justify-center items-start p-2.5 mt-2 w-full text-base whitespace-nowrap rounded-xl border border-solid border-neutral-300 max-md:pr-5 max-md:max-w-full">
        Fullname
      </div>
      <div className="mt-4 w-full text-base leading-6 text-neutral-600 max-md:max-w-full">
        Address
      </div>
      <div className="flex gap-4 justify-center px-5 mt-2 w-full text-base max-md:flex-wrap max-md:max-w-full">
        <div className="flex-1 justify-center items-start p-2.5 rounded-xl border border-solid border-neutral-300 max-md:pr-5">
          Unit #
        </div>
        <div className="flex-1 justify-center items-start p-2.5 whitespace-nowrap rounded-xl border border-solid border-neutral-300 max-md:pr-5">
          Street
        </div>
        <div className="flex-1 justify-center items-start p-2.5 whitespace-nowrap rounded-xl border border-solid border-neutral-300 max-md:pr-5">
          City
        </div>
      </div>
      <div className="mt-4 w-full text-base leading-6 text-black text-opacity-80 max-md:max-w-full">
        Phone Number
      </div>
      <div className="justify-center items-start p-2.5 mt-2 w-full text-base rounded-xl border border-solid border-neutral-300 max-md:pr-5 max-md:max-w-full">
        Phone Number
      </div>
      <div className="mt-4 w-full text-base leading-6 text-black text-opacity-80 max-md:max-w-full">
        Email Address
      </div>
      <div className="justify-center items-start p-2.5 mt-2 w-full text-base rounded-xl border border-solid border-neutral-300 max-md:pr-5 max-md:max-w-full">
        Email Address
      </div>
      <div className="text-center justify-center items-center self-end px-9 py-3 mt-10 max-w-full text-base font-semibold text-white whitespace-nowrap bg-blue-900 rounded-[30px] w-[186px] max-md:px-5">
        Next
      </div>
    </div>
  );
}

export default PersonalInfo;
