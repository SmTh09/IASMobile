import svgPaths from "./svg-j87z9vxnuo";

function ChevronRight1() {
  return (
    <div className="relative size-[16px]" data-name="chevron--right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2010_5327)" id="chevron--right 1">
          <path d={svgPaths.pa88e080} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="_x3C_Transparent_Rectangle_x3E_"></g>
        </g>
        <defs>
          <clipPath id="clip0_2010_5327">
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
          <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">BMW PARTS</p>
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

function Field() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Field">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-center text-nowrap whitespace-pre">Physical Location</p>
      <Frame789 />
    </div>
  );
}

export default function Frame555() {
  return (
    <div className="bg-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-[20px] py-[42px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[24px] w-full">New Parts Relocation</p>
          <Field />
        </div>
      </div>
    </div>
  );
}