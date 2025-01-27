import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const ReviewCard = ({ review }) => {
  return (
    <div className="min-w-[300px] bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <Avatar>
          <AvatarImage src={review.avatar} />
          <AvatarFallback>{review.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold">{review.name}</h4>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
      </div>
      <p className="text-gray-600">{review.content}</p>
      <div className="flex items-center mt-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  )
}

export default ReviewCard 