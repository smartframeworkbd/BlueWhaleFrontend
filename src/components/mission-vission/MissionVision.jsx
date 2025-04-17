import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MissionVision = ({ childContentData }) => {
    if (!childContentData || childContentData?.data?.length === 0) return null;
    return (
        <section style={{
            backgroundColor: "#f8f9fa",
            position: "relative",
            overflow: "hidden",
            padding: "3rem 0"
        }}>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "5px",
                background: "linear-gradient(90deg, #4e73df, #224abe, #1cc88a)"
            }}></div>
            
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <h2 style={{
                            fontWeight: 700,
                            color: "#2e3a4d",
                            position: "relative",
                            paddingBottom: "15px",
                            textAlign: "center",
                            marginBottom: "3rem"
                        }}>
                            Our Purpose
                            <span style={{
                                content: "",
                                position: "absolute",
                                bottom: 0,
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "80px",
                                height: "3px",
                                background: "linear-gradient(90deg, #4e73df, #1cc88a)"
                            }}></span>
                        </h2>

                        <Row className="gy-4">


                            {
                                childContentData.map(data=>
                                    <Col md={6} key={item.Id || idx}>
                                    <div style={{
                                      background: "white",
                                      borderRadius: "10px",
                                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                      borderTop: "4px solid #4e73df",
                                      padding: "2rem",
                                      height: "100%"
                                    }}>
                                      <div style={{
                                        width: "70px",
                                        height: "70px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "50%",
                                        backgroundColor: "rgba(78, 115, 223, 0.1)",
                                        color: "#4e73df",
                                        marginBottom: "1.5rem"
                                      }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                        </svg>
                                      </div>
                                      <h3 style={{ color: "#4e73df", marginBottom: "1rem" }}>{item.title}</h3>
                                      <div style={{ lineHeight: "1.6" }}>
                                        {item.description.split("\n").map((line, index) => {
                                          if (line.trim().startsWith("*")) {
                                            return null; // handled below in list block
                                          }
                                          if (line.trim().toLowerCase().includes("core values")) {
                                            return <h5 key={index} style={{ marginTop: "1.5rem", color: "#4e73df" }}>{line.trim()}</h5>;
                                          }
                                          return <p key={index}>{line}</p>;
                                        })}
                                
                                        {/* Main List */}
                                        <ul style={{ paddingLeft: "1.2rem" }}>
                                          {item.description.split("\n").filter(line => line.trim().startsWith("*")).map((line, liIndex) => {
                                            const content = line.replace(/^\*\s*/, "");
                                            const parts = content.split(":");
                                            if (parts.length > 1) {
                                              return <li key={liIndex}><strong>{parts[0]}:</strong> {parts.slice(1).join(":").trim()}</li>;
                                            }
                                            return <li key={liIndex}>{content}</li>;
                                          })}
                                        </ul>
                                      </div>
                                    </div>
                                  </Col>
                                )
                            }
                           

                            <Col md={6}>
                                <div style={{
                                    background: "white",
                                    borderRadius: "10px",
                                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    borderTop: "4px solid #1cc88a",
                                    padding: "2rem",
                                    height: "100%"
                                }}>
                                    <div style={{
                                        width: "70px",
                                        height: "70px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "50%",
                                        backgroundColor: "rgba(28, 200, 138, 0.1)",
                                        color: "#1cc88a",
                                        marginBottom: "1.5rem"
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </div>
                                    <h3 style={{ color: "#1cc88a", marginBottom: "1rem" }}>Our Vision</h3>
                                    <div style={{ lineHeight: "1.6" }}>
                                        <p>Our vision is to be the leading provider of high-quality food, beverages, and personal care products in the UAE, empowering individuals and communities to lead healthier, better lives.</p>
                                        
                                        <p style={{ marginTop: "1rem" }}>Through our commitment to:</p>
                                        <ul style={{ paddingLeft: "1.2rem" }}>
                                            <li>Innovation in product development</li>
                                            <li>Sustainable business practices</li>
                                            <li>Exceptional customer satisfaction</li>
                                        </ul>
                                        
                                        <p style={{ marginTop: "1rem" }}>We strive to:</p>
                                        <ul style={{ paddingLeft: "1.2rem" }}>
                                            <li>Be the trusted partner for premium everyday products</li>
                                            <li>Foster a global network of ethical suppliers</li>
                                            <li>Create value through continuous improvement</li>
                                            <li>Drive positive change in our industry and communities</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MissionVision;