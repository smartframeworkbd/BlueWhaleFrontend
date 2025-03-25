import Count from "@/common/count";

const counter_data = [
    {
        id: 1,
        counter: 2000,
        plus: "+",
        text: <>Products</>,
    },
    {
        id: 2,
        counter: 120,
        plus: "+",
        text: <>Experts</>,
    },
    {
        id: 3,
        counter: 95,
        percentage: "%",
        text: <>Satisfaction <br /> rate</>,
    },
];

// Function to format numbers (e.g., 2000 → 2K, 1000000 → 1M)
const formatNumber = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M"; // 1M+
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K"; // 1K+
    }
    return num; // Keep as-is if less than 1000
};

const Counter = ({ style }) => {
    return (
        <section className={`${style ? "inner-fact-padding" : "fact-area"}`}>
            <div className="container">
                <div className="row justify-content-center">
                    {counter_data.map((item) => (
                        <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="fact-item">
                                <h2 className="count">
                                    <span className="formatting-mark">{item.plus}</span>
                                    {formatNumber(item.counter)}
                                    <span className="formatting-mark">{item.percentage}</span>
                                </h2>
                                <span className="content">{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Counter;
