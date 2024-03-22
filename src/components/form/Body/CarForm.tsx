"use client";
import FormInput from "@/components/form/FormInput";
import FormUploadFile from "@/components/form/FormUploadFile";
import { Col, Row } from "antd";
import FormTextArea from "../FormTextArea";

const CarForm = () => {
  return (
    <div>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        <h1 className="text-heading text-primary uppercase mb-5">Car Information</h1>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="text" name="title" size="large" label="Title" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormTextArea name="description" rows={3} label="Description" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormUploadFile name="image" label="Image" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="number" name="rentPerDay" size="large" label="Rent Per Day" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="number" name="seats" size="large" label="Seats" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="number" name="bags" size="large" label="Bags" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="number" name="dors" size="large" label="Dors" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CarForm;
