import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Amazon Reviews",
  version: packageJson.version,
  copyright: `© ${currentYear}, Review Marketplace.`,
  meta: {
    title: "Review Marketplace",
    description:
      "Get Verified Reviews for Your Book or Product or Earn by Writing Them.",
    openGraph: {
      title: "Review Marketplace",
      description: "Get Verified Reviews for Your Book or Product or Earn by Writing Them.",
      images: "/images/webp/meta-tag.webp",
    },
  },
};
