"use client";

import { useState } from "react";
import {  Input, TextArea } from "@heroui/react";
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
       <label className="font-medium">Product Name</label>
<Input
  placeholder="Modern Sofa"
  required
/>
<label className="font-medium">Product Price</label>
        <Input
          type="number"
          
          placeholder="450"
            required
        />
<label className="font-medium">Product Category</label>
        <Input
       
          placeholder="Living Room"
           required
        />
<label className="font-medium">Brand</label>
        <Input
        
          placeholder="Modenza"
           required
        />
<label className="font-medium">Stock</label>
        <Input
          type="number"
         
          placeholder="20"
           required
        />
<label className="font-medium">Rating</label>
        <Input
          type="number"
         
          placeholder="4.8"
        />
<AIContentGenerator />

<label className="font-medium">Description</label>
       <TextArea
  
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

        <button
          color="primary"
          type="submit"
          className="w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}