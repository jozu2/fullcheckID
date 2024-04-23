import React from "react";
import TopBanner from "../../components/TopBanner";
import SidePanel from "../../components/SidePanel";

function TermsAndConditions() {
  const imgBanner =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/8338b7a347f1233bd39879858483d5cef10bb8eae70aa1030e6b400988f340a6?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8338b7a347f1233bd39879858483d5cef10bb8eae70aa1030e6b400988f340a6?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8338b7a347f1233bd39879858483d5cef10bb8eae70aa1030e6b400988f340a6?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8338b7a347f1233bd39879858483d5cef10bb8eae70aa1030e6b400988f340a6?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8338b7a347f1233bd39879858483d5cef10bb8eae70aa1030e6b400988f340a6?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8338b7a347f1233bd39879858483d5cef10bb8eae70aa1030e6b400988f340a6?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8338b7a347f1233bd39879858483d5cef10bb8eae70aa1030e6b400988f340a6?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8338b7a347f1233bd39879858483d5cef10bb8eae70aa1030e6b400988f340a6?apiKey=3ae96302e69649f5be368f89230b0596&";
  const imgUrl =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b9b6336a9d61ad74d1a23adaff3ef4107f3fbaabf840a39262881fe5ea88b812?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9b6336a9d61ad74d1a23adaff3ef4107f3fbaabf840a39262881fe5ea88b812?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9b6336a9d61ad74d1a23adaff3ef4107f3fbaabf840a39262881fe5ea88b812?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9b6336a9d61ad74d1a23adaff3ef4107f3fbaabf840a39262881fe5ea88b812?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9b6336a9d61ad74d1a23adaff3ef4107f3fbaabf840a39262881fe5ea88b812?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9b6336a9d61ad74d1a23adaff3ef4107f3fbaabf840a39262881fe5ea88b812?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9b6336a9d61ad74d1a23adaff3ef4107f3fbaabf840a39262881fe5ea88b812?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9b6336a9d61ad74d1a23adaff3ef4107f3fbaabf840a39262881fe5ea88b812?apiKey=3ae96302e69649f5be368f89230b0596&";

  return (
    <>
      <TopBanner bannerImg={imgBanner} />
      <div className="self-center mt-16 w-full max-w-[1366px] max-md:mt-10 max-md:max-w-full m-auto ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 max-md:mt-10 max-md:max-w-full">
              {/* Terms and conditions of use */}
              <div className="text-3xl font-bold tracking-tight leading-9 text-blue-900 max-md:max-w-full">
                Terms and Conditions of Use
              </div>
              <div className="mt-4 text-base leading-8 text-zinc-600 max-md:max-w-full">
                PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THIS SITE.
              </div>{" "}
              <div className="flex flex-col self-stretch px-5 py-4 bg-white max-w-[860px]">
                <div className="flex flex-col px-5 pb-4 max-md:max-w-full">
                  <div className="text-2xl font-semibold tracking-tight leading-7 text-indigo-950 max-md:max-w-full">
                    Definitions and Site Ownership
                  </div>
                  <div className="mt-4 text-base leading-8  text-zinc-600 max-md:max-w-full">
                    In the context of this policy, the terms &quot;we,&quot;
                    &quot;us,&quot; and &quot;our&quot; refer specifically to
                    Blockchain Management Corporation Pty Ltd. When we mention
                    &quot;team members&quot; and &quot;associates,&quot; we
                    encompass a broad spectrum of individuals under our
                    direction. This includes, but is not limited to, employees,
                    contractors, agents, and interns. The term
                    &quot;representatives&quot; describes external parties
                    engaged in conducting business related to our operations or
                    on our behalf. This diverse group includes clients,
                    contractors, subcontractors, suppliers, consultants, legal
                    professionals, accountants, lobbyists, sales
                    representatives, brokers, and franchise owners.
                    <br />
                    <br />
                    Ownership and Operation of the Site: This website, referred
                    to as the &quot;Site,&quot; is owned and operated by
                    Blockchain Management Corporation Pty Ltd. The domains{" "}
                    <a
                      href="https://devreg.org"
                      className="underline"
                      target="_blank"
                    >
                      https://devreg.org
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://fullidcheck.com"
                      className="underline"
                      target="_blank"
                    >
                      https://fullidcheck.com
                    </a>{" "}
                    are included under this ownership (collectively referred to
                    as &quot;
                    <a
                      href="https://devreg.org"
                      className="underline"
                      target="_blank"
                    >
                      https://devreg.org
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://fullidcheck.com"
                      className="underline"
                      target="_blank"
                    >
                      https://fullidcheck.com
                    </a>
                    &quot; in this document). As the proprietors of these
                    domains, we manage, control, and maintain the content and
                    services provided within these websites.
                    <br />
                    <br />
                    This Site is intended for personal and commercial purposes
                    and is specifically designed to enable applicants to
                    demonstrate their verified identity to potential clients.
                    Materials from{" "}
                    <a
                      href="https://devreg.org"
                      className="underline"
                      target="_blank"
                    >
                      https://devreg.org
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://fullidcheck.com"
                      className="underline"
                      target="_blank"
                    >
                      https://fullidcheck.com
                    </a>
                    , along with any related websites managed, owned, or
                    operated by these domains, are available for use in a
                    professional context. While users are permitted to download
                    a single copy of these materials for private use on a
                    personal computer, all copyrights and proprietary notices
                    must be maintained. Any commercial use of these materials
                    should align with the intended purpose of identity
                    verification and professionalism. Unauthorized copying,
                    reproduction, republishing, uploading, posting,
                    transmitting, or distributing of these materials, or any
                    modification for purposes beyond the stated scope,
                    constitutes an infringement of the intellectual property
                    rights of{" "}
                    <a
                      href="https://devreg.org"
                      className="underline"
                      target="_blank"
                    >
                      https://devreg.org
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://fullidcheck.com"
                      className="underline"
                      target="_blank"
                    >
                      https://fullidcheck.com
                    </a>
                    .
                  </div>
                </div>
                <div className="px-5 pb-4 mt-4 text-base leading-8  text-zinc-600 max-md:max-w-full">
                  <ol>
                    <li>
                      Under this Agreement, using any material from this Site on
                      other websites or networked computer environments is not
                      allowed. The trademarks, service marks, and trade names
                      (referred to collectively as the &quot;Marks&quot;) belong
                      exclusively to{" "}
                      <a
                        href="https://devreg.org"
                        className="underline"
                        target="_blank"
                      >
                        https://devreg.org
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://fullidcheck.com"
                        className="underline"
                        target="_blank"
                      >
                        https://fullidcheck.com
                      </a>
                      , or their respective owners who have authorized their use
                      by these domains. Unauthorized use of content, derivative
                      works from this Site, and the employment of data mining,
                      robots, or similar data gathering and extraction tools are
                      expressly forbidden. Users are prohibited from framing any
                      part of this Site or its content.{" "}
                    </li>
                  </ol>
                </div>
                <div className="px-5 pb-4 mt-4 text-base leading-8  text-zinc-600 max-md:max-w-full">
                  <ol>
                    <li>
                      {" "}
                      <a
                        href="https://devreg.org"
                        className="underline"
                        target="_blank"
                      >
                        https://devreg.org
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://fullidcheck.com"
                        className="underline"
                        target="_blank"
                      >
                        https://fullidcheck.com
                      </a>{" "}
                      endeavors to provide accurate and current information on
                      this Site. However, no guarantees are made regarding the
                      accuracy of this information. Neither{" "}
                      <a
                        href="https://devreg.org"
                        className="underline"
                        target="_blank"
                      >
                        https://devreg.org
                      </a>{" "}
                      nor{" "}
                      <a
                        href="https://fullidcheck.com"
                        className="underline"
                        target="_blank"
                      >
                        https://fullidcheck.com
                      </a>{" "}
                      accepts liability for any inaccuracies or
                      misrepresentations in the Site's content.
                    </li>
                  </ol>
                </div>
                <div className="px-5 pb-4 mt-4 text-base leading-8  text-zinc-600 max-md:max-w-full">
                  <ol>
                    <li>
                      {" "}
                      Neither{" "}
                      <a
                        href="https://devreg.org"
                        className="underline"
                        target="_blank"
                      >
                        https://devreg.org
                      </a>{" "}
                      nor{" "}
                      <a
                        href="https://fullidcheck.com"
                        className="underline"
                        target="_blank"
                      >
                        https://fullidcheck.com
                      </a>{" "}
                      is responsible for any damage arising from the use or
                      misuse of information made public on the Site, either
                      voluntarily or involuntarily, by any third party. When
                      disclosing personal information on the Site, users do so
                      at their own risk and should be prudent in what they share
                    </li>
                  </ol>
                </div>
                <div className="px-5 pb-4 mt-4 text-base leading-8  text-zinc-600 max-md:max-w-full">
                  <ol>
                    <li>
                      This Site is a robust platform primarily for verifying
                      identities and facilitating professional interactions
                      rather than personal meetings. While it includes a forum
                      for members to engage and share opinions, personal
                      physical meetings are only permitted under specific
                      conditions, such as when a client has verified a member's
                      identity. The forum is closely moderated, particularly to
                      protect underage users, ensuring a safe and respectful
                      online environment. While{" "}
                      <a
                        href="https://devreg.org"
                        className="underline"
                        target="_blank"
                      >
                        https://devreg.org
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://fullidcheck.com"
                        className="underline"
                        target="_blank"
                      >
                        https://fullidcheck.com
                      </a>{" "}
                      provide the framework for these professional and online
                      interactions, they do not oversee these activities
                      directly. Participants are strongly advised to exercise
                      caution and sound judgment when verifying identities and
                      engaging in forum discussions.
                    </li>
                  </ol>
                </div>
                <div className="px-5 pb-4 mt-4 text-base leading-8 text-zinc-600 max-md:max-w-full">
                  <ol>
                    <li>
                      <span className="font-bold">
                        Member Dashboard and Credit System
                      </span>
                    </li>
                  </ol>{" "}
                  <span className="font-bold">a. Accumulating Credits:</span>{" "}
                  Members can earn credits on their dashboard through various
                  means: by referring new members, winning the badge draw, or
                  participating in competitions with cash prizes. Each of these
                  activities has specific terms that govern how credits are
                  earned. <br />{" "}
                  <span className="font-bold">b. Using Credits:</span> Credits
                  accumulated in a member's dashboard can be utilized to
                  purchase products or services offered on our website. This
                  includes membership fees, exclusive content, or any other
                  items we may offer for sale.
                  <br />{" "}
                  <span className="font-bold"> c. Credit Redemption: </span>
                  Members have the flexibility to use their credits at their
                  discretion within the Site. The process for redemption will be
                  straightforward and accessible directly from the dashboard.
                  <br />{" "}
                  <span className="font-bold">
                    d. Limitations and Conditions:
                  </span>{" "}
                  While credits are versatile, they may be subject to certain
                  limitations or conditions, such as expiry dates, specific
                  redemption rules, or restrictions on certain products or
                  services. These specifics will be clearly communicated on our
                  website.
                  <br />{" "}
                  <span className="font-bold">
                    e. Non-Transferability:
                  </span>{" "}
                  Credits earned are non-transferable and are tied to the
                  individual member's account. They cannot be exchanged or sold
                  to other members or external parties.
                  <br />{" "}
                  <span className="font-bold">
                    f. Withdrawal of Credits:
                  </span>{" "}
                  In the case of choosing to cash out credits (where
                  applicable), members must follow the specified procedure, and
                  the payout will be processed by our administration in a timely
                  manner.
                  <br />{" "}
                  <span className="font-bold">
                    {" "}
                    g. Adjustment and Cancellation:
                  </span>{" "}
                  We reserve the right to adjust or cancel credits in case of
                  any discrepancies, fraudulent activities, or violations of our
                  Terms and Conditions.
                </div>
              </div>
              <div className="px-5 pb-4 max-md:max-w-full">
                <ol>
                  <li>
                    <span className="font-bold">
                      Terms and Conditions for Underage Members
                    </span>
                  </li>
                </ol>{" "}
                <span className="font-bold">
                  {" "}
                  a. Eligibility for Underage Members:{" "}
                </span>
                Individuals below the age of 18 (referred to as &quot;Underage
                Members&quot;) are eligible to join our website but must adhere
                to additional verification and consent processes as outlined
                below.
                <br />
                <span className="font-bold">
                  {" "}
                  b. Parental Consent and Registration:
                </span>
                <ol>
                  <ol>
                    <ol>
                      <li>
                        Underage Members must have a parent or legal guardian
                        complete the registration process on their behalf.
                      </li>
                      <li>
                        This process includes submitting government-issued
                        identification documents to verify the age and identity
                        of the Underage Member.
                      </li>
                      <li>
                        The parent or guardian must undergo facial recognition
                        verification along with the Underage Member as part of
                        the registration.
                      </li>
                    </ol>
                  </ol>
                </ol>
                <span className="font-bold"> c. Mandatory Live Interview:</span>
                <ol>
                  <ol>
                    <ol>
                      <li>
                        Upon successful initial verification, Underage Members
                        are required to participate in a 15-minute live
                        interview conducted via Zoom with a Senior Country
                        Manager.
                      </li>
                      <li>
                        The interview is designed to assess the suitability of
                        the Underage Member for participation on the Site.
                      </li>
                    </ol>
                  </ol>
                </ol>
                <span className="font-bold"> d. Parental Responsibility:</span>
                <ol>
                  <ol>
                    <ol>
                      <li>
                        The parent or legal guardian is responsible for all
                        actions taken by the Underage Member on the site.
                      </li>
                      <li>
                        This responsibility includes oversight of the Underage
                        Member’s interactions and contributions on the website.
                      </li>
                    </ol>
                  </ol>
                </ol>
                <span className="font-bold">
                  {" "}
                  e. Compliance with Site Rules:
                </span>
                <ol>
                  <ol>
                    <ol>
                      <li>
                        Underage Members must comply with all website rules and
                        guidelines, including those related to content posting,
                        interactions with other members, and participation in
                        any site activities or events.
                      </li>
                      <li>
                        Violation of these rules may result in suspension or
                        termination of the Underage Member’s account.
                      </li>
                    </ol>
                  </ol>
                </ol>
                <span className="font-bold"> f. Data Privacy and Safety:</span>
                <ol>
                  <ol>
                    <ol>
                      <li>
                        We are committed to protecting the privacy and safety of
                        our Underage Members. Personal information will be
                        handled in accordance with our Privacy Policy and
                        applicable data protection laws.
                      </li>
                      <li>
                        We encourage parents or guardians to monitor the
                        Underage Member’s use of the site to ensure a safe and
                        positive experience.
                      </li>
                    </ol>
                  </ol>
                </ol>
                <span className="font-bold">
                  {" "}
                  g. Amendments to Underage Member Terms:
                </span>
                <ol>
                  <ol>
                    <ol>
                      <li>
                        These terms and conditions are subject to change. We
                        will notify the parent or guardian of any significant
                        changes that affect the participation of Underage
                        Members.
                      </li>
                      <li>
                        Continued use of the site by the Underage Member after
                        changes have been made will constitute acceptance of the
                        revised terms.
                      </li>
                    </ol>
                  </ol>
                </ol>
              </div>
              <div className="flex flex-col px-5 pb-4 mt-4 max-md:max-w-full">
                <div className="font-bold max-md:max-w-full">
                  Terms and Conditions for Underage Members
                </div>
                <div className="mt-4 font-bold max-md:max-w-full">
                  A. Eligibility for Underage Members:{" "}
                  <span className="">
                    Individuals below the age of 18 (referred to as
                    &quot;Underage Members&quot;) are eligible to join our
                    website but must adhere to additional verification and
                    consent processes as outlined below.
                  </span>
                </div>
                <div className="flex flex-col pl-10 max-md:pl-5 max-md:max-w-full">
                  <div className="font-bold max-md:max-w-full">
                    B. Parental Consent and Registration:
                  </div>
                  <div className="max-md:max-w-full">
                    Underage Members must have a parent or legal guardian
                    complete the registration process on their behalf.
                    <br />
                    This process includes submitting government-issued
                    identification documents to verify the age and identity of
                    the Underage Member.
                    <br />
                    The parent or guardian must undergo facial recognition
                    verification along with the Underage Member as part of the
                    registration.
                  </div>
                </div>
                <div className="flex flex-col pl-10 max-md:pl-5 max-md:max-w-full">
                  <div className="font-bold max-md:max-w-full">
                    C. Mandatory Live Interview:
                  </div>
                  <div className="max-md:max-w-full">
                    Upon successful initial verification, Underage Members are
                    required to participate in a 15-minute live interview
                    conducted via Zoom with a Senior Country Manager.
                    <br />
                    The interview is designed to assess the suitability of the
                    Underage Member for participation on the Site.
                  </div>
                </div>
                <div className="flex flex-col pl-10 max-md:pl-5 max-md:max-w-full">
                  <div className="font-bold max-md:max-w-full">
                    D. Parental Responsibility:
                  </div>
                  <div className="max-md:max-w-full">
                    The parent or legal guardian is responsible for all actions
                    taken by the Underage Member on the site.
                    <br />
                    This responsibility includes oversight of the Underage
                    Member’s interactions and contributions on the website.
                  </div>
                </div>
                <div className="flex flex-col pl-10 max-md:pl-5 max-md:max-w-full">
                  <div className="font-bold max-md:max-w-full">
                    E. Compliance with Site Rules:
                  </div>
                  <div className="max-md:max-w-full">
                    Underage Members must comply with all website rules and
                    guidelines, including those related to content posting,
                    interactions with other members, and participation in any
                    site activities or events.
                    <br />
                    Violation of these rules may result in suspension or
                    termination of the Underage Member’s account.
                  </div>
                </div>
                <div className="flex flex-col pl-10 max-md:pl-5 max-md:max-w-full">
                  <div className="font-bold max-md:max-w-full">
                    F. Data Privacy and Safety:
                  </div>
                  <div className="max-md:max-w-full">
                    We are committed to protecting the privacy and safety of our
                    Underage Members. Personal information will be handled in
                    accordance with our Privacy Policy and applicable data
                    protection laws.
                    <br />
                    We encourage parents or guardians to monitor the Underage
                    Member’s use of the site to ensure a safe and positive
                    experience.
                  </div>
                </div>
                <div className="flex flex-col pl-10 max-md:pl-5 max-md:max-w-full">
                  <div className="font-bold max-md:max-w-full">
                    G. Amendments to Underage Member Terms:
                  </div>
                  <div className="max-md:max-w-full">
                    These terms and conditions are subject to change. We will
                    notify the parent or guardian of any significant changes
                    that affect the participation of Underage Members.
                    <br />
                    Continued use of the site by the Underage Member after
                    changes have been made will constitute acceptance of the
                    revised terms.
                    <br />
                  </div>
                </div>
                <div className="font-bold max-md:max-w-full">
                  H. Terms and Conditions for Participation of Minors (Age
                  13-18)
                  <br />
                </div>
                <div className="flex flex-col pl-12 font-semibold max-md:pl-5 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    <ol>
                      <li>
                        Terms and Conditions for Participation of Minors (Age
                        13-18)
                      </li>
                    </ol>
                    <span className="">
                      The minimum age for participation on the site is
                      explicitly set at 13 years old. This policy complies with
                      international standards, including the Children's Online
                      Privacy Protection Act (COPPA) and equivalent global
                      regulations, ensuring the safety and privacy of underage
                      users.
                    </span>
                  </div>
                  <div className="mt-2.5 max-md:max-w-full">
                    <ol>
                      <li>
                        Terms and Conditions for Participation of Minors (Age
                        13-18)
                      </li>
                    </ol>
                    <ul>
                      <li>
                        <span className="">
                          Users between 13 and 18 years of age are required to
                          obtain verifiable parental consent. This process
                          involves parents or legal guardians providing consent
                          through a secure online system, which verifies their
                          identity and relationship to the minor.
                        </span>
                      </li>
                      <li>
                        <span className="">
                          Regular audits will be conducted to ensure ongoing
                          compliance with this verification process.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-2.5 max-md:max-w-full">
                    <ol>
                      <li>Supervised Access in Main Forum Areas:</li>
                    </ol>
                    <ul>
                      <li>
                        <span className="">
                          Minors are allowed to participate only in the main
                          forum areas, focusing on software development and
                          coding discussions.
                        </span>
                      </li>
                      <li>
                        <span className="">
                          These forums are under the constant supervision of
                          Senior Moderators trained in child safety and online
                          community management.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-2.5 max-md:max-w-full">
                    <ol>
                      <li>Messaging and Communication Controls:</li>
                    </ol>
                    <span className="">
                      a. Personal messaging features for underage users are
                      locked to prevent unsolicited contact. The only
                      permissible direct messages are from administrators for
                      necessary communication or to address complaints and
                      concerns raised by the minors.
                    </span>
                  </div>
                  <div className="mt-2.5 max-md:max-w-full">
                    <ol>
                      <li>
                        Content Moderation and Family-Friendly Environment:
                      </li>
                    </ol>
                    <span className="">
                      a. Strict moderation ensures that language and behavior
                      within the forums remain appropriate and family-friendly.
                      Automated filters and manual oversight are in place to
                      enforce these standards.
                    </span>
                  </div>
                  <div className="mt-2.5 max-md:max-w-full">
                    <ol>
                      <li>
                        Encouragement of Learning and Sponsorship Opportunities:
                      </li>
                    </ol>
                    <span className="">
                      a. The forums are designed to foster learning, with bright
                      and talented young members being potential candidates for
                      sponsorship programs, supporting their educational and
                      professional growth.
                    </span>
                  </div>
                  <div className="mt-2.5 max-md:max-w-full">
                    <ol>
                      <li>Commitment to Safe Practices:</li>
                    </ol>
                    <span className="">
                      a. We are dedicated to safeguarding all members,
                      regardless of age, against abuse and unsafe practices. Our
                      safety protocols are periodically reviewed and updated to
                      adapt to evolving online risks.
                    </span>
                  </div>
                  <div className="mt-2.5 max-md:max-w-full">
                    <ol>
                      <li>Reporting and Response System:</li>
                    </ol>
                    <span className="">
                      a. A transparent and accessible reporting system is
                      available for users to report any concerns. Responses to
                      such reports will be prompt, ensuring the continued safety
                      of our online environment
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col self-stretch px-5 py-4 text-base leading-8 bg-white max-w-[860px] text-zinc-600">
                <div className="flex flex-col px-5 pb-4 max-md:max-w-full">
                  <div className="font-bold max-md:max-w-full">
                    Member Badge Draw and Dashboard Credit Terms
                  </div>
                  <div className="mt-4 font-bold max-md:max-w-full">
                    <ol>
                      <li>Dashboard Overview</li>
                    </ol>
                    <span className="">
                      a. Each member's dashboard is a multifunctional area where
                      they can track and manage their credits. This includes
                      rewards from referrals, winnings from competitions, and
                      prizes from the Badge Draw.
                    </span>
                  </div>
                  <div className="flex flex-col pl-10 max-md:pl-5 max-md:max-w-full">
                    <div className="font-bold max-md:max-w-full">
                      Earning Credits:
                    </div>
                    <div className="max-md:max-w-full">
                      a. Referrals: Bringing a new member earns a $10.00 USD
                      credit.
                      <br />
                      b. Competitions: Participating and winning in competitions
                      results in cash prizes credited to the dashboard.
                      <br />
                      c. Badge Draw: Winning the weekly Badge Draw adds the
                      prize to the member's credit.
                    </div>
                  </div>
                  <div className="flex flex-col items-start pl-20 max-md:pl-5 max-md:max-w-full">
                    <div className="ml-5 font-bold max-md:max-w-full">
                      1. Utilizing Credits: Credits accumulated in a member's
                      dashboard can be used for:
                    </div>
                    <div className="ml-5 max-md:max-w-full">
                      a. Membership Fees: Apply credits towards membership
                      renewal or other related fees.
                      <br />
                      b. Purchases: Buy products or services offered on the
                      website.
                      <br />
                      c. Cash Out: Members can request a payout of their
                      credits, which the site administration will process.
                    </div>
                  </div>
                  <div className="flex flex-col items-start pl-20 max-md:pl-5 max-md:max-w-full">
                    <div className="ml-5 font-bold max-md:max-w-full">
                      {" "}
                      Badge Draw Specifics:
                    </div>
                    <div className="ml-5 max-md:max-w-full">
                      a. Participation: All registered members are automatically
                      entered into the weekly Badge Draw.
                      <br />
                      b. Selection and Notification: Winners are randomly
                      selected and notified through the contact information
                      provided in their profile.
                      <br />
                      c. Prize Allocation: Badge Draw winnings are credited
                      directly to the member's dashboard.
                    </div>
                  </div>
                  <div className="flex flex-col items-start pl-20 max-md:pl-5 max-md:max-w-full">
                    <div className="ml-5 font-bold max-md:max-w-full">
                      Badge Terms and Conditions:
                    </div>
                    <div className="ml-5 max-md:max-w-full">
                      a. Modification Rights: We reserve the right to modify or
                      discontinue the Badge Draw, competitions, and referral
                      systems at any time.
                      <br />
                      b. Compliance: Members are responsible for ensuring that
                      their participation complies with local laws.
                      <br />
                      c. Non-transferable: Credits and winnings cannot be
                      transferred between members
                    </div>
                  </div>
                </div>
                <div className="flex flex-col px-5 pb-4 mt-4 font-bold max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    Detailed Process of Identity Verification and Anonymity
                    Post-Verification:
                  </div>
                  <div className="flex flex-col pl-10 mt-4 max-md:pl-5 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      a. Initial Document Upload:{" "}
                      <span className="">
                        Applicants are required to upload two forms of
                        government-issued identification and a recent utility
                        bill (not older than 30 days) for address verification
                        during the sign-up process. This step is vital for
                        authenticating the member's identity.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      b. Data Handling Post-Verification:{" "}
                      <span className="">
                        Once a member’s identity is verified and they are
                        accepted into the site, the following data handling
                        procedures are implemented:
                      </span>
                      <br />
                      <span className="">
                        · The provided identification documents are compiled
                        into a single file, encrypted, and zipped.
                      </span>
                      <br />
                      <span className="">
                        · This file is then labeled with the member’s unique
                        serial number and transferred to secure offline storage.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      c. Permanent Deletion from Online Server:{" "}
                      <span className="">
                        Subsequent to the transfer to offline storage, all
                        personal information and documents initially uploaded to
                        the online server are permanently deleted. This ensures
                        that sensitive personal data does not remain online
                        beyond the necessary period.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      d. Retention and Use of Serial Number:{" "}
                      <span className="">
                        After the verification process, the member's unique
                        serial number remains the only piece of identifying
                        information on the website. Members may then add
                        additional information to their profiles at their
                        discretion.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      e. Privacy and Anonymity:{" "}
                      <span className="">
                        Our stringent privacy measures guarantee that members’
                        personal information, beyond their unique serial number,
                        is not stored on the website. This policy ensures the
                        anonymity of our members post-verification.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      f. Commitment to Member Privacy:{" "}
                      <span className="">
                        These procedures illustrate our unwavering commitment to
                        privacy and security. We are dedicated to ensuring that
                        our members' personal information is handled with the
                        utmost care and confidentiality.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col px-5 pb-4 mt-4 font-bold max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    Forum Participation Guidelines:
                  </div>
                  <div className="flex flex-col pl-10 mt-4 max-md:pl-5 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      a. User Identification:{" "}
                      <span className="">
                        Each user category is assigned a specific text color for
                        easy identification. Moderators are identified in blue
                        for efficient monitoring, especially for the supervision
                        of underage users. Other colors are assigned to
                        different user categories, providing an additional layer
                        of privacy and security.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      b. Underage User Protection:{" "}
                      <span className="">
                        Special attention is given to protecting underage users.
                        Any communication with or about underage users must be
                        appropriate, respectful, and strictly non-exploitative.
                        Moderators will closely monitor interactions involving
                        these users.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      c. Appropriate Content:{" "}
                      <span className="">
                        All forum users must refrain from posting content that
                        is inappropriate, offensive, or harmful, particularly
                        content that could negatively impact underage users.
                        This includes, but is not limited to, explicit language,
                        hate speech, and adult content.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      d. Privacy and Safety:{" "}
                      <span className="">
                        Users are encouraged to protect their privacy and that
                        of others. Sharing personal information, especially of
                        underage users, is strongly discouraged unless necessary
                        for professional verification purposes, and even then,
                        the utmost caution must be exercised.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      e. Reporting Mechanism:{" "}
                      <span className="">
                        The forum includes a reporting feature for users to
                        report any suspicious or inappropriate activity. Reports
                        involving underage users will receive priority attention
                        from moderators.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      f. Moderator Intervention:{" "}
                      <span className="">
                        Moderators have the authority to intervene in
                        conversations, edit or remove inappropriate content, and
                        take necessary actions to maintain a safe environment
                        for all users, particularly for those who are underage.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      g. Consent and Parental Guidance:{" "}
                      <span className="">
                        Underage users must have parental consent to participate
                        in the forum. Parents or guardians are encouraged to
                        monitor their child's activity on the platform.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      h. Zero Tolerance Policy:{" "}
                      <span className="">
                        There is a zero-tolerance policy towards bullying,
                        harassment, or any form of abuse. Violations, especially
                        those affecting underage users, will result in immediate
                        action, which may include suspension or banning from the
                        forum.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      i. Event Participation Rules:{" "}
                      <span className="">
                        Event Participation Rules: Besides our Forum
                        Participation Guidelines, we specify that physical and
                        virtual events facilitated through the site are subject
                        to these same guidelines. Should separate terms be
                        necessary for specific events, these will be clearly
                        outlined to ensure participants are aware of and adhere
                        to these additional requirements.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      j. Uniform Conduct Policy:{" "}
                      <span className="">
                        Our conduct rules for the forum are extended to
                        encompass all interactive features of the site,
                        including but not limited to chat rooms, message boards,
                        and virtual event spaces. This ensures a consistent and
                        respectful interaction standard is maintained across all
                        platforms.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      k. Supervision of Events:
                      <span className="">
                        {" "}
                        Just as we closely monitor forum interactions,
                        especially those involving underage users, similar
                        supervision and protective measures are implemented for
                        any events organized through the site. These measures
                        are designed to ensure a safe and respectful environment
                        for all participants.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      l. Consent and Guidance for Minors:{" "}
                      <span className="">
                        Parental consent and guidance are imperative for minors
                        participating in site interactions, whether in forums or
                        events. This consent is crucial for ensuring the safety
                        and well-being of underage users on our platform.
                      </span>
                    </div>
                    <div className="max-md:max-w-full">
                      m. Comprehensive Zero Tolerance Policy:{" "}
                      <span className="">
                        Our zero-tolerance stance against bullying, harassment,
                        and abuse applies universally across the site. This
                        policy is enforced in all forums, events, and any other
                        interactive spaces, providing a safe and welcoming
                        environment for all users.
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col self-stretch px-5 py-4 text-base leading-8 bg-white max-w-[860px] text-zinc-600">
                <div className="px-5 pb-4 underline max-md:max-w-full">
                  <ol>
                    <li>
                      By using the Site, you accept that any participation in
                      events organized through it, or in any way connected to
                      it, is entirely at your own discretion.{" "}
                      <a
                        href="https://devreg.org"
                        className="underline"
                        target="_blank"
                      >
                        https://devreg.org
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://fullidcheck.com"
                        className="underline"
                        target="_blank"
                      >
                        https://fullidcheck.com
                      </a>{" "}
                      neither endorses nor sponsors these events. Participation
                      in any activities linked to these events is done
                      voluntarily and at your own risk. You assume full
                      responsibility for all potential risks, including personal
                      injury or property damage to yourself or others. The Site
                      may offer a waiver (&quot;Waiver&quot;) for participation
                      in these events, which requires your acknowledgment. This
                      Waiver, provided for convenience, should be thoroughly
                      reviewed by you. We are not liable for any issues related
                      to the Waiver's functionality, enforceability, or any
                      claims resulting from it. By using the Site, you absolve{" "}
                      <a
                        href="https://devreg.org"
                        className="underline"
                        target="_blank"
                      >
                        https://devreg.org
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://fullidcheck.com"
                        className="underline"
                        target="_blank"
                      >
                        https://fullidcheck.com
                      </a>
                      , including its affiliates and representatives, from all
                      liabilities, claims, or legal actions in any form,
                      directly or indirectly associated with the events or the
                      Site.The Site may feature links to external websites,
                      owned and operated by third parties (&quot;External
                      Sites&quot;). We do not control and are not responsible
                      for the content or availability of these External Sites.
                      Concerns regarding any external link or its content should
                      be directed to the administrators or webmasters of those
                      External Sites.
                    </li>
                  </ol>
                </div>
                <div className="px-5 pb-4 mt-4 max-md:max-w-full">
                  <ol>
                    <li>
                      <span className="font-bold">
                        Users of the Site may post comments
                      </span>
                      , reviews, and other content and submit suggestions,
                      ideas, or other information, provided the content does not
                      contain any unlawful, harmful, threatening, abusive,
                      harassing, defamatory, vulgar, obscene, or hateful content
                      or content which is racially, ethnically or otherwise
                      objectionable, or content which infringes upon the rights
                      of any third party. The user agrees not to impersonate any
                      person and/or other entity or communicate under a false
                      name or a name the user is not entitled or authorized to
                      use. Https://devreg.org or https://fullidcheck.com has the
                      right (but not the obligation) to remove, prohibit, edit
                      or discontinue any content on the Site, including content
                      that has been posted by users.
                    </li>
                  </ol>
                </div>
                <div className="px-5 pb-4 mt-4 underline max-md:max-w-full">
                  <ol>
                    <li>
                      <span className="font-bold">
                        By posting any content or materials on the site
                      </span>
                      , you are granting{" "}
                      <a
                        href="https://devreg.org"
                        className="underline"
                        target="_blank"
                      >
                        https://devreg.org
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://fullidcheck.com"
                        className="underline"
                        target="_blank"
                      >
                        https://fullidcheck.com
                      </a>{" "}
                      and its affiliated entities an ongoing, irrevocable,
                      global license that is free of royalties and
                      non-exclusive. This license permits these entities to
                      utilize, sell, sublicense, reproduce, distribute, display,
                      and create derivative works from your content, effectively
                      treating it as their own property. Additionally, you
                      authorize{" "}
                      <a
                        href="https://devreg.org"
                        className="underline"
                        target="_blank"
                      >
                        https://devreg.org
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://fullidcheck.com"
                        className="underline"
                        target="_blank"
                      >
                        https://fullidcheck.com
                      </a>{" "}
                      and its affiliates to use your name and/or username in
                      association with this content. You affirm that the content
                      and materials you contribute are entirely your own
                      creation and do not infringe on any third-party
                      proprietary rights. You also agree to protect and hold
                      harmless{" "}
                      <a
                        href="https://devreg.org"
                        className="underline"
                        target="_blank"
                      >
                        https://devreg.org
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://fullidcheck.com"
                        className="underline"
                        target="_blank"
                      >
                        https://fullidcheck.com
                      </a>{" "}
                      and its affiliates against any claims arising from the
                      content you supply.
                    </li>
                  </ol>
                </div>
                <div className="px-5 pb-4 mt-4 underline max-md:max-w-full">
                  <ol>
                    <li>
                      <span className="font-bold">
                        Certain sections of the Site have their own specific
                        terms and conditions
                      </span>{" "}
                      In instances where these specific terms conflict with the
                      general Terms and Conditions, the specific terms for that
                      section will take precedence.{" "}
                      <a
                        href="https://devreg.org"
                        className="underline"
                        target="_blank"
                      >
                        https://devreg.org
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://fullidcheck.com"
                        className="underline"
                        target="_blank"
                      >
                        https://fullidcheck.com
                      </a>{" "}
                      reserves the right to modify these Terms and Conditions at
                      any time, and such changes will be effective immediately
                      upon posting. Your continued use of the Site signifies
                      your acceptance of these changes, so it's recommended that
                      you regularly review the current Terms and Conditions.
                    </li>
                  </ol>
                </div>
                <div className="px-5 pb-4 mt-4 underline max-md:max-w-full">
                  <ol>
                    <li>
                      <span className="font-bold">
                        You are prohibited from sending or uploading any harmful
                        code{" "}
                      </span>{" "}
                      to{" "}
                      <a
                        href="https://devreg.org"
                        className="underline"
                        target="_blank"
                      >
                        https://devreg.org
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://fullidcheck.com"
                        className="underline"
                        target="_blank"
                      >
                        https://fullidcheck.com
                      </a>{" "}
                      or using this Site to exploit data for commercial
                      purposes. &quot;Harmful Code&quot; includes any software
                      or code, commonly known as viruses, worms, trojan horses,
                      time bombs, cancelbots, or other similar harmful software,
                      that is designed to damage, disrupt, or interfere with
                      proper functioning of any data, storage media, program,
                      system, or communication. This includes software intended
                      to exceed usage limits, alter data or system
                      configurations, or access unauthorized information. Your
                      adherence to this prohibition is critical for the safety
                      and integrity of the Site.
                    </li>
                  </ol>
                </div>
                <div className="px-5 pb-4 mt-4 max-md:max-w-full">
                  <ol>
                    <li>
                      <span className="font-bold">
                        When using the Site, adhere to the following guidelines:
                      </span>
                    </li>
                  </ol>
                  a. Strictly refrain from promoting, advertising, or pushing
                  any cryptocurrency, crypto coins, or related digital assets.
                  Our platform does not support the advertisement or
                  facilitation of these products.
                  <br />
                  b. Avoid engaging in the sale or promotion of tobacco
                  products.
                  <br />
                  c. Refrain from sending spam or any form of unauthorized
                  emails.
                  <br />
                  d. Avoid harassing, threatening, or causing distress or
                  discomfort to others.
                  <br />
                  e. Prohibit the sharing of any content that is unlawful,
                  harmful, threatening, abusive, defamatory, vulgar, obscene, or
                  racially, ethnically, or otherwise objectionable, including
                  content that violates the rights of others.
                  <br />
                  f. Never impersonate others or use a false or unauthorized
                  name.
                  <br />
                  g. Abide by all relevant local, state, national, and
                  international laws.
                </div>
                <div className="px-5 pb-4 mt-4 max-md:max-w-full">
                  <span className="font-bold">
                    16. Regarding Cryptocurrency and Crypto Developers:
                  </span>
                  <br />
                  a. Individuals or entities dealing with cryptocurrencies will
                  have a distinct profile page. However, this profile will not
                  be visible or accessible on the main site. This measure is in
                  place to align with our policy of not promoting or supporting
                  cryptocurrency-related activities on our primary platform.
                </div>
              </div>
              <div className="flex flex-col self-stretch px-5 py-4 text-base font-bold leading-8 bg-white max-w-[860px] text-zinc-600">
                <div className="px-5 pb-4 max-md:max-w-full">
                  17. When contributing funds via the Site, you agree to:
                  <br />
                  <span className="">a. Be at least 18 years old.</span>
                  <br />
                  <span className="">
                    b. Comply with all applicable laws and regulations in your
                    region.
                  </span>
                  <br />
                  <span className="">
                    c. Immediately notify the service staff about any
                    unauthorized use of your user, Stripe, or PayPal accounts.
                  </span>
                </div>
                <div className="px-5 pb-4 mt-4 max-md:max-w-full">
                  18. Prohibited Activities on the Site include:
                  <br />
                  <span className="">
                    a. Violating any law, regulation, or ordinance.
                  </span>
                  <br />
                  <span className="">
                    b. Involving in transactions related to illegal substances,
                    risky consumer products, obscene items, copyright
                    infringement, sexually oriented materials, firearms, or
                    regulated weapons.
                  </span>
                  <br />
                  <span className="">
                    c. Promoting commercial content primarily or involving spam,
                    repetitive, or nonsensical content.
                  </span>
                  <br />
                  <span className="">
                    d. Engaging in transactions that expose third-party personal
                    information illegally, support fraudulent schemes, involve
                    unregulated financial transactions, or associate with
                    high-risk money service activities.
                  </span>
                  <br />
                  <span className="">
                    e. Selling products or services deemed fraudulent by
                    government agencies.
                  </span>
                  <br />
                  <span className="">
                    f. Violating laws or regulations related to prescription
                    drugs.
                  </span>
                  <br />
                  <span className="">
                    g. Participating in gambling, gaming, or any prize-related
                    activities without proper authorization and in accordance
                    with local laws.
                  </span>
                </div>
                <div className="px-5 pb-4 mt-4 underline max-md:max-w-full">
                  19. Prohibited Activities on the Site include:
                  <br />
                  <span className="">
                    We encourage you to report violations of this Acceptable Use
                    Policy to Https://devreg.org or If you have any concerns
                    about whether a transaction adheres to the Acceptable Use
                    Policy, feel free to reach out to the Admin's Compliance
                    Department at{" "}
                  </span>
                  <a
                    href="https://devreg.org"
                    className="underline "
                    target="_blank"
                  >
                    https://devreg.org
                  </a>
                  <span className=""> or </span>
                  <a
                    href="https://fullidcheck.com"
                    className="underline "
                    target="_blank"
                  >
                    https://fullidcheck.com
                  </a>
                  <span className=""> for clarification.</span>
                </div>
                <div className="px-5 pb-4 mt-4 underline max-md:max-w-full">
                  20. Definitions within this document are as follows:
                  <br />
                  <span className="">
                    · Service: Refers to this website, encompassing both{" "}
                  </span>
                  <a
                    href="https://devreg.org"
                    className="underline "
                    target="_blank"
                  >
                    https://devreg.org
                  </a>
                  <span className=""> and </span>
                  <a
                    href="https://fullidcheck.com"
                    className="underline "
                    target="_blank"
                  >
                    https://fullidcheck.com
                  </a>
                  <span className="">.</span>
                  <br />
                  <span className="">
                    · User: Any individual or entity that creates an account to
                    use the services provided.
                  </span>
                  <br />
                  <span className="">
                    · Contributor or Donor: Anyone who makes a payment or
                    contribution towards any activity facilitated by the
                    Service.
                  </span>
                  <br />
                  <span className="">· </span>
                  <a
                    href="https://devreg.org"
                    className="underline "
                    target="_blank"
                  >
                    https://devreg.org
                  </a>
                  <span className=""> and </span>
                  <a
                    href="https://fullidcheck.com"
                    className="underline "
                    target="_blank"
                  >
                    https://fullidcheck.com
                  </a>
                  <span className="">
                    {" "}
                    handle payment transactions through third-party solutions
                    like Stripe or PayPal, rather than operating as a banking
                    entity. Thus, any funds transferred that aren't service fees
                    are directly processed through these third-party payment
                    solutions. Neither{" "}
                  </span>
                  <a
                    href="https://devreg.org"
                    className="underline "
                    target="_blank"
                  >
                    https://devreg.org
                  </a>
                  <span className=""> nor </span>
                  <a
                    href="https://fullidcheck.com"
                    className="underline "
                    target="_blank"
                  >
                    https://fullidcheck.com
                  </a>
                  <span className="">
                    {" "}
                    bear liability or responsibility for funds or associated tax
                    obligations processed by these third-party systems.
                  </span>
                  <br />
                  <span className="">
                    · Contributors, Donors, and Users concur that they will not
                    entangle{" "}
                  </span>
                  <a
                    href="https://devreg.org"
                    className="underline "
                    target="_blank"
                  >
                    https://devreg.org
                  </a>
                  <span className=""> or </span>
                  <a
                    href="https://fullidcheck.com"
                    className="underline "
                    target="_blank"
                  >
                    https://fullidcheck.com
                  </a>
                  <span className="">
                    {" "}
                    in any legal disputes arising from the use of the website.
                    Furthermore,{" "}
                  </span>
                  <a
                    href="https://devreg.org"
                    className="underline "
                    target="_blank"
                  >
                    https://devreg.org
                  </a>
                  <span className=""> or </span>
                  <a
                    href="https://fullidcheck.com"
                    className="underline "
                    target="_blank"
                  >
                    https://fullidcheck.com
                  </a>
                  <span className="">
                    {" "}
                    shall not be accountable for any losses or damages incurred
                    due to non-compliance with the terms of this Agreement.
                  </span>
                </div>
                <div className="px-5 pb-4 mt-4 max-md:max-w-full">
                  <ol>
                    <li>
                      International User Restrictions:{" "}
                      <span className="">
                        Our policy prohibits any government entity or agency
                        worldwide from accessing files, passwords, or usernames
                        from our Site without the express approval of our
                        administrators. The only exception to this rule is in
                        the case of fraud or scamming, which victims must
                        officially report to our administrators. Even in such
                        circumstances, the administrator has the right to refuse
                        access to this information. This decision aligns with
                        our strong commitment to user privacy and data
                        protection, consistent with legal standards set in
                        Victoria, Australia, where we are based.
                      </span>
                    </li>
                  </ol>
                </div>
                <div className="px-5 pb-4 mt-4 max-md:max-w-full">
                  <ol>
                    <li>
                      Termination Clause:{" "}
                      <span className="">
                        We reserve the right to discontinue your access to our
                        platform at any time for any reason. If your account is
                        suspended, creating a new account for similar activities
                        is strictly prohibited.
                      </span>
                    </li>
                  </ol>
                </div>
                <div className="px-5 pb-4 mt-4 underline max-md:max-w-full">
                  <ol>
                    <li>
                      MATERIALS ON THIS SITE ARE OFFERED STRICTLY ON AN &quot;AS
                      IS&quot; BASIS, WITHOUT ANY FORM OF WARRANTY, EITHER
                      EXPRESSED OR IMPLIED.{" "}
                      <a
                        href="https://devreg.org"
                        className="underline"
                        target="_blank"
                      >
                        https://devreg.org
                      </a>{" "}
                      OR{" "}
                      <a
                        href="https://fullidcheck.com"
                        className="underline"
                        target="_blank"
                      >
                        https://fullidcheck.com
                      </a>{" "}
                      ACCEPTS NO RESPONSIBILITY OR LIABILITY FOR ANY CONTENT OR
                      MATERIALS AVAILABLE ON THE SITE. IN COMPLIANCE WITH THE
                      LAW TO THE GREATEST EXTENT PERMISSIBLE, ALL WARRANTIES,
                      WHETHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                      WARRANTIES OF MERCHANTABILITY, SUITABILITY FOR A
                      PARTICULAR PURPOSE, NON-INFRINGEMENT, OR OTHER RIGHTS
                      VIOLATIONS, ARE DISCLAIMED.
                    </li>
                  </ol>
                  <br />
                  IN NO SITUATION, INCLUDING NEGLIGENCE, WILL{" "}
                  <a
                    href="https://devreg.org"
                    className="underline"
                    target="_blank"
                  >
                    https://devreg.org
                  </a>{" "}
                  OR{" "}
                  <a
                    href="https://fullidcheck.com"
                    className="underline"
                    target="_blank"
                  >
                    https://fullidcheck.com
                  </a>{" "}
                  OR THEIR LICENSORS BE LIABLE FOR ANY DIRECT, INDIRECT,
                  INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING DATA
                  LOSS OR PROFIT LOSS, STEMMING FROM THE USE OR INABILITY TO USE
                  SITE MATERIALS. IF THE USE OF SITE MATERIALS NECESSITATES
                  SERVICING, REPAIR, OR DATA CORRECTION, YOU ARE RESPONSIBLE FOR
                  ALL ASSOCIATED COSTS. CERTAIN JURISDICTIONS MAY NOT PERMIT THE
                  EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL
                  DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU.
                  <br />
                  <br />
                  DISCLAIMER OF WARRANTIES FOR CONTRIBUTIONS WE DO NOT PROVIDE
                  ANY WARRANTIES REGARDING THE MERCHANTABILITY OR FITNESS FOR A
                  PARTICULAR PURPOSE OF OUR SERVICE. BY USING OUR SERVICE, YOU
                  RELEASE US FROM ANY POTENTIAL LIABILITIES RELATED TO THIS
                  AGREEMENT OR OUR PRODUCTS, WHICH MAY INCLUDE SERVICE FAILURES,
                  NEGLIGENCE, OR OTHER TORTS. THIS RELEASE IS SUBJECT TO
                  APPLICABLE LAWS LIMITING LIABILITY, WHEREIN OUR LIABILITY TO
                  YOU IS CONFINED TO THE MINIMUM AMOUNT OF DAMAGES, SHOULD SUCH
                  A MINIMUM BE MANDATED BY LAW. <br />
                  <br />
                  WE ARE NOT RESPONSIBLE FOR ANY THIRD-PARTY OFFERS MADE THROUGH
                  OUR WEBSITE, INCLUDING THE FAILURE OF ANY GOODS OR SERVICES TO
                  MEET EXPECTATIONS.
                  <br />
                  <br />
                  WE HOLD NO RESPONSIBILITY FOR THIRD-PARTY CHARITABLE OFFERS
                  THAT MAY PROVE TO BE FRAUDULENT, IRRESPONSIBLE, OR
                  MISREPRESENTED.
                  <br />
                  <br />
                  WE ARE NOT ACCOUNTABLE FOR ANY SHORTCOMINGS OF THIRD-PARTY
                  PAYMENT PROCESSORS ASSOCIATED WITH OUR WEBSITE.
                  <br />
                  <br />
                  WE BEAR NO LIABILITY FOR ANY FAILURES OR DISRUPTIONS OF GOODS
                  OR SERVICES PROVIDED BY OUR COMPANY OR A THIRD PARTY,
                  INCLUDING UNSCHEDULED OR UNINTENTIONAL ISSUES ON OUR WEBSITE
                  THAT TEMPORARILY OR PERMANENTLY PREVENT WEBSITE ACCESS.
                  <br />
                  <br />
                  YOUR USE OF OUR SERVICE IS CONTINGENT UPON YOUR ACCEPTANCE OF
                  THIS AND ALL OTHER SECTIONS OF THIS AGREEMENT. THE
                  &quot;REPRESENTATIONS & WARRANTIES&quot; SECTION HERE IS NOT
                  INTENDED TO LIMIT THE SCOPE OF THE INITIAL PARAGRAPH OF THIS
                  SECTION.
                </div>
                <div className="px-5 pb-4 mt-4 max-md:max-w-full">
                  &quot;For Jurisdictions Under Australian Law: Notwithstanding
                  any provision in these Terms, our liability is adjusted by
                  Australian law where it conflicts with our stated limitations.
                  This means that our liability is limited to the maximum extent
                  permissible under Australian law. Specifically, under
                  Australian jurisdictions, this website does not exclude or
                  limit its liability for:
                  <br />
                  a) Death or Personal Injury: Any liability for death or
                  personal injury arising from our negligence, or the negligence
                  of our employees, agents, or subcontractors, is not excluded
                  or limited.
                  <br />
                  b) Fraudulent Misrepresentation: We do not limit liability
                  arising from any fraudulent misrepresentation on the part of
                  this website or its representatives.
                  <br />
                  c) Unlawful Exclusion or Limitation: We adhere to Australian
                  laws that prohibit the exclusion or limitation of certain
                  types of liability. Where the law dictates that a liability
                  cannot be excluded or limited, this website will abide by such
                  legal requirements.
                  <br />
                  <br />
                  It is our intention to comply fully with Australian consumer
                  protection laws and regulations. Users are reminded that
                  consumer rights under the Australian Consumer Law, including
                  statutory guarantees relating to the provision of services,
                  are not impacted by these Terms.&quot;
                </div>
              </div>
              {/* Terms and conditions end-content*/}
            </div>
          </div>
          <SidePanel image={imgUrl} />
        </div>
      </div>
    </>
  );
}

export default TermsAndConditions;
