import React from "react";
import svgPaths from "./svg-3bc5tf2hru";
import { IncadeaLogo } from "../components/IncadeaLogo";
import imgArrowLeft from "figma:asset/a9c7af49a72069c07fcb399c5738ee93261f21c5.png";
import imgArrowRight from "figma:asset/de7dcb7d2c9b37a984d8d86f4825d174e3438b65.png";
import imgCloseOutline from "figma:asset/30f27ef93d5ac16799250a1a6333c2d9ec116134.png";
import StatusBar from "../components/StatusBar";

interface JobLine {
  id: number;
  text: string;
}

function Search1() {
  return (
    <div className="absolute left-[332px] size-[32px] top-[7px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_886)" id="search 1">
          <path d={svgPaths.p2c8f5f80} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_886">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Menu1() {
  return (
    <div className="absolute left-0 size-[32px] top-[7px]" data-name="menu 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_868)" id="menu 1">
          <path d="M28 6H4V8H28V6Z" fill="var(--fill-0, #63646A)" id="Vector" />
          <path d="M28 24H4V26H28V24Z" fill="var(--fill-0, #63646A)" id="Vector_2" />
          <path d="M28 12H4V14H28V12Z" fill="var(--fill-0, #63646A)" id="Vector_3" />
          <path d="M28 18H4V20H28V18Z" fill="var(--fill-0, #63646A)" id="Vector_4" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_868">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[45.714px] left-[33px] top-[7px] w-[364px]">
      <div className="absolute h-[45.714px] left-[66px] top-0 w-[100px]" data-name="incadea_logo 1">
        <IncadeaLogo width={100} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" />
      </div>
      <Search1 />
      <Menu1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[60px] left-0 top-[59px] w-[429px]">
      <div aria-hidden="true" className="absolute border-[#4c68b0] border-[0px_0px_10px] border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-white h-[60px] left-0 pointer-events-none top-0 w-[430px]">
        <div aria-hidden="true" className="absolute border-[#63646a] border-[0px_0px_1px] border-solid inset-0" />
        <div className="absolute inset-0 shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
      </div>
      <Frame10 />
    </div>
  );
}

function CloseOutline3() {
  return (
    <img src={imgCloseOutline} alt="" className="w-[16px] h-[16px]" />
  );
}

function Button1({ onCancel }: { onCancel?: () => void }) {
  return (
    <div className="bg-white h-[40px] relative shrink-0 cursor-pointer" data-name="Button" onClick={onCancel}>
      <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center overflow-clip px-[20px] py-0 relative rounded-[inherit]">
        <CloseOutline3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4c68b0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button2({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#393939] box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative shrink-0 w-[147px] cursor-pointer"
      data-name="Button"
      onClick={onClick}
    >
      <div className="font-['IBM_Plex_Sans',sans-serif] font-normal text-[14px] text-white w-[109px]">Go Back</div>
      <img src={imgArrowLeft} alt="" className="w-[16px] h-[16px]" style={{ filter: 'brightness(0) invert(1)' }} />
    </div>
  );
}

function Button3({ onClick, disabled = true }: { onClick?: () => void; disabled?: boolean }) {
  return (
    <div 
      className={`${disabled ? 'bg-[#c6c6c6]' : 'bg-[#4c68b0]'} box-border content-stretch flex h-[40px] items-center justify-between overflow-clip px-[20px] py-0 relative shrink-0 w-[147px] ${disabled ? '' : 'cursor-pointer'}`}
      data-name="Button"
      onClick={disabled ? undefined : onClick}
    >
      <div className={`font-['IBM_Plex_Sans',sans-serif] font-normal text-[14px] ${disabled ? 'text-[#8d8d8d]' : 'text-white'} w-[109px]`}>Next</div>
      <img src={imgArrowRight} alt="" className="w-[16px] h-[16px]" style={{ filter: disabled ? 'brightness(0) saturate(100%) invert(56%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(88%)' : 'brightness(0) invert(1)' }} />
    </div>
  );
}

interface BottomBarProps {
  onCancel?: () => void;
  onGoBack?: () => void;
  onNext?: () => void;
  canGoBack?: boolean;
  canProceed?: boolean;
}

function BottomBar({ onCancel, onGoBack, onNext, canGoBack = true, canProceed = false }: BottomBarProps) {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[20px] h-[108px] items-start left-0 overflow-clip p-[20px] top-[824px] w-[430px]" data-name="BottomBar">
      <Button1 onCancel={onCancel} />
      <Button2 onClick={onGoBack} />
      <Button3 onClick={onNext} disabled={!canProceed} />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function AddAlt3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="add--alt 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_845)" id="add--alt 2">
          <path d={svgPaths.p1a41bcc0} fill="var(--fill-0, #525252)" id="Vector" />
          <path d={svgPaths.p14d86600} fill="var(--fill-0, #525252)" id="Vector_2" />
          <g id="_Transparent_Rectangle_"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_845">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Frame903Props {
  onAddLine?: () => void;
}

function Frame903({ onAddLine }: Frame903Props) {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 cursor-pointer" onClick={onAddLine}>
      <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Add Line</p>
      <AddAlt3 />
    </div>
  );
}

interface TopActionBarProps {
  onAddLine?: () => void;
}

function TopActionBar({ onAddLine }: TopActionBarProps) {
  return (
    <div className="absolute bg-[#eef0f8] box-border content-stretch flex gap-[10px] h-[50px] items-center left-0 overflow-clip px-[20px] py-[10px] top-[268px] w-[430px]" data-name="TopActionBar">
      <Frame903 onAddLine={onAddLine} />
    </div>
  );
}

interface TabProps {
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <div 
      className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[20px] pt-0 px-0 relative shrink-0 cursor-pointer"
      onClick={onClick}
    >
      {isActive && <div aria-hidden="true" className="absolute border-[#4c68b0] border-[0px_0px_3px] border-solid inset-0 pointer-events-none" />}
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">{label}</p>
    </div>
  );
}

interface Frame559Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function Frame559({ activeTab, onTabChange }: Frame559Props) {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <Tab label="Vehicle" isActive={activeTab === "vehicle"} onClick={() => onTabChange("vehicle")} />
      <Tab label="Job Lines" isActive={activeTab === "jobLines"} onClick={() => onTabChange("jobLines")} />
      <Tab label="Date" isActive={activeTab === "date"} onClick={() => onTabChange("date")} />
    </div>
  );
}

interface Frame570Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function Frame570({ activeTab, onTabChange }: Frame570Props) {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[20px] items-start justify-center left-0 pb-[20px] pt-[40px] px-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[119px] w-[430px]">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[24px] text-nowrap whitespace-pre">New Appointment Requests</p>
      <Frame559 activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}

interface Frame789Props {
  value: string;
  onChange: (value: string) => void;
}

function Frame789({ value, onChange }: Frame789Props) {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full">
      <div className="overflow-clip size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative w-full">
          <input
            type="text"
            placeholder="Please enter a text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] bg-transparent border-none outline-none w-full placeholder:text-[#9b9b9b]"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-600 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

interface ContentProps {
  lineNumber: number;
  value: string;
  onChange: (value: string) => void;
}

function Content({ lineNumber, value, onChange }: ContentProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0" data-name="content">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] w-full">Line {lineNumber}</p>
      <Frame789 value={value} onChange={onChange} />
    </div>
  );
}

function CloseOutline4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="close--outline 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_815)" id="close--outline 3">
          <path d={svgPaths.p35e68500} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="_Transparent_Rectangle_"></g>
          <path d={svgPaths.p35a89700} fill="var(--fill-0, #525252)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_815">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Frame1141Props {
  onDelete?: () => void;
}

function Frame1141({ onDelete }: Frame1141Props) {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative self-stretch shrink-0 cursor-pointer" onClick={onDelete}>
      <CloseOutline4 />
    </div>
  );
}

interface Frame1142Props {
  lineNumber: number;
  value: string;
  onChange: (value: string) => void;
  onDelete?: () => void;
}

function Frame1142({ lineNumber, value, onChange, onDelete }: Frame1142Props) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Content lineNumber={lineNumber} value={value} onChange={onChange} />
      <Frame1141 onDelete={onDelete} />
    </div>
  );
}

interface FieldProps {
  lineNumber: number;
  value: string;
  onChange: (value: string) => void;
  onDelete?: () => void;
  topPosition: number;
}

function Field({ lineNumber, value, onChange, onDelete, topPosition }: FieldProps) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start justify-center left-[20px] w-[390px]" data-name="Field" style={{ top: `${topPosition}px` }}>
      <Frame1142 lineNumber={lineNumber} value={value} onChange={onChange} onDelete={onDelete} />
    </div>
  );
}

function Time2() {
  return (
    <div className="h-[13px] relative shrink-0 w-[40px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 13">
        <g clipPath="url(#clip0_1_842)" id="Time">
          <path d={svgPaths.p694a000} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_842">
            <rect fill="white" height="13" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time3() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.8)] content-stretch flex grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Time">
      <Time2 />
    </div>
  );
}

function DynamicIslandFrame1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.8)] content-stretch flex grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Dynamic Island Frame">
      <div className="bg-black h-[37px] rounded-[20px] shrink-0 w-[125px]" data-name="Dynamic Island" />
    </div>
  );
}

function Reception1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Reception">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_1_862)" id="Reception">
          <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_862">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WiFi1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Wi-fi">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_1_850)" id="Wi-fi">
          <path clipRule="evenodd" d={svgPaths.p2952ae40} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_850">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Battery1() {
  return (
    <div className="h-[13px] relative shrink-0 w-[28px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
        <g clipPath="url(#clip0_1_825)" id="Battery">
          <path d={svgPaths.p3689d180} id="Vector" opacity="0.35" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p2a8bd780} fill="var(--fill-0, black)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p39726670} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_825">
            <rect fill="white" height="13" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[8px] grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Icons">
      <Reception1 />
      <WiFi1 />
      <Battery1 />
    </div>
  );
}

function StatusBar1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[59px] items-center justify-center left-0 overflow-clip right-0 top-0 z-50" data-name="Status Bar">
      <Time3 />
      <DynamicIslandFrame1 />
      <Icons1 />
    </div>
  );
}

function HomeBar1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex h-[34px] items-center justify-center left-0 overflow-clip pb-0 pt-[13px] px-0 right-0 top-[898px]" data-name="Home Bar">
      <div className="bg-black h-[5px] rounded-[3px] shrink-0 w-[134px]" data-name="Rectangle" />
    </div>
  );
}

interface NewAppointmentRequestJobLinesProps {
  onCancel?: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  jobLines: JobLine[];
  onAddJobLine: () => void;
  onDeleteJobLine: (id: number) => void;
  onUpdateJobLine: (id: number, text: string) => void;
  onNext?: () => void;
  onGoBack?: () => void;
  canProceed?: boolean;
  onMenuClick?: () => void;
}

export default function NewAppointmentRequestJobLines({ 
  onCancel, 
  activeTab, 
  onTabChange,
  jobLines,
  onAddJobLine,
  onDeleteJobLine,
  onUpdateJobLine,
  onNext,
  onGoBack,
  canProceed = false
}: NewAppointmentRequestJobLinesProps) {
  return (
    <div className="bg-white relative size-full" data-name="New Appointment Request Job Lines">
      <StatusBar />
      <HomeBar1 />
      <Frame12 />
      <BottomBar onCancel={onCancel} onGoBack={onGoBack} onNext={onNext} canGoBack={true} canProceed={canProceed} />
      <TopActionBar onAddLine={onAddJobLine} />
      <Frame570 activeTab={activeTab} onTabChange={onTabChange} />
      {jobLines.map((line, index) => (
        <Field 
          key={line.id}
          lineNumber={index + 1}
          value={line.text}
          onChange={(text) => onUpdateJobLine(line.id, text)}
          onDelete={() => onDeleteJobLine(line.id)}
          topPosition={338 + (index * 86)}
        />
      ))}
    </div>
  );
}
