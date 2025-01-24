import { useState, useEffect } from "react"
import Image from 'next/image'

// lucide
import { HandIcon as WavingHand } from 'lucide-react'

// shadecn
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// context
import { useUser } from '../contexts/UserContext'

// components
import Navbar from '@/components/navbar/Navbar'
import TaskGrid from "../components/task-grid"
import WellnessGuide from "../components/wellness-guide"
import Dashboard from "../components/dashboard"

// layout
import AuthenticatedLayout from "@/layout/authenticatedLayout"

export default function Home() {
    // TODO: add a loading fallback component
    // TODO: add user reviews (maybe a scroll animation horizontally)
    // TODO: add a footer
  const { user, isLoading } = useUser()

  return (
     isLoading ? (
        <div>Loading...</div>
    ) : (
    <AuthenticatedLayout>
        <div className='flex items-center justify-start p-2 my-4 bg-white'>
        <Avatar className='h-16 w-16'>
            <AvatarImage src="https://i.pinimg.com/736x/f3/d2/34/f3d2346a59335f12ec7b6c460177414a.jpg"/>
            <AvatarFallback>
            <p className='text-white'>{user.username.charAt(0)}</p>
            </AvatarFallback>
        </Avatar>
        <div className='flex justify-center items-center space-x-1'>
            <p className='font-semibold'>{user.username}</p>
            <Image src="/extender.png" alt="extender" width={8} height={8} className='mt-0.5'/>
        </div>
        </div>
        <div className="md:max-w-6xl xl:min-w-full">
        <div className="relative flex bg-gradient-to-r from-emerald-800/25 to-yellow-500/25 rounded-t-3xl p-12 py-16 overflow-hidden">
            <div className="relative z-10 space-y-2">
            <h1 className="text-4xl font-semibold flex items-center gap-3">
                Hi, {user.username}! <WavingHand className="w-8 h-8 text-yellow-400" />
            </h1>
            <p className="text-gray-600 text-lg">
                Let&apos;s help you stay on the top of your health
            </p>
            </div>
            <WellnessGuide />
        </div>

        <div className='relative'>
            <div className='absolute top-0 left-0 w-full h-10 bg-gradient-to-r from-emerald-800/25 to-yellow-500/25' />

                <section className="relative p-4 xl:px-12 md:px-4 border-l space-y-8 rounded-[35px] bg-gray-100 z-10 py-6">
                    <section className="space-y-6 mb-12">
                        <h2 className="text-2xl font-semibold">Dashboard</h2>
                        <Dashboard />
                    </section>


                    <section className="space-y-6 ">
                        <h2 className="text-2xl font-semibold">Priority tasks</h2>
                        <TaskGrid />
                    </section>
                </section>
            </div>
        </div>
    </AuthenticatedLayout>
    )
  )
}
