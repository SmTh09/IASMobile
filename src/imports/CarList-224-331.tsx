import svgPaths from "./svg-7z2c1tqhlb";
import { getAsset } from "../utils/assets";

const imgCar22 = getAsset("ef4dd3566d501a653e707bb5052434fb654dd9e0.png", "Car 22");
const imgCar23 = getAsset("ddeb37149cf5e1ffb3b15e50932de0325deb8de0.png", "Car 23");
const imgCar24 = getAsset("4375e1917f3d00d96f5e01f4e220387b140dd856.png", "Car 24");
const imgCar25 = getAsset("69da4e42fbd1deae0a75bdfe3d9519d8e13e3aab.png", "Car 25");
const imgCar26 = getAsset("cd7d082de2f6d9b9f50ed88a346a904ce89bdd0b.png", "Car 26");
const imgIncadeaLogo1 = getAsset("24c902b1a9e277fbde3be49a0758d06802f9c23d.png", "Incadea Logo");

function Search1() {
  return (
    <div className="absolute h-[16px] left-[18px] top-[12px] w-[17px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g clipPath="url(#clip0_224_335)" id="search 1">
          <path d={svgPaths.p39b46880} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_224_335">
            <rect fill="white" height="16" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Searchbar() {
  return (
    <div className="absolute h-[38px] left-[20px] top-[calc(20%+24.8px)] w-[390px]" data-name="Searchbar">
      <div className="absolute bg-[#f4f4f4] h-[40px] left-0 top-0 w-[390px]">
        <div aria-hidden="true" className="absolute border-[#8d8d8d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      </div>
      <Search1 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[53px] not-italic text-[#9b9b9b] text-[14px] top-[11px] w-[81px]">Search</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] w-[194px]">
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Plate: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">MNO345</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Registration Date: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">07.03.2024</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Brand: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">Man</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Model: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">TGX</span>
      </p>
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow--right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_224_367)" id="arrow--right 2">
          <path d={svgPaths.pfec3600} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_224_367">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VehicleCard() {
  return (
    <div className="absolute bg-[#f4f4f4] box-border content-stretch flex gap-[20px] items-center justify-center left-0 overflow-clip p-[20px] top-0 w-[390px]" data-name="Vehicle Card">
      <div className="relative shrink-0 size-[100px]" data-name="Car2 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-46.92%] max-w-none top-0 w-[163.85%]" src={imgCar22} />
        </div>
      </div>
      <Frame19 />
      <ArrowRight2 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] w-[194px]">
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Plate: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">2FAST4U</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Registration Date: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">03.06.2024</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Brand: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">Man</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Model: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">TGX</span>
      </p>
    </div>
  );
}

function ArrowRight3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow--right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_224_367)" id="arrow--right 2">
          <path d={svgPaths.pfec3600} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_224_367">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VehicleCard1() {
  return (
    <div className="absolute bg-[#f4f4f4] box-border content-stretch flex gap-[20px] items-center justify-center left-0 overflow-clip p-[20px] top-[155px] w-[390px]" data-name="Vehicle Card">
      <div className="relative shrink-0 size-[100px]" data-name="Car2 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[133.03%] left-0 max-w-none top-[-16.51%] w-[125%]" src={imgCar23} />
        </div>
      </div>
      <Frame20 />
      <ArrowRight3 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] w-[194px]">
      <p className="leading-[normal] relative shrink-0 w-full whitespace-pre-wrap">
        <span>{`Plate: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{` VROOM2X`}</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Registration Date: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">03.07.2024</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Brand: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">Man</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Model: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">TGX</span>
      </p>
    </div>
  );
}

function ArrowRight4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow--right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_224_367)" id="arrow--right 2">
          <path d={svgPaths.pfec3600} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_224_367">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VehicleCard2() {
  return (
    <div className="absolute bg-[#f4f4f4] box-border content-stretch flex gap-[20px] items-center justify-center left-0 overflow-clip p-[20px] top-[310px] w-[390px]" data-name="Vehicle Card">
      <div className="relative shrink-0 size-[100px]" data-name="Car2 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCar24} />
      </div>
      <Frame21 />
      <ArrowRight4 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] w-[194px]">
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Plate: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">YAY4ME</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Registration Date: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">03.07.2024</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Brand: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">Man</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Model: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">TGX</span>
      </p>
    </div>
  );
}

function ArrowRight5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow--right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_224_367)" id="arrow--right 2">
          <path d={svgPaths.pfec3600} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_224_367">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VehicleCard3() {
  return (
    <div className="absolute bg-[#f4f4f4] box-border content-stretch flex gap-[20px] items-center justify-center left-0 overflow-clip p-[20px] top-[465px] w-[390px]" data-name="Vehicle Card">
      <div className="relative shrink-0 size-[100px]" data-name="Car2 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCar25} />
      </div>
      <Frame22 />
      <ArrowRight5 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] w-[194px]">
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Plate: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">GOALZ1</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Registration Date: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">03.07.2024</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Brand: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">Man</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Model: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">TGX</span>
      </p>
    </div>
  );
}

function ArrowRight6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow--right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_224_367)" id="arrow--right 2">
          <path d={svgPaths.pfec3600} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_224_367">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VehicleCard4() {
  return (
    <div className="absolute bg-[#f4f4f4] box-border content-stretch flex gap-[20px] items-center justify-center left-0 overflow-clip p-[20px] top-[620px] w-[390px]" data-name="Vehicle Card">
      <div className="relative shrink-0 size-[100px]" data-name="Car2 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCar26} />
      </div>
      <Frame23 />
      <ArrowRight6 />
    </div>
  );
}

function ScrollVehicles() {
  return (
    <div className="absolute h-[619px] left-[20px] overflow-x-clip overflow-y-auto top-[calc(20%+81.8px)] w-[390px]" data-name="Scroll Vehicles">
      <VehicleCard />
      <VehicleCard1 />
      <VehicleCard2 />
      <VehicleCard3 />
      <VehicleCard4 />
    </div>
  );
}

function Search2() {
  return (
    <div className="absolute left-[332px] size-[32px] top-[7px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_224_339)" id="search 1">
          <path d={svgPaths.p2c8f5f80} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_224_339">
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
        <g clipPath="url(#clip0_224_360)" id="menu 1">
          <path d="M28 6H4V8H28V6Z" fill="var(--fill-0, #63646A)" id="Vector" />
          <path d="M28 24H4V26H28V24Z" fill="var(--fill-0, #63646A)" id="Vector_2" />
          <path d="M28 12H4V14H28V12Z" fill="var(--fill-0, #63646A)" id="Vector_3" />
          <path d="M28 18H4V20H28V18Z" fill="var(--fill-0, #63646A)" id="Vector_4" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_224_360">
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
        <g clipPath="url(#clip0_224_348)" id="Time">
          <path d={svgPaths.p694a000} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_224_348">
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
        <g clipPath="url(#clip0_224_354)" id="Reception">
          <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_224_354">
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
        <g clipPath="url(#clip0_224_351)" id="Wi-fi">
          <path clipRule="evenodd" d={svgPaths.p2952ae40} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_224_351">
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
        <g clipPath="url(#clip0_224_343)" id="Battery">
          <path d={svgPaths.p3689d180} id="Vector" opacity="0.35" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p2a8bd780} fill="var(--fill-0, black)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p39726670} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_224_343">
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
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex h-[34px] items-center justify-center left-0 overflow-clip pb-0 pt-[13px] px-0 right-0 top-[calc(100%-34px)]" data-name="Home Bar">
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
      <Searchbar />
      <ScrollVehicles />
      <TopBar />
    </div>
  );
}