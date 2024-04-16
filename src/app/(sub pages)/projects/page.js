import Image from "next/image";
import bg from "../../../../public/background/cat.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-center  opacity-70"
        priority
        sizes="100vw"
      />
      <div className=" ml-auto">
        <ProjectList projects={projectsData} />

      </div>


    </>
  );
}
