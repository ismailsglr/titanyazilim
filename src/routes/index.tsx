import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Preloader } from "@/components/site/Preloader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Technologies } from "@/components/site/Technologies";
import { Projects } from "@/components/site/Projects";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Titan Yazılım — Premium Yazılım Geliştirme Stüdyosu" },
      {
        name: "description",
        content:
          "Titan Yazılım, kurumsal yazılım, web ve mobil uygulama, bulut altyapı ve yapay zeka çözümleri sunan premium bir yazılım stüdyosudur.",
      },
      { property: "og:title", content: "Titan Yazılım — Premium Yazılım Stüdyosu" },
      {
        property: "og:description",
        content:
          "Modern teknolojilerle ölçeklenebilir dijital ürünler. Web, mobil, bulut ve AI çözümleri.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="top-right" />
    </div>
  );
}
