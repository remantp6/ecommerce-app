import NavLayout from "../components/main-layout/NavLayout";
import CustomCarousel from "../components/CustomCarousel";
import TopHeader from "../components/TopHeader";

const Home = () => {
  return (
    <NavLayout header={<TopHeader />}>
      <CustomCarousel />
    </NavLayout>
  );
};

export default Home;
