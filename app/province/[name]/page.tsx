import { readProvinceByName } from "@/src/actions";
import { TNgola, TProvinceParams } from "@/src/types";
import Image from "next/image";
import React from "react";
import {
  Geography,
  History,
  NotFound,
  PlacesToEat,
  PlacesToStay,
  PlacesToVisit,
} from "@/src/components";
import Municipe from "@/src/components/Municipe";


export default async function Page({params}: { params: TProvinceParams }) {
  const formData = new FormData();
  formData.append("name", decodeURIComponent(params.name));

  const resData = (await readProvinceByName(formData)) as TNgola[];

  if (!resData || resData.length === 0) {
    return <NotFound />;
  }
  
  /*
  const [resData, setResData] = React.useState<Array<TNgola>>([]);
  const [resError, setResError] = React.useState<string>("");

  React.useEffect(() => {
    // Fetching province by name parameter
    const formData = new FormData();
    formData.append("name", decodeURIComponent(params.name));
    readProvinceByName(formData)
      //@ts-ignore
      .then((data) => setResData(data))
      .catch((err) => setResError(err));
  }, [params.name]);
  */

  return (
    <>
      <section className="w-full h-full flex flex-col justify-start items-center pt-16">
        {resData.length == 0 ? (
          <NotFound />
        ) : (
          <div className="mb-20 md:px-60">
            {resData.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer w-full h-full rounded-lg"
              >
                <h3 className="text-center text-5xl md:text-6xl mb-10">
                  {item.province}
                </h3>

                <div className="md:flex md:justify-between md:items-center md:gap-5">
                  <Image
                    src={item.image.src || "/code.jpg"}
                    alt={`${item.province} image`}
                    loading="lazy"
                    width={300}
                    height={300}
                    className="rounded-lg aspect-video m-auto md:flex-1"
                  />

                  <p className="mt-7.5 md:mt-0 text-justify text-lg md:text-xl indent-5 px-2.5 md:flex-1">
                    {item.about}
                  </p>
                </div>
                <History item={item} />

                <Geography item={item} />

                <Municipe item={item} />

                <PlacesToStay item={item} />

                <PlacesToEat item={item} />

                <PlacesToVisit item={item} />
              </div>
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
