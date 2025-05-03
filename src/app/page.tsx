import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { TracingBeam } from "@/components/ui/tracing-beam";
import HowItWorks from "@/components/ProcessSection";
import TechStack from "@/components/TechStack";
import Comparision from "@/components/Comparision";
import FAQ from "@/components/FAQ";
import { ScrollResult } from "@/components/ScrollResult";
import AboutSection from "@/components/AboutSection";
const Home = () => {
    return (
        <div className="flex min-h-screen flex-col gap-8">
            <HeroSection />
            <Comparision />
            <HowItWorks />
            <ScrollResult />
            <TechStack />
            <AboutSection />
        </div>
    );
};

export default Home;
