import banner from "../assets/banner.png"
import Banner from "../shared/Banner"
const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2x1 mx-auto mt-24 " id="home">
       <Banner banner={banner} heading="Develop your skills without diligence" subheading="A good example of a paragraph contain a topic sentence , details and conclusion.There are many different kind of animals that live in China . " btn1={"Get standard"} btn2={"Discount"}/>
      
    </div>
  )
}

export default Home
