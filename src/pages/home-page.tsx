import NavLayout from '../components/main-layout/NavLayout';
import CustomCarousel from '../components/CustomCarousel';
import TopHeader from '../components/TopHeader';
import ProductList from '../components/product-list/ProductList';
import { products } from '../data/products';

const Home = () => {
	return (
		<NavLayout header={<TopHeader />} isNoAuthPage>
			<CustomCarousel />
			<ProductList products={products} />
		</NavLayout>
	);
};

export default Home;
