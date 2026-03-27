import AccordionCurso from "@/components/AccordionCurso";
import VideoCurso from "@/components/VideoCurso";

export const metadata = {
  title: "Curso",
};

export default function Page() {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 p-4 bg-background-dark">
      <VideoCurso />
      <AccordionCurso />
    </section>
  );
}
