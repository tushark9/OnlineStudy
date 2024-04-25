import Banner from "../shared/Banner"
import banner from "../assets/banner.png"

const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
        <Banner banner={banner} heading="Each Student an share their discount code from friends " 
        subheading="A good example of a paragraph contain a topic sentence , details and conclusion.There are many different kind of animals that live in China . " btn1={"Checkout"} btn2={"Know More..."} />
      
    </div>
  )
}

export default Newsletter
