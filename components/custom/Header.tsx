import Link from 'next/link';
import Image from 'next/image';

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import NavItems from './NavItems';
import MobileNav from './MobileNav';


export default function Header() {
  return (
    <header className='border-b'>
      <div className="wrapper flex justify-between items-center">
        <Link href="/" className='w-44 inline-flex items-center gap-2'>
          <Image 
            src="/assets/images/logo.svg"
            alt="Vunuely logo"
            width={38}
            height={18}
          />
          <span className='text-3xl font-semibold text-brand'>Venuely</span>
        </Link>
        <SignedIn>
          <nav className='hidden w-full max-w-xs md:flex-between'>
            <NavItems />
          </nav>
        </SignedIn>
        <div className='w-32 flex justify-end gap-3'>
          <SignedIn>
            <UserButton />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild size="lg" className='rounded-xl'>
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}
