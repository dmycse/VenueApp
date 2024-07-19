'use client';

import { headerLinks } from "@/constans";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItems() {

  let pathname = usePathname();
  
  return (
    <ul className='w-full flex max-md:flex-col md:flex-between gap-5'>
      {headerLinks.map(link => (
        <li 
          key={link.label}
          className={`
            ${pathname === link.route && 'text-logo'}
            flex p-medium-16 whitespace-nowrap
          `}
        >
          <Link href={link.route}>
            {link.label}
          </Link>
        </li>
        ))
      }
    </ul>
  )
}
