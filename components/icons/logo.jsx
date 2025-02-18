import Image from "next/image";

export default function LogoIcon(props) {
  return (
    // <svg height="30" width="200" xmlns="http://www.w3.org/2000/svg">
    //   <text x="5" y="20" fill="black">
    //     BM
    //   </text>
    // </svg>
     <Image
      src={"/logo-black.png"}
      alt={`${process.env.SITE_NAME}`}
      width={50}
      height={50}
    />
  );
}
