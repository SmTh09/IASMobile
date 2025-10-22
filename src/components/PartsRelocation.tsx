import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-q8xuxl36tp";
import StatusBar from "./StatusBar";
import { IncadeaLogo } from "./IncadeaLogo";
import NotFound from "../imports/NotFound";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../utils/firebase/firestore";
import { fetchAllRelocationsWithRelations, type Relocation as RelocationWithRelations } from "../utils/firebase/relationalData";

interface Relocation {
  id: string;
  partNumber?: string;
  description?: string;
  partName?: string;
  code?: string;
  physicalLocation?: string;
  fromLocation?: string;
  fromShelf?: string;
  toLocation?: string;
  toShelf?: string;
  currentAvail?: number;
  quantity?: number;
  status?: string;
  createdAt?: any;
  [key: string]: any;
}

function CloseOutline3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="close--outline 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4003_1136)" id="close--outline 3">
          <path d={svgPaths.p35e68500} fill="var(--fill-0, #4C68B0)" id="Vector" />
          <g id="_Transparent_Rectangle_"></g>
          <path d={svgPaths.p35a89700} fill="var(--fill-0, #4C68B0)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_4003_1136">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface ButtonProps {
  onCancel?: () => void;
}

function Button({ onCancel }: ButtonProps) {
  return (
    <div 
      className="bg-white h-[40px] relative shrink-0 w-[185px] cursor-pointer" 
      data-name="Button"
      onClick={onCancel}
    >
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
        <g clipPath="url(#clip0_4037_879)" id="add--alt 2">
          <path d={svgPaths.p1a41bcc0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p14d86600} fill="var(--fill-0, #F2F2F7)" id="Vector_2" />
          <g id="_Transparent_Rectangle_"></g>
        </g>
        <defs>
          <clipPath id="clip0_4037_879">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Button1Props {
  onNew?: () => void;
}

function Button1({ onNew }: Button1Props) {
  return (
    <div 
      className="bg-[#4c68b0] box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative shrink-0 w-[185px] cursor-pointer" 
      data-name="Button"
      onClick={onNew}
    >
      <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white w-[109px]">{`New `}</p>
      <AddAlt2 />
    </div>
  );
}

interface BottomBarProps {
  onCancel?: () => void;
  onNew?: () => void;
}

function BottomBar({ onCancel, onNew }: BottomBarProps) {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[20px] h-[108px] items-start left-0 overflow-clip p-[20px] top-[824px] w-[430px]" data-name="BottomBar">
      <Button onCancel={onCancel} />
      <Button1 onNew={onNew} />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Search1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[17px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g clipPath="url(#clip0_4037_875)" id="search 1">
          <path d={svgPaths.p39b46880} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_4037_875">
            <rect fill="white" height="16" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col gap-[10px] items-center justify-center" data-name="Not Found">
      <Search1 />
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Not Found</p>
      <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Try adjusting filters or search</p>
    </div>
  );
}

function Search2() {
  return (
    <div className="absolute left-[332px] size-[32px] top-[7px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_4003_1187)" id="search 1">
          <path d={svgPaths.p2c8f5f80} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_4003_1187">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Menu1Props {
  onClick?: () => void;
}

function Menu1({ onClick }: Menu1Props) {
  return (
    <div className="absolute left-0 size-[32px] top-[7px] cursor-pointer" data-name="menu 1" onClick={onClick}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_4003_1146)" id="menu 1">
          <path d="M28 6H4V8H28V6Z" fill="var(--fill-0, #63646A)" id="Vector" />
          <path d="M28 24H4V26H28V24Z" fill="var(--fill-0, #63646A)" id="Vector_2" />
          <path d="M28 12H4V14H28V12Z" fill="var(--fill-0, #63646A)" id="Vector_3" />
          <path d="M28 18H4V20H28V18Z" fill="var(--fill-0, #63646A)" id="Vector_4" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_4003_1146">
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
      <Menu1 onClick={onMenuClick} />
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

function Search3() {
  return (
    <div className="absolute h-[16px] left-[18px] top-[12px] w-[17px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g clipPath="url(#clip0_4037_875)" id="search 1">
          <path d={svgPaths.p39b46880} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_4037_875">
            <rect fill="white" height="16" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface SearchbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

function Searchbar({ searchTerm, onSearchChange }: SearchbarProps) {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Searchbar">
      <div className="absolute bg-[#f4f4f4] h-[40px] left-0 top-0 w-[390px]">
        <div aria-hidden="true" className="absolute border-[#8d8d8d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      </div>
      <Search3 />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search"
        className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[53px] not-italic text-[#161616] text-[14px] top-[11px] bg-transparent border-none outline-none w-[300px] placeholder:text-[#9b9b9b]"
      />
    </div>
  );
}

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <div 
      className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[20px] pt-0 px-0 relative shrink-0 cursor-pointer" 
      data-name="Tab"
      onClick={onClick}
    >
      {isActive && (
        <div aria-hidden="true" className="absolute border-[#4c68b0] border-[0px_0px_3px] border-solid inset-0 pointer-events-none" />
      )}
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">{label}</p>
    </div>
  );
}

interface TabsProps {
  activeStatus: string;
  onStatusChange: (status: string) => void;
}

function Tabs({ activeStatus, onStatusChange }: TabsProps) {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Tabs">
      <Tab label="Activated" isActive={activeStatus === "activated"} onClick={() => onStatusChange("activated")} />
      <Tab label="Accepted" isActive={activeStatus === "accepted"} onClick={() => onStatusChange("accepted")} />
    </div>
  );
}

interface RelocationCardProps {
  relocation: Relocation;
}

function RelocationCard({ relocation }: RelocationCardProps) {
  return (
    <div className="bg-[#f4f4f4] box-border content-stretch flex gap-[20px] items-center p-[16px] w-full mb-[10px]" data-name="Part Card">
      <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
        <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
          <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#161616] text-[14px] w-[min-content]">
            <span>{`Part No: `}</span>
            <span className="font-['IBM_Plex_Sans:Light',_sans-serif]">{relocation.partNumber || 'N/A'}</span>
          </p>
          {relocation.code && (
            <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#161616] text-[14px] w-[min-content]">{`Code: ${relocation.code}`}</p>
          )}
          <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#161616] text-[14px] w-[min-content]">
            <span>{`Part: `}</span>
            <span className="font-['IBM_Plex_Sans:Light',_sans-serif]">{relocation.partName || relocation.description || 'N/A'}</span>
          </p>
          <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#161616] text-[14px] w-[min-content]">
            <span>{`Physical Location: `}</span>
            <span className="font-['IBM_Plex_Sans:Light',_sans-serif]">{relocation.physicalLocation || relocation.fromLocation || 'N/A'}</span>
          </p>
          <div className="content-stretch flex font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[20px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">
            <p className="leading-[normal] relative shrink-0">
              <span>{`From Shelf: `}</span>
              <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{relocation.fromShelf || relocation.fromLocation || 'N/A'}</span>
            </p>
            <p className="leading-[normal] relative shrink-0">
              <span>{`To Shelf: `}</span>
              <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{relocation.toShelf || relocation.toLocation || 'N/A'}</span>
            </p>
          </div>
          <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#161616] text-[14px] w-[min-content]">
            <span>{`Qty Relocated: `}</span>
            <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{relocation.quantity || 0}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

interface ScrollRelocationsProps {
  filteredRelocations: Relocation[];
}

function ScrollRelocations({ filteredRelocations }: ScrollRelocationsProps) {
  return (
    <div className="absolute left-[20px] right-[20px] top-[328px] bottom-[114px] overflow-y-auto">
      {filteredRelocations.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <NotFound />
        </div>
      ) : (
        filteredRelocations.map((relocation) => (
          <RelocationCard key={relocation.id} relocation={relocation} />
        ))
      )}
    </div>
  );
}

interface Frame1147Props {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeStatus: string;
  onStatusChange: (status: string) => void;
}

function Frame1147({ searchTerm, onSearchChange, activeStatus, onStatusChange }: Frame1147Props) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[19px] top-[159px] w-[390px]">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#161616] text-[24px] w-[min-content]">Parts Relocation</p>
      <Searchbar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <Tabs activeStatus={activeStatus} onStatusChange={onStatusChange} />
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

interface PartsRelocationProps {
  onCancel?: () => void;
  onMenuClick?: () => void;
  onNew?: () => void;
}

export default function PartsRelocation({ onCancel, onMenuClick, onNew }: PartsRelocationProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeStatus, setActiveStatus] = useState("activated");
  const [relocations, setRelocations] = useState<Relocation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelocations = async () => {
      try {
        // Try to fetch with relational data first
        const relocationsWithRelations = await fetchAllRelocationsWithRelations();
        console.log("📦 Relocations fetched:", relocationsWithRelations.length);
        console.log("📦 First relocation:", relocationsWithRelations[0]);
        
        if (relocationsWithRelations.length > 0) {
          // Map relational data to legacy format for display
          const relocationsData: Relocation[] = relocationsWithRelations.map(rel => {
            console.log("Mapping relocation:", rel.id, "status:", rel.status);
            const rawRel = rel as any;
            return {
              id: rel.id,
              partNumber: rel.partData?.partNumber || rawRel.partNumber,
              partName: rel.partData?.description || rawRel.description,
              description: rel.partData?.description || rawRel.description,
              code: rawRel.code,
              // In new structure, relocations are within same location
              physicalLocation: rel.physicalLocationData?.name || rawRel.physicalLocation || 'N/A',
              fromLocation: rel.physicalLocationData?.name || rawRel.physicalLocation,
              fromShelf: rel.fromShelfData?.code || rawRel.fromShelf,
              toLocation: rel.physicalLocationData?.name || rawRel.physicalLocation,
              toShelf: rel.toShelfData?.code || rawRel.toShelf,
              currentAvail: rawRel.currentAvail || 0,
              quantity: rawRel.quantity || rawRel.quantityRelocated || rawRel.qtyToRelocate || 0,
              status: rel.status || "activated", // Default to activated if no status
              createdAt: rawRel.createdAt || rawRel.timestamp
            };
          });
          console.log("📦 Mapped relocations:", relocationsData);
          setRelocations(relocationsData);
        } else {
          // Fallback to legacy query if no relational data
          const relocationsQuery = query(
            collection(db, "relocations"),
            orderBy("createdAt", "desc")
          );
          const querySnapshot = await getDocs(relocationsQuery);
          const relocationsData: Relocation[] = [];
          
          querySnapshot.forEach((doc) => {
            relocationsData.push({
              id: doc.id,
              status: "activated", // Default status
              ...doc.data()
            });
          });
          
          console.log("📦 Legacy relocations:", relocationsData);
          setRelocations(relocationsData);
        }
      } catch (error) {
        console.error("Error fetching relocations:", error);
        // If collection doesn't exist or error, set empty array
        setRelocations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRelocations();
  }, []);

  // Filter relocations based on search and status
  const filteredRelocations = relocations.filter((relocation) => {
    // Status filter - be flexible with matching
    const statusMatch = !relocation.status || 
                       relocation.status?.toLowerCase() === activeStatus.toLowerCase();
    
    // Search filter
    const searchLower = searchTerm.toLowerCase();
    const searchMatch = searchTerm === "" || 
                       relocation.partNumber?.toLowerCase().includes(searchLower) ||
                       relocation.description?.toLowerCase().includes(searchLower) ||
                       relocation.partName?.toLowerCase().includes(searchLower) ||
                       relocation.fromLocation?.toLowerCase().includes(searchLower) ||
                       relocation.toLocation?.toLowerCase().includes(searchLower) ||
                       relocation.fromShelf?.toLowerCase().includes(searchLower) ||
                       relocation.toShelf?.toLowerCase().includes(searchLower);
    
    return statusMatch && searchMatch;
  });
  
  console.log("📦 Filtered relocations:", filteredRelocations.length, "Active status:", activeStatus);

  const handleNew = () => {
    if (onNew) {
      onNew();
    }
  };

  return (
    <div className="bg-white relative size-full" data-name="Parts Relocation">
      <StatusBar />
      <HomeBar />
      <TopBar onMenuClick={onMenuClick} />
      <Frame1147 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm}
        activeStatus={activeStatus}
        onStatusChange={setActiveStatus}
      />
      <ScrollRelocations filteredRelocations={filteredRelocations} />
      <BottomBar onCancel={onCancel} onNew={handleNew} />
    </div>
  );
}
