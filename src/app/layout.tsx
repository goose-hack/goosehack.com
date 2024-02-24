import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "GooseHack",
  description:
    "プログラミング学習者のコミュニティ「GooseHack」は、Discord上で学んだことをシェアしたり、質問し合ったりできる場として運営しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
