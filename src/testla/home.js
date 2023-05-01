import React from "react";
import Header from "./header";
import Section from "./section";

function home() {
  return (
    <>
      <Header />

      {/* "componet Composition" => Using same component multiple times is called omponet Composition*/}
      <Section
        name="Model S"
        tagLine="View Inventory"
        leftBtn="Order Now"
        rightBtn="Demo Drive"
        arrow={true}
        background="tesla1.jpg"
      />
      <Section
        name="Model Y"
        tagLine="View Inventory"
        leftBtn="Order Now"
        rightBtn="Demo Drive"
        background="tesla2.jpeg"
      />

      <Section
        name="Model X"
        tagLine="View Inventory"
        leftBtn="Order Now"
        rightBtn="Demo Drive"
        background="tesla4.jpeg"
      />
      <Section
        name="Solar Panels"
        tagLine="Lowest Cost Solar Panels in America"
        leftBtn="Order Now"
        rightBtn="Demo Drive"
        background="tesla5.jpeg"
      />
      <Section
        name="Solar Roof"
        tagLine="Produce Clean Energy From Your Roof"
        leftBtn="Order Now"
        rightBtn="Demo Drive"
        background="tesla6.jpg"
      />
    </>
  );
}

export default home;
