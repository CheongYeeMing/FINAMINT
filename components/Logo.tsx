import React from 'react';
import { ScanEye } from 'lucide-react';

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <ScanEye className="stroke h-11 w-11 stroke-teal-500 stroke-[1.5]"></ScanEye>
      <p className="bg-gradient-to-r from-teal-400 to-rose-500 bg-clip-text text-3xl font-light leading-tight -tracking-tighter text-transparent">
        FINAMINT
      </p>
    </a>
  );
}

export function LogoMobile() { 
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-teal-400 to-rose-500 bg-clip-text text-3xl font-light leading-tight -tracking-tighter text-transparent">
        FINAMINT
      </p>
    </a>
  );
}

export default Logo;
