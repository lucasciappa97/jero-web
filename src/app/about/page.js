import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";
import Section3 from "@/components/about/Section3";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-background-dark p-4 py-6">
      <Section1 />
      <Section2 />
      <Section3 />
    </section>
  );
}
