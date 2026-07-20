"use client";

import { useState } from "react";
import { Button, Input, TextArea } from "@heroui/react";
import AIContentGenerator from "@/components/AIContentGenerator";

export default function AddProductPage() {
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log(image);
  };

  return (
    <div className="mx-auto max-w-3xl py-16">
      <h1 className="mb-8 text-4xl font-bold">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-xl border p-8 shadow-sm"
      >
        <Input
          label="Product Name"
          placeholder="Modern Sofa"
          isRequired
        />

        <Input
          type="number"
          label="Price"
          placeholder="450"
          isRequired
        />

        <Input
          label="Category"
          placeholder="Living Room"
          isRequired
        />

        <Input
          label="Brand"
          placeholder="Modenza"
          isRequired
        />

        <Input
          type="number"
          label="Stock"
          placeholder="20"
          isRequired
        />

        <Input
          type="number"
          label="Rating"
          placeholder="4.8"
        />
<AIContentGenerator />
        <Textarea
          label="Description"
          placeholder="Write product description..."
        />

        <div>
          <label className="mb-2 block font-medium">
            Product Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files?.[0] || null)
            }
          />
        </div>

        <Button
          color="primary"
          type="submit"
          className="w-full"
        >
          Add Product
        </Button>
      </form>
    </div>
  );
}