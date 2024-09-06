import AwesomeClients from "./components/AwesomeClients/AwesomeClients";
import Hero from "./components/Hero/Hero";
import PopularClients from "./components/PopularClients/PopularClients";
import WhatClientsSay from "./components/WhatClientsSay/WhatClientsSay";

export default function Home() {
  // throw new Error('Error Occurs');

  return (
    <div className="min-h-screen">
      <Hero />
      <AwesomeClients />
      <WhatClientsSay />
      <PopularClients />
    </div>
  );
}
