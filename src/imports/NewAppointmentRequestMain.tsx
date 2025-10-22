import React from "react";
import svgPaths from "./svg-lyyynmsczm";
import { IncadeaLogo } from "../components/IncadeaLogo";
import imgArrowLeft from "figma:asset/a9c7af49a72069c07fcb399c5738ee93261f21c5.png";
import imgArrowRight from "figma:asset/de7dcb7d2c9b37a984d8d86f4825d174e3438b65.png";
import imgCloseOutline from "figma:asset/30f27ef93d5ac16799250a1a6333c2d9ec116134.png";
import type { CarData } from "./CarList";
import StatusBar from "../components/StatusBar";

function Search1() {
  return (
    <div className="absolute left-[332px] size-[32px] top-[7px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_217)" id="search 1">
          <path d={svgPaths.p2c8f5f80} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_217">
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
        <g clipPath="url(#clip0_1_232)" id="menu 1">
          <path d="M28 6H4V8H28V6Z" fill="var(--fill-0, #63646A)" id="Vector" />
          <path d="M28 24H4V26H28V24Z" fill="var(--fill-0, #63646A)" id="Vector_2" />
          <path d="M28 12H4V14H28V12Z" fill="var(--fill-0, #63646A)" id="Vector_3" />
          <path d="M28 18H4V20H28V18Z" fill="var(--fill-0, #63646A)" id="Vector_4" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_232">
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
        <IncadeaLogo width={100} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" />
      </div>
      <Search1 />
      <Menu1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[60px] left-0 top-[59px] w-[429px]">
      <div aria-hidden="true" className="absolute border-[#4c68b0] border-[0px_0px_10px] border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-white h-[60px] left-0 pointer-events-none top-0 w-[430px]">
        <div aria-hidden="true" className="absolute border-[#63646a] border-[0px_0px_1px] border-solid inset-0" />
        <div className="absolute inset-0 shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
      </div>
      <Frame10 />
    </div>
  );
}

function AddAlt2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="add--alt 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_190)" id="add--alt 2">
          <path d={svgPaths.p1a41bcc0} fill="var(--fill-0, #525252)" id="Vector" />
          <path d={svgPaths.p14d86600} fill="var(--fill-0, #525252)" id="Vector_2" />
          <g id="_Transparent_Rectangle_"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_190">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Frame903Props {
  onAddVehicle?: () => void;
}

function Frame903({ onAddVehicle }: Frame903Props) {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 cursor-pointer" onClick={onAddVehicle}>
      <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Add Vehicle</p>
      <AddAlt2 />
    </div>
  );
}

interface TopActionBarProps {
  onAddVehicle?: () => void;
  hasVehicle?: boolean;
}

function TopActionBar({ onAddVehicle, hasVehicle }: TopActionBarProps) {
  if (hasVehicle) return null;
  
  return (
    <div className="absolute bg-[#eef0f8] box-border content-stretch flex gap-[10px] h-[50px] items-center left-0 overflow-clip px-[20px] py-[10px] top-[268px] w-[430px]" data-name="TopActionBar">
      <Frame903 onAddVehicle={onAddVehicle} />
    </div>
  );
}

function Search2() {
  return (
    <div className="absolute left-[332px] size-[32px] top-[7px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_217)" id="search 1">
          <path d={svgPaths.p2c8f5f80} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_217">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Menu2() {
  return (
    <div className="absolute left-0 size-[32px] top-[7px]" data-name="menu 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_232)" id="menu 1">
          <path d="M28 6H4V8H28V6Z" fill="var(--fill-0, #63646A)" id="Vector" />
          <path d="M28 24H4V26H28V24Z" fill="var(--fill-0, #63646A)" id="Vector_2" />
          <path d="M28 12H4V14H28V12Z" fill="var(--fill-0, #63646A)" id="Vector_3" />
          <path d="M28 18H4V20H28V18Z" fill="var(--fill-0, #63646A)" id="Vector_4" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_232">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[45.714px] left-[33px] top-[7px] w-[364px]">
      <div className="absolute h-[45.714px] left-[66px] top-0 w-[100px]" data-name="incadea_logo 1">
        <IncadeaLogo width={100} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" />
      </div>
      <Search2 />
      <Menu2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[60px] left-0 top-[59px] w-[429px]">
      <div aria-hidden="true" className="absolute border-[#4c68b0] border-[0px_0px_10px] border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-white h-[60px] left-0 pointer-events-none top-0 w-[430px]">
        <div aria-hidden="true" className="absolute border-[#63646a] border-[0px_0px_1px] border-solid inset-0" />
        <div className="absolute inset-0 shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
      </div>
      <Frame11 />
    </div>
  );
}

function Frame556() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[20px] pt-0 px-0 relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#4c68b0] border-[0px_0px_3px] border-solid inset-0 pointer-events-none" />
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Order</p>
    </div>
  );
}

function Frame557() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[20px] pt-0 px-0 relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Vehicle Reception</p>
    </div>
  );
}

function Frame558() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <Frame556 />
      <Frame557 />
    </div>
  );
}

function Frame555() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[20px] items-start justify-center left-0 pb-[20px] pt-[40px] px-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[119px] w-[430px]">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[24px] text-nowrap whitespace-pre">Vehicle Handback</p>
      <Frame558 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-[#f4f4f4] box-border content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[10px] items-start leading-[0] left-[20px] not-italic p-[20px] text-[#161616] text-[14px] top-[288px] w-[390px]">
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Order: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">00000000432</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Appointment Date: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">08.12.2024</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Returned on: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">10.12.2024</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Vehicle Plate: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">MNO345</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Service Advisor: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">Jhon Doe</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Reason: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">Maintenance</span>
      </p>
    </div>
  );
}

function DocumentPdf1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="document--pdf 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_204)" id="document--pdf 1">
          <path d={svgPaths.p13330c00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p91ecf80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p138e34f2} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3a9b0400} fill="var(--fill-0, white)" id="Vector_4" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_204">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#4c68b0] box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative shrink-0 w-[185px]" data-name="Button">
      <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white w-[109px]">Open Invoice</p>
      <DocumentPdf1 />
    </div>
  );
}

function Frame561() {
  return (
    <div className="absolute bg-[#f4f4f4] box-border content-stretch flex flex-col gap-[20px] items-start justify-center left-[20px] p-[20px] top-[506px] w-[390px]">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Check order invoice</p>
      <Button />
    </div>
  );
}

function Frame563() {
  return (
    <div className="h-[84.337px] relative shrink-0 w-[82.202px]">
      <div className="absolute inset-[-0.59%_-0.61%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 86">
          <g id="Frame 563">
            <path d={svgPaths.p1062d280} id="Vector 1" stroke="var(--stroke-0, #161616)" strokeLinecap="round" />
            <path d={svgPaths.pfed44c0} id="Vector 2" stroke="var(--stroke-0, #161616)" strokeLinecap="round" />
            <path d={svgPaths.p2fd7480} id="Vector 3" stroke="var(--stroke-0, #161616)" strokeLinecap="round" />
            <path d={svgPaths.p36472480} id="Vector 4" stroke="var(--stroke-0, #161616)" strokeLinecap="round" />
            <path d="M56.6644 33.6147V58.2106" id="Vector 5" stroke="var(--stroke-0, #161616)" strokeLinecap="round" />
            <path d={svgPaths.p19433f80} id="Vector 6" stroke="var(--stroke-0, #161616)" strokeLinecap="round" />
            <path d="M67.6678 24.5532V49.7964" id="Vector 7" stroke="var(--stroke-0, #161616)" strokeLinecap="round" />
            <path d={svgPaths.p15889780} id="Vector 8" stroke="var(--stroke-0, #161616)" strokeLinecap="round" />
            <path d={svgPaths.p36046d50} id="Vector 9" stroke="var(--stroke-0, #161616)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame562() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-[150px]">
      <Frame563 />
      <div className="h-0 relative shrink-0 w-[150px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 1">
            <line id="Line 25" stroke="var(--stroke-0, #161616)" x2="150" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Phillip Wagner</p>
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Customer</p>
    </div>
  );
}

function Frame564() {
  return (
    <div className="h-[102.882px] relative shrink-0 w-[56.521px]">
      <div className="absolute inset-[-0.49%_-0.88%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 105">
          <g id="Frame 564">
            <path d={svgPaths.p17fbdf00} id="Vector 10" stroke="var(--stroke-0, #161616)" strokeLinecap="round" />
            <path d={svgPaths.p2888fa00} id="Vector 11" stroke="var(--stroke-0, #161616)" strokeLinecap="round" />
            <path d="M28.7509 50.4102V82.2222" id="Vector 12" stroke="var(--stroke-0, #161616)" strokeLinecap="round" />
            <path d={svgPaths.p1d4b6c80} id="Vector 13" stroke="var(--stroke-0, #161616)" strokeLinecap="round" />
            <path d={svgPaths.p3b8bb468} id="Vector 14" stroke="var(--stroke-0, #161616)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame567() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-[150px]">
      <Frame564 />
      <div className="h-0 relative shrink-0 w-[150px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 1">
            <line id="Line 25" stroke="var(--stroke-0, #161616)" x2="150" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Jhon Doe</p>
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Service Advisor</p>
    </div>
  );
}

function Frame565() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame562 />
      <Frame567 />
    </div>
  );
}

function Frame566() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[20px] top-[644px] w-[390px]">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[24px] w-full">Signature</p>
      <Frame565 />
    </div>
  );
}

function Time() {
  return (
    <div className="h-[13px] relative shrink-0 w-[40px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 13">
        <g clipPath="url(#clip0_1_187)" id="Time">
          <path d={svgPaths.p694a000} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_187">
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
        <g clipPath="url(#clip0_1_211)" id="Reception">
          <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_211">
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
        <g clipPath="url(#clip0_1_195)" id="Wi-fi">
          <path clipRule="evenodd" d={svgPaths.p2952ae40} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_195">
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
        <g clipPath="url(#clip0_1_170)" id="Battery">
          <path d={svgPaths.p3689d180} id="Vector" opacity="0.35" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p2a8bd780} fill="var(--fill-0, black)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p39726670} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_170">
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
    <div className="absolute bg-white content-stretch flex h-[59px] items-center justify-center left-0 overflow-clip right-0 top-0 z-50" data-name="Status Bar">
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

function VehicleHandback() {
  return (
    <div className="absolute bg-white h-[932px] overflow-clip top-[86px] w-[430px]" data-name="Vehicle Handback" style={{ left: "calc(100% + 425px)" }}>
      <StatusBar />
      <HomeBar />
      <Frame13 />
      <Frame555 />
      <Frame19 />
      <Frame561 />
      <Frame566 />
    </div>
  );
}

function Search3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[17px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g clipPath="url(#clip0_1_200)" id="search 1">
          <path d={svgPaths.p39b46880} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_200">
            <rect fill="white" height="16" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NotFound() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[82px] items-center justify-center top-[425px]" data-name="Not Found" style={{ left: "calc(20% + 39px)" }}>
      <Search3 />
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Not Found</p>
      <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Try adjusting filters or search</p>
    </div>
  );
}

function CloseOutline3() {
  return (
    <img src={imgCloseOutline} alt="" className="w-[16px] h-[16px]" />
  );
}

function Button1({ onCancel }: { onCancel?: () => void }) {
  return (
    <div className="bg-white h-[40px] relative shrink-0 cursor-pointer" data-name="Button" onClick={onCancel}>
      <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center overflow-clip px-[20px] py-0 relative rounded-[inherit]">
        <CloseOutline3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4c68b0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button2({ onClick, disabled = false }: { onClick?: () => void; disabled?: boolean }) {
  return (
    <div 
      className={`${disabled ? 'bg-[#c6c6c6]' : 'bg-[#393939]'} box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative shrink-0 w-[147px] ${disabled ? '' : 'cursor-pointer'}`}
      data-name="Button"
      onClick={disabled ? undefined : onClick}
    >
      <div className={`font-['IBM_Plex_Sans',sans-serif] font-normal text-[14px] ${disabled ? 'text-[#8d8d8d]' : 'text-white'} w-[109px]`}>Go Back</div>
      <img src={imgArrowLeft} alt="" className="w-[16px] h-[16px]" style={{ filter: disabled ? 'brightness(0) saturate(100%) invert(56%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(88%)' : 'brightness(0) invert(1)' }} />
    </div>
  );
}

function Button3({ onClick, disabled = true }: { onClick?: () => void; disabled?: boolean }) {
  return (
    <div 
      className={`${disabled ? 'bg-[#c6c6c6]' : 'bg-[#4c68b0]'} box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative shrink-0 w-[147px] ${disabled ? '' : 'cursor-pointer'}`}
      data-name="Button"
      onClick={disabled ? undefined : onClick}
    >
      <div className={`font-['IBM_Plex_Sans',sans-serif] font-normal text-[14px] ${disabled ? 'text-[#8d8d8d]' : 'text-white'} w-[109px]`}>Next</div>
      <img src={imgArrowRight} alt="" className="w-[16px] h-[16px]" style={{ filter: disabled ? 'brightness(0) saturate(100%) invert(56%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(88%)' : 'brightness(0) invert(1)' }} />
    </div>
  );
}

interface BottomBarProps {
  onCancel?: () => void;
  onGoBack?: () => void;
  onNext?: () => void;
  canGoBack?: boolean;
  canProceed?: boolean;
}

function BottomBar({ onCancel, onGoBack, onNext, canGoBack = false, canProceed = false }: BottomBarProps) {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[20px] h-[108px] items-start left-0 overflow-clip p-[20px] top-[824px] w-[430px]" data-name="BottomBar">
      <Button1 onCancel={onCancel} />
      <Button2 onClick={onGoBack} disabled={!canGoBack} />
      <Button3 onClick={onNext} disabled={!canProceed} />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

interface TabProps {
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <div 
      className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[20px] pt-0 px-0 relative shrink-0 cursor-pointer"
      onClick={onClick}
    >
      {isActive && <div aria-hidden="true" className="absolute border-[#4c68b0] border-[0px_0px_3px] border-solid inset-0 pointer-events-none" />}
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">{label}</p>
    </div>
  );
}

interface Frame569Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function Frame569({ activeTab, onTabChange }: Frame569Props) {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <Tab label="Vehicle" isActive={activeTab === "vehicle"} onClick={() => onTabChange("vehicle")} />
      <Tab label="Job Lines" isActive={activeTab === "jobLines"} onClick={() => onTabChange("jobLines")} />
      <Tab label="Date" isActive={activeTab === "date"} onClick={() => onTabChange("date")} />
    </div>
  );
}

interface Frame570Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function Frame570({ activeTab, onTabChange }: Frame570Props) {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[20px] items-start justify-center left-0 pb-[20px] pt-[40px] px-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[119px] w-[430px]">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[24px] text-nowrap whitespace-pre">New Appointment Requests</p>
      <Frame569 activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}

function CloseOutline4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="close--outline 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_800)" id="close--outline 3">
          <path d={svgPaths.p35e68500} fill="var(--fill-0, white)" id="Vector" />
          <g id="_Transparent_Rectangle_"></g>
          <path d={svgPaths.p35a89700} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_800">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface DeleteButtonProps {
  onDelete?: () => void;
}

interface DeleteButtonProps {
  onDelete?: () => void;
}

function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <div className="h-[40px] relative self-stretch">
      <div 
        className="absolute bg-[#393939] h-[40px] left-0 overflow-clip px-[20px] py-0 top-0 w-[185px] cursor-pointer"
        style={{ display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center' }}
        data-name="Button"
        onClick={onDelete}
      >
        <div className="w-[109px]" style={{ color: 'white', fontSize: 14, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word' }}>Delete</div>
        <CloseOutline4 />
      </div>
    </div>
  );
}

interface SelectedVehicleCardProps {
  car: CarData;
  onDelete?: () => void;
}

function SelectedVehicleCard({ car, onDelete }: SelectedVehicleCardProps) {
  return (
    <div className="absolute bg-[#f4f4f4] left-[20px] overflow-hidden p-[20px] top-[288px] w-[390px]" style={{ borderLeft: '1px #4C68B0 solid', display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20 }} data-name="Vehicle Card">
      <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
        <img alt="" style={{ width: 101, height: 100 }} src={car.image} />
        <div className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[0] not-italic text-[#161616] text-[14px]" style={{ width: 229, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'inline-flex' }}>
          <p className="leading-[normal]" style={{ alignSelf: 'stretch' }}>
            <span>{`Plate: `}</span>
            <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{car.plate}</span>
          </p>
          <p className="leading-[normal]" style={{ alignSelf: 'stretch' }}>
            <span>{`Registration Date: `}</span>
            <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{car.registrationDate}</span>
          </p>
          <p className="leading-[normal]" style={{ alignSelf: 'stretch' }}>
            <span>{`Brand: `}</span>
            <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{car.brand}</span>
          </p>
          <p className="leading-[normal]" style={{ alignSelf: 'stretch' }}>
            <span>{`Model: `}</span>
            <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{car.model}</span>
          </p>
        </div>
      </div>
      <DeleteButton onDelete={onDelete} />
    </div>
  );
}

interface MileageFieldProps {
  value: string;
  onChange: (value: string) => void;
}

function MileageField({ value, onChange }: MileageFieldProps) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start justify-center left-[20px] top-[508px] w-[390px]" data-name="Field">
      <div style={{ alignSelf: 'stretch', color: '#161616', fontSize: 14, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word' }}>Mileage</div>
      <div style={{ alignSelf: 'stretch', padding: 10, background: '#F4F4F4', overflow: 'hidden', borderBottom: '1px #525252 solid', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
        <input 
          type="text" 
          placeholder="Please enter a text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent border-none outline-none"
          style={{ color: '#161616', fontSize: 14, fontFamily: 'IBM Plex Sans', fontWeight: '300', wordWrap: 'break-word', flex: 1 }}
        />
        <div style={{ color: '#9B9B9B', fontSize: 14, fontFamily: 'IBM Plex Sans', fontWeight: '300', wordWrap: 'break-word' }}>Km</div>
      </div>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative size-[16px]" data-name="chevron--right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_796)" id="chevron--right 1">
          <path d="M6 4L10 8L6 12L6.7 12.7L11.4 8L6.7 3.3L6 4Z" fill="var(--fill-0, #525252)" id="Vector" />
          <g id="_x3C_Transparent_Rectangle_x3E_"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_796">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div style={{ width: 16, height: 16, position: 'relative', transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)', transition: 'transform 0.2s' }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 4L10 8L6 12L6.7 12.7L11.4 8L6.7 3.3L6 4Z" fill="#525252" />
      </svg>
    </div>
  );
}

interface MeasurementFieldProps {
  value: string;
  onChange: (value: string) => void;
}

function MeasurementField({ value, onChange }: MeasurementFieldProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const options = ['N/A', 'Kilometers', 'Miles', 'Hours'];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="absolute left-[20px] top-[594px] w-[390px]" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }} data-name="Field">
      <div style={{ textAlign: 'center', color: '#161616', fontSize: 14, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word' }}>Measurement</div>
      {!isOpen ? (
        <div 
          style={{ alignSelf: 'stretch', height: 38, padding: 10, background: '#F4F4F4', overflow: 'hidden', borderBottom: '1px #525252 solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', cursor: 'pointer' }}
          onClick={handleToggle}
        >
          <div style={{ color: '#161616', fontSize: 14, fontFamily: 'IBM Plex Sans', fontWeight: '300', wordWrap: 'break-word' }}>{value}</div>
          <ChevronDownIcon isOpen={isOpen} />
        </div>
      ) : (
        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', alignSelf: 'stretch' }}>
          <div 
            style={{ alignSelf: 'stretch', height: 38, padding: 10, background: '#F4F4F4', overflow: 'hidden', borderBottom: '1px #525252 solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', cursor: 'pointer' }}
            onClick={handleToggle}
          >
            <div style={{ color: '#F4F4F4', fontSize: 14, fontFamily: 'IBM Plex Sans', fontWeight: '300', wordWrap: 'break-word' }}>Please enter a text</div>
            <ChevronDownIcon isOpen={isOpen} />
          </div>
          {options.map((option) => (
            <div 
              key={option}
              style={{ alignSelf: 'stretch', height: 38, padding: 10, background: '#F4F4F4', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', cursor: 'pointer' }}
              onClick={() => handleSelect(option)}
            >
              <div style={{ color: '#161616', fontSize: 14, fontFamily: 'IBM Plex Sans', fontWeight: '300', wordWrap: 'break-word' }}>{option}</div>
              {value === option && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 3L5.5 11L2 7.5L2.7 6.8L5.5 9.6L12.8 2.3L13.5 3Z" fill="#161616" />
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface NewAppointmentRequestMainProps {
  onCancel?: () => void;
  onAddVehicle?: () => void;
  selectedCar?: CarData | null;
  onDeleteCar?: () => void;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  mileage?: string;
  onMileageChange?: (value: string) => void;
  measurement?: string;
  onMeasurementChange?: (value: string) => void;
  onNext?: () => void;
  onGoBack?: () => void;
  canProceed?: boolean;
  onMenuClick?: () => void;
}

export default function NewAppointmentRequestMain({ 
  onCancel, 
  onAddVehicle, 
  selectedCar, 
  onDeleteCar, 
  activeTab = "vehicle", 
  onTabChange,
  mileage = "",
  onMileageChange = () => {},
  measurement = "Kilometers",
  onMeasurementChange = () => {},
  onNext,
  onGoBack,
  canProceed = false,
  onMenuClick
}: NewAppointmentRequestMainProps) {
  return (
    <div className="bg-white relative size-full" data-name="New Appointment Request Main">
      <StatusBar />
      <HomeBar />
      <Frame12 />
      <TopActionBar onAddVehicle={onAddVehicle} hasVehicle={!!selectedCar} />
      {selectedCar && (
        <>
          <SelectedVehicleCard car={selectedCar} onDelete={onDeleteCar} />
          <MileageField value={mileage} onChange={onMileageChange} />
          <MeasurementField value={measurement} onChange={onMeasurementChange} />
        </>
      )}
      {!selectedCar && <NotFound />}
      <VehicleHandback />
      <BottomBar onCancel={onCancel} onGoBack={onGoBack} onNext={onNext} canGoBack={false} canProceed={canProceed} />
      <Frame570 activeTab={activeTab} onTabChange={onTabChange || (() => {})} />
    </div>
  );
}
