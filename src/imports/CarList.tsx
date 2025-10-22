import { useState, useEffect } from "react";
import svgPaths from "./svg-3zhuzhk3br";
import svgPathsBottomBar from "./svg-gpii4in2y9";
import { getAsset } from "../utils/assets";
import StatusBar from "../components/StatusBar";
import { getCustomerVehicles } from "../utils/firebase/vehicles";
import { IncadeaLogo } from "../components/IncadeaLogo";

/**
 * Helper function to convert Google Drive URLs to embeddable format
 */
function convertGoogleDriveUrl(url: string): string {
  // Extraer el FILE_ID de diferentes formatos de URLs de Google Drive
  
  // Formato 1: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // Formato 2: https://drive.google.com/file/d/FILE_ID/view
  const match1 = url.match(/\/file\/d\/([^\/\?]+)/);
  if (match1) {
    const fileId = match1[1];
    // Usar formato de thumbnail que funciona mejor para imágenes
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
  }
  
  // Formato 3: https://drive.google.com/uc?export=view&id=FILE_ID
  const match2 = url.match(/[?&]id=([^&]+)/);
  if (match2) {
    const fileId = match2[1];
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
  }
  
  // Si no coincide con ningún patrón, devolver la URL original
  return url;
}

/**
 * Helper function to resolve image URLs from database
 * 
 * Prioridades:
 * 1. URLs de Google Drive (https://drive.google.com/...) → Convertir a formato embebible
 * 2. Imágenes base64 (data:image/...)
 * 3. URLs http/https
 * 4. Rutas locales (/assets/...)
 * 5. Placeholder si no hay imagen
 */
function resolveImageUrl(imageUrl: string | undefined): string {
  // If no imageUrl, use placeholder
  if (!imageUrl || imageUrl.trim() === '') {
    console.log('⚠️ No image URL provided, using placeholder');
    return 'https://via.placeholder.com/400x300/4C68B0/ffffff?text=No+Photo';
  }
  
  // PRIORIDAD 1: URLs de Google Drive - CONVERTIR A FORMATO EMBEBIBLE
  if (imageUrl.includes('drive.google.com')) {
    const originalUrl = imageUrl;
    const convertedUrl = convertGoogleDriveUrl(imageUrl);
    console.log('🔄 Converting Google Drive URL:');
    console.log('   Original:', originalUrl);
    console.log('   Converted:', convertedUrl);
    return convertedUrl;
  }
  
  // PRIORIDAD 2: Imagen base64 (subida por el usuario) - USAR DIRECTAMENTE
  if (imageUrl.startsWith('data:image/')) {
    console.log('✅ Using uploaded base64 image');
    return imageUrl;
  }
  
  // PRIORIDAD 3: URL http/https - USAR DIRECTAMENTE
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    console.log('✅ Using external URL image:', imageUrl.substring(0, 60) + '...');
    return imageUrl;
  }
  
  // PRIORIDAD 4: Ruta local (/assets/...) - USAR DIRECTAMENTE
  if (imageUrl.startsWith('/assets/') || imageUrl.startsWith('./assets/')) {
    console.log('✅ Using local asset image');
    return imageUrl;
  }
  
  // CUALQUIER OTRA URL - Intentar usarla directamente
  console.log('⚠️ Unknown image format, using as-is:', imageUrl.substring(0, 50));
  return imageUrl;
}

// Type for car data from Firestore
interface CarData {
  id: number;
  plate: string;
  registrationDate: string;
  brand: string;
  model: string;
  chassis: string;
  image: string;
}

function CloseOutline3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="close--outline 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2002_222)" id="close--outline 3">
          <path d={svgPathsBottomBar.p35e68500} fill="var(--fill-0, #4C68B0)" id="Vector" />
          <g id="_Transparent_Rectangle_"></g>
          <path d={svgPathsBottomBar.p35a89700} fill="var(--fill-0, #4C68B0)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2002_222">
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
      className="bg-white h-[40px] relative shrink-0 w-[185px] cursor-pointer hover:bg-[#f5f7fa] transition-colors" 
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

interface BottomBarProps {
  onCancel?: () => void;
}

function BottomBar({ onCancel }: BottomBarProps) {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[20px] h-[108px] items-start left-0 overflow-clip p-[20px] w-[430px]" data-name="BottomBar" style={{ top: "calc(80% + 78.4px)" }}>
      <Button onCancel={onCancel} />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_4px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Search1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[17px]" data-name="search 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g clipPath="url(#clip0_6_5712)" id="search 1">
          <path d={svgPaths.p39b46880} fill="var(--fill-0, #63646A)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_6_5712">
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
    <div className="absolute bg-[#f4f4f4] h-[31px] left-[20px] w-[390px]" data-name="Searchbar" style={{ top: "calc(20% + 23.6px)" }}>
      <div className="box-border content-stretch flex gap-[20px] h-[31px] items-center overflow-clip px-[20px] py-[10px] relative w-[390px]">
        <Search1 />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search"
          className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] not-italic bg-transparent border-none outline-none flex-1 text-[#161616] text-[14px] placeholder:text-[#9b9b9b]"
        />
      </div>
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow--right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_5708)" id="arrow--right 2">
          <path d={svgPaths.pfec3600} fill="var(--fill-0, #525252)" id="Vector" />
          <g id="<Transparent Rectangle>"></g>
        </g>
        <defs>
          <clipPath id="clip0_6_5708">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface VehicleCardProps {
  car: typeof carsData[0];
  onSelect?: (car: typeof carsData[0]) => void;
}

function VehicleCard({ car, onSelect }: VehicleCardProps) {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div 
      className="bg-[#f4f4f4] relative shrink-0 w-full cursor-pointer" 
      data-name="Vehicle Card"
      onClick={() => onSelect?.(car)}
    >
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center justify-center p-[20px] relative w-full">
          <div className="relative shrink-0 size-[100px]" data-name="Car2 2">
            {!imageError ? (
              <img 
                alt={`${car.brand} ${car.model}`}
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-[4px]" 
                src={car.image}
                onError={() => {
                  console.error(`❌ Failed to load image for ${car.plate}: ${car.image}`);
                  setImageError(true);
                }}
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[#4C68B0] text-white text-[10px] text-center rounded-[4px]">
                No Photo
              </div>
            )}
          </div>
          <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] gap-[5px] items-start leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] w-[194px]">
            <p className="leading-[normal] relative shrink-0 w-full">
              <span>{`Plate: `}</span>
              <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{car.plate}</span>
            </p>
            <p className="leading-[normal] relative shrink-0 w-full">
              <span>{`Registration Date: `}</span>
              <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{car.registrationDate}</span>
            </p>
            <p className="leading-[normal] relative shrink-0 w-full">
              <span>{`Brand: `}</span>
              <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{car.brand}</span>
            </p>
            <p className="leading-[normal] relative shrink-0 w-full">
              <span>{`Model: `}</span>
              <span className="font-['IBM_Plex_Sans:Light',_sans-serif] not-italic">{car.model}</span>
            </p>
          </div>
          <ArrowRight2 />
        </div>
      </div>
    </div>
  );
}

interface Frame869Props {
  filteredCars: typeof carsData;
  onSelectCar?: (car: typeof carsData[0]) => void;
}

function Frame869({ filteredCars, onSelectCar }: Frame869Props) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[568px] items-start left-[20px] overflow-x-clip overflow-y-auto w-[390px]" style={{ top: "calc(20% + 69.6px)" }}>
      {filteredCars.map((car) => (
        <VehicleCard key={car.id} car={car} onSelect={onSelectCar} />
      ))}
    </div>
  );
}

function Search2() {
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

function Menu1({ onClick }: { onClick?: () => void }) {
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

function Frame10({ onMenuClick }: { onMenuClick?: () => void }) {
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

function TopBar({ onMenuClick }: { onMenuClick?: () => void }) {
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
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex h-[34px] items-center justify-center left-0 overflow-clip pb-0 pt-[13px] px-0 right-0" data-name="Home Bar" style={{ top: "calc(100% - 34px)" }}>
      <div className="bg-black h-[5px] rounded-[3px] shrink-0 w-[134px]" data-name="Rectangle" />
    </div>
  );
}

export type { CarData };

interface CarListProps {
  onCancel?: () => void;
  onSelectCar?: (car: CarData) => void;
  onMenuClick?: () => void;
  customerId?: string;
}

export default function CarList({ 
  onCancel, 
  onSelectCar, 
  onMenuClick,
  customerId = "customer-theo-floyd"
}: CarListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [carsData, setCarsData] = useState<CarData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load vehicles from Firestore
  useEffect(() => {
    async function loadVehicles() {
      try {
        setLoading(true);
        setError(null);
        
        console.log('🚗 Loading vehicles from Firestore for customer:', customerId);
        
        const vehicles = await getCustomerVehicles(customerId);
        
        console.log(`✅ Loaded ${vehicles.length} vehicles from Firestore`);
        
        // Convert Firestore data to CarList format
        const formatted = vehicles.map((v, index) => {
          console.log(`\n🚗 Vehicle ${v.plate}:`);
          console.log(`   imageUrl from DB: ${v.imageUrl?.substring(0, 100) || 'EMPTY'}...`);
          const resolvedImage = resolveImageUrl(v.imageUrl);
          console.log(`   Resolved image: ${resolvedImage.substring(0, 100)}...`);
          
          return {
            id: index + 1,
            plate: v.plate,
            registrationDate: v.registrationDate,
            brand: v.brand,
            model: v.model,
            chassis: v.chassis,
            image: resolvedImage
          };
        });
        
        setCarsData(formatted);
        console.log('\n📊 All vehicles loaded with images!');
        
      } catch (error) {
        console.error('❌ Error loading vehicles:', error);
        setError('Failed to load vehicles. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    loadVehicles();
  }, [customerId]);

  // Filter cars by chassis number OR plate number
  const filteredCars = carsData.filter((car) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      car.chassis.toLowerCase().includes(searchLower) ||
      car.plate.toLowerCase().includes(searchLower) ||
      car.brand.toLowerCase().includes(searchLower) ||
      car.model.toLowerCase().includes(searchLower)
    );
  });

  // Loading state
  if (loading) {
    return (
      <div className="bg-white relative size-full flex items-center justify-center" data-name="Car List">
        <div className="text-center">
          <div className="mb-4">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#4c68b0] border-r-transparent"></div>
          </div>
          <p className="text-[#161616] text-[16px]">Loading vehicles...</p>
          <p className="text-[#63646a] text-[12px] mt-2">Getting data from Firestore</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-white relative size-full flex items-center justify-center" data-name="Car List">
        <div className="text-center px-8">
          <p className="text-[#d0021b] text-[16px] mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-[#4c68b0] text-white px-6 py-2 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // No vehicles found
  if (carsData.length === 0) {
    return (
      <div className="bg-white relative size-full" data-name="Car List">
        <StatusBar />
        <HomeBar />
        <TopBar onMenuClick={onMenuClick} />
        <div className="absolute left-[20px] right-[20px] top-[200px] text-center">
          <p className="text-[#161616] text-[20px] mb-4">No vehicles found</p>
          <p className="text-[#63646a] text-[14px] mb-6">Please add vehicles to your account first.</p>
          <p className="text-[#63646a] text-[12px]">
            Run in browser console:
            <br />
            <code className="bg-gray-100 px-2 py-1 rounded text-[11px]">
              await seedVehiclesWithFigmaImages('customer-theo-floyd')
            </code>
          </p>
        </div>
        <BottomBar onCancel={onCancel} />
      </div>
    );
  }

  return (
    <div className="bg-white relative size-full" data-name="Car List">
      <StatusBar />
      <HomeBar />
      <p className="absolute font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[normal] left-[20px] not-italic text-[#161616] text-[24px] text-nowrap top-[159px] whitespace-pre">{`Select a vehicle `}</p>
      <BottomBar onCancel={onCancel} />
      <Searchbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Frame869 filteredCars={filteredCars} onSelectCar={onSelectCar} />
      <TopBar onMenuClick={onMenuClick} />
    </div>
  );
}
