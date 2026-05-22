import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { AppointmentProvider } from "@/lib/appointments";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MNMC | Mongolian National Medical Center",
  description: "Mongolia's premier healthcare institution offering world-class medical services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <I18nProvider>
          <AppointmentProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </AppointmentProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
