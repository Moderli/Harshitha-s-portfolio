import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            My journey in entrepreneurship
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          In October 2023, I dove into affiliate marketing, which unexpectedly sparked my interest in sales, communication, and human psychology. To generate leads, I picked up video editing and content creation, which later led me into freelancing. I then co-founded a startup with three other teens, gaining hands-on experience in operations, sales, and problem-solving—despite eventually shutting it down with minimal profit. Along the way, I participated in competitions, winning awards in marketing and product management. This journey has given me practical exposure in content creation, client communication, teamwork, and entrepreneurship, while showing me there's still much more to learn, especially in finance and organization.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
