import React from "react";
import TopBanner from "../../components/TopBanner";

function AboutUs() {
  const bannerImg =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/cba35674e37ec6e91af53d2c7774140d1660282588ed35d54b1ead02a199bc5c?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cba35674e37ec6e91af53d2c7774140d1660282588ed35d54b1ead02a199bc5c?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cba35674e37ec6e91af53d2c7774140d1660282588ed35d54b1ead02a199bc5c?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cba35674e37ec6e91af53d2c7774140d1660282588ed35d54b1ead02a199bc5c?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cba35674e37ec6e91af53d2c7774140d1660282588ed35d54b1ead02a199bc5c?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cba35674e37ec6e91af53d2c7774140d1660282588ed35d54b1ead02a199bc5c?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cba35674e37ec6e91af53d2c7774140d1660282588ed35d54b1ead02a199bc5c?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cba35674e37ec6e91af53d2c7774140d1660282588ed35d54b1ead02a199bc5c?apiKey=3ae96302e69649f5be368f89230b0596&";

  return (
    <div>
      <TopBanner bannerImg={bannerImg} />
      <div className="max-w-[1366px] m-auto p-[20px]">
        {/* Section 1 */}
        <div className="mt-16 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full m-auto">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d7001eafcac3428045d6269ea533e22f2aec7428c415671caa889dc1bc32991?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d7001eafcac3428045d6269ea533e22f2aec7428c415671caa889dc1bc32991?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d7001eafcac3428045d6269ea533e22f2aec7428c415671caa889dc1bc32991?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d7001eafcac3428045d6269ea533e22f2aec7428c415671caa889dc1bc32991?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d7001eafcac3428045d6269ea533e22f2aec7428c415671caa889dc1bc32991?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d7001eafcac3428045d6269ea533e22f2aec7428c415671caa889dc1bc32991?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d7001eafcac3428045d6269ea533e22f2aec7428c415671caa889dc1bc32991?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d7001eafcac3428045d6269ea533e22f2aec7428c415671caa889dc1bc32991?apiKey=3ae96302e69649f5be368f89230b0596&"
                className=" w-full aspect-[0.85] max-md:mt-10 max-sm:w-[210px] max-sm:aspect-[0.90] m-auto max-sm:mt-20 max-md:w-[280px] max-md:aspect-[0.87] "
              />
            </div>
            <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center items-start self-stretch px-5 py-8 max-sm:py-4  max-md:mt-0 my-auto text-2xl tracking-tight max-sm:mt-0 max-md:max-w-full">
                <div className="self-stretch text-base tracking-tighter leading-6 text-neutral-600 max-md:max-w-full ">
                  <span className="text-3xl font-bold tracking-tighter leading-10 text-blue-900 max-md:text-center">
                    Our Vision for Clients and Professionals
                  </span>
                  <br />
                  <br />
                  <span className="leading-7 text-neutral-600">
                    It is our aim to unite clients and professionals on a
                    foundation of integrity, honesty, and authenticity. We
                    aspire to cultivate an environment where every user, whether
                    providing or seeking services, is treated with respect,
                    care, and professionalism. Our mission is to foster genuine,
                    prosperous relationships between clients and professionals
                    through mutual trust and shared success. We invite you to
                    join us in realizing this vision.
                  </span>
                </div>
                <div className="mt-9 font-bold text-blue-900 leading-[120%]">
                  Jeffrey Lawson
                </div>
                <div className="mt-2 font-semibold text-sky-600 leading-[100%]">
                  CEO
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="mt-20 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full m-auto">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 font-bold max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8bd403e55f3a7ef70025029308f823a53804116bd284ebdf31788bf97eef19a?apiKey=3ae96302e69649f5be368f89230b0596&"
                  className="max-w-full aspect-[4] w-[314px]"
                />
                <div className="mt-4 text-3xl tracking-tight leading-9 text-black max-md:max-w-full">
                  Your Global Industry Professional Trust Platform
                </div>
                <div className="mt-6 text-2xl text-sky-600 max-md:max-w-full">
                  Why Choose Us?
                </div>
                <div className="mt-2 text-base leading-7 text-neutral-600 max-md:max-w-full">
                  Full ID Check is a global identity verification platform
                  serving professionals worldwide. Leveraging cutting-edge data
                  science and machine learning techniques, we have built a
                  network of verified professional profiles by carefully
                  curating authoritative data sources. Our goal is to provide
                  clients with confidence that only authentic and qualified
                  individuals can access services or platforms requiring
                  identity authentication.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col p-12 w-full rounded-3xl bg-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/15e4a8d42785287fcd915cd180cbc568f988fc1abc28e5f195cbc74d3bd5ed59?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="shrink-0 self-start w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="text-2xl font-bold tracking-tight leading-9 text-blue-900 max-md:max-w-full">
                      The Mission
                    </div>
                    <div className="mt-2 text-base leading-7 text-neutral-600 max-md:max-w-full">
                      Committed to endorsing certified professionals, placing
                      honesty and integrity at the forefront of our values.
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 mt-4 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40f4164dd56632e2cdaa1112bbb30c45e5cea2a2f6e250f0b3c4a1adfdedbdf?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="shrink-0 self-start w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="text-2xl font-bold tracking-tight leading-9 text-blue-900 max-md:max-w-full">
                      The Vision
                    </div>
                    <div className="mt-2 text-base leading-7 text-neutral-600 max-md:max-w-full">
                      <span className="text-neutral-600">
                        To offer Professionals worldwide the opportunity to
                        prove to clients that{" "}
                      </span>
                      <br />
                      <span className="font-bold text-neutral-600">
                        “They Are Who They Say They Are”{" "}
                      </span>
                      <span className="text-neutral-600">
                        – not scammers hiding behind a computer screen but
                        competent and trustworthy professionals with a strong
                        sense of integrity and accountability.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section-3 */}
        <div className="flex flex-col p-12 mt-10 w-full rounded-3xl border border-sky-500 border-solid max-w-[1200px] max-md:px-5 max-md:max-w-full m-auto">
          <div className="text-3xl font-bold tracking-tight leading-9 text-blue-900 max-md:max-w-full">
            Why is FullIDCheck Essential?
          </div>
          <div className="mt-4 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch p-4 text-neutral-600 max-md:pl-0 max-md:mt-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc6f91873035db27b838f443bab86cd963219c2e99fe74f6e284f76fa2c9c910?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="aspect-[0.8] w-[85px] max-md:mx-auto max-md:w-[70px] max-sm:mx-auto"
                  />
                  <div className="mt-4 text-2xl font-bold tracking-tight leading-9 max-sm:mx-auto max-md:text-center">
                    Digital Trust
                  </div>
                  <div className="mt-2 text-base tracking-tight leading-7 max-md:text-sm max-sm:text-base max-sm:text-center">
                    In the modern digital landscape, verifying identity
                    authenticity is of paramount importance. Full ID Check
                    assists professionals and their clients in establishing
                    sincere confidence, facilitating seamless commercial
                    engagements and providing a safeguard against deceitful
                    behaviors.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col p-4 text-neutral-600 max-md:mt-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fb55ba0cf96e0e2916e25fd9ae80793a27cee655f9240bf8fa03de6cbc83837?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="max-w-full aspect-[1.03] w-[109px] max-md:mx-auto max-md:w-[70px] max-sm:mx-auto"
                  />
                  <div className="mt-4 text-2xl font-bold tracking-tight leading-9 max-md:text-center max-sm:mx-auto">
                    Combatting Fraud
                  </div>
                  <div className="mt-2 text-base tracking-tight leading-7 max-md:text-sm max-sm:text-base max-sm:text-center">
                    Fraudulent activities by pseudo-Professionals tarnish the
                    reputation of genuine Professionals globally. Our platform
                    addresses this by providing a shield against these deceptive
                    actions, safeguarding both clients and legitimate
                    Professionals.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col p-4 text-neutral-600 max-md:mt-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cfea7ae03c79722e8875308d8eac44666ab8051dcc82645382edb019342499a?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="max-w-full aspect-[1.03] w-[109px] max-md:mx-auto max-md:w-[70px] max-sm:mx-auto"
                  />
                  <div className="mt-4 text-2xl font-bold tracking-tight leading-9 max-sm:text-center max-md:text-center">
                    Boosting Credibility
                  </div>
                  <div className="mt-2 text-base tracking-tight leading-7 max-md:text-sm max-sm:text-base max-sm:text-center">
                    With FullIDCheck’s worldwide registration, clients can
                    confidently partner with Professionals, knowing they’ve been
                    vetted. This transparency benefits authentic Professionals
                    by enhancing their employability and fostering secure
                    relationships with clients.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section-5 */}
        <div className="flex flex-col py-12 pr-12 pl-6 mt-10 w-full rounded-3xl bg-neutral-100 max-w-[1200px] max-md:px-5 max-md:max-w-full m-auto">
          <div className="text-3xl font-bold tracking-tight leading-9 text-blue-900 max-md:max-w-full">
            Key Features
          </div>
          <div className="p-4 mt-4 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-neutral-600 max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/222e996e184a9e2abcdf2db33f55c87e845f6417ef091b70573f7e0777ac1adb?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/222e996e184a9e2abcdf2db33f55c87e845f6417ef091b70573f7e0777ac1adb?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/222e996e184a9e2abcdf2db33f55c87e845f6417ef091b70573f7e0777ac1adb?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/222e996e184a9e2abcdf2db33f55c87e845f6417ef091b70573f7e0777ac1adb?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/222e996e184a9e2abcdf2db33f55c87e845f6417ef091b70573f7e0777ac1adb?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/222e996e184a9e2abcdf2db33f55c87e845f6417ef091b70573f7e0777ac1adb?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/222e996e184a9e2abcdf2db33f55c87e845f6417ef091b70573f7e0777ac1adb?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/222e996e184a9e2abcdf2db33f55c87e845f6417ef091b70573f7e0777ac1adb?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="max-w-full aspect-[3.33] w-[247px]"
                  />
                  <div className="mt-2 text-2xl font-bold tracking-tight leading-9 max-md:max-w-full">
                    AML & eIDAS Compliance
                  </div>
                  <div className="mt-2 text-base tracking-tight leading-7 max-md:max-w-full">
                    We house a database of certified professionals compliant
                    with Anti-Money Laundering (AML) and Electronic
                    Identification, Authentication, and Trust Services (eIDAS)
                    protocols.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-neutral-600 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-2 items-start pt-7 text-sm font-medium tracking-tight text-sky-600 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4a730471a69379d6f705892538662343793aa7ecfdf5adc2aec12d8b30bbb06?apiKey=3ae96302e69649f5be368f89230b0596&"
                      className="aspect-[4.55] w-[238px]"
                    />
                    <div className="mt-2.5">
                      The key to finding
                      <br />
                      professionals
                    </div>
                  </div>
                  <div className="mt-2 text-2xl font-bold tracking-tight leading-8 max-md:max-w-full">
                    Connecting Clients to Professionals
                  </div>
                  <div className="mt-2 text-base tracking-tight leading-7 max-md:max-w-full">
                    Clients can quickly identify and collaborate with verified
                    Professionals, ensuring a seamless, safe, and efficient
                    project cycle.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section-6 */}
        <div className="flex gap-5 px-5 mt-16 w-full leading-[121%] max-w-[1200px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-1 my-auto text-2xl font-semibold text-right text-neutral-600 max-md:max-w-full max-sm:text-2xl max-sm:leading-6">
            Affirm Your Identity with Confidence
          </div>
          <div className="flex-1 text-4xl font-bold text-sky-600 max-md:max-w-full max-md:leading-10 max-sm:text-2xl max-sm:leading-8 max-sm:text-center">
            'I AM WHO I SAY I AM.'{" "}
          </div>
        </div>
        <div className="justify-between px-12 py-8 mt-12 w-full rounded-2xl max-w-[1307px] max-md:px-5 max-md:mt-10 max-md:max-w-full bg-gradient-to-br from-[#28b9bb] to-[#1c3775]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
              <div className="text-3xl font-semibold tracking-tight leading-9 text-white max-md:mt-10 max-md:max-w-full">
                Ready to become a recognised, trusted, and sought-after
                professional around the world?
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full max-lg:w-[30%]">
              <div className="justify-center self-stretch px-9 py-3 my-auto w-full text-xl font-semibold text-blue-900 bg-zinc-100 rounded-[93.75px] max-md:px-5 max-md:mt-10 text-center ">
                Get Verified
              </div>
            </div>
          </div>
        </div>
        <div className="text-3xl font-bold tracking-tight leading-9 text-blue-900 max-md:max-w-full mt-10">
          Meet The Country Managers and B.M.C Staff
        </div>
        <div>WIP</div>
      </div>
    </div>
  );
}

export default AboutUs;
