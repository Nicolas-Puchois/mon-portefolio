import "./globals.css";
import MainHeaders from "./components/header";
import MainFooter from "./components/footer";



export const metadata = {
  title: 'Mon portefolio',
  description: 'Mon portefolio avec Next.js'
}

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr">
      <body className="min-h-full flex flex-col">
        <MainHeaders />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
