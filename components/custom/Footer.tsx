import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='border-t'>
      <div className="wrapper flex-between max-sm:flex-col gap-4 text-center text-brand">
        <Link href='/'>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={38} 
            height={18}
          />
        </Link>
        <p>&#169;2024 Venuely. All Rights reserved.</p>
      </div>
    </footer>
  )
}
