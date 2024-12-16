import * as React from "react";
import ReactDOM from "react-dom/client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const images = [
  "https://via.placeholder.com/300x300?text=Image+1",
  "https://via.placeholder.com/300x300?text=Image+2",
  "https://via.placeholder.com/300x300?text=Image+3",
  "https://via.placeholder.com/300x300?text=Image+4",
  "https://via.placeholder.com/300x300?text=Image+5"
];

export function CarouselSize() {
  return React.createElement(
    Carousel,
    {
      opts: {
        align: "start",
      },
      className: "w-full max-w-5xl"
    },
    React.createElement(
      CarouselContent,
      null,
      images.map((src, index) =>
        React.createElement(
          CarouselItem,
          { key: index, className: "md:basis-1/2 lg:basis-1/3" },
          React.createElement(
            "div",
            { className: "p-1" },
            React.createElement(
              Card,
              null,
              React.createElement(
                CardContent,
                { className: "flex aspect-square items-center justify-center p-0" },
                React.createElement("img", {
                  src,
                  alt: `Slide ${index + 1}`,
                  className: "w-full h-full object-cover rounded-lg"
                })
              )
            )
          )
        )
      )
    ),
    React.createElement(CarouselPrevious, null),
    React.createElement(CarouselNext, null)
  );
}

// Mount the component to the root div
const root = ReactDOM.createRoot(document.getElementById("carousel-root"));
root.render(React.createElement(CarouselSize));
