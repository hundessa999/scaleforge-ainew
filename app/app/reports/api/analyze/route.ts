import { NextResponse } from "next/server";
import { adAnalysisPrompt } from "@/prompts/adAnalysis";

export async function POST(req: Request) {
  const { content } = await req.json();

  if (!content) {
    return NextResponse.json({ error: "No content provided" }, { status: 400 });
  }

  // Placeholder AI response (safe for demo)
  const fakeAnalysis = {
    score: 82,
    hookType: "Curiosity-driven",
    emotion: "Desire",
    strengths: [
      "Clear opening hook",
      "Strong emotional angle",
      "Direct call to action"
    ],
    weaknesses: [
      "CTA could be more urgent",
      "Hook could be shorter"
    ],
    hooks: [
      "Most people miss this simple trick...",
      "If you’re struggling with X, watch this",
      "This changed how I approach Y"
    ],
    script:
      "Hook in first 3 seconds. Highlight pain point. Show transformation. End with a strong CTA."
  };

  return NextResponse.json(fakeAnalysis);
}
