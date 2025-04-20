// import BlogDetails from "../../../components/blogs/blog-details"

import BlogDetails from "@/components/blogs/blog-details"

const page = ({params}) => {
  console.log(params.Id,"------------")
  return (
    <>
      <BlogDetails Id={params.Id}/>
    </>
  )
}

export default page
