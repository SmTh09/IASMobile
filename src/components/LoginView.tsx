import { useState } from "react";
import svgPaths from "../imports/svg-n6ebqvze1k";
import { IncadeaLogo } from "./IncadeaLogo";

interface LoginViewProps {
  onSignIn: () => void;
}

function Frame139({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[350px]">
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-0 not-italic text-[#686868] text-[14px] text-nowrap top-0 whitespace-pre">Username or email</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute bg-transparent border-0 font-['IBM_Plex_Sans:Regular',_sans-serif] h-[30px] leading-[normal] left-0 not-italic outline-none text-[#161616] text-[14px] top-[18px] w-[350px]"
        placeholder=""
      />
      <div className="absolute h-0 left-0 top-[48px] w-[350px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <line id="Line 1" stroke="var(--stroke-0, #686868)" x2="350" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function View1({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="absolute cursor-pointer left-[326px] size-[24px] top-[24.04px]" 
      data-name="view 1"
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4137_59)" id="view 1">
          <path d={svgPaths.p2bf57d80} fill="var(--fill-0, #686868)" id="Vector" />
          <path d={svgPaths.p3beeb900} fill="var(--fill-0, #686868)" id="Vector_2" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_4137_59">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame140({ 
  value, 
  onChange, 
  showPassword, 
  onTogglePassword 
}: { 
  value: string; 
  onChange: (value: string) => void;
  showPassword: boolean;
  onTogglePassword: () => void;
}) {
  return (
    <div className="absolute h-[48px] left-0 top-[88px] w-[350px]">
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-0 not-italic text-[#686868] text-[14px] text-nowrap top-0 whitespace-pre">Password</p>
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute bg-transparent border-0 font-['IBM_Plex_Sans:Regular',_sans-serif] h-[30px] leading-[normal] left-0 not-italic outline-none text-[#161616] text-[14px] top-[18px] w-[320px]"
        placeholder=""
      />
      <div className="absolute h-0 left-0 top-[48px] w-[350px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <line id="Line 1" stroke="var(--stroke-0, #686868)" x2="350" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <View1 onClick={onTogglePassword} />
    </div>
  );
}

function Frame141({ 
  username, 
  onUsernameChange, 
  password, 
  onPasswordChange,
  showPassword,
  onTogglePassword
}: { 
  username: string; 
  onUsernameChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  showPassword: boolean;
  onTogglePassword: () => void;
}) {
  return (
    <div className="absolute h-[136px] left-0 top-[91px] w-[350px]">
      <Frame139 value={username} onChange={onUsernameChange} />
      <Frame140 
        value={password} 
        onChange={onPasswordChange}
        showPassword={showPassword}
        onTogglePassword={onTogglePassword}
      />
    </div>
  );
}

function Frame142({ 
  username, 
  onUsernameChange, 
  password, 
  onPasswordChange,
  showPassword,
  onTogglePassword
}: { 
  username: string; 
  onUsernameChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  showPassword: boolean;
  onTogglePassword: () => void;
}) {
  return (
    <div className="absolute h-[227px] left-0 top-[78px] w-[350px]">
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-0 not-italic text-[#161616] text-[24px] text-nowrap top-0 whitespace-pre">Sign in to your account</p>
      <Frame141 
        username={username}
        onUsernameChange={onUsernameChange}
        password={password}
        onPasswordChange={onPasswordChange}
        showPassword={showPassword}
        onTogglePassword={onTogglePassword}
      />
    </div>
  );
}

function Frame143({ 
  username, 
  onUsernameChange, 
  password, 
  onPasswordChange,
  showPassword,
  onTogglePassword
}: { 
  username: string; 
  onUsernameChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  showPassword: boolean;
  onTogglePassword: () => void;
}) {
  return (
    <div className="absolute h-[305px] left-0 top-[158.96px] w-[350px]">
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[293px] not-italic text-[#161616] text-[14px] text-nowrap top-0 whitespace-pre">English v</p>
      <Frame142 
        username={username}
        onUsernameChange={onUsernameChange}
        password={password}
        onPasswordChange={onPasswordChange}
        showPassword={showPassword}
        onTogglePassword={onTogglePassword}
      />
    </div>
  );
}

function Frame144({ 
  username, 
  onUsernameChange, 
  password, 
  onPasswordChange,
  showPassword,
  onTogglePassword
}: { 
  username: string; 
  onUsernameChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  showPassword: boolean;
  onTogglePassword: () => void;
}) {
  return (
    <div className="absolute h-[463.957px] left-0 top-0 w-[350px]">
      <div className="absolute h-[138.957px] left-[25px] top-0 w-[300px]" data-name="incadea_logo 2">
        <IncadeaLogo width={300} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" />
      </div>
      <Frame143 
        username={username}
        onUsernameChange={onUsernameChange}
        password={password}
        onPasswordChange={onPasswordChange}
        showPassword={showPassword}
        onTogglePassword={onTogglePassword}
      />
    </div>
  );
}

function Frame146() {
  return (
    <div className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] h-[18px] leading-[normal] left-0 not-italic text-[14px] text-nowrap top-[70px] w-[228px] whitespace-pre">
      <p className="absolute left-0 text-[#161616] top-0">Don't have an account</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] absolute cursor-pointer decoration-solid left-[144px] text-[#4c68b1] top-0 underline">Register here</p>
    </div>
  );
}

function Frame145({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute cursor-pointer h-[50px] left-0 top-0 w-[150px]" onClick={onClick}>
      <div className="absolute bg-[#4c68b1] h-[50px] left-0 top-0 w-[150px]" />
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[44px] not-italic text-[20px] text-neutral-50 text-nowrap top-[12px] whitespace-pre">Sign In</p>
    </div>
  );
}

function Frame147({ onSignIn }: { onSignIn: () => void }) {
  return (
    <div className="absolute h-[88px] left-0 top-[523.96px] w-[228px]">
      <Frame146 />
      <Frame145 onClick={onSignIn} />
    </div>
  );
}

function Frame148({ 
  username, 
  onUsernameChange, 
  password, 
  onPasswordChange,
  showPassword,
  onTogglePassword,
  onSignIn
}: { 
  username: string; 
  onUsernameChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  showPassword: boolean;
  onTogglePassword: () => void;
  onSignIn: () => void;
}) {
  return (
    <div className="absolute h-[611.957px] left-[40px] top-[172px] w-[350px]">
      <Frame144 
        username={username}
        onUsernameChange={onUsernameChange}
        password={password}
        onPasswordChange={onPasswordChange}
        showPassword={showPassword}
        onTogglePassword={onTogglePassword}
      />
      <Frame147 onSignIn={onSignIn} />
    </div>
  );
}

function Time() {
  return (
    <div className="h-[13px] relative shrink-0 w-[40px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 13">
        <g clipPath="url(#clip0_4003_1166)" id="Time">
          <path d={svgPaths.p694a000} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4003_1166">
            <rect fill="white" height="13" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time1() {
  return (
    <div className="basis-0 bg-[rgba(244,244,244,0.8)] content-stretch flex grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Time">
      <Time />
    </div>
  );
}

function DynamicIslandFrame() {
  return (
    <div className="basis-0 bg-[rgba(244,244,244,0.8)] content-stretch flex grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Dynamic Island Frame">
      <div className="bg-black h-[37px] rounded-[20px] shrink-0 w-[125px]" data-name="Dynamic Island" />
    </div>
  );
}

function Reception() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Reception">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_4003_1181)" id="Reception">
          <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_4003_1181">
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
        <g clipPath="url(#clip0_4003_1169)" id="Wi-fi">
          <path clipRule="evenodd" d={svgPaths.p2952ae40} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4003_1169">
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
        <g clipPath="url(#clip0_4003_1113)" id="Battery">
          <path d={svgPaths.p3689d180} id="Vector" opacity="0.35" stroke="var(--stroke-0, black)" />
          <path d={svgPaths.p2a8bd780} fill="var(--fill-0, black)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p39726670} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_4003_1113">
            <rect fill="white" height="13" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="basis-0 bg-[rgba(244,244,244,0.8)] content-stretch flex gap-[8px] grow h-[59px] items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Icons">
      <Reception />
      <WiFi />
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute bg-[rgba(244,244,244,0.8)] content-stretch flex h-[59px] items-center justify-center left-0 overflow-clip right-0 top-0" data-name="Status Bar">
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

export default function LoginView({ onSignIn }: LoginViewProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // TODO: Add authentication logic here
  // For now, this just navigates to the home view
  const handleSignIn = () => {
    // Future: Validate credentials
    // Future: Call authentication API
    // Future: Store user session
    onSignIn();
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-[#f4f4f4] relative size-full" data-name="Log in">
      <StatusBar />
      <HomeBar />
      <Frame148 
        username={username}
        onUsernameChange={setUsername}
        password={password}
        onPasswordChange={setPassword}
        showPassword={showPassword}
        onTogglePassword={handleTogglePassword}
        onSignIn={handleSignIn}
      />
    </div>
  );
}
