import { Col, Row } from "antd";
import { Typography } from "antd";

const TopHeader = () => {
  const { Paragraph } = Typography;

  return (
    <Row>
      <Col span={24} className="bg-black py-3">
        <Paragraph className="!text-white !mb-0 text-center !py-4 !text-sm md:!text-lg !font-medium">
          Get 25% off This Summer Sale. Grab it now!{" "}
        </Paragraph>
      </Col>
    </Row>
  );
};

export default TopHeader;
