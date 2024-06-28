export default function Header() {
  return (
    // Header
    <div className="w-100vw h-[54px] py-[14px] px-[24px] flex jusity-between">
      {/* 뒤로 가기 버튼 */}
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15.5 4L7.50002 12L15.5 20"
            stroke="#7F7F80"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
