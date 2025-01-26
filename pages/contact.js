import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const faqs = [
  { question: "Do you offer refunds?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "Can I try the free trial now?", answer: "Eget dolor morbi non arcu risus quis." },
  { question: "How can I reach support?", answer: "Enim praesent elementum facilisis leo. Diam donec adipiscing." },
  { question: "Will it work for me?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "How much does it cost?", answer: "Eget dolor morbi non arcu risus quis." },
  { question: "How to change profile pictures?", answer: "Enim praesent elementum facilisis leo. Diam donec adipiscing." },
];

const ContactUs = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Contact Form Submission:", data);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-mona px-6 py-12">
      <h1 className="text-4xl font-bold text-[#C4D6D9] text-center">Contact Us</h1>
      <p className="text-center text-[#F1AEC6] mt-2">We’re here to help and answer any questions you may have.</p>

      {/* Spacing Before Contact Details */}
      <div className="mt-12"></div>

      {/* FAQ Section */}
      <div className="flex justify-center">
        <div className="bg-[#FAC0CC] p-6 rounded-xl shadow-md w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md h-44 flex flex-col">
                <h3 className="text-lg font-semibold text-[#C4D6D9] min-h-[48px] flex items-center">{faq.question}</h3>
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex justify-center mt-12">
        <div className="bg-[#E8F3E2] p-8 rounded-xl shadow-md w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-[#C4D6D9] text-center mb-6">Send Us a Message</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Controller
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your Message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-[#FAC0CC] hover:bg-[#F1AEC6]">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Spacing Before Contact Details */}
      <div className="mt-12"></div>

      {/* Contact Details */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#C4D6D9]">Other Ways to Reach Us</h2>
        <p className="text-gray-700 mt-2">Email: <span className="font-semibold">support@example.com</span></p>
        <p className="text-gray-700">Phone: <span className="font-semibold">+1 234 567 8900</span></p>
      </div>

      {/* Live Chat Button */}
      <div className="mt-12 text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#FAC0CC] hover:bg-[#F1AEC6] px-6 py-3 text-lg">Live Chat</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-black">Live Chat (Coming Soon)</DialogTitle>
            </DialogHeader>
            <p className="text-gray-600 text-center">Our support team will be available for live chat soon.</p>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ContactUs;
  