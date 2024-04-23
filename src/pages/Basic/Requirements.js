import React from "react";
import SidePanel from "../../components/SidePanel";
import TopBanner from "../../components/TopBanner";

function Requirements() {
  const imgUrl =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/e38e9cce73c9b7818258291d85da668868be0a750779e2ee3f171f615471c7af?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e38e9cce73c9b7818258291d85da668868be0a750779e2ee3f171f615471c7af?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e38e9cce73c9b7818258291d85da668868be0a750779e2ee3f171f615471c7af?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e38e9cce73c9b7818258291d85da668868be0a750779e2ee3f171f615471c7af?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e38e9cce73c9b7818258291d85da668868be0a750779e2ee3f171f615471c7af?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e38e9cce73c9b7818258291d85da668868be0a750779e2ee3f171f615471c7af?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e38e9cce73c9b7818258291d85da668868be0a750779e2ee3f171f615471c7af?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e38e9cce73c9b7818258291d85da668868be0a750779e2ee3f171f615471c7af?apiKey=3ae96302e69649f5be368f89230b0596&";
  const bannerImg =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/0e5429293114475e4249401c3bb812f7c95bbe824e32d3253b80456a9e6aae97?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5429293114475e4249401c3bb812f7c95bbe824e32d3253b80456a9e6aae97?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5429293114475e4249401c3bb812f7c95bbe824e32d3253b80456a9e6aae97?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5429293114475e4249401c3bb812f7c95bbe824e32d3253b80456a9e6aae97?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5429293114475e4249401c3bb812f7c95bbe824e32d3253b80456a9e6aae97?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5429293114475e4249401c3bb812f7c95bbe824e32d3253b80456a9e6aae97?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5429293114475e4249401c3bb812f7c95bbe824e32d3253b80456a9e6aae97?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5429293114475e4249401c3bb812f7c95bbe824e32d3253b80456a9e6aae97?apiKey=3ae96302e69649f5be368f89230b0596&";

  return (
    <div>
      <TopBanner bannerImg={bannerImg} />

      <div className="self-center mt-16 w-full max-w-[1360px] max-md:mt-10 max-md:max-w-full m-auto p-[20px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-bold tracking-tight leading-10 text-blue-900 max-md:max-w-full">
                How it works?
              </div>
              <div className="flex flex-col mt-8 bg-white rounded-3xl text-neutral-600 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5828f5ab3b1082ad8d6b021cba8b704925290dfb0fcbf41b798063d615877d10?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="shrink-0 self-start aspect-[0.95] w-[60px]"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="text-2xl font-bold tracking-tight leading-8 max-md:max-w-full">
                      Registration
                    </div>
                    <div className="mt-2 text-base tracking-tight leading-7 max-md:max-w-full">
                      To complete the registration process, please ensure the
                      accuracy of all information provided on the registration
                      form and have necessary documentation ready. Upload two
                      forms of government photo ID (such as a passport, driver's
                      license, or national ID card) as well as a recent utility
                      bill or bank statement showing your physical address. For
                      questions about acceptable document types, please contact
                      an administrator.
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 mt-6 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a782be78c2d5c99d2dd951462580aa922f47809b8a50e7dda8befee6de975ec?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="shrink-0 self-start aspect-[0.82] w-[60px]"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="text-2xl font-bold tracking-tight leading-8 max-md:max-w-full">
                      Facial Capture for Identification
                    </div>
                    <div className="mt-2 text-base tracking-tight leading-7 max-md:max-w-full">
                      Use your mobile phone to capture your face. This will use
                      advanced facial recognition software compatible with video
                      ID verification. The technology supports a broad range of
                      ID documents from over 150 countries. This ensures
                      convenient and accessible identity verification globally.
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 mt-6 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2033de73b78187528a7b10f72bc5b9febc4adb3f7cdaad77dde802e9c6efab8?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="shrink-0 self-start aspect-square w-[60px]"
                  />
                  <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                    <div className="text-2xl font-bold tracking-tight leading-8 max-md:max-w-full">
                      Zoom Interview Scheduling
                    </div>
                    <div className="mt-2 text-base tracking-tight leading-7 max-md:max-w-full">
                      Select a date and time for a 15-minute Zoom interview
                      using our online calendar. During this brief session, you
                      will meet with the designated country manager.
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 mt-6 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1eba038d1f7eda350d626806e9731f5afe0576acd5b37ce199a173479d2e553?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="shrink-0 self-start aspect-square w-[60px]"
                  />
                  <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                    <div className="text-2xl font-bold tracking-tight leading-6 max-md:max-w-full">
                      Account Approval
                    </div>
                    <div className="mt-2 text-base tracking-tight leading-7 max-md:max-w-full">
                      Upon approval of your account, you will gain exclusive
                      access to the full suite of features on our website
                      designed specifically to meet your unique needs.
                    </div>
                  </div>
                </div>
                <div className="self-end mt-6 text-base tracking-tight leading-7 max-md:max-w-full">
                  Please be assured that all documents and identification
                  information provided during registration are securely stored
                  on an offline computer and completely removed from our server.
                  Each individual's data is identified solely by a unique serial
                  number. The only information retained online is what you
                  choose to include in your personal profile for self-promotion
                  purposes.
                </div>
              </div>
              <div className="flex flex-col px-5 mt-24 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-bold tracking-tight leading-10 text-blue-900 max-md:max-w-full">
                  Want to know more?
                </div>
                <div className="mt-2 text-lg tracking-tight leading-5 text-neutral-500 max-md:max-w-full">
                  Check our FAQ Below
                </div>
                <div>WIP</div>
              </div>
            </div>
          </div>
          <SidePanel image={imgUrl} />
        </div>
      </div>
    </div>
  );
}

export default Requirements;
