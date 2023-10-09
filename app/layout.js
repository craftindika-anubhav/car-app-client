import Footer from '@/components/Footer';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Inter, Raleway } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Auto Trading Genius',
  description: 'Website for Auto Trading Genius',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
