export default function Pricing() {
  return (
    <div>
      <div className=" bg-[#131A2C]">
        <div className="">
          <div className="w-full bg-[#131A2C] py-[40px] lg:py-[100px]">
            <div className="custom-container">
              <div className="mb-[50px] w-full text-left lg:text-center">
                <h1 className="header-font font-lexend mx-auto mb-[16px] w-[335px] text-[32px] font-semibold text-white/[0.9] lg:w-full lg:text-[48px]">
                  MAZALA.AI Pricing Plans
                </h1>
                <p className="font-inter mx-auto w-[335px] text-[16px] text-white/[0.7] lg:w-[665px] lg:text-[18px]">
                  Explore our flexible pricing plans on Mazala.AI, designed to
                  accommodate every creative journey and budget.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex w-full flex-col items-center justify-center gap-[72px]">
                  <div
                    className="font-inter flex h-[57px] w-[90%] items-center justify-center gap-[10px] rounded-full border border-[#1A1A1A] bg-[#101727] p-[10px] text-[16px] text-white lg:h-[68px] lg:w-auto lg:text-[20px]"
                    role="tablist"
                    aria-orientation="horizontal"
                  >
                    <button
                      className="flex h-[48px] items-center justify-center gap-[10px] rounded-full px-[24px] py-[10px] text-white/[0.6] focus:outline-none data-[hover]:bg-white/5 data-[selected]:bg-[#2D9F89] data-[selected]:text-[#ffffff] data-[focus]:outline-none data-[focus]:outline-none w-full lg:w-auto"
                      id="headlessui-tabs-tab-:r1e:"
                      role="tab"
                      type="button"
                      aria-selected="true"
                      tabIndex="0"
                      data-headlessui-state="selected"
                      data-selected=""
                      aria-controls="headlessui-tabs-panel-:r1g:"
                    >
                      Monthly
                    </button>
                    <button
                      className="flex h-[48px] items-center justify-center gap-[10px] rounded-full px-[24px] py-[10px] text-white/[0.6] focus:outline-none data-[hover]:bg-white/5 data-[selected]:bg-[#2D9F89] data-[selected]:text-[#ffffff] data-[focus]:outline-none data-[focus]:outline-none w-full lg:w-auto"
                      id="headlessui-tabs-tab-:r1f:"
                      role="tab"
                      type="button"
                      aria-selected="false"
                      tabIndex="-1"
                      data-headlessui-state=""
                      aria-controls="headlessui-tabs-panel-:r1h:"
                    >
                      Yearly
                    </button>
                  </div>
                  <div className="w-full">
                    <div
                      className="w-full"
                      id="headlessui-tabs-panel-:r1g:"
                      role="tabpanel"
                      tabIndex="0"
                      data-headlessui-state="selected"
                      data-selected=""
                      aria-labelledby="headlessui-tabs-tab-:r1e:"
                    >
                      <div className=" bg-[#131A2C]">
                        <div className="swiper-wrapper md:flex justify-center gap-10">

                          <div
                            className="swiper-slide swiper-slide-active  "
                            data-swiper-slide-index="0"
                            className="w-[406.667px] mr-50px   md:mt-56 mt-0 md:block hidden"
                          >
                            <div className="flex w-full flex-col gap-[40px] rounded-[16px] border bg-[#101727]  border-[#2d9f8930]">
                              <div className="flex flex-col items-center gap-[30px] px-[32px] py-[50px]">
                                <div className="flex w-full items-center justify-between gap-[10px]">
                                  <div className="w-full">
                                    <h1 className="flex-1 text-[24px] font-medium text-[#ffffff]">
                                      Basic Plan
                                    </h1>
                                  </div>
                                  <div className="flex w-full items-center justify-center rounded-full border border-[#1F665B] bg-[#121A2B] p-[10px]">
                                    <h1 className="text-center text-[16px] font-medium text-[#2D9F89] lg:text-[18px]">
                                      Save 20%
                                    </h1>
                                  </div>
                                </div>
                                <div className="flex w-full border border-[#ffffff0d] opacity-70"></div>
                                <div className="flex w-full items-start text-left ">
                                  <h1 className="text-[40px] font-semibold text-[#2D9F89]">
                                    $0
                                    <span className="text-[18px] font-medium text-[#2D9F89]">
                                      /month
                                    </span>
                                  </h1>
                                </div>
                                <div className="flex w-full border border-[#ffffff0d] opacity-70"></div>
                                <div className="flex w-full flex-col gap-[20px] ">
                                  <div className="flex">
                                    <h1 className="text-[24px] font-medium text-[#ffffff]">
                                      Featured Services
                                    </h1>
                                  </div>
                                  <div className="flex w-full flex-col gap-[20px]">
                                    <div className="flex w-full items-center justify-between rounded-[8px] border border-[#2d9f891f] bg-[#121A2B] px-[20px] py-[16px]">
                                      <div className="w-full items-center gap-4">
                                        <h1 className="w-full text-[14px] text-[#ffffff] lg:text-[16px]">
                                          Video subtitles
                                        </h1>
                                      </div>
                                      <div className="w-full text-right text-[16px] font-medium text-[#A0A3AA]">
                                        <h1>10 | Per Day</h1>
                                      </div>
                                    </div>
                                    <div className="flex w-full items-center justify-between rounded-[8px] border border-[#2d9f891f] bg-[#121A2B] px-[20px] py-[16px]">
                                      <div className="w-full items-center gap-4">
                                        <h1 className="w-full text-[14px] text-[#ffffff] lg:text-[16px]">
                                          Images Generation
                                        </h1>
                                      </div>
                                      <div className="w-full text-right text-[16px] font-medium text-[#A0A3AA]">
                                        <h1>10 | Per Day</h1>
                                      </div>
                                    </div>
                                    <div className="flex w-full items-center justify-between rounded-[8px] border border-[#2d9f891f] bg-[#121A2B] px-[20px] py-[16px]">
                                      <div className="w-full items-center gap-4">
                                        <h1 className="w-full text-[14px] text-[#ffffff] lg:text-[16px]">
                                          Chatromm
                                        </h1>
                                      </div>
                                      <div className="w-full text-right text-[16px] font-medium text-[#A0A3AA]">
                                        <h1>10 | Per Day</h1>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full border border-[#1A1A1A]"></div>
                                <div
                                  tabIndex="0"
                                  role="button"
                                  className="flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-[12px] border px-[10px] py-[14px] border-[#2d9f891c] bg-[#121A2B] text-[#2D9F89]"
                                >
                                  <h1 className="h-[30px] w-[100px] text-[18px] font-medium">
                                    Get Started
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="swiper-slide swiper-slide-next w-[406.667px]  md:block hidden"
                            data-swiper-slide-index="1"
                            className=" w-[406.667px]; margin-right: 50px;"
                          >
                            <div className="flex w-full flex-col gap-[40px] rounded-[16px] border bg-[#101727]  border-[#2D9F89]">
                              <div className="flex w-full items-center justify-center rounded-t-[16px] bg-[#2D9F89] py-[12px]">
                                <h1 className="text-[24px] font-medium text-[#ffffff]">
                                  Most Popular
                                </h1>
                              </div>
                              <div className="flex flex-col items-center gap-[30px] px-[32px] py-[50px]">
                                <div className="flex w-full items-center justify-between gap-[10px]">
                                  <div className="w-full">
                                    <h1 className="flex-1 text-[24px] font-medium text-[#ffffff]">
                                      Business Plan
                                    </h1>
                                  </div>
                                  <div className="flex w-full items-center justify-center rounded-full border border-[#1F665B] bg-[#121A2B] p-[10px]">
                                    <h1 className="text-center text-[16px] font-medium text-[#2D9F89] lg:text-[18px]">
                                      Save 20%
                                    </h1>
                                  </div>
                                </div>
                                <div className="flex w-full border border-[#ffffff0d] opacity-70"></div>
                                <div className="flex w-full items-start text-left ">
                                  <h1 className="text-[40px] font-semibold text-[#2D9F89]">
                                    $19
                                    <span className="text-[18px] font-medium text-[#2D9F89]">
                                      /month
                                    </span>
                                  </h1>
                                </div>
                                <div className="flex w-full border border-[#ffffff0d] opacity-70"></div>
                                <div className="flex w-full flex-col gap-[20px] ">
                                  <div className="flex">
                                    <h1 className="text-[24px] font-medium text-[#ffffff]">
                                      Featured Services
                                    </h1>
                                  </div>
                                  <div className="flex w-full flex-col gap-[20px]">
                                    <div className="flex w-full items-center justify-between rounded-[8px] border border-[#2d9f891f] bg-[#121A2B] px-[20px] py-[16px]">
                                      <div className="w-full items-center gap-4">
                                        <h1 className="w-full text-[14px] text-[#ffffff] lg:text-[16px]">
                                          Video subtitles
                                        </h1>
                                      </div>
                                      <div className="w-full text-right text-[16px] font-medium text-[#A0A3AA]">
                                        <h1>100 | Per Day</h1>
                                      </div>
                                    </div>
                                    <div className="flex w-full items-center justify-between rounded-[8px] border border-[#2d9f891f] bg-[#121A2B] px-[20px] py-[16px]">
                                      <div className="w-full items-center gap-4">
                                        <h1 className="w-full text-[14px] text-[#ffffff] lg:text-[16px]">
                                          Images Generation
                                        </h1>
                                      </div>
                                      <div className="w-full text-right text-[16px] font-medium text-[#A0A3AA]">
                                        <h1>100 | Per Day</h1>
                                      </div>
                                    </div>
                                    <div className="flex w-full items-center justify-between rounded-[8px] border border-[#2d9f891f] bg-[#121A2B] px-[20px] py-[16px]">
                                      <div className="w-full items-center gap-4">
                                        <h1 className="w-full text-[14px] text-[#ffffff] lg:text-[16px]">
                                          Chatromm
                                        </h1>
                                      </div>
                                      <div className="w-full text-right text-[16px] font-medium text-[#A0A3AA]">
                                        <h1>100 | Per Day</h1>
                                      </div>
                                    </div>
                                    <div className="flex w-full items-center justify-between rounded-[8px] border border-[#2d9f891f] bg-[#121A2B] px-[20px] py-[16px]">
                                      <div className="w-full items-center gap-4">
                                        <h1 className="w-full text-[14px] text-[#ffffff] lg:text-[16px]">
                                          You Tube
                                        </h1>
                                      </div>
                                      <div className="w-full text-right text-[16px] font-medium text-[#A0A3AA]">
                                        <h1>Unlimited</h1>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full border border-[#1A1A1A]"></div>
                                <div
                                  tabIndex="0"
                                  role="button"
                                  className="flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-[12px] border px-[10px] py-[14px] border-[#2D9F89] bg-[#2D9F89] text-[#ffffff]"
                                >
                                  <h1 className="h-[30px] w-[100px] text-[18px] font-medium">
                                    Get Started
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div
                            className="swiper-slide w-[406.667px] swiper-slide-next mr-50px md:block hidden"
                            data-swiper-slide-index="2"
                            className="w-[406.667px] ; margin-right: 50px mt-24 md:block hidden"
                          >
                            <div className="flex w-full flex-col gap-[40px] rounded-[16px] border bg-[#101727]  border-[#2d9f8930]">
                              <div className="flex flex-col items-center gap-[30px] px-[32px] py-[50px]">
                                <div className="flex w-full items-center justify-between gap-[10px]">
                                  <div className="w-full">
                                    <h1 className="flex-1 text-[24px] font-medium text-[#ffffff]">
                                      Enterprise Plan
                                    </h1>
                                  </div>
                                  <div className="flex w-full items-center justify-center rounded-full border border-[#1F665B] bg-[#121A2B] p-[10px]">
                                    <h1 className="text-center text-[16px] font-medium text-[#2D9F89] lg:text-[18px]">
                                      Save 10%
                                    </h1>
                                  </div>
                                </div>
                                <div className="flex w-full border border-[#ffffff0d] opacity-70"></div>
                                <div className="flex w-full items-start text-left ">
                                  <h1 className="text-[40px] font-semibold text-[#2D9F89]">
                                    $30
                                    <span className="text-[18px] font-medium text-[#2D9F89]">
                                      /month
                                    </span>
                                  </h1>
                                </div>
                                <div className="flex w-full border border-[#ffffff0d] opacity-70"></div>
                                <div className="flex w-full flex-col gap-[20px] ">
                                  <div className="flex">
                                    <h1 className="text-[24px] font-medium text-[#ffffff]">
                                      Featured Services
                                    </h1>
                                  </div>
                                  <div className="flex w-full flex-col gap-[20px]">
                                    <div className="flex w-full items-center justify-between rounded-[8px] border border-[#2d9f891f] bg-[#121A2B] px-[20px] py-[16px]">
                                      <div className="w-full items-center gap-4">
                                        <h1 className="w-full text-[14px] text-[#ffffff] lg:text-[16px]">
                                          Video subtitles
                                        </h1>
                                      </div>
                                      <div className="w-full text-right text-[16px] font-medium text-[#A0A3AA]">
                                        <h1>500 | Per Day</h1>
                                      </div>
                                    </div>
                                    <div className="flex w-full items-center justify-between rounded-[8px] border border-[#2d9f891f] bg-[#121A2B] px-[20px] py-[16px]">
                                      <div className="w-full items-center gap-4">
                                        <h1 className="w-full text-[14px] text-[#ffffff] lg:text-[16px]">
                                          Images Generation
                                        </h1>
                                      </div>
                                      <div className="w-full text-right text-[16px] font-medium text-[#A0A3AA]">
                                        <h1>500 | Per Day</h1>
                                      </div>
                                    </div>
                                    <div className="flex w-full items-center justify-between rounded-[8px] border border-[#2d9f891f] bg-[#121A2B] px-[20px] py-[16px]">
                                      <div className="w-full items-center gap-4">
                                        <h1 className="w-full text-[14px] text-[#ffffff] lg:text-[16px]">
                                          Chatromm
                                        </h1>
                                      </div>
                                      <div className="w-full text-right text-[16px] font-medium text-[#A0A3AA]">
                                        <h1>500 | Per Day</h1>
                                      </div>
                                    </div>
                                    <div className="flex w-full items-center justify-between rounded-[8px] border border-[#2d9f891f] bg-[#121A2B] px-[20px] py-[16px]">
                                      <div className="w-full items-center gap-4">
                                        <h1 className="w-full text-[14px] text-[#ffffff] lg:text-[16px]">
                                          You Tube
                                        </h1>
                                      </div>
                                      <div className="w-full text-right text-[16px] font-medium text-[#A0A3AA]">
                                        <h1>Unlimited</h1>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full border border-[#1A1A1A]"></div>
                                <div
                                  tabIndex="0"
                                  role="button"
                                  className="flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-[12px] border px-[10px] py-[14px] border-[#2d9f891c] bg-[#121A2B] text-[#2D9F89]"
                                >
                                  <h1 className="h-[30px] w-[100px] text-[18px] font-medium">
                                    Get Started
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock">
                          <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                          <span className="swiper-pagination-bullet"></span>
                          <span className="swiper-pagination-bullet"></span>
                        </div>
                      </div>
                    </div>
                    <span
                      aria-hidden="true"
                      id="headlessui-tabs-panel-:r1h:"
                      role="tabpanel"
                      tabIndex="-1"
                      aria-labelledby="headlessui-tabs-tab-:r1f:"
                      className="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
                    ></span>
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
