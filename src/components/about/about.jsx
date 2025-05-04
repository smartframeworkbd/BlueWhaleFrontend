"use client";

import Breadcrumb from "@/common/breadcrumb";
import About from "@/common/about";
import Counter from "@/common/counter";
import Team from "@/common/team";
import StepsArea from "@/common/steps-area";
import Marquee from "@/common/marquee";
import Testimonial from "@/common/testimonial";
import Blog from "@/common/blog";
import Header from "@/layout/headers/header";
import MissionVision from "../mission-vission/MissionVision";
import {
  useGetContentByParentQuery,
  useGetContentBySlugQuery,
} from "@/redux/Api/feature/contentApi";

const AboutMain = () => {
  const { data: contentData, isSuccess: contentSuccess } =
    useGetContentBySlugQuery("about-us");
  const parentId = contentSuccess ? contentData?.data?.Id : null;

  const {
    data: childContentData,
    isSuccess: childSuccess,
    isLoading: childLoading,
  } = useGetContentByParentQuery(parentId, {
    skip: !parentId,
  });

  console.log("test", childContentData);
  return (
    <>
      <Header />
      <main className="main-area fix">
        <Breadcrumb title="About Us" sm_title="About Us" />
        <About style={true} />
        <Counter style={true} />

        <MissionVision
          childContentData={childSuccess && childContentData.data}
        />
        <Team />
        <StepsArea style={true} />
        <Marquee />
        <Testimonial />
        <Blog style={true} />
      </main>
    </>
  );
};

export default AboutMain;
