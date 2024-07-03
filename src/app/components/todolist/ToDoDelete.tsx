import Image from "next/image";
import button from "../../../../public/trash-2.svg";

export default function ToDoDelete() {
  return (
    <>
      <button className="w-[24px] h-[24px]">
        <Image src={button} alt={button} width={24} height={24} />
      </button>
    </>
  );
}
