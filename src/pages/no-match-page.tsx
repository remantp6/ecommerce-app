import NavLayout from '../components/main-layout/NavLayout';
import PageNotFound from '../assets/page-not-found.png';
import { Image } from 'antd';

const NoMatchPage = () => {
  return (
    <NavLayout>
      <div
      className="h-[calc(100dvh-133px)]"
        style={{
          backgroundColor: "#f0f2f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Image preview={false} src={PageNotFound} alt='page-not-found' loading='lazy'/>
      </div>
    </NavLayout>
  )
}

export default NoMatchPage