"use client";

import { useState } from "react";

export default function PracticePage() {

  const [name, setName] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow-lg w-[500px]">

        <h1 className="text-3xl font-bold mb-8">
          React State Practice
        </h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <h2 className="text-2xl mt-8 text-blue-600">
          Hello, {name}
        </h2>

      </div>

    </main>
  );
}