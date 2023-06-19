import Footer from '../../../../../components/elements/Footer';
import Pop from '../../../../../components/elements/Popinfo';
import { Input } from 'antd';
import user from '../../../../../assets/images/illustrations/user.png';
import { Switch } from 'antd';
import Image from 'next/image';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useState, useEffect, useContext } from 'react';
import { message } from 'antd';
import { post, get } from '../../../../../components/utils/API';
import { useRouter } from 'next/router';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import {
  useQuery,
  dehydrate,
  QueryClient,
  useQueryClient,
} from '@tanstack/react-query';
import { AppbarContext, UserContext } from '../../../../../components/context';
import Loader from '../../../../../components/elements/Loader';

async function getProjectData(id) {
  return await get(`/project/dashboard/${id}`).then((data) => {
    data?.data?.data?.forms?.forEach((form) => {
      let iostr = form.date_created;
      let iostr2 = form.last_updated;
      let tempDate = new Date(iostr).toDateString().slice(4);
      let tempDate2 = new Date(iostr2).toDateString().slice(4);
      form.date_created = tempDate.slice(0, 6) + ',' + tempDate.slice(6);
      form.last_updated = tempDate2.slice(0, 6) + ',' + tempDate2.slice(6);
    });
    return data?.data?.data;
  });
}
export default function editProject({ id }) {
  const { setActive } = useContext(AppbarContext);
  let { isLoggedIn, user } = useContext(UserContext);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const [state, setState] = useState(false);
  const [projectName, setProjectName] = useState(null);
  const [recaptchaKey, setReCaptchaKey] = useState(null);
  const [recaptchaSecret, setReCaptchaSecret] = useState(null);
  const [domain, setDomain] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const projectQuery = useQuery({
    queryKey: ['projectData', id],
    queryFn: () => {
      return getProjectData(id);
    },
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
      router.push('/signin');
    }
    setActive({
      home: false,
      dashboard: true,
      documentation: false,
      faq: false,
    });
  }, [user]);

  const onChange = (checked) => {
    setState(checked);
  };
  function handleAddDomain() {
    if (firstDom === '') {
      message.error('Please fill the previous domain');
      return;
    } else if (domain[domain.length - 1] == '') {
      message.error('Please fill the previous domain');
      return;
    }
    const dom = [...domain, []];
    setDomain(dom);
  }
  function handleAddCollab() {
    if (firstCollab === '') {
      message.error('Please fill the previous Collaborator');
      return;
    } else if (collaborators[collaborators.length - 1] == '') {
      message.error('Please fill the previous Collaborator');
      return;
    }
    const collab = [...collaborators, []];
    setCollaborators(collab);
  }
  function handleDomainChange(e, index) {
    const dom = [...domain];
    dom[index] = e.target.value;
    setDomain(dom);
  }
  function handleCollabChange(e, index) {
    const collab = [...collaborators];
    collab[index] = e.target.value;
    setCollaborators(collab);
  }
  function handleDeleteDomain(index) {
    const delVal = [...domain];
    delVal.splice(index, 1);
    setDomain(delVal);
  }
  function handleDeleteCollab(index) {
    const delVal = [...collaborators];
    delVal.splice(index, 1);
    setCollaborators(delVal);
  }
  const success = () => {
    message.success('Project Successfully saved');
    router.push('/dashboard');
  };
  const handleSave = async () => {
    if (!executeRecaptcha) {
      message.error('Recaptcha Failed');
      return;
    }
    const token = await executeRecaptcha();
    if (!token) {
      message.error('Recaptcha Failed');
      return;
    }
    const res = await post('/project/new', {
      name: projectName,
      hasRecaptcha: state,
      recaptchaKey: recaptchaKey,
      recaptchaSecret: recaptchaSecret,
      allowedOrigins: domain,
      collaborators: collaborators,
      recaptcha_token: token,
    });
    res.status === 'error' ? message.error(res.error) : success();
  };
  const handleCancel = async () => {
    setProjectName(null);
    setReCaptchaKey(null);
    setReCaptchaSecret(null);
    setState(false);
    setDomain([]);
    setCollaborators([]);
  };
  if (projectQuery?.isLoading) return <Loader />;
  // if (projectQuery?.isSuccess || projectQuery.isRefetching) {
  //   setProjectName(projectQuery?.data?.name);
  //   setReCaptchaKey(projectQuery?.data?.recaptchaKey);
  //   setReCaptchaSecret(projectQuery?.data?.recaptchaSecret);
  //   setState(projectQuery?.data?.hasRecaptcha);
  //   setDomain(projectQuery?.data?.allowedOrigins);
  //   setCollaborators(projectQuery?.data?.collaborators);
  // }
  return (
    <>
      <div className="mb-[650px]">
        <div className="relative">
          <svg
            width="100%"
            viewBox="0 0 1728 461"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-96 w-auto md:w-full md:h-auto"
          >
            <rect
              x="0.5"
              y="0.5"
              width="1727"
              height="460"
              fill="#023430"
              stroke="black"
            />
            <path
              d="M1628 0C1683.23 0 1728 44.7715 1728 100V324.686C1728 381.743 1673.73 423.166 1618.69 408.114V408.114C1596.62 402.076 1573.05 405.034 1553.15 416.338L1515 438.01L1476.2 453.704C1464.29 458.523 1451.56 461 1438.7 461H848.104C817.685 461 791.595 439.298 786.055 409.387V409.387C785.353 405.597 785 401.75 785 397.896V394.527C785 339.415 829.677 294.738 884.79 294.738H1098.52H1164.22C1240.12 294.738 1283.43 208.075 1237.87 147.369V147.369C1192.31 86.6627 1235.63 0 1311.53 0H1628Z"
              fill="#00684A"
            />
          </svg>
          <div className=" absolute top-[110px] md:top-[85px] left-[70px] md:left-[27%] flex-row md:justify-around md:flex justify-between items-center">
            <h1 className=" text-[#DEF7E5] font-bold text-[48px]">
              Edit Project
            </h1>
          </div>
          <div className="absolute left-5 md:left-1/4 ml-auto mx-auto top-[250px] md:top-[242px] w-full  mt-4 mb-8 flex-row">
            <div className="bg-[#FFFEFE] shadow-[0px_4px_8px_rgba(0,0,0,0.25)] h-[800px] w-11/12  md:w-1/2 rounded-[12px] flex justify-evenly flex-col items-center p-2  md:p-4 ">
              <div className="project-name flex-row justify-between items-center w-[80%] h-[24px]  md:h-[48px] mb-2  md:mb-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-[#116149] font-bold text-[24px]">
                    Project Name
                  </h1>
                  <Pop
                    title="Project Name"
                    content="Write the name of the project"
                  />
                </div>
                <div className="mt-2 w-auto  md:w-96">
                  <Input
                    placeholder="Project Name"
                    required
                    className="text-[#116149] border-[#116149] border-t-0 border-l-0 border-r-0 border-b-dark-100 p-0.5"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
              </div>
              <div className="recaptcha flex-row justify-between items-center w-[80%]  mb-8 ">
                <div className="flex justify-between items-center">
                  <div className="flex justify-evenly items-center">
                    <h1 className="text-[#116149] font-bold text-[24px]">
                      reCAPTCHA v3
                    </h1>
                    <div className=" ml-4">
                      <Switch
                        onChange={onChange}
                        className={
                          state ? 'bg-green-700 w-12' : 'bg-gray-300 w-12'
                        }
                      />
                    </div>
                  </div>
                  <Pop title="reCAPTCHA" content="Use the toggle button" />
                </div>
                {state && (
                  <div className="mt-2 w-auto  md:w-96">
                    <Input
                      placeholder="Enter reCaptcha Key"
                      required
                      className="text-[#116149] border-[#116149] border-t-0 border-l-0 border-r-0 border-b-dark-100 p-0.5"
                      value={recaptchaKey}
                      onChange={(e) => setReCaptchaKey(e.target.value)}
                    />
                  </div>
                )}
                {state && (
                  <div className="mt-4 w-auto  md:w-96">
                    <Input
                      placeholder="Enter reCaptcha Secret"
                      required
                      className="text-[#116149] border-[#116149] border-t-0 border-l-0 border-r-0 border-b-dark-100 p-0.5"
                      value={recaptchaSecret}
                      onChange={(e) => setReCaptchaSecret(e.target.value)}
                    />
                  </div>
                )}
              </div>

              <div className="Allowed Domains flex-row justify-between items-center w-[80%] h-[32px]  md:h-[48px]  mb-8">
                <div className="flex justify-between items-center">
                  <h1 className="text-[#116149] font-bold text-[24px]">
                    Allowed Domains
                  </h1>
                  <div className="flex justify-between w-24  md:w-28 items-center">
                    <button
                      className="bg-green-300 text-green-700 py-0.5  px-2 rounded-md flex justify-center items-center font-semibold"
                      onClick={() => handleAddDomain()}
                    >
                      <AiOutlinePlus className="mr-1" />
                      Add
                    </button>
                    <Pop
                      title="Allowed Domains"
                      content="Which domains are allowed"
                    />
                  </div>
                </div>
                <div
                  className={
                    domain.length > 3
                      ? 'h-24 md:h-32 overflow-y-scroll'
                      : 'h-16'
                  }
                >
                  {domain.map((item, index) => {
                    return (
                      <div className="flex justify-evenly items-center w-auto md:w-96 mt-1">
                        <Image
                          src={user}
                          className="w-5 h-5 mt-1 mr-2 "
                          alt="user"
                        />
                        <Input
                          placeholder="Domain"
                          className="text-[#116149] border-[#116149] border-t-0 border-l-0 border-r-0 border-b-dark-100 p-0.5"
                          onChange={(e) => {
                            handleDomainChange(e, index);
                          }}
                        />
                        <button className="ml-2">
                          <MdDelete
                            className=" w-6 h-6 text-red-500"
                            onClick={() => {
                              handleDeleteDomain(index);
                            }}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="Collaborators flex-row justify-between items-center w-[80%] h-[32px]  md:h-[48px] mb-8  md:mb-16 mt-8 ">
                <div className="flex justify-between items-center">
                  <h1 className="text-[#116149] font-bold text-[24px]">
                    Collaborators
                  </h1>
                  <div className="flex justify-between w-24  md:w-28 items-center">
                    <button
                      className="bg-green-300 text-green-700 py-0.5  px-2 rounded-md flex justify-center items-center font-semibold"
                      onClick={() => {
                        handleAddCollab();
                      }}
                    >
                      <AiOutlinePlus className="mr-1" />
                      Add
                    </button>
                    <Pop
                      title="Collaborators"
                      content="Mention the Collaborators"
                    />
                  </div>
                </div>
                <div
                  className={
                    collaborators.length > 3 ? 'h-32 overflow-y-scroll' : 'h-32'
                  }
                >
                  {collaborators.map((item, index) => {
                    return (
                      <div className="flex justify-evenly items-center w-auto md:w-96 mt-2 mb-2">
                        <Image
                          src={user}
                          className="w-5 h-5 mt-1 mr-2"
                          alt="user"
                        />
                        <Input
                          type="email"
                          placeholder="Add Collaborators"
                          className="text-[#116149] border-t-0 border-l-0 border-r-0 border-b-dark-100 border-[#116149] p-0.5"
                          onChange={(e) => {
                            handleCollabChange(e, index);
                          }}
                        />
                        <button className="ml-2">
                          <MdDelete
                            className=" w-6 h-6 text-red-500"
                            onClick={() => {
                              handleDeleteCollab(index);
                            }}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-8 w-72 flex justify-between">
              <button
                className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] rounded-lg bg-green-300 p-2 w-32"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="shadow-[0px_4px_8px_rgba(0,0,0,0.25)] rounded-lg bg-white p-2 w-32"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex justify-center">
          <div className="absolute w-11/12 top-[1300px]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps({ params: { id } }) {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(['projectData', id], getProjectData);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
}
