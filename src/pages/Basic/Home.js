import React from "react";

function Home() {
  return (
    <div className="max-w-[1366px] m-auto px-[20px]">
      <div
        className="flex items-center justify-center min-h-screen"
        style={{
          position: "relative",
          overflow: "hidden",
          flexDirection: "column",
        }}
      >
        <div className="flex flex-col mx-auto mt-9 max-w-[811px] max-sm:mt-[50px]  ">
          <div className="w-full text-6xl font-bold tracking-tighter text-center text-blue-900 leading-[67.2px] max-md:max-w-full max-md:text-4xl max-sm:px-5 max-sm:mt-6 max-sm:text-4xl">
            You Are Who You Say You Are
          </div>
          <div className="mt-4 w-full text-3xl leading-9 text-center text-neutral-600 max-md:px-5 max-md:max-w-full max-md:text-2xl max-sm:px-5 max-sm:text-lg">
            Bringing Credibility, Integrity, and Protection to Industry
            Professionals and Clients Worldwide
          </div>
          <div className="flex gap-5 justify-between self-center px-5 mt-8 text-xl">
            <div className="justify-center px-9 py-4 font-bold text-white bg-green-700 rounded-[70px] max-md:px-5 max-md:text-base max-sm:text-sm">
              Get Verified
            </div>
            <div className="my-auto font-semibold text-blue-900 max-md:text-base max-sm:text-sm">
              Learn More
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "red",
            position: "relative",
          }}
        >
          <img
            loading="lazy"
            alt="banner"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/721c1fe245b81cdf0532864faddd881b0dfea1cbb8f7c0fe7d2660eac77fd0ac?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/721c1fe245b81cdf0532864faddd881b0dfea1cbb8f7c0fe7d2660eac77fd0ac?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/721c1fe245b81cdf0532864faddd881b0dfea1cbb8f7c0fe7d2660eac77fd0ac?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/721c1fe245b81cdf0532864faddd881b0dfea1cbb8f7c0fe7d2660eac77fd0ac?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/721c1fe245b81cdf0532864faddd881b0dfea1cbb8f7c0fe7d2660eac77fd0ac?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/721c1fe245b81cdf0532864faddd881b0dfea1cbb8f7c0fe7d2660eac77fd0ac?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/721c1fe245b81cdf0532864faddd881b0dfea1cbb8f7c0fe7d2660eac77fd0ac?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/721c1fe245b81cdf0532864faddd881b0dfea1cbb8f7c0fe7d2660eac77fd0ac?apiKey=3ae96302e69649f5be368f89230b0596&"
            className="object-contain w-full aspect-[2.86] max-w-[1220px] max-sm:max-w-[700px] max-sm:mt-6 z-[1] mt-4 "
            style={{
              overflow: "hidden",
              position: "absolute",
              zIndex: "-1",
              top: "50%",
              left: "50%",
              transform: "translate(-45%, -20%)",
            }}
          />
        </div>

        <section className="self-end mt-[370px]  max-w-full w-[1177px]   max-md:mr-2.5   max-sm:mt-[140px] max-md:mt-[230px] max-lg:mt-[300px] mx-auto">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <article className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e956f7c2148679fb34ae410b72031731a5fed55770f8e1d6a27431e4d5a6767?apiKey=3ae96302e69649f5be368f89230b0596&"
                      alt="Verification icon"
                      className="grow shrink-0 self-stretch my-auto max-w-full aspect-[1.59] max-sm:w-[140px] max-lg:w-[140px] max-lg:ml-[5px] w-[190px] max-md:mt-7"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[67%] max-md:ml-5  max-md:w-full ">
                    <h2 className="self-stretch text-3xl font-bold tracking-tighter leading-10 text-blue-900 max-md:mt-4">
                      Promote Confidence and Ensure Trust Through Verification
                    </h2>
                  </div>
                </article>
              </div>
            </div>
            <div className="flex flex-col ml-3 w-2/5 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch text-neutral-600 max-md:mt-9">
                <p className="text-lg font-medium tracking-normal leading-6 ">
                  In today's constantly changing digital landscape,
                  differentiating yourself from others, building confidence in
                  your abilities, and demonstrating your talents in compelling
                  ways has become increasingly crucial.
                </p>
                <p className="mt-4 text-base tracking-normal leading-5">
                  We are excited to introduce you to Full ID Check, a secure and
                  verified platform designed specifically to enhance trust
                  within the Professional community and give you the platform
                  you deserve to shine.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col p-8 mt-12 w-full bg-stone-50 max-w-[1307px] rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-1 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-8 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-4 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/847a712d1df93557d257d4b9573a43ffa4d815402dff72094b6152e85552d7a4?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="max-w-full aspect-[1.72] w-[110px]"
                  />
                  <div className="mt-2 text-3xl font-semibold tracking-tighter leading-8 text-neutral-800 max-md:max-w-full">
                    Reputation Boost
                  </div>
                  <div className="mt-4 text-base tracking-tight leading-7 text-neutral-600 max-md:max-w-full">
                    Being verified on Full ID Check can really help you out
                    professionally. We have a solid verification process to make
                    sure people really say who they say they are. Once you're
                    verified, others will know they can trust your experience
                    and your qualifications are the real deal. Full ID Check
                    takes the time to properly check everyone on their site to
                    give members that extra level of trust and respect for their
                    work.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-8 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-4 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/43a3a6b66def634b452e41ae32493145a2d882369a7a283b799aaad819c7bef1?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="aspect-[0.91] w-[58px]"
                  />
                  <div className="mt-2 text-3xl font-semibold tracking-tighter leading-8 text-neutral-800 max-md:max-w-full">
                    Increased Trust
                  </div>
                  <div className="mt-4 text-base tracking-tight leading-7 text-neutral-600 max-md:max-w-full">
                    Reliability and trust are so important! When you join our
                    verified professional database, you show clients you're all
                    about being upfront and building trust. Having that
                    credibility behind you makes such a difference. People see
                    that you took the time to get verified and it tells them
                    you'll be there for them through thick and thin. With that
                    kind of reputation, you'll be top of mind for way more
                    opportunities.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 max-md:max-w-full">
            <div className="flex gap-1 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-8 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-4 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b5a57e6e9dd18fd9d5e97cb3a976081ef203a2a890cbe0190fbfe133ce766dc?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="max-w-full aspect-[1.61] w-[104px]"
                  />
                  <div className="mt-2 text-3xl font-semibold tracking-tighter leading-8 text-neutral-800 max-md:max-w-full">
                    Unlimited Opportunities
                  </div>
                  <div className="mt-4 text-base tracking-tight leading-7 text-neutral-600 max-md:max-w-full">
                    Full ID Check provides a means to both validate and verify
                    credentials, but also serves as a portal to new prospects
                    and prospects. As our platform is utilized by possible
                    clients and partners seeking trustworthy professionals,
                    registration provides access to a wide range of emerging
                    projects and potential collaborations. This exposure can
                    help advance your career meaningfully.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-8 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-4 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcfb85e6b1346723a21e1a7f4f39b7bd6ddcb4e005654081a5a6cffed3c9a181?apiKey=3ae96302e69649f5be368f89230b0596&"
                    className="aspect-[1.49] w-[95px]"
                  />
                  <div className="mt-2 text-3xl font-semibold tracking-tighter leading-8 text-neutral-800 max-md:max-w-full">
                    Community Building
                  </div>
                  <div className="mt-4 text-base tracking-tight leading-7 text-neutral-600 max-md:max-w-full">
                    Become a member of a professional community of peers where
                    you can cooperate, exchange concepts, and cultivate
                    professional relationships. Participation in Full ID Check
                    connects you with a network that promotes professional and
                    career advancement through collaborative and supportive
                    relationships.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-3.5 py-1.5 mt-12 w-full text-lg tracking-tight text-center max-w-[1131px] max-md:mt-10 max-md:max-w-full">
          <div className="leading-7 text-neutral-600 max-md:max-w-full">
            Becoming a registered professional provides the notable benefit of
            expanding your client potential on a global scale. This registration
            substantiates your abilities and know-how. It instills confidence in
            prospective clients internationally and signifies you as a credible,
            recognized authority. This elevated trust can cultivate more robust
            working relationships and potentially further your career
            development within the worldwide field.
          </div>
          <div className="self-center mt-11 text-blue-900 leading-[162%] max-md:mt-10 max-md:max-w-full">
            <span className="font-bold text-blue-900">By registering</span>
            <span className="text-blue-900">,</span>{" "}
            <span className="text-neutral-600">you assure people that </span>
            <span className="text-xl font-bold text-blue-900">
              “YOU ARE SECURE, YOU ARE VERIFIED, YOU ARE TRUSTWORTHY.”
            </span>{" "}
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
        <div className="self-start mt-12 text-3xl font-bold tracking-tighter leading-10 text-blue-900 max-md:mt-10 max-md:max-w-full max-sm:self-center max-sm:text-left">
          Register in 3 Easy Steps
        </div>

        <div className="justify-center self-end mt-9 max-w-full w-[1307px] max-md:pr-5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch p-10 w-full text-2xl font-semibold tracking-tight leading-6 text-white bg-blue-900 rounded-3xl border-blue-900 border-solid border-t-[12px] max-md:px-5 max-md:mt-4">
                <div className="flex justify-center items-center px-2.5 text-center whitespace-nowrap bg-teal-400 h-[60px] rounded-[100px] w-[60px] max-md:px-4 max-md:w-10 max-md:h-10">
                  1
                </div>
                <div className="mt-6 max-md:text-xl">Register</div>
                <div className="mt-4 text-lg tracking-tight leading-7 max-md:text-sm">
                  Begin by creating your account and fill in the necessary
                  information to initiate the verification process.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch p-10 w-full text-2xl font-semibold tracking-tight leading-6 text-white bg-blue-900 rounded-3xl border-blue-900 border-solid border-t-[12px] max-md:px-5 max-md:mt-4">
                <div className="flex justify-center items-center px-2.5 text-center whitespace-nowrap bg-teal-400 h-[60px] rounded-[100px] w-[60px] max-md:px-4 max-md:w-10 max-md:h-10">
                  2
                </div>
                <div className="mt-6 max-md:text-xl">Authenticate</div>
                <div className="mt-4 text-lg tracking-tight leading-7 max-md:text-sm">
                  Undergo quick facial recognition and submit your Passport,
                  Driver’s License, and Country ID for a secure registration
                  process.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch p-10 w-full text-2xl font-semibold tracking-tight leading-6 text-white bg-blue-900 rounded-3xl border-blue-900 border-solid border-t-[12px] max-md:px-5 max-md:mt-4">
                <div className="flex justify-center items-center px-2.5 text-center whitespace-nowrap bg-teal-400 h-[60px] rounded-[100px] w-[60px] max-md:px-4 max-md:w-10 max-md:h-10">
                  3
                </div>
                <div className="mt-6 max-md:text-xl">Get Verified</div>
                <div className="mt-4 text-lg tracking-tight leading-7 max-md:text-sm">
                  Upon registering, users receive a unique Full ID Check badge
                  number. This number serves as your professional identifier,
                  and can be displayed in email signatures, on websites, and in
                  other online spaces.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start mt-16 w-full bg-white max-w-[1307px] max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full max-lg:h-full max-lg:mt-[50px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5c410857fb28e2d0120afab8c091740b354aad7d03bfc4b04ab6f48c0d5031e8?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c410857fb28e2d0120afab8c091740b354aad7d03bfc4b04ab6f48c0d5031e8?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c410857fb28e2d0120afab8c091740b354aad7d03bfc4b04ab6f48c0d5031e8?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c410857fb28e2d0120afab8c091740b354aad7d03bfc4b04ab6f48c0d5031e8?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c410857fb28e2d0120afab8c091740b354aad7d03bfc4b04ab6f48c0d5031e8?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c410857fb28e2d0120afab8c091740b354aad7d03bfc4b04ab6f48c0d5031e8?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c410857fb28e2d0120afab8c091740b354aad7d03bfc4b04ab6f48c0d5031e8?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c410857fb28e2d0120afab8c091740b354aad7d03bfc4b04ab6f48c0d5031e8?apiKey=3ae96302e69649f5be368f89230b0596&"
                  className="grow w-full aspect-[1.75] max-md:mt-9 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch max-md:mt-8 max-md:max-w-full">
                  <div className="text-3xl font-bold tracking-tighter leading-10 text-blue-900 max-md:max-w-full">
                    Unlocking Opportunities and Trust with FullIDCheck
                  </div>
                  <div className="mt-9 text-base tracking-tight leading-7 text-neutral-600 max-md:max-w-full">
                    Full ID Check provides a secure, verified platform intended
                    to promote trust within professional networks and empower
                    professionals to showcase their expertise. <br />
                    <br />
                    Registration on the site as a verified professional offers
                    the considerable benefit of expanding one's reach to a
                    global clientele. Notable is that the registration acts to
                    substantiate skills and experience, building confidence
                    among potential worldwide clients by distinguishing
                    registered users as credible, recognized industry
                    professionals. This elevated trust can cultivate more robust
                    professional relationships and conceivably advance careers
                    within the global field.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
