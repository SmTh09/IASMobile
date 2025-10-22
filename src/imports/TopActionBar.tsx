import svgPaths from "./svg-45s5i67hip";

function AddAlt2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="add--alt 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2012_217)" id="add--alt 2">
          <path d={svgPaths.p1a41bcc0} fill="var(--fill-0, #525252)" id="Vector" />
          <path d={svgPaths.p14d86600} fill="var(--fill-0, #525252)" id="Vector_2" />
          <g id="_Transparent_Rectangle_"></g>
        </g>
        <defs>
          <clipPath id="clip0_2012_217">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame903() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Add Parts</p>
      <AddAlt2 />
    </div>
  );
}

export default function TopActionBar() {
  return (
    <div className="bg-[#eef0f8] relative size-full" data-name="TopActionBar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
          <Frame903 />
        </div>
      </div>
    </div>
  );
}