import Footer from "./Footer"
import Header from "./Header"

const SiteLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default SiteLayout