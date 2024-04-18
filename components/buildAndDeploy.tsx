import Image from "next/image";
import TargetImage from "@/public/images/features-illustration.png";

export default function BuildAndDeploy() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-anchor="[data-aos-id-target]"
              >
                <Image
                  className="mx-auto md:max-w-none"
                  src={TargetImage}
                  width={540}
                  height={520}
                  alt="Features 02"
                />
              </div>

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <h3 className="h3 mb-3">
                      Build and deploy effective prompts
                    </h3>
                    <p className="text-xl text-gray-400 mb-4">
                      Get insights from 40+ metrics and debug with detailed logs
                      and traces.
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
      </div>
    </section>
  );
}
