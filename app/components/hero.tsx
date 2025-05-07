"use client";
// import { useMemo } from "react";
import { Card } from "./cards";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useWindowSize } from "@/hooks/useWindowSize";

export const HeroSwiper = () => {
  //   <SwiperSlide>
  //   <div className={`px-[5%] bg-black`}>
  //     <div className="w-full relative aspect-[16/9] bg-black">
  //       <Image
  //         src="/home/hero.png"
  //         alt="hero"
  //         fill
  //         className="w-full h-auto object-contain"
  //         sizes="100vw"
  //         priority
  //       />
  //     </div>
  //     <p
  //       style={{ fontSize: "clamp(1rem,4vw,3rem)" }}
  //       className="text-center font-black pb-16 text-white"
  //     >
  //       انتخابی برای هر لحظه
  //     </p>
  //   </div>
  // </SwiperSlide>
  return (
    <Card>
      <div className="max-h-[80svh]">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay]}
          className="w-full"
        >
          <SwiperSlide>
            <div className={`px-[5%] bg-black`}>
              <div className="w-full max-w-[900px] mx-auto relative aspect-[16/9] bg-black">
                <Image
                  src="/home/hero.png"
                  alt="hero"
                  fill
                  className="w-full h-auto object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <p
                style={{ fontSize: "clamp(1rem,4vw,3rem)" }}
                className="text-center font-black pb-16 text-white"
              >
                انتخابی برای هر لحظه
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`px-[5%] bg-black`}>
              <div className="w-full max-w-[900px] mx-auto relative aspect-[16/9] bg-black">
                <Image
                  src="/home/hero.png"
                  alt="hero"
                  fill
                  className="w-full h-auto object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <p
                style={{ fontSize: "clamp(1rem,4vw,3rem)" }}
                className="text-center font-black pb-16 text-white"
              >
                انتخابی برای هر لحظه
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`px-[5%] bg-black`}>
              <div className="w-full max-w-[900px] mx-auto relative aspect-[16/9] bg-black">
                <Image
                  src="/home/hero.png"
                  alt="hero"
                  fill
                  className="w-full h-auto object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <p
                style={{ fontSize: "clamp(1rem,4vw,3rem)" }}
                className="text-center font-black pb-16 text-white"
              >
                انتخابی برای هر لحظه
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Card>
  );
};

export const Hero = () => {
  return (
    <Card>
      <div className="px-[5%] bg-black">
        <div className="w-full relative aspect-[16/9] bg-black">
          {/* <Image
      src="/home/hero.png"
      alt="hero"
      width={1920}
      height={1080}
      sizes="100vw"
      className="w-full h-auto object-contain"
      priority
    /> */}
          <Image
            src="/home/hero.png"
            alt="hero"
            fill
            className="w-full h-auto object-contain"
            sizes="100vw"
            priority
          />
        </div>

        <p
          style={{ fontSize: "clamp(1rem,4vw,3rem)" }}
          className="text-center font-black pb-16 text-white"
        >
          انتخابی برای هر لحظه
        </p>
      </div>
    </Card>
  );
};
