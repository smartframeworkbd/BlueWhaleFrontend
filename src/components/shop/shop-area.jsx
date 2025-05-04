"use client";
import { useState } from "react";
import {
  useGetProductCategoryQuery,
  useGetProductQuery,
} from "@/redux/Api/feature/productApi";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ShopArea = () => {
  const { data, isSuccess } = useGetProductQuery();
  const { data: categoryData, isSuccess: categorySuccess } =
    useGetProductCategoryQuery();

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? data?.data.filter((item) => item.categoryId === selectedCategory)
    : data?.data;

  const handleShowModal = (productName) => {
    setSelectedProductName(productName);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ name: "", email: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      productName: selectedProductName,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        alert("Submitted successfully!");
        handleCloseModal();
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred.");
    }
  };

  return (
    <section
      className="shop-area asdfghj"
      style={{
        // backgroundImage: `url(/assets/img/bg/footer_bg.jpg)`,
        background: "#011529",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Categories Sidebar */}
          <div className="col-md-3">
            <div className="category-sidebar">
              <h3>Categories</h3>
              <ul>
                {categorySuccess &&
                  categoryData?.data?.map((item) => (
                    <li
                      key={item.Id}
                      onClick={() => handleCategoryClick(item.Id)}
                    >
                      {item?.categoryName}
                    </li>
                  ))}
                <li onClick={() => handleCategoryClick(null)}>
                  All Categories
                </li>
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-md-9">
            <div className="cycure-shop-product-main">
              <div className="row">
                {isSuccess &&
                  filteredProducts?.map((item) => {
                    const imageArray = JSON.parse(item?.productImage);
                    const imageUrl =
                      (imageArray && imageArray[0]?.imageUrl) ||
                      "/default-image.jpg";

                    return (
                      <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="shop-item">
                          <div className="product-thumb">
                            <Link href={`/shop-details/${item?.productSlug}`}>
                              <Image
                                src={imageUrl}
                                width={338}
                                height={250}
                                alt="img"
                              />
                            </Link>
                            {item.productPriceIsDisplayed && (
                              <div className="price-wrap">
                                <span className="amount">
                                  ${item.productPrice}.00
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="product-content">
                            <h4 className="title text-black">
                              <Link href={`/shop-details/${item?.productSlug}`}>
                                {item.productTitle}
                              </Link>
                            </h4>
                            <Button
                              variant="primary"
                              onClick={() => handleShowModal(item.productTitle)}
                            >
                              Request Info
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Request Info for {selectedProductName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default ShopArea;
