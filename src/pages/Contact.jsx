import ContactForm from "../composants/form/ContactForm";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
  return (
    <>
      <section className="relative py-32 px-8 bg-black" id="contact" >
        <main className=" max-w-6xl mx-auto flex flex-col justify-center items-center text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-500/10 rounded-full">
            <span className="text-sm font-semibold text-blue-400">CONTACT</span>
          </div>
          <h3 className="text-5xl font-bold mb-6 ">Travaillons ensemble</h3>
          <p className=" text-gray-400 text-lg max-w-2xl mx-auto">
            Un projet en tête ? N'hésitez pas à me contacter pour en discuter
          </p>
          <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row justify-between w-full mt-16">
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h4 className="text-2xl font-bold mb-6">
                Informations de contact
              </h4>
              <div className="flex flex-col gap-8">
              <Info />
              </div>
            </div>
            <ContactForm />
          </div>
        </main>
      </section>
    </>
  );
};

export default Contact;

const Info = () => {
  const infos = [
    {
      title: "Email",
      info: "hichamz.dev@gmail.com",
      icon: IoMdMail,
    },
    {
      title : 'Téléphone',
      info : "06 27 94 51 92",
      icon : FaPhoneAlt
      
    },
    {
      title : 'Localisation',
      info : "Marseille",
      icon : FaLocationDot
      
    },
    {
      title : 'Github',
      info : "github.com/hichamzh",
      icon : FaGithub
    
    },

  ];

  return (
    <>
      {infos.map((i, index) => {
        const Icon = i.icon;
        return (
          <div className="info-container flex items-center gap-5" key={index}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-700/10 border border-gray-600">
              <Icon className="text-purple-500"/>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm text-gray-400">{i.title}</p>{" "}
              <p className="font-bold">{i.info}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
