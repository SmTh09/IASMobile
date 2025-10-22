import { useState, useEffect } from "react";
import LoginView from "./components/LoginView";
import HomeViewMobileCustomer from "./imports/HomeViewMobileCustomer";
import AppointmentRequests from "./imports/AppointmentRequests";
import NewAppointmentRequestMain from "./imports/NewAppointmentRequestMain";
import NewAppointmentRequestJobLines from "./imports/NewAppointmentRequestJobLines";
import NewAppointmentRequestDate from "./imports/NewAppointmentRequestDate";
import AppointmentSummary from "./imports/AppointmentSummary";
import CarList, { type CarData } from "./imports/CarList";
import AppointmentsList from "./components/AppointmentsList";
import AppSidebar from "./components/AppSidebar";
import PartsRelocation from "./components/PartsRelocation";
import NewPartsRelocation from "./components/NewPartsRelocation";
import SelectParts, {
  type PartData,
} from "./components/SelectParts";
import ManageVehiclePhotos from "./imports/ManageVehiclePhotos";
import {
  createAppointment,
  getAppointmentCount,
} from "./utils/api";
import { Toaster } from "./components/ui/sonner";
import { 
  seedVehiclesWithFigmaImages, 
  clearVehicles 
} from "./utils/firebase/seedVehicles";
import { autoSeedVehiclesIfNeeded } from "./utils/firebase/autoSeedVehicles";
import { checkVehicleImages } from "./utils/firebase/checkVehicleImages";
import { 
  updateVehiclesWithPlaceholders, 
  forceUpdateAllVehiclesWithPlaceholders 
} from "./utils/firebase/updateVehiclesWithPlaceholders";

interface JobLine {
  id: number;
  text: string;
}

export default function App() {
  const [currentView, setCurrentView] = useState<
    | "login"
    | "home"
    | "appointments"
    | "appointmentsList"
    | "newAppointment"
    | "carList"
    | "summary"
    | "partsRelocation"
    | "newPartsRelocation"
    | "selectParts"
    | "vehiclePhotos"
  >("login");
  const [selectedCar, setSelectedCar] =
    useState<CarData | null>(null);
  const [activeTab, setActiveTab] = useState<string>("vehicle");
  const [jobLines, setJobLines] = useState<JobLine[]>([]);
  const [nextJobLineId, setNextJobLineId] = useState(1);
  const [mileage, setMileage] = useState<string>("");
  const [measurement, setMeasurement] =
    useState<string>("Kilometers");
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    null,
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<
    string | null
  >(null);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [showNotification, setShowNotification] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPart, setSelectedPart] = useState<any>(null);

  // Customer ID - In a real app, this would come from authentication
  const customerId = "customer-theo-floyd";
  const customerName = "Theo Floyd";

  // Load appointment count and seed parts on mount
  useEffect(() => {
    const loadAppointmentCount = async () => {
      try {
        const count = await getAppointmentCount(customerId);
        setAppointmentCount(count);
      } catch (error) {
        console.error(
          "Failed to load appointment count:",
          error,
        );
      }
    };

    loadAppointmentCount();
    
    // Auto-seed vehicles if they don't exist
    autoSeedVehiclesIfNeeded(customerId);
    
    // Make seed functions available in browser console
    if (typeof window !== 'undefined') {
      (window as any).seedVehicles = seedVehiclesWithFigmaImages;
      (window as any).clearVehicles = clearVehicles;
      (window as any).goToVehiclePhotos = () => setCurrentView('vehiclePhotos');
      (window as any).checkVehicleImages = checkVehicleImages;
      (window as any).updateVehiclesWithPlaceholders = updateVehiclesWithPlaceholders;
      (window as any).fixVehiclePhotos = forceUpdateAllVehiclesWithPlaceholders;
      
      console.log('');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('🚗 VEHICLES READY!');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('');
      console.log('✅ 5 vehicles with PLACEHOLDER images:');
      console.log('   • CF-545-YA - BMW 330i xDrive (Red)');
      console.log('   • TK-271-GT - BMW 540i xDrive (Gray)');
      console.log('   • QX-504-AP - BMW 330I XDRIVE A (Blue)');
      console.log('   • WW-896-BA - BMW 330I XDRIVE A (Orange)');
      console.log('   • QR-759-HY - BMW X6 XDRIVE35I US (Navy)');
      console.log('');
      console.log('📸 REPLACE PLACEHOLDERS WITH REAL PHOTOS:');
      console.log('   goToVehiclePhotos()');
      console.log('   → Upload your own vehicle photos');
      console.log('   → Photos saved as base64 in Firestore');
      console.log('');
      console.log('🔍 CHECK IMAGE STATUS:');
      console.log('   await checkVehicleImages()');
      console.log('');
      console.log('🔧 FIX MISSING PHOTOS (if vehicles show no images):');
      console.log('   await fixVehiclePhotos()');
      console.log('   → Updates all vehicles with placeholder images');
      console.log('   → Preserves user-uploaded photos (base64)');
      console.log('');
      console.log('🛠️ ADVANCED:');
      console.log('   await updateVehiclesWithPlaceholders() - Smart update (only empty)');
      console.log('   await seedVehicles("customer-theo-floyd") - Recreate all');
      console.log('   await clearVehicles() - Delete all vehicles');
      console.log('');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('');
    }
  }, []);

  const handleAddAppointment = () => {
    setCurrentView("appointments");
  };

  const handleViewAppointments = () => {
    setCurrentView("appointmentsList");
  };

  const handleNewAppointment = () => {
    setActiveTab("vehicle");
    setCurrentView("newAppointment");
  };

  const handleAddVehicle = () => {
    setCurrentView("carList");
  };

  const handleCancel = () => {
    // Clear all data and go home
    setSelectedCar(null);
    setMileage("");
    setMeasurement("Kilometers");
    setJobLines([]);
    setNextJobLineId(1);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
    setActiveTab("vehicle");
    setCurrentView("home");
  };

  const handleCancelToAppointments = () => {
    setActiveTab("vehicle");
    setCurrentView("appointments");
  };

  const handleCancelToNewAppointment = () => {
    setCurrentView("newAppointment");
  };

  const handleSelectCar = (car: CarData) => {
    setSelectedCar(car);
    setCurrentView("newAppointment");
  };

  const handleDeleteCar = () => {
    setSelectedCar(null);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleNext = () => {
    if (activeTab === "vehicle") {
      setActiveTab("jobLines");
    } else if (activeTab === "jobLines") {
      setActiveTab("date");
    } else if (activeTab === "date") {
      // Go to summary
      setCurrentView("summary");
    }
  };

  const handleGoBack = () => {
    if (activeTab === "jobLines") {
      setActiveTab("vehicle");
    } else if (activeTab === "date") {
      setActiveTab("jobLines");
    }
  };

  const handleGoBackToDate = () => {
    setActiveTab("date");
    setCurrentView("newAppointment");
  };

  const handleAddJobLine = () => {
    setJobLines([...jobLines, { id: nextJobLineId, text: "" }]);
    setNextJobLineId(nextJobLineId + 1);
  };

  const handleDeleteJobLine = (id: number) => {
    setJobLines(jobLines.filter((line) => line.id !== id));
  };

  const handleUpdateJobLine = (id: number, text: string) => {
    setJobLines(
      jobLines.map((line) =>
        line.id === id ? { ...line, text } : line,
      ),
    );
  };

  const handleSaveAppointment = async () => {
    if (!selectedCar || !selectedDate || !selectedTimeSlot) {
      console.error("Missing required appointment data");
      return;
    }

    setIsLoading(true);

    try {
      // Save appointment to Firebase Firestore
      const appointmentData = {
        customerId,
        customerName,
        vehicle: {
          licensePlate: selectedCar.plate || "",
          brand: selectedCar.brand || "",
          model: selectedCar.model || "",
          image: selectedCar.image || "",
        },
        jobLines: jobLines.filter(
          (line) => line.text.trim() !== "",
        ),
        mileage: mileage || "",
        measurement: measurement || "Kilometers",
        date: selectedDate.toISOString(),
        timeSlot: selectedTimeSlot,
      };

      const result = await createAppointment(appointmentData);

      // Update appointment count from server response
      if (result.appointmentCount !== undefined) {
        setAppointmentCount(result.appointmentCount);
      }

      // Clear all appointment data after saving
      setSelectedCar(null);
      setMileage("");
      setMeasurement("Kilometers");
      setJobLines([]);
      setNextJobLineId(1);
      setSelectedDate(null);
      setSelectedTimeSlot(null);
      setActiveTab("vehicle");

      // Navigate to home and show notification
      setCurrentView("home");
      setShowNotification(true);

      // Hide notification after 4 seconds (iOS typical duration)
      setTimeout(() => {
        setShowNotification(false);
      }, 4000);
    } catch (error) {
      console.error("Failed to save appointment:", error);
      alert("Failed to save appointment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDismissNotification = () => {
    setShowNotification(false);
  };

  // Check if can proceed to next step
  const canProceedFromVehicle = () => {
    return selectedCar !== null;
  };

  const canProceedFromJobLines = () => {
    return (
      jobLines.length > 0 &&
      jobLines.some((line) => line.text.trim() !== "")
    );
  };

  const canProceedFromDate = () => {
    return selectedDate !== null && selectedTimeSlot !== null;
  };

  const handleSidebarNavigate = (section: string) => {
    console.log("Navigate to:", section);
    // Handle navigation based on section
    if (section === "logout") {
      // Handle logout
      console.log("Logging out...");
    } else if (section === "relocations") {
      setCurrentView("partsRelocation");
      setSidebarOpen(false);
    } else if (section === "appointment-requests") {
      setCurrentView("appointmentsList");
      setSidebarOpen(false);
    } else if (section === "vehicle-photos") {
      setCurrentView("vehiclePhotos");
      setSidebarOpen(false);
    }
    // Add more navigation handlers as needed
  };

  const handleNewPartsRelocation = () => {
    setSelectedPart(null);
    setCurrentView("newPartsRelocation");
  };

  const handleBackToPartsRelocation = () => {
    setSelectedPart(null);
    setCurrentView("partsRelocation");
  };

  const handleAddPart = () => {
    setCurrentView("selectParts");
  };

  const handleSelectPart = (part: PartData) => {
    // Convert PartData to Part format
    const convertedPart = {
      id: part.id,
      parentPartId: part.parentPartId, // IMPORTANT: This is the actual Firestore document ID
      partNumber: part.partNumber,
      partName: part.partName,
      description: part.partName,
      physicalLocation: part.physicalLocation,
      shelfAddress: part.shelfAddress,
      currentAvailability: part.currentAvailability,
      quantity: 1,
      physicalLocationRef: part.physicalLocationRef,
      shelfRef: part.shelfRef,
    };
    setSelectedPart(convertedPart);
    setCurrentView("newPartsRelocation");
  };

  const handleBackFromSelectParts = () => {
    setCurrentView("newPartsRelocation");
  };

  const handleDeletePart = () => {
    setSelectedPart(null);
  };

  const handleLogin = () => {
    // TODO: Add authentication logic here
    // For now, just navigate to home view
    setCurrentView("home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[430px] h-[932px] bg-white overflow-hidden">
        {/* Main Content */}
        <div className="relative w-full h-full">
          {currentView === "login" ? (
            <LoginView onSignIn={handleLogin} />
          ) : currentView === "home" ? (
            <HomeViewMobileCustomer
              onAddAppointment={handleAddAppointment}
              onViewAppointments={handleViewAppointments}
              onNewAppointment={handleNewAppointment}
              appointmentCount={appointmentCount}
              showNotification={showNotification}
              onDismissNotification={handleDismissNotification}
              onMenuClick={() => setSidebarOpen(true)}
            />
          ) : currentView === "appointmentsList" ? (
            <AppointmentsList
              customerId={customerId}
              onCancel={handleCancel}
              onNew={handleNewAppointment}
              onMenuClick={() => setSidebarOpen(true)}
            />
          ) : currentView === "appointments" ? (
            <AppointmentRequests
              onCancel={handleCancel}
              onNew={handleNewAppointment}
              onMenuClick={() => setSidebarOpen(true)}
            />
          ) : currentView === "newAppointment" ? (
            activeTab === "vehicle" ? (
              <NewAppointmentRequestMain
                onCancel={handleCancel}
                onAddVehicle={handleAddVehicle}
                selectedCar={selectedCar}
                onDeleteCar={handleDeleteCar}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                mileage={mileage}
                onMileageChange={setMileage}
                measurement={measurement}
                onMeasurementChange={setMeasurement}
                onNext={handleNext}
                onGoBack={handleGoBack}
                canProceed={canProceedFromVehicle()}
                onMenuClick={() => setSidebarOpen(true)}
              />
            ) : activeTab === "jobLines" ? (
              <NewAppointmentRequestJobLines
                onCancel={handleCancel}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                jobLines={jobLines}
                onAddJobLine={handleAddJobLine}
                onDeleteJobLine={handleDeleteJobLine}
                onUpdateJobLine={handleUpdateJobLine}
                onNext={handleNext}
                onGoBack={handleGoBack}
                canProceed={canProceedFromJobLines()}
                onMenuClick={() => setSidebarOpen(true)}
              />
            ) : activeTab === "date" ? (
              <NewAppointmentRequestDate
                onCancel={handleCancel}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
                selectedTimeSlot={selectedTimeSlot}
                onSelectTimeSlot={setSelectedTimeSlot}
                onNext={handleNext}
                onGoBack={handleGoBack}
                canProceed={canProceedFromDate()}
                onMenuClick={() => setSidebarOpen(true)}
              />
            ) : (
              <NewAppointmentRequestMain
                onCancel={handleCancel}
                onAddVehicle={handleAddVehicle}
                selectedCar={selectedCar}
                onDeleteCar={handleDeleteCar}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                mileage={mileage}
                onMileageChange={setMileage}
                measurement={measurement}
                onMeasurementChange={setMeasurement}
                onNext={handleNext}
                onGoBack={handleGoBack}
                canProceed={canProceedFromVehicle()}
                onMenuClick={() => setSidebarOpen(true)}
              />
            )
          ) : currentView === "summary" ? (
            <AppointmentSummary
              onCancel={handleCancel}
              onGoBack={handleGoBackToDate}
              onSubmit={handleSaveAppointment}
              selectedCar={selectedCar}
              jobLines={jobLines}
              mileage={mileage}
              measurement={measurement}
              selectedDate={selectedDate}
              selectedTimeSlot={selectedTimeSlot}
              onMenuClick={() => setSidebarOpen(true)}
            />
          ) : currentView === "partsRelocation" ? (
            <PartsRelocation
              onCancel={handleCancel}
              onMenuClick={() => setSidebarOpen(true)}
              onNew={handleNewPartsRelocation}
            />
          ) : currentView === "newPartsRelocation" ? (
            <NewPartsRelocation
              onGoBack={handleBackToPartsRelocation}
              onMenuClick={() => setSidebarOpen(true)}
              onAddPart={handleAddPart}
              selectedPart={selectedPart}
              onDeletePart={handleDeletePart}
            />
          ) : currentView === "selectParts" ? (
            <SelectParts
              onSelectPart={handleSelectPart}
              onGoBack={handleBackFromSelectParts}
              onMenuClick={() => setSidebarOpen(true)}
            />
          ) : currentView === "vehiclePhotos" ? (
            <ManageVehiclePhotos
              customerId={customerId}
              onBack={() => setCurrentView("home")}
            />
          ) : (
            <CarList
              onCancel={handleCancelToNewAppointment}
              onSelectCar={handleSelectCar}
              onMenuClick={() => setSidebarOpen(true)}
              customerId={customerId}
            />
          )}
        </div>

        {/* Sidebar - Renders on top of content */}
        <AppSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onNavigate={handleSidebarNavigate}
        />
      </div>

      {/* Toast Notifications */}
      <Toaster position="top-center" />
    </div>
  );
}