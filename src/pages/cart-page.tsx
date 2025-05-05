import { Image } from "antd"
import NavLayout from "../components/main-layout/NavLayout"
import TopHeader from "../components/TopHeader"
import emptyCart from '../assets/empty-cart.png'

const CartPage = () => {
  return (
    <NavLayout header={<TopHeader />} isNoAuthPage>
      <div className="min-h-[calc(100dvh-208px)] md:min-h-[calc(100dvh-170px)] flex items-center justify-center">
      <Image preview={false} src={emptyCart} alt="empty-cart"/>
      </div>
    </NavLayout>
  )
}

export default CartPage