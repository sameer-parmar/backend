// app/layout.js
import './globals.css'; // Ensure this path is correct

export const metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
