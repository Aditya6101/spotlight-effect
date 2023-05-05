"use client";
import { MouseEvent, useState } from "react";

export default function Home() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function handleMouseMove(e: MouseEvent) {
    let { clientX, clientY, currentTarget } = e;
    let { top, left } = currentTarget.getBoundingClientRect();

    let xPosiotion = clientX - left;
    let yPosiotion = clientY - top;

    setX(xPosiotion);
    setY(yPosiotion);
  }

  return (
    <main className="grid w-screen min-h-screen px-8 bg-neutral-950 place-content-center">
      <div className="relative p-3 overflow-hidden border rounded-lg border-blue-950/80">
        <div
          className="absolute inset-0"
          onMouseMove={handleMouseMove}
          style={{
            background: `radial-gradient(800px at ${x}px ${y}px, rgb(15 28 175 / 15%), transparent 80%)`,
          }}
        />

        <div className="invisible">
          <span className="text-gray-700">Lorem ipsum</span>
          <h3 className="my-3 text-2xl font-semibold text-blue-700">
            Lorem ipsum dolor!
          </h3>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, animi
            sapiente unde nesciunt quod molestiae alias vitae fugit ad, quaerat
            esse aperiam cum officiis magni distinctio minus, at facilis
            provident! <br />
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              animi sapiente unde nesciunt quod molestiae alias vitae fugit ad,
              quaerat esse aperiam cum officiis magni distinctio minus, at
              facilis provident!
            </p>
          </p>
          <ul className="my-2 ml-4 text-gray-400 list-disc">
            <li>Lorem ipsum dolor, sit amet</li>
            <li>Lorem ipsum dolor, sit amet</li>
            <li>Lorem ipsum dolor, sit amet</li>
            <li>Lorem ipsum dolor, sit amet</li>
          </ul>
          <button className="p-1 px-2 mt-4 font-medium bg-blue-700 rounded">
            Click Me
          </button>
        </div>
      </div>
    </main>
  );
}
