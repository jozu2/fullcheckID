import React from "react";
import SidePanel from "../../components/SidePanel";
import TopBanner from "../../components/TopBanner";

function WhyRegister() {
  const imgUrl =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/9bcaef71c39d737e555e92b212ab701a98ef2fb4d87684c7020d0512325a8368?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bcaef71c39d737e555e92b212ab701a98ef2fb4d87684c7020d0512325a8368?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bcaef71c39d737e555e92b212ab701a98ef2fb4d87684c7020d0512325a8368?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bcaef71c39d737e555e92b212ab701a98ef2fb4d87684c7020d0512325a8368?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bcaef71c39d737e555e92b212ab701a98ef2fb4d87684c7020d0512325a8368?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bcaef71c39d737e555e92b212ab701a98ef2fb4d87684c7020d0512325a8368?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bcaef71c39d737e555e92b212ab701a98ef2fb4d87684c7020d0512325a8368?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bcaef71c39d737e555e92b212ab701a98ef2fb4d87684c7020d0512325a8368?apiKey=3ae96302e69649f5be368f89230b0596&";

  const bannerImg =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b3d2adca6fc50517e8fc0a1c0ee9ba7c8160ae3ecaaab2f0a51a58091241b50b?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3d2adca6fc50517e8fc0a1c0ee9ba7c8160ae3ecaaab2f0a51a58091241b50b?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3d2adca6fc50517e8fc0a1c0ee9ba7c8160ae3ecaaab2f0a51a58091241b50b?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3d2adca6fc50517e8fc0a1c0ee9ba7c8160ae3ecaaab2f0a51a58091241b50b?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3d2adca6fc50517e8fc0a1c0ee9ba7c8160ae3ecaaab2f0a51a58091241b50b?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3d2adca6fc50517e8fc0a1c0ee9ba7c8160ae3ecaaab2f0a51a58091241b50b?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3d2adca6fc50517e8fc0a1c0ee9ba7c8160ae3ecaaab2f0a51a58091241b50b?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3d2adca6fc50517e8fc0a1c0ee9ba7c8160ae3ecaaab2f0a51a58091241b50b?apiKey=3ae96302e69649f5be368f89230b0596&";

  return (
    <div>
      <TopBanner bannerImg={bannerImg} />
      <div className="flex-column flex mt-16 w-[93%] m-auto max-md:flex-col  max-w-[1366px] ">
        <div className="section-1 w-[75%]  max-md:w-full">
          <div className="flex flex-col grow self-stretch px-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl font-bold tracking-tight leading-9 text-blue-900 max-md:max-w-full">
              At FullIDCheck, we want to ensure that industry professionals are
              proven, traceable, and confirmed.​
            </div>
            <div className="mt-2 text-base tracking-normal leading-7 text-neutral-600 max-md:max-w-full">
              They have submitted the necessary legal documents, have been
              vetted through a live interview and can be identified using a
              facial recognition system. All registered industry professionals
              at FullIDCheck can prove “THEY ARE WHO THEY SAY THEY ARE”
            </div>
            <div className="mt-12 text-3xl font-bold tracking-tight leading-9 text-neutral-600 max-md:mt-10 max-md:max-w-full">
              Why Register at FullIDCheck?
            </div>
            <div className="justify-center mt-9 max-md:max-w-full">
              {/* FIX----------------- */}
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-lg:gap-2  max-xl:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch px-4 py-6 w-full text-2xl max-lg:text-lg max-lg:font-bold  font-semibold tracking-tight leading-6 text-center bg-white rounded-2xl border border-solid border-zinc-300 text-neutral-800 max-md:mt-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/78262274a871264389ae7395165562c0ffd60f9d437df0b5489a33449a9bf822?apiKey=3ae96302e69649f5be368f89230b0596&"
                      className="self-center aspect-[1.72] w-[97px]"
                    />
                    <div className="mt-2">Reputation Boost</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 max-lg:ml-0 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch px-4 py-6 w-full text-2xl max-lg:text-lg max-lg:font-bold  font-semibold tracking-tight leading-6 text-center bg-white rounded-2xl border border-solid border-zinc-300 text-neutral-800 max-md:mt-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1b4c43aa838ec8776da8e18e3dc64cd9730ac52ebae041a9b17139e6b3a2c07?apiKey=3ae96302e69649f5be368f89230b0596&"
                      className="self-center aspect-[0.91] w-[51px]"
                    />
                    <div className="mt-2">Increased Trust</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 max-lg:ml-0 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch px-4 py-6 w-full text-2xl max-lg:text-lg max-lg:font-bold  font-semibold tracking-tight leading-6 text-center bg-white rounded-2xl border border-solid border-zinc-300 text-neutral-800 max-md:mt-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/21ff9619563b0f64f19c637a44ecbf831dcf91fa778d5800e6929575c59013ee?apiKey=3ae96302e69649f5be368f89230b0596&"
                      className="self-center aspect-[1.61] w-[91px]"
                    />
                    <div className="mt-2">Unlimited Opportunities</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 max-lg:ml-0 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch px-4 py-6 w-full text-2xl max-lg:text-lg max-lg:font-bold  font-semibold tracking-tight leading-6 text-center bg-white rounded-2xl border border-solid border-zinc-300 text-neutral-800 max-md:mt-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f320f650f97b30a8c77fa869b6ce891a1147d56ed2590b6996b58ff94732f3?apiKey=3ae96302e69649f5be368f89230b0596&"
                      className="self-center aspect-[1.49] w-[95px]"
                    />
                    <div className="mt-4">Community Building</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-3xl font-bold tracking-tight leading-9 text-blue-900 max-md:mt-10 max-md:max-w-full">
              What We Offer
            </div>
            <div className="flex flex-col px-16 mt-6 text-neutral-600 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col justify-center px-5 py-6 max-md:px-1 max-md:py-1 bg-white rounded-3xl max-md:max-w-full">
                <div className="flex gap-5 pl-5 max-md:pl-0 max-md:pr-0 max-md:flex-wrap max-md:flex-col justify-start ">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5ef8a64d428fd1fe9ed6bd7961d05771ff4d199582d268484a6e8db30ad43df?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="shrink-0 self-start max-w-full aspect-[1.56] w-[100px]"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="text-2xl font-bold tracking-tight leading-6 max-md:max-w-full">
                      Registered Badge
                    </div>
                    <div className="mt-2 text-base tracking-tight leading-6 max-md:max-w-full">
                      Upon registration, your badge will connect back to your
                      complete profile, allowing clients to verify you as a
                      legitimate registered professional. We encourage using
                      this badge in emails, on all social media platforms,
                      and—for those with websites—included on website footers or
                      bottom bars. Prospective clients who see the badge can
                      easily link to your profile with a simple click for more
                      information or to initiate a new business relationship.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center px-5 py-6 max-md:px-1 max-md:py-1 mt-4 bg-white rounded-3xl max-md:max-w-full">
                <div className="flex gap-5 pl-5 max-md:pl-0 max-md:pr-0 max-md:flex-wrap max-md:flex-col">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/458a14c45d77093fe6e068218507d7456cd218bb17d379e58834e8d1b3e46e7c?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="shrink-0 self-start aspect-[0.91] w-[58px]"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="text-2xl font-bold tracking-tight leading-6 max-md:max-w-full">
                      Professional Profile
                    </div>
                    <div className="mt-2 text-base tracking-tight leading-6 max-md:max-w-full">
                      A client can access a Professional’s profile at
                      https://register.dev in one of two ways: (1) by clicking
                      on the registration badge, or (2) by searching for the
                      Professional using keywords related to the type of
                      Professional they require. When a Professional fully
                      completes their profile with a detailed history, it
                      enhances their appeal to potential clients. The more
                      information they include in their profile, the more likely
                      clients will want to hire them.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center px-5 py-6 max-md:px-1 max-md:py-1 mt-4 bg-white rounded-3xl max-md:max-w-full">
                <div className="flex gap-5 pl-5 max-md:pl-0 max-md:pr-0 max-md:flex-wrap max-md:flex-col">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d03aceb818fd99094dfe7e81182be62be36d36c24f462881ff57a8aecdb058f6?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="shrink-0 self-start w-16 aspect-square"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="text-2xl font-bold tracking-tight leading-6 max-md:max-w-full">
                      Our Forums
                    </div>
                    <div className="mt-2 text-base tracking-tight leading-6 max-md:max-w-full">
                      We provide online forums as a trusted resource exclusively
                      for our registered users. These forums are not just a
                      place for discussions and assistance; they are a vibrant
                      community where individuals can confidently connect for
                      professional opportunities, knowing that every member’s
                      identity has been thoroughly verified. This verification
                      process reassures members that they are interacting with
                      genuine professionals, not scammers. In this secure
                      environment, users can find others within their own area
                      or field, seek out services, or offer their expertise for
                      collaborative projects. Whether you are looking to hire a
                      professional or seeking employment, our forums are an
                      ideal starting point. <br />
                      <br />
                      Here, you can: <br />
                      Network with Verified Professionals: Connect with other
                      registered users for potential work opportunities,
                      confident in the knowledge that each member's identity is
                      authenticated. <br />
                      Seek Local Expertise: Discover professionals in your area,
                      expanding your local network and fostering community
                      connections. <br />
                      Exchange Knowledge and Resources: Offer your expertise or
                      request assistance in our forums, contributing to a
                      culture of support and shared growth. <br />
                      <br />
                      It is our commitment to maintain these forums as a
                      respectful and constructive space, conducive to
                      professional growth and reliable networking. We are
                      dedicated to ensuring discussions remain positive and
                      suitable for all registered members, fostering a community
                      that supports and elevates each other professionally.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SidePanel image={imgUrl} />
      </div>
    </div>
  );
}

export default WhyRegister;
