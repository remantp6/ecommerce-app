import React from "react";
import { Breadcrumb, Typography } from "antd";
import banner from "../assets/hero-bg.jpeg";
import { Link, useLocation } from "react-router-dom";

const bannerStyle: React.CSSProperties = {
  height: "45vh",
  backgroundImage: `url(${banner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const breadcrumbStyle: React.CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: "12px 22px",
  borderRadius: "6px",
};

const { Text } = Typography;
const HeroBanner: React.FC = () => {
  const pathName = useLocation();
  const path = pathName.pathname
    .split("/")
    .filter((item) => item !== "")
    .toString();

  return (
    <div style={bannerStyle}>
      <Breadcrumb
        items={[
          { title: <Link to="/" className="!text-xl">Home</Link> },
          { title: <Text className="!capitalize !text-xl">{path}</Text> },
        ]}
        style={breadcrumbStyle}
      />
    </div>
  );
};

export default HeroBanner;
