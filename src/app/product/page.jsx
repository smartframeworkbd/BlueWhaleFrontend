import Shop from "@/components/shop";
import { generatePageMetadata } from "@/utils/seoUtils";

// This sets dynamic metadata for the Contact page
export async function generateMetadata(_, parent) {
  return generatePageMetadata({
    title: " Blue Whale | Products",
    description:
      "Get in touch with the Blue Whale team. We'd love to hear from you.",
    image: "/images/contact-og.jpg", // Optional: customize this or use a shared one
    icon: "./box.png", // Optional: can override globally set favicon
    url: "/contact",
    parent,
  });
}
const page = () => {
  return (
    <>
      <Shop />
    </>
  );
};

export default page;
