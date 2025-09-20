import { useEffect } from 'react';
import { loadPromptwatch, PROMPTWATCH_DEFAULT_SCRIPT_URL, type AnalyticsLoaderOptions } from './index';

export type PromptwatchScriptProps = {
  projectId: string;
  scriptUrl?: string;
  attributes?: AnalyticsLoaderOptions['attributes'];
};

export function PromptwatchScript({ projectId, scriptUrl, attributes }: PromptwatchScriptProps) {
  useEffect(() => {
    loadPromptwatch(projectId, { scriptUrl: scriptUrl || PROMPTWATCH_DEFAULT_SCRIPT_URL, attributes });
  }, [projectId, scriptUrl, attributes]);

  return null;
}

export default PromptwatchScript;


