"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const path = usePathname()

  return (
    <header className="flex justify-between items-center h-16 w-full">
      <nav className="flex">
        <ul>
          <Link 
            href="/" 
            className={`${path === '/' ? 'font-bold' : 'font-normal'}`}
          >
            Home
          </Link>
        </ul>
      </nav>

      <div>

      </div>
    </header>
  )
}

export default Header