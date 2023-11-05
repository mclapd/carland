"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../effects/variants";
import { FaQuoteLeft } from "react-icons/fa";

const testimoinalData = [
  {
    message:
      "They truly exceeded my expectations and made my car rental expeirence a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Hannah Kim",
    job: "Doctor",
  },
  {
    message:
      "They truly exceeded my expectations and made my car rental expeirence a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Glenn Kim",
    job: "Teacher",
  },
];

const Testimonial = () => {
  return (
    <section className="h-screen flex items-center" id="testimonial">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="h-[450px] xl:h-[400px]"
        >
          {testimoinalData.map((person, index) => {
            const { message, avatar, name, job } = person;
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                  <FaQuoteLeft className="text-7xl text-accent mb-6" />
                  <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                    {message}
                  </div>
                  <Image
                    src={avatar}
                    width={64}
                    height={64}
                    alt="avatar image"
                    className="mb-4"
                  />
                  <div className="text-lg font-medium">{name}</div>
                  <div className="text-secondary">{job}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonial;
