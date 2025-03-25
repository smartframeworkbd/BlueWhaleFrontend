import Image from "next/image";
import Link from "next/link";

const OffCanvas = ({ offcanvasOpen, setOffcanvasOpen }) => {
    return (
        <div className={` ${offcanvasOpen ? 'offcanvas-menu-visible' : ''}`}>
            <div className="offCanvas-wrap">
                <div onClick={() => setOffcanvasOpen(false)} className="offCanvas-toggle">
                    <Image src="/assets/img/icons/cross.svg" width={18} height={18} alt="icon" />
                </div>
                <div className="offCanvas-body">
                    <div className="offCanvas-content">
                        <h3 className="title">Premium Products for a Healthier Tomorrow</h3>
                        <p>
                            
                        Dedicated to delivering high-quality food, beverages, and personal care products, Blue Whale General Trading LLC empowers communities by providing sustainable, nourishing solutions for everyday living                            
                            </p>
                   
                   
                    </div>
                    <div className="offcanvas-contact footer-contact-info">
                        <h4 className="number">01816035135</h4>
                        <h4 className="email">info@bluewhale19.com</h4>
                        <p>Abu Dhabi, United Arab Emirates, <br /> </p>
                        <ul className="footer-social list-wrap">
                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="offCanvas-overlay"></div>
        </div>
    );
}

export default OffCanvas
