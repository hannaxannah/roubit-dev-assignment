"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./todocheck.module.css";
import checked from "../../../../public/checked.svg";
import unchecked from "../../../../public/unchecked.svg";

interface ToDoCheckProps {
  checked: boolean;
}

export default function ToDoCheck(props: ToDoCheckProps) {
  if (props.checked === true) {
    return (
      <>
        {/* checked */}
        {/* checkbox */}
        <button>
          <Image src={checked} alt={checked} width={24} height={24} />
        </button>
        {/* todo label */}
        <label className="w-full font-pretendard font-medium text-[16px] text-[#929294] leadign-[24px] tracking-tight line-through">
          Make a to do list app
        </label>
      </>
    );
  } else {
    return (
      <>
        {/* unchecked */}
        {/* checkbox */}
        <button>
          <Image src={unchecked} alt={checked} width={24} height={24} />
        </button>
        {/* todo label */}
        <label className="w-full font-pretendard font-medium text-[16px] text-[#323233] leadign-[24px] tracking-tight">
          Learn JavaScript project
        </label>
      </>
    );
  }
}
