// src/utils/ollama.ts

/**
 * Returns Ollama base URL for the browser.
 * Set NEXT_PUBLIC_OLLAMA_BASE_URL in your deployment (recommended).
 * Example: http://tower:11434
 *
 * Fallback: OLLAMA_BASE_URL (in case someone injects it to the client bundle).
 */
export function getOllamaBaseUrl(): string {
  const publicEnv = (process.env.NEXT_PUBLIC_OLLAMA_BASE_URL || "").trim();
  const fallbackEnv = (process.env.OLLAMA_BASE_URL || "").trim();

  const base = publicEnv || fallbackEnv;

  // No default to localhost. If not configured, return empty string.
  return base ? base.replace(/\/$/, "") : "";
}
