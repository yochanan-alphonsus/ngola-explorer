"use server";

import { Resend } from "resend";
import { ngola } from "../data";

export async function readProvinceByName(formData: FormData) {
  try {
    const name = formData.get("name") as string;

    const resProvince =
      name.length != 0
        ? ngola.filter(
            (item) => item.province.toLowerCase() == name.toLowerCase()
          )
        : null;

    console.info(resProvince);

    return resProvince?.sort((a, b) =>
      a.province.toLowerCase().localeCompare(b.province.toLowerCase())
    );
  } catch (error) {
    console.error(error);
    return "It seems that we couldn't find your desired place, please, verify the specified place for mispelling words :(";
  }
}

export async function readAllProvincesByName(formData: FormData) {
  try {
    const name = formData.get("name") as string;

    const resProvince =
      name.length != 0
        ? ngola.filter((item) =>
            item.province.toLowerCase().includes(name.toLowerCase())
          )
        : null;

    console.info(resProvince);

    return resProvince?.sort((a, b) =>
      a.province.toLowerCase().localeCompare(b.province.toLowerCase())
    );
  } catch (error) {
    console.error(error);
    return "It seems that we couldn't find your desired place, please, verify the specified place for mispelling words :(";
  }
}

export async function readAllProvinces() {
  try {
    console.info(ngola);

    return ngola?.sort((a, b) =>
      a.province.toLowerCase().localeCompare(b.province.toLowerCase())
    );
  } catch (error) {
    console.error(error);
    return "It seems that we couldn't find your desired place, please, verify the specified place for mispelling words :(";
  }
}

export async function sendEmail(formData: FormData) {
  const name: string = formData.get("name") as string;
  const email: string = formData.get("email") as string;
  const message: string = formData.get("message") as string;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    //Receiving email from website
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: String(process.env.EMAIL_USERNAME),
      subject: "Portfolio Email - Message from " + name,
      html: `
            <div class="p-5">
              <span class="text-xl text-black font-medium">${message}</span>
            </div>
            <br/>
            <div class="p-5">
              <span class="text-2xl text-black font-bold">From: <span>${email}</span></span>
              <span class="text-2xl text-black font-bold">To: <span>joaoafonso302003@gmail.com</span></span>
              <span class="text-2xl text-black font-bold">Sender: <span>${name}</span></span>
            </div>`,
    });

    //Auto reply email from myself
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: String(process.env.EMAIL_USERNAME),
      replyTo: email,
      subject: "Portfolio Email - Message from " + name,
      html: `
            <div class="p-5">
              <span class="text-xl text-black font-medium">
                Hi Mr(s) ${name}, we've received your email, and we're going to reply as soon as possible!
              </span>
            </div>
            <br/>
            <div class="p-5">
              <span class="text-2xl text-black font-bold">From: <span>${process.env.EMAIL_USERNAME}</span></span>
              <span class="text-2xl text-black font-bold">To: <span>${email}</span></span>
            </div>`,
    });

    console.info(
      `Message sent successfully\n\nName: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`
    );

    return "Message sent succesfully!";
  } catch (error) {
    console.error("Something went wrong\n" + error);

    return "Something went wrong, please, try again in a while!";
  }
}
