"use client"
import Link from "next/link";
import { useGetGlobalConfigByIdQuery } from "@/redux/Api/feature/globalConfigApi";
import { useState } from "react";
import axios from "axios"; // Or use your custom fetcher if you prefer

const ContactArea = () => {
    const { data, isSuccess } = useGetGlobalConfigByIdQuery(2);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            })         
               alert("Message sent successfully!");
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            alert("Failed to send message.");
        }
    };

    const contact_data = isSuccess ? [
        {
            id: 1,
            icon: "flaticon-map",
            title: "Get in Touch",
            des: (<>Our support team is available Monday to Friday from 9 AM to 5 PM EST.</>),
            btn: data?.data?.address || "Address not available",
        },
        {
            id: 2,
            icon: "flaticon-open-mail",
            title: "Send Us Email",
            des: (<>Drop us an email and you'll receive a reply within 24 hours.</>),
            btn: data?.data?.contactEmail || "Email not available",
        },
        {
            id: 3,
            icon: "flaticon-phone-call",
            title: "Make a Call",
            des: (<>Give us a ring Monday to Friday from 9 AM to 5 PM EST.</>),
            btn: data?.data?.contactPhone || "Phone not available",
        }
    ] : [];

    return (
        <section className="contact-area">
            <div className="contact-info-wrapper">
                <div className="container">
                    <div className="row justify-content-around">
                        {contact_data.map((item) => (
                            <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="contact-info-item text-center">
                                    <div className="contact-info-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <h5 className="title">{item.title}</h5>
                                        <p>{item.des}</p>
                                        <Link href="#" className="contact-info-link">{item.btn}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="map" style={{ backgroundImage: `url(assets/img/bg/map.jpg)` }}></div>

            <div className="contact-form-wrap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-7 col-md-9 col-sm-10">
                            <div className="section-title text-center mb-50">
                                <h2 className="title">Questions or Comments? Get in Touch</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xxl-8 col-xl-9 col-lg-10">
                            <form onSubmit={handleSubmit} className="contact-form text-center">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your full name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your email address"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-grp">
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Write your message..."
                                        ></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn">Send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactArea;
