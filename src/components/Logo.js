import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-xl text-white flex justify-center items-center z-10">
        <div className="w-52 h-44 relative">
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