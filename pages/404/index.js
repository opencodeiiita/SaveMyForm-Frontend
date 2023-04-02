import Image from "next/image";
import errorImage from "../../assets/images/illustrations/404error.png";
import { Button } from "antd";
export default function Error() {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        className="max-600:hidden h-[42vw] bottom-0 w-[75vw] absolute right-0 max-600:h-[56vw] max-600:w-[100vw]"
        preserveAspectRatio="none"
        viewBox="0 0 1279 888"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1031 23.4141H1027V414.814H1031V23.4141Z" fill="#00694B" />
        <g clipPath="url(#clip0_1060_263)">
          <g style={{ mixBlendMode: "multiply", opacity: "0.18" }}>
            <path
              d="M6.54978 979.729C-25.6136 804.412 63.5036 729.853 215.637 747.105C454.499 774.198 203.563 502.207 499.122 471.672C706.77 450.222 959.196 277.704 994.545 159.534C1029.89 41.3632 1238.18 -48.4059 1333.08 28.7914C1427.98 105.989 1241.47 795.213 1241.47 795.213L206.928 1028.82L6.54978 979.729Z"
              fill="white"
            />
          </g>
          <path
            d="M148.999 973.909C80.0985 819.144 171.908 757.123 268.322 776.282C364.736 795.441 485.907 707.293 392.426 489.27C298.945 271.247 570.295 124.914 760.719 173.633C951.142 222.352 1038.52 -241.411 1359.47 175.097C1657.43 561.793 1402.33 1010.08 1402.33 1010.08L148.999 973.858V973.909Z"
            fill="#00694B"
          />
          <g style={{ mixBlendMode: "multiply", opacity: "0.18" }}>
            <path
              d="M379.808 931.21C472.549 960.598 633.824 812.502 551.394 594.769C468.964 377.036 626.032 244.224 778.655 311.313C931.278 378.403 973.62 48.0225 1156.64 123.291C1284.17 175.766 1386.22 309.222 1441.86 467.025C1470.33 547.736 1477.56 715.595 1477.83 860.366C1519.34 683.82 1531.67 425.033 1358.01 188.021C1033.8 -254.444 945.716 229.766 753.359 178.014C564.615 114.839 285.83 283.292 397.495 511.664C491.926 743.26 353.17 846.985 255.777 826.633C158.384 806.281 87.8994 875.275 157.5 1039.67H237.229C214.443 931.719 298.029 905.36 379.837 931.29L379.808 931.21Z"
              fill="#00694B"
            />
          </g>
          <path
            d="M839.5 875.93C1057.93 875.93 1235 864.889 1235 851.27C1235 837.65 1057.93 826.61 839.5 826.61C621.071 826.61 444 837.65 444 851.27C444 864.889 621.071 875.93 839.5 875.93Z"
            fill="#E6F5FF"
          />
        </g>
        <path d="M769 167.512H765V759.317H769V167.512Z" fill="#12AB52" />
        <path d="M1031 27.3086H1027V753.476H1031V27.3086Z" fill="#12AB52" />
        <defs>
          <clipPath id="clip0_1060_263">
            <rect width="1338" height="1016" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <Image
        className="max-600:hidden h-[25vw] w-[30vw] absolute bottom-[3vw] right-[8vw] max-600:right-[18vw]"
        height={"100%"}
        width={"100%"}
        src={errorImage}
        alt={"ErrorImage"}
      />
      <div className="max-600:bg-[#00694B] max-600:h-[89vh] max-600:left-0 max-600:w-[100vw] max-600:p-[5vw] w-[35vw] left-[5vw] relative max-lg:w-[90vw]">
        <div className="font-bold max-600:text-[#01EC64] text-[#005E41] text-[100px] mt-[10vh] font-[Poppins] max-xl:mt-[5vh] max-xl:text-[80px]">
          ERROR!
        </div>
        <div className="max-600:text-[#FFFFFF] font-semibold font-[Poppins] text-[50px] max-xl:text-[40px] max-lg:mb-4">
          PAGE NOT FOUND
        </div>
        <div className="max-600:w-[85vw] max-600:text-[#FFFFFF] font-medium font-[Poppins] text-[20px]">
          We’re sorry, the page you requested couldn't be found, Go back to home page.
        </div>
        <Button
          color={"success"}
          className="max-xl:mt-8 mt-16 h-12 bg-[#01EC64] text-[#00694B] hover:text-[#00104B] hover:bg-[#01FF64] rounded-md text-lg"
        >
          Back to Home Page
        </Button>
      </div>
    </>
  );
}
