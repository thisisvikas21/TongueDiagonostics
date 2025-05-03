import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { TracingBeam } from "@/components/ui/tracing-beam";
import ProcessSection from "@/components/ProcessSection";
const Home = () => {
    return (
        <div className="flex min-h-screen flex-col gap-8">
            <HeroSection />
        </div>
    );
};

export default Home;
