import React from "react";
import SidePanel from "../../components/SidePanel";
import TopBanner from "../../components/TopBanner";

function BenefitPage() {
  const imgUrl =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/f50bc7574a4f81d8afcd8c3255dc5cd925cb0c7e5a617ad185108353d9971d17?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f50bc7574a4f81d8afcd8c3255dc5cd925cb0c7e5a617ad185108353d9971d17?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f50bc7574a4f81d8afcd8c3255dc5cd925cb0c7e5a617ad185108353d9971d17?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f50bc7574a4f81d8afcd8c3255dc5cd925cb0c7e5a617ad185108353d9971d17?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f50bc7574a4f81d8afcd8c3255dc5cd925cb0c7e5a617ad185108353d9971d17?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f50bc7574a4f81d8afcd8c3255dc5cd925cb0c7e5a617ad185108353d9971d17?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f50bc7574a4f81d8afcd8c3255dc5cd925cb0c7e5a617ad185108353d9971d17?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f50bc7574a4f81d8afcd8c3255dc5cd925cb0c7e5a617ad185108353d9971d17?apiKey=3ae96302e69649f5be368f89230b0596&";
  const bannerImg =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/8502cbc35c4d9fd14a0776664966aedadbcacc8d597bb44280e9d169798a43ad?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8502cbc35c4d9fd14a0776664966aedadbcacc8d597bb44280e9d169798a43ad?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8502cbc35c4d9fd14a0776664966aedadbcacc8d597bb44280e9d169798a43ad?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8502cbc35c4d9fd14a0776664966aedadbcacc8d597bb44280e9d169798a43ad?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8502cbc35c4d9fd14a0776664966aedadbcacc8d597bb44280e9d169798a43ad?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8502cbc35c4d9fd14a0776664966aedadbcacc8d597bb44280e9d169798a43ad?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8502cbc35c4d9fd14a0776664966aedadbcacc8d597bb44280e9d169798a43ad?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8502cbc35c4d9fd14a0776664966aedadbcacc8d597bb44280e9d169798a43ad?apiKey=3ae96302e69649f5be368f89230b0596&";

  return (
    <div>
      <TopBanner bannerImg={bannerImg} />
      <div className="justify-end self-center mt-16 mb-[200px] w-full m-auto max-w-[1366px] max-md:mt-10 max-md:max-w-full p-[20px]">
        <div className="flex gap-0 max-md:flex-col max-md:gap-0 ">
          <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow self-stretch px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-bold tracking-tight leading-9 text-blue-900 max-md:max-w-full">
                We strive to create an environment where industry experts feel
                comfortable engaging with their peers, sharing knowledge and
                insights, and seeking guidance.
              </div>
              <div className="mt-2 text-lg tracking-tight leading-7 text-zinc-600 max-md:max-w-full">
                We want the Professionals to feel they have a home and can ask
                questions in the forums
              </div>
              <div className="mt-10 max-md:max-w-full">
                <div className="flex gap-0 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-6">
                      <div className="flex flex-col justify-center px-4 w-full bg-white">
                        <div className="flex gap-2 max">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/337ca416567271e6fd6a012a7085610c8fc427ee8b84fee94282da4ad071b35f?apiKey=3ae96302e69649f5be368f89230b0596&"
                            className="shrink-0 self-start w-6 aspect-square"
                          />
                          <div className="flex flex-col flex-1">
                            <div className="text-2xl font-bold tracking-tight leading-8 text-neutral-600">
                              Exclusive Learning Opportunities
                            </div>
                            <div className="mt-2 text-base tracking-tight leading-7 text-zinc-600">
                              Participate in webinars, workshops, and online
                              courses to expand your expertise. Remain at the
                              forefront by staying abreast of emerging
                              technologies and industry trends through our
                              offerings.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center px-4 mt-8 w-full bg-white">
                        <div className="flex gap-2">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9910bffc96cdab3198bec70010fe4124ed84d6da134623593ccc5ee05ed05762?apiKey=3ae96302e69649f5be368f89230b0596&"
                            className="shrink-0 self-start w-6 aspect-square"
                          />
                          <div className="flex flex-col flex-1">
                            <div className="text-2xl font-bold tracking-tight leading-8 text-neutral-600">
                              Competitions and Challenges
                            </div>
                            <div className="mt-2 text-base tracking-tight leading-7 text-zinc-600">
                              Participate in our routine challenges to
                              demonstrate your abilities. With appealing prizes
                              available, these events offer not only the
                              excitement of contesting but also the satisfaction
                              of being acknowledged.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center px-4 mt-8 w-full bg-white min-md:aspect-square">
                        <div className="flex gap-2">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e99b6e8fc72c63c574b23b008ea6d706170dadc8e182ff386c5d1d1bb4a5e798?apiKey=3ae96302e69649f5be368f89230b0596&"
                            className="shrink-0 self-start w-6 aspect-square"
                          />
                          <div className="flex flex-col flex-1">
                            <div className="text-2xl font-bold tracking-tight leading-8 text-neutral-600">
                              Bradge Draws
                            </div>
                            <div className="mt-2 text-base tracking-tight leading-7 text-zinc-600">
                              You also stand a chance to win impressive rewards.
                              Each month, we host an exhilarating badge draw
                              exclusively for our members, with every
                              participant automatically entered. This unique
                              opportunity allows you to win a significant
                              jackpot, which accumulates each month until a
                              fortunate member claims it.
                              <br />
                              <br /> Moreover, our referral program adds to the
                              excitement. For every professional applicant you
                              bring into our community, you'll receive a $10.00
                              bonus credited directly to your account. This
                              initiative isn't just about the rewards; it's
                              about fostering a culture of innovation and
                              support.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col max-md:mt-6">
                      <div className="flex flex-col justify-center px-4 w-full bg-white">
                        <div className="flex gap-2">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/737fbd63f487b64345c97a27d63ae2c66f5072f439b96d7de6785f14d34c082d?apiKey=3ae96302e69649f5be368f89230b0596&"
                            className="shrink-0 self-start w-6 aspect-square"
                          />
                          <div className="flex flex-col flex-1">
                            <div className="text-2xl font-bold tracking-tight leading-8 text-neutral-600">
                              Vibrant Community and Networking
                            </div>
                            <div className="mt-2 text-base tracking-tight leading-7 text-zinc-600">
                              We invite you to join our vibrant professional
                              network. Leverage opportunities for relationship
                              building, guidance, and teamwork, and interact
                              with colleagues who similarly strive for
                              advancement in their field.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center px-4 mt-8 w-full bg-white">
                        <div className="flex gap-2">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18232f98c3a98f9847538f9e0af94e8a19be164c3240532cc3a4f9ef31885880?apiKey=3ae96302e69649f5be368f89230b0596&"
                            className="shrink-0 self-start w-6 aspect-square"
                          />
                          <div className="flex flex-col flex-1">
                            <div className="text-2xl font-bold tracking-tight leading-7 text-neutral-600">
                              Recognition and Badges
                            </div>
                            <div className="mt-2 text-base tracking-tight leading-7 text-zinc-600">
                              We appreciate all member contributions to our
                              community. A badges and levels system has been
                              developed to recognize activity levels, experience
                              gained, and contributions made by each member to
                              further strengthen our community.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center px-4 mt-8 w-full bg-white">
                        <div className="flex gap-2">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c805b6bb9548328d4db01a342ab68e3e700297d44c9bb7d109c387e48e6af098?apiKey=3ae96302e69649f5be368f89230b0596&"
                            className="shrink-0 self-start w-6 aspect-square"
                          />
                          <div className="flex flex-col flex-1">
                            <div className="text-2xl font-bold tracking-tight leading-7 text-neutral-600">
                              Your Voice Matters
                            </div>
                            <div className="mt-2 text-base tracking-tight leading-7 text-zinc-600">
                              We welcome input from our users to help guide the
                              direction of our website, products, and forums.
                              Your participation in polls, surveys, and
                              respectful discussions within our community spaces
                              allows for collaborative progress that benefits
                              all.
                            </div>
                          </div>
                        </div>
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
    </div>
  );
}

export default BenefitPage;
