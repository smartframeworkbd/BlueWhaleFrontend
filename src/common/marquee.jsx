const marquee = [
    "We are always ready to serve your product",
    "We are always ready to serve your product",
    "We are always ready to serve your product",
    "We are always ready to serve your product",
    "We are always ready to serve your product",
    "We are always ready to serve your product",
]
const Marquee = ({ style }) => {
    return (
        <div className={`marquee-area ${style ? "marquee-style-two" : "marquee-area"}`}>
            <div className="marquee-wrap">
                {marquee.map((li, index) => (
                    <span key={index}>{li}</span>
                ))}
            </div>
        </div>
    )
}

export default Marquee
