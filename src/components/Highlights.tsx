"use client";
import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";

function Highlights() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: true,
    slides: {
      perView: 3,
      spacing: 10,
    },
  });

  return (
    <section className="sm:py-20 py-10">
      <h1 className="text-center sm:mb-20 mb-10 sm:text-4xl text-3xl antialiased uppercase tracking-wider">
        Destaques
      </h1>

      <div ref={ref} className="keen-slider">
        <Link href="a" className="keen-slider__slide number-slide1">
          1
        </Link>
        <Link href="a" className="keen-slider__slide number-slide2">
          2
        </Link>
        <Link href="a" className="keen-slider__slide number-slide3">
          3
        </Link>
        <Link href="a" className="keen-slider__slide number-slide4">
          4
        </Link>
        <Link href="a" className="keen-slider__slide number-slide5">
          5
        </Link>
        <Link href="a" className="keen-slider__slide number-slide6">
          6
        </Link>
      </div>
    </section>
  );
}

export default Highlights;
