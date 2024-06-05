import Background from "../layout/Background";
import Footer from "../layout/Footer";
import FAQ from "./FAQ";
import Features from "./Features";
import GetInTouch from "./GetInTouch";
import Howtocreate from "./Howtocreate";
import Pricing from "./Pricing";
import banner from "../assets/image/banner.png";

export default function Home() {
  return (
    <>
      <Background />
      <div>
        <div className="absolute left-0 top-[100px] lg:top-[160px] z-[99] w-full px-[0px] lg:px-0 ">
          <div className="custom-container">
            <div className="mb-[38px] lg:mb-[60px]">
              <p className="header-font font-400 text-center font-semibold text-[32px] leading-[38px] text-white/[0.8] lg:text-[80px] lg:leading-[104px]">
                The Best Mongolias AI Tools for
              </p>
              <p className="header-font bg-gradient-to-r from-[#24DDB9] to-[#0189A7] bg-clip-text text-center text-[43px] font-[700] leading-[51px] text-transparent lg:text-[80px] lg:leading-[96px]">
                Video Subtitles
              </p>
              <p className="font-inter mt-[20px] hidden text-center text-[20px] font-[400] text-white/[0.7] lg:block">
                One standout feature of this AI tool is its seamless integration
                of Mongolian language support
              </p>
            </div>
            <div className=" ">
              <img
                src={banner}
                className=" md:ml-3 ml-0"
                alt=""
              />
            </div>
            <div className="mt-[38px] w-full text-center lg:mt-[56px]">
              <a
                className="font-inter block rounded-[10px] bg-[#2D9F89] px-[40px] py-[19px] text-[16px] font-[500] text-white lg:inline lg:text-[20px]"
                href="/price"
              >
                Try it for free
              </a>
            </div>
            <Howtocreate />
            <Features />
            <Pricing />
            <FAQ />
            <GetInTouch />
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}
