import { TNgola } from "../types";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProvinceCard({ item }: { item: TNgola }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative cursor-pointer bg-white w-full h-full shadow-2xl shadow-black rounded-lg hover:scale-105 duration-1000"
      >
        <Link
          href={`/province/${encodeURIComponent(item.province.toLowerCase())}`}
        >
          <Image
            src={item.image.src || "/images/logo.jpg"}
            alt={`${item.province} image`}
            loading="lazy"
            width={300}
            height={300}
            className="rounded-lg aspect-video"
          />
          <div className="absolute transition-all duration-1000 left-0 top-0 right-0 bottom-0 opacity-45 hover:opacity-90 flex justify-center items-center bg-black rounded-lg">
            <span className="text-2xl"> {item.province}</span>
          </div>
        </Link>
      </motion.div>
    </>
  );
}
