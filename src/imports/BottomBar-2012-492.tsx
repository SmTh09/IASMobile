import svgPaths from "./svg-tvoj4z3mio";

function CloseOutline3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="close--outline 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2002_222)" id="close--outline 3">
          <path d={svgPaths.p35e68500} fill="var(--fill-0, #4C68B0)" id="Vector" />
          <g id="_Transparent_Rectangle_"></g>
          <path d={svgPaths.p35a89700} fill="var(--fill-0, #4C68B0)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2002_222">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[40px] relative shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center overflow-clip px-[20px] py-0 relative rounded-[inherit]">
        <CloseOutline3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4c68b0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative size-[16px]" data-name="arrow--right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2012_501)" id="arrow--right 2">
          <path d={svgPaths.pfec3600} fill="var(--fill-0, white)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2012_501">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#393939] box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative shrink-0 w-[147px]" data-name="Button">
      <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white w-[109px]">Go Back</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowRight2 />
        </div>
      </div>
    </div>
  );
}

function CheckmarkFilled1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="checkmark--filled 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2012_496)" id="checkmark--filled 1">
          <path d={svgPaths.p32be9f00} fill="var(--fill-0, white)" id="Vector" />
          <g id="inner-path"></g>
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2012_496">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#4c68b0] box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative shrink-0 w-[147px]" data-name="Button">
      <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white w-[109px]">Submit</p>
      <CheckmarkFilled1 />
    </div>
  );
}

export default function BottomBar() {
  return (
    <div className="bg-white relative size-full" data-name="BottomBar">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start p-[20px] relative size-full">
          <Button />
          <Button1 />
          <Button2 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}