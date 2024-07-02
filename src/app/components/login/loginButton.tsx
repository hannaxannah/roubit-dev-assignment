type SubmitButtonProps = {
  handleSubmit: () => void;
};

export default function LoginButton(props: SubmitButtonProps) {
  const { handleSubmit } = props;
  return (
    <>
      <div className="w-[327px] mt-[20px] h-[51px] m-auto bg-[#209C6A] rounded-[12px]">
        <button
          className="w-full h-[48px] bg-[#26BD81] rounded-[12px] font-pretendard font-semibold text-[#FFFFFF] text-[1rem] leading-[1.5rem]"
          onClick={handleSubmit}
        >
          Log in
        </button>
      </div>
    </>
  );
}
