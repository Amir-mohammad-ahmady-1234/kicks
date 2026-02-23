import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import {
  TypographyBig,
  TypographyH4,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";
import { Textarea } from "@/core/components/shadcn/ui/textarea";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

function ContactPage() {
  return (
    <>
      <SectionLayout>
        <TypographyBig className="tracking-widest mb-6 mt-35">
          GET IN <span className="text-primary">TOUCH</span>
        </TypographyBig>
      </SectionLayout>

      <SectionLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: MapPin,
              title: "Visit Us",
              info: "123 Tech Street, Silicon Valley, CA",
              bg: "bg-blue-100 dark:bg-blue-900/20",
              color: "text-blue-600",
            },
            {
              icon: Phone,
              title: "Call Us",
              info: "+1 (555) 123-4567",
              bg: "bg-green-100 dark:bg-green-900/20",
              color: "text-green-600",
            },
            {
              icon: Mail,
              title: "Email Us",
              info: "hello@company.com",
              bg: "bg-purple-100 dark:bg-purple-900/20",
              color: "text-purple-600",
            },
            {
              icon: Clock,
              title: "Working Hours",
              info: "Mon-Fri: 9AM - 6PM",
              bg: "bg-orange-100 dark:bg-orange-900/20",
              color: "text-orange-600",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border dark:border-gray-800 text-center hover:shadow-lg transition-all"
              >
                <div
                  className={`${item.bg} w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center`}
                >
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.info}
                </p>
              </div>
            );
          })}
        </div>
      </SectionLayout>

      <SectionLayout>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <TypographyH4>
              SEND US A <span className="text-primary">MESSAGE</span>
            </TypographyH4>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" className="w-full" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="I need help with..." className="w-full" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Tell us everything..."
                  className="min-h-37.5"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white group">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </div>
          </div>

          <div className="relative h-127 rounded-2xl overflow-hidden border dark:border-gray-800">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-black/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-8xl mb-6">📍</div>
                <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
                <p className="text-white/80 max-w-sm mx-auto">
                  123 Tech Street, Silicon Valley, CA 94025
                </p>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>We usually reply within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout>
        <TypographyH4 className="text-center mb-12">
          FREQUENTLY <span className="text-primary">ASKED</span>
        </TypographyH4>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "How fast do you reply?",
              a: "Within 24 hours. Usually faster. Like, way faster.",
            },
            {
              q: "Do you work internationally?",
              a: "Absolutely. We have clients from Tokyo to New York.",
            },
            {
              q: "What's your favorite coffee?",
              a: "Yes. But seriously, we're an espresso kind of team.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="border dark:border-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h4 className="font-semibold mb-2">{faq.q}</h4>
              <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
}

export default ContactPage;
