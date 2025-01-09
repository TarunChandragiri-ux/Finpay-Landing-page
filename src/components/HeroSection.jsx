import { ArrowUpRight } from "lucide-react";
import hero from "../assets/hero.png";
import React from 'react'

function HeroSection() {
    return (
        <div className="bg-[#E9F3F4]">
            <div className="container mx-auto p-4 md:py-16">
                <div className="flex flex-col items-center md:flex-row gap-10 ">
                    {/* left section */}
                    <div className="flex-1 xl:ml-28">
                        <h1 className="text-4xl xl:text-6xl text-[#012332] py-2 xl:leading-[80px]"><span className="md:font-bold text-4xl xl:text-7xl">Get paid early</span> save automatically all your pay.</h1>
                        <p className="text-[#2A8E9E] text-xl py-2">Support small businesses with simple invoicing, powerful integrations, and cash flow management tools.</p>
                        <button className="flex bg-[#28AE9E] rounded-lg px-3 py-2 border border-white my-6 md:my-10 text-xl gap-2 text-white"> Get Started <ArrowUpRight /> </button>
                        <div className="flex gap-4 text-[#012332] text-2xl lg:text-4xl justify-between font-bold">
                            <h1>Klarna.</h1>
                            <h1>coinbase</h1>
                            <h1>instacart</h1>
                        </div>
                    </div>
                    {/* Right section */}
                    <div className="flex-1">
                        <img className="shadow-lg rounded-xl lg:ml-20 xl:ml-40" src={hero} alt="payment image" />


                    </div>

                </div>

            </div>
        </div>
    )
}

export default HeroSection
