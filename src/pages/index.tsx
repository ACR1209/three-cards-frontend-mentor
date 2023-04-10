import Image from "next/image";
import Card from "@/components/Card";
import { CardData } from "@/utils/types";
import Head from "next/head";

const cards: CardData[] = [
  {
    card: {
      icon: "/icon-sedans.svg",
      title: "Sedans",
      content:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      primaryColor: "brightOrange",
    },
    className: "rounded-t-xl rounded-bl-none lg:rounded-tr-none lg:rounded-l-xl bg-brightOrange text-brightOrange",
  },
  {
    card: {
      icon: "/icon-suvs.svg",
      title: "Suvs",
      content:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vaction and off-road adventures.",
      primaryColor: "darkCyan",
    },
    className: "bg-darkCyan text-darkCyan"
  },
  {
    card: {
      icon: "/icon-luxury.svg",
      title: "Luxury",
      content:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      primaryColor: "darkCyan-very",
    },
    className: "rounded-b-xl rounded-r-auto lg:rounded-bl-none lg:rounded-r-xl   bg-darkCyan-very text-darkCyan-very",
  },
];

export default function Home() {
  return (
    <>
    <Head>
      <title>Three Card Column Component - Frontend Mentor</title>
      
    </Head>

    <main className="flex min-h-screen flex-col lg:flex-row items-center justify-center p-24">
      {cards.map((card, index) => (
        <Card {...card} key={index} />
      ))}
    </main>
    </>
  );
}
