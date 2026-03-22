"use client";

import { Suspense } from "react";

import { useLmsSample } from "@acme/store";

export default function HomePage() {
  const { count, increment, decrement } = useLmsSample();

  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-primary">T3</span> Turbo
        </h1>

        <div className="bg-card flex flex-col items-center gap-2 rounded-lg border p-6">
          <p className="text-2xl font-semibold">Count: {count}</p>
          <div className="flex gap-2">
            <button
              onClick={increment}
              className="bg-primary text-primary-foreground rounded px-4 py-2 transition-opacity hover:opacity-90"
            >
              Increment
            </button>
            <button
              onClick={decrement}
              className="bg-secondary text-secondary-foreground rounded px-4 py-2 transition-opacity hover:opacity-90"
            >
              Decrement
            </button>
          </div>
        </div>

        <div className="mt-8 w-full max-w-2xl overflow-y-scroll">
          <Suspense fallback={<div>Loading API...</div>} />
        </div>
      </div>
    </main>
  );
}
