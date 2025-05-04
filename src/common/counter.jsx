"use client";

import { useGetGlobalConfigByIdQuery } from "@/redux/Api/feature/globalConfigApi";

const Counter = ({ style }) => {
  const { data, isSuccess } = useGetGlobalConfigByIdQuery(1);

  const counters = [
    {
      id: 1,
      value: data?.data?.counterNumberOne || "",
      label: data?.data?.counterTextOne || "",
    },
    {
      id: 2,
      value: data?.data?.counterNumberTwo || "",
      label: data?.data?.counterTextTwo || "",
    },
    {
      id: 3,
      value: data?.data?.counterNumberThree || "",
      label: data?.data?.counterTextThree || "",
    },
  ];

  return (
    <section className={`${style ? "inner-fact-padding" : "fact-area"}`}>
      <div className="container">
        <div className="row justify-content-center gap-y-[10px] sm:gap-y-0">
          {counters.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">
              <div className="fact-item text-center p-4 bg-white rounded-xl shadow-md">
                <span className="count text-yellow-500 font-bold text-4xl whitespace-nowrap">
                  <span>{item.value.replace(/\s+/g, "")}</span>
                </span>
                <span
                  className="content text-black font-medium text-sm uppercase tracking-wide whitespace-nowrap"
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
