"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { TextHoverEffect } from "./ui/text-hover-effect";
export function Testimonials() {
  return (
    <div>
      <div className="h-[20rem] flex items-center justify-center mb-4">
        <TextHoverEffect text="Testimonials" />
      </div>
      <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The service was outstanding, exceeding all of our expectations. The team was professional and delivered quality results on time. I highly recommend their solutions.",
    name: "Alice Johnson",
    title: "CEO, Tech Innovators",
  },
  {
    quote:
      "A game-changer for our business. From the initial consultation to the final product, the experience was seamless and effective. We saw results immediately.",
    name: "Mark Smith",
    title: "Founder, Future Solutions",
  },
  {
    quote:
      "Their expertise helped us scale quickly and effectively. We couldn't be more pleased with the results. Truly a partner in our growth.",
    name: "Rachel Green",
    title: "Marketing Director, Digital Trends",
  },
  {
    quote:
      "The team understood our needs from day one and provided exactly what we were looking for. Their support was invaluable, and we felt like we were in the best hands.",
    name: "David Lee",
    title: "VP of Operations, GreenTech",
  },
  {
    quote:
      "Working with this team was a pleasure. They delivered innovative solutions that were tailored to our business needs. Our ROI has improved dramatically since implementation.",
    name: "Sophia Clark",
    title: "COO, Creative Industries",
  },
];
