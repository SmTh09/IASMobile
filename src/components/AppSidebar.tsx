import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-6y61wrlpu5";
import imgTheoFloyd from "figma:asset/c16dc5349669022a7da18cc432ee444cded46a1c.png";

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (section: string) => void;
}

function Paragraph() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[36px] left-0 not-italic text-[#161616] text-[24px] text-nowrap top-[2px] whitespace-pre">Theo Floyd</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans:Light',_sans-serif] leading-[30px] left-0 not-italic text-[#161616] text-[20px] text-nowrap top-[1.5px] whitespace-pre">Customer</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[66px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[66px] items-start relative w-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function ImageProfile() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Image (Profile)">
      <img alt="Theo Floyd" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTheoFloyd} />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[80px]">
        <ImageProfile />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[80px] items-center relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[121px] relative shrink-0 w-[340px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[121px] items-start pb-px pt-[20px] px-[20px] relative w-[340px]">
        <Container2 />
      </div>
    </div>
  );
}

// Icons
function AfterSalesIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
          <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
            <div className="absolute inset-[-16.67%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
                <path d={svgPaths.p3c621900} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
            <div className="absolute inset-[-12.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                <path d={svgPaths.p36280080} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CRMIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="wikis 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="wikis 1">
          <path d={svgPaths.p289ff0f1} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
      </svg>
    </div>
  );
}

function PartsIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="box 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="box 1">
          <path d={svgPaths.p1ba2b200} fill="var(--fill-0, #63646A)" id="Vector" />
          <path d={svgPaths.p12dabb00} fill="var(--fill-0, #63646A)" id="Vector_2" />
          <g id="<Transparent Rectangle>"></g>
        </g>
      </svg>
    </div>
  );
}

function ServicesIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="user--feedback 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="user--feedback 1">
          <path d={svgPaths.p2d5ec500} fill="var(--fill-0, #525252)" id="Vector" />
          <path d={svgPaths.p2ffeec80} fill="var(--fill-0, #525252)" id="Vector_2" />
          <path d={svgPaths.p36d40780} fill="var(--fill-0, #525252)" id="Vector_3" />
          <g id="<Transparent Rectangle>"></g>
        </g>
      </svg>
    </div>
  );
}

function VehicleIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="car 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2002_1135)" id="car 1">
          <path d={svgPaths.p3604cf00} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2002_1135">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MasterDataIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="document 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2002_1162)" id="document 1">
          <path d={svgPaths.p3f732780} fill="var(--fill-0, #525252)" id="Vector" />
          <path d="M11 11H5V12H11V11Z" fill="var(--fill-0, #525252)" id="Vector_2" />
          <path d="M11 8H5V9H11V8Z" fill="var(--fill-0, #525252)" id="Vector_3" />
          <g id="Vector_4"></g>
        </g>
        <defs>
          <clipPath id="clip0_2002_1162">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PurchasesIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="currency 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2002_1151)" id="currency 1">
          <path d={svgPaths.peaab00} fill="var(--fill-0, #525252)" id="Vector" />
          <path d={svgPaths.p15022600} fill="var(--fill-0, #525252)" id="Vector_2" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_2002_1151">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SystemAdminIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="help 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2002_1156)" id="help 2">
          <path d={svgPaths.pb93aa00} fill="var(--fill-0, #525252)" id="Vector" />
          <path d={svgPaths.p1323d300} fill="var(--fill-0, #525252)" id="Vector_2" />
          <path d={svgPaths.p8a42a00} fill="var(--fill-0, #525252)" id="Vector_3" />
          <g id="Vector_4"></g>
        </g>
        <defs>
          <clipPath id="clip0_2002_1156">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrivacyPolicyIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
          <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
            <div className="absolute inset-[-5%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
                <path d={svgPaths.p2ddad400} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
            <div className="absolute inset-[-16.667%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <path d={svgPaths.p3132d200} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
            <div className="absolute inset-[-0.67px_-50%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                <path d="M2.33333 1H1" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
            <div className="absolute inset-[-0.67px_-12.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 2">
                <path d="M6.33333 1H1" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
            <div className="absolute inset-[-0.67px_-12.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 2">
                <path d="M6.33333 1H1" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoutIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
          <div className="absolute inset-[29.17%_12.5%_29.17%_66.67%]" data-name="Vector">
            <div className="absolute inset-[-10%_-20%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
                <path d={svgPaths.p1ebcc148} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-1/2 left-[37.5%] right-[12.5%] top-1/2" data-name="Vector">
            <div className="absolute inset-[-0.67px_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
                <path d="M9 1H1" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[12.5%_62.5%_12.5%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-5.56%_-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 14">
                <path d={svgPaths.p1edb0620} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ChevronUp() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  chevronIcon?: React.ReactNode;
  onClick?: () => void;
}

function MenuItem({ icon, label, chevronIcon, onClick }: MenuItemProps) {
  return (
    <div className="h-[62px] relative shrink-0 w-full cursor-pointer" data-name="Primitive.button" onClick={onClick}>
      <div className="absolute box-border content-stretch flex h-[62px] items-center justify-between left-0 pb-px pt-0 px-[20px] top-0 w-[340px]" data-name="Sidebar">
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="h-[21px] relative shrink-0 flex items-center gap-[12px]" data-name="Container">
          {icon}
          <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
              <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">{label}</p>
            </div>
          </div>
        </div>
        {chevronIcon}
      </div>
    </div>
  );
}

interface SubMenuItemProps {
  label: string;
  onClick?: () => void;
}

function SubMenuItem({ label, onClick }: SubMenuItemProps) {
  return (
    <div className="h-[44.5px] relative shrink-0 w-full cursor-pointer" onClick={onClick}>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44.5px] items-center justify-between pb-px pl-[48px] pr-[20px] pt-0 relative w-full">
          <div className="h-[19.5px] relative shrink-0" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative">
              <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-neutral-600 text-nowrap top-0 whitespace-pre">{label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PartsSubmenu({ onNavigate }: { onNavigate?: (section: string) => void }) {
  return (
    <div className="bg-gray-50 content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sidebar">
      <SubMenuItem label="Shelf Address" onClick={() => onNavigate?.("shelf-address")} />
      <SubMenuItem label="Stock Adjustments" onClick={() => onNavigate?.("stock-adjustments")} />
      <SubMenuItem label="Relocations" onClick={() => onNavigate?.("relocations")} />
      <SubMenuItem label="Inventory" onClick={() => onNavigate?.("inventory")} />
    </div>
  );
}

interface SubMenuItemWithChevronProps {
  label: string;
  onClick?: () => void;
}

function SubMenuItemWithChevron({ label, onClick }: SubMenuItemWithChevronProps) {
  return (
    <div className="h-[44.5px] relative shrink-0 w-full cursor-pointer" onClick={onClick}>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44.5px] items-center justify-between pb-px pl-[48px] pr-[20px] pt-0 relative w-full">
          <div className="h-[19.5px] relative shrink-0" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative">
              <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-neutral-600 text-nowrap top-0 whitespace-pre">{label}</p>
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}

// Second level submenu item (nested under first level) - with chevron (expandable)
interface NestedSubMenuItemWithChevronProps {
  label: string;
  onClick?: () => void;
  isExpanded?: boolean;
}

function NestedSubMenuItemWithChevron({ label, onClick, isExpanded = false }: NestedSubMenuItemWithChevronProps) {
  return (
    <div className="h-[44.5px] relative shrink-0 w-full cursor-pointer" onClick={onClick}>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44.5px] items-center justify-between pb-px pl-[76px] pr-[20px] pt-0 relative w-full">
          <div className="h-[19.5px] relative shrink-0" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative">
              <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-neutral-600 text-nowrap top-0 whitespace-pre">{label}</p>
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className={`flex-none transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Second level submenu item (nested under first level) - without chevron (not expandable)
interface NestedSubMenuItemProps {
  label: string;
  onClick?: () => void;
}

function NestedSubMenuItem({ label, onClick }: NestedSubMenuItemProps) {
  return (
    <div className="h-[44.5px] relative shrink-0 w-full cursor-pointer" onClick={onClick}>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44.5px] items-center justify-between pb-px pl-[76px] pr-[20px] pt-0 relative w-full">
          <div className="h-[19.5px] relative shrink-0" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative">
              <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-neutral-600 text-nowrap top-0 whitespace-pre">{label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface OrdersSubmenuProps {
  onNavigate?: (section: string) => void;
}

function OrdersSubmenu({ onNavigate }: OrdersSubmenuProps) {
  return (
    <div className="bg-gray-100 content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="OrdersSubmenu">
      <NestedSubMenuItem label="Appointment Requests" onClick={() => onNavigate?.("appointment-requests")} />
      <NestedSubMenuItemWithChevron label="Appointments" onClick={() => onNavigate?.("appointments")} />
      <NestedSubMenuItemWithChevron label="Workshop" onClick={() => onNavigate?.("workshop")} />
      <NestedSubMenuItemWithChevron label="Counter Sales" onClick={() => onNavigate?.("counter-sales")} />
      <NestedSubMenuItemWithChevron label="Point of Sale" onClick={() => onNavigate?.("point-of-sale")} />
      <NestedSubMenuItemWithChevron label="Waybill (Sale)" onClick={() => onNavigate?.("waybill-sale")} />
      <NestedSubMenuItemWithChevron label="Quotation Creation" onClick={() => onNavigate?.("quotation-creation")} />
      <NestedSubMenuItemWithChevron label="Quotations" onClick={() => onNavigate?.("quotations")} />
      <NestedSubMenuItem label="Lost Sales" onClick={() => onNavigate?.("lost-sales")} />
      <NestedSubMenuItemWithChevron label="Invoices" onClick={() => onNavigate?.("invoices")} />
      <NestedSubMenuItem label="First Pickings" onClick={() => onNavigate?.("first-pickings")} />
      <NestedSubMenuItemWithChevron label="Pickings" onClick={() => onNavigate?.("pickings")} />
      <NestedSubMenuItem label="Reservations" onClick={() => onNavigate?.("reservations")} />
      <NestedSubMenuItemWithChevron label="Parts Request" onClick={() => onNavigate?.("parts-request")} />
      <NestedSubMenuItemWithChevron label="Waybill" onClick={() => onNavigate?.("waybill")} />
      <NestedSubMenuItem label="Work in Progress Workshop Orders" onClick={() => onNavigate?.("wip-workshop-orders")} />
      <NestedSubMenuItem label="Service Receptions" onClick={() => onNavigate?.("service-receptions")} />
    </div>
  );
}

interface AfterSalesSubmenuProps {
  onNavigate?: (section: string) => void;
  ordersExpanded: boolean;
  onOrdersToggle: () => void;
}

function AfterSalesSubmenu({ onNavigate, ordersExpanded, onOrdersToggle }: AfterSalesSubmenuProps) {
  return (
    <div className="bg-gray-50 content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Sidebar">
      {/* Orders - Expandable */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <SubMenuItemWithChevron 
          label="Orders" 
          onClick={onOrdersToggle}
        />
        {ordersExpanded && <OrdersSubmenu onNavigate={onNavigate} />}
      </div>
      
      <SubMenuItemWithChevron label="Service Purchase Orders" onClick={() => onNavigate?.("service-purchase-orders")} />
      <SubMenuItemWithChevron label="Configurations" onClick={() => onNavigate?.("configurations")} />
      <SubMenuItemWithChevron label="Reports" onClick={() => onNavigate?.("reports")} />
    </div>
  );
}

export default function AppSidebar({ isOpen, onClose, onNavigate }: AppSidebarProps) {
  const [partsExpanded, setPartsExpanded] = useState(false);
  const [afterSalesExpanded, setAfterSalesExpanded] = useState(true); // Default to expanded to show Orders
  const [ordersExpanded, setOrdersExpanded] = useState(true); // Default to expanded

  // Reset all expanded states when sidebar is closed
  useEffect(() => {
    if (!isOpen) {
      setPartsExpanded(false);
      setAfterSalesExpanded(false);
      setOrdersExpanded(false);
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop with blur - Closes sidebar when tapped */}
      {isOpen && (
        <div 
          className="absolute inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-all duration-300"
          style={{
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'auto' : 'none'
          }}
          onClick={onClose}
        />
      )}

      {/* Sidebar - Full mobile frame height overlay */}
      <div 
        className={`absolute bg-white box-border content-stretch flex flex-col h-full items-start left-0 overflow-y-auto top-0 w-[340px] z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        data-name="Sidebar"
      >
        <Container3 />
        
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[340px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[340px]">
            
            {/* After Sales with submenu */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <MenuItem 
                icon={<AfterSalesIcon />} 
                label="After Sales" 
                chevronIcon={
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className={`flex-none transition-transform duration-200 ${afterSalesExpanded ? 'rotate-180' : ''}`}>
                      <ChevronDown />
                    </div>
                  </div>
                }
                onClick={() => setAfterSalesExpanded(!afterSalesExpanded)}
              />
              {afterSalesExpanded && (
                <AfterSalesSubmenu 
                  onNavigate={onNavigate} 
                  ordersExpanded={ordersExpanded}
                  onOrdersToggle={() => setOrdersExpanded(!ordersExpanded)}
                />
              )}
            </div>
            
            <MenuItem 
              icon={<CRMIcon />} 
              label="CRM" 
              chevronIcon={<ChevronDown />}
              onClick={() => onNavigate?.("crm")}
            />
            
            {/* Parts with submenu */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <MenuItem 
                icon={<PartsIcon />} 
                label="Parts" 
                chevronIcon={
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className={`flex-none transition-transform duration-200 ${partsExpanded ? 'rotate-180' : ''}`}>
                      <ChevronDown />
                    </div>
                  </div>
                }
                onClick={() => setPartsExpanded(!partsExpanded)}
              />
              {partsExpanded && <PartsSubmenu onNavigate={onNavigate} />}
            </div>
            
            <MenuItem 
              icon={<ServicesIcon />} 
              label="Services" 
              chevronIcon={<ChevronDown />}
              onClick={() => onNavigate?.("services")}
            />
            
            <MenuItem 
              icon={<VehicleIcon />} 
              label="Vehicle" 
              chevronIcon={<ChevronDown />}
              onClick={() => onNavigate?.("vehicle")}
            />
            
            <div className="h-[62px] relative shrink-0 w-full cursor-pointer" onClick={() => onNavigate?.("master-data")}>
              <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[62px] items-center justify-between pb-px pt-0 px-[20px] relative w-full">
                  <div className="h-[21px] relative shrink-0 flex items-center gap-[12px]">
                    <MasterDataIcon />
                    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">MasterData</p>
                      </div>
                    </div>
                  </div>
                  <ChevronRight />
                </div>
              </div>
            </div>
            
            <MenuItem 
              icon={<PurchasesIcon />} 
              label="Purchases" 
              chevronIcon={<ChevronDown />}
              onClick={() => onNavigate?.("purchases")}
            />
            
            <MenuItem 
              icon={<SystemAdminIcon />} 
              label="System Admin" 
              chevronIcon={
                <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
                  <div className="flex-none rotate-[270deg]">
                    <ChevronDown />
                  </div>
                </div>
              }
              onClick={() => onNavigate?.("system-admin")}
            />
            
            <div className="h-[62px] relative shrink-0 w-full cursor-pointer" onClick={() => onNavigate?.("privacy-policy")}>
              <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[62px] items-center justify-between pb-px pt-0 px-[20px] relative w-full">
                  <div className="h-[21px] relative shrink-0 flex items-center gap-[12px]">
                    <PrivacyPolicyIcon />
                    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">Privacy Policy</p>
                      </div>
                    </div>
                  </div>
                  <ChevronRight />
                </div>
              </div>
            </div>
            
            <div className="h-[62px] relative shrink-0 w-full cursor-pointer" onClick={() => onNavigate?.("logout")}>
              <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[62px] items-center justify-between pb-px pt-0 px-[20px] relative w-full">
                  <div className="h-[21px] relative shrink-0 flex items-center gap-[12px]">
                    <LogoutIcon />
                    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                        <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">Log out</p>
                      </div>
                    </div>
                  </div>
                  <ChevronRight />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
