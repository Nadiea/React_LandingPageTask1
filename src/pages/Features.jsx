// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';




function Features() {
  return (
    <div className="bg-[#101727] w-[100%] ">
      <div className="  size-full bg-cover">
        <div className="w-full pt-[40px] lg:pt-[88px]  md:p-5 p-0 ">
          <div className="custom-container">
            <div className="mb-[50px] w-full text-left lg:text-center">
              <h1 className="header-font font-lexend mx-auto mb-[16px] w-[335px] text-[32px] font-semibold text-white/[0.9] lg:w-full lg:text-[48px]">
                MAZALA.AI 5 Amazing Features Tools
              </h1>
              <p className="font-inter mx-auto w-[335px] text-[16px] text-white/[0.7] lg:w-[665px] lg:text-[18px]"></p>
            </div>
            <div>
              <div
                className="tab-scroll flex min-w-full gap-[11px] px-[20px] text-center text-white lg:px-0"
                role="tablist"
                aria-orientation="horizontal"
              >


<Swiper
    breakpoints={{
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >

<SwiperSlide>

                <button
                  className="font-inter min-w-[180px] rounded-[10px] bg-[#0A101F] py-[16px] text-[14px] font-[500] text-white/[0.6] data-[selected]:bg-[#2D9F89] data-[selected]:text-white lg:min-w-[255px] lg:text-[20px]"
                  id="headlessui-tabs-tab-:r4:"
                  role="tab"
                  type="button"
                  aria-selected="true"
                  tabIndex="0"
                  data-headlessui-state="selected"
                  data-selected=""
                  aria-controls="headlessui-tabs-panel-:r9:"
                >
                  AI Video Subtitles
                </button>
                </SwiperSlide>
                <SwiperSlide>
                <button
                  className="font-inter min-w-[180px] rounded-[10px] bg-[#0A101F] py-[16px] text-[14px] font-[500] text-white/[0.6] data-[selected]:bg-[#2D9F89] data-[selected]:text-white lg:min-w-[255px] lg:text-[20px]"
                  id="headlessui-tabs-tab-:r5:"
                  role="tab"
                  type="button"
                  aria-selected="false"
                  tabIndex="-1"
                  data-headlessui-state=""
                  aria-controls="headlessui-tabs-panel-:ra:"
                >
                  YouTube Translation
                </button>
                </SwiperSlide>
                <SwiperSlide>
                <button
                  className="font-inter min-w-[180px] rounded-[10px] bg-[#0A101F] py-[16px] text-[14px] font-[500] text-white/[0.6] data-[selected]:bg-[#2D9F89] data-[selected]:text-white lg:min-w-[255px] lg:text-[20px]"
                  id="headlessui-tabs-tab-:r6:"
                  role="tab"
                  type="button"
                  aria-selected="false"
                  tabIndex="-1"
                  data-headlessui-state=""
                  aria-controls="headlessui-tabs-panel-:rb:"
                >
                  Images Generation
                </button>
                </SwiperSlide>
                <SwiperSlide>
                <button
                  className="font-inter min-w-[180px] rounded-[10px] bg-[#0A101F] py-[16px] text-[14px] font-[500] text-white/[0.6] data-[selected]:bg-[#2D9F89] data-[selected]:text-white lg:min-w-[255px] lg:text-[20px]"
                  id="headlessui-tabs-tab-:r7:"
                  role="tab"
                  type="button"
                  aria-selected="false"
                  tabIndex="-1"
                  data-headlessui-state=""
                  aria-controls="headlessui-tabs-panel-:rc:"
                >
                  Chatroom
                </button>
                </SwiperSlide>
                <SwiperSlide>
                <button
                  className="font-inter min-w-[180px] rounded-[10px] bg-[#0A101F] py-[16px] text-[14px] font-[500] text-white/[0.6] data-[selected]:bg-[#2D9F89] data-[selected]:text-white lg:min-w-[255px] lg:text-[20px]"
                  id="headlessui-tabs-tab-:r8:"
                  role="tab"
                  type="button"
                  aria-selected="false"
                  tabIndex="-1"
                  data-headlessui-state=""
                  aria-controls="headlessui-tabs-panel-:rd:"
                >
                  AI Assistant
                </button>
                </SwiperSlide>



                </Swiper>




              </div>
              <div className="mx-auto mt-[24px] block w-[335px] rounded-[12px] bg-[#324551] p-[8px] lg:hidden">
             
              </div>
              <div className="mt-[28px] flex justify-between px-[20px] text-white lg:mt-[100px] lg:px-0">
                <div
                  id="headlessui-tabs-panel-:r9:"
                  role="tabpanel"
                  tabIndex="0"
                  data-headlessui-state="selected"
                  data-selected=""
                  aria-labelledby="headlessui-tabs-tab-:r4:"
                >
                  <div className=" md:flex lg:flex xl:flex 2xl:flex ">
                  <div className="w-full lg:w-[670px]">
                    <p className="header-font mb-[20px] text-[20px] font-[500] text-white/[0.9] lg:text-[40px]">
                      Transformative AI Elevating Videos with Automated
                      Subtitling
                    </p>
                    <p className="font-inter text-[16px] text-white/[0.55] lg:text-[20px]">
                      Step into the realm of cutting-edge video enhancement with
                      our AI-driven subtitle tool, revolutionizing content
                      accessibility.
                    </p>
                    <ul className="mt-[40px]">
                      <li className="font-inter mb-[24px] flex items-start gap-[16px] text-[16px]  lg:text-[18px]">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M11.759 0.25C10.1354 9.0693 8.81923 10.3854 0 12.009C8.8193 13.6327 10.1354 14.9488 11.759 23.7681C13.3827 14.9488 14.6988 13.6327 23.5181 12.009C14.6988 10.3854 13.3826 9.0693 11.759 0.25ZM24.5217 16.7945C23.4893 22.4032 22.6521 23.2403 17.0434 24.2728C22.6521 25.3053 23.4893 26.1424 24.5217 31.7511C25.5542 26.1424 26.3914 25.3052 31.9999 24.2728C26.3912 23.2403 25.5542 22.4032 24.5217 16.7945Z"
                              fill="#5AC2AC"
                            ></path>
                          </svg>
                        </span>
                        <span>
                          Empower your content with accurate and timely
                          subtitles, effortlessly generated by advanced AI
                          algorithms.
                        </span>
                      </li>
                      <li className="font-inter flex items-start gap-[16px] text-[16px]  lg:text-[18px]">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M11.759 0.25C10.1354 9.0693 8.81923 10.3854 0 12.009C8.8193 13.6327 10.1354 14.9488 11.759 23.7681C13.3827 14.9488 14.6988 13.6327 23.5181 12.009C14.6988 10.3854 13.3826 9.0693 11.759 0.25ZM24.5217 16.7945C23.4893 22.4032 22.6521 23.2403 17.0434 24.2728C22.6521 25.3053 23.4893 26.1424 24.5217 31.7511C25.5542 26.1424 26.3914 25.3052 31.9999 24.2728C26.3912 23.2403 25.5542 22.4032 24.5217 16.7945Z"
                              fill="#5AC2AC"
                            ></path>
                          </svg>
                        </span>
                        <span>
                          Enhance viewer retention and comprehension by
                          providing subtitles in multiple languages, facilitated
                          by automated translation.
                        </span>
                      </li>
                      <li className="mt-[66px] flex w-full items-center justify-center gap-[16px] text-[18px] lg:justify-start">
                        <a
                          className="font-inter font-500 block w-full rounded-[12px] bg-[#2D9F89] px-0 py-[19px] text-center text-[16px] text-white lg:inline lg:w-auto lg:px-[36px] lg:text-[20px]"
                          href="/price"
                        >
                          Try it for free
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full lg:w-[650px]"><img className='' src="/src/assets/image/banner.png" alt="bannar"></img></div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Features;
