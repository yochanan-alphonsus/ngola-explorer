import { TNgola } from "../types";

export default function Geography({ item }: { item: TNgola }) {
  return (
    <>
      <h4 className="mt-5 ps-5 text-black text-3xl md:text-4xl font-bold">
        Geography
      </h4>
      {item.geography.map((g, index) => (
        <p
          key={index}
          className="p-1.5 text-justify text-lg md:text-xl indent-5"
        >
          {g}
        </p>
      ))}
    </>
  );
}
