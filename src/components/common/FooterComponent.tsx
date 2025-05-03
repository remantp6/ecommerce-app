import {
  Layout,
  Row,
  Col,
  Typography,
  Space,
  Image,
  Divider,
  Grid,
} from "antd";

const { Footer } = Layout;
const { Text, Title, Link } = Typography;
const { useBreakpoint } = Grid;

const FooterComponent = () => {
  const screens = useBreakpoint();
  const isXLOrAbove = screens.lg;

  return (
    <Footer
      style={{
        background: "#f5f5f5",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <Row gutter={[32, 24]} justify="center">
        <Col xs={24} sm={12} md={12} lg={6}>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPHBhdGggZD0iTTEyIDVjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyem0wLTJjLjUgMCAxIC41IDEgMXMtLjUgMS0xIDEtMS0uNS0xLTEgLjUtMSAxLTF6IiBmaWxsPSIjRkY2QjZCIi8+CiAgPHBhdGggZD0iTTE5LjUgMTBjLS44IDAtMS41LjctMS41IDEuNXY5aDN2LTljMC0uOC0uNy0xLjUtMS41LTEuNXoiIGZpbGw9IiNGRjlGMkMiLz4KICA8cGF0aCBkPSJNMTcgMTEuNWMwLS44LS43LTEuNS0xLjUtMS41aC0xMWMtLjggMC0xLjUuNy0xLjUgMS41djkuNWgxNHYtOS41eiIgZmlsbD0iI0ZGQ0M0QyIvPgogIDxwYXRoIGQ9Ik00LjUgOGMuOCAwIDEuNS0uNyAxLjUtMS41di0zYzAtLjgtLjctMS41LTEuNS0xLjVzLTEuNS43LTEuNSAxLjV2M2MwIC44LjcgMS41IDEuNSAxLjV6IiBmaWxsPSIjNzlDM0U1Ii8+CiAgPHBhdGggZD0iTTE5LjUgOGMuOCAwIDEuNS0uNyAxLjUtMS41di0zYzAtLjgtLjctMS41LTEuNS0xLjVzLTEuNS43LTEuNSAxLjV2M2MwIC44LjcgMS41IDEuNSAxLjV6IiBmaWxsPSIjNzlDM0U1Ii8+Cjwvc3ZnPg=="
            alt="Fashionify Logo"
            style={{ width: 40, height: 40, marginBottom: 10 }}
          />
          <Title level={isXLOrAbove ? 4 : 5}>Fashionify</Title>
          <Space direction="vertical">
            <Text>Your one-stop destination for trendy fashion for</Text>
            <Text>men, women, and kids.</Text>
            <Text>Email: support@fashionify.com</Text>
            <Text>Address: Kathmandu, Nepal</Text>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Title level={isXLOrAbove ? 4 : 5}>Shop</Title>
          <Space direction="vertical">
            <Link style={{ color: "#000" }}>Men</Link>
            <Link style={{ color: "#000" }}>Women</Link>
            <Link style={{ color: "#000" }}>Kids</Link>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Title level={isXLOrAbove ? 4 : 5}>Customer Care</Title>
          <Space direction="vertical">
            <Link style={{ color: "#000" }}>FAQs</Link>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Title level={isXLOrAbove ? 4 : 5}>Policies</Title>
          <Space direction="vertical">
            <Link style={{ color: "#000" }}>Terms of Service</Link>
            <Link style={{ color: "#000" }}>Privacy Policy</Link>
            <Link style={{ color: "#000" }}>Return Policy</Link>
          </Space>
        </Col>
      </Row>
      <Divider />
      <div style={{ margin: "38px 0 0 0" }}>
        <Text type="secondary" style={{ marginTop: "24px", fontSize: "18px" }}>
          ©{new Date().getFullYear()} Fashionify. All rights reserved.
        </Text>
      </div>
    </Footer>
  );
};

export default FooterComponent;
