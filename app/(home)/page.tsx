"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/buttons";
import { Card } from "../components/cards";
import { ImageSwiper } from "../components/image-slider";
import { useWindowSize } from "@/hooks/useWindowSize";
import { BiSolidMessageDots } from "react-icons/bi";
import { isFarsi } from "@/utils";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { HeroSwiper } from "../components/hero";
import { basePath } from "@/site.config";

export default function Page() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      if (anchor.getAttribute("href") !== "#") {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          //@ts-expect-error cannot infer this
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      }
    });
  }, []);

  return (
    <div className="font-abar-low">
      <div style={{ padding: "0px clamp(8px,3vw,56px" }}>
        <Navbar />
        <main className="flex flex-col gap-10 pt-2">
          <HeroSwiper />
          <BuyTicket />
          <Blog />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}

const BuyTicket = () => {
  return (
    <Card>
      <div className="relative">
        <div className="w-full bg-[#F5F5F5]">
          <p
            style={{ fontSize: "clamp(1rem,4vw,3rem)" }}
            className="px-8 pt-[6%] text-center font-black"
          >
            همین حالا سفر بعدی خود را
            <span className="relative mx-[1%] inline-block before:absolute before:top-[25%] before:right-0 before:bottom-[15%] before:-left-[10%] before:block before:-rotate-2 before:bg-orange-400">
              <span className="relative">رزرو</span>
            </span>
            کنید
          </p>
        </div>
        <div className="relative aspect-[16/9] w-full bg-sky-700/30">
          <p
            style={{ fontSize: "clamp(0.9rem,2vw,2rem)" }}
            className="relative z-2 px-8 pt-[4%] text-center font-normal"
          >
            سفر از ۸ نقطه کلیدی به سراسر جهان!
          </p>
          <div className="absolute top-0 z-1 h-[5svh] w-full bg-[#f5f5f5]"></div>
          <div className="absolute top-[5svh] z-1 h-[15svh] w-full bg-gradient-to-b from-[#f5f5f5]">
            &nbsp;
          </div>
          <div className="absolute z-1 flex w-full justify-center py-10">
            <Button>به زودی</Button>
          </div>
          <Image
            src={`${basePath}/home/world-map.png`}
            alt="world-map"
            fill
            className="h-auto w-full object-contain object-bottom"
            sizes="100vw"
            priority
          />
          {/* <Image
            src="/home/routes.png"
            alt="hero"
            fill
            className="absolute top-0 left-0 w-full h-auto object-contain object-bottom"
            sizes="100vw"
            priority
          /> */}
        </div>
      </div>
    </Card>
  );
};

const Blog = () => {
  const images = [
    `${basePath}/home/blog-1.jpg`,
    `${basePath}/home/blog-2.jpg`,
    `${basePath}/home/blog-3.jpg`,
  ];

  const { width } = useWindowSize();

  return (
    <Card>
      <div className="bg-[#f5f5f5]">
        <div className="md:[px-[20%] flex flex-col items-center px-[10%]">
          <h2
            style={{ fontSize: "clamp(1rem,3vw,3rem)" }}
            className="py-[6vw] text-center font-black text-black"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از
          </h2>
          <p
            style={{ fontSize: "clamp(0.9rem,2vw,1.2rem)" }}
            className="mb-12 line-clamp-3 text-center"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
          <Link
            className="mb-16 text-sm text-black/70 underline underline-offset-6 hover:text-black/50"
            href="#"
          >
            بیشتر بخوانید
          </Link>
        </div>
        {width <= 720 ? (
          <div className="aspect-[16/9] w-full">
            <ImageSwiper images={images} />
          </div>
        ) : (
          <div className="flex h-[30svh] w-full justify-between gap-2">
            {images.map((image, i) => (
              <div key={`image-${i}`} className="relative h-full w-full">
                <Image src={image} alt="image" className="object-cover" fill />
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

const contactItems = [
  {
    title: "آدرس",
    value: "تهران، خیابان آزادی، پلاک ۲۵",
    href: "#",
  },
  {
    title: "شماره تماس",
    value: "021-22334455",
    href: "tel:+982122334455",
  },
  {
    title: "ایمیل",
    value: "info@flydubaiiran.ir",
    href: "mailto:info@flydubaiiran.ir",
  },
  {
    title: "اینستاگرام",
    value: "@flydubaiiran",
    href: "https://instagram.com",
  },
];

const Contact = () => {
  return (
    <Card id="contact">
      <div className="relative py-[6%]">
        <div className="relative z-1 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center pb-8">
            <BiSolidMessageDots
              style={{ fontSize: "clamp(3rem,4vw,4rem)" }}
              className="text-sky-700"
            />
            <h2
              style={{ fontSize: "clamp(1rem,3vw,3rem)" }}
              className="font-black"
            >
              تماس با ما
            </h2>
          </div>
          <div className="flex w-full flex-col items-center justify-center px-[10%] md:flex-row md:justify-between">
            {contactItems.map((c, i) => (
              <div key={`contact-${i}`} className="py-2">
                <p className="py-2 text-center text-xs text-black/50">
                  {c.title}
                </p>
                {c.href !== "#" ? (
                  <Link
                    className="hover:text-black/50"
                    dir={isFarsi(c.value) ? "rtl" : "ltr"}
                    href={c.href}
                  >
                    {c.value}
                  </Link>
                ) : (
                  <span dir={isFarsi(c.value) ? "rtl" : "ltr"}> {c.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-0 flex h-full w-full">
          <div className="w-full bg-gradient-to-bl from-amber-50/50 to-orange-300/80">
            &nbsp;
          </div>
          <div className="w-full bg-gradient-to-br from-amber-50/50 to-orange-300/80">
            &nbsp;
          </div>
        </div>
      </div>
    </Card>
  );
};

// const Blog = () => {
//   const images = ["/home/blog-1.jpg", "/home/blog-2.jpg", "/home/blog-3.jpg"];
//   const { width } = useWindowSize();
//   return (
//     <Card>
//       <div className="bg-[#f5f5f5]">
//         <div className="h-[45svh] px-[10%] md:[px-[20%]">
//           <div className="h-1/3 bg-red-100 flex flex-col items-center justify-center">
//             <h2
//               style={{ fontSize: "clamp(1rem,3vw,3rem)" }}
//               className="text-center font-black text-black"
//             >
//               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
//               استفاده از
//             </h2>
//           </div>
//           <div className="h-1/2 flex flex-col items-center justify-around">
//             <p
//               style={{ fontSize: "clamp(0.9rem,2vw,1.2rem)" }}
//               className="text-center line-clamp-3"
//             >
//               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
//               استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
//               در ستون و سطرآنچنان که لازم است
//             </p>
//             <Link href='#'>بیشتر بخوانید</Link>
//           </div>
//         </div>
//         {/* <div className="h-[45svh] bg-red-100 px-[20vw]">
//           <h2
//             style={{ fontSize: "clamp(1rem,3vw,3rem)" }}
//             className="pt-[10%] text-center font-black text-black"
//           >
//             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
//             استفاده از
//           </h2>
//           <div className="flex items-center justify-center bg-blue-200">
//             <p
//               style={{ fontSize: "clamp(0.9rem,2vw,1.2rem)" }}
//               className="text-center line-clamp-3"
//             >
//               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
//               استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
//               در ستون و سطرآنچنان که لازم است
//             </p>
//           </div>
//         </div> */}
//         {width <= 720 ? (
//           <div className="w-full aspect-[16/9]">
//             <ImageSwiper images={images} />
//           </div>
//         ) : (
//           <div className="flex justify-between h-[30svh] w-full gap-2">
//             {images.map((image, i) => (
//               <div key={`image-${i}`} className="relative h-full w-full">
//                 <Image src={image} alt="image" className="object-cover" fill />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </Card>
//   );
// };
// const BuyTicket = () => {
//   return (
//     <Card>
//       <div className="relative">
//         <div className="absolute w-full h-full top-0 z-1">
//           <div className="h-1/4 bg-[#F5F5F5]"></div>
//           <div className="h-1/4 bg-gradient-to-b from-[#F5F5F5]"></div>
//         </div>
//         <div className="absolute font-black text-5xl z-2 top-0 w-full h-full">
//           <p
//             style={{ fontSize: "clamp(1rem,4vw,3rem)" }}
//             className="px-8 pt-[6%] text-center"
//           >
//             همین حالا سفر بعدی خود را
//             <span className="relative mx-[1%] inline-block before:absolute before:-left-[10%] before:top-[10%] before:-bottom-[5%] before:right-0 before:-rotate-2  before:block before:bg-orange-400">
//               <span className="relative">رزرو</span>
//             </span>
//             کنید
//           </p>
//           <p
//             style={{ fontSize: "clamp(0.5rem,2vw,2rem)" }}
//             className="px-8 pt-[4%] text-center font-normal"
//           >
//             سفر از ۸ نقطه کلیدی به سراسر جهان!
//           </p>
//         </div>
//         <div className="w-full relative aspect-[16/9] bg-black bg-sky-700/30">
//           <Image
//             src="/home/world-map.png"
//             alt="hero"
//             fill
//             className="w-full h-auto object-contain object-bottom"
//             sizes="100vw"
//             priority
//           />
//         </div>
//       </div>
//     </Card>
//   );
// };
