// utils/seoUtils.js
export async function generatePageMetadata({
    title = "Blue Whale",
    description = "Default description for the page.",
    image = "/favicon.png", // used for OG + Twitter
    url = "/",
    icon = "/favicon.png", // 🟢 favicon (optional override)
    parent,
  }) {
    const previousImages = (await parent)?.openGraph?.images || [];
  
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        images: [image, ...previousImages],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
      icons: {
        icon, // 🟢 this will generate <link rel="icon" href="..." />
      },
    };
  }
  