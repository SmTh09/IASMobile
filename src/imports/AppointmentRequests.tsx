import svgPaths from "./svg-c2hkihi2nh";
import svgPathsButtons from "./svg-bcd0r9bhff";
import { IncadeaLogo } from "../components/IncadeaLogo";
import StatusBar from "../components/StatusBar";

function Search1() {
  return (
    <div
      className="absolute left-[332px] size-[32px] top-[7px]"
      data-name="search 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_375)" id="search 1">
          <path
            d={svgPaths.p2c8f5f80}
            fill="var(--fill-0, #63646A)"
            id="Vector"
          />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_375">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Menu1({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="absolute left-0 size-[32px] top-[7px] cursor-pointer"
      data-name="menu 1"
      onClick={onClick}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_1_389)" id="menu 1">
          <path
            d="M28 6H4V8H28V6Z"
            fill="var(--fill-0, #63646A)"
            id="Vector"
          />
          <path
            d="M28 24H4V26H28V24Z"
            fill="var(--fill-0, #63646A)"
            id="Vector_2"
          />
          <path
            d="M28 12H4V14H28V12Z"
            fill="var(--fill-0, #63646A)"
            id="Vector_3"
          />
          <path
            d="M28 18H4V20H28V18Z"
            fill="var(--fill-0, #63646A)"
            id="Vector_4"
          />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_389">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="absolute h-[45.714px] left-[33px] top-[7px] w-[364px]">
      <div
        className="absolute h-[45.714px] left-[66px] top-0 w-[100px]"
        data-name="incadea_logo 1"
      >
        <IncadeaLogo 
          width={100} 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>
      <Search1 />
      <Menu1 onClick={onMenuClick} />
    </div>
  );
}

function Frame12({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="absolute h-[60px] left-0 top-[59px] w-[429px]">
      <div
        aria-hidden="true"
        className="absolute border-[#4c68b0] border-[0px_0px_10px] border-solid inset-0 pointer-events-none"
      />
      <div className="absolute bg-white h-[60px] left-0 pointer-events-none top-0 w-[430px]">
        <div
          aria-hidden="true"
          className="absolute border-[#63646a] border-[0px_0px_1px] border-solid inset-0"
        />
        <div className="absolute inset-0 shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
      </div>
      <Frame10 onMenuClick={onMenuClick} />
    </div>
  );
}

function Search2() {
  return (
    <div
      className="absolute h-[16px] left-[18px] top-[12px] w-[17px]"
      data-name="search 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 16"
      >
        <g clipPath="url(#clip0_1_379)" id="search 1">
          <path
            d={svgPaths.p39b46880}
            fill="var(--fill-0, #63646A)"
            id="Vector"
          />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_379">
            <rect fill="white" height="16" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Searchbar() {
  return (
    <div
      className="absolute h-[40px] left-[20px] top-[207px] w-[390px]"
      data-name="Searchbar"
    >
      <div className="absolute bg-[#f4f4f4] h-[40px] left-0 top-0 w-[390px]">
        <div
          aria-hidden="true"
          className="absolute border-[#8d8d8d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
        />
      </div>
      <Search2 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[53px] not-italic text-[#9b9b9b] text-[14px] top-[11px] w-[81px]">
        Search
      </p>
    </div>
  );
}

function CloseOutline3() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="close--outline 3"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_4037_1000)" id="close--outline 3">
          <path
            d={svgPathsButtons.p35e68500}
            fill="var(--fill-0, #4C68B0)"
            id="Vector"
          />
          <g id="_Transparent_Rectangle_"></g>
          <path
            d={svgPathsButtons.p35a89700}
            fill="var(--fill-0, #4C68B0)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_4037_1000">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface ButtonProps {
  onCancel?: () => void;
}

function Button({ onCancel }: ButtonProps) {
  return (
    <div
      className="bg-white h-[40px] relative shrink-0 w-[185px] cursor-pointer"
      data-name="Button"
      onClick={onCancel}
    >
      <div className="box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative w-[185px]">
        <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4c68b0] text-[14px] text-nowrap w-[109px]">
          Cancel
        </p>
        <CloseOutline3 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#4c68b0] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function AddAlt2() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="add--alt 2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_4037_995)" id="add--alt 2">
          <path
            d={svgPathsButtons.p1a41bcc0}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPathsButtons.p14d86600}
            fill="var(--fill-0, #F2F2F7)"
            id="Vector_2"
          />
          <g id="_Transparent_Rectangle_"></g>
        </g>
        <defs>
          <clipPath id="clip0_4037_995">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Button1Props {
  onNew?: () => void;
}

function Button1({ onNew }: Button1Props) {
  return (
    <div
      className="bg-[#4c68b0] box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative shrink-0 w-[185px] cursor-pointer"
      data-name="Button"
      onClick={onNew}
    >
      <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white w-[109px]">{`New `}</p>
      <AddAlt2 />
    </div>
  );
}

interface BottomBarProps {
  onCancel?: () => void;
  onNew?: () => void;
}

function BottomBar({ onCancel, onNew }: BottomBarProps) {
  return (
    <div
      className="absolute bg-white box-border content-stretch flex gap-[20px] h-[108px] items-start left-0 overflow-clip p-[20px] top-[824px] w-[430px]"
      data-name="BottomBar"
    >
      <Button onCancel={onCancel} />
      <Button1 onNew={onNew} />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Search3() {
  return (
    <div
      className="h-[16px] relative shrink-0 w-[17px]"
      data-name="search 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 16"
      >
        <g clipPath="url(#clip0_1_363)" id="search 1">
          <path
            d={svgPaths.p39b46880}
            fill="var(--fill-0, #63646A)"
            id="Vector"
          />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_363">
            <rect fill="white" height="16" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NotFound() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[10px] h-[82px] items-center justify-center top-[425px]"
      data-name="Not Found"
      style={{ left: "calc(20% + 39px)" }}
    >
      <Search3 />
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">
        Not Found
      </p>
      <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">
        Try adjusting filters or search
      </p>
    </div>
  );
}

function Time() {
  return (
    <div
      className="h-[13px] relative shrink-0 w-[40px]"
      data-name="Time"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 13"
      >
        <g clipPath="url(#clip0_1_367)" id="Time">
          <path
            d={svgPaths.p694a000}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_367">
            <rect fill="white" height="13" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time1() {
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0.8)] content-stretch flex grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Time"
    >
      <Time />
    </div>
  );
}

function DynamicIslandFrame() {
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0.8)] content-stretch flex grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Dynamic Island Frame"
    >
      <div
        className="bg-black h-[37px] rounded-[20px] shrink-0 w-[125px]"
        data-name="Dynamic Island"
      />
    </div>
  );
}

function Reception() {
  return (
    <div
      className="h-[12px] relative shrink-0 w-[18px]"
      data-name="Reception"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 12"
      >
        <g clipPath="url(#clip0_1_383)" id="Reception">
          <path
            d={svgPaths.p1ec31400}
            fill="var(--fill-0, black)"
            id="Vector"
          />
          <path
            d={svgPaths.p19f8d480}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p13f4aa00}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p1bfb7500}
            fill="var(--fill-0, black)"
            id="Vector_4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_383">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WiFi() {
  return (
    <div
      className="h-[12px] relative shrink-0 w-[18px]"
      data-name="Wi-fi"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 12"
      >
        <g clipPath="url(#clip0_1_360)" id="Wi-fi">
          <path
            clipRule="evenodd"
            d={svgPaths.p2952ae40}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_360">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div
      className="h-[13px] relative shrink-0 w-[28px]"
      data-name="Battery"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 13"
      >
        <g clipPath="url(#clip0_1_355)" id="Battery">
          <path
            d={svgPaths.p3689d180}
            id="Vector"
            opacity="0.35"
            stroke="var(--stroke-0, black)"
          />
          <path
            d={svgPaths.p2a8bd780}
            fill="var(--fill-0, black)"
            id="Vector_2"
            opacity="0.4"
          />
          <path
            d={svgPaths.p39726670}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_355">
            <rect fill="white" height="13" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[8px] grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Icons"
    >
      <Reception />
      <WiFi />
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex h-[59px] items-center justify-center left-0 overflow-clip right-0 top-0"
      data-name="Status Bar"
    >
      <Time1 />
      <DynamicIslandFrame />
      <Icons />
    </div>
  );
}

function HomeBar() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex h-[34px] items-center justify-center left-0 overflow-clip pb-0 pt-[13px] px-0 right-0 top-[898px]"
      data-name="Home Bar"
    >
      <div
        className="bg-black h-[5px] rounded-[3px] shrink-0 w-[134px]"
        data-name="Rectangle"
      />
    </div>
  );
}

interface AppointmentRequestsProps {
  onCancel?: () => void;
  onNew?: () => void;
  onMenuClick?: () => void;
}

export default function AppointmentRequests({ onCancel, onNew, onMenuClick }: AppointmentRequestsProps) {
  return (
    <div
      className="bg-white relative size-full"
      data-name="Appointment Requests"
    >
      <StatusBar />
      <HomeBar />
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[20px] not-italic text-[#161616] text-[24px] text-nowrap top-[156px] whitespace-pre">
        Appointment Requests
      </p>
      <Frame12 onMenuClick={onMenuClick} />
      <Searchbar />
      <BottomBar onCancel={onCancel} onNew={onNew} />
      <NotFound />
    </div>
  );
}
