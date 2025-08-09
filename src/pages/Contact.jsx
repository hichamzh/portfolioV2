import React from "react";
import { FormContact } from "../composants/form/FormContact";

const Contact = () => {


  return (
    <>
      <div className="relative h-full">
      <div class="absolute inset-0 -z-10">
          <div class="relative h-full w-full bg-[#020617] [&>div]:absolute [&>div]:bottom-0 [&>div]:left-[-20%] [&>div]:right-0 [&>div]:top-[-10%] [&>div]:h-[500px] [&>div]:w-[500px] [&>div]:rounded-full [&>div]:bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
            <div></div>
          </div>
        </div>
        <main className="py-10">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-6xl lg:mt-10 text-white text-center">
            Contactez moi
          </h1>
          <section className="mt-16">
            <FormContact/>
          </section>
        </main>
      </div>
    </>
  );
};

export default Contact;
