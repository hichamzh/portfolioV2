import React from "react";
import { FormContact } from "../composants/form/FormContact";

const Contact = () => {


  return (
    <>
      <div className="relative h-full">
        <div className="absolute inset-0 -z-10">
          <div className="relative h-full w-full bg-slate-950 [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [&>div]:bg-[size:14px_24px]">
            <div></div>
          </div>
        </div>
        <main className="h-screen pt-10">
          <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white text-center">
            Contactez moi
          </h1>
          <section className="mt-20">
            <FormContact/>
          </section>
        </main>
      </div>
    </>
  );
};

export default Contact;
