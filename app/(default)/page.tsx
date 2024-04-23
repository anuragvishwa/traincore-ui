export const metadata = {
  title: "Home - Creative",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";
import Image from "next/image";
import traincoreImage from "@/public/images/dashboard4.png";
import Features from "@/components/features";
import BuildAndDeploy from "@/components/buildAndDeploy";
import Feedback from "@/components/feedback";

export default function Home() {
  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="Developer Platform for AI apps"
            description="Observability, metrics, evals, prompt management, testing, prompt playground, datasets, LLM evaluations"
          >
            Waitlist v1 <span className="text-gray-300 mx-1">·</span> Coming
            Soon
          </PageHeader>
          <div className="flex justify-center">
            <Image
              src={traincoreImage}
              alt="traincore"
              className="mb-12 text-center"
              height={800}
              width={900}
            />
          </div>
          <Features />
          <BuildAndDeploy />
          <Feedback />
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
