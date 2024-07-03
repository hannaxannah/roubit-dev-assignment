import React from "react";
import Image from "next/image";
import line from "../../../../../public/Vector 815.svg";

interface OutlineProps {
  index: number;
  todoLength: number;
}

const Outline = ({ index, todoLength }: OutlineProps) => {
  return !(index < todoLength - 1) ? (
    <></>
  ) : (
    <Image src={line} alt={line} width={327} height={2} className="my-[20px]" />
  );
};

export default Outline;
