import Breadcrumb from "@/common/breadcrumb"
import BlogGridArea from "./blog-grid-area"
import Header from "@/layout/headers/header"

const BlogGrid = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Blogs " sm_title="Blogs" />
        <BlogGridArea />
      </main>
    </>
  )
}

export default BlogGrid
