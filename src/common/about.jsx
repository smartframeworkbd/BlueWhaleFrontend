import Link from "next/link";
import Image from "next/image";

const about_content = {
    title: "Welcome to Blue whale",
    des: (<>
    Established in 2023, Blue Whale General Trading LLC is a fast-growing general trading company based in Dubai, United Arab Emirates. We specialize in the Food, Beverages, and Personal Care sectors, offering high-quality products at competitive prices.
    <br></br>
    Our commitment to excellence has made us a trusted name in the industry.
    </>),
    list: ["Wide Range of High-Quality Products", "Commitment to Nourishing Communities", "Partnering with global growers and suppliers to deliver top-quality products at the best prices in the UAE"],
    btn: "Read More"
}
const { title, des, list, btn } = about_content;
const About = ({ style }) => {
    return (
        <section className={`${style ? "inner-about-padding" : "about-area"}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                        <Image src="/assets/img/others/welcome.jpg" width={705} height={567} alt="theme-pure" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-11">
                        <div className="about-content">
                            <h2 className="title text-uppercase">{title}</h2>
                            <p>{des}</p>
                            <ul className="about-list">
                                {list.map((li, index) => (
                                    <li key={index}>{li}</li>
                                ))}
                            </ul>
                            <div className="d-flex justify-content-between align-items-center gap-3">
    <Link href="/about" className="btn btn-primary btn-lg position-relative overflow-hidden">
        <span className="text">{btn}</span>
        <span className="shape"></span>
    </Link>

    {/* <Link href="/about" className="btn btn-outline-primary btn-lg position-relative overflow-hidden">
        <span className="text">About Us</span>
        <span className="shape"></span>
    </Link> */}
</div>

                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
