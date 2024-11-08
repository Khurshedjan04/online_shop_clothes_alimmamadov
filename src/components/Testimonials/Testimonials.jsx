import Slider from "react-slick"
import { settings, TestimonialData } from "./TestimonialsConstants"

const Testimonials = () => {
    return (
        <div className="py-10 mb-10">
            <div className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">What our costumers are saying</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, molestias sint earum soluta natus dolores.</p>
                </div>
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div className="my-6">
                                <div key={data.id} className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative" >
                                    <div className="mb-4">
                                        <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                                    </div>
                                    <div className="flex items-center gap-4 flex-col">
                                        <div className="space-y-4">
                                            <p className="text-xs text-gray-400">{data.text}</p>
                                            <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials