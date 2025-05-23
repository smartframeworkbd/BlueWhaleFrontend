"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGetBannersQuery } from '@/redux/Api/feature/bannerApi';

// Custom CSS for additional styling with blue theme
const styles = {
  slider: {
    height: '500px',
    position: 'relative',
    overflow: 'hidden'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // Enhanced blue gradient
    background: 'linear-gradient(90deg, rgba(0,48,130,0.9) 0%, rgba(0,78,179,0.75) 50%, rgba(65,105,225,0.3) 100%)',
    zIndex: 1
  },
  content: {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    padding: '0 20px'
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures the image covers the container without distortion
    transition: 'transform 0.5s ease'
  },
  title: {
    textShadow: '2px 2px 5px rgba(0,0,0,0.5)',
    fontWeight: 700,
    fontSize: '3.5rem',
    color: '#fff',
    fontFamily: '"Poppins", sans-serif'
  },
  description: {
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    maxWidth: '90%',
    fontSize: '1.25rem',
    color: '#fff',
    fontFamily: '"Open Sans", sans-serif'
  },
  readMoreBtn: {
    background: '#007bff',
    borderColor: '#007bff',
    transition: 'all 0.3s ease',
    fontWeight: 600,
    fontSize: '1rem',
    padding: '10px 20px',
    borderRadius: '30px'
  },
  contactBtn: {
    background: 'transparent',
    borderColor: '#fff',
    transition: 'all 0.3s ease',
    fontWeight: 600,
    fontSize: '1rem',
    padding: '10px 20px',
    borderRadius: '30px'
  }
};

// Define the product data
const products = [
  {
    id: 1,
    title: 'Quality Products for a Better Future',
    description: 'Explore a range of premium products designed to enhance your well-being and future health.',
    image: '/assets/img/others/1.jpg',
    readMoreLink: '/product',
    contactLink: '/product',
  },
  {
    id: 2,
    title: 'Elevate Your Health with Premium Choices',
    description: 'Our curated selection of high-quality products ensures you get the best for a healthier lifestyle.',
    image: '/assets/img/others/2.jpg',
    readMoreLink: '/products',
    contactLink: '/product',
  },



  {
    id: 3,
    title: 'Nourishing Innovations for a Healthier Life',
    description: 'Stay ahead with products that combine the best of nature and technology for your overall wellness',
    image: '/assets/img/others/3.jpg',
    readMoreLink: '/products/speaker',
    contactLink: '/contact?product=speaker',
  },
  {
    id: 4,
    title: 'Superior Products for a Sustainable Tomorrow',
    description: 'Invest in products that not only support your health but also contribute to a sustainable future.',
    image: '/assets/img/others/4.jpg',
    readMoreLink: '/product',
    contactLink: '/product',
  },
  {
    id: 5,
    title: 'Wellness Begins with the Right Products',
    description: 'Choose from our top-tier products to kickstart your journey to better health and vitality.',
    image: '/assets/img/others/5.jpg',
    readMoreLink: '/product',
    contactLink: '/product',
  },
];

export default function ProductSlider() {

  const {data,isLoading,isSuccess}=useGetBannersQuery()
  // console.log(data)
  return (
    <div className="container-fluid p-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="product-slider"
      >
        {isSuccess && data?.data?.map((product) => (
          <SwiperSlide key={product.id}>
            <div style={styles.slider}>
              {/* Background image */}
              <div style={styles.imageContainer}>
                <img 
                  src={product.imageUrl || "/api/placeholder/1920/1080"} 
                  alt={product.title}
                  style={styles.image}
                  className="img-hover"
                />
              </div>
              
              {/* Blue gradient overlay */}
              <div style={styles.overlay}></div>
              
              {/* Content */}
              <div className="container h-100">
                <div className="row h-100">
                  {/* Left side: Product info */}
                  <div className="col-md-6 d-flex flex-column justify-content-center text-white" style={styles.content}>
                    <h2 className="display-4 mb-3" style={styles.title}>{product.title}</h2>
                    <p className="lead mb-4" style={styles.description}>{product.shortDescription}</p>
                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                    
                    {/* {
                      product.button
                    } */}
                    
                      <a 
                        href={product.readMoreLink} 
                        className="btn btn-lg px-4 py-2"
                        style={styles.readMoreBtn}
                      >
                        Read More
                      </a>
                      <a 
                        href={product.contactLink} 
                        className="btn btn-lg px-4 py-2"
                        style={styles.contactBtn}
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                  
                  {/* Right side is empty as we're using full-width background image */}
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom CSS */}
      <style jsx global>{`
        .product-slider {
          height: 500px;
        }
        
        .product-slider .swiper-button-next,
        .product-slider .swiper-button-prev {
          color: #fff;
          background: rgba(0,48,130,0.7);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background 0.3s ease;
        }
        
        .product-slider .swiper-button-next:hover,
        .product-slider .swiper-button-prev:hover {
          background: rgba(0,78,179,0.9);
        }
        
        .product-slider .swiper-button-next:after,
        .product-slider .swiper-button-prev:after {
          font-size: 20px;
        }
        
        .product-slider .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #fff;
          opacity: 0.7;
        }
        
        .product-slider .swiper-pagination-bullet-active {
          opacity: 1;
          background: #007bff;
        }
        
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
        
        .img-hover:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}