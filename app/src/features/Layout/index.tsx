import { ReactNode } from "react";
import Header from "./ui/Header";

type Props = {
  children: ReactNode;
  hide?: {
    header?: boolean;
  }
}

export default function Layout({ children, hide }: Props) {

  return (
    <div id="world" className="w-full bg-[#F5F5F5] flex justify-center h-dvh cursor-pointer">
      <article className="bg-white max-w-full w-full h-dvh md:max-w-[500px] md:w-[500px] flex flex-col pb-[34px] px-[16px]">
        {!hide?.header && <Header />}
        {children}
      </article>
    </div>
  );
}
