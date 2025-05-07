import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-full aspect-[500/210] relative">
        <div className="absolute w-full h-full bg-gradient-to-t from-white z-2"></div>
        <div className="h-full relative overflow-hidden">
          <Image
            style={{ transform: "translateX(2.2%)", scale: 1.11 }}
            src="/logo/flydubai-blue.svg"
            alt="Logo"
            fill
            className="w-full object-bottom object-contain text-sky-700"
            priority
          />
        </div>
      </div>
      <div className="bg-black py-2 text-center text-white/50">
        <p>© فلای دبی ۱۴۰۴، تمام حقوق محفوظ است</p>
      </div>
    </footer>
  );
};
