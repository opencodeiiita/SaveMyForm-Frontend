import React, { useContext, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { get } from "../../../../components/utils/API";
import { useQuery, dehydrate, QueryClient } from "@tanstack/react-query";
import { AppbarContext, UserContext } from "../../../../components/context";
import Loader from "../../../../components/elements/Loader";
import Form from "../../../../components/elements/Form";
import Footer from "../../../../components/elements/Footer";
import Link from "next/link";
import SEO from "../../../../components/utils/SEO";
import DashboardVector from "../../../../assets/svgs/dashboardsVector.svg";
import Image from "next/image";

async function getProjectData(id) {
  return await get(`/project/dashboard/${id}`).then((data) => {
    data?.data?.data?.forms?.forEach((form) => {
      let iostr = form.date_created;
      let iostr2 = form.last_updated;
      let tempDate = new Date(iostr).toDateString().slice(4);
      let tempDate2 = new Date(iostr2).toDateString().slice(4);
      form.date_created = tempDate.slice(0, 6) + "," + tempDate.slice(6);
      form.last_updated = tempDate2.slice(0, 6) + "," + tempDate2.slice(6);
    });
    return data?.data?.data;
  });
}

export default function Project({ id }) {
  const { setActive } = useContext(AppbarContext);
  let { isLoggedIn, user } = useContext(UserContext);
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
  }, [user]);
  const projectQuery = useQuery({
    queryKey: ["projectData", id],
    queryFn: () => {
      return getProjectData(id);
    },
    staleTime: 10 * 60 * 1000,
  });
  if (projectQuery?.isLoading) return <Loader />;
  if (projectQuery?.isSuccess) {
    return (
      <>
        <SEO
          title={`SaveMyForm | Project | ${projectQuery?.data?.name}`}
          desc={`Dashboard of project ${projectQuery?.data?.name}. SaveMyForm is a platform where yoy save your form data now
                easily and securely.No need to create a Backend for collecting
                form responses on your application`}
        />
        <div className="grid place-items-center w-screen relative">
          <div className="absolute w-full h-96 bg-[#023430] top-0 z-0">
            <Image
              src={DashboardVector.src}
              height={384}
              width={786}
              alt="Dashboard Vector"
              className="ml-auto object-cover h-full"
            />
          </div>
          <div className="flex flex-col gap-8 lg:w-1/2 w-5/6 z-20 mt-16">
            <div className="flex flex-col gap-2 ">
              <div className="flex flex-row gap-2 items-center">
                <h1 className=" text-[#DEF7E5] font-bold text-5xl">{projectQuery?.data?.name}</h1>
                {projectQuery?.data?.is_owner && (
                  <Link href={`/dashboard/project/${projectQuery?.data?.id}/settings`} className="h-full">
                    <button className="text-[#DEF7E5] h-[31px] mt-1 px-2 rounded-lg border-2 border-[#DEF7E5] ">
                      Manage
                    </button>
                  </Link>
                )}
              </div>
              {projectQuery.data.forms.length !== 0 && (
                <div className="self-end">
                  <Link href={`/dashboard/project/${id}/newform`}>
                    <button className="rounded-lg bg-[#DEF7E5] text-[#023430] font-semibold p-1 px-2 ">
                      <div className="flex flex-row items-center gap-2">
                        <PlusOutlined size={16} strokeWidth={12} />
                        Create New Form
                      </div>
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4 rounded-lg py-8 ">
              <div className="flex flex-col gap-4">
                {projectQuery.data.forms.length === 0 && (
                  <Link
                    href={`/dashboard/project/${id}/newform`}
                    className="bg-[#FFFEFE] shadow-[0px_4px_8px_rgba(0,0,0,0.25)] p-8 w-full cursor-pointer
                                flex justify-center flex-col items-center hover:bg-[#DEF7E5] transition-all duration-200 my-3 rounded-lg"
                  >
                    <p className="text-xl text-semibold text-center">Create your first Form</p>
                  </Link>
                )}
                {projectQuery.data.forms.map((form, i) => (
                  <Form
                    key={i}
                    createdAt={form.date_created}
                    formName={form.name}
                    id={form.id}
                    projectId={projectQuery.data.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export async function getServerSideProps({ params: { id } }) {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(["projectData", id], getProjectData);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
}
