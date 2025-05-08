"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export const ImageSwiper = ({ images }: { images: string[] }) => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="h-full w-full rounded-b-3xl"
      >
        {images.map((image, i) => (
          <SwiperSlide key={`image-${i}`}>
            <div className="relative h-full w-full">
              <Image src={image} alt="image" className="object-cover" fill />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
