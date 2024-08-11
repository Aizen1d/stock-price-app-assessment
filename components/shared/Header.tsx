"use client";

import Link from "next/link";

const Links = [
  {
    title: "Home",
    sectionId: "hero-section",
  },
  {
    title: "Get Started",
    sectionId: "data-section",
  },
  {
    title: "About",
    sectionId: "acknowledgement-section",
  },
];

const Header = () => {
  const handleScroll = (e: any, sectionId: any) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`sticky top-0 z-10 flex justify-center lg:justify-between items-center h-16 w-full 
                      bg-NAVBAR border-[#838383] border-b rounded-b-xl px-10`}>
      <nav className="flex">
        <ul className="flex justify-center items-center gap-x-16">
          {Links.map((link, index) => (
            <li key={index}>
              <Link 
                href={`#${link.sectionId}`}
                className="text-BLACK_LABEL_TEXT hover:text-BLACK_INFO_TEXT text-sm lg:text-md" 
                onClick={(e) => handleScroll(e, link.sectionId)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
      </div>
    </header>
  );
};

export default Header;