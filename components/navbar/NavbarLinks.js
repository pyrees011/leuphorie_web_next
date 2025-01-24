import Link from "next/link"

// components
import { Button } from "../ui/button"

// utils
import { cn } from "@/lib/utils"

function NavbarLinks({ navTabs }) {
  return (
      <Button variant="ghost" className={cn('w-full justify-start py-7 text-gray-400', navTabs.className , {
        'bg-black text-white hover:scale-110 hover:bg-black hover:text-white': navTabs.active,
      })} asChild>
        <Link href={navTabs.href}>
          { navTabs.icon }
          <p className="font-semibold text-xs">{ navTabs.title }</p>
        </Link>
      </Button>
  )
}

export default NavbarLinks
