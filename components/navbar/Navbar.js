import Link from "next/link"
import { useRouter } from "next/router"

// firebase
import { auth } from "@/config/firebase-config"
import { signOut } from "firebase/auth"

// context
import { useUser } from "@/contexts/UserContext"

// shadecn
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// components
import NavbarLinks from './NavbarLinks'
import AnimatedButton from '../animatedButton'

// icons
import { Home, MessageCircle, User, FileText, Phone } from 'lucide-react'

const NavbarTabs = [
  { title: 'MyNest', href: '/home', icon: <Home className="mr-2 h-4 w-4 fill-white" /> },
  { title: 'Chat', href: '/chat', icon: <MessageCircle className="mr-2 h-4 w-4 fill-white" /> },
  { title: 'Zen', href: '/zen', icon: <User className="mr-2 h-4 w-4 fill-white" /> },
  { title: 'Settings', href: '/settings', icon: <FileText className="mr-2 h-4 w-4 fill-white" /> },
  { title: 'Contact us', href: '/contact', icon: <Phone className="mr-2 h-4 w-4 fill-white" /> },
]

export default function Navbar() {
  // TODO: add a logout button in the navbar
  const { asPath, push } = useRouter()
  const { user, updateUser } = useUser()

  const handleSignOut = async () => {
    await signOut(auth)
    updateUser({
      username: "",
      email: "",
      token: ""
    })
  }

  return (
    <div className="w-60 bg-white p-6 pt-10 space-y-16 sticky top-0 h-screen overflow-y-auto">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => push('/home')}>
        <div className="w-8 h-8 rounded-full bg-orange-400" style={{
          borderRadius: '70% 50% 70% 50% / 40% 40% 60% 80%'
        }} />
        <span className="font-semibold text-xl">Leuphorie</span>
      </div>

      <nav className="space-y-2">
        { NavbarTabs.map((tab, index) => (
          <NavbarLinks key={index} navTabs={tab} active={asPath.startsWith(tab.href)} />
        ))}
      </nav>

      {/* TODO: check if the user is on the free plan */}
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

      {/* <Button variant="outline" className="w-full" onClick={handleSignOut}>logout</Button> */}
    </div>
  )
}
