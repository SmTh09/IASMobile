import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-tkfgqi6vnx";
import svgPathsDropdown from "../imports/svg-wtnjwlvkhz";
import svgPathsButtons from "../imports/svg-f2hc9sdtzn";
import svgPathsAddIcon from "../imports/svg-slxvy8fgii";
import StatusBar from "./StatusBar";
import { IncadeaLogo } from "./IncadeaLogo";
import NotFound from "../imports/NotFound";
import ConfirmedRelocationCard from "./ConfirmedRelocationCard";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase/firestore";
import { fetchAllPhysicalLocations, fetchShelvesByLocation, getPhysicalLocationForShelf, type PhysicalLocation, type Shelf } from "../utils/firebase/relationalData";
import { getPartRelocationError, isPartRelocatable } from "../utils/firebase/partValidation";
import { createRelocation } from "../utils/firebase/relocations";
import { toast } from "sonner@2.0.3";

interface Part {
  id: string; // Composite UI ID (partId_shelfRef)
  parentPartId: string; // Actual parent part document ID (required for relocations)
  partNumber: string;
  partName?: string;
  description?: string;
  physicalLocation?: string;
  shelfAddress?: string;
  currentAvailability?: number;
  quantity?: number;
  physicalLocationRef: string;
  shelfRef: string;
}

function Search1() {
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

interface Frame11Props {
  onMenuClick?: () => void;
}

function Frame11({ onMenuClick }: Frame11Props) {
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
      <div aria-hidden="true" className="absolute border-[#3d538d] border-[0px_0px_10px] border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-white h-[60px] left-0 pointer-events-none top-0 w-[430px]">
        <div aria-hidden="true" className="absolute border-[#63646a] border-[0px_0px_1px] border-solid inset-0" />
        <div className="absolute inset-0 shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
      </div>
      <Frame11 onMenuClick={onMenuClick} />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative size-[16px]" data-name="chevron--right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2012_708)" id="chevron--right 1">
          <path d={svgPathsDropdown.pa88e080} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="_x3C_Transparent_Rectangle_x3E_"></g>
        </g>
        <defs>
          <clipPath id="clip0_2012_708">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Frame789Props {
  value: string;
  onClick?: () => void;
}

function Frame789({ value, onClick }: Frame789Props) {
  return (
    <div className="bg-[#f4f4f4] h-[38px] relative shrink-0 w-full cursor-pointer" onClick={onClick} data-dropdown>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[38px] items-start justify-between p-[10px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">{value}</p>
          <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <ChevronRight1 />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-600 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onClick?: () => void;
}

function Field({ label, value, onClick }: FieldProps) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Field">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-center text-nowrap whitespace-pre">{label}</p>
      <Frame789 value={value} onClick={onClick} />
    </div>
  );
}

interface Frame559Props {
  location: string;
  onLocationClick: () => void;
}

function Frame559({ location, onLocationClick, showDropdown }: Frame559Props & { showDropdown?: boolean }) {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[20px] items-start left-0 px-[20px] py-[42px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[119px] w-[429px]">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[24px] w-full">New Parts Relocation</p>
      {showDropdown && <Field label="Physical Location" value={location} onClick={onLocationClick} />}
    </div>
  );
}

function AddAlt2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="add--alt 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2012_217)" id="add--alt 2">
          <path d={svgPathsAddIcon.p1a41bcc0} fill="var(--fill-0, #525252)" id="Vector" />
          <path d={svgPathsAddIcon.p14d86600} fill="var(--fill-0, #525252)" id="Vector_2" />
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

interface TopActionBarProps {
  onAddPart?: () => void;
}

function TopActionBar({ onAddPart }: TopActionBarProps) {
  return (
    <div className="absolute bg-[#eef0f8] box-border content-stretch flex gap-[10px] h-[50px] items-center left-0 overflow-clip px-[20px] py-[10px] top-[320px] w-[430px] cursor-pointer" data-name="TopActionBar" onClick={onAddPart}>
      <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
        <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap whitespace-pre">Add Part</p>
        <AddAlt2 />
      </div>
    </div>
  );
}

interface PartCardContentProps {
  part: Part;
  qtyToRelocate: string;
  newShelf: string;
  onQtyChange: (value: string) => void;
  onNewShelfClick: () => void;
  onConfirm: () => void;
  onDelete: () => void;
  quantityError?: string;
  availableShelves?: Shelf[];
}

function CheckmarkOutline2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="checkmark--outline 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2012_2417)" id="checkmark--outline 2">
          <path d={svgPathsButtons.p342c1580} fill="var(--fill-0, #4C68B0)" id="Vector" />
          <path d={svgPathsButtons.pb93aa00} fill="var(--fill-0, #4C68B0)" id="Vector_2" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2012_2417">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TrashCan1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trash-can 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2012_2422)" id="trash-can 1">
          <path d="M7 6H6V12H7V6Z" fill="var(--fill-0, #4C68B0)" id="Vector" />
          <path d="M10 6H9V12H10V6Z" fill="var(--fill-0, #4C68B0)" id="Vector_2" />
          <path d={svgPathsButtons.p1b095900} fill="var(--fill-0, #4C68B0)" id="Vector_3" />
          <path d="M10 1H6V2H10V1Z" fill="var(--fill-0, #4C68B0)" id="Vector_4" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2012_2422">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmallButton({ onClick, icon }: { onClick: () => void; icon: "check" | "trash" }) {
  return (
    <div className="bg-white h-[40px] relative shrink-0 cursor-pointer" data-name="Small Button" onClick={onClick}>
      <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center overflow-clip px-[20px] py-0 relative rounded-[inherit]">
        {icon === "check" ? <CheckmarkOutline2 /> : <TrashCan1 />}
      </div>
      <div aria-hidden="true" className="absolute border border-[#4c68b0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative size-[16px]" data-name="chevron--right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2010_5327)" id="chevron--right 1">
          <path d={svgPathsButtons.pa88e080} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="_x3C_Transparent_Rectangle_x3E_"></g>
        </g>
        <defs>
          <clipPath id="clip0_2010_5327">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PartCardContent({ part, qtyToRelocate, newShelf, onQtyChange, onNewShelfClick, onConfirm, onDelete, quantityError, availableShelves }: PartCardContentProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start not-italic relative shrink-0 text-[#161616] text-[14px] w-full">
        <p className="leading-[normal] relative shrink-0 w-full">
          <span>Part No: </span>
          <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{part.partNumber}</span>
        </p>
        <p className="leading-[normal] relative shrink-0 w-full">Code: </p>
        <p className="leading-[normal] relative shrink-0 w-full">
          <span>Part: </span>
          <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{part.partName || part.description}</span>
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
      
      {/* Qty to Relocate Field */}
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Field">
          <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] w-full">Qty to Relocate</p>
          <div className="bg-[#f4f4f4] relative shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative w-full">
                <input
                  type="number"
                  value={qtyToRelocate}
                  onChange={(e) => onQtyChange(e.target.value)}
                  placeholder="Please enter a text"
                  className="bg-transparent font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] border-none outline-none w-full placeholder:text-[#9b9b9b]"
                />
              </div>
            </div>
            <div aria-hidden="true" className={`absolute border-solid inset-0 pointer-events-none ${quantityError ? 'border-2 border-[#da1e28]' : 'border-[0px_0px_1px] border-neutral-600'}`} />
          </div>
        </div>
        {quantityError && (
          <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ea3c3c] text-[10px] w-full">
            {quantityError}
          </p>
        )}
      </div>

      {/* New Shelf Field */}
      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Field">
        <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] text-center text-nowrap whitespace-pre">New Shelf</p>
        <div 
          className={`bg-[#f4f4f4] h-[38px] relative shrink-0 w-full ${availableShelves && availableShelves.length > 0 ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`} 
          onClick={onNewShelfClick} 
          data-dropdown
        >
          <div className="flex flex-col items-start overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex h-[38px] items-center justify-between p-[10px] relative w-full">
              <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic text-[#161616] text-[14px]">
                {newShelf || (availableShelves && availableShelves.length === 0 ? "No other shelves available" : "Select new shelf")}
              </p>
              {availableShelves && availableShelves.length > 0 && (
                <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
                  <div className="flex-none rotate-[90deg]">
                    <ChevronRight2 />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-600 border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      
      {/* No shelves available message */}
      {availableShelves && availableShelves.length === 0 && (
        <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f62fe] text-[12px] w-full">
          This part only exists on one shelf. Cannot relocate.
        </p>
      )}

      {/* Action Buttons */}
      <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
        <SmallButton onClick={onConfirm} icon="check" />
        <SmallButton onClick={onDelete} icon="trash" />
      </div>
    </div>
  );
}

interface PartCardProps {
  part: Part;
  qtyToRelocate: string;
  newShelf: string;
  onQtyChange: (value: string) => void;
  onNewShelfClick: () => void;
  onConfirm: () => void;
  onDelete: () => void;
  quantityError?: string;
  availableShelves?: Shelf[];
}

function PartCard({ part, qtyToRelocate, newShelf, onQtyChange, onNewShelfClick, onConfirm, onDelete, quantityError, availableShelves }: PartCardProps) {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="Part Card">
      <div aria-hidden="true" className="absolute border-[#4c68b0] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center p-[16px] relative w-full">
          <PartCardContent
            part={part}
            qtyToRelocate={qtyToRelocate}
            newShelf={newShelf}
            onQtyChange={onQtyChange}
            onNewShelfClick={onNewShelfClick}
            onConfirm={onConfirm}
            onDelete={onDelete}
            quantityError={quantityError}
            availableShelves={availableShelves}
          />
        </div>
      </div>
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

function Button1({ onClose }: { onClose?: () => void }) {
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

function Button2({ onGoBack }: { onGoBack?: () => void }) {
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

function CheckmarkFilled1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="checkmark--filled 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2010_5336)" id="checkmark--filled 1">
          <path d={svgPathsButtons.p32be9f00} fill="var(--fill-0, white)" id="Vector" />
          <g id="inner-path"></g>
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2010_5336">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface Button3Props {
  onSubmit?: () => void;
  canSubmit: boolean;
}

function Button3({ onSubmit, canSubmit }: Button3Props) {
  return (
    <div
      className={`box-border content-stretch flex h-[40px] items-center overflow-clip px-[20px] py-0 relative shrink-0 w-[147px] ${canSubmit ? 'bg-[#4c68b0] cursor-pointer' : 'bg-[#c6c6c6]'}`}
      data-name="Button"
      onClick={canSubmit ? onSubmit : undefined}
    >
      <p className={`[white-space-collapse:collapse] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap flex-1 ${canSubmit ? 'text-white' : 'text-[#8d8d8d]'}`}>Submit</p>
      <div className="ml-[10px]">
        <CheckmarkFilled1 />
      </div>
    </div>
  );
}

interface BottomBarProps {
  onClose?: () => void;
  onGoBack?: () => void;
  onSubmit?: () => void;
  canSubmit: boolean;
}

function BottomBar({ onClose, onGoBack, onSubmit, canSubmit }: BottomBarProps) {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[20px] h-[108px] items-start left-0 overflow-clip p-[20px] top-[824px] w-[430px]" data-name="BottomBar">
      <Button1 onClose={onClose} />
      <Button2 onGoBack={onGoBack} />
      <Button3 onSubmit={onSubmit} canSubmit={canSubmit} />
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

interface NewPartsRelocationProps {
  onGoBack?: () => void;
  onMenuClick?: () => void;
  onAddPart?: () => void;
  selectedPart?: Part | null;
  onDeletePart?: () => void;
}

export default function NewPartsRelocation({ onGoBack, onMenuClick, onAddPart, selectedPart, onDeletePart }: NewPartsRelocationProps) {
  const [physicalLocations, setPhysicalLocations] = useState<PhysicalLocation[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<PhysicalLocation | null>(null);
  const [availableShelves, setAvailableShelves] = useState<Shelf[]>([]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isShelfDropdownOpen, setIsShelfDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State for the selected part editing
  const [qtyToRelocate, setQtyToRelocate] = useState("");
  const [newShelf, setNewShelf] = useState("");
  const [selectedShelfId, setSelectedShelfId] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [partValidationError, setPartValidationError] = useState("");
  
  // State for confirmed relocation (ready to submit)
  const [confirmedRelocation, setConfirmedRelocation] = useState<{
    part: Part;
    qtyToRelocate: string;
    newShelf: string;
    selectedShelfId: string;
  } | null>(null);

  // Fetch physical locations on mount
  useEffect(() => {
    const loadLocations = async () => {
      const locations = await fetchAllPhysicalLocations();
      setPhysicalLocations(locations);
      
      // Set default location if available
      if (locations.length > 0 && !selectedLocation) {
        setSelectedLocation(locations[0]);
      }
    };
    loadLocations();
  }, []);

  // Fetch shelves when part is selected - show all shelves in the same physical location
  useEffect(() => {
    const loadShelves = async () => {
      if (selectedPart?.partNumber && selectedPart?.shelfRef) {
        // Get the physical location for the current shelf
        const physicalLocationID = await getPhysicalLocationForShelf(selectedPart.shelfRef);
        
        if (physicalLocationID) {
          // Fetch ALL shelves in the same physical location
          // Exclude the current shelf (can't relocate to same shelf)
          const allShelves = await fetchShelvesByLocation(physicalLocationID);
          const filteredShelves = allShelves.filter(
            shelf => shelf.id !== selectedPart.shelfRef
          );
          
          setAvailableShelves(filteredShelves);
        } else {
          setAvailableShelves([]);
        }
        
        // Reset fields when a new part is selected
        setQtyToRelocate("");
        setNewShelf("");
        setSelectedShelfId("");
        setQuantityError("");
      } else {
        setAvailableShelves([]);
      }
    };
    loadShelves();
  }, [selectedPart]);

  // Validate selected part on mount or change
  useEffect(() => {
    if (selectedPart) {
      const validationError = getPartRelocationError(selectedPart);
      setPartValidationError(validationError || "");
    } else {
      setPartValidationError("");
    }
  }, [selectedPart]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-dropdown]')) {
        setIsLocationDropdownOpen(false);
        setIsShelfDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocationClick = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
  };

  const handleLocationSelect = async (location: PhysicalLocation) => {
    setSelectedLocation(location);
    setIsLocationDropdownOpen(false);
    
    // Note: Shelves are loaded from the part's physical location when a part is selected,
    // not from the dropdown location. The dropdown is just for display/information.
  };

  const handleNewShelfClick = () => {
    if (availableShelves.length > 0) {
      setIsShelfDropdownOpen(!isShelfDropdownOpen);
    }
  };

  const handleShelfSelect = (shelf: Shelf) => {
    setNewShelf(shelf.code);
    setSelectedShelfId(shelf.id);
    setIsShelfDropdownOpen(false);
  };

  const handleQtyChange = (value: string) => {
    setQtyToRelocate(value);
    
    // Validate quantity
    const qty = parseInt(value);
    const available = selectedPart?.currentAvailability || 0;
    
    if (value && (isNaN(qty) || qty <= 0)) {
      setQuantityError("Please enter a valid quantity.");
    } else if (qty > available) {
      setQuantityError("The quantity to relocate cannot exceed the current available stock.");
    } else {
      setQuantityError("");
    }
  };

  const handleConfirmPart = () => {
    // Check if there are available shelves
    if (!availableShelves || availableShelves.length === 0) {
      toast.error("This part only exists on one shelf. Cannot relocate.", { duration: 3000 });
      return;
    }
    
    // Validate before confirming
    const qty = parseInt(qtyToRelocate);
    const available = selectedPart?.currentAvailability || 0;
    
    if (!qtyToRelocate || isNaN(qty) || qty <= 0) {
      setQuantityError("Please enter a valid quantity.");
      return;
    }
    
    if (qty > available) {
      setQuantityError("The quantity to relocate cannot exceed the current available stock.");
      return;
    }
    
    if (!selectedShelfId || !newShelf) {
      toast.error("Please select a new shelf.", { duration: 3000 });
      return;
    }
    
    if (selectedPart?.shelfRef === selectedShelfId) {
      setPartValidationError("Cannot relocate to the same shelf. Please select a different shelf.");
      return;
    }
    
    if (!selectedPart) return;
    
    // Validate part is relocatable
    const partError = getPartRelocationError(selectedPart);
    if (partError) {
      setPartValidationError(partError);
      return;
    }
    
    // All validation passed - confirm the relocation
    setConfirmedRelocation({
      part: selectedPart,
      qtyToRelocate,
      newShelf,
      selectedShelfId
    });
    
    // Clear the editing state
    setQtyToRelocate("");
    setNewShelf("");
    setSelectedShelfId("");
    setQuantityError("");
    setPartValidationError("");
    
    // Clear the selected part (so user can add another if needed)
    if (onDeletePart) {
      onDeletePart();
    }
    
    toast.success("Relocation confirmed. Click Submit to complete.", { duration: 3000 });
  };

  const handleDeletePart = () => {
    // Clear the form data
    setQtyToRelocate("");
    setNewShelf("");
    setSelectedShelfId("");
    setQuantityError("");
    setPartValidationError("");
    
    // Call parent handler to clear the selected part
    if (onDeletePart) {
      onDeletePart();
    }
  };
  
  const handleEditConfirmedRelocation = () => {
    if (!confirmedRelocation) return;
    
    // Load the confirmed relocation back into editing mode
    // We need to re-select the part - this would be handled by parent
    toast.info("Editing relocation. Please re-add the part to edit.", { duration: 3000 });
    
    // For now, just clear the confirmed relocation
    // In a full implementation, you'd want to restore the part selection
    setConfirmedRelocation(null);
  };
  
  const handleDeleteConfirmedRelocation = () => {
    setConfirmedRelocation(null);
    toast.info("Relocation removed.", { duration: 2000 });
  };

  const handleSubmit = async () => {
    if (!canSubmit) return;

    if (!confirmedRelocation) {
      toast.error("Please confirm a relocation first by clicking the checkmark button.", { duration: 3000 });
      return;
    }

    setIsSubmitting(true);
    try {
      const { part, qtyToRelocate: qty, selectedShelfId: toShelfId } = confirmedRelocation;
      
      // Get the physical location ID from the current shelf
      const physicalLocationID = await getPhysicalLocationForShelf(part.shelfRef);
      
      if (!physicalLocationID) {
        toast.error("Could not determine physical location. Please try again.", { duration: 3000 });
        return;
      }
      
      // Use parentPartId which is the actual Firestore document ID
      const result = await createRelocation({
        partId: part.parentPartId,
        partNumber: part.partNumber,
        description: part.description || part.partName || '',
        physicalLocationID: physicalLocationID,
        fromShelfID: part.shelfRef,
        toShelfID: toShelfId,
        quantity: parseInt(qty)
      });

      if (result.success) {
        // Show success toast
        toast.success('Relocation successfully created.', {
          duration: 3000,
        });
        
        // Clear confirmed relocation
        setConfirmedRelocation(null);
        
        // Navigate back after a short delay to show the toast
        setTimeout(() => {
          if (onGoBack) {
            onGoBack();
          }
        }, 500);
      } else {
        // Show error toast
        toast.error(result.message, {
          duration: 4000,
        });
      }
    } catch (error) {
      console.error("Error creating relocation:", error);
      toast.error("Failed to create relocation. Please try again.", {
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Validate submit button state - only enable if there's a confirmed relocation
  const canSubmit = Boolean(
    confirmedRelocation && 
    !isSubmitting
  );

  return (
    <div className="bg-white relative size-full" data-name="New Parts Relocation">
      <StatusBar />
      <HomeBar />
      <TopBar onMenuClick={onMenuClick} />
      <Frame559 
        location={selectedPart?.physicalLocation || selectedLocation?.name || "Select Location"}
        onLocationClick={handleLocationClick}
        showDropdown={!selectedPart && !confirmedRelocation}
      />
      
      {/* Location Dropdown - only show when no part selected */}
      {!selectedPart && isLocationDropdownOpen && (
        <div className="absolute left-[20px] top-[250px] w-[390px] bg-white shadow-lg border border-[#e0e0e0] z-50 max-h-[200px] overflow-y-auto" data-dropdown>
          {physicalLocations.map((location) => (
            <div
              key={location.id}
              className="p-[12px] cursor-pointer hover:bg-[#f4f4f4] font-['IBM_Plex_Sans:Regular',_sans-serif] text-[14px] text-[#161616]"
              onClick={() => handleLocationSelect(location)}
            >
              {location.name}
            </div>
          ))}
        </div>
      )}
      
      {/* Show confirmed relocation if it exists */}
      {confirmedRelocation && !selectedPart && (
        <>
          <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-0 p-[20px] top-[254px] w-[430px] max-h-[570px] overflow-y-auto">
            <div className="w-full mb-[10px]">
              <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic text-[#161616] text-[16px] mb-[10px]">
                Confirmed Relocation
              </p>
              <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic text-[#525252] text-[12px]">
                Review the details below and click Submit to complete the relocation.
              </p>
            </div>
            <ConfirmedRelocationCard
              partNumber={confirmedRelocation.part.partNumber}
              partName={confirmedRelocation.part.partName || confirmedRelocation.part.description || ''}
              physicalLocation={confirmedRelocation.part.physicalLocation || ''}
              currentShelf={confirmedRelocation.part.shelfAddress || ''}
              currentAvail={confirmedRelocation.part.currentAvailability || 0}
              qtyToRelocate={confirmedRelocation.qtyToRelocate}
              newShelf={confirmedRelocation.newShelf}
              onEdit={handleEditConfirmedRelocation}
              onDelete={handleDeleteConfirmedRelocation}
            />
          </div>
        </>
      )}
      
      {!selectedPart && !confirmedRelocation ? (
        <>
          <div className="absolute left-0 right-0 top-[119px] bottom-[108px] flex items-center justify-center">
            <NotFound />
          </div>
          <TopActionBar onAddPart={onAddPart} />
        </>
      ) : selectedPart ? (
        <>
          <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-0 p-[20px] top-[254px] w-[430px] max-h-[570px] overflow-y-auto">
            <div className="w-full mb-[10px]">
              <p className="font-['IBM_Plex_Sans:Light',_sans-serif] leading-[normal] not-italic text-[#525252] text-[12px]">
                Fill in the relocation details and click the checkmark (✓) button to confirm before submitting.
              </p>
            </div>
            {partValidationError && (
              <div className="bg-[#fff1f1] border-l-4 border-[#da1e28] p-[16px] w-full">
                <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic text-[#da1e28] text-[14px]">
                  {partValidationError}
                </p>
              </div>
            )}
            <PartCard
              part={selectedPart}
              qtyToRelocate={qtyToRelocate}
              newShelf={newShelf}
              onQtyChange={handleQtyChange}
              onNewShelfClick={handleNewShelfClick}
              onConfirm={handleConfirmPart}
              onDelete={handleDeletePart}
              quantityError={quantityError}
              availableShelves={availableShelves}
            />
          </div>
          
          {/* Shelf Dropdown */}
          {isShelfDropdownOpen && (
            <div className="absolute left-[20px] top-[570px] w-[390px] bg-white shadow-lg border border-[#e0e0e0] z-50 max-h-[200px] overflow-y-auto" data-dropdown>
              {availableShelves.length > 0 ? (
                availableShelves.map((shelf) => (
                  <div
                    key={shelf.id}
                    className="p-[12px] cursor-pointer hover:bg-[#f4f4f4] font-['IBM_Plex_Sans:Regular',_sans-serif] text-[14px] text-[#161616]"
                    onClick={() => handleShelfSelect(shelf)}
                  >
                    {shelf.code}
                  </div>
                ))
              ) : (
                <div className="p-[12px] font-['IBM_Plex_Sans:Light',_sans-serif] text-[14px] text-[#9b9b9b]">
                  No available shelves
                </div>
              )}
            </div>
          )}
        </>
      ) : null}
      
      <BottomBar 
        onClose={onGoBack}
        onGoBack={onGoBack}
        onSubmit={handleSubmit}
        canSubmit={canSubmit}
      />
    </div>
  );
}
