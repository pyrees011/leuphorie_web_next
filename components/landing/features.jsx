import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Features() {
  return (
    <section className="container px-4 py-12 md:py-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Get many advantages when you use our application
          </h2>
          <p className="text-gray-500">
            All conveniences in one application. You can get all these services in the Taskku app.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-green-500" />
              Download this success and analyze all of your tasks
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-green-500" />
              Manage all your daily tasks and add your team
            </li>
          </ul>
          <Button variant="outline" className="w-fit">
            Read more
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-2 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-white rounded-full" />
              <div>
                <p className="font-medium">Creating website design and...</p>
                <p className="text-sm text-gray-500">Meeting with team</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-2 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-white rounded-full" />
              <div>
                <p className="font-medium">Make system design from...</p>
                <p className="text-sm text-gray-500">Design planning</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-2 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-white rounded-full" />
              <div>
                <p className="font-medium">Read a book on philosophy...</p>
                <p className="text-sm text-gray-500">Personal task</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

