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
            <Input
              label="Full Name"
              placeholder="Enter your name"
            />

            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
            />

            <Input
              label="Subject"
              placeholder="Message subject"
            />

         <TextArea
  label="Message"
  placeholder="Write your message..."
  minRows={5}
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