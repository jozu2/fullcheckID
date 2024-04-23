import React from "react";
import Sidepanel from "../../components/SidePanel";
import TopBanner from "../../components/TopBanner";
function Privacy() {
  const imgUrl =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/cd382f0bce51e19a134afde13b639058e80c0a2c3fbb59671aefab3a8709c48d?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd382f0bce51e19a134afde13b639058e80c0a2c3fbb59671aefab3a8709c48d?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd382f0bce51e19a134afde13b639058e80c0a2c3fbb59671aefab3a8709c48d?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd382f0bce51e19a134afde13b639058e80c0a2c3fbb59671aefab3a8709c48d?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd382f0bce51e19a134afde13b639058e80c0a2c3fbb59671aefab3a8709c48d?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd382f0bce51e19a134afde13b639058e80c0a2c3fbb59671aefab3a8709c48d?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd382f0bce51e19a134afde13b639058e80c0a2c3fbb59671aefab3a8709c48d?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd382f0bce51e19a134afde13b639058e80c0a2c3fbb59671aefab3a8709c48d?apiKey=3ae96302e69649f5be368f89230b0596&";
  const bannerImg =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/081c827accb6ee08968e286eee8294404d61fe6d81c90081b322655104d521de?apiKey=3ae96302e69649f5be368f89230b0596&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/081c827accb6ee08968e286eee8294404d61fe6d81c90081b322655104d521de?apiKey=3ae96302e69649f5be368f89230b0596&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/081c827accb6ee08968e286eee8294404d61fe6d81c90081b322655104d521de?apiKey=3ae96302e69649f5be368f89230b0596&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/081c827accb6ee08968e286eee8294404d61fe6d81c90081b322655104d521de?apiKey=3ae96302e69649f5be368f89230b0596&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/081c827accb6ee08968e286eee8294404d61fe6d81c90081b322655104d521de?apiKey=3ae96302e69649f5be368f89230b0596&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/081c827accb6ee08968e286eee8294404d61fe6d81c90081b322655104d521de?apiKey=3ae96302e69649f5be368f89230b0596&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/081c827accb6ee08968e286eee8294404d61fe6d81c90081b322655104d521de?apiKey=3ae96302e69649f5be368f89230b0596&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/081c827accb6ee08968e286eee8294404d61fe6d81c90081b322655104d521de?apiKey=3ae96302e69649f5be368f89230b0596&";

  return (
    <div>
      {/* Section-1 */}

      <div className="self-center mt-16 w-full max-w-[1366px] p-[20px] max-md:mt-10 max-md:max-w-full m-auto ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-bold tracking-tight leading-9 text-blue-900 max-md:max-w-full">
                PRIVACY POLICY
              </div>
              <div className="flex flex-col px-5 py-4 mt-4 bg-white max-md:max-w-full max-sm:px-3.5">
                <div className="flex flex-col px-5 pb-4 max-md:max-w-full">
                  <div className="text-2xl font-semibold tracking-tight leading-7 text-indigo-950 max-md:max-w-full">
                    Introduction
                  </div>
                  <div className="mt-4 text-base leading-7 text-zinc-600 max-md:max-w-full">
                    Welcome to Blockchain Management Corporation Pty Ltd (“we,”
                    “our,” or “us”). Protecting your privacy is a top priority
                    for us. In this Privacy Policy, we aim to explain in detail
                    how we handle your information, both personal and
                    non-personal, when you use our website or services.
                  </div>
                </div>
                <div className="flex flex-col px-5 pb-4 mt-6 max-md:max-w-full">
                  <div className="text-2xl font-semibold tracking-tight leading-7 text-indigo-950 max-md:max-w-full">
                    Information We Collect
                  </div>
                  <div className="mt-4 text-base leading-7 text-zinc-600 max-md:max-w-full">
                    <span className="font-bold">
                      We collect two types of information:
                    </span>
                    <br />
                    Personal Information When you interact with our website or
                    services, you may provide us with personal information. This
                    includes your name, email address, postal address, phone
                    number, and other details you provide through forms or when
                    interacting with our services.
                    <br />
                    Non-Personal Information In addition to personal
                    information, we gather non-personal information. This may
                    include your IP address, browser type, the specific pages
                    you visit, the date and time of your access, and the website
                    that referred you to ours.
                  </div>
                </div>
                <div className="flex flex-col px-5 pb-4 mt-6 max-md:max-w-full">
                  <div className="text-2xl font-semibold tracking-tight leading-7 text-indigo-950 max-md:max-w-full">
                    How We Use Your Information
                  </div>
                  <div className="mt-4 text-base leading-7 text-zinc-600 max-md:max-w-full">
                    We utilise the collected information for several purposes:
                    <ul>
                      <li>
                        <span className="font-bold">
                          Providing and Maintaining Services:{" "}
                        </span>
                        We use your information to ensure our services function
                        properly and to offer you the best user experience.
                      </li>
                      <li>
                        <span className="font-bold">Communication: </span>If you
                        subscribe, we may send you updates and newsletters.
                        Additionally, we use your information to respond to your
                        inquiries and comments.
                      </li>
                      <li>
                        <span className="font-bold">Improvement: </span>We
                        analyze the data to improve our services, making them
                        more effective and user-friendly.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col px-5 pb-4 mt-6 max-md:max-w-full">
                  <div className="text-2xl font-semibold tracking-tight leading-7 text-indigo-950 max-md:max-w-full">
                    Disclosure of your Information
                  </div>
                  <div className="mt-4 text-base leading-7 text-zinc-600 max-md:max-w-full">
                    We want you to know that we do not sell, trade, or rent your
                    personal information to third parties. However, we may share
                    your information with trusted third-party service providers
                    who assist us in operating and maintaining our services.
                    These third parties are bound by confidentiality agreements
                    to safeguard your data.
                  </div>
                </div>
                <div className="flex flex-col px-5 pb-4 mt-6 max-md:max-w-full">
                  <div className="text-2xl font-semibold tracking-tight leading-7 text-indigo-950 max-md:max-w-full">
                    Cookies and Tracking Technologies
                  </div>
                  <div className="mt-4 text-base leading-7 text-zinc-600 max-md:max-w-full">
                    To enhance your experience, we employ cookies and similar
                    tracking technologies. You can manage cookie preferences
                    through your browser settings.
                  </div>
                </div>
                <div className="flex flex-col px-5 pb-4 mt-6 max-md:max-w-full">
                  <div className="text-2xl font-semibold tracking-tight leading-7 text-indigo-950 max-md:max-w-full">
                    Security
                  </div>
                  <div className="mt-4 text-base leading-7 text-zinc-600 max-md:max-w-full">
                    We take reasonable measures to protect your information
                    against unauthorised access and disclosure. However, it’s
                    important to understand that no data transmission over the
                    internet is completely secure.
                  </div>
                </div>
                <div className="flex flex-col px-5 pb-4 mt-6 max-md:max-w-full">
                  <div className="text-2xl font-semibold tracking-tight leading-7 text-indigo-950 max-md:max-w-full">
                    Changes to This Privacy Policy
                  </div>
                  <div className="mt-4 text-base leading-7 text-zinc-600 max-md:max-w-full">
                    This Privacy Policy may be updated periodically. Any
                    revisions will be posted on our website, and the latest
                    revision date will be displayed at the top of this page.
                  </div>
                </div>
                <div className="flex flex-col px-5 pb-4 mt-6 max-md:max-w-full">
                  <div className="text-2xl font-semibold tracking-tight leading-7 text-indigo-950 max-md:max-w-full">
                    Contact Us
                  </div>
                  <div className="mt-4 text-base leading-7 underline text-zinc-600 max-md:max-w-full">
                    This Privacy Policy may be updated periodically. Any
                    revisions will be posted on our website, and the latest
                    revision date will be displayed at the top of this page.
                    <br />
                    <br />
                    If you have any questions about this Privacy Policy or your
                    information, please feel free to contact us at{" "}
                    <a
                      href="https://register.dev/contact"
                      className="underline"
                      target="_blank"
                    >
                      Contact Us
                    </a>
                    <br />
                    <span className="font-bold">Last Updated:</span> September
                    18, 2023
                    <br />
                    Please note that this Privacy Policy is subject to change
                    without notice.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* insert-here */}
          <Sidepanel image={imgUrl} />
        </div>
      </div>
    </div>
  );
}

export default Privacy;
