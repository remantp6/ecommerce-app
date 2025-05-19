import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const ErrorFallback = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#cadbe4] px-4">
      <Card
        className="w-full max-w-md bg-white text-center"
      >
        <Title
          level={3}
          className="!mt-2 !text-[#b00020] !font-semibold !font-sans"
        >
          Oops! Something went wrong.
        </Title>
        <Paragraph className="text-[#5c5c5c] px-4">
          We're sorry for the inconvenience. Please try refreshing the page or
          come back later.
        </Paragraph>
      </Card>
    </div>
  );
};

export default ErrorFallback;
