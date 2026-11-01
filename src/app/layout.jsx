import '@/styles/bootstrap.min.css';
import '@/styles/boxicons.min.css';
import '@/styles/animated-headline.css';
import '@/styles/owl.carousel.min.css';
import '@/styles/owl.theme.default.min.css';
import '@/styles/main.css';
import '@/styles/globals.css';

export const metadata = {
  title: 'Muhammad Talha - Full Stack Developer & Agentic AI Developer',
  description:
    'Personal Portfolio of Muhammad Talha - Full Stack Developer & Agentic AI Developer.',
  icons: {
    icon: '/assets/img/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/img/favicon.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
