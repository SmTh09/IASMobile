import svgPaths from "./svg-3zhuzhk3br";
import imgIncadeaLogo1 from "figma:asset/24c902b1a9e277fbde3be49a0758d06802f9c23d.png";

function CloseOutline3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="close--outline 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_5716)" id="close--outline 3">
          <path d={svgPaths.p35e68500} fill="var(--fill-0, #4C68B0)" id="Vector" />
          <g id="_Transparent_Rectangle_"></g>
          <path d={svgPaths.p35a89700} fill="var(--fill-0, #4C68B0)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_6_5716">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-[185px]" data-name="Button">
      <div className="box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative w-[185px]">
        <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4c68b0] text-[14px] text-nowrap w-[109px]">Cancel</p>
        <CloseOutline3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4c68b0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BottomBar() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[20px] h-[108px] items-start left-0 overflow-clip p-[20px] w-[430px]" data-name="BottomBar" style={{ top: "calc(80% + 78.4px)" }}>
      <Button />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Search1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[17px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g clipPath="url(#clip0_6_5712)" id="search 1">
          <path d={svgPaths.p39b46880} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_6_5712">
            <rect fill="white" height="16" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Searchbar() {
  return (
    <div className="absolute bg-[#f4f4f4] h-[31px] left-[20px] w-[390px]" data-name="Searchbar" style={{ top: "calc(20% + 23.6px)" }}>
      <div className="box-border content-stretch flex gap-[20px] h-[31px] items-center overflow-clip px-[20px] py-[10px] relative w-[390px]">
        <Search1 />
        <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9b9b9b] text-[14px] text-nowrap whitespace-pre">Search</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] w-[194px]">
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Plate: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">CF-545-YA</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Registration Date: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">25.02.2020</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Brand: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">BMW</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Model: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">330i xDrive</span>
      </p>
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow--right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_5708)" id="arrow--right 2">
          <path d={svgPaths.pfec3600} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_6_5708">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VehicleCard() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="Vehicle Card">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center justify-center p-[20px] relative w-full">
          <div className="relative shrink-0 size-[100px]" data-name="Car2 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="6f0173215c1879418c7069b2a98f38085607c4e5.png" />
          </div>
          <Frame19 />
          <ArrowRight2 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] w-[194px]">
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Plate: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">TK-271-GT</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Registration Date: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">21.02.2020</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Brand: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">BMW</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Model: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">540i xDrive</span>
      </p>
    </div>
  );
}

function ArrowRight3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow--right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_5708)" id="arrow--right 2">
          <path d={svgPaths.pfec3600} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_6_5708">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VehicleCard1() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="Vehicle Card">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center justify-center p-[20px] relative w-full">
          <div className="relative shrink-0 size-[100px]" data-name="Car2 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="a3fb711198d5e36ab2663f415e22e9b4baf23d93.png" />
          </div>
          <Frame20 />
          <ArrowRight3 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] w-[194px]">
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Plate: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">QX-504-AP</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Registration Date: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">18.02.2020</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Brand: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">BMW</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Model: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">330I XDRIVE A</span>
      </p>
    </div>
  );
}

function ArrowRight4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow--right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_5708)" id="arrow--right 2">
          <path d={svgPaths.pfec3600} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_6_5708">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VehicleCard2() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="Vehicle Card">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center justify-center p-[20px] relative w-full">
          <div className="relative shrink-0 size-[100px]" data-name="Car2 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="efbebb7439ed4cef4db7bd1bcc258a8934c444ea.png" />
          </div>
          <Frame21 />
          <ArrowRight4 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] w-[194px]">
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Plate: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">WW-896-BA</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Registration Date: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">01.01.2020</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Brand: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">BMW</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Model: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">330I XDRIVE A</span>
      </p>
    </div>
  );
}

function ArrowRight5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow--right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_5708)" id="arrow--right 2">
          <path d={svgPaths.pfec3600} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_6_5708">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VehicleCard3() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="Vehicle Card">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center justify-center p-[20px] relative w-full">
          <div className="relative shrink-0 size-[100px]" data-name="Car2 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="e4eed5316f8c55baa4460b389cabd2bd9a7570f7.png" />
          </div>
          <Frame22 />
          <ArrowRight5 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] w-[194px]">
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Plate: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">WW-896-BA</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Registration Date: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">01.01.2020</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Brand: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">BMW</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Model: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">X6 XDRIVE35I US</span>
      </p>
    </div>
  );
}

function ArrowRight6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow--right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_5708)" id="arrow--right 2">
          <path d={svgPaths.pfec3600} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_6_5708">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VehicleCard4() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="Vehicle Card">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center justify-center p-[20px] relative w-full">
          <div className="relative shrink-0 size-[100px]" data-name="Car2 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="eeeb93fd4f22700af1b963bb328a590cb9e6b15c.png" />
          </div>
          <Frame23 />
          <ArrowRight6 />
        </div>
      </div>
    </div>
  );
}

function Frame869() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[568px] items-start left-[20px] overflow-x-clip overflow-y-auto w-[390px]" style={{ top: "calc(20% + 69.6px)" }}>
      <VehicleCard />
      <VehicleCard1 />
      <VehicleCard2 />
      <VehicleCard3 />
      {[...Array(2).keys()].map((_, i) => (
        <VehicleCard4 key={i} />
      ))}
    </div>
  );
}

function Search2() {
  return (
    <div className="absolute left-[332px] size-[32px] top-[7px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_864)" id="search 1">
          <path d={svgPaths.p2c8f5f80} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_864">
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
        <g clipPath="url(#clip0_1_857)" id="menu 1">
          <path d="M28 6H4V8H28V6Z" fill="var(--fill-0, #63646A)" id="Vector" />
          <path d="M28 24H4V26H28V24Z" fill="var(--fill-0, #63646A)" id="Vector_2" />
          <path d="M28 12H4V14H28V12Z" fill="var(--fill-0, #63646A)" id="Vector_3" />
          <path d="M28 18H4V20H28V18Z" fill="var(--fill-0, #63646A)" id="Vector_4" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_857">
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
      <Search2 />
      <Menu1 />
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute h-[60px] left-0 top-[59px] w-[430px]" data-name="TopBar">
      <div aria-hidden="true" className="absolute border-[#3d538d] border-[0px_0px_10px] border-solid inset-0 pointer-events-none" />
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
        <g clipPath="url(#clip0_1_811)" id="Time">
          <path d={svgPaths.p694a000} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_811">
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
        <g clipPath="url(#clip0_1_837)" id="Reception">
          <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_837">
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
        <g clipPath="url(#clip0_1_818)" id="Wi-fi">
          <path clipRule="evenodd" d={svgPaths.p2952ae40} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_818">
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
        <g clipPath="url(#clip0_1_806)" id="Battery">
          <path d={svgPaths.p3689d180} id="Vector" opacity="0.35" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p2a8bd780} fill="var(--fill-0, black)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p39726670} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_806">
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
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex h-[34px] items-center justify-center left-0 overflow-clip pb-0 pt-[13px] px-0 right-0" data-name="Home Bar" style={{ top: "calc(100% - 34px)" }}>
      <div className="bg-black h-[5px] rounded-[3px] shrink-0 w-[134px]" data-name="Rectangle" />
    </div>
  );
}

export default function CarList() {
  return (
    <div className="bg-white relative size-full" data-name="Car List">
      <StatusBar />
      <HomeBar />
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[20px] not-italic text-[#161616] text-[24px] text-nowrap top-[159px] whitespace-pre">{`Select a vehicle `}</p>
      <BottomBar />
      <Searchbar />
      <Frame869 />
      <TopBar />
    </div>
  );
}