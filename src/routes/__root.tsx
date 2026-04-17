import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Titan Yazılım — Dijital Vizyonunuzu Kodluyoruz" },
      {
        name: "description",
        content:
          "Titan Yazılım; web, mobil ve kurumsal yazılım çözümleriyle markanızı dijitalde bir adım öne taşır.",
      },
      { name: "author", content: "Titan Yazılım" },
      { property: "og:title", content: "Titan Yazılım — Dijital Vizyonunuzu Kodluyoruz" },
      {
        property: "og:description",
        content:
          "Web, mobil ve kurumsal yazılım çözümlerinde uçtan uca premium teknoloji partneri.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Titan Yazılım — Dijital Vizyonunuzu Kodluyoruz" },
      {
        name: "twitter:description",
        content:
          "Web, mobil ve kurumsal yazılım çözümlerinde uçtan uca premium teknoloji partneri.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
      { name: "description", content: "Titan Yazılım; web, mobil ve kurumsal yazılım çözümleriyle markanızı dijitalde bir adım öne taşır" },
      { property: "og:description", content: "Titan Yazılım; web, mobil ve kurumsal yazılım çözümleriyle markanızı dijitalde bir adım öne taşır" },
      { name: "twitter:description", content: "Titan Yazılım; web, mobil ve kurumsal yazılım çözümleriyle markanızı dijitalde bir adım öne taşır" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
