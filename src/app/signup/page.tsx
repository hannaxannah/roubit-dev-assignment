import Header from "../components/Header";

export default function SignUp() {
  return (
    <>
      <Header />
      <div className="mx-[1.5rem] mt-[0.5rem] font-pretendard font-semibold text-[1.5rem] leading-[2.375rem]">
        Start your <br />
        Phone number or Email
      </div>
      {/* SignUp Form */}
      <form className="flex flex-col mx-[1.5rem] mt-[2rem] gap-6">
        {/* Input 1 */}
        <div className="flex flex-col gap-1">
          <div className="font-pretendard font-medium text-[0.875rem]">
            Phone number or Email
          </div>
          <input
            className="w-full h-[3.25rem] px-[1rem] py-[0.625rem] ring-[#CCCCCE] rounded-t-xl rounded-b-xl ring-[0.063rem] placeholder-[#B6B6B8] font-pretendard font-medium text-[0.875rem] leading-[1.375rem] focus:ring-[0.125rem] focus:ring-[#26BD81] focus:outline-none focus:text-[#161617]"
            type="text"
            placeholder="Please enter your phone number or Email"
          />
        </div>
        {/* Input 2 */}
        <div className="flex flex-col gap-1">
          <div className="font-pretendard font-medium text-[0.875rem]">
            Full Name
          </div>
          <input
            className="w-full h-[3.25rem] px-[1rem] py-[0.625rem] ring-[#CCCCCE] rounded-t-xl rounded-b-xl ring-[0.063rem] placeholder-[#B6B6B8] font-pretendard font-medium text-[0.875rem] leading-[1.375rem] focus:ring-[0.125rem] focus:ring-[#26BD81] focus:outline-none focus:text-[#161617]"
            type="text"
            placeholder="Please enter your Full name"
          />
        </div>
        {/* Input 3 */}
        <div className="flex flex-col gap-1">
          <div className="font-pretendard font-medium text-[0.875rem]">
            Username
          </div>
          <input
            className="w-full h-[3.25rem] px-[1rem] py-[0.625rem] ring-[#CCCCCE] rounded-t-xl rounded-b-xl ring-[0.063rem] placeholder-[#B6B6B8] font-pretendard font-medium text-[0.875rem] leading-[1.375rem] focus:ring-[0.125rem] focus:ring-[#26BD81] focus:outline-none focus:text-[#161617]"
            type="text"
            placeholder="2-12 character username"
          />
        </div>
        {/* Input 4 */}
        <div className="flex flex-col gap-1">
          <div className="font-pretendard font-medium text-[0.875rem]">
            Password
          </div>
          <input
            className="w-full h-[3.25rem] px-[1rem] py-[0.625rem] ring-[#CCCCCE] rounded-t-xl rounded-b-xl ring-[0.063rem] placeholder-[#B6B6B8] font-pretendard font-medium text-[0.875rem] leading-[1.375rem] focus:ring-[0.125rem] focus:ring-[#26BD81] focus:outline-none focus:text-[#161617]"
            type="password"
            placeholder="6-12 character password"
          />
        </div>
      </form>
      {/* Sign Up Button */}
      <div className="mx-[1.5rem] mt-[7.625rem] w-[20.438rem] h-[3.25rem] bg-[#E8E8EA] rounded-t-xl rounded-b-xl hover:bg-[#209C6A]">
        <button className="w-[20.438rem] h-[3.063rem] bg-[#E8E8EA] rounded-t-xl rounded-b-xl font-pretendard font-semibold text-[#CCCCCE] text-[1rem] leading-[1.5rem]  hover:bg-[#26BD81] hover:text-white">
          Sign up
        </button>
      </div>
    </>
  );
}
