import { Metadata } from 'next';
import Header from '../Header';
import Footer from '../Footer';
import '../../styles/globals.css';
import { Inter } from 'next/font/google';


const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'My Landing Page',
  description: 'Landing page built with Next.js and Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="max-w-screen-2xl mx-auto px-4">
          <header>
            <Header />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
