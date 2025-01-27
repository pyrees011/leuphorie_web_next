import { ChevronRight, Minus } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function TaskGrid() {
  // TODO: add tasks
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Button
          variant="outline"
          className="h-32 bg-blue-50 hover:bg-blue-100 justify-between group"
        >
          <div className="text-left">
            <h3 className="font-semibold">Determine Benchmark</h3>
          </div>
          <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>

        <Button
          variant="outline"
          className="h-32 bg-orange-50 hover:bg-orange-100 justify-between group"
        >
          <div className="text-left">
            <h3 className="font-semibold">Add Allergies</h3>
          </div>
          <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>

        <Button
          variant="outline"
          className="h-32 bg-stone-100 hover:bg-stone-200 justify-between group relative overflow-hidden"
        >
          <div className="text-left">
            <h3 className="font-semibold">Choose your Subscription</h3>
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-stone-200 rounded-tl-full" />
          <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>

        <Button
          variant="outline"
          className="h-32 bg-white hover:bg-gray-50 justify-between items-start p-4 group"
        >
          <div className="text-left space-y-2">
            <h3 className="font-semibold">Add New</h3>
            <Minus className="w-6 h-6" />
          </div>
          <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>

        <Button
          variant="outline"
          className="h-32 bg-green-50 hover:bg-green-100 justify-between group"
        >
          <div className="text-left">
            <h3 className="font-semibold">Choose Pharmacy</h3>
          </div>
          <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>

        <Button
          variant="outline"
          className="h-32 bg-yellow-50 hover:bg-yellow-100 justify-between group"
        >
          <div className="text-left">
            <h3 className="font-semibold">Upload Driving License</h3>
          </div>
          <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>
      </div>
    </div>
  )
}

