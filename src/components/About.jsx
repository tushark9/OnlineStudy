import banner from "../assets/banner.png"
import about from "../assets/about.png"
import {motion} from "framer-motion"
import {fadeIn} from "../Varient"


const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div className="md:w-1/2"
             variants={fadeIn("left",0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false,amount:0.7}}>
                <img src={banner} alt="" />
            </motion.div>

            <motion.div className="md:w-2/5"
             variants={fadeIn("up",0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false,amount:0.7}}>
                <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
                    We have been improving our products <span className="text-secondary">for many years.</span>
                </h2>
                <p className="text-tartiary text-lg mb-7">
                    A good example of paragraph contains a topic conclusion . Their are many different kind of animals that live in china .
                </p>
                <button className="btnPrimary">Get started</button>
            </motion.div>
        </div>

        <div className="h-8"></div>



        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
            <motion.div className="md:w-1/2"
             variants={fadeIn("right",0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false,amount:0.7}}>
                <img src={about} alt="" />
            </motion.div>
            <div className="md:w-2/5">
                <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
                    You can practice at any <span className="text-secondary">time convinent for you.  </span>
                </h2>
                <p className="text-tartiary text-lg mb-7">
                    A good example of paragraph contains a topic conclusion . Their are many different kind of animals that live in china .
                </p>
                <button className="btnPrimary">Get started</button>
            </div>
        </div>

        

        
      
    </div>
  )
}

export default About
