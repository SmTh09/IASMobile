function Frame1149() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] w-full">
      <p className="leading-[normal] min-w-full relative shrink-0 w-[min-content]">
        <span>{`Vehicle Plate: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">placeholder</span>
      </p>
      <p className="leading-[normal] min-w-full relative shrink-0 w-[min-content]">
        <span>{`date: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">placeholder</span>
      </p>
      <p className="leading-[normal] min-w-full relative shrink-0 w-[min-content]">
        <span>{`Time: `}</span>
        <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">Placeholder</span>
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame1149 />
    </div>
  );
}

export default function PartCard() {
  return (
    <div className="bg-[#f4f4f4] relative size-full" data-name="Part Card">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center p-[16px] relative size-full">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}