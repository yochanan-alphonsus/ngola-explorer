import { TNgola } from "../types";

export default function Municipe({ item }: { item: TNgola }) {
  return (
    <>
      <h4 className="mt-5 ps-5 text-black text-3xl md:text-4xl font-bold">
        Municipes
      </h4>
      <p className="p-1.5 text-justify text-lg md:text-xl indent-5">
        {item.province} has {item.municipies.length} municipes, there are the
        following:
      </p>
      {item.municipies.map((municipe, index) => (
        <ul key={index}>
          <li className="p-1 text-justify text-sm md:text-lg indent-5">
            {municipe}
          </li>
        </ul>
      ))}
    </>
  );
}
