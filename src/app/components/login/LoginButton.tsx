interface SubmitButtonProps {
  onSubmit: () => void;
}
const LoginButton = ({ onSubmit }: SubmitButtonProps) => {
  return (
    <>
      <div className="w-[327px] mt-[20px] h-[51px] m-auto bg-[#209C6A] rounded-[12px]">
        <button
          className="w-full h-[48px] bg-[#26BD81] rounded-[12px] font-pretendard font-semibold text-[#FFFFFF] text-[1rem] leading-[1.5rem]"
          onClick={onSubmit}
        >
          Log in
        </button>
      </div>
    </>
  );
};

export default LoginButton;
