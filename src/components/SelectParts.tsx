import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-fj0v84ra9f";
import svgPathsChecked from "../imports/svg-54kng79pjw";
import StatusBar from "./StatusBar";
import { IncadeaLogo } from "./IncadeaLogo";
import NotFound from "../imports/NotFound";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebase/firestore";
import { isPartRelocatable } from "../utils/firebase/partValidation";
import { fetchAllPartShelfInstances, type PartShelfInstance } from "../utils/firebase/relationalData";

export interface PartData {
  id: string; // Composite ID for UI (partId_shelfRef)
  parentPartId: string; // Actual parent part document ID
  partNumber: string;
  partName: string;
  physicalLocation: string;
  shelfAddress: string;
  currentAvailability: number;
  physicalLocationRef: string;
  shelfRef: string;
}

interface SelectPartsProps {
  onSelectPart: (part: PartData) => void;
  onGoBack: () => void;
  onMenuClick?: () => void;
}

function Search1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[17px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g clipPath="url(#clip0_2002_4792)" id="search 1">
          <path d={svgPaths.p39b46880} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2002_4792">
            <rect fill="white" height="16" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface SearchbarProps {
  value: string;
  onChange: (value: string) => void;
}

function Searchbar({ value, onChange }: SearchbarProps) {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative shrink-0 w-[390px]" data-name="Searchbar">
      <div className="box-border content-stretch flex gap-[20px] h-[40px] items-center overflow-clip px-[20px] py-[10px] relative rounded-[inherit] w-[390px]">
        <Search1 />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search"
          className="bg-transparent font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#63646a] text-[14px] placeholder:text-[#9b9b9b] border-none outline-none flex-1"
        />
      </div>
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

interface CheckboxProps {
  checked: boolean;
}

function Checkbox11({ checked }: CheckboxProps) {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="checkbox (1) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2012_1301)" id="checkbox (1) 1">
          <path d={checked ? svgPathsChecked.p22803580 : svgPaths.p7335700} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2012_1301">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface PartCardProps {
  part: PartData;
  isSelected: boolean;
  onSelect: () => void;
}

function PartCard({ part, isSelected, onSelect }: PartCardProps) {
  return (
    <div
      className="bg-[#f4f4f4] box-border content-stretch flex gap-[20px] items-center p-[16px] relative shrink-0 w-[390px] cursor-pointer hover:bg-[#e8e8e8] transition-colors"
      data-name="Part Card"
      onClick={onSelect}
    >
      <Checkbox11 checked={isSelected} />
      <div className="basis-0 content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[14px]">
        <p className="leading-[normal] relative shrink-0 w-full">
          <span>Part No: </span>
          <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{part.partNumber}</span>
        </p>
        <p className="leading-[normal] relative shrink-0 w-full">
          <span>Part: </span>
          <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{part.partName}</span>
        </p>
        <p className="leading-[normal] relative shrink-0 w-full">
          <span>Physical Location: </span>
          <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{part.physicalLocation}</span>
        </p>
        <p className="leading-[normal] relative shrink-0 w-full">
          <span>Shelf Address: </span>
          <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{part.shelfAddress}</span>
        </p>
        <p className="leading-[normal] relative shrink-0 w-full">
          <span>Current Avail: </span>
          <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{part.currentAvailability}</span>
        </p>
      </div>
    </div>
  );
}

function Search2() {
  return (
    <div className="absolute left-[332px] size-[32px] top-[7px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2002_1796)" id="search 1">
          <path d={svgPaths.p2c8f5f80} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2002_1796">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Menu1Props {
  onMenuClick?: () => void;
}

function Menu1({ onMenuClick }: Menu1Props) {
  return (
    <div className="absolute left-0 size-[32px] top-[7px] cursor-pointer" data-name="menu 1" onClick={onMenuClick}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2002_1800)" id="menu 1">
          <path d="M28 6H4V8H28V6Z" fill="var(--fill-0, #63646A)" id="Vector" />
          <path d="M28 24H4V26H28V24Z" fill="var(--fill-0, #63646A)" id="Vector_2" />
          <path d="M28 12H4V14H28V12Z" fill="var(--fill-0, #63646A)" id="Vector_3" />
          <path d="M28 18H4V20H28V18Z" fill="var(--fill-0, #63646A)" id="Vector_4" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2002_1800">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Frame10Props {
  onMenuClick?: () => void;
}

function Frame10({ onMenuClick }: Frame10Props) {
  return (
    <div className="absolute h-[45.714px] left-[33px] top-[7px] w-[364px]">
      <div className="absolute h-[45.714px] left-[66px] top-0 w-[100px]" data-name="incadea_logo 1">
        <IncadeaLogo width={100} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" />
      </div>
      <Search2 />
      <Menu1 onMenuClick={onMenuClick} />
    </div>
  );
}

interface TopBarProps {
  onMenuClick?: () => void;
}

function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <div className="absolute h-[60px] left-0 top-[59px] w-[430px]" data-name="TopBar">
      <div aria-hidden="true" className="absolute border-[#3d538d] border-[0px_0px_10px] border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-white h-[60px] left-0 pointer-events-none top-0 w-[430px]">
        <div aria-hidden="true" className="absolute border-[#63646a] border-[0px_0px_1px] border-solid inset-0" />
        <div className="absolute inset-0 shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
      </div>
      <Frame10 onMenuClick={onMenuClick} />
    </div>
  );
}

function CloseOutline3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="close--outline 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2002_260)" id="close--outline 3">
          <path d={svgPaths.p35e68500} fill="var(--fill-0, #4C68B0)" id="Vector" />
          <g id="_Transparent_Rectangle_"></g>
          <path d={svgPaths.p35a89700} fill="var(--fill-0, #4C68B0)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2002_260">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Button1Props {
  onClose?: () => void;
}

function Button1({ onClose }: Button1Props) {
  return (
    <div className="bg-white h-[40px] relative shrink-0 cursor-pointer" data-name="Button" onClick={onClose}>
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
        <g clipPath="url(#clip0_2010_5341)" id="arrow--right 2">
          <path d={svgPaths.pfec3600} fill="var(--fill-0, white)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2010_5341">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Button2Props {
  onGoBack?: () => void;
}

function Button2({ onGoBack }: Button2Props) {
  return (
    <div className="bg-[#393939] box-border content-stretch flex h-[40px] items-center overflow-clip px-[20px] py-0 relative shrink-0 w-[147px] cursor-pointer" data-name="Button" onClick={onGoBack}>
      <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white flex-1">Go Back</p>
      <div className="flex items-center justify-center relative shrink-0 ml-[10px]">
        <div className="flex-none rotate-[180deg]">
          <ArrowRight2 />
        </div>
      </div>
    </div>
  );
}

function ArrowRight3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow--right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2012_1305)" id="arrow--right 2">
          <path d={svgPaths.pfec3600} fill="var(--fill-0, white)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2012_1305">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Button3Props {
  onNext?: () => void;
  canProceed: boolean;
}

function Button3({ onNext, canProceed }: Button3Props) {
  const iconColor = canProceed ? "white" : "#8d8d8d";
  
  return (
    <div 
      className={`box-border content-stretch flex h-[40px] items-center overflow-clip px-[20px] py-0 relative shrink-0 w-[147px] ${canProceed ? 'bg-[#4c68b0] cursor-pointer' : 'bg-[#c6c6c6]'}`}
      data-name="Button"
      onClick={canProceed ? onNext : undefined}
      style={{ "--fill-0": iconColor } as React.CSSProperties}
    >
      <p className={`[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap flex-1 ${canProceed ? 'text-white' : 'text-[#8d8d8d]'}`}>Next</p>
      <div className="ml-[10px]">
        <ArrowRight3 />
      </div>
    </div>
  );
}

interface BottomBarProps {
  onClose?: () => void;
  onGoBack?: () => void;
  onNext?: () => void;
  canProceed: boolean;
}

function BottomBar({ onClose, onGoBack, onNext, canProceed }: BottomBarProps) {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[20px] h-[108px] items-start left-0 overflow-clip p-[20px] top-[824px] w-[430px]" data-name="BottomBar">
      <Button1 onClose={onClose} />
      <Button2 onGoBack={onGoBack} />
      <Button3 onNext={onNext} canProceed={canProceed} />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function HomeBar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex h-[34px] items-center justify-center left-0 overflow-clip pb-0 pt-[13px] px-0 right-0 top-[898px]" data-name="Home Bar">
      <div className="bg-black h-[5px] rounded-[3px] shrink-0 w-[134px]" data-name="Rectangle" />
    </div>
  );
}

export default function SelectParts({ onSelectPart, onGoBack, onMenuClick }: SelectPartsProps) {
  const [parts, setParts] = useState<PartData[]>([]);
  const [filteredParts, setFilteredParts] = useState<PartData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadParts();
  }, []);

  useEffect(() => {
    // Filter parts based on search query
    if (searchQuery.trim() === "") {
      setFilteredParts(parts);
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredParts(
        parts.filter(
          (part) =>
            part.partNumber.toLowerCase().includes(query) ||
            part.partName.toLowerCase().includes(query) ||
            part.shelfAddress.toLowerCase().includes(query)
        )
      );
    }
  }, [searchQuery, parts]);

  const loadParts = async () => {
    try {
      setIsLoading(true);
      
      // Fetch all part shelf instances (expands parts into shelf-specific rows)
      const instances = await fetchAllPartShelfInstances();
      
      // Map to PartData format for UI compatibility
      const partsData: PartData[] = instances
        .map((instance) => ({
          id: `${instance.id}_${instance.shelfID}`, // Unique ID combining part ID and shelf
          parentPartId: instance.id, // Store the actual parent part document ID
          partNumber: instance.partNumber,
          partName: instance.description || "",
          physicalLocation: instance.physicalLocationData?.name || "",
          shelfAddress: instance.shelfData?.code || "",
          currentAvailability: instance.quantity,
          physicalLocationRef: instance.physicalLocationID,
          shelfRef: instance.shelfID,
        }))
        .filter((part) => {
          // Use strict validation: only parts with physicalLocationRef that are NOT mainWarehouse
          return isPartRelocatable(part);
        });
      
      setParts(partsData);
      setFilteredParts(partsData);
    } catch (error) {
      console.error("Error loading parts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePartSelect = (partId: string) => {
    setSelectedPartId(partId);
  };

  const handleNext = () => {
    const selectedPart = parts.find((p) => p.id === selectedPartId);
    if (selectedPart) {
      onSelectPart(selectedPart);
    }
  };

  return (
    <div className="bg-white relative size-full" data-name="Select Parts">
      <StatusBar />
      <HomeBar />
      
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[20px] top-[159px] w-[390px]">
        <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#161616] text-[24px] w-[min-content]">Select Parts</p>
        <Searchbar value={searchQuery} onChange={setSearchQuery} />
        
        <div className="content-stretch flex flex-col gap-[10px] h-[546px] items-start overflow-x-clip overflow-y-auto relative shrink-0">
          {isLoading ? (
            <div className="flex items-center justify-center w-full h-full">
              <p className="font-['IBM_Plex_Sans:Light',_sans-serif] text-[#63646a] text-[14px]">
                Loading parts...
              </p>
            </div>
          ) : filteredParts.length === 0 ? (
            <div className="flex items-center justify-center w-full h-full">
              <NotFound />
            </div>
          ) : (
            filteredParts.map((part) => (
              <PartCard
                key={part.id}
                part={part}
                isSelected={selectedPartId === part.id}
                onSelect={() => handlePartSelect(part.id)}
              />
            ))
          )}
        </div>
      </div>
      
      <TopBar onMenuClick={onMenuClick} />
      <BottomBar
        onClose={onGoBack}
        onGoBack={onGoBack}
        onNext={handleNext}
        canProceed={selectedPartId !== null}
      />
    </div>
  );
}
