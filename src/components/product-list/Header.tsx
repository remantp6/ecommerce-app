import { Col, Grid, Row, Typography } from "antd";

// define the type for the header props
type HeaderProps = {
  label: string;
  desc: string;
};

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const Header: React.FC<HeaderProps> = ({label, desc}) => {
    const screens = useBreakpoint();
  const isXLOrAbove = screens.lg;

  return (
    <Row justify={"center"} className="md:!pt-5 lg:!pt-12 xl:!pt-14">
      <Col className="!text-center">
        <Title level={isXLOrAbove ? 1 : 3} className="!uppercase !mb-1">{label}</Title>
        <Text className="!text-gray-400 lg:!text-xl !font-[400]">{desc}</Text>
      </Col>
    </Row>
  );
};

export default Header;
