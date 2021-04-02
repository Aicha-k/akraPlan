import React from "react";
import Image from "next/image";

const myThreeReasons = [
  {
    src: "/undraw_winners_ao2o.svg",
    name: "Put everything in one place",
    description:
      "I don't have to go through my screenshots and my notes to see which books I saved",
  },
  {
    src: "/undraw_Design_thinking_re_644h.svg",
    name: "Inspire and get inspired",
    description:
      "dispaly the books that I find interesting maybe it help es you find a good one and I will add a feature so that you can send me a suggestion if you think it matches my intzrests",
  },
  {
    src: "/undraw_Account_re_o7id.svg",
    name: "stay accountable",
    description:
      "A way to raise the challenge and read more books. And if any want wants to join you're welcome whenever you want",
  },
];

const ReasonCard = ({ reason }) => (
  <div className="flex flex-col py-8  px-8 max-w-sm mx-auto bg-gray-100 rounded-xl shadow-md space-y-4">
    <Image
      src={reason.src}
      height={50}
      width={50}
      className="place-self-center "
    />

    <p class="text-lg text-black font-semibold place-self-center">
      {reason.name}
    </p>
    <p className="text-opacity-75 font-normal text-gray-600">
      {reason.description}
    </p>
  </div>
);

const BookCard = ({ reason }) => (
  <div className="flex flex-col py-8  px-8 max-w-sm mx-auto bg-gray-100 rounded-xl shadow-md space-y-4">
    <Image
      src={reason.src}
      height={50}
      width={50}
      className="place-self-center "
    />

    <p class="text-lg text-black font-semibold place-self-center">
      {reason.name}
    </p>
    <p className="text-opacity-75 font-normal text-gray-600">
      {reason.description}
    </p>
  </div>
);

export const HomeComponents = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Image src="/undraw_book_lover_mkck.svg" height={800} width={800} />
        <div className="w-1/4 grid">
          <div className="place-self-center ">
            I've never been a bookwormer but whenever I read a book I can see
            how impactful it's on My life ... I have plenty of books that I want
            to read nd I keep postponing So let's see if this year sth would
            change.
            <div className="pt-6">
              Reading is a way for me to expand my mind, open my eyes, and fill
              up my heart --Oprah Winfrey
            </div>
          </div>
        </div>
      </div>
      <div className="grid space-y-5 text-2xl font-semibold">
        <p className="place-self-center">Why I am doing this</p>
        <div className="flex ">
          {myThreeReasons.map((reason) => (
            <ReasonCard reason={reason}></ReasonCard>
          ))}
        </div>
      </div>
    </div>
  );
};

// Home.getInitialProps = async ctx => {
//   try {
//     const res = await axios.get('http://localhost:1337/restaurants');
//     const restaurants = res.data;
//     return { restaurants };
//   } catch (error) {
//     return { error };
//   }
// };
