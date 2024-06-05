import React, { ReactNode } from "react";
import Image from 'next/image'
import waves from '../../assets/svg/wave.svg'
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-backgroundColor">
      <div>
          {children}
      </div>
       <Image src={waves} alt="svg" width={3000} height={100}/>
    </div>
  );
};

export default Layout;
