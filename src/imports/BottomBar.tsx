import svgPaths from "./svg-gpii4in2y9";

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

interface ButtonProps {
  onClick?: () => void;
}

function Button({ onClick }: ButtonProps) {
  return (
    <div 
      className="bg-white h-[40px] relative shrink-0 w-[185px] cursor-pointer hover:bg-[#f5f7fa] transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div className="box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative rounded-[inherit] w-[185px]">
        <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4c68b0] text-[14px] text-nowrap w-[109px]">Cancel</p>
        <CloseOutline3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4c68b0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

interface BottomBarProps {
  onCancel?: () => void;
}

export default function BottomBar({ onCancel }: BottomBarProps) {
  return (
    <div className="bg-white relative size-full" data-name="BottomBar">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start p-[20px] relative size-full">
          <Button onClick={onCancel} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}