import { StaticImageData } from "next/image";
import React from "react";

export type TChildren = {
  children: Readonly<React.ReactNode>;
};

export enum Role {
  ADMIN,
  CUSTOMER,
}

export type TIdParams = {
  id: string;
};

export type TProvinceParams = {
  name: string;
};

export type TNgola = {
  id: number;
  province: string;
  about: string;
  capital: string;
  history: string[];
  geography: string[];
  image: StaticImageData;
  municipies: string[];
  placesToStay: {
    name: string;
    municipe: string;
    info: string;
    images: StaticImageData[];
  }[];
  placesToEat: {
    name: string;
    municipe: string;
    info: string;
    images: StaticImageData[];
  }[];
  placesToVisit: {
    name: string;
    municipe: string;
    info: string;
    images: StaticImageData[];
  }[];
  curiosities: string[];
  population: string;
};
