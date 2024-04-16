import React from "react";
import ItemLayout from "./ItemLayout";

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
            About me
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            I am a new graduate student. My personality is hardworking, high sense of responsibility and honesty. I want
            increase my knowledge and create value for your company.
          </p>
        </ItemLayout>



        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            0.5+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>




        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=bootstrap,css,firebase,git,js,jquery,mongodb,mysql,nextjs,nodejs,npm,postgres,react,redux,sass,supabase,tailwind,vercel,vscode`}
            alt="huy"
            loading="lazy"
          />
        </ItemLayout>




      </div>
    </section>
  );
};

export default AboutDetails;
