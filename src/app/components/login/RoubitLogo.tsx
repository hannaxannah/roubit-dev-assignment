import Image from "next/image";
import logo from "../../../../public/logo_splash.svg";

const RoubitLogo = () => {
  return (
    <>
      <div className="w-[180px] h-[90px] mt-[189px] flex flex-col items-center m-auto gap-[21.355px] pt-[6.682px] pb-[11.693px] py-[2.968px]">
        <Image src={logo} alt="roubitLogo" width={180} height={90} />
      </div>
    </>
  );
};

export default RoubitLogo;
