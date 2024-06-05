

export default function GetInTouch() {
  return (
    <div className="bg-[#121A2B]">
      <div className="custom-container flex flex-col gap-[56px] py-[40px] lg:py-[100px]">
        <div className="mb-[50px] w-full text-left lg:text-center">
          <h1 className="header-font font-lexend mx-auto mb-[16px] w-[335px] text-[32px] font-semibold text-white/[0.9] lg:w-full lg:text-[48px]">
            Get in Touch
          </h1>
          <p className="font-inter mx-auto w-[335px] text-[16px] text-white/[0.7] lg:w-[665px] lg:text-[18px]">
            Discover answers to common inquiries in our Frequently Asked Questions section, providing clarity and guidance for all users.
          </p>
        </div>
        <div className="rounded-[26px] bg-[#161E2F] p-[32px]">
          <form className="flex w-full flex-col gap-[32px] lg:flex-row">
            <div className="w-full">
              <div className="mb-4 flex flex-col gap-[18px]">
                <h1 className="font-inter text-[20px] text-[#ffffff]/80">Name</h1>
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    placeholder="Kathryn Murphy"
                    className="custom-input font-inter flex h-[64px] w-full items-center justify-center rounded-[12px] border border-[#070C16] bg-[#070C16] text-[18px] text-[#ffffff] ring-offset-0 placeholder:text-[#ffffff]/40 focus:border-[#2D9F89] focus:outline-none focus:ring-0 px-[20px]"
                    value=""
                  />
                </div>
              </div>
              <div className="mb-4 flex flex-col gap-[18px]">
                <h1 className="font-inter text-[20px] text-[#ffffff]/80">Phone</h1>
                <div className="relative">
                  <input
                    type="text"
                    name="phonenumber"
                    placeholder="(907) 555-0101"
                    className="custom-input font-inter flex h-[64px] w-full items-center justify-center rounded-[12px] border border-[#070C16] bg-[#070C16] text-[18px] text-[#ffffff] ring-offset-0 placeholder:text-[#ffffff]/40 focus:border-[#2D9F89] focus:outline-none focus:ring-0 px-[20px]"
                    value=""
                  />
                </div>
              </div>
              <div className="mb-4 flex flex-col gap-[18px]">
                <h1 className="font-inter text-[20px] text-[#ffffff]/80">E-mail</h1>
                <div className="relative">
                  <input
                    type="text"
                    name="email"
                    placeholder="info@gmail.com"
                    className="custom-input font-inter flex h-[64px] w-full items-center justify-center rounded-[12px] border border-[#070C16] bg-[#070C16] text-[18px] text-[#ffffff] ring-offset-0 placeholder:text-[#ffffff]/40 focus:border-[#2D9F89] focus:outline-none focus:ring-0 px-[20px]"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-[40px]">
              <div className="mb-4 flex flex-col gap-[18px]">
                <h1 className="font-inter text-[20px] text-[#ffffff]/80">Messages</h1>
                <div className="relative">
                  <textarea
                    id="message"
                    placeholder="Type your messages..."
                    className="font-inter flex h-[250px] w-full items-center justify-center rounded-[12px] border border-[#070C16] bg-[#070C16] px-[20px] py-[22px] text-[18px] text-[#ffffff]/40 placeholder:text-[#ffffff]/40 focus:border-[#2D9F89] focus:outline-none focus:ring-0"
                    rows="4"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex lg:justify-end">
                <button
                  type="submit"
                  className="font-inter w-full cursor-pointer gap-[10px] rounded-[8px] border border-[#2D9F89] bg-[#2D9F89] px-[20px] py-[13px] text-[20px] font-medium text-[#ffffff] lg:w-auto"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
