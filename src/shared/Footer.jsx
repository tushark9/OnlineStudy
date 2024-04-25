import logo from "../assets/logo.png"
import fb from "../assets/fb.png"
import insta from "../assets/insta.png"
import twit from "../assets/twit.png"
import linkdin from "../assets/linkdin.png"


const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a href="/" className="text-2xl font-semibold flex space-x-3 items-center text-primary">
            <img src={logo} alt="" className="w-16 h-16 mt-1 rounded-xl inline-block items-center" /><span className="text-white">XYZ</span>
          </a>
          <p className="md:w-1/2">
            A simple paragraph is comprised of three major components.The first sentence,which is often a declarative sentense,is called the "topic-sentence ."
          </p>

          <div>
            <input type="email" name="email " id="email" placeholder="Your email" className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none" />

            <input type="submit" value="Subscribe " className="px-4 py-2 bg-secondary rounded-md  cursor-pointer hover:bg-white hover:text-primary font-bold duration-300 transition-all" />


          </div>
        </div>

        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">Overview</a>
              <a href="/" className="block hover:text-gray-300">Features </a>
              <a href="/" className="block hover:text-gray-300">About</a>
              <a href="/" className="block hover:text-gray-300">Pricing</a>
            </ul>
          </div>

          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">How does it works</a>
              <a href="/" className="block hover:text-gray-300">Where to ask question ? </a>
              <a href="/" className="block hover:text-gray-300">How to play?</a>
              <a href="/" className="block hover:text-gray-300">What is needed from this ?</a>
            </ul>
          </div>

          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contacts</h4>
            <ul className="space-y-3">
              <p className=" hover:text-gray-300">(+91) 649 8412 164 </p>
              <p className=" hover:text-gray-300">949844xxxx</p>
              <p className=" hover:text-gray-300">19/8 bisbb hsib </p>
              <p className=" hover:text-gray-300">Haryana</p>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>
          @XYZ copyright .---...--   All Copyright Reserved 
        </p>
        <div className="flex items-center space-x-5">
          <img src={fb} alt="" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
          <img src={insta} alt="" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
          <img src={twit} alt="" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
          <img src={linkdin} alt="" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300" />
 
        </div>
      </div>

    </div>
  )
}

export default Footer
