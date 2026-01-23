import { Main } from '@/components/elements/main'
import { XIcon } from '@/components/icons/social/x-icon'
import { SocialLink } from '@/components/sections/footer-with-links-and-social-icons'
import { Container } from '@/components/elements/container'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Oatmeal Kit Demo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <>
          <Main>{children}</Main>

          <footer id="footer" className="pt-16">
            <div className="bg-mist-950/2.5 py-16 text-mist-950 dark:bg-white/5 dark:text-white">
              <Container className="flex items-center justify-between gap-10 text-sm/7">
                <div className="text-mist-600 dark:text-mist-500">© 2025 Yuzuu, Inc. Delivered with 🧡 from 🇫🇷 </div>
                <div className="flex items-center gap-4 sm:gap-10">
                  <SocialLink href="https://x.com/notanothermrktr" name="X">
                    <XIcon />
                  </SocialLink>
                </div>
              </Container>
            </div>
          </footer>
        </>
      </body>
    </html>
  )
}
