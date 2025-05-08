import { basePath } from "@/site.config";
import { Button } from "./buttons";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    title: "درباره ما",
    href: "#contact",
  },
  {
    title: "تماس با ما",
    href: "#contact",
  },
];

export const Navbar = () => {
  return (
    <nav className="z-100 h-[var(--navbar-height)] bg-white sticky flex top-0 items-center justify-between">
      <div className="flex gap-3 text-sm">
        {navItems.map((nav, i) => (
          <Link
            className="hover:text-black/50 text-xs sm:text-sm"
            key={`navitem-${i}`}
            href={nav.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {nav.title}
          </Link>
        ))}
      </div>
      <Image
        src={`${basePath}/logo/flydubai.svg`}
        alt="flydubai-logo"
        width={158}
        height={32}
        className="h-6 sm:h-8"
      />
      <Button>خرید بلیط</Button>
    </nav>
  );
};
