interface LogInFormProps {
  formData: {
    phoneNumberOrEmail: string;
    password: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm = ({ formData, onChange }: LogInFormProps) => {
  const formFields = [
    {
      name: "phoneNumberOrEmail",
      label: "Phone number or Email",
      type: "text",
      placeholder: "Phone number or Email",
      value: formData?.phoneNumberOrEmail,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      value: formData?.password,
    },
  ];

  return (
    <>
      <form className="w-[327px] mt-[28px] flex flex-col m-auto gap-[16px]">
        {formFields.map((field, index) => (
          <input
            className="w-full h-[52px] px-[16px] py-[10px] ring-[1px] ring-[#CCCCCE] rounded-[12px] placeholder:font-pretendard font-medium text-[14px] color-[#B6B6B8] focus:ring-[0.125rem] focus:ring-[#26BD81] focus:outline-none focus:text-[#161617]"
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            value={field.value}
            onChange={onChange}
            key={index}
          />
        ))}
      </form>
    </>
  );
};

export default LoginForm;
