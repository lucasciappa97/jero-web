import Image from "next/image";
import Link from "next/link";

export default function Logo({ compact = false }) {
  return (
    <Link href="/" className="text-xl text-white flex justify-center items-center z-10">
        <div
          className={`relative transition-all duration-300 ease-in-out ${
            compact ? "w-32 h-16" : "w-52 h-44"
          }`}
        >
          <Image
            src="/icons/logo-grande-blanco.png"
            alt="Logo Jerónimo Ciapparelli"
            layout="fill"
            objectFit="contain"
            quality={75}
            priority
          />
        </div>
    </Link>
  );
}
