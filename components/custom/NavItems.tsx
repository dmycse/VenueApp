'use client';

import { headerLinks } from "@/constans";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItems() {

  let pathname = usePathname();



  console.log(pathname)
  return (
    <ul className='w-full flex max-md:flex-col md:flex-between gap-5'>
      {headerLinks.map(link => {
        let isActive = pathname === link.route;

        return (
          <li 
            key={link.label}
            className={`
              ${isActive && 'text-logo'}
              flex p-medium-16 whitespace-nowrap
            `}
          >
            <Link href={link.route}>
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
