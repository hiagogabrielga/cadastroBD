
import "./globals.css";

export const metadata = {
  title: "Login",
  description: "Login simples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
