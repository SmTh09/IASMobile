import svgPaths from "./svg-ovprbi4vyt";
import { IncadeaLogo } from "../components/IncadeaLogo";
import imgArrowLeft from "figma:asset/a9c7af49a72069c07fcb399c5738ee93261f21c5.png";
import imgCloseOutline from "figma:asset/30f27ef93d5ac16799250a1a6333c2d9ec116134.png";
import imgCheckmarkFilled from "figma:asset/b87f451f4bcbbb5f11a0a5d7313cccffbf5ae40c.png";
import StatusBar from "../components/StatusBar";

interface AppointmentSummaryProps {
  onCancel: () => void;
  onGoBack: () => void;
  onSubmit: () => void;
  selectedCar: {
    plate: string;
    registrationDate: string;
    brand: string;
    model: string;
    chassis: string;
    image: string;
  } | null;
  jobLines: { id: number; text: string }[];
  mileage: string;
  measurement: string;
  selectedDate: Date | null;
  selectedTimeSlot: string | null;
  onMenuClick?: () => void;
}

function Search1() {
  return (
    <div className="absolute left-[332px] size-[32px] top-[7px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_710)" id="search 1">
          <path d={svgPaths.p2c8f5f80} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_710">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Menu1() {
  return (
    <div className="absolute left-0 size-[32px] top-[7px]" data-name="menu 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_703)" id="menu 1">
          <path d="M28 6H4V8H28V6Z" fill="var(--fill-0, #63646A)" id="Vector" />
          <path d="M28 24H4V26H28V24Z" fill="var(--fill-0, #63646A)" id="Vector_2" />
          <path d="M28 12H4V14H28V12Z" fill="var(--fill-0, #63646A)" id="Vector_3" />
          <path d="M28 18H4V20H28V18Z" fill="var(--fill-0, #63646A)" id="Vector_4" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_703">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[45.714px] left-[33px] top-[7px] w-[364px]">
      <div className="absolute h-[45.714px] left-[66px] top-0 w-[100px]" data-name="incadea_logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIncadeaLogo1} />
      </div>
      <Search1 />
      <Menu1 />
    </div>
  );
}

function Tobar() {
  return (
    <div className="absolute h-[60px] left-0 top-[59px] w-[429px]" data-name="Tobar">
      <div aria-hidden="true" className="absolute border-[#4c68b0] border-[0px_0px_10px] border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-white h-[60px] left-0 pointer-events-none top-0 w-[430px]">
        <div aria-hidden="true" className="absolute border-[#63646a] border-[0px_0px_1px] border-solid inset-0" />
        <div className="absolute inset-0 shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
      </div>
      <Frame10 />
    </div>
  );
}

function Time() {
  return (
    <div className="h-[13px] relative shrink-0 w-[40px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 13">
        <g clipPath="url(#clip0_1_694)" id="Time">
          <path d={svgPaths.p694a000} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_694">
            <rect fill="white" height="13" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.8)] content-stretch flex grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Time">
      <Time />
    </div>
  );
}

function DynamicIslandFrame() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.8)] content-stretch flex grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Dynamic Island Frame">
      <div className="bg-black h-[37px] rounded-[20px] shrink-0 w-[125px]" data-name="Dynamic Island" />
    </div>
  );
}

function Reception() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Reception">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_1_697)" id="Reception">
          <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_697">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WiFi() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Wi-fi">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_1_714)" id="Wi-fi">
          <path clipRule="evenodd" d={svgPaths.p2952ae40} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_714">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[28px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
        <g clipPath="url(#clip0_1_684)" id="Battery">
          <path d={svgPaths.p3689d180} id="Vector" opacity="0.35" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p2a8bd780} fill="var(--fill-0, black)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p39726670} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_684">
            <rect fill="white" height="13" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[8px] grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Icons">
      <Reception />
      <WiFi />
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex h-[59px] items-center justify-center left-0 overflow-clip right-0 top-0" data-name="Status Bar">
      <Time1 />
      <DynamicIslandFrame />
      <Icons />
    </div>
  );
}

function HomeBar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex h-[34px] items-center justify-center left-0 overflow-clip pb-0 pt-[13px] px-0 right-0 top-[898px]" data-name="Home Bar">
      <div className="bg-black h-[5px] rounded-[3px] shrink-0 w-[134px]" data-name="Rectangle" />
    </div>
  );
}

function CloseOutline3() {
  return (
    <img src={imgCloseOutline} alt="" className="w-[16px] h-[16px]" />
  );
}

function Button({ onCancel }: { onCancel: () => void }) {
  return (
    <div className="bg-white h-[40px] relative shrink-0 cursor-pointer" data-name="Button" onClick={onCancel}>
      <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center overflow-clip px-[20px] py-0 relative rounded-[inherit]">
        <CloseOutline3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4c68b0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#393939] box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative shrink-0 w-[147px] cursor-pointer" data-name="Button" onClick={onClick}>
      <div className="font-['IBM_Plex_Sans',sans-serif] font-normal text-[14px] text-white w-[109px]">Go Back</div>
      <img src={imgArrowLeft} alt="" className="w-[16px] h-[16px]" style={{ filter: 'brightness(0) invert(1)' }} />
    </div>
  );
}

function Button2({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#4c68b0] box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative shrink-0 w-[147px] cursor-pointer" data-name="Button" onClick={onClick}>
      <div className="font-['IBM_Plex_Sans',sans-serif] font-normal text-[14px] text-white w-[109px]">Submit</div>
      <img src={imgCheckmarkFilled} alt="" className="w-[16px] h-[16px]" />
    </div>
  );
}

function BottomBar({ onCancel, onGoBack, onSubmit }: { onCancel: () => void; onGoBack: () => void; onSubmit: () => void }) {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[20px] h-[108px] items-start left-0 overflow-clip p-[20px] top-[823px] w-[430px]" data-name="BottomBar">
      <Button onCancel={onCancel} />
      <Button1 onClick={onGoBack} />
      <Button2 onClick={onSubmit} />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function formatDate(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}.${day}.${year}`;
}

export default function AppointmentSummary({
  onCancel,
  onGoBack,
  onSubmit,
  selectedCar,
  jobLines,
  mileage,
  measurement,
  selectedDate,
  selectedTimeSlot
}: AppointmentSummaryProps) {
  const formattedDateTime = selectedDate && selectedTimeSlot 
    ? `${formatDate(selectedDate)} - ${selectedTimeSlot}`
    : '';

  return (
    <div className="bg-white relative size-full" data-name="Appointment Summary">
      <Tobar />
      <StatusBar />
      <HomeBar />
      <BottomBar onCancel={onCancel} onGoBack={onGoBack} onSubmit={onSubmit} />
      
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[20px] not-italic text-[#161616] text-[24px] text-nowrap top-[156px] whitespace-pre">Appointment Summary</p>
      
      {/* Vehicle Section */}
      <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[20px] top-[207px] w-[390px]">
        <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic shrink-0 text-[#161616] text-[14px] w-full">Vehicle</p>
        <div className="bg-[#f4f4f4] h-[140px] relative shrink-0 w-full border-l border-[#4c68b0]" data-name="Vehicle Card">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex gap-[20px] h-full items-center p-[20px] relative w-full">
              <img className="w-[101px] h-[100px] object-cover" src={selectedCar?.image || "https://placehold.co/101x100"} alt="Car" />
              <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] w-[229px]">
                <p className="leading-[normal] relative shrink-0 w-full">
                  <span>Plate: </span>
                  <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{selectedCar?.plate || ''}</span>
                </p>
                <p className="leading-[normal] relative shrink-0 w-full">
                  <span>Registration Date: </span>
                  <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{selectedCar?.registrationDate || ''}</span>
                </p>
                <p className="leading-[normal] relative shrink-0 w-full">
                  <span>Brand: </span>
                  <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{selectedCar?.brand || ''}</span>
                </p>
                <p className="leading-[normal] relative shrink-0 w-full">
                  <span>Model: </span>
                  <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{selectedCar?.model || ''}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mileage Field */}
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-[390px]" data-name="Field">
          <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] w-full">Mileage</p>
          <div className="bg-[#f4f4f4] relative shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex font-['IBM_Plex_Sans:Light',_sans-serif] items-start justify-between leading-[normal] not-italic p-[10px] relative text-[14px] text-nowrap w-full whitespace-pre">
                <p className="relative shrink-0 text-[#161616]">{mileage}</p>
                <p className="relative shrink-0 text-[#9b9b9b]">{measurement === "Kilometers" ? "Km" : "Miles"}</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-600 border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Job Lines Section */}
      <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[20px] top-[491px] w-[390px]">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Job Lines </p>
        </div>
        <div className="h-[126px] relative shrink-0 w-full">
          {jobLines.map((line, index) => (
            <div key={line.id} className="absolute bg-[#f4f4f4] box-border content-stretch flex flex-col gap-[10px] items-start left-0 p-[20px] w-[390px]" style={{ top: `${index * 68}px` }}>
              <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">{line.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Date Section - 20px gap from Job Lines (491 + 20 title + 126 job lines + 20 gap = 657) */}
      <div className="absolute content-stretch flex flex-col gap-[20px] items-start justify-center left-[20px] top-[657px] w-[390px]" data-name="Field">
        <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] w-full">Vehicle Reception Date </p>
        <div className="bg-[#f4f4f4] relative shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative w-full">
              <p className="basis-0 font-['IBM_Plex_Sans:Light',_sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[14px]">{formattedDateTime}</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-600 border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
