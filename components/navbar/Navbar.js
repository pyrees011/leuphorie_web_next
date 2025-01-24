import Link from "next/link"

import { Card } from "@/components/ui/card"

// components
import NavbarLinks from './NavbarLinks'
import AnimatedButton from '../animatedButton'

// icons
import { Home, MessageCircle, User, FileText, Phone } from 'lucide-react'

const NavbarTabs = [
  { title: 'MyNest', href: '/', icon: <Home className="mr-2 h-4 w-4 fill-white" />, active: true },
  { title: 'Chat', href: '/chat', icon: <MessageCircle className="mr-2 h-4 w-4" />, active: false },
  { title: 'My profile', href: '/profile', icon: <User className="mr-2 h-4 w-4" />, active: false },
  { title: 'Documentation', href: '/docs', icon: <FileText className="mr-2 h-4 w-4" />, active: false },
  { title: 'Contact us', href: '/contact', icon: <Phone className="mr-2 h-4 w-4" />, active: false },
]

export default function Navbar() {
  return (
    <div className="w-60 bg-white p-6 mt-4 space-y-16 sticky top-0 h-screen overflow-y-auto">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-orange-400" style={{
          borderRadius: '70% 50% 70% 50% / 40% 40% 60% 80%'
        }} />
        <span className="font-semibold text-xl">Leuphorie</span>
      </div>

      <nav className="space-y-2">
        { NavbarTabs.map((tab, index) => (
          <NavbarLinks key={index} navTabs={tab} />
        ))}
      </nav>

      <Card className="p-4 bg-orange-50">
        <div className="space-y-3">
          <h3 className="font-semibold">Let&apos;s upgrade your plan</h3>
          <div className="w-full h-32 bg-orange-100 rounded-lg" />
          <AnimatedButton>
            <Link href="/upgrade" legacyBehavior>
              <p className="font-semibold text-sm bg-orange-500 p-2 py-4 rounded-lg">Upgrade now</p>
            </Link>
          </AnimatedButton>
        </div>
      </Card>
    </div>
  )
}
