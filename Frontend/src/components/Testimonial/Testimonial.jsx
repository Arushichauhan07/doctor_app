import React from 'react';
import {Pagination} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import {HiStar} from 'react-icons/hi';

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}} breakpoints={{
        640:{
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 30,
        },
      }}>
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-[13px]'>
                <div className="flex items-Center gap-[13px]">
                    {/* <img src={patientAvatar} alt=''/> */}
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Anmol Kumar
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"I have taken medical services from them. They treat so well
                and they are providing the best medical services."</p>
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className='py-[30px] px-5 rounded-[13px]'>
                <div className="flex items-Center gap-[13px]">
                    {/* <img src={patientAvatar} alt=''/> */}
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                             Aman Verma
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"Beat facilities and best doctors at a single spot."</p>
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className='py-[30px] px-5 rounded-[13px]'>
                <div className="flex items-Center gap-[13px]">
                    {/* <img src={patientAvatar} alt=''/> */}
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Krish Sharma
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"I had a great experience be by treated by the best doctors I would love to
                    revisit again."</p>
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className='py-[30px] px-5 rounded-[13px]'>
                <div className="flex items-Center gap-[13px]">
                    {/* <img src={patientAvatar} alt=''/> */}
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Priya Gupta
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"It was convenient to book an appointment and find a doctor. I had a smooth experience"</p>
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className='py-[30px] px-5 rounded-[13px]'>
                <div className="flex items-Center gap-[13px]">
                    {/* <img src={patientAvatar} alt=''/> */}
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Ravi Shankar
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"Doctors are very soft spoken and very helpful."</p>
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className='py-[30px] px-5 rounded-[13px]'>
                <div className="flex items-Center gap-[13px]">
                    {/* <img src={patientAvatar} alt=''/> */}
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Jaya Sharma
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"The entire process was safe and secure."</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial;
