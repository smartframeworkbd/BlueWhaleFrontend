import Blog from "@/components/blogs/blog-standard";
import React from "react";
import { generatePageMetadata } from "@/utils/seoUtils";

// This sets dynamic metadata for the Contact page
export async function generateMetadata(_, parent) {
  return generatePageMetadata({
    title: " Blue Whale | BLOG",
    description:
      "Get in touch with the Blue Whale team. We'd love to hear from you.",
    image: "/images/contact-og.jpg", // Optional: customize this or use a shared one
    icon: "/favicon.png", // Optional: can override globally set favicon
    url: "/contact",
    parent,
  });
}


const page = () => {
  return (
    <>
      <Blog />
    </>
  );
};

export default page;
