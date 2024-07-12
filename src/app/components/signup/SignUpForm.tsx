import { signUpFormData } from "@/app/signup/page";

interface SignUpFormProps {
  formData: signUpFormData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpForm = ({ formData, handleChange }: SignUpFormProps) => {
  // 각 입력 요소의 정보 배열
  const formFields = [
    {
      name: "phoneNumberOrEmail",
      label: "Phone number or Email",
      type: "text",
      placeholder: "Please enter your phone number or Email",
      value: formData.phoneNumberOrEmail,
    },
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Please enter your Full name",
      value: formData.fullName,
    },
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "2-12 character username",
      value: formData.username,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "6-12 character password",
      value: formData.password,
    },
  ];

  return (
    <>
      <form className="flex flex-col mx-[1.5rem] mt-[2rem] gap-6">
        {formFields.map((field, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="font-pretendard font-medium text-[0.875rem]">
              {field.label}
            </div>
            <input
              className="w-full h-[3.25rem] px-[1rem] py-[0.625rem] ring-[#CCCCCE] rounded-t-xl rounded-b-xl ring-[0.063rem] placeholder-[#B6B6B8] font-pretendard font-medium text-[0.875rem] leading-[1.375rem] focus:ring-[0.125rem] focus:ring-[#26BD81] focus:outline-none focus:text-[#161617]"
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              value={field.value}
              onChange={handleChange}
            />
          </div>
        ))}
      </form>
    </>
  );
};

export default SignUpForm;
