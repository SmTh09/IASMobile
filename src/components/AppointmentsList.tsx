import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-isswok0cwk";
import svgPathsButtons from "../imports/svg-bcd0r9bhff";
import { getAppointments } from "../utils/api";
import { IncadeaLogo } from "./IncadeaLogo";

interface JobLine {
  id: number;
  text: string;
}

interface Vehicle {
  licensePlate: string;
  brand: string;
  model: string;
  image: string;
}

interface Appointment {
  id: string;
  customerId: string;
  customerName: string;
  vehicle: Vehicle;
  jobLines: JobLine[];
  mileage: string;
  measurement: string;
  date: string;
  timeSlot: string;
  status: string;
  createdAt: string;
}

function Search1() {
  return (
    <div className="absolute h-[16px] left-[18px] top-[12px] w-[17px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g clipPath="url(#clip0_2002_1786)" id="search 1">
          <path d={svgPaths.p39b46880} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2002_1786">
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
      <Search1 />
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
      <Tab label="All" isActive={activeStatus === "all"} onClick={() => onStatusChange("all")} />
      <Tab label="Pending" isActive={activeStatus === "pending"} onClick={() => onStatusChange("pending")} />
      <Tab label="Confirm" isActive={activeStatus === "confirmed"} onClick={() => onStatusChange("confirmed")} />
    </div>
  );
}

interface AppointmentCardProps {
  appointment: Appointment;
}

function AppointmentCard({ appointment }: AppointmentCardProps) {
  const appointmentDate = new Date(appointment.date);
  const formattedDate = appointmentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="bg-[#f4f4f4] box-border content-stretch flex gap-[20px] items-center p-[16px] w-full mb-[10px]" data-name="Part Card">
      <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
        <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] w-full">
          <p className="leading-[normal] min-w-full relative shrink-0 w-[min-content]">
            <span>Vehicle Plate: </span>
            <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{appointment.vehicle.licensePlate}</span>
          </p>
          <p className="leading-[normal] min-w-full relative shrink-0 w-[min-content]">
            <span>date: </span>
            <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{formattedDate}</span>
          </p>
          <p className="leading-[normal] min-w-full relative shrink-0 w-[min-content]">
            <span>Time: </span>
            <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{appointment.timeSlot}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

interface ScrollAppointmentsProps {
  filteredAppointments: Appointment[];
}

function ScrollAppointments({ filteredAppointments }: ScrollAppointmentsProps) {
  return (
    <div className="absolute left-[20px] right-[20px] top-[328px] bottom-[114px] overflow-y-auto">
      {filteredAppointments.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="font-['IBM_Plex_Sans:Light',_sans-serif] text-[#9b9b9b] text-[14px]">No appointments found</p>
        </div>
      ) : (
        filteredAppointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))
      )}
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
  onClick?: () => void;
}

function Menu1({ onClick }: Menu1Props) {
  return (
    <div className="absolute left-0 size-[32px] top-[7px] cursor-pointer" data-name="menu 1" onClick={onClick}>
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

function Time() {
  return (
    <div className="h-[13px] relative shrink-0 w-[40px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 13">
        <g clipPath="url(#clip0_2002_1780)" id="Time">
          <path d={svgPaths.p694a000} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2002_1780">
            <rect fill="white" height="13" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.8)] content-stretch flex grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Time">
      <Time />
    </div>
  );
}

function DynamicIslandFrame() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.8)] content-stretch flex grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Dynamic Island Frame">
      <div className="bg-black h-[37px] rounded-[20px] shrink-0 w-[125px]" data-name="Dynamic Island" />
    </div>
  );
}

function Reception() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Reception">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_2002_1790)" id="Reception">
          <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_2002_1790">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WiFi() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Wi-fi">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_2002_1783)" id="Wi-fi">
          <path clipRule="evenodd" d={svgPaths.p2952ae40} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2002_1783">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[28px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
        <g clipPath="url(#clip0_2002_1775)" id="Battery">
          <path d={svgPaths.p3689d180} id="Vector" opacity="0.35" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p2a8bd780} fill="var(--fill-0, black)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p39726670} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_2002_1775">
            <rect fill="white" height="13" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[8px] grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Icons">
      <Reception />
      <WiFi />
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex h-[59px] items-center justify-center left-0 overflow-clip right-0 top-0" data-name="Status Bar">
      <Time1 />
      <DynamicIslandFrame />
      <Icons />
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

function CloseOutline3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="close--outline 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4037_1000_list)" id="close--outline 3">
          <path d={svgPathsButtons.p35e68500} fill="var(--fill-0, #4C68B0)" id="Vector" />
          <g id="_Transparent_Rectangle_"></g>
          <path d={svgPathsButtons.p35a89700} fill="var(--fill-0, #4C68B0)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_4037_1000_list">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface ButtonCancelProps {
  onCancel?: () => void;
}

function ButtonCancel({ onCancel }: ButtonCancelProps) {
  return (
    <div 
      className="bg-white h-[40px] relative shrink-0 w-[185px] cursor-pointer" 
      data-name="Button"
      onClick={onCancel}
    >
      <div className="box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative w-[185px]">
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
        <g clipPath="url(#clip0_4037_995_list)" id="add--alt 2">
          <path d={svgPathsButtons.p1a41bcc0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPathsButtons.p14d86600} fill="var(--fill-0, #F2F2F7)" id="Vector_2" />
          <g id="_Transparent_Rectangle_"></g>
        </g>
        <defs>
          <clipPath id="clip0_4037_995_list">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface ButtonNewProps {
  onNew?: () => void;
}

function ButtonNew({ onNew }: ButtonNewProps) {
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

interface BottomBarAppointmentsProps {
  onCancel?: () => void;
  onNew?: () => void;
}

function BottomBarAppointments({ onCancel, onNew }: BottomBarAppointmentsProps) {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[20px] h-[108px] items-start left-0 overflow-clip p-[20px] top-[824px] w-[430px]" data-name="BottomBar">
      <ButtonCancel onCancel={onCancel} />
      <ButtonNew onNew={onNew} />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

interface AppointmentsListProps {
  customerId: string;
  onSelectAppointment?: (appointment: Appointment) => void;
  onCancel?: () => void;
  onNew?: () => void;
  onMenuClick?: () => void;
}

export default function AppointmentsList({ customerId, onSelectAppointment, onCancel, onNew, onMenuClick }: AppointmentsListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeStatus, setActiveStatus] = useState("all");

  useEffect(() => {
    const loadAppointments = async () => {
      try {
        setLoading(true);
        const data = await getAppointments(customerId);
        setAppointments(data);
      } catch (error) {
        console.error('Failed to load appointments:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAppointments();
  }, [customerId]);

  // Filter appointments by status, plate number, brand, model
  const filteredAppointments = appointments.filter((appointment) => {
    // Status filter
    if (activeStatus !== 'all' && appointment.status !== activeStatus) {
      return false;
    }
    
    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        appointment.vehicle.licensePlate.toLowerCase().includes(searchLower) ||
        appointment.vehicle.brand.toLowerCase().includes(searchLower) ||
        appointment.vehicle.model.toLowerCase().includes(searchLower) ||
        appointment.timeSlot.toLowerCase().includes(searchLower)
      );
    }
    
    return true;
  });

  return (
    <div className="bg-white relative size-full" data-name="Appointments List">
      <StatusBar />
      <HomeBar />
      <TopBar onMenuClick={onMenuClick} />
      
      {/* Title and Search Section */}
      <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[19px] top-[159px] w-[390px]">
        <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#161616] text-[24px] w-[min-content]">Appointments</p>
        <Searchbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <Tabs activeStatus={activeStatus} onStatusChange={setActiveStatus} />
      </div>

      {/* Appointments List */}
      <ScrollAppointments filteredAppointments={filteredAppointments} />
      
      {/* Bottom Bar with Cancel and New Buttons */}
      <BottomBarAppointments onCancel={onCancel} onNew={onNew} />
    </div>
  );
}
