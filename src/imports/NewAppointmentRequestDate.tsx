import React from "react";
import svgPaths from "./svg-8k9lm0w9t5";
import { getAsset } from "../utils/assets";
import StatusBar from "../components/StatusBar";
import { IncadeaLogo } from "../components/IncadeaLogo";

const imgArrowLeft = getAsset("a9c7af49a72069c07fcb399c5738ee93261f21c5.png", "Arrow Left");
const imgArrowRight = getAsset("de7dcb7d2c9b37a984d8d86f4825d174e3438b65.png", "Arrow Right");
const imgCloseOutline = getAsset("30f27ef93d5ac16799250a1a6333c2d9ec116134.png", "Close Outline");

// Mock time slots data - different dates have different available slots
const getTimeSlotsForDate = (date: Date): string[] => {
  const day = date.getDate();
  const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const weekNumber = Math.floor(day / 7);
  
  // Weekend slots (Saturday and Sunday)
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return [
      "9:00 am - 9:20 am",
      "9:40 am - 10:00 am",
      "10:20 am - 10:40 am",
      "11:00 am - 11:20 am",
      "12:00 pm - 12:20 pm"
    ];
  }
  
  // Monday - typically busier with more morning slots
  if (dayOfWeek === 1) {
    return [
      "7:00 am - 7:20 am",
      "7:20 am - 7:40 am",
      "7:40 am - 8:00 am",
      "8:00 am - 8:20 am",
      "8:20 am - 8:40 am",
      "8:40 am - 9:00 am",
      "9:20 am - 9:40 am",
      "10:00 am - 10:20 am",
      "11:00 am - 11:20 am",
      "2:00 pm - 2:20 pm",
      "3:00 pm - 3:20 pm"
    ];
  }
  
  // Tuesday and Thursday - balanced slots
  if (dayOfWeek === 2 || dayOfWeek === 4) {
    return [
      "7:20 am - 7:40 am",
      "7:40 am - 8:00 am",
      "8:20 am - 8:40 am",
      "9:00 am - 9:20 am",
      "9:40 am - 10:00 am",
      "10:20 am - 10:40 am",
      "11:00 am - 11:20 am",
      "1:00 pm - 1:20 pm",
      "2:00 pm - 2:20 pm",
      "3:00 pm - 3:20 pm"
    ];
  }
  
  // Wednesday - mid-week with afternoon focus
  if (dayOfWeek === 3) {
    return [
      "8:00 am - 8:20 am",
      "8:40 am - 9:00 am",
      "9:20 am - 9:40 am",
      "10:00 am - 10:20 am",
      "11:00 am - 11:20 am",
      "1:00 pm - 1:20 pm",
      "1:40 pm - 2:00 pm",
      "2:20 pm - 2:40 pm",
      "3:00 pm - 3:20 pm",
      "4:00 pm - 4:20 pm"
    ];
  }
  
  // Friday - lighter schedule, ending earlier
  if (dayOfWeek === 5) {
    return [
      "7:40 am - 8:00 am",
      "8:20 am - 8:40 am",
      "9:00 am - 9:20 am",
      "10:00 am - 10:20 am",
      "11:00 am - 11:20 am",
      "12:00 pm - 12:20 pm",
      "1:00 pm - 1:20 pm"
    ];
  }
  
  // Fallback for any edge cases
  return [
    "8:00 am - 8:20 am",
    "9:00 am - 9:20 am",
    "10:00 am - 10:20 am",
    "11:00 am - 11:20 am",
    "2:00 pm - 2:20 pm"
  ];
};

function Search1() {
  return (
    <div className="absolute left-[332px] size-[32px] top-[7px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_1613)" id="search 1">
          <path d={svgPaths.p2c8f5f80} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_1613">
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
        <g clipPath="url(#clip0_1_1595)" id="menu 1">
          <path d="M28 6H4V8H28V6Z" fill="var(--fill-0, #63646A)" id="Vector" />
          <path d="M28 24H4V26H28V24Z" fill="var(--fill-0, #63646A)" id="Vector_2" />
          <path d="M28 12H4V14H28V12Z" fill="var(--fill-0, #63646A)" id="Vector_3" />
          <path d="M28 18H4V20H28V18Z" fill="var(--fill-0, #63646A)" id="Vector_4" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_1595">
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

interface DayNumberProps {
  day: number;
  isCurrentMonth: boolean;
  isWeekend?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

function DayNumber({ day, isCurrentMonth, isWeekend = false, isSelected = false, onClick }: DayNumberProps) {
  const textColor = !isCurrentMonth ? "#616161" : isWeekend ? "#4c68b1" : "#161616";
  const bgColor = isSelected ? "#393939" : "transparent";
  const textColorSelected = isSelected ? "#f4f4f4" : textColor;
  
  return (
    <div 
      className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px] cursor-pointer hover:bg-[rgba(76,104,177,0.1)]" 
      data-name="Atoms / Dey number"
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre" style={{ color: textColorSelected }}>{day}</p>
      </div>
    </div>
  );
}

interface CalendarProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  currentMonth: Date;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onYearChange: (year: number) => void;
}

function Calendar({ selectedDate, onSelectDate, currentMonth, onPreviousMonth, onNextMonth, onYearChange }: CalendarProps) {
  const [showYearPicker, setShowYearPicker] = React.useState(false);
  const monthName = currentMonth.toLocaleString('default', { month: 'long' });
  const monthNumber = String(currentMonth.getMonth() + 1).padStart(2, '0');
  const currentYear = currentMonth.getFullYear();
  
  // Generate year options (2015-2035 range)
  const yearOptions = Array.from({ length: 21 }, (_, i) => 2015 + i);
  
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDayOfWeek = getFirstDayOfMonth(currentMonth);
  const prevMonthDays = getDaysInMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  
  // Adjust for Monday start (0 = Monday, 6 = Sunday)
  const adjustedFirstDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  
  const weeks = [];
  let dayCounter = 1;
  let nextMonthCounter = 1;
  
  for (let week = 0; week < 6; week++) {
    const days = [];
    for (let day = 0; day < 7; day++) {
      const cellIndex = week * 7 + day;
      
      if (cellIndex < adjustedFirstDay) {
        // Previous month days
        const prevDay = prevMonthDays - adjustedFirstDay + cellIndex + 1;
        days.push({ day: prevDay, isCurrentMonth: false, isWeekend: day >= 5 });
      } else if (dayCounter <= daysInMonth) {
        // Current month days
        const currentDay = dayCounter;
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), currentDay);
        const isSelected = selectedDate?.getDate() === currentDay && 
                          selectedDate?.getMonth() === currentMonth.getMonth() &&
                          selectedDate?.getFullYear() === currentMonth.getFullYear();
        days.push({ 
          day: currentDay, 
          isCurrentMonth: true, 
          isWeekend: day >= 5,
          isSelected,
          onClick: () => onSelectDate(date)
        });
        dayCounter++;
      } else {
        // Next month days
        days.push({ day: nextMonthCounter, isCurrentMonth: false, isWeekend: day >= 5 });
        nextMonthCounter++;
      }
    }
    weeks.push(days);
  }
  
  // Calculate week numbers
  const getWeekNumber = (weekIndex: number) => {
    const firstWeekOfYear = new Date(currentMonth.getFullYear(), 0, 1);
    const firstMonday = new Date(firstWeekOfYear);
    const dayOfWeek = firstWeekOfYear.getDay();
    const daysToMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
    firstMonday.setDate(firstWeekOfYear.getDate() + daysToMonday);
    
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const diffDays = Math.floor((firstDayOfMonth.getTime() - firstMonday.getTime()) / (1000 * 60 * 60 * 24));
    const weekNum = Math.floor(diffDays / 7) + 1 + weekIndex;
    
    return weekNum;
  };
  
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center p-[20px] relative shrink-0 size-[300px]" data-name="Month / 2024 / 08 August">
      <div aria-hidden="true" className="absolute border border-[#8d8d8d] border-solid inset-0 pointer-events-none" />
      
      {/* Header with navigation */}
      <div className="box-border content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Header">
        <div 
          className="cursor-pointer hover:bg-[rgba(76,104,177,0.1)] rounded-[4px] p-1"
          onClick={onPreviousMonth}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d={svgPaths.pChevronLeft} fill="#4c68b1" />
          </svg>
        </div>
        <div className="flex items-center gap-[4px]">
          <div className="bg-[#4c68b1] box-border content-stretch flex h-[24px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Atoms / Mouth">
            <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f4f4f4] text-[11px] text-center text-nowrap">
              <p className="leading-[normal] whitespace-pre">{monthName}</p>
            </div>
          </div>
          <div className="relative">
            <div 
              className="bg-[#4c68b1] box-border content-stretch flex h-[24px] items-center justify-center px-[8px] py-[2px] cursor-pointer hover:bg-[#3d5490] rounded-[4px] shrink-0"
              onClick={() => setShowYearPicker(!showYearPicker)}
            >
              <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f4f4f4] text-[11px] text-center text-nowrap">
                <p className="leading-[normal] whitespace-pre">{currentYear}</p>
              </div>
            </div>
            {showYearPicker && (
              <div className="absolute top-[28px] left-0 bg-white border border-[#8d8d8d] rounded-[4px] shadow-lg z-10 max-h-[200px] overflow-y-auto">
                {yearOptions.map((year) => (
                  <div
                    key={year}
                    className={`px-[12px] py-[6px] cursor-pointer hover:bg-[rgba(76,104,177,0.1)] text-[11px] ${year === currentYear ? 'bg-[rgba(76,104,177,0.2)] font-normal' : ''}`}
                    onClick={() => {
                      onYearChange(year);
                      setShowYearPicker(false);
                    }}
                  >
                    {year}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div 
          className="cursor-pointer hover:bg-[rgba(76,104,177,0.1)] rounded-[4px] p-1"
          onClick={onNextMonth}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d={svgPaths.pChevronRight} fill="#4c68b1" />
          </svg>
        </div>
      </div>
      
      {/* Grid */}
      <div className="basis-0 content-stretch flex flex-col grow items-center justify-between min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Grid">
        {/* Week header */}
        <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Line">
          <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="Atoms / Month number">
            <div className="flex flex-col font-['Inter:Extra_Light',_sans-serif] font-extralight justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[11px] text-center text-nowrap">
              <p className="leading-[normal] whitespace-pre">{monthNumber}</p>
            </div>
          </div>
          {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((dayName, i) => (
            <div key={dayName} className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="Atoms / Week day">
              <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-center text-nowrap">
                <p className="leading-[normal] whitespace-pre" style={{ color: i >= 5 ? '#4c68b1' : '#161616' }}>{dayName}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Calendar weeks */}
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Line">
            <div className="bg-[rgba(99,100,106,0.2)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="Atoms / Week number">
              <div className="flex flex-col font-['Inter:Extra_Light',_sans-serif] font-extralight justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[11px] text-center text-nowrap">
                <p className="leading-[normal] whitespace-pre">{getWeekNumber(weekIndex)}</p>
              </div>
            </div>
            {week.map((dayData, dayIndex) => (
              <DayNumber 
                key={dayIndex}
                day={dayData.day}
                isCurrentMonth={dayData.isCurrentMonth}
                isWeekend={dayData.isWeekend}
                isSelected={dayData.isSelected}
                onClick={dayData.onClick}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface DateFieldProps {
  value: string;
  timeSlot?: string | null;
}

function DateField({ value, timeSlot }: DateFieldProps) {
  const displayValue = value && timeSlot ? `${value} - ${timeSlot}` : value;
  const hasValue = value || timeSlot;
  
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start justify-center left-[25px] top-[288px] w-[390px]" data-name="Field">
      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161616] text-[14px] w-full">Vehicle Reception Date</p>
      <div className="bg-[#f4f4f4] relative shrink-0 w-full">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative w-full">
            <p 
              className="font-['IBM_Plex_Sans',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px]"
              style={{
                color: hasValue ? '#161616' : '#9b9b9b',
                fontWeight: hasValue ? '300' : '300'
              }}
            >
              {displayValue || "Please enter a text"}
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-600 border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

interface TimeSlotProps {
  time: string;
  isSelected: boolean;
  onClick: () => void;
}

function TimeSlot({ time, isSelected, onClick }: TimeSlotProps) {
  return (
    <div 
      className="relative rounded-[30px] shrink-0 cursor-pointer"
      data-name="Slot"
      onClick={onClick}
      style={{
        background: isSelected ? '#4C68B1' : 'white',
        outline: '1px #9B9B9B solid',
        outlineOffset: '-1px'
      }}
    >
      <div className="box-border content-stretch flex gap-[20px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit]">
        <p 
          className="font-['IBM_Plex_Sans',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre"
          style={{
            color: isSelected ? 'white' : '#161616',
            fontWeight: '300'
          }}
        >
          {time}
        </p>
      </div>
    </div>
  );
}

interface SlotSelectionProps {
  slots: string[];
  selectedSlot: string | null;
  onSelectSlot: (slot: string) => void;
}

function SlotSelection({ slots, selectedSlot, onSelectSlot }: SlotSelectionProps) {
  return (
    <div className="absolute content-center flex flex-wrap gap-[20px] items-center left-[42px] top-[694px] w-[346px]" data-name="Slot selection">
      {slots.map((slot, index) => (
        <TimeSlot 
          key={index}
          time={slot}
          isSelected={selectedSlot === slot}
          onClick={() => onSelectSlot(slot)}
        />
      ))}
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

function Time2() {
  return (
    <div className="h-[13px] relative shrink-0 w-[40px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 13">
        <g clipPath="url(#clip0_1_1574)" id="Time">
          <path d={svgPaths.p694a000} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1574">
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
        <g clipPath="url(#clip0_1_1589)" id="Reception">
          <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_1589">
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
        <g clipPath="url(#clip0_1_1577)" id="Wi-fi">
          <path clipRule="evenodd" d={svgPaths.p2952ae40} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1577">
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
        <g clipPath="url(#clip0_1_1557)" id="Battery">
          <path d={svgPaths.p3689d180} id="Vector" opacity="0.35" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p2a8bd780} fill="var(--fill-0, black)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p39726670} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_1557">
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

interface NewAppointmentRequestDateProps {
  onCancel?: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  selectedTimeSlot: string | null;
  onSelectTimeSlot: (slot: string | null) => void;
  onNext?: () => void;
  onGoBack?: () => void;
  canProceed?: boolean;
  onMenuClick?: () => void;
}

export default function NewAppointmentRequestDate({ 
  onCancel, 
  activeTab, 
  onTabChange,
  selectedDate,
  onSelectDate,
  selectedTimeSlot,
  onSelectTimeSlot,
  onNext,
  onGoBack,
  canProceed = false
}: NewAppointmentRequestDateProps) {
  const [currentMonth, setCurrentMonth] = React.useState(() => {
    // Use current date (October 2025) or selected date if available
    const now = new Date();
    return selectedDate ? new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1) : new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}.${day}.${year}`;
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleSelectDate = (date: Date) => {
    onSelectDate(date);
    // Clear time slot when date changes
    onSelectTimeSlot(null);
  };

  const handleYearChange = (year: number) => {
    setCurrentMonth(new Date(year, currentMonth.getMonth(), 1));
  };

  const availableSlots = selectedDate ? getTimeSlotsForDate(selectedDate) : [];

  return (
    <div className="bg-white relative size-full" data-name="New Appointment Request Date">
      <StatusBar />
      <HomeBar1 />
      <Frame12 />
      <Frame570 activeTab={activeTab} onTabChange={onTabChange} />
      <div className="absolute bg-[#1e1e1e] content-stretch flex flex-col items-start left-[65px] top-[374px]" data-name="Date and slot pick/Calendar">
        <Calendar 
          selectedDate={selectedDate} 
          onSelectDate={handleSelectDate}
          currentMonth={currentMonth}
          onPreviousMonth={handlePreviousMonth}
          onNextMonth={handleNextMonth}
          onYearChange={handleYearChange}
        />
      </div>
      <DateField value={formatDate(selectedDate)} timeSlot={selectedTimeSlot} />
      {selectedDate && (
        <SlotSelection 
          slots={availableSlots}
          selectedSlot={selectedTimeSlot}
          onSelectSlot={onSelectTimeSlot}
        />
      )}
      <BottomBar onCancel={onCancel} onGoBack={onGoBack} onNext={onNext} canGoBack={true} canProceed={canProceed} />
    </div>
  );
}