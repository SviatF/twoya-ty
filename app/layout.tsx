import type { Metadata, Viewport } from "next";
import "./site.css";

export const metadata: Metadata = {
  title: "Твоя Ти Тут — простір повернення до себе",
  description:
    "Твоя Ти Тут — жіночий простір про внутрішню опору, чесність із собою та повернення до власного голосу.",
};

export const viewport: Viewport = {
  themeColor: "#4d1718",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
