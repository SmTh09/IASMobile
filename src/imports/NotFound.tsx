import svgPaths from "./svg-je2mss7al6";

function Search1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[17px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g clipPath="url(#clip0_2012_2479)" id="search 1">
          <path d={svgPaths.p39b46880} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2012_2479">
            <rect fill="white" height="16" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function NotFound() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative size-full" data-name="Not Found">
      <Search1 />
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Not Found</p>
      <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Try adjusting filters or search</p>
    </div>
  );
}