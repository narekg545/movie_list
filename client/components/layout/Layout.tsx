import React, { ReactNode } from "react";
import Image from 'next/image'
import waves from '../../assets/svg/wave.svg'
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-backgroundColor">
      <div className="w-full ">
          {children}
      </div>
      <div className="relative w-full h-40">
      <Image src={waves} alt="svg" layout="fill" objectFit="cover" />
    </div>
    </div>
  );
};

export default Layout;
