import svgPaths from "./svg-wtnjwlvkhz";

function ChevronRight1() {
  return (
    <div className="relative size-[16px]" data-name="chevron--right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2012_708)" id="chevron--right 1">
          <path d={svgPaths.pa88e080} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="_x3C_Transparent_Rectangle_x3E_"></g>
        </g>
        <defs>
          <clipPath id="clip0_2012_708">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame789() {
  return (
    <div className="bg-[#f4f4f4] h-[38px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[38px] items-start justify-between p-[10px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f4f4f4] text-[14px] text-nowrap whitespace-pre">Please enter a text</p>
          <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
            <div className="flex-none rotate-[270deg]">
              <ChevronRight1 />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-600 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Checkmark1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="checkmark 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2012_712)" id="checkmark 1">
          <path d={svgPaths.p3f065700} fill="var(--fill-0, #F4F4F4)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2012_712">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[38px] items-center justify-between p-[10px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">N/A</p>
          <Checkmark1 />
        </div>
      </div>
    </div>
  );
}

function Checkmark2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="checkmark 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2012_712)" id="checkmark 1">
          <path d={svgPaths.p3f065700} fill="var(--fill-0, #F4F4F4)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2012_712">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame791() {
  return (
    <div className="bg-[#f4f4f4] h-[38px] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[38px] items-center justify-between p-[10px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Kilometers</p>
          <Checkmark2 />
        </div>
      </div>
    </div>
  );
}

function Frame816() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[348px]">
      <Frame789 />
      <Frame790 />
      <Frame791 />
    </div>
  );
}

export default function Field() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative size-full" data-name="Field">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-center text-nowrap whitespace-pre">Measurement</p>
      <Frame816 />
    </div>
  );
}