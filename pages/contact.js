import React from "react";
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  MessagesSquare, 
  HelpCircle, 
  Send 
} from "lucide-react";

// shadcn components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Form validation
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Backend API
import { useToast } from "@/hooks/use-toast";

// axios
import { useAxiosInstance } from "@/axios/axios";

// Layout
import AuthenticatedLayout from "@/layout/authenticatedLayout";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const faqs = [
  { question: "How do I get started?", answer: "Sign up for an account and complete the initial health assessment. We'll create a personalized plan for you." },
  { question: "What's included in the free plan?", answer: "The free plan includes basic health tracking, daily reminders, and access to our community features." },
  { question: "How secure is my data?", answer: "We use industry-standard encryption and security measures to protect your personal information." },
  { question: "Can I export my data?", answer: "Yes, you can export your health data and progress reports at any time from your account settings." },
  { question: "Do you offer mobile apps?", answer: "Yes, we have iOS and Android apps available for download from the respective app stores." },
  { question: "What support options are available?", answer: "We offer 24/7 email support, live chat during business hours, and comprehensive help documentation." },
];

const ContactUs = () => {
  const { toast } = useToast();
  const axiosInstance = useAxiosInstance();

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      console.log("Form Data:", data);
      await axiosInstance.post(`${API_BASE_URL}/contact-requests/`, data);
      toast({ title: "Message Sent!", description: "We'll get back to you soon." });
      form.reset(); // Reset form after successful submission
    } catch (error) {
      toast({ title: "Error", description: "Could not send message.", variant: "destructive" });
      console.error("Contact Form Submission Error:", error);
    }
  };

  return (
    <AuthenticatedLayout>
      <div className="">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white py-4">
          <div className="mx-auto px-4">
            <div className="flex items-center h-16">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-emerald-600" />
                <h1 className="text-xl font-semibold">Contact Us</h1>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto px-6 py-8 rounded-3xl bg-gray-100">
          {/* Hero Section */}
          <Card className="bg-gradient-to-r from-emerald-800/10 to-emerald-600/10 border-none p-8 mb-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">How Can We Help You?</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
            </div>
          </Card>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">support@example.com</p>
                <p className="text-gray-600">help@example.com</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+1 (234) 567-8900</p>
                <p className="text-gray-600">Mon-Fri, 9am-6pm</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <MessagesSquare className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600">Chat with us online for instant support.</p>
              </div>
            </Card>
          </div>

          {/* Contact Form and FAQ Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Send className="w-5 h-5" />
                Send Us a Message
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {["name", "email", "subject", "message"].map((field, index) => (
                    <Controller
                      key={index}
                      control={form.control}
                      name={field}
                      render={({ field: inputProps }) => (
                        <FormItem>
                          <FormLabel>
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                          </FormLabel>
                          <FormControl>
                            {field === "message" ? (
                              <Textarea placeholder={`Your ${field}`} className="min-h-[120px]" {...inputProps} />
                            ) : (
                              <Input placeholder={`Your ${field}`} {...inputProps} />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Send Message
                  </Button>
                </form>
              </Form>
            </Card>

            {/* FAQ Section */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-emerald-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </AuthenticatedLayout>
  );
};

export default ContactUs;

  