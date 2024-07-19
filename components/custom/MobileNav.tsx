import Image from 'next/image';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from '@radix-ui/react-separator';
import NavItems from './NavItems';

export default function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image 
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        {/* use SheetTitle here just for avoiding some erros in console */}
        <SheetTitle />
        <SheetContent className="md:hidden w-[300px] sm:w-[340px] flex flex-col gap-6 bg-white">
          <Image  
            src="/assets/images/logo.svg"
            alt="logo"
            width={48}
            height={18}
          />
          <Separator className='border border-slate-100'/>
          <NavItems />
          {/* use SheetDescription here just for avoiding some erros in console */}
          <SheetDescription />
        </SheetContent>
      </Sheet>
    </nav>
  )
}
