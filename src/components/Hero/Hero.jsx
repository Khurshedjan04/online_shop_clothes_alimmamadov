import { ImageList, settings } from "./HeroConstants"
import Slider from "react-slick"
const Hero = () => {


    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
            {/* backgrund */}
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 rounded-3xl rotate-45 -z-9"></div>
            {/* hero */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center order-2 sm:order-1 sm:text-left">
                                    <h1
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                        className="text-5xl sm:text-6xl lg:text-7xl font-bold relative z-10">
                                        {data.title}
                                    </h1>
                                    <p
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                        className="text-sm">
                                        {data.description}
                                    </p>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                    >
                                        <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">Order Now
                                        </button>
                                    </div>
                                </div>
                                <div className="order-2 sm:order-1">
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                        className="relative z-10">
                                        <img src={data.img} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero