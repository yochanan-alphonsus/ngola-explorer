"use client";

import { readAllProvinces, readAllProvincesByName } from "@/src/actions";
import { NotFound, ProvinceCard } from "@/src/components";
import { TNgola } from "@/src/types";
import React from "react";

export default function Page() {
  const [resData, setResData] = React.useState<Array<TNgola>>([]);
  const [resError, setResError] = React.useState<string>("");

  React.useEffect(() => {
    readAllProvinces()
      //@ts-ignore
      .then((data) => setResData(data))
      .catch((err) => setResError(err));
  }, []);

  function getProvincesByName(formData: FormData) {
    readAllProvincesByName(formData)
      //@ts-ignore
      .then((data) => setResData(data))
      .catch((err) => setResError(err));
  }

  return (
    <>
      <section className="w-full h-full flex flex-col justify-start items-center pt-16">
        <form
          action={getProvincesByName}
          className="flex flex-col justify-between items-center gap-5"
        >
          <h3 className="text-2xl font-bold">N'Gola Explorer</h3>
          <input
            title="Search for provincies, cities, or places you may want to know about"
            type="text"
            name="name"
            placeholder="Search for province"
            required
            className="bg-white text-black outline-none text-sm md:text-lg indent-1.5 rounded py-2.5 md:py-1.5 px-1 w-[18rem] md:w-[22rem]"
          />
          <input
            type="submit"
            value="Look for"
            className="border border-solid border-[#121212] bg-[#121212] transition-all duration-1000 delay-100 ease-in-out w-[12rem] rounded py-2.5 md:py-1.5 px-1 text-center text-sm md:text-lg font-medium cursor-pointer"
          />
        </form>
        {resData.length == 0 ? (
          <NotFound />
        ) : (
          <div className="mt-16 mb-16 text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {resData.map((res) => (
              <ProvinceCard item={res} key={res.id} />
            ))}
          </div>
        )}
      </section>
      {resError && (
        <div className="w-full h-screen flex flex-col justify-center items-center font-medium flex-wrap">
          <span className="text-center text-sm md:text-lg">{resError}</span>
        </div>
      )}
    </>
  );
}
