import Graph from "../assets/Graph.png";


function WhyUs() {
    return (
        <div>
            <div className="container mx-auto p-4 md:py-16">
                <div className="xl:mx-28 text-center">
                    <p className="text-[#2A8E9E]">WHY US</p>
                    <p className="text-4xl font-medium">Why they prefer Finpay</p>
                </div>
                {/* block 1 */}
                <div className=" flex flex-col lg:flex-row gap-10 py-10 items-center justify-center">
                    <div className="border rounded-xl shadow-xs bg-[#F5F9F9] px-6 py-10 max-w-[450px]">
                        <p className="text-[#2A8E9E] text-5xl font-bold py-2">3K+</p>
                        <p className="text-3xl py-4">Businesses already running on Finpay</p>
                    </div>
                    {/* block 2 */}
                    <div className="border rounded-xl shadow-xs bg-[#F5F9F9] px-6 py-10 max-w-[450px]">
                        <p className="text-3xl py-2">Instant withdraw your funds at any time</p>
                        <div className="flex gap-2 py-4 items-center justify-center">
                            <div><svg width="48" stroke-width="1.5" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20Z" stroke="currentColor" />
                                <path d="M16.5 14C16.2239 14 16 13.7761 16 13.5C16 13.2239 16.2239 13 16.5 13C16.7761 13 17 13.2239 17 13.5C17 13.7761 16.7761 14 16.5 14Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18 7V5.60322C18 4.28916 16.7544 3.33217 15.4847 3.67075L4.48467 6.60409C3.60917 6.83756 3 7.63046 3 8.53656V9" stroke="currentColor" />
                            </svg>
                            </div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-left"><path d="m16 3 4 4-4 4" /><path d="M20 7H4" /><path d="m8 21-4-4 4-4" /><path d="M4 17h16" /></svg></div>
                            <div><svg viewBox="0 0 512 512" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m496 128v16a8 8 0 0 1 -8 8h-24v12c0 6.627-5.373 12-12 12h-392c-6.627 0-12-5.373-12-12v-12h-24a8 8 0 0 1 -8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88a8 8 0 0 1 4.941 7.392zm-24 304h-432c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zm-376-240v192h-36c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36v-192h-64v192h-64v-192h-64v192h-64v-192z" /></svg></div>
                        </div>
                    </div>
                </div>
                <div className="justify-self-center">
                    <div className="lg:mx-6 border rounded-lg shadow-md px-10 pt-10 flex flex-col lg:flex-row  items-center gap-8">
                        <div className="lg:w-2/6">
                            <p className="text-2xl">No asset volatility</p>
                            <p className="text-gray-400 text-sm py-4">Generate returns on your cash reserves without making any investments.</p>
                        </div>
                        <div className="lg:w-4/6 mt-4 lg:mt-0 flex justify-center">
                            <img className=" w-full " src={Graph} alt="Graph" />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default WhyUs
