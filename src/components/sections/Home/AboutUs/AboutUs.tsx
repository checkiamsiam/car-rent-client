import { Button } from "antd";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="row justify-content-between align-items-center px-1 ps-4">
      <div className="col-lg-4 col-md-4">
        <h2 style={{ color: "#43121d" }} className="fs-1 fw-bold">
          Good food choices
          <br />
          are good
          <br />
          investments.
        </h2>
        <p className="mt-3 mb-4">
          Becoming a cook is my dream since I was little, and here
          <br />I have found a way to make it happen.
        </p>
        <div className="mt-2 mb-3">
          <Button className="border-0 me-3" style={{ background: "#a82d49" }}>
            Order Now <FaShoppingBasket />
          </Button>
          <Button type="primary">Learn More</Button>
        </div>
      </div>
      <div className="col-lg-8 col-md-8">
        <img
          className="img-fluid w-100"
          src="https://img.freepik.com/free-photo/vegan-almond-milk-chia-seeds-pudding-with-banana-kiwi_2829-5952.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
