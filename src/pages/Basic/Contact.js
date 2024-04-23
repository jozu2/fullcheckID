import React from "react";
import TopBanner from "../../components/TopBanner";

function Contact() {
  const bannerImg =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b97ef60e60deaf8141f2e03553440b4cd62ea1dc6f11a1fe2e6302e2fd4f9ca6?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b97ef60e60deaf8141f2e03553440b4cd62ea1dc6f11a1fe2e6302e2fd4f9ca6?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b97ef60e60deaf8141f2e03553440b4cd62ea1dc6f11a1fe2e6302e2fd4f9ca6?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b97ef60e60deaf8141f2e03553440b4cd62ea1dc6f11a1fe2e6302e2fd4f9ca6?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b97ef60e60deaf8141f2e03553440b4cd62ea1dc6f11a1fe2e6302e2fd4f9ca6?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b97ef60e60deaf8141f2e03553440b4cd62ea1dc6f11a1fe2e6302e2fd4f9ca6?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b97ef60e60deaf8141f2e03553440b4cd62ea1dc6f11a1fe2e6302e2fd4f9ca6?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b97ef60e60deaf8141f2e03553440b4cd62ea1dc6f11a1fe2e6302e2fd4f9ca6?apiKey=3ae96302e69649f5be368f89230b0596&";

  return (
    <>
      <TopBanner bannerImg={bannerImg} />
      <div className="max-w-[1366px] m-auto p-[20px]">
        {/* Section-1 */}
        <div className=" w-[80%] m-auto justify-between px-12 py-8 mt-16 rounded-2xl max-w-[1307px] max-md:px-5 max-md:mt-10 max-md:max-w-full bg-gradient-to-br from-[#28b9bb] to-[#1c3775]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
              <div className="text-3xl font-semibold tracking-tight leading-9 text-white max-md:mt-10 max-md:max-w-full">
                Are you interested in a management position?
              </div>
              <span className="text-sm leading-6 text-white">
                Situations vacant for country managers, check and see if your
                country that you live in is available
              </span>
            </div>
            <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full max-lg:w-[30%]">
              <div className="max-lg:text-[18px] max-lg:px-0 justify-center self-stretch px-9 py-3 my-auto w-full text-xl font-semibold text-blue-900 bg-zinc-100 rounded-[93.75px] max-md:px-5 max-md:mt-10 text-center ">
                Apply
              </div>
            </div>
          </div>
        </div>
        {/* Section-2 */}
        <div className="w-[80%] m-auto">
          <div className="mt-11 text-2xl font-bold tracking-tight leading-8 text-blue-900 max-md:mt-10 max-md:max-w-full max-sm:mt-20 max-sm:text-center">
            Blockchain Management Corporation
          </div>
          <div className="mt-6 max-w-full w-[1200px] max-sm:mt-0">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-start text-neutral-600 max-md:mt-9 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4cf25ab20d2da5168b70f6806b4761da0bcffe9771f72ddba343ef41d33c8213?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cf25ab20d2da5168b70f6806b4761da0bcffe9771f72ddba343ef41d33c8213?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cf25ab20d2da5168b70f6806b4761da0bcffe9771f72ddba343ef41d33c8213?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cf25ab20d2da5168b70f6806b4761da0bcffe9771f72ddba343ef41d33c8213?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cf25ab20d2da5168b70f6806b4761da0bcffe9771f72ddba343ef41d33c8213?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cf25ab20d2da5168b70f6806b4761da0bcffe9771f72ddba343ef41d33c8213?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cf25ab20d2da5168b70f6806b4761da0bcffe9771f72ddba343ef41d33c8213?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cf25ab20d2da5168b70f6806b4761da0bcffe9771f72ddba343ef41d33c8213?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="self-stretch w-full aspect-[2.04] max-md:max-w-full"
                  />
                  <div className="mt-6 text-lg font-semibold tracking-tight leading-5 max-sm:pl-5">
                    Office
                  </div>
                  <div className="mt-2 text-sm tracking-tight leading-6 w-[352px] max-sm:pl-5">
                    Ground Floor, 470 Street, Kilda Road
                    <br />
                    Melbourne VICTORIA 3004 Australia
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch px-12 py-px w-full bg-white rounded-3xl max-md:px-5 max-md:mt-9 max-md:max-w-full">
                  <div className="justify-center items-start p-2.5 text-base leading-5 rounded-xl border border-solid border-neutral-300 text-stone-300 max-md:pr-5">
                    Full name
                  </div>
                  <div className="justify-center items-start p-2.5 mt-6 text-base leading-5 whitespace-nowrap rounded-xl border border-solid border-neutral-300 text-stone-300 max-md:pr-5">
                    Email
                  </div>
                  <div className="justify-center items-start px-2.5 pt-2.5 pb-12 mt-6 text-base leading-5 rounded-xl border border-solid border-neutral-300 text-stone-300 max-md:pr-5 max-md:pb-10">
                    Say something...
                  </div>
                  <div className="flex gap-5 justify-between mt-6">
                    <div className="flex gap-1.5 px-4 py-1.5 rounded-2xl border border-solid shadow-sm bg-neutral-50 border-zinc-300">
                      <div className="flex gap-3.5 my-auto text-base tracking-tight leading-7 text-neutral-400">
                        <div className="shrink-0 my-auto w-5 h-5 bg-white rounded-md border border-solid border-neutral-300" />
                        <div>I’m not a robot</div>
                      </div>
                      <div className="flex flex-col justify-center py-0.5 text-xs font-medium text-center text-neutral-400">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c9ed15b993dfb9bdb270ab16bef6d2f2207dbf32c4789d78d6b7cc2fcc927f3?apiKey=3ae96302e69649f5be368f89230b0596&"
                          className="self-center aspect-[1.2] w-[41px]"
                        />
                        <div>Privacy - Terms</div>
                      </div>
                    </div>
                    <div className="justify-center self-start px-9 py-4 text-2xl font-semibold text-white whitespace-nowrap bg-sky-600 rounded-3xl max-md:px-5">
                      Send
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
