import { Button } from "antd";

const NavBar = () => {
  return (
    <Button
      style={{ backgroundColor: "blue", color: "white" }}
      onClick={() => alert("Button clicked!")}
    >
      click
    </Button>
  );
};

export default NavBar;
