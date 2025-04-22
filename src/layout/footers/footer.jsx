"use client"
import { useGetGlobalConfigByIdQuery } from '@/redux/Api/feature/globalConfigApi';
import Image from 'next/image';
import Link from 'next/link'

const footer_data = [
    {
        id: 1,
        title: "Quick Links",
        class: "column-2",
        links: [
            { list: "About us", link: "/about-us" },
            // { list: "Case Studies", link: "/srevices" },
            { list: "Faq", link: "/faqs" },
            { list: "Product", link: "/product" },
            { list: "Contact Us", link: "/contact" },
        ]
    },
    {
        id: 2,
        title: "Our Products ",
        class: "column-3",
        links: [
            { list: "Spices & Herbs", link: "/product" },
            { list: "Fruits", link: "/product" },
            { list: "Vegetables", link: "/product" },
            { list: "Transaction Security", link: "/product" },
            { list: "Sweetener", link: "/product" },
        ]
    }
]
const footer_content = {
    number: "01816035135",
    email: "info@bluewhale19.com",
    des: (<>Abu Dhabi, United Arab Emirates, <br/> </>),
    icon: ["fab fa-facebook-f", "fab fa-twitter", "fab fa-instagram"]
}
const { number, email, des, icon } = footer_content;
const Footer = () => {

    const {data,isSuccess}=useGetGlobalConfigByIdQuery(1)
    // console.log(data,isSuccess,"SDFASDFsdfasdfsd");
    const contactPhone = isSuccess ? data?.data?.contactPhone : '';
    const contactEmail = isSuccess ? data?.data?.contactEmail : '';
    const address = isSuccess ? data?.data?.address : '';
    const facebookLink = isSuccess ? data?.data?.facebookLink : '#';
    const twitterLink = isSuccess ? data?.data?.twitterLink : '#';
    const instagramLink = isSuccess ? data?.data?.instagramLink : '#';
    const siteLogo = isSuccess ? data?.data?.siteLogo : '';
  const footerText=isSuccess ? data?.data?.footerText : '';
    return (
        <footer className="footer-area footer-bg" style={{backgroundImage:`url(/assets/img/bg/footer_bg.jpg)`}}>
            <div className="container">
                <div className="footer-top-wrap">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-contact-info">
                                {/* <h4 className="number">""</h4> */}

                                <Image  src={siteLogo||"/assets/img/logo/logo-final.png"} height={100} width={200}/>
<p>{footerText}</p>
                                    {/* <h4 className="number">{number}</h4>
                                    <h4 className="email">{email} </h4>
                                    <p>{des}</p>
                                    <ul className="footer-social list-wrap">
                                        {icon.map((li, i) => (
                                            <li key={i}><Link href="#"><i className={li}></i></Link></li>
                                        ))}
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                        {footer_data.map((item) => (
                            <div key={item.id} className={`col-xl-2 col-lg-3 col-md-6 col-sm-4 ${item.class}`}>
                                <div className="footer-widget">
                                    <h4 className="fw-title">{item.title}</h4>
                                    <ul className="footer-link">
                                        {item.links.map((li, index) => (
                                            <li key={index}><Link href={li.link}>{li.list}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                          <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-contact-info">
                                {/* <h4 className="number">""</h4> */}

                                    <h4 className="number">{isSuccess&& data.data.contactPhone}</h4>
                                    <h4 className="email">{isSuccess&& data.data.contactEmail} </h4>
                                    <p>{address}</p>
                                    <ul className="footer-social list-wrap">
                                    <li key={1}><Link href={facebookLink}><i className={icon[0]}></i></Link></li>
                                    <li key={2}><Link href={twitterLink}><i className={icon[1]}></i></Link></li>
                                    <li key={3}><Link href={instagramLink}><i className={icon[2]}></i></Link></li>

                                        {/* {icon.map((li, i) => (
                                            <li key={i}><Link href=""><i className={li}></i></Link></li>
                                        ))} */}
                                    </ul>
                                </div>
                            </div>
                        </div>


                    
                    </div>
                </div>
                <div className="copyright-wrap">
                    <p className="copyright-text">Copyright ©2025. Blue Whale Trading LLC. Design & Developed By <span> <a target='_blank' href='http://smartframeworkbd.com/'>Smart Framework</a></span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
