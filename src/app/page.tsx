import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { TracingBeam } from "@/components/ui/tracing-beam";
import HowItWorks from "@/components/ProcessSection";
import TechStack from "@/components/TechStack";
const Home = () => {
    return (
        <div className="flex min-h-screen flex-col gap-8">
            <HeroSection />
            <HowItWorks />
            <TechStack />
        </div>
    );
};

export default Home;

{
    /*  */
}
