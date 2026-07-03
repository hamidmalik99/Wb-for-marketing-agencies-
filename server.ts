import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client safely with lazy checks
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "MOCK_KEY",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// API Routes
app.post("/api/analyze-job", async (req, res) => {
  try {
    const { jobTitle, jobDescription } = req.body;
    if (!jobDescription) {
      return res.status(400).json({ error: "Job description is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Return a professional mock response if the key is missing (for safety and local testing)
      return res.json({
        proposal: `Hi there,\n\nI saw your post regarding "${jobTitle || 'Web Developer + AI'}" and immediately saw the core challenge. \n\nI specialize in custom Web Development and AI integration. Since I'm running in demo mode right now, here is how I would typically approach this: I'd build a responsive React frontend, connect it to a Node.js/Express backend, and tie in the Gemini API using modern SDKs to solve the automation flow. Let's hop on a quick call to map out your architecture.\n\nBest,\nYour Lead Dev`,
        strategy: [
          "Understand the core business logic of the job post.",
          "Identify manual workflows that can be automated (e.g. data scraping, automated categorization).",
          "Deploy a high-performance, low-latency React + Tailwind CSS client.",
          "Set up an Express proxy backend to securely query AI models and keep keys hidden."
        ],
        milestones: [
          { phase: "Phase 1: Architecture & API mapping", duration: "1-2 days" },
          { phase: "Phase 2: Core integration & fullstack scaffolding", duration: "3-5 days" },
          { phase: "Phase 3: QA & Deployment on Cloud Run", duration: "1-2 days" }
        ],
        tools: ["React (Vite)", "Express.js", "@google/genai SDK", "Tailwind CSS", "Make.com / Zapier for webhook pipelines"]
      });
    }

    const client = getGeminiClient();
    
    const prompt = `
    You are a world-class Web Developer & AI Integration specialist on Upwork.
    You win high-ticket jobs by being extremely technical, highly direct, authentic, and skipping AI-sounding fluff.
    
    Given the following Upwork job details:
    Job Title: ${jobTitle || 'Not specified'}
    Job Description:
    """
    ${jobDescription}
    """
    
    Generate a JSON response that conforms EXACTLY to this structure (do not include any markdown styling inside the JSON string, return pure JSON):
    {
      "proposal": "An authentic, compelling, highly personalized cover letter. It must start by referencing the core problem from the description directly (no 'Dear hiring manager', no 'I am writing to apply...'). Make it sound like an expert developer analyzing their problem. Keep it under 250 words, clean, and conversational yet authoritative. Add a polite, action-oriented sign-off.",
      "strategy": [
        "Step 1: Specific technical strategy to solve their problem",
        "Step 2: How AI integration or workflow automation will optimize it",
        "Step 3: Scaling or security considerations (like keeping keys server-side)",
        "Step 4: Ultimate deployment and feedback cycle"
      ],
      "milestones": [
        { "phase": "Setup & Architecture", "duration": "1-2 Days" },
        { "phase": "Core Feature Implementation", "duration": "3-4 Days" },
        { "phase": "AI Integration & Verification", "duration": "2 Days" }
      ],
      "tools": [
        "A list of 4-6 specific developer tools/libraries suited for this task (e.g. React, Express, Puppeteer, Make, Gemini Flash, etc.)"
      ]
    }
    `;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Empty response from Gemini");
    }

    const parsedData = JSON.parse(text.trim());
    return res.json(parsedData);
  } catch (error: any) {
    console.error("Error analyzing Upwork job:", error);
    return res.status(500).json({ error: error.message || "Failed to analyze job" });
  }
});

// Serve frontend assets and start server
async function bootstrap() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error("Failed to bootstrap server:", err);
});
