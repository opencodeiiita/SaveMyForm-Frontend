import React, { useEffect, useContext } from "react";
import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { get } from "../../components/utils/API/index.js";
import { AppbarContext, UserContext } from "../../components/context";
import Loader from "../../components/elements/Loader";
import ProjectCard from "../../components/elements/ProjectCard";
import Icon from "../../assets/svgs/iconDash.svg";
import Footer from "../../components/elements/Footer";
import { PlusOutlined } from "@ant-design/icons";
import SEO from "../../components/utils/SEO";
import DashboardVector from "../../assets/svgs/dashboardsVector.svg";

async function getUserDashboard() {
  return await get("/user/dashboard").then((data) => {
    data?.data?.data?.projects.forEach((date) => {
      let iostr = date.date_created;
      let tempDate = new Date(iostr).toDateString().slice(4);
      date.date_created = tempDate.slice(0, 6) + "," + tempDate.slice(6);
    });
    return data?.data?.data;
  });
}
export default function Dashboard() {
  const router = useRouter();
  const { setActive } = useContext(AppbarContext);
  let { isLoggedIn, user } = useContext(UserContext);
  const userQuery = useQuery({
    queryKey: ["userData"],
    queryFn: getUserDashboard,
    staleTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    if (!isLoggedIn) {
      setActive({
        home: false,
        dashboard: false,
        documentation: false,
        faq: false,
      });
      router.push("/signin");
    }
    setActive({
      home: false,
      dashboard: true,
      documentation: false,
      faq: false,
    });
    if (user && user.verified === false) {
      setActive({
        home: false,
        dashboard: false,
        documentation: false,
        faq: false,
      });
      router.push("/verify");
    }
  }, [user]);
  if (userQuery?.isLoading) return <Loader />;
  if (userQuery?.isSuccess) {
    return (
      <>
        <SEO
          title="SaveMyForm | Dashboard"
          desc={`Dashboard of ${user.name}. SaveMyForm is a platform where yoy save your form data now
                easily and securely.No need to create a Backend for collecting
                form responses on your application`}
        />
        <div className="flex-col flex items-center border-0 border-yellow-500 font-[Poppins]">
          <div className="absolute z-0 w-full h-80 bg-[#023430]">
            <Image
              src={DashboardVector.src}
              height={320}
              width={654}
              alt="Dashboard Vector"
              className="ml-auto object-cover h-full"
            />
          </div>
          <div
            className="z-10 w-[clamp(200px,60%,900px)] project_cards outline-[black]
             flex flex-col mt-28
            "
          >
            <div className="text-xl font-bold md:m-2 mb-2 text-[#DEF7E5] text-center md:pl-8 md:text-start">
              Your Projects
            </div>
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
              <Link href="/dashboard/project/newproject">
                <div
                  className="bg-[#FFFEFE] shadow-[0px_4px_8px_rgba(0,0,0,0.25)] h-[180px] w-full cursor-pointer rounded-[12px]
        flex justify-center flex-col items-center hover:bg-[#DEF7E5] transition-all duration-200
        "
                >
                  <div>
                    <PlusOutlined className="text-[30px]" />
                  </div>
                  <div className="select-none text-base text-[#023430] font-semibold">Create a Project</div>
                </div>
              </Link>
              {userQuery.isRefetching ? (
                <div className=" relative min-h-[40vh]">
                  <Loader />
                </div>
              ) : (
                userQuery.data.projects &&
                userQuery.data.projects.length > 0 &&
                userQuery.data.projects.map((project, i) => (
                  <ProjectCard
                    key={i}
                    id={project?.id}
                    formName={project?.name}
                    totalForms={project?.form_count}
                    allowedOrigins={project?.allowed_origins}
                    creationDate={project?.date_created}
                  />
                ))
              )}
            </div>
          </div>
          <div className="z-10 mb-5 mt-12 md:w-[clamp(0px,65%,900px)] w-[70%] flex flex-col md:flex-row">
            <div className="border-[#001E2B] border-[1px] rounded-[12px] flex md:w-[65%] flex-col md:flex-row">
              <div className=" md:w-[85%] flex flex-col justify-center p-2">
                <div className="m-2 text-xl font-bold">Projects represent your website</div>
                <div className="m-1 ml-2 text-sm text-[#001E2B99]">
                  A project may contain multiple forms and those forms share the same domain name and reCaptcha details.
                </div>
                <div className="ml-2 m-2">Learn More</div>
              </div>
              <div className="md:w-[70%] md:flex justify-center items-center hidden mb-[-20px]">
                <Image src={Icon} alt="icon" />
              </div>
            </div>
            <div className="border-[#001E2B] p-3 border-[1px] mt-5 md:mt-0 rounded-[12px] flex flex-col items-center justify-between md:w-[30%] md:ml-auto ">
              <div className="text-xl mb-[80px] font-bold">You can create upto 6 Projects.</div>
              <div className="text-[#001E2B99]">We are working to provide you more</div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(["userData"], getUserDashboard);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
