import NavLayout from '../components/main-layout/NavLayout';
import CustomCarousel from '../components/CustomCarousel';
import TopHeader from '../components/TopHeader';
import ProductList from '../components/product-list/ProductList';
import { products } from '../data/products';
import { Button } from 'antd';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const Home = () => {
	return (
		<NavLayout header={<TopHeader />} isNoAuthPage>
			<Button onClick={notify}>Check Toast</Button>
			<Toaster />
			<CustomCarousel />
			<ProductList products={products} />
		</NavLayout>
	);
};

export default Home;
