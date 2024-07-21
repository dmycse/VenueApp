import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
     <section className="py-5 md:py-10 bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
          <p className="flex-1 p-regular-20 md:p-regular-24">
            Book and learn helpful tips from 3,167+ mentors 
            in world-class companies with our global community.
          </p>
          <Button size="lg" asChild className="w-full sm:w-fit button ">
            <Link href="#events">
              Explore now
            </Link>
          </Button>
        </div>
        <Image 
          src="/assets/images/hero.png"
          alt="hero"
          width={900}
          height={900}
          className="max-md:hidden max-h-[70vh] 2xl:max-h-[50vh] object-contain object-center"
        />
      </div>
     </section>

     <section id="events" className="wrapper my-8 flex flex-coll gap-8 md:gap-12">
      <h2 className="h2-bold">Trusted by <br /> Thousands of Events</h2>
      <div className="w-full flex max-md:flex-col gap-5">
        Search
        CategoryFilter
      </div>
     </section>
      
    </>
  );
}
