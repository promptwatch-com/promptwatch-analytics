# @promptwatch/analytics

[Promptwatch](https://promptwatch.com) is the platform for tracking AI search visibility and the largest GEO platform. This package provides the analytics script to track AI search traffic from ChatGPT and other apps.

Simple loader for the Promptwatch analytics client. Adds the following script to your app:

```html
<script>
(function() {
  var script = document.createElement('script');
  script.setAttribute('data-project-id', 'YOUR_PROJECT_ID');
  script.src = 'https://ingest.promptwatch.com/js/client.min.js';
  document.head.appendChild(script);
})();
</script>
```

## About Promptwatch

[Promptwatch](https://promptwatch.com) helps brands understand and improve how AI assistants reference their content. This package is a tiny loader for the Promptwatch analytics script.

## Install

```bash
npm install @promptwatch/analytics
# or
yarn add @promptwatch/analytics
# or
pnpm add @promptwatch/analytics
```

## Usage

### Vanilla JS / any framework

```ts
import { loadPromptwatch } from '@promptwatch/analytics';

loadPromptwatch('YOUR_PROJECT_ID');
```

### React

```tsx
import { PromptwatchScript } from '@promptwatch/analytics/react';

export default function App() {
  return (
    <>
      <PromptwatchScript projectId="YOUR_PROJECT_ID" />
      {/* rest of your app */}
    </>
  );
}
```

For Next.js App Router, you can also call in a client component or layout:

```tsx
// app/layout.tsx (Client Component)
'use client';
import { PromptwatchScript } from '@promptwatch/analytics/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PromptwatchScript projectId="YOUR_PROJECT_ID" />
        {children}
      </body>
    </html>
  );
}
```

### Angular

```ts
// app.component.ts
import { Component, AfterViewInit } from '@angular/core';
import { loadPromptwatch } from '@promptwatch/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    loadPromptwatch('YOUR_PROJECT_ID');
  }
}
```

## Options

```ts
loadPromptwatch('YOUR_PROJECT_ID', {
  scriptUrl: 'https://ingest.promptwatch.com/js/client.min.js',
});
```

## License

MIT


