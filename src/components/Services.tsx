"use client";
import Link from "next/link";
import serviceData from "../data/it-data.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  provider: string;
  isFeatured: boolean;
}

function Services() {
  const featServices = serviceData.services.filter(
    (service: Service) => service.isFeatured
  );

  return (
    <div className="min-h-screen py-12 bg-[linear-gradient(to_bottom_right,var(--black),var(--gray-950))]">
      <div>
        <div className="text-center">
          <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">
            Services
          </h2>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featServices.map((service: Service) => (
            <div key={service.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {service.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {service.description}
                  </p>
                  <Link href={`/services/${service.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"#"}>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              View All Services
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Services;
