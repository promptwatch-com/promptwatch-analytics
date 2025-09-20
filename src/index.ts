export const PROMPTWATCH_DEFAULT_SCRIPT_URL =
  'https://ingest.promptwatch.com/js/client.min.js';

export type AnalyticsLoaderOptions = {
  scriptUrl?: string;
  attributes?: Record<string, string>;
};

/**
 * Injects the Promptwatch analytics script into the document head.
 * Safe to call multiple times; it will not inject duplicates for the same projectId.
 */
export function loadPromptwatch(
  projectId: string,
  options: AnalyticsLoaderOptions = {}
): Promise<void> {
  if (!projectId || typeof projectId !== 'string') {
    return Promise.reject(new Error('projectId is required'));
  }

  if (typeof document === 'undefined') {
    // SSR / non-browser environment: no-op
    return Promise.resolve();
  }

  const scriptUrl = options.scriptUrl || PROMPTWATCH_DEFAULT_SCRIPT_URL;

  // Check if script already exists for this projectId
  const existing = document.querySelector(
    `script[src="${cssEscape(scriptUrl)}"][data-project-id="${cssEscape(projectId)}"]`
  ) as HTMLScriptElement | null;
  if (existing) {
    return Promise.resolve();
  }

  // Create and append script
  const script = document.createElement('script');
  script.setAttribute('data-project-id', projectId);
  script.src = scriptUrl;
  script.async = true;

  if (options.attributes) {
    for (const [key, value] of Object.entries(options.attributes)) {
      script.setAttribute(key, String(value));
    }
  }

  const onLoadPromise = new Promise<void>((resolve, reject) => {
    script.addEventListener('load', () => resolve());
    script.addEventListener('error', () =>
      reject(new Error('Failed to load Promptwatch analytics script'))
    );
  });

  document.head.appendChild(script);
  return onLoadPromise;
}

// Minimal CSS escape for attribute value usage in querySelector
function cssEscape(input: string): string {
  return input.replace(/\"/g, '\\\"');
}

export {};


