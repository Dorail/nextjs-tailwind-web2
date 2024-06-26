import React from 'react'
import Image from 'next/image'

function Bannerloadpage4() {
  return (
    <div id='Bannerloadpage4' className='drop-shadow-2xl'>
        <div className='container mx-auto my-0 flex justify-around'>

            <div className="left mt-48 text-[#fff] grid grid-cols-5 gap-14">

                <div className=''>
                    <div>
                        <Image className='flex justify-center items-center' src="/img/banner2/logo/ban2logo (1).png" width={150} height={150} alt="" ></Image>
                        <div>
                            <p className='text-[#999] flex justify-center items-center mt-5 text-2xl'>React</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div>
                        <Image className='flex justify-center items-center' src="/img/banner2/logo/ban2logo (2).png" width={150} height={150} alt="" ></Image>
                        <div>
                            <p className='text-[#999] flex justify-center items-center mt-5 text-2xl'>Defold</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div>
                        <Image className='flex justify-center items-center' src="/img/banner2/logo/ban2logo (3).png" width={150} height={150} alt="" ></Image>
                        <div>
                            <p className='text-[#999] flex justify-center items-center mt-5 text-2xl'>Javascript</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div>
                        <Image className='flex justify-center items-center' src="/img/banner2/logo/ban2logo (4).png" width={150} height={150} alt="" ></Image>
                        <div>
                            <p className='text-[#999] flex justify-center items-center mt-5 text-2xl'>Framer</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div>
                        <Image className='flex justify-center items-center' src="/img/banner2/logo/ban2logo (5).png" width={150} height={150} alt="" ></Image>
                        <div>
                            <p className='text-[#999] flex justify-center items-center mt-5 text-2xl'>Tizen</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div>
                        <Image className='flex justify-center items-center' src="/img/banner2/logo/ban2logo (6).png" width={150} height={150} alt="" ></Image>
                        <div>
                            <p className='text-[#999] flex justify-center items-center mt-5 text-2xl'>Flutter</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div>
                        <Image className='flex justify-center items-center' src="/img/banner2/logo/ban2logo (7).png" width={150} height={150} alt="" ></Image>
                        <div>
                            <p className='text-[#999] flex justify-center items-center mt-5 text-2xl'>C++</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div>
                        <Image className='flex justify-center items-center' src="/img/banner2/logo/ban2logo (8).png" width={150} height={150} alt="" ></Image>
                        <div>
                            <p className='text-[#999] flex justify-center items-center mt-5 text-2xl'>Unreal</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div>
                        <Image className='flex justify-center items-center' src="/img/banner2/logo/ban2logo (9).png" width={150} height={150} alt="" ></Image>
                        <div>
                            <p className='text-[#999] flex justify-center items-center mt-5 text-2xl'>maxOS</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div>
                        <Image className='flex justify-center items-center' src="/img/banner2/logo/ban2logo (11).png" width={150} height={150} alt="" ></Image>
                        <div>
                            <p className='text-[#999] flex justify-center items-center mt-5 text-2xl'>Rust</p>
                        </div>
                    </div>
                </div>

            

            </div>


            <div id='Ban2Right' className="right mt-48 relative">
                {/* <div className='flex'>
                    <Image className='flex mr-2' src="/img/banner2/banner2.png" alt="" />
                    <h1 className= height={150}'w-2/6  ></Image-clip-text text-transparent bg-gradient-to-r from-[#8F8FFF] to-[#FF8ADC] text-3xl font-semibold'>Rive Runtimes</h1>
                </div> */}
                <div className='grouptext w-3/5'>
                    <h1 className='text-[#fff] text-4xl font-semibold py-4 leading-tight'>Export interactive content or traditional formats</h1>
                    <p className='text-[#999] text-xl'>Export to the Rive format for real-time, interactive playback with our open-source runtimes. Use the Cloud Renderer to export to GIF, MP4, PNG, or WebM.</p>
                </div> 
                <button className='text-[#fff] py-2 px-8 bg-gradient-to-r from-[#D973BA] to-[#5656B8] rounded-full font-semibold mt-8 text-xl'>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default Bannerloadpage4