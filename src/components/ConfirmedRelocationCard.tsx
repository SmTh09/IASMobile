import svgPaths from "../imports/svg-yeq3cdgagh";

interface ConfirmedRelocationCardProps {
  partNumber: string;
  partName: string;
  physicalLocation: string;
  currentShelf: string;
  currentAvail: number;
  qtyToRelocate: string;
  newShelf: string;
  onEdit: () => void;
  onDelete: () => void;
}

function Edit2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="edit 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4030_351)" id="edit 2">
          <path d="M15 13H1V14H15V13Z" fill="var(--fill-0, #4C68B0)" id="Vector" />
          <path d={svgPaths.p279f5270} fill="var(--fill-0, #4C68B0)" id="Vector_2" />
          <g id="_Transparent_Rectangle_"></g>
        </g>
        <defs>
          <clipPath id="clip0_4030_351">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmallButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-white h-[40px] relative shrink-0 cursor-pointer" data-name="Small Button" onClick={onClick}>
      <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center overflow-clip px-[20px] py-0 relative rounded-[inherit]">
        <Edit2 />
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

function SmallButton1({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-white h-[40px] relative shrink-0 cursor-pointer" data-name="Small Button" onClick={onClick}>
      <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center overflow-clip px-[20px] py-0 relative rounded-[inherit]">
        <TrashCan1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4c68b0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function ConfirmedRelocationCard({
  partNumber,
  partName,
  physicalLocation,
  currentShelf,
  currentAvail,
  qtyToRelocate,
  newShelf,
  onEdit,
  onDelete
}: ConfirmedRelocationCardProps) {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="Part Card">
      <div aria-hidden="true" className="absolute border-[#4c68b0] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center p-[16px] relative w-full">
          <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start not-italic relative shrink-0 text-[#161616] text-[14px] w-full">
              <p className="leading-[normal] min-w-full relative shrink-0 w-[min-content]">
                <span>Part No: </span>
                <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{partNumber}</span>
              </p>
              <p className="leading-[normal] min-w-full relative shrink-0 w-[min-content]">Code: </p>
              <p className="leading-[normal] min-w-full relative shrink-0 w-[min-content]">
                <span>Part: </span>
                <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{partName}</span>
              </p>
              <p className="leading-[normal] min-w-full relative shrink-0 w-[min-content]">
                <span>Physical Location: </span>
                <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{physicalLocation}</span>
              </p>
              <p className="leading-[normal] min-w-full relative shrink-0 w-[min-content]">
                <span>Current Shelf: </span>
                <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{currentShelf}</span>
              </p>
              <p className="leading-[normal] min-w-full relative shrink-0 w-[min-content]">
                <span>Current Avail: </span>
                <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{currentAvail}</span>
              </p>
              <p className="leading-[normal] min-w-full relative shrink-0 w-[min-content]">
                <span>Qty to Relocate: </span>
                <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{qtyToRelocate}</span>
              </p>
              <p className="h-[18px] leading-[normal] relative shrink-0 w-[358px]">
                <span>New Shelf: </span>
                <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{newShelf}</span>
              </p>
            </div>
            <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
              <SmallButton onClick={onEdit} />
              <SmallButton1 onClick={onDelete} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
