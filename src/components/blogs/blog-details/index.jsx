import Breadcrumb from "@/common/breadcrumb"
import BlogDetailsArea from "./blog-details-area"
import Header from "@/layout/headers/header"

const BlogDetails = ({Id}) => {
  console.log(Id)
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Blog Details" sm_title="Blog Details" />
        <BlogDetailsArea Id={Id} />
      </main>
    </>
  )
}

export default BlogDetails
