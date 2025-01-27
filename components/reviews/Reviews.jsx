import { useRef } from 'react'
import ReviewCard from './ReviewCard'

const reviews = [
  {
    name: "Sarah Johnson",
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    date: "March 2024",
    content: "This app has completely transformed how I manage my health. The reminders and tracking features are invaluable!",
    rating: 5
  },
  {
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    date: "February 2024",
    content: "The wellness guides are incredibly helpful. I've learned so much about maintaining a healthy lifestyle.",
    rating: 4
  },
  {
    name: "Emma Wilson",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    date: "January 2024",
    content: "Simple to use yet powerful. The dashboard gives me a clear overview of my health journey.",
    rating: 5
  },
  // Add more reviews as needed
]

const Reviews = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = direction === 'left' ? -400 : 400
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('left')}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div> */}
      
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('right')}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div> */}
    </div>
  )
}

export default Reviews 