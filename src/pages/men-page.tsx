import HeroBanner from "../components/HeroBanner"
import NavLayout from "../components/main-layout/NavLayout"
import TopHeader from "../components/TopHeader"

const Men = () => {
  return (
    <NavLayout header={<TopHeader />} isNoAuthPage>
      <div className="min-h-[calc(100dvh-208px)] md:min-h-[calc(100dvh-170px)]">
      <HeroBanner/>
      </div>
    </NavLayout>
  )
}

export default Men