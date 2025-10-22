import svgPaths from "./svg-bcd0r9bhff";

function CloseOutline3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="close--outline 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4037_1000)" id="close--outline 3">
          <path d={svgPaths.p35e68500} fill="var(--fill-0, #4C68B0)" id="Vector" />
          <g id="_Transparent_Rectangle_"></g>
          <path d={svgPaths.p35a89700} fill="var(--fill-0, #4C68B0)" id="Vector_2" />
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

function Button() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-[185px]" data-name="Button">
      <div className="box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative rounded-[inherit] w-[185px]">
        <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4c68b0] text-[14px] text-nowrap w-[109px]">Cancel</p>
        <CloseOutline3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4c68b0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function AddAlt2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="add--alt 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4037_995)" id="add--alt 2">
          <path d={svgPaths.p1a41bcc0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p14d86600} fill="var(--fill-0, #F2F2F7)" id="Vector_2" />
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

function Button1() {
  return (
    <div className="bg-[#4c68b0] box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative shrink-0 w-[185px]" data-name="Button">
      <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white w-[109px]">{`New `}</p>
      <AddAlt2 />
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
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}