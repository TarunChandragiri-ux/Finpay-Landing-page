import React from 'react'
import logo from "../assets/logo.png";
import { solutionsLinks, companyLinks, learnLinks } from "../constants/index";

function Footer() {
    return (
        <div className="bg-[#E9F3F4]">
            <div className="container mx-auto pt-20 px-4 md:pt-20">
                <div className=" grid grid-cols-2 lg:grid-cols-5 gap-5 py-10">
                    <div>
                        <div className="flex items-center gap-2">
                            <img className="w-8" src={logo} alt="logo" />
                            <span className="text-3xl font-bold text-[#012332]">Finpay</span>
                        </div>
                    </div>
                    {/*  */}
                    <div >
                        <h3 className="font-bold text-xl mb-4"> Solutions</h3>
                        <ul>
                            {solutionsLinks.map((item, index) => (
                                <li key={index} className="text-gray-500 py-1">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*  */}
                    <div>
                        <h3 className="font-bold text-xl mb-4"> Company</h3>
                        <ul>
                            {companyLinks.map((item, index) => (
                                <li key={index} className="text-gray-500 py-1 ">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*  */}
                    <div>
                        <h3 className="font-bold text-xl mb-4"> learn</h3>
                        <ul>
                            {learnLinks.map((item, index) => (
                                <li key={index} className="text-gray-500 py-1">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*  */}

                    <div>
                        <div>
                            <h1 className="font-bold text-lg ">Follow us on :</h1>
                            <div className="flex items-center py-2 gap-2">
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke- linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></a>
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></a>
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg></a>
                            </div>

                        </div>
                    </div>
                </div>
                <hr className="border border-gray-300 " />
        
                    <div className="flex items-center justify-center py-8">
                    <h3 className="text-sm text-gray-400">©Finpay 2024. All rights reserved.</h3>
                    </div>
                

            </div>

        </div>
    )
}

export default Footer
