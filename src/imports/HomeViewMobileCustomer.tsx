import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "motion/react";
import svgPaths from "./svg-ovprbi4vyt";
import StatusBar from "../components/StatusBar";
import { IncadeaLogo } from "../components/IncadeaLogo";
import { HeaderSlideshow } from "../components/HeaderSlideshow";
import imgTheoFloyd from "figma:asset/c16dc5349669022a7da18cc432ee444cded46a1c.png";

function Frame150() {
  return (
    <div className="absolute left-0 size-[30px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame 150">
          <circle cx="15" cy="15" fill="var(--fill-0, #4C68B0)" id="Ellipse 4" r="15" />
          <g clipPath="url(#clip0_1_868)" id="view 1">
            <path d={svgPaths.p2f5c5e00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p2540d900} fill="var(--fill-0, white)" id="Vector_2" />
            <g id="<Transparent Rectangle>"></g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_868">
            <rect fill="white" height="24" transform="translate(3 3)" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Frame151Props {
  onClick?: () => void;
}

function Frame151({ onClick }: Frame151Props) {
  return (
    <div className="absolute left-[343px] size-[30px] top-[23px] cursor-pointer" onClick={onClick}>
      <Frame150 />
    </div>
  );
}

interface Frame152Props {
  onAddAppointment?: () => void;
}

function Frame152({ onAddAppointment }: Frame152Props) {
  return (
    <div className="absolute left-[293px] size-[30px] top-[23px] cursor-pointer" onClick={onAddAppointment}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame 152">
          <circle cx="15" cy="15" fill="var(--fill-0, #4C68B0)" id="Ellipse 4" r="15" />
          <g clipPath="url(#clip0_1_821)" id="add--alt 1">
            <path d={svgPaths.p1b1facf0} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p2131df00} fill="var(--fill-0, white)" id="Vector_2" />
            <g id="_Transparent_Rectangle_"></g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_821">
            <rect fill="white" height="24" transform="translate(3 3)" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface AppointmentsProps {
  onAddAppointment?: () => void;
  onViewAppointments?: () => void;
  onNewAppointment?: () => void;
  count?: number;
}

function Appointments({ onAddAppointment, onViewAppointments, onNewAppointment, count = 0 }: AppointmentsProps) {
  return (
    <div className="absolute h-[75px] left-0 top-0 w-[390px]" data-name="Appointments">
      <div className="absolute bg-[#f4f4f4] h-[75px] left-0 top-0 w-[390px]" />
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[22px] not-italic text-[#161616] text-[24px] text-nowrap top-[10px] whitespace-pre">{count}</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[22px] not-italic text-[#161616] text-[14px] text-nowrap top-[47px] whitespace-pre">{`Appointment  Request`}</p>
      <Frame151 onClick={onViewAppointments} />
      <Frame152 onAddAppointment={onNewAppointment || onAddAppointment} />
    </div>
  );
}

function Frame149() {
  return (
    <div className="absolute left-[293px] size-[30px] top-[22px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame 152">
          <circle cx="15" cy="15" fill="var(--fill-0, #4C68B0)" id="Ellipse 4" r="15" />
          <g clipPath="url(#clip0_1_821)" id="add--alt 1">
            <path d={svgPaths.p1b1facf0} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p2131df00} fill="var(--fill-0, white)" id="Vector_2" />
            <g id="_Transparent_Rectangle_"></g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_821">
            <rect fill="white" height="24" transform="translate(3 3)" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame153() {
  return (
    <div className="absolute left-0 size-[30px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame 150">
          <circle cx="15" cy="15" fill="var(--fill-0, #4C68B0)" id="Ellipse 4" r="15" />
          <g clipPath="url(#clip0_1_868)" id="view 1">
            <path d={svgPaths.p2f5c5e00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p2540d900} fill="var(--fill-0, white)" id="Vector_2" />
            <g id="<Transparent Rectangle>"></g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_868">
            <rect fill="white" height="24" transform="translate(3 3)" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame154() {
  return (
    <div className="absolute left-[343px] size-[30px] top-[23px]">
      <Frame153 />
    </div>
  );
}

function OrdersInProgress() {
  return (
    <div className="absolute h-[75px] left-0 top-[285px] w-[390px]" data-name="Orders in progress">
      <div className="absolute bg-[#f4f4f4] h-[75px] left-0 top-0 w-[390px]" />
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[22px] not-italic text-[#161616] text-[24px] text-nowrap top-[10px] whitespace-pre">0</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[22px] not-italic text-[#161616] text-[14px] text-nowrap top-[47px] whitespace-pre">Orders in progress</p>
      <Frame149 />
      <Frame154 />
    </div>
  );
}

function Frame155() {
  return (
    <div className="absolute left-[293px] size-[30px] top-[22px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame 152">
          <circle cx="15" cy="15" fill="var(--fill-0, #4C68B0)" id="Ellipse 4" r="15" />
          <g clipPath="url(#clip0_1_821)" id="add--alt 1">
            <path d={svgPaths.p1b1facf0} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p2131df00} fill="var(--fill-0, white)" id="Vector_2" />
            <g id="_Transparent_Rectangle_"></g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_821">
            <rect fill="white" height="24" transform="translate(3 3)" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame156() {
  return (
    <div className="absolute left-0 size-[30px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame 150">
          <circle cx="15" cy="15" fill="var(--fill-0, #4C68B0)" id="Ellipse 4" r="15" />
          <g clipPath="url(#clip0_1_868)" id="view 1">
            <path d={svgPaths.p2f5c5e00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p2540d900} fill="var(--fill-0, white)" id="Vector_2" />
            <g id="<Transparent Rectangle>"></g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_868">
            <rect fill="white" height="24" transform="translate(3 3)" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame157() {
  return (
    <div className="absolute left-[343px] size-[30px] top-[23px]">
      <Frame156 />
    </div>
  );
}

function ServiceHistory() {
  return (
    <div className="absolute h-[75px] left-0 top-[380px] w-[390px]" data-name="Service History">
      <div className="absolute bg-[#f4f4f4] h-[75px] left-0 top-0 w-[390px]" />
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[22px] not-italic text-[#161616] text-[24px] text-nowrap top-[10px] whitespace-pre">0</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[22px] not-italic text-[#161616] text-[14px] text-nowrap top-[47px] whitespace-pre">Service History</p>
      <Frame155 />
      <Frame157 />
    </div>
  );
}

interface PanelProps {
  onAddAppointment?: () => void;
  onViewAppointments?: () => void;
  onNewAppointment?: () => void;
  appointmentCount?: number;
}

function Panel({ onAddAppointment, onViewAppointments, onNewAppointment, appointmentCount = 0 }: PanelProps) {
  return (
    <div className="h-[265px] pointer-events-auto sticky top-0 w-[390px]" data-name="Panel">
      <Appointments onAddAppointment={onAddAppointment} onViewAppointments={onViewAppointments} onNewAppointment={onNewAppointment} count={appointmentCount} />
      <OrdersInProgress />
      <ServiceHistory />
    </div>
  );
}

function Frame80() {
  return (
    <div className="absolute h-[41px] leading-[normal] left-[2px] not-italic text-[#161616] text-[14px] text-nowrap top-[100px] w-[235px] whitespace-pre">
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] left-0 top-0">{`Please take a look  to your dashboard`}</p>
      <p className="absolute font-['IBM_Plex_Sans:Light',_sans-serif] left-0 top-[23px]">Last Update: 12/06/2024</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[388px]">
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-0 not-italic text-[#161616] text-[24px] text-nowrap top-[9px] whitespace-pre">Theo Floyd</p>
      <p className="absolute font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] left-0 not-italic text-[#161616] text-[20px] text-nowrap top-[45px] whitespace-pre">Customer</p>
      <div className="absolute left-[308px] size-[80px] top-0">
        <img alt="Theo Floyd" className="block max-w-none size-full rounded-full object-cover" height="80" src={imgTheoFloyd} width="80" />
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="absolute h-[141px] left-[17px] top-[359px] w-[388px]">
      <Frame80 />
      <Frame81 />
    </div>
  );
}

function Search1() {
  return (
    <div className="absolute left-[332px] size-[32px] top-[7px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_864)" id="search 1">
          <path d={svgPaths.p2c8f5f80} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_864">
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
        <g clipPath="url(#clip0_1_857)" id="menu 1">
          <path d="M28 6H4V8H28V6Z" fill="var(--fill-0, #63646A)" id="Vector" />
          <path d="M28 24H4V26H28V24Z" fill="var(--fill-0, #63646A)" id="Vector_2" />
          <path d="M28 12H4V14H28V12Z" fill="var(--fill-0, #63646A)" id="Vector_3" />
          <path d="M28 18H4V20H28V18Z" fill="var(--fill-0, #63646A)" id="Vector_4" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_857">
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
      <Search1 />
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
      <div className="absolute bg-white h-[60px] left-0 pointer-events-none top-0 w-[430px]" />
      <Frame10 onMenuClick={onMenuClick} />
    </div>
  );
}

function Settings2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="settings 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_828)" id="settings 2">
          <path d={svgPaths.p289c8d00} fill="var(--fill-0, #525252)" id="Vector" />
          <path d={svgPaths.p24e04000} fill="var(--fill-0, #525252)" id="Vector_2" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_828">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Building1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="building 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_847)" id="building 1">
          <path d={svgPaths.p4687100} fill="var(--fill-0, #525252)" id="Vector" />
          <path d="M20 8H18V10H20V8Z" fill="var(--fill-0, #525252)" id="Vector_2" />
          <path d="M26 8H24V10H26V8Z" fill="var(--fill-0, #525252)" id="Vector_3" />
          <path d="M20 14H18V16H20V14Z" fill="var(--fill-0, #525252)" id="Vector_4" />
          <path d="M26 14H24V16H26V14Z" fill="var(--fill-0, #525252)" id="Vector_5" />
          <path d={svgPaths.p2c350080} fill="var(--fill-0, #525252)" id="Vector_6" />
          <path d={svgPaths.p3e26c6f0} fill="var(--fill-0, #525252)" id="Vector_7" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_847">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Home1() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="home 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g clipPath="url(#clip0_1_833)" id="home 1">
          <g id="<Transparent Rectangle>"></g>
          <path d={svgPaths.p3fa52e00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_833">
            <rect fill="white" height="34" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame838() {
  return (
    <div className="bg-[#4c68b0] box-border content-stretch flex gap-[10px] items-center p-[10px] relative rounded-[10px] shrink-0">
      <Home1 />
    </div>
  );
}

function Car1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="car 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_843)" id="car 1">
          <path d={svgPaths.p3b1a00} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_843">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Notification1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="notification 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_814)" id="notification 1">
          <path d={svgPaths.p3ab1f880} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_814">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TabPicker() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[80px] items-center justify-between left-0 overflow-clip p-[20px] top-[852px] w-[430px]" data-name="TabPicker">
      <Settings2 />
      <Building1 />
      <Frame838 />
      <Car1 />
      <Notification1 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Time() {
  return (
    <div className="h-[13px] relative shrink-0 w-[40px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 13">
        <g clipPath="url(#clip0_1_811)" id="Time">
          <path d={svgPaths.p694a000} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_811">
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
        <g clipPath="url(#clip0_1_837)" id="Reception">
          <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_837">
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
        <g clipPath="url(#clip0_1_818)" id="Wi-fi">
          <path clipRule="evenodd" d={svgPaths.p2952ae40} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_818">
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
        <g clipPath="url(#clip0_1_806)" id="Battery">
          <path d={svgPaths.p3689d180} id="Vector" opacity="0.35" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p2a8bd780} fill="var(--fill-0, black)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p39726670} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_806">
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

interface MainProps {
  onAddAppointment?: () => void;
  onViewAppointments?: () => void;
  onNewAppointment?: () => void;
  appointmentCount?: number;
  onMenuClick?: () => void;
}

function Main({ onAddAppointment, onViewAppointments, onNewAppointment, appointmentCount = 0, onMenuClick }: MainProps) {
  return (
    <div className="absolute bg-white h-[932px] left-0 overflow-clip top-0 w-[430px]" data-name="Main">
      <StatusBar />
      <HomeBar />
      <div className="absolute bg-white h-[421px] left-0 top-[119px] w-[430px]" />
      <Frame82 />
      <div className="absolute h-[200px] left-0 top-[119px] w-[430px]" data-name="mechanic 1">
        <HeaderSlideshow width={430} height={200} className="absolute inset-0" />
      </div>
      <TopBar onMenuClick={onMenuClick} />
      <TabPicker />
    </div>
  );
}

function Frame865() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full whitespace-pre">
      <p className="font-['IBM_Plex_Sans:SemiBold',_sans-serif] relative shrink-0 text-[14px]">New Appointment Request</p>
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] relative shrink-0 text-[16px]">now</p>
    </div>
  );
}

function Frame19Notification() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start justify-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-neutral-50 text-nowrap">
      <Frame865 />
      <p className="[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] h-[39px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] w-full">Appointment Request created successfully</p>
    </div>
  );
}

interface PushNotificationMobileProps {
  onDismiss?: () => void;
}

function PushNotificationMobile({ onDismiss }: PushNotificationMobileProps) {
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, -100], [1, 0]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y < -50 || info.velocity.y < -200) {
      // User swiped up, dismiss the notification
      onDismiss?.();
    }
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: -200, bottom: 0 }}
      dragElastic={{ top: 0.1, bottom: 0 }}
      onDragEnd={handleDragEnd}
      style={{ y, opacity }}
      className="absolute left-[20px] top-[99px] w-[390px] cursor-grab active:cursor-grabbing"
      data-name="PushNotificationMobile"
    >
      <div 
        className="box-border content-stretch flex gap-[20px] items-center overflow-clip p-[20px] rounded-[24px]"
        style={{
          background: 'rgba(139, 139, 139, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        <div className="h-[49.596px] relative rounded-[20px] shrink-0 w-[50px]" data-name="incadea_logo 3">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
            <div className="absolute bg-neutral-50 inset-0 rounded-[20px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[20px] flex items-center justify-center">
              <IncadeaLogo width={50} />
            </div>
          </div>
        </div>
        <Frame19Notification />
      </div>
    </motion.div>
  );
}

interface HomeViewMobileCustomerProps {
  onAddAppointment?: () => void;
  onViewAppointments?: () => void;
  onNewAppointment?: () => void;
  appointmentCount?: number;
  showNotification?: boolean;
  onDismissNotification?: () => void;
  onMenuClick?: () => void;
}

export default function HomeViewMobileCustomer({ 
  onAddAppointment,
  onViewAppointments,
  onNewAppointment,
  appointmentCount = 0,
  showNotification = false,
  onDismissNotification,
  onMenuClick
}: HomeViewMobileCustomerProps) {
  return (
    <div className="relative size-full" data-name="HomeViewMobileCustomer">
      <Main onAddAppointment={onAddAppointment} onViewAppointments={onViewAppointments} onNewAppointment={onNewAppointment} appointmentCount={appointmentCount} onMenuClick={onMenuClick} />
      <AnimatePresence mode="wait">
        {showNotification && (
          <motion.div
            initial={{ y: -200, opacity: 0, scale: 0.9 }}
            animate={{ 
              y: 0, 
              opacity: 1, 
              scale: 1,
              transition: {
                type: "spring",
                damping: 20,
                stiffness: 200,
                mass: 0.8
              }
            }}
            exit={{ 
              y: -200, 
              opacity: 0,
              scale: 0.95,
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
                mass: 0.5
              }
            }}
            className="absolute left-0 right-0 top-0 z-50 pointer-events-none"
            style={{ pointerEvents: 'auto' }}
          >
            <PushNotificationMobile onDismiss={onDismissNotification} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}