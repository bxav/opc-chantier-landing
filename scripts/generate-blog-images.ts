#!/usr/bin/env npx tsx

/**
 * Generate blog images using Google Nano Banana Pro (Gemini 3 Pro Image)
 * Usage: npx tsx scripts/generate-blog-images.ts
 *
 * Requires GOOGLE_AI_API_KEY in .env.local
 * @see https://ai.google.dev/gemini-api/docs/image-generation
 */

import { config } from "dotenv";
import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
import * as path from "node:path";

// Load .env.local
config({ path: ".env.local" });

const API_KEY = process.env.GOOGLE_AI_API_KEY;

if (!API_KEY) {
  console.error("Error: GOOGLE_AI_API_KEY environment variable is required");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

interface ArticleConfig {
  slug: string;
  prompt: string;
  filename: string;
}

// Article configurations with tailored prompts for Nano Banana Pro
const articles: ArticleConfig[] = [
  {
    slug: "optimize-site-meetings",
    filename: "site-meetings.png",
    prompt: `Create a professional photograph of a construction site meeting.

Scene: Modern portable site office with large windows showing construction cranes in background.
People: 5 diverse construction professionals around a table with blueprints and laptops. Hard hats on table.
One person standing and presenting, others engaged and taking notes.
Mood: Collaborative, professional, productive.
Style: Corporate photography, warm natural lighting, 16:9 landscape format.
Quality: High resolution, photorealistic, clean composition.`,
  },
  {
    slug: "optimiser-reunions-chantier",
    filename: "reunions-chantier.png",
    prompt: `Create a professional photograph of a construction site meeting.

Scene: Modern portable site office with large windows showing construction cranes in background.
People: 5 diverse construction professionals around a table with blueprints and laptops. Hard hats on table.
One person standing and presenting, others engaged and taking notes.
Mood: Collaborative, professional, productive.
Style: Corporate photography, warm natural lighting, 16:9 landscape format.
Quality: High resolution, photorealistic, clean composition.`,
  },
  {
    slug: "annotated-photos-communication",
    filename: "annotated-photos.png",
    prompt: `Create a professional photograph showing construction documentation with smartphone.

Scene: Construction worker on site holding smartphone displaying a photo annotation app.
Phone screen: Shows a wall defect photo with red arrows pointing to a crack, measurement overlay showing "15cm", and a severity badge.
Worker: Wearing high-visibility vest and safety helmet, gloves visible.
Background: Blurred concrete construction site with scaffolding.
Style: Professional photography, shallow depth of field, natural daylight.
Quality: High resolution, photorealistic, modern tech aesthetic.`,
  },
  {
    slug: "photos-annotees-communication-chantier",
    filename: "photos-annotees.png",
    prompt: `Create a professional photograph showing construction documentation with smartphone.

Scene: Construction worker on site holding smartphone displaying a photo annotation app.
Phone screen: Shows a wall defect photo with red arrows pointing to a crack, measurement overlay showing "15cm", and a severity badge.
Worker: Wearing high-visibility vest and safety helmet, gloves visible.
Background: Blurred concrete construction site with scaffolding.
Style: Professional photography, shallow depth of field, natural daylight.
Quality: High resolution, photorealistic, modern tech aesthetic.`,
  },
  {
    slug: "ai-construction-trends",
    filename: "ai-construction.png",
    prompt: `Create a futuristic image showing AI technology in construction management.

Scene: Modern construction control room with multiple large curved monitors.
Screens display: AI analytics dashboard with progress charts, 3D building model with colored zones, predictive timeline, real-time site camera feeds.
Person: Construction manager in smart casual attire reviewing data, hard hat on desk beside them.
Visual elements: Subtle holographic data visualizations, blue and orange accent colors.
Style: Cinematic, tech-forward, professional.
Quality: High resolution, modern aesthetic, clean composition.`,
  },
  {
    slug: "ia-construction-tendances-2026",
    filename: "ia-construction.png",
    prompt: `Create a futuristic image showing AI technology in construction management.

Scene: Modern construction control room with multiple large curved monitors.
Screens display: AI analytics dashboard with progress charts, 3D building model with colored zones, predictive timeline, real-time site camera feeds.
Person: Construction manager in smart casual attire reviewing data, hard hat on desk beside them.
Visual elements: Subtle holographic data visualizations, blue and orange accent colors.
Style: Cinematic, tech-forward, professional.
Quality: High resolution, modern aesthetic, clean composition.`,
  },
  {
    slug: "digital-safety-management",
    filename: "digital-safety.png",
    prompt: `Professional 2K 16:9 photograph of construction site with digital safety.

Scene: Active construction site with proper safety barriers and signage.
Focus: Supervisor in high-visibility orange vest and white safety helmet holds tablet showing safety checklist app with green checkmarks.
Background: Workers wearing smart PPE (helmets, vests) working safely. Digital display board shows real-time safety metrics.
Environment: Clean organized site with proper barriers, blue sky, golden hour lighting.
Style: Documentary photography, photorealistic, professional.
Quality: High resolution, 16:9 landscape format.`,
  },
  {
    slug: "gestion-securite-numerique-chantier",
    filename: "securite-numerique.png",
    prompt: `Professional 2K 16:9 photograph of construction site with digital safety.

Scene: Active construction site with proper safety barriers and signage.
Focus: Supervisor in high-visibility orange vest and white safety helmet holds tablet showing safety checklist app with green checkmarks.
Background: Workers wearing smart PPE (helmets, vests) working safely. Digital display board shows real-time safety metrics.
Environment: Clean organized site with proper barriers, blue sky, golden hour lighting.
Style: Documentary photography, photorealistic, professional.
Quality: High resolution, 16:9 landscape format.`,
  },
];

const OUTPUT_DIR = path.join(process.cwd(), "public/images/blog");

async function generateImage(config: ArticleConfig): Promise<boolean> {
  const outputPath = path.join(OUTPUT_DIR, config.filename);

  // Skip if image already exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Skipping ${config.filename} (already exists)`);
    return true;
  }

  console.log(`\n🎨 Generating image for: ${config.slug}`);
  console.log(`   Using: Nano Banana Pro (gemini-3-pro-image-preview)`);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-image-preview",
      contents: config.prompt,
      config: {
        responseModalities: ["TEXT", "IMAGE"],
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: "2K",
        },
      },
    });

    // Extract image from response
    const parts = response.candidates?.[0]?.content?.parts || [];

    for (const part of parts) {
      if (part.text) {
        console.log(`   Model notes: ${part.text.substring(0, 100)}...`);
      }
      if (part.inlineData?.data) {
        const buffer = Buffer.from(part.inlineData.data, "base64");
        fs.writeFileSync(outputPath, buffer);
        console.log(`✅ Saved: ${config.filename} (${(buffer.length / 1024).toFixed(0)} KB)`);
        return true;
      }
    }

    console.error(`❌ No image data in response for ${config.slug}`);
    return false;
  } catch (error: any) {
    console.error(`❌ Error generating ${config.slug}:`, error.message);

    // If safety filter triggered, try simpler prompt
    if (error.message?.includes("SAFETY") || error.message?.includes("blocked")) {
      console.log("   Retrying with simpler prompt...");
      return await generateImageSimple(config);
    }
    return false;
  }
}

async function generateImageSimple(config: ArticleConfig): Promise<boolean> {
  const outputPath = path.join(OUTPUT_DIR, config.filename);

  // Simplified fallback prompts
  const simplePrompts: Record<string, string> = {
    "site-meetings.png": "Professional photo of a business meeting in a modern office. People around a table with laptops and documents. Corporate style.",
    "reunions-chantier.png": "Professional photo of a business meeting in a modern office. People around a table with laptops and documents. Corporate style.",
    "annotated-photos.png": "Close-up of hands holding a smartphone showing a photo app with annotations. Professional photography style.",
    "photos-annotees.png": "Close-up of hands holding a smartphone showing a photo app with annotations. Professional photography style.",
    "ai-construction.png": "Modern office with multiple computer monitors showing data dashboards and analytics. Blue lighting, tech aesthetic.",
    "ia-construction.png": "Modern office with multiple computer monitors showing data dashboards and analytics. Blue lighting, tech aesthetic.",
    "digital-safety.png": "Construction supervisor in orange vest holding tablet on clean organized construction site. Safety theme, professional photography.",
    "securite-numerique.png": "Construction supervisor in orange vest holding tablet on clean organized construction site. Safety theme, professional photography.",
  };

  const simplePrompt = simplePrompts[config.filename] || "Professional business photography";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-image-preview",
      contents: simplePrompt,
      config: {
        responseModalities: ["TEXT", "IMAGE"],
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: "2K",
        },
      },
    });

    const parts = response.candidates?.[0]?.content?.parts || [];

    for (const part of parts) {
      if (part.inlineData?.data) {
        const buffer = Buffer.from(part.inlineData.data, "base64");
        fs.writeFileSync(outputPath, buffer);
        console.log(`✅ Saved (fallback): ${config.filename}`);
        return true;
      }
    }
    return false;
  } catch (error: any) {
    console.error(`❌ Fallback also failed:`, error.message);
    return false;
  }
}

async function updateArticleFrontmatter(slug: string, imagePath: string): Promise<void> {
  // Map slugs to their file locations
  const fileMap: Record<string, string> = {
    "optimize-site-meetings": "content/blog/en/optimize-site-meetings.mdx",
    "optimiser-reunions-chantier": "content/blog/fr/optimiser-reunions-chantier.mdx",
    "annotated-photos-communication": "content/blog/en/annotated-photos-communication.mdx",
    "photos-annotees-communication-chantier": "content/blog/fr/photos-annotees-communication-chantier.mdx",
    "ai-construction-trends": "content/blog/en/ai-construction-trends.mdx",
    "ia-construction-tendances-2026": "content/blog/fr/ia-construction-tendances-2026.mdx",
    "digital-safety-management": "content/blog/en/digital-safety-management.mdx",
    "gestion-securite-numerique-chantier": "content/blog/fr/gestion-securite-numerique-chantier.mdx",
  };

  const relativePath = fileMap[slug];
  if (!relativePath) return;

  const filePath = path.join(process.cwd(), relativePath);

  if (!fs.existsSync(filePath)) {
    console.log(`   File not found: ${relativePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, "utf-8");

  // Check if image field already exists in frontmatter
  if (content.match(/^image:/m)) {
    content = content.replace(/^image:.*$/m, `image: "${imagePath}"`);
  } else {
    // Add image field after readTime
    content = content.replace(
      /(readTime:\s*\d+)/,
      `$1\nimage: "${imagePath}"`
    );
  }

  fs.writeFileSync(filePath, content);
  console.log(`📝 Updated: ${relativePath}`);
}

async function main(): Promise<void> {
  console.log("🍌 Blog Image Generator using Nano Banana Pro");
  console.log("   Model: gemini-3-pro-image-preview\n");

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Created: ${OUTPUT_DIR}`);
  }

  const results: { slug: string; success: boolean }[] = [];

  // Generate images sequentially to respect rate limits
  for (const article of articles) {
    const success = await generateImage(article);
    results.push({ slug: article.slug, success });

    // Delay between requests (Nano Banana Pro may need 5-15s for thinking)
    if (articles.indexOf(article) < articles.length - 1) {
      console.log("   Waiting 3s before next generation...");
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }

  console.log("\n📝 Updating article frontmatter...\n");

  // Update frontmatter for successful generations
  const imageMap: Record<string, string> = {
    "optimize-site-meetings": "/images/blog/site-meetings.png",
    "optimiser-reunions-chantier": "/images/blog/reunions-chantier.png",
    "annotated-photos-communication": "/images/blog/annotated-photos.png",
    "photos-annotees-communication-chantier": "/images/blog/photos-annotees.png",
    "ai-construction-trends": "/images/blog/ai-construction.png",
    "ia-construction-tendances-2026": "/images/blog/ia-construction.png",
    "digital-safety-management": "/images/blog/digital-safety.png",
    "gestion-securite-numerique-chantier": "/images/blog/securite-numerique.png",
  };

  for (const { slug, success } of results) {
    if (success && imageMap[slug]) {
      await updateArticleFrontmatter(slug, imageMap[slug]);
    }
  }

  // Summary
  const successCount = results.filter((r) => r.success).length;
  console.log(`\n✨ Done! Generated ${successCount}/${results.length} images.`);
  console.log("   Run `npm run build` to verify.\n");
}

main().catch(console.error);
