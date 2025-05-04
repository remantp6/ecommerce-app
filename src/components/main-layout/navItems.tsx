import { HomeOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { Link } from "react-router-dom";

// types for menu items
type MenuItem = Required<MenuProps>["items"][number];

// menu items for the navbar
export const items: MenuItem[] = [
  {
    label: (
      <Link to="/" className="!text-black">
        <HomeOutlined style={{ fontSize: 24 }} />
      </Link>
    ),
    key: "home",
  },
  {
    label: (
      <Link to="/men" className="!text-black">
        Men
      </Link>
    ),
    key: "men",
  },
  {
    label: (
      <Link to="/women" className="!text-black">
        Women
      </Link>
    ),
    key: "women",
  },
  {
    label: (
      <Link to="/kids" className="!text-black">
        Kids
      </Link>
    ),
    key: "kids",
  },
];
