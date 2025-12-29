/**
 * Root Layout for mAxIvis Core
 * * Note: External CSS imports are removed here to ensure compatibility with 
 * the preview environment. Base styles are embedded in the <head> section.
 */

export const metadata = {
  title: 'mAxIvis Core | Angel Dashboard',
  description: 'Sovereign AI Architecture for the Trades',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          /* Base reset and theme colors */
          :root {
            --maximus-void: #121212;
            --velvet-fury: #D40000;
          }
          
          body {
            background-color: #121212;
            color: white;
            margin: 0;
            padding: 0;
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          /* Custom scrollbar for the Savage aesthetic */
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: #121212;
          }
          ::-webkit-scrollbar-thumb {
            background: #D40000;
            border-radius: 10px;
          }
        `}</style>
      </head>
      <body className="min-h-screen bg-[#121212] font-sans antialiased text-white">
        {children}
      </body>
    </html>
  )
}
