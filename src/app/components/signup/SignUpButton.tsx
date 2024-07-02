type SubmitButtonProps = {
  handleSubmit: () => void;
};

export default function SignUpButton(props: SubmitButtonProps) {
  const { handleSubmit } = props;
  return (
    <>
      <div className="mx-[1.5rem] mt-[7.625rem] w-[20.438rem] h-[3.25rem] bg-[#E8E8EA] rounded-t-xl rounded-b-xl hover:bg-[#209C6A]">
        <button
          className="w-[20.438rem] h-[3.063rem] bg-[#E8E8EA] rounded-t-xl rounded-b-xl font-pretendard font-semibold text-[#CCCCCE] text-[1rem] leading-[1.5rem]  hover:bg-[#26BD81] hover:text-white"
          onClick={handleSubmit}
        >
          Sign up
        </button>
      </div>
    </>
  );
}
