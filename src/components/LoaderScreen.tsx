import { Image, Typography } from "antd";

const { Title } = Typography;

const LoaderScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#cadbe4]">
      <div className="flex flex-col items-center">
        <Image
          preview={false}
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPHBhdGggZD0iTTEyIDVjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyem0wLTJjLjUgMCAxIC41IDEgMXMtLjUgMS0xIDEtMS0uNS0xLTEgLjUtMSAxLTF6IiBmaWxsPSIjRkY2QjZCIi8+CiAgPHBhdGggZD0iTTE5LjUgMTBjLS44IDAtMS41LjctMS41IDEuNXY5aDN2LTljMC0uOC0uNy0xLjUtMS41LTEuNXoiIGZpbGw9IiNGRjlGMkMiLz4KICA8cGF0aCBkPSJNMTcgMTEuNWMwLS44LS43LTEuNS0xLjUtMS41aC0xMWMtLjggMC0xLjUuNy0xLjUgMS41djkuNWgxNHYtOS41eiIgZmlsbD0iI0ZGQ0M0QyIvPgogIDxwYXRoIGQ9Ik00LjUgOGMuOCAwIDEuNS0uNyAxLjUtMS41di0zYzAtLjgtLjctMS41LTEuNS0xLjVzLTEuNS43LTEuNSAxLjV2M2MwIC44LjcgMS41IDEuNSAxLjV6IiBmaWxsPSIjNzlDM0U1Ii8+CiAgPHBhdGggZD0iTTE5LjUgOGMuOCAwIDEuNS0uNyAxLjUtMS41di0zYzAtLjgtLjctMS41LTEuNS0xLjVzLTEuNS43LTEuNSAxLjV2M2MwIC44LjcgMS41IDEuNSAxLjV6IiBmaWxsPSIjNzlDM0U1Ii8+Cjwvc3ZnPg=="
          alt="Fashionify Logo"
          style={{ width: 80, height: 80, marginBottom: 5 }}
        />
        <Title
          level={3}
          className="!mt-4 !text-[#1f1f1f] !font-semibold !font-sans"
        >
          Fashionify
        </Title>
      </div>
    </div>
  );
};

export default LoaderScreen;
