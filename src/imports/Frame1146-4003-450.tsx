import svgPaths from "./svg-vv3b3tsk9o";

function Frame1150() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start not-italic relative shrink-0 text-[#161616] text-[14px] w-full">
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Part No: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">WH340</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">{`Code: `}</p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Part: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">ALL TERRAIN WHEEL</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Physical Location: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">BMW Parts</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Shelf Address: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">B1</span>
      </p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`Current Avail: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">30</span>
      </p>
    </div>
  );
}

function Frame789() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9b9b9b] text-[14px] text-nowrap whitespace-pre">Please enter a text</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#da1e28] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Field">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] w-full">Qty to Relocate</p>
      <Frame789 />
    </div>
  );
}

function Frame1153() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Field />
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ea3c3c] text-[10px] w-full">The quantity to relocate cannot exceed the current available stock.</p>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative size-[16px]" data-name="chevron--right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4003_466)" id="chevron--right 1">
          <path d={svgPaths.pa88e080} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="_x3C_Transparent_Rectangle_x3E_"></g>
        </g>
        <defs>
          <clipPath id="clip0_4003_466">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame790() {
  return (
    <div className="bg-[#f4f4f4] h-[38px] relative shrink-0 w-full">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[38px] items-end p-[10px] relative w-full">
          <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <ChevronRight1 />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-600 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Field">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-center text-nowrap whitespace-pre">DFT</p>
      <Frame790 />
    </div>
  );
}

function CheckmarkOutline2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="checkmark--outline 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4003_461)" id="checkmark--outline 2">
          <path d={svgPaths.p342c1580} fill="var(--fill-0, #4C68B0)" id="Vector" />
          <path d={svgPaths.pb93aa00} fill="var(--fill-0, #4C68B0)" id="Vector_2" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_4003_461">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmallBuutton() {
  return (
    <div className="bg-white h-[40px] relative shrink-0" data-name="Small Buutton">
      <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center overflow-clip px-[20px] py-0 relative rounded-[inherit]">
        <CheckmarkOutline2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4c68b0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TrashCan1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trash-can 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4003_454)" id="trash-can 1">
          <path d="M7 6H6V12H7V6Z" fill="var(--fill-0, #4C68B0)" id="Vector" />
          <path d="M10 6H9V12H10V6Z" fill="var(--fill-0, #4C68B0)" id="Vector_2" />
          <path d={svgPaths.p1b095900} fill="var(--fill-0, #4C68B0)" id="Vector_3" />
          <path d="M10 1H6V2H10V1Z" fill="var(--fill-0, #4C68B0)" id="Vector_4" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_4003_454">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmallBuutton1() {
  return (
    <div className="bg-white h-[40px] relative shrink-0" data-name="Small Buutton">
      <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center overflow-clip px-[20px] py-0 relative rounded-[inherit]">
        <TrashCan1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4c68b0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame1148() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <SmallBuutton />
      <SmallBuutton1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame1150 />
      <Frame1153 />
      <Field1 />
      <Frame1148 />
    </div>
  );
}

function PartCard() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="Part Card">
      <div aria-hidden="true" className="absolute border-[#4c68b0] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center p-[16px] relative w-full">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

export default function Frame1146() {
  return (
    <div className="relative size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[20px] relative size-full">
          <PartCard />
        </div>
      </div>
    </div>
  );
}