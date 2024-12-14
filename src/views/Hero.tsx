import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImage from 'public/hero.png';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pb-16 px-6 md:px-28 flex flex-col lg:flex-row items-center lg:gap-x-16">
            {/* Decorative Circles */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Text Section */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                <Badge className="py-3 px-6 rounded-full bg-yellow-500/20 text-yellow-400 tracking-widest font-medium uppercase animate-slide-in">
                    Trending Now
                </Badge>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight animate-slide-in">
                    Redefine Your Style <br />
                    <span className="text-yellow-400">With Streetwear</span>
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed animate-fade-in-up">
                    Stay ahead of the trends with our exclusive industrial-inspired streetwear. 
                    Feel the bold, live the unique, and wear your attitude.
                </p>
                <Button className="bg-yellow-500 text-gray-900 font-bold text-lg px-10 py-3 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 animate-bounce-in">
                    Start Shopping
                </Button>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center items-center relative">
                <div className="relative w-full max-w-md lg:max-w-lg animate-zoom-in">
                    <Image 
                        src={heroImage} 
                        alt="Hero Image"
                        className="rounded-lg shadow-xl"
                        priority
                    />
                    {/* Decorative Glow */}
                    <div className="absolute -inset-2 bg-yellow-500/20 rounded-lg blur-lg animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
