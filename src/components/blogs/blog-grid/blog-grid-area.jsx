"use client";

import { useState } from "react";
import { useGetAllBlogsQuery } from "@/redux/Api/feature/blogApi";
import { useGetAllBlogCategoryQuery } from "@/redux/Api/feature/blogCategoryApi";
import Image from "next/image";
import Link from "next/link";

const BlogGridArea = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const { data, isSuccess } = useGetAllBlogsQuery();
  const {
    data: blogCategoryData,
    isSuccess: blogCategorySuccess,
  } = useGetAllBlogCategoryQuery();

  const filteredBlogs =
    selectedCategoryId && isSuccess
      ? data?.data.filter((blog) => blog.categoryId === selectedCategoryId)
      : data?.data;

  return (
    <section className="blog-area inner-blog-area">
      <div className="container">
        <div className="row">
          {/* Blog posts - 9 columns */}
          <div className="col-xl-9">
            <div className="row">
              {filteredBlogs?.length > 0 ? (
                filteredBlogs.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 mb-4">
                    <div className="blog-post-item">
                      <div className="blog-post-thumb">
                        <Link href={`/blog-details/${item.Id}`}>
                          <Image
                            src={item.image}
                            width={338}
                            height={296}
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="blog-post-content">
                        <h3 className="title">
                          <Link href={`/blog-details/${item.Id}`}>
                            {item.title}
                          </Link>
                        </h3>
                        <span className="post-date">{item.createdAt}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No blogs found.</p>
              )}
            </div>
          </div>

          {/* Sidebar - 3 columns */}
          <div className="col-xl-3">
  <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl shadow-md border border-white/10">
    <h4 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
      Blog Categories
    </h4>
    <ul className="space-y-3">
      <li>
        <span
          onClick={() => setSelectedCategoryId(null)}
          className={`text-left w-full transition-all px-3 py-2 rounded-lg ${
            selectedCategoryId === null
              ? "bg-white/10 text-white font-bold"
              : "text-gray-300 hover:text-white hover:bg-white/10"
          }`}
        >
          All Categories
        </span>
      </li>

      {blogCategorySuccess &&
        blogCategoryData?.data.map((category) => (
          <li key={category.Id}>
            <span
              onClick={() => setSelectedCategoryId(category.Id)}
              className={`text-left w-full transition-all px-3 py-2 rounded-lg ${
                selectedCategoryId === category.Id
                  ? "bg-white/10 text-white font-bold"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {category.categoryName}
            </span>
          </li>
        ))}
    </ul>
  </div>
</div>

        </div>

        {/* Pagination - optional */}
        <div className="row mt-4">
          <div className="col-12">
            <nav aria-label="Page navigation pagination-wrap">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link current" href="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link next" href="#">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGridArea;
