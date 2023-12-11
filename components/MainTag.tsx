import { ReactNode } from "react";
import Address from "./Address";
import FollowMe from "./FollowMe";
import MenuModal from "./MenuModal";
interface LayoutProps {
  children: ReactNode; // Use ReactNode type for children
}

function MainTag({ children }: LayoutProps): JSX.Element {
  return (
    <main className="relative z-[1] lg:my-0">
      <div className="bg-dark-200 h-full w-full absolute top-0 left-0 z-[-1]">
        <div className="w-full h-screen bg-dark-300"></div>
        <div className="container grid grid-cols-7 h-full absolute top-0 left-[50%] translate-x-[-50%] pointer-events-none">
          <div className="border-l-[0.1px] border-gray-400"></div>
          <div className="border-l-[0.1px] border-gray-400"></div>
          <div className="border-l-[0.1px] border-gray-400"></div>
          <div className="border-l-[0.1px] border-gray-400"></div>
          <div className="border-l-[0.1px] border-gray-400"></div>
          <div className="border-l-[0.1px] border-gray-400"></div>
          <div className="border-x-[0.1px] border-gray-400"></div>
        </div>
      </div>

      <FollowMe />
      {children}
      <MenuModal />
    </main>
  );
}

export default MainTag;
