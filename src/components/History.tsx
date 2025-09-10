import { TNgola } from "../types";

export default function History({ item }: { item: TNgola }) {
  return (
    <>
      <h4 className="mt-10 ps-5 text-black text-3xl md:text-4xl font-bold">
        History
      </h4>
      {item.history.map((h, index) => (
        <p
          key={index}
          className="p-2.5 text-justify text-lg md:text-xl indent-5"
        >
          {h}
        </p>
      ))}
    </>
  );
}
