import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="container px-4 py-12 md:py-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="relative flex items-center justify-center lg:justify-end">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-24%20at%2017.08.21-6wbxrqAxfaRKr0tNm5XpOKfUzGcbX5.png"
            alt="App interface mockup"
            width={400}
            height={800}
            className="relative z-10"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-30" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            An easy way to organize all your tasks and work neatly
          </h1>
          <p className="text-gray-500 md:text-xl">
            All the conveniences in managing your schedule can be found in this application. You can manage the success
            of all your activities.
          </p>
          <div className="flex gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

