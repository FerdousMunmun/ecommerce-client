import { Input, TextArea, Button } from "@heroui/react";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Heading */}
      <div className="mb-14 text-center">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-600">
          We'd love to hear from you. Feel free to contact us anytime.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Contact Info */}
        <div className="rounded-xl border p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold">
            Get in Touch
          </h2>

          <div className="space-y-5 text-gray-700">
            <p>
              <span className="font-semibold">📍 Address:</span>
              <br />
              123 Commerce Street, Dhaka, Bangladesh
            </p>

            <p>
              <span className="font-semibold">📧 Email:</span>
              <br />
              support@orebi.com
            </p>

            <p>
              <span className="font-semibold">📞 Phone:</span>
              <br />
              +880 1234-567890
            </p>

            <p>
              <span className="font-semibold">🕒 Business Hours:</span>
              <br />
              Saturday – Thursday
              <br />
              9:00 AM – 8:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl border p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold">
            Send a Message
          </h2>

          <div className="space-y-5">
            <label className="mb-2 block">Full Name</label>
            <Input
             
              placeholder="Enter your name"
            />
<label className="mb-2 block">Email</label>
            <Input
              type="email"
         
              placeholder="Enter your email"
            />
<label className="mb-2 block">Subject</label>
            <Input
            
              placeholder="Message subject"
            />
<label className="mb-2 block">Message</label>

<textarea
  placeholder="Write your message"
  rows={5}
  className="w-full rounded-lg border p-3"
/>
            <Button className="w-full bg-black text-white">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}