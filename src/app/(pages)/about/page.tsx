import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import {
  TypographyBig,
  TypographyH4,
} from "@/core/components/custom/ui/Typography";
import { Award, Heart, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <SectionLayout>
        <div className="relative text-center max-w-4xl mx-auto mt-35">
          <TypographyBig className="tracking-widest mb-6">
            KICKS SITE<span className="text-primary">STORY</span>
          </TypographyBig>

          <div className="flex gap-4 justify-center flex-wrap">
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
              🏆 50K+ Sold
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
              🌍 20+ Countries
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
              ⭐ 4.9/5 Rating
            </div>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50K+", label: "Pairs Sold" },
            { number: "500+", label: "Styles", icon: Star },
            { number: "20K+", label: "Happy Feet", icon: Heart },
            { number: "100+", label: "Brands", icon: Award },
          ].map((stat, index) => {
            return (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </SectionLayout>

      <SectionLayout>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary font-medium">
              🔥 BESTSELLER
            </div>
            <TypographyH4>
              AIR MAX <span className="text-primary">24</span>
            </TypographyH4>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our most wanted kicks. Limited stock, unlimited style.
            </p>
            <ul className="space-y-3">
              {[
                "Premium leather upper",
                "Air cushioning technology",
                "Limited edition colorway",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <div className="text-3xl font-bold">$189</div>
              <div className="text-gray-400 line-through">$249</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-linear-to-br from-primary/20 to-purple-600/20 rounded-3xl flex items-center justify-center">
              <div className="text-[150px] transform hover:rotate-12 transition-transform">
                👟
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 shadow-lg rounded-full p-4">
              <div className="text-2xl">✨</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 shadow-lg rounded-full p-4">
              <div className="text-2xl">🔥</div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
