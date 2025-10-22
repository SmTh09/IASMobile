import svgPaths from "../imports/svg-lyyynmsczm";

function Time() {
  return (
    <div className="h-[13px] relative shrink-0 w-[40px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 13">
        <g clipPath="url(#clip0_status_time)" id="Time">
          <path d={svgPaths.p694a000} fill="black" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_status_time">
            <rect fill="white" height="13" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TimeContainer() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Time">
      <Time />
    </div>
  );
}

function DynamicIslandFrame() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Dynamic Island Frame">
      <div className="bg-black h-[37px] rounded-[20px] shrink-0 w-[125px]" data-name="Dynamic Island" />
    </div>
  );
}

function Reception() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Reception">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_status_reception)" id="Reception">
          <path d={svgPaths.p1ec31400} fill="black" id="Vector" />
          <path d={svgPaths.p19f8d480} fill="black" id="Vector_2" />
          <path d={svgPaths.p13f4aa00} fill="black" id="Vector_3" />
          <path d={svgPaths.p1bfb7500} fill="black" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_status_reception">
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
        <g clipPath="url(#clip0_status_wifi)" id="Wi-fi">
          <path clipRule="evenodd" d={svgPaths.p2952ae40} fill="black" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_status_wifi">
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
        <g clipPath="url(#clip0_status_battery)" id="Battery">
          <path d={svgPaths.p3689d180} id="Vector" opacity="0.35" stroke="black" />
          <path d={svgPaths.p2a8bd780} fill="black" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p39726670} fill="black" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_status_battery">
            <rect fill="white" height="13" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="basis-0 bg-white content-stretch flex gap-[8px] grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Icons">
      <Reception />
      <WiFi />
      <Battery />
    </div>
  );
}

export default function StatusBar() {
  return (
    <div className="absolute bg-white content-stretch flex h-[59px] items-center justify-center left-0 overflow-clip right-0 top-0 z-50" data-name="Status Bar">
      <TimeContainer />
      <DynamicIslandFrame />
      <Icons />
    </div>
  );
}
