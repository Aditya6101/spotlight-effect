"use client";
import { MouseEvent } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: MouseEvent) {
    const { clientX, clientY, currentTarget } = e;
    const { top, left } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <main className="grid w-screen min-h-screen px-8 bg-neutral-950 place-content-center">
      <div
        className="relative max-w-sm p-3 overflow-hidden border-2 rounded-lg cursor-default border-blue-950/80 group"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="absolute transition duration-150 opacity-0 pointer-events-none -inset-px group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(800px at ${mouseX}px ${mouseY}px, rgb(15 28 175 / 40%), transparent 40%)`,
          }}
        />

        <div>
          <h3 className="my-3 text-2xl font-semibold text-sky-700">
            Lorem ipsum dolor!
          </h3>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, animi
            sapiente unde nesciunt quod molestiae alias vitae fugit ad, quaerat
            esse aperiam cum officiis magni distinctio minus, at facilis
            provident!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, animi
            sapiente unde nesciunt quod molestiae alias vitae fugit ad, quaerat
            esse aperiam cum officiis magni distinctio minus, at facilis
            provident!
          </p>
          <ul className="my-2 ml-4 text-gray-400 list-disc">
            <li>Lorem ipsum dolor, sit amet</li>
            <li>Lorem ipsum dolor, sit amet</li>
            <li>Lorem ipsum dolor, sit amet</li>
          </ul>
          <button className="w-full p-1 px-2 mt-4 font-medium rounded cursor-pointer bg-sky-700">
            Click Me
          </button>
        </div>
      </div>
    </main>
  );
}
