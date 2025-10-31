"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function TemplatesPage() {
  const templates = [
    {
      name: "Creative Template",
      href: "/templates/creative",
      img: "/Creative.png",
      desc: "Modern and colorful design for creative professionals.",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      name: "Professional Template",
      href: "/templates/professional",
      img: "/Resume-hero.jpg",
      desc: "Clean, elegant layout ideal for corporate roles.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Simple Template",
      href: "/templates/simple",
      img: "/simple.png",
      desc: "Minimal, distraction-free design for all resumes.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-16">
      <div className="max-w-5xl w-full text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Choose Your Resume Template
        </h1>
        <p className="text-gray-600 mb-12 text-lg">
          Select a style below to start building your personalized resume.
        </p>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div
              key={template.name}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image Preview */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={template.img}
                  alt={template.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {template.name}
                </h2>
                <p className="text-gray-500 mb-6 flex-grow">{template.desc}</p>

                {/* Button */}
                <Link
                  href={template.href}
                  className={`inline-flex items-center justify-center gap-2 text-white font-medium px-5 py-2.5 rounded-full bg-gradient-to-r ${template.gradient} hover:opacity-90 transition-all`}
                >
                  Use Template <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-700 font-medium px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 hover:shadow-md transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
