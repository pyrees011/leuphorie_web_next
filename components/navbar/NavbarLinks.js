import { useRouter } from "next/router"

// components
import { Button } from "../ui/button"

// utils
import { cn } from "@/lib/utils"

function NavbarLinks({ navTabs, active }) {
  const router = useRouter()

  const handleClick = () => {
    navTabs.active = true
    router.push(navTabs.href)
  }

  return (
      <Button variant="ghost" className={cn('w-full justify-start py-7 text-gray-400', navTabs.className , {
        'bg-black text-white hover:scale-110 hover:bg-black hover:text-white': active,
      })} asChild>
        <Button variant="ghost" onClick={handleClick}>
          { navTabs.icon }
          <p className="font-semibold text-xs">{ navTabs.title }</p>
        </Button>
      </Button>
  )
}

export default NavbarLinks
