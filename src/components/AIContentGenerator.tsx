"use client";
import { useState } from "react";
import { generateProductDescription } from "@/service/aiService";

const AIContentGenerator = ({ onGenerated }: { onGenerated?: (text: string) => void }) => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState("professional");
  const [length, setLength] = useState("medium");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const data = await generateProductDescription({ productName, category, keywords, tone, length });
      if (data.success) {
        setResult(data.content);
        onGenerated?.(data.content);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 border p-4 rounded">
      <input placeholder="Product Name" value={productName}
        onChange={(e) => setProductName(e.target.value)} className="w-full border p-2" />
      <input placeholder="Category" value={category}
        onChange={(e) => setCategory(e.target.value)} className="w-full border p-2" />
      <input placeholder="Keywords (comma separated)" value={keywords}
        onChange={(e) => setKeywords(e.target.value)} className="w-full border p-2" />

      <select value={tone} onChange={(e) => setTone(e.target.value)} className="w-full border p-2">
        <option value="professional">Professional</option>
        <option value="friendly">Friendly</option>
        <option value="luxury">Luxury</option>
      </select>

      <select value={length} onChange={(e) => setLength(e.target.value)} className="w-full border p-2">
        <option value="short">Short</option>
        <option value="medium">Medium</option>
        <option value="long">Long</option>
      </select>

      <button onClick={handleGenerate} disabled={loading}
        className="bg-purple-600 text-white px-4 py-2 rounded w-full">
        {loading ? "Generating..." : result ? "🔄 Regenerate" : "Generate Description"}
      </button>

      {result && (
        <textarea value={result} onChange={(e) => setResult(e.target.value)}
          className="w-full border p-2 h-32" />
      )}
    </div>
  );
};

export default AIContentGenerator;