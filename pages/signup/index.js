export default function SignUp() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="bg-gray-200"></div>
            <div className=" flex flex-col justify-center">
                <form className="max-w-[500px] w-full mx-auto rounded-lg p-10 ">
                    <h2 className="text-4xl text-center text- p-5 text-[#00694B] font-bold">
                        Sign up
                    </h2>
                    <div className="flex flex-col py-2 text-[#00694B] ">
                        <input
                            placeholder="Name"
                            className="border-2 font-normal rounded-lg bg-[#FFFFFF] p-3 focus:border-blue-500"
                            type="text"
                            required
                        ></input>
                    </div>
                    <div className="flex flex-col py-2 text-[#00694B] ">
                        <input
                            placeholder="Email"
                            className="border-2 font-normal rounded-lg bg-[#FFFFFF] p-3 focus:border-blue-500"
                            type="email"
                            required
                        ></input>
                    </div>
                    <div className="flex flex-col py-2 text-[#00694B] ">
                        <input
                            placeholder="Password"
                            className="border-2 font-normal rounded-lg bg-[#FFFFFF] p-3 focus:border-blue-500"
                            type="password"
                            required
                        ></input>
                    </div>
                    <div className="flex flex-col py-2 text-[#00694B] ">
                        <input
                            placeholder="Confirm Password"
                            className="border-2 font-normal rounded-lg bg-[#FFFFFF] p-3 focus:border-blue-500"
                            type="password"
                            required
                        ></input>
                    </div>
                    <button
                        type="submit"
                        className="border-2 border-[#00694B] border-opacity-70 w-full my-2 py-3 bg-[#00694B] shadow-lg shadow-black-500/50 rounded-lg text-[#FFFFFF] hover:border-[#12AB52]"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
