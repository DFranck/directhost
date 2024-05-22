"use client";
import hero from "@/../public/mocks/hero/hero.json";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Section from "./layout/section";

const HeroCarrousel = () => {
  const [imgs, setImgs] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImgs(imgs < 2 ? imgs + 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  });
  const locale = useLocale();
  const pathName = usePathname();
  const isHomePage = pathName === `/${locale}` ? true : false;

  return (
    <Section
      className={cn(
        {
          "absolute translate-y-[109px]": !isHomePage,
        },
        "h-screen min-h-[300px] transition-all duration-1000"
      )}
      bgImg={hero.imgs[imgs]}
    >
      <div
        className={cn(
          { hidden: !isHomePage, "md:block": isHomePage },
          "hidden  absolute bottom-20 right-10 bg-background/90 w-60 rounded"
        )}
      >
        <h3 className="bg-primary text-primary-foreground px-4 rounded-t">
          Avantages
        </h3>
        <ul className="p-4 text-xs flex flex-col gap-4">
          <li className="flex gap-2 ">
            <div>
              <Check className="text-primary" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                dignissimos quidem sed quisquam, architecto.
              </p>
            </div>
          </li>
          <li className="flex gap-2">
            <div>
              <Check className="text-primary" />
            </div>
            <div>
              <p>Lorem ipsum, architecto.</p>
            </div>
          </li>
          <li className="flex gap-2">
            <div>
              <Check className="text-primary" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet architecto.</p>
            </div>
          </li>
          <li className="flex gap-2">
            <div>
              <Check className="text-primary" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
        </ul>
      </div>
      <div
        className={cn(
          { hidden: !isHomePage, "hidden lg:block": isHomePage },
          "absolute bottom-20 left-10"
        )}
      >
        <h3 className="w-full text-center bg-background/90 rounded px-4 py-2 mb-4">
          Calendier Synchronisé
        </h3>
        <ul className="grid grid-cols-3 gap-4">
          <li className="bg-background/90 rounded p-2">
            <h5 className="w-full text-center">Airbnb</h5>
            <div className="w-22 h-10">
              <svg
                enableBackground="new 0 0 1991.3 2143.2"
                viewBox="0 0 1991.3 2143.2"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="m1851.6 1735.6c-15 111.6-90.1 208.1-195.2 251-51.5 21.4-107.3 27.9-163.1 21.4-53.6-6.4-107.3-23.6-163-55.7-77.2-43-154.5-109.4-244.6-208.1 141.6-173.8 227.4-332.5 259.6-474.1 15-66.5 17.2-126.6 10.7-182.4-8.6-53.6-27.9-103-57.9-145.9-66.5-96.5-178.1-152.3-302.5-152.3s-236 57.9-302.5 152.3c-30 42.9-49.3 92.3-57.9 145.9-8.6 55.8-6.4 118 10.7 182.4 32.2 141.6 120.1 302.5 259.6 476.2-88 98.7-167.3 165.2-244.6 208.1-55.8 32.2-109.4 49.4-163 55.8-55.3 6.2-111.2-1.2-163-21.4-105.1-42.9-180.2-139.5-195.2-251-6.4-53.6-2.1-107.2 19.3-167.3 6.4-21.5 17.2-42.9 27.9-68.6 15-34.3 32.2-70.8 49.3-107.3l2.2-4.3c148-319.7 306.8-645.8 472-963.3l6.4-12.9c17.2-32.1 34.3-66.5 51.5-98.7 17.2-34.3 36.5-66.5 60.1-94.4 45.1-51.5 105.1-79.4 171.6-79.4s126.6 27.9 171.6 79.4c23.6 27.9 42.9 60.1 60.1 94.4 17.2 32.2 34.3 66.5 51.5 98.6l6.5 12.9c163 319.6 321.8 645.7 469.8 965.4v2.1c17.2 34.3 32.2 73 49.3 107.3 10.7 25.8 21.5 47.2 27.9 68.6 17.1 55.9 23.5 109.5 14.9 165.3zm-856-100.9c-115.8-145.9-190.9-283.2-216.7-399-10.7-49.4-12.9-92.3-6.4-130.9 4.3-34.3 17.2-64.4 34.3-90.1 40.8-57.9 109.4-94.4 188.8-94.4s150.2 34.4 188.8 94.4c17.2 25.8 30 55.8 34.3 90.1 6.4 38.6 4.3 83.7-6.4 130.9-25.7 113.7-100.8 251-216.7 399zm967.6-111.5c-10.7-25.7-21.5-53.6-32.2-77.2-17.2-38.6-34.3-75.1-49.4-109.4l-2.1-2.1c-148-321.8-306.8-647.9-474.1-969.7l-6.4-12.9c-17.2-32.2-34.3-66.5-51.5-100.8-21.5-38.6-42.9-79.4-77.2-118-68.7-85.9-167.4-133.1-272.5-133.1-107.3 0-203.8 47.2-274.7 128.7-32.2 38.6-55.8 79.4-77.2 118-17.2 34.3-34.3 68.6-51.5 100.8l-6.4 12.8c-165.2 321.8-326.1 647.9-474.1 969.7l-2.1 4.3c-15 34.3-32.2 70.8-49.4 109.4-11.5 25.4-22.2 51.2-32.2 77.2-27.9 79.4-36.5 154.5-25.8 231.7 23.6 160.9 130.9 296.1 278.9 356.1 55.8 23.6 113.7 34.3 173.8 34.3 17.2 0 38.6-2.1 55.8-4.3 70.8-8.6 143.7-32.1 214.5-72.9 88-49.3 171.6-120.1 266-223.1 94.4 103 180.2 173.8 266 223.1 70.8 40.8 143.7 64.3 214.5 72.9 17.2 2.2 38.6 4.3 55.8 4.3 60.1 0 120.1-10.7 173.8-34.3 150.2-60.1 255.3-197.4 278.9-356.1 17.2-75 8.6-150-19.2-229.4z"
                  fill="#e0565b"
                />
              </svg>
            </div>
          </li>
          <li className="bg-background/90 rounded p-2">
            <h5 className="w-full text-center">Booking</h5>
            <div className="w-full h-10">
              <svg
                viewBox="-.092 .015 2732.125 2671.996"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m2732.032 513.03c0-283.141-229.978-513.015-513.118-513.015h-1705.89c-283.138 0-513.116 229.874-513.116 513.015v1645.965c0 283.066 229.978 513.016 513.118 513.016h1705.889c283.14 0 513.118-229.95 513.118-513.016z"
                  fill="#0c3b7c"
                />
                <path
                  d="m.001 1659.991h1364.531v1012.019h-1364.53z"
                  fill="#0c3b7c"
                />
                <g fillRule="nonzero">
                  <path
                    d="m1241.6 1768.638-220.052-.22v-263.12c0-56.22 21.808-85.48 69.917-92.165h150.136c107.068 0 176.328 67.507 176.328 176.766 0 112.219-67.507 178.63-176.328 178.739zm-220.052-709.694v-69.26c0-60.602 25.643-89.424 81.862-93.15h112.657c96.547 0 154.41 57.753 154.41 154.52 0 73.643-39.671 159.67-150.903 159.67h-198.026zm501.037 262.574-39.78-22.356 34.74-29.699c40.437-34.74 108.163-112.876 108.163-247.67 0-206.464-160.109-339.614-407.888-339.614h-282.738v-.11h-32.219c-73.424 2.74-132.273 62.466-133.04 136.329v1171.499h453.586c275.396 0 453.148-149.917 453.148-382.135 0-125.04-57.424-231.889-153.972-286.244"
                    fill="#fff"
                  />
                  <path
                    d="m1794.688 1828.066c0-89.492 72.178-161.894 161.107-161.894 89.154 0 161.669 72.402 161.669 161.894 0 89.379-72.515 161.894-161.67 161.894-88.928 0-161.106-72.515-161.106-161.894"
                    fill="#00bafc"
                  />
                </g>
              </svg>
            </div>
          </li>
          <li className="bg-background/90 rounded p-2">
            <h5 className="w-full text-center">Direct</h5>
            <div className="w-full h-10">
              <svg
                width="524"
                height="525"
                viewBox="0 0 524 525"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <circle
                  cx="262"
                  cy="262.011"
                  r="262"
                  fill="url(#paint0_linear_40_25)"
                />
                <path
                  d="M263 169.011C315.002 169.011 354 211.763 354 259.011C354 309.603 297.159 395.148 259.5 439.217C220.798 372.452 169.5 315.103 169.5 259.011C169.5 215.004 206 169.011 263 169.011Z"
                  fill="white"
                />
                <path
                  d="M377.76 144.62C425.917 180.744 461 218.161 461 260.919C461 338.909 416.206 406.443 350.931 439.217M377.76 144.62C343.052 118.584 301.552 93.2199 261.5 67.011C161.062 135.773 62 199.033 62 260.919C62 360.045 134.362 442.279 229.167 457.721C242.926 459.963 245.795 455.255 259.5 439.217M377.76 144.62V81.4509M259.5 439.217C297.159 395.148 354 309.603 354 259.011C354 211.763 315.002 169.011 263 169.011C206 169.011 169.5 215.004 169.5 259.011C169.5 315.103 220.798 372.452 259.5 439.217Z"
                  stroke="white"
                  strokeWidth="35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M337 262.011C337 303.432 262 409.011 262 409.011C262 409.011 187 303.432 187 262.011C187 220.59 220.579 187.011 262 187.011C303.421 187.011 337 220.59 337 262.011Z"
                  fill="url(#paint1_linear_40_25)"
                />
                <circle cx="262" cy="261.011" r="27" fill="white" />
                <defs>
                  <linearGradient
                    id="paint0_linear_40_25"
                    x1="262"
                    y1="0.0109863"
                    x2="262"
                    y2="524.011"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF385C" />
                    <stop offset="1" stopColor="#7C3AED" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_40_25"
                    x1="262"
                    y1="187.011"
                    x2="262"
                    y2="409.011"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF385C" />
                    <stop offset="1" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default HeroCarrousel;
