import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Pricing() {
  return (
    <section className="container px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Get a special price just for you 👍</h2>
        <p className="text-gray-500">
          Special prices for special users! Get the best price especially for you! Get the best price after trying
          Taskku in 60 days
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <PriceCard
          title="Personal"
          price="5"
          features={["Unlimited Members", "50 Tasks per Month", "Support System Everywhere", "Access Social Media"]}
        />
        <PriceCard
          title="Featured"
          price="15"
          features={[
            "Unlimited Members",
            "50 Tasks per Month",
            "Support System Everywhere",
            "Limited Products",
            "Access Social Media",
          ]}
          featured
        />
        <PriceCard
          title="Business"
          price="25"
          features={[
            "Unlimited Members",
            "50 Tasks per Month",
            "Support System Everywhere",
            "Access Social Media",
            "Priority Support",
          ]}
        />
      </div>
    </section>
  )
}

function PriceCard({
  title,
  price,
  features,
  featured = false,
}) {
  return (
    <Card className={featured ? "bg-black text-white" : ""}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="text-3xl font-bold">
          ${price}
          <span className="text-xl font-normal">/mo</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckIcon className={`w-5 h-5 ${featured ? "text-green-400" : "text-green-500"}`} />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={featured ? "secondary" : "outline"}>
          Purchase Now
        </Button>
      </CardFooter>
    </Card>
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

