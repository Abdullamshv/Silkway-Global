import React from "react";
import { TestData } from "./TestimonialsData";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="feedbacks" className="pt-6 lg:px-8 bg-[#D1E8FF] font-[Montserrat] w-full max-h-screen flex flex-col gap-12">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="title">
          {t("testimonialsTitle")}
        </h1>
        <p className="title_text">
          {t("testimonialsSubtitle")}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {TestData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[#A8D6FF] w-[260px] rounded-3xl p-4 flex flex-col justify-between text-center"
          >
            <p className="text-[#000000]  text-md sm:text-justify">
              "{t(testimonial.textKey)}"
            </p>
            <div className="flex flex-col items-end mt-auto">
              <p className="font-medium text-[#000000] text-sm sm:text-base">
                {testimonial.authorKey ? t(testimonial.authorKey) : ""}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm italic">
                {testimonial.roleKey ? t(testimonial.roleKey) : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
