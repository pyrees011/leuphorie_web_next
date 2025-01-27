import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  return (
    <section className="container px-4 py-12 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Frequently Asked Questions</h2>
        <div className="mb-6">
          <p className="text-sm text-gray-500">or drop email at</p>
          <a href="mailto:taskku@mycompany.com" className="text-green-500 hover:underline">
            taskku@mycompany.com
          </a>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I get a Taskku premium account?</AccordionTrigger>
            <AccordionContent>
              You can get a premium account easily, you can get it by logging in to the profile and select a premium
              plan. You can also upgrade your account anytime.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I create a team with my members?</AccordionTrigger>
            <AccordionContent>
              You can create a team by inviting your members through their email addresses or sharing a team invitation
              link.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I cancel my subscription in the future?</AccordionTrigger>
            <AccordionContent>
              Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing
              period.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can a google account to create a Taskku account?</AccordionTrigger>
            <AccordionContent>
              Yes, you can use your Google account to sign up and create a Taskku account quickly and securely.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How do I delete my account?</AccordionTrigger>
            <AccordionContent>
              You can delete your account from the account settings page. Please note that this action cannot be undone.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

