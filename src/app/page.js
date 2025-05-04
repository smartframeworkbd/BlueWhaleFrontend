// import Home from "../components/homes/home/home";

// export default function page() {
//   return (
//     <>
//       <Home />
//     </>
//   );
// }




// src/app/page.js
import Home from "../components/homes/home/home";
import { generatePageMetadata } from "@/utils/seoUtils";

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}

// Dynamic metadata for the home page
export async function generateMetadata(_, parent) {
  return generatePageMetadata({});
}
