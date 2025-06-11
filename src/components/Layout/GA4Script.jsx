// components/scripts/GA4.tsx
'use client'
import Script from 'next/script';

export default function GA4Script() {
  return (
    <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-JSMC8W0ERV"
                strategy="afterInteractive"
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JSMC8W0ERV');
          `,
                }}
            />
    </>
  );
}
