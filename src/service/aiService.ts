const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const generateProductDescription = async (payload: {
  productName: string;
  category: string;
  keywords: string;
  tone: string;
  length: string;
}) => {
  const res = await fetch(`${API_URL}/ai/generate-content`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
};