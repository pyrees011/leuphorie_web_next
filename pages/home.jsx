import { useState, useEffect } from "react"
import Image from 'next/image'

// lucide
import { HandIcon as WavingHand } from 'lucide-react'

// firebase
import { auth } from '../config/firebase-config'
import { signOut } from 'firebase/auth'

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

// context
import { useUser } from '../contexts/UserContext'

// components
import TaskGrid from "../components/task-grid"
import WellnessGuide from "../components/wellness-guide"
import Dashboard from "../components/dashboard"
import Footer from "../components/Footer"

// layout
import AuthenticatedLayout from "@/layout/authenticatedLayout"

export default function Home() {
  const { user, isLoading, updateUser } = useUser();

  console.log("user", user);

  const handleSignOut = async () => {
    await signOut(auth);
    updateUser({
      username: "",
      email: "",
      token: ""
    });
  };

  return (
    isLoading ? (
      <div>Loading...</div>
    ) : (
      <AuthenticatedLayout>
        {/* User Info Section */}
        <div className='flex items-center justify-start p-2 my-4 bg-white'>
          <Avatar className='h-16 w-16'>
            <AvatarImage src="https://i.pinimg.com/736x/f3/d2/34/f3d2346a59335f12ec7b6c460177414a.jpg"/>
            <AvatarFallback>
              <p className='text-white'>{user?.username?.charAt(0) || "?"}</p>
            </AvatarFallback>
          </Avatar>
          <div className='flex justify-center items-center space-x-1'>
            <p className="font-semibold">{user?.username || "Guest"}</p>
            <Image src="/extender.png" alt="extender" width={8} height={8} className='mt-0.5'/>
          </div>
        </div>

        {/* Welcome Message Section */}
        <div className="md:max-w-6xl xl:min-w-full 2xl:w-full">
          <div className="relative flex bg-gradient-to-r from-emerald-800/25 to-yellow-500/25 rounded-t-3xl p-12 py-16 overflow-hidden">
            <div className="relative z-10 space-y-2">
              <h1 className="text-4xl font-semibold flex items-center gap-3">
                Hi, {user?.username || "Guest"}! <WavingHand className="w-8 h-8 text-yellow-400" />
              </h1>
              <p className="text-gray-600 text-lg">
                Let&apos;s help you stay on the top of your health
              </p>
              <Button variant="outline" className="bg-emerald-600 hover:bg-emerald-700" onClick={handleSignOut}>
                Signout
              </Button>
            </div>
            <WellnessGuide />
          </div>
        </div>

        <div className="relative mx-auto px-4 py-8 bg-gray-100 rounded-tl-3xl">
          <div className="absolute top-0 left-0 w-full h-5 bg-gradient-to-r from-emerald-800/25 to-yellow-500/25 z-[-10]" />

          {/* Dashboard Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>
                <Dashboard />
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 h-full">
                <h2 className="text-2xl font-semibold mb-6">Quick Stats</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <p className="text-sm text-emerald-600">Daily Goals</p>
                    <p className="text-2xl font-semibold">80% Complete</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-600">Wellness Score</p>
                    <p className="text-2xl font-semibold">92/100</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Tasks Section */}
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Priority Tasks</h2>
              <Button variant="outline">View All</Button>
            </div>
            <TaskGrid />
          </Card>

          {/* Activity Timeline */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <p className="text-gray-600">Completed morning meditation</p>
                <span className="text-gray-400">2 hours ago</span>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <p className="text-gray-600">Updated wellness goals</p>
                <span className="text-gray-400">5 hours ago</span>
              </div>
            </div>
          </Card>
        </div>

        <Footer />
      </AuthenticatedLayout>
    )
  );
}
