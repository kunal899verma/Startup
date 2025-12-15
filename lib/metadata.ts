import { Metadata } from "next";
import { COMPANY_NAME, COMPANY_DESCRIPTION } from "./constants";

/**
 * Generate SEO metadata for pages
 */
export function generateMetadata({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${COMPANY_NAME}`
    : `${COMPANY_NAME} - ${COMPANY_DESCRIPTION}`;
  const pageDescription = description || COMPANY_DESCRIPTION;
  const pageKeywords = keywords || [
    "software development",
    "web development",
    "mobile app development",
    "UI/UX design",
    "cloud services",
    "devops",
  ];

  return {
    metadataBase: new URL(canonicalUrl || "https://techvision.com"),
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: COMPANY_NAME }],
    creator: COMPANY_NAME,
    publisher: COMPANY_NAME,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl || "https://techvision.com",
      title: pageTitle,
      description: pageDescription,
      siteName: COMPANY_NAME,
      images: [
        {
          url: ogImage || "/og-image.png",
          width: 1200,
          height: 630,
          alt: COMPANY_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage || "/og-image.png"],
      creator: "@techvision",
    },
    alternates: {
      canonical: canonicalUrl || "https://techvision.com",
    },
  };
}

