import React from "react";
import { TNgola } from "../types";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

export default function PlacesToEat({ item }: { item: TNgola }) {
  return (
    <>
      <h4 className="mt-10 ps-5 text-black text-3xl md:text-4xl font-bold">
        Places to eat
      </h4>
      {item.placesToEat.map((place, indexToEat) => {
        const [activeImage, setActiveImage] = React.useState<number>(0);
        return (
          <div key={indexToEat} className="mt-5">
            <div className="relative flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex justify-center"
                >
                  <Image
                    src={
                      place.images[activeImage] || "/images/provinces/diner.jpg"
                    }
                    alt={`${place.name} image`}
                    loading="lazy"
                    width={300}
                    height={300}
                    className="rounded-lg md:w-2/3 aspect-video transition duration-500"
                  />
                </motion.div>
              </AnimatePresence>
              {place.images.length > 1 && (
                <div className="absolute flex justify-between items-center w-full h-full z-10">
                  <button
                    className="absolute left-10 md:left-40 cursor-pointer bg-black rounded opacity-50"
                    onClick={() =>
                      setActiveImage((cur) => (cur === 0 ? 0 : cur - 1))
                    }
                  >
                    <ChevronLeftIcon className="size-10 font-extrabold" />
                  </button>
                  <button
                    className="absolute right-10 md:right-40 cursor-pointer bg-black rounded opacity-50"
                    onClick={() =>
                      setActiveImage((cur) =>
                        cur === place.images.length - 1 ? cur : cur + 1
                      )
                    }
                  >
                    <ChevronRightIcon className="size-10 font-extrabold" />
                  </button>
                </div>
              )}
              <div className="absolute bottom-1 text-center">
                {place.images.length > 1 &&
                  place.images.map((_, indexImage) => (
                    <span
                      key={indexImage}
                      className={`me-5 border-2 border-black ${activeImage == indexImage ? "bg-yellow-300" : "bg-white"} rounded-[100%] w-[1px] h-[1px]`}
                    >
                      <i className="opacity-0">00</i>
                    </span>
                  ))}
              </div>
            </div>
            <h4 className="my-5 text-center text-2xl md:text-3xl">
              {place.name}
            </h4>
            <p className="p-2.5 text-justify text-lg md:text-xl indent-5">
              {place.info}
            </p>
          </div>
        );
      })}
    </>
  );
}
