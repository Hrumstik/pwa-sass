import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

import "normalize.css";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Best Slots",
  description:
    "The best Slots casino slot machines for free without the Internet are waiting for you right now!",
};

export const viewport: Viewport = {
  themeColor: "#afbf1f",
};

export default function RootLayout({ children }: Readonly<Props>) {
  return children;
}
