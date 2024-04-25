import features from "../assets/features.png"
import {motion} from "framer-motion"
import {fadeIn} from "../Varient"
 

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2x1 mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div className="lg:w-1/4"
         variants={fadeIn("right",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
        
        >
            <h3 className="text-3xl  text-primary font-bold lg:w-1/2 mb-3">Why we are better than others</h3>
            <p className="text-base text-tartiary">A simple paragraph is comprised of three major components.The first sentence,which is often a declarative sentense,is called the "topic-sentence ."</p>
        </motion.div>


        <motion.div className="w-full lg:w-3/4"
         variants={fadeIn("left",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
         >
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className="bg-[rbga(225 , 225, 225, 0.04)] h-96 shadow-3xl p-8 item-center flex rounded-[35px] justify-center item-center hover:-translate-y-4 transition-all duration-300 cursor-pointer ">
                <div>
                    <img src={features} alt="" />
                    <h5 className="font-semibold text-2xl text-primary px-5 text-center mt-5">Convenient study schedule </h5>
                </div>
            </div>
            <div className="bg-[rbga(225 , 225, 225, 0.04)] h-96 shadow-3xl p-8 item-center flex rounded-[35px] justify-center item-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16 ">
                <div>
                    <img src={features} alt="" />
                    <h5 className="font-semibold text-2xl text-primary px-5 text-center mt-5">Convenient study schedule </h5>
                </div>
            </div>
            <div className="bg-[rbga(225 , 225, 225, 0.04)] h-96 shadow-3xl p-8 item-center flex rounded-[35px] justify-center item-center hover:-translate-y-4 transition-all duration-300 cursor-pointer ">
                <div>
                    <img src={features} alt="" />
                    <h5 className="font-semibold text-2xl text-primary px-5 text-center mt-5">Convenient study schedule </h5>
                </div>
            </div>
            </div>
            
        </motion.div>
      </div>
    </div>
  )
}

export default Features
