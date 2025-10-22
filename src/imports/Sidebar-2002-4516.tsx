import svgPaths from "./svg-6y61wrlpu5";
import imgImageProfile from "figma:asset/8697229b110bc10e212043bccd9916edf1810dd9.png";

function Paragraph() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[36px] left-0 not-italic text-[#161616] text-[24px] text-nowrap top-[2px] whitespace-pre">Theo Floyd</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans:Light',_sans-serif] leading-[30px] left-0 not-italic text-[#161616] text-[20px] text-nowrap top-[1.5px] whitespace-pre">Customer</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[66px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[66px] items-start relative w-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function ImageProfile() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Image (Profile)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageProfile} />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[80px]">
        <ImageProfile />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[80px] items-center relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[121px] relative shrink-0 w-[340px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[121px] items-start pb-px pt-[20px] px-[20px] relative w-[340px]">
        <Container2 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
            <path d={svgPaths.p3c621900} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p36280080} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">After Sales</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[96.477px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[96.477px]">
        <Container4 />
        <Text />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute box-border content-stretch flex h-[62px] items-center justify-between left-0 pb-px pt-0 px-[20px] top-0 w-[340px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container5 />
      <Icon1 />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="h-[62px] relative shrink-0 w-full" data-name="Primitive.button">
      <Sidebar />
    </div>
  );
}

function Wikis1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="wikis 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="wikis 1">
          <path d={svgPaths.p289ff0f1} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">CRM</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[59.883px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[59.883px]">
        <Wikis1 />
        <Text1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar1() {
  return (
    <div className="absolute box-border content-stretch flex h-[62px] items-center justify-between left-0 pb-px pt-0 px-[20px] top-0 w-[340px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Icon2 />
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="h-[62px] relative shrink-0 w-full" data-name="Primitive.button">
      <Sidebar1 />
    </div>
  );
}

function Box1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="box 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="box 1">
          <path d={svgPaths.p1ba2b200} fill="var(--fill-0, #63646A)" id="Vector" />
          <path d={svgPaths.p12dabb00} fill="var(--fill-0, #63646A)" id="Vector_2" />
          <g id="<Transparent Rectangle>"></g>
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">Parts</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[74.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[74.688px]">
        <Box1 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar2() {
  return (
    <div className="absolute box-border content-stretch flex h-[62px] items-center justify-between left-0 pb-px pt-0 px-[20px] top-0 w-[340px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container7 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="h-[62px] relative shrink-0 w-full" data-name="Primitive.button">
      <Sidebar2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[76.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-[76.594px]">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-neutral-600 text-nowrap top-0 whitespace-pre">Shelf Address</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[44.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44.5px] items-center justify-between pb-px pl-[48px] pr-[215.406px] pt-0 relative w-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[95.367px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-[95.367px]">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-neutral-600 text-nowrap top-0 whitespace-pre">Stock Adjustments</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[44.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44.5px] items-center justify-between pb-px pl-[48px] pr-[196.633px] pt-0 relative w-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[132.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-[132.266px]">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-neutral-600 text-nowrap top-0 whitespace-pre">Relocations</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[44.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44.5px] items-center justify-between pb-px pl-[48px] pr-[159.734px] pt-0 relative w-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[104.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-[104.055px]">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-neutral-600 text-nowrap top-0 whitespace-pre">Inventory</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[44.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44.5px] items-center justify-between pb-px pl-[48px] pr-[187.945px] pt-0 relative w-full">
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Sidebar3() {
  return (
    <div className="bg-gray-50 content-stretch flex flex-col h-[178px] items-start relative shrink-0 w-full" data-name="Sidebar">
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <PrimitiveButton2 />
      <Sidebar3 />
    </div>
  );
}

function UserFeedback1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="user--feedback 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="user--feedback 1">
          <path d={svgPaths.p2d5ec500} fill="var(--fill-0, #525252)" id="Vector" />
          <path d={svgPaths.p2ffeec80} fill="var(--fill-0, #525252)" id="Vector_2" />
          <path d={svgPaths.p36d40780} fill="var(--fill-0, #525252)" id="Vector_3" />
          <g id="&lt;Transparent Rectangle&gt;"></g>
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">Services</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[60.68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[60.68px]">
        <UserFeedback1 />
        <Text7 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar4() {
  return (
    <div className="absolute box-border content-stretch flex h-[62px] items-center justify-between left-0 pb-px pt-0 px-[20px] top-0 w-[340px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container12 />
      <Icon4 />
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="h-[62px] relative shrink-0 w-full" data-name="Primitive.button">
      <Sidebar4 />
    </div>
  );
}

function Car1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="car 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2002_1135)" id="car 1">
          <path d={svgPaths.p3604cf00} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2002_1135">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">Vehicle</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[21px] relative shrink-0 w-[73.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[73.156px]">
        <Car1 />
        <Text8 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar5() {
  return (
    <div className="absolute box-border content-stretch flex h-[62px] items-center justify-between left-0 pb-px pt-0 px-[20px] top-0 w-[340px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container13 />
      <Icon5 />
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="h-[62px] relative shrink-0 w-full" data-name="Primitive.button">
      <Sidebar5 />
    </div>
  );
}

function Document1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="document 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2002_1162)" id="document 1">
          <path d={svgPaths.p3f732780} fill="var(--fill-0, #525252)" id="Vector" />
          <path d="M11 11H5V12H11V11Z" fill="var(--fill-0, #525252)" id="Vector_2" />
          <path d="M11 8H5V9H11V8Z" fill="var(--fill-0, #525252)" id="Vector_3" />
          <g id="Vector_4"></g>
        </g>
        <defs>
          <clipPath id="clip0_2002_1162">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">MasterData</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[21px] relative shrink-0 w-[80.898px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[80.898px]">
        <Document1 />
        <Text9 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[62px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[62px] items-center justify-between pb-px pt-0 px-[20px] relative w-full">
          <Container14 />
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Currency1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="currency 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2002_1151)" id="currency 1">
          <path d={svgPaths.peaab00} fill="var(--fill-0, #525252)" id="Vector" />
          <path d={svgPaths.p15022600} fill="var(--fill-0, #525252)" id="Vector_2" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2002_1151">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">Purchases</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[21px] relative shrink-0 w-[78.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[78.578px]">
        <Currency1 />
        <Text10 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar6() {
  return (
    <div className="absolute box-border content-stretch flex h-[62px] items-center justify-between left-0 pb-px pt-0 px-[20px] top-0 w-[340px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container16 />
      <Icon7 />
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="h-[62px] relative shrink-0 w-full" data-name="Primitive.button">
      <Sidebar6 />
    </div>
  );
}

function Help2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="help 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2002_1156)" id="help 2">
          <path d={svgPaths.pb93aa00} fill="var(--fill-0, #525252)" id="Vector" />
          <path d={svgPaths.p1323d300} fill="var(--fill-0, #525252)" id="Vector_2" />
          <path d={svgPaths.p8a42a00} fill="var(--fill-0, #525252)" id="Vector_3" />
          <g id="Vector_4"></g>
        </g>
        <defs>
          <clipPath id="clip0_2002_1156">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">System Admin</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[21px] relative shrink-0 w-[136.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[136.969px]">
        <Help2 />
        <Text11 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Sidebar7() {
  return (
    <div className="absolute box-border content-stretch flex h-[62px] items-center justify-between left-0 pb-px pt-0 px-[20px] top-0 w-[340px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container17 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton6() {
  return (
    <div className="h-[62px] relative shrink-0 w-full" data-name="Primitive.button">
      <Sidebar7 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
            <path d={svgPaths.p2ddad400} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.667%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p3132d200} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
            <path d="M2.33333 1H1" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 2">
            <path d="M6.33333 1H1" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 2">
            <path d="M6.33333 1H1" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">Privacy Policy</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[21px] relative shrink-0 w-[115.133px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[115.133px]">
        <Container18 />
        <Text12 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[62px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[62px] items-center justify-between pb-px pt-0 px-[20px] relative w-full">
          <Container19 />
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.24%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.pc35ac80} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon11 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">Rate us</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[21px] relative shrink-0 w-[76.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[76.25px]">
        <Container21 />
        <Text13 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[62px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[62px] items-center justify-between pb-px pt-0 px-[20px] relative w-full">
          <Container22 />
          <Icon12 />
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_12.5%_29.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-10%_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
            <path d={svgPaths.p1ebcc148} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[37.5%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
            <path d="M9 1H1" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_62.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 14">
            <path d={svgPaths.p1edb0620} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon13 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">Log out</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[21px] relative shrink-0 w-[74.711px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[21px] items-center relative w-[74.711px]">
        <Container24 />
        <Text14 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[62px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[62px] items-center justify-between pb-px pt-0 px-[20px] relative w-full">
          <Container25 />
          <Icon14 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[340px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[340px]">
        <PrimitiveButton />
        <PrimitiveButton1 />
        <PrimitiveDiv />
        <PrimitiveButton3 />
        <PrimitiveButton4 />
        <Container15 />
        <PrimitiveButton5 />
        <PrimitiveButton6 />
        <Container20 />
        <Container23 />
        <Container26 />
      </div>
    </div>
  );
}

export default function Sidebar8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start relative shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-full" data-name="Sidebar">
      <Container3 />
      <Container27 />
    </div>
  );
}