import Hero from "@/components/sections/Hero";
import Section1 from "@/components/sections/Section1"
import Section2 from "@/components/sections/Section2";
import Section3 from "@/components/sections/Section3";
import Section4 from "@/components/sections/Section4";

export default function Page() {
    return (
        <div>
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
            {/* <Section4 /> */}
        </div>
    );
}
