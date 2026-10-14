import Hero from "@/components/sections/Hero";
import Section1 from "@/components/sections/Section1"
import Section2 from "@/components/sections/Section2";
import Section3 from "@/components/sections/Section3";
import SectionClose from "@/components/sections/SectionClose";
import VideoCurso from "@/components/VideoCurso";

export default function Page() {
    return (
        <div>
            <Hero />
            <Section1 />
            <VideoCurso />
            <Section2 />
            <Section3 />
            <SectionClose />
        </div>
    );
}
