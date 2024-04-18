import Image from "next/image";
import FeatIllustration from "@/public/images/feedback.png";
import FeatAvatar from "@/public/images/features-avatar.jpg";

export default function Feedback() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Items */}
          <div className="grid gap-20" data-aos-id-features-home>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="relative">
                  <Image
                    className="md:max-w-none"
                    src={FeatIllustration}
                    width={520}
                    height={520}
                    alt="Features illustration"
                  />{" "}
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">
                    Evaluate outputs with AI and human feedback
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Collect and track feedback from users. Setup tests to auto
                    judge outputs and find what's not working — in realtime
                  </p>

                  <div className="flex items-start mt-8">
                    <div>
                      <div className="text-gray-700 font-medium">
                        <a
                          className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Observability Suit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
