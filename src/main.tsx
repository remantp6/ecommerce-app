import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@ant-design/v5-patch-for-react-19";
import "./index.css";
import App from "./App.tsx";
import { ConfigProvider, unstableSetRender } from "antd";
import { theme } from "./theme/theme.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Extend the container type
type ContainerWithRoot = Element & {
  _reactRoot?: ReturnType<typeof createRoot>;
};

// Create a client
const queryClient = new QueryClient();

// Set the render function for React 19 and antd v5 compatibility and remove after major release
unstableSetRender((node, container) => {
  const typedContainer = container as ContainerWithRoot;
  typedContainer._reactRoot ||= createRoot(container);
  const root = typedContainer._reactRoot!;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={theme}>
        <App />
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>
);
