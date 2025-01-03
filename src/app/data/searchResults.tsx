import { Routes } from "@/constants/Routes";
import { ReactNode } from "react";
import FeedIcon from '@mui/icons-material/Feed';
import InfoIcon from '@mui/icons-material/Info';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import FloodIcon from '@mui/icons-material/Flood';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import ApprovalIcon from '@mui/icons-material/Approval';
import SchoolIcon from '@mui/icons-material/School';
import SavingsIcon from '@mui/icons-material/Savings';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import RemoveRoadIcon from '@mui/icons-material/RemoveRoad';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import TrainIcon from '@mui/icons-material/Train';
import PublicIcon from '@mui/icons-material/Public';
import NoiseAwareIcon from '@mui/icons-material/NoiseAware';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman';
import ElderlyIcon from '@mui/icons-material/Elderly';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import DateRangeIcon from '@mui/icons-material/DateRange';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import SummarizeIcon from '@mui/icons-material/Summarize';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import RecyclingIcon from '@mui/icons-material/Recycling';
import WifiFindIcon from '@mui/icons-material/WifiFind';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PetsIcon from '@mui/icons-material/Pets';
import FlagIcon from '@mui/icons-material/Flag';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ShowerIcon from '@mui/icons-material/Shower';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import PanToolIcon from '@mui/icons-material/PanTool';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export interface SearchResult {
  title: string;
  description: string;
  route: Routes;
  icon: ReactNode;
}

export const searchResults: SearchResult[] = [
  {
    title: "[term] Application Guidelines",
    route: Routes.Businesses,
    icon: <FeedIcon />,
    description:
      "Learn the step-by-step process for applying for a [term], including required documents and fees.",
  },

  {
    title: "[term] Program Information ",
    route: Routes.Residents,
    icon: <InfoIcon />,
    description:
      "Discover how to participate in the [term] program and find local drop-off locations.",
  },

  {
    title: "[term] and [term2] Regulations ",
    route: Routes.Residents,
    icon: <ConfirmationNumberIcon />,
    description:
      "Find detailed rules for [term2] and [term] in Cloud City, including ticketing and enforcement.",
  },

  {
    title: "Contact Department of [term] [term2] ",
    route: Routes.Residents,
    icon: <ContactPhoneIcon />,
    description:
      "Reach out to the [term] [term2] Department for questions about street maintenance and repairs.",
  },

  {
    title: "[term] [term2] [term3] and Deadlines ",
    route: Routes.Businesses,
    icon: <InfoIcon />,
    description:
      "Get the latest information on [term] [term2] [term3] and important payment deadlines.",
  },

  {
    title: "[term] Code Regulations ",
    route: Routes.Businesses,
    icon: <AssuredWorkloadIcon />,
    description:
      "Review the [term] code to ensure your project meets all local construction requirements.",
  },
  {
    title: "How to Apply for [term] Licenses  ",
    route: Routes.Businesses,
    icon: <HelpCenterIcon />,
    description:
      "Everything you need to know about obtaining a [term] license in Cloud City, including costs and application tips.",
  },

  {
    title: "Emergency Alerts and Notifications",
    route: Routes.Visitors,
    icon: <FloodIcon />,
    description:
      "Sign up for emergency alerts to stay informed about weather, traffic, and public safety updates.",
  },

  {
    title: "Neighborhood Watch Programs ",
    route: Routes.Residents,
    icon: <CameraOutdoorIcon />,
    description:
      "Learn how to get involved in a Neighborhood Watch program to help keep your community safe.",
  },

  {
    title: "Community Health Resources  ",
    route: Routes.Residents,
    icon: <MedicationLiquidIcon />,
    description:
      "Access health services, vaccination clinics, and wellness programs offered by the government.",
  },

  {
    title: "Apply for [term] [term2] ",
    route: Routes.Businesses,
    icon: <ApprovalIcon />,
    description:
      "Information on how to apply for [term2] [term] programs in Cloud City.",
  },

  {
    title: "School District Enrollment Process  ",
    route: Routes.Residents,
    icon: <SchoolIcon />,
    description:
      "Find out how to enroll your child in the school district, including residency and documentation requirements.",
  },

  {
    title: "Local Business Incentives ",
    route: Routes.Businesses,
    icon: <SavingsIcon />,
    description:
      "Explore business incentive programs and grants available for companies operating in Cloud City.",
  },

  {
    title: "Job Openings and Career Opportunities  ",
    route: Routes.Jobs,
    icon: <WorkHistoryIcon />,
    description:
      "Browse current job openings within government departments and apply online.",
  },

  {
    title: "Report a Pothole or Road Issue ",
    route: Routes.Residents,
    icon: <RemoveRoadIcon />,
    description:
      "Submit a service request for potholes, road hazards, or other infrastructure issues in Cloud City.",
  },

  {
    title: "Fire Department Services",
    route: Routes.Residents,
    icon: <FireTruckIcon />,
    description:
      "Learn about fire prevention, emergency response, and community safety programs offered by the Fire Department.",
  },

  {
    title: "Voting and Election Information ",
    route: Routes.Residents,
    icon: <HowToVoteIcon />,
    description:
      "Stay informed on upcoming elections, voter registration, and polling locations in Cloud City.",
  },

  {
    title: "Public Transit Schedules and Routes ",
    route: Routes.Visitors,
    icon: <TrainIcon />,
    description:
      "Find bus and train schedules, route maps, and fare information for Cloud City's public transit system.",
  },

  {
    title: "Environmental Protection Policies ",
    route: Routes.Residents,
    icon: <PublicIcon />,
    description:
      "Learn about the Cloud City’s sustainability and environmental protection policies, including green initiatives.",
  },

  {
    title: "Noise Ordinances and Regulations ",
    route: Routes.Residents,
    icon: <NoiseAwareIcon />,
    description:
      "Review the noise ordinances in to understand allowable sound levels and noise complaint procedures.",
  },

  {
    title: "[term] Hours and Amenities  ",
    route: Routes.Visitors,
    icon: <WatchLaterIcon />,
    description:
      "Get information on [term] hours, locations, and available facilities in Cloud City.",
  },

  {
    title: "Request a [term] Report ",
    route: Routes.Residents,
    icon: <FeedIcon />,
    description:
      "Learn how to request a copy of a [term] report or incident summary from the [term] Department.",
  },

  {
    title: "[term] [term2] [term3] and [term]ing Resources  ",
    route: Routes.Residents,
    icon: <ContactEmergencyIcon />,
    description:
      "Access [term] [term2] [term3] and emergency resources to help protect your property from [term]ing.",
  },

  {
    title: "Senior Services and Programs ",
    route: Routes.Residents,
    icon: (
      <div className="relative max-w-min">
        <ElderlyIcon className="absolute top-[2px] left-[-12px] text-secondary" />
        <ElderlyWomanIcon />
      </div>
    ),
    description:
      "Explore resources available for seniors, including healthcare, social services, and community programs in Cloud City.",
  },

  {
    title: "Apply for a Building Permit ",
    route: Routes.Businesses,
    icon: <ApprovalIcon />,
    description:
      "Information on how to apply for a building permit in Cloud City, including submission requirements and processing time.",
  },

  {
    title: "Public [term] Locations and Hours ",
    route: Routes.Visitors,
    icon: <AccessTimeFilledIcon />,
    description:
      "Find the nearest public [term], along with its services, operating hours, and event schedules.",
  },

  {
    title: "[term] [term2] Schedule ",
    route: Routes.Residents,
    icon: <DateRangeIcon />,
    description:
      "Stay up-to-date on the [term] [term2] schedule to avoid parking tickets and keep your neighborhood clean.",
  },

  {
    title: "Homeless Shelter Locations and Services ",
    route: Routes.Residents,
    icon: <NightShelterIcon />,
    description:
      "Discover local shelters and resources available to individuals experiencing homelessness in Cloud City.",
  },

  {
    title: "Report [term] Violations  ",
    route: Routes.Residents,
    icon: <FlagCircleIcon />,
    description:
      "Use our online tool to report [term] violations in your neighborhood.",
  },

  {
    title: "Construction Project Updates ",
    route: Routes.Residents,
    icon: <CorporateFareIcon />,
    description:
      "Find out about major road and infrastructure projects happening around Cloud City, including timelines and disruptions.",
  },

  {
    title: "Youth Sports Registration  ",
    route: Routes.Residents,
    icon: <SportsHandballIcon />,
    description:
      "Sign your child up for youth sports leagues and recreation programs offered by parks and recreation.",
  },

  {
    title: "[term] Drop-Off Locations ",
    route: Routes.Residents,
    icon: <RecyclingIcon />,
    description:
      "Locate convenient drop-off points for [term] in Cloud City, including guidelines for what can be dropped off.",
  },

  {
    title: "[term] Laws and [term2] [term3] Regulations ",
    route: Routes.Businesses,
    icon: <SummarizeIcon />,
    description:
      "Review the [term] laws to understand [term2] [term3] regulations and permissible [term4] [term5].",
  },

  {
    title: "Free Wi-Fi Locations",
    route: Routes.Visitors,
    icon: <WifiFindIcon />,
    description:
      "Find free public Wi-Fi locations across for convenient internet access in public spaces.",
  },

  {
    title: "Public Event Calendar ",
    route: Routes.Events,
    icon: <CalendarMonthIcon />,
    description:
      "Stay informed about local events, festivals, and meetings happening in throughout the year.",
  },

  {
    title: " How to File a [term2] Appeal  ",
    route: Routes.Residents,
    icon: <HelpCenterIcon />,
    description:
      "Learn the process for filing a [term] [term2] appeal in Cloud City, including forms and deadlines.",
  },

  {
    title: "Animal Control and Pet Licensing  ",
    route: Routes.Residents,
    icon: <PetsIcon />,
    description:
      "Find information about animal control services, pet licensing, and adoption programs in Cloud City.",
  },

  {
    title: "Historic Preservation Guidelines  ",
    route: Routes.Visitors,
    icon: <FlagIcon />,
    description:
      "Review guidelines for preserving historic buildings and landmarks within Cloud City.",
  },

  {
    title: "Affordable [term] [term2] Opportunities ",
    route: Routes.Residents,
    icon: <ApartmentIcon />,
    description:
      "Get information on current and upcoming affordable housing [term2]s and applications in Cloud City.",
  },

  {
    title: "[term] [term2] Programs  ",
    route: Routes.Residents,
    icon: <SummarizeIcon />,
    description:
      "Discover how you can participate in or start a [term] [term2] in Cloud City.",
  },

  {
    title: "Energy Efficiency Programs  ",
    route: Routes.Residents,
    icon: <EnergySavingsLeafIcon />,
    description:
      "Learn about energy-saving programs and incentives available to residents of Cloud City.",
  },

  {
    title: "Building Code Inspections  ",
    route: Routes.Businesses,
    icon: <ApprovalIcon />,
    description:
      "Find out how to schedule a building inspection and learn about the requirements for construction projects in Cloud City.",
  },

  {
    title: "Water Conservation Tips  ",
    route: Routes.Residents,
    icon: <ShowerIcon />,
    description:
      "Get practical water-saving tips to help reduce your utility bills and conserve water in Cloud City.",
  },

  {
    title: "Tree Planting Initiatives  ",
    route: Routes.Residents,
    icon: <NaturePeopleIcon />,
    description:
      "Participate in Cloud City’s tree planting initiatives to improve urban greenery and reduce environmental impact.",
  },

  {
    title: "Public Records Request ",
    route: Routes.Residents,
    icon: <FeedIcon />,
    description:
      "Submit a request for public records from government offices and departments.",
  },

  {
    title: "Noise Complaint Hotline  ",
    route: Routes.Residents,
    icon: <ContactEmergencyIcon />,
    description:
      "Contact the noise complaint hotline to report disturbances and get assistance.",
  },

  {
    title: "Local Business Directory  ",
    route: Routes.Businesses,
    icon: <CorporateFareIcon />,
    description:
      "Search the business directory for local shops, services, and restaurants near you.",
  },

  {
    title: "Climate Action Plans  ",
    route: Routes.Residents,
    icon: <EnergySavingsLeafIcon />,
    description:
      "Learn about Cloud City’s efforts to address climate change through sustainable policies and projects.",
  },

  {
    title: "How to Obtain a [term] License",
    route: Routes.Businesses,
    icon: <ApprovalIcon />,
    description:
      "Find out how to apply for a [term] license in Cloud City, including the necessary forms and documentation.",
  },

  {
    title: "Job Training and Workforce Development  ",
    route: Routes.Jobs,
    icon: <WorkHistoryIcon />,
    description:
      "Explore job training programs and workforce development resources offered by to help residents find employment.",
  },

  {
    title: "Tax Incentives for Homeowners ",
    route: Routes.Residents,
    icon: <SavingsIcon />,
    description:
      "Learn about local tax breaks and incentives available for homeowners in Cloud City.",
  },

  {
    title: "[term] and [term2] Prevention Programs ",
    route: Routes.Residents,
    icon: <PanToolIcon />,
    description:
      " Learn about [term2] prevention programs and [term] initiatives available for residents of Cloud City.",
  },

  {
    title: "Affordable Public Transportation  ",
    route: Routes.Visitors,
    icon: <TrainIcon />,
    description:
      "Find affordable public transportation options, including discounts and fare reductions in Cloud City.",
  },

  {
    title: "Local Historic District Information ",
    route: Routes.Visitors,
    icon: <FlagIcon />,
    description:
      " Discover the details of Cloud City's historic districts, including preservation efforts and property regulations.",
  },

  {
    title: "Support Local [term] @ Cloud City market",
    route: Routes.Events,
    icon: <LocalGroceryStoreIcon />,
    description:
      "Join us at the Cloud City market to support local [term] and artisans in the community.",
  }
];

export function retrieveSearchResults(query: string): SearchResult[] {
  const terms = query.trim().split(" ");
  
  let results: SearchResult[] = [];

  switch (terms.length) {
    case 1:
      results = searchResults.filter(
        (result) =>
          result.title?.toLowerCase().includes(terms[0]?.toLowerCase()) ||
          result.description?.toLowerCase().includes(terms[0]?.toLowerCase())
      );
    case 2:
      results = searchResults.filter(
        (result) =>
          (result.title?.toLowerCase().includes(terms[0]?.toLowerCase()) &&
            result.title?.toLowerCase().includes(terms[1]?.toLowerCase())) ||
          (result.description?.toLowerCase().includes(terms[0]?.toLowerCase()) &&
            result.description?.toLowerCase().includes(terms[1]?.toLowerCase()))
      );
    case 3:
      results = searchResults.filter(
        (result) =>
          (result.title?.toLowerCase().includes(terms[0]?.toLowerCase()) &&
            result.title?.toLowerCase().includes(terms[1]?.toLowerCase()) &&
            result.title?.toLowerCase().includes(terms[2]?.toLowerCase())) ||
          (result.description?.toLowerCase().includes(terms[0]?.toLowerCase()) &&
            result.description?.toLowerCase().includes(terms[1]?.toLowerCase()) &&
            result.description?.toLowerCase().includes(terms[2]?.toLowerCase()))
      );
    case 4:
      results = searchResults.filter(
        (result) =>
          (result.title?.toLowerCase().includes(terms[0]?.toLowerCase()) &&
            result.title?.toLowerCase().includes(terms[1]?.toLowerCase()) &&
            result.title?.toLowerCase().includes(terms[2]?.toLowerCase()) &&
            result.title?.toLowerCase().includes(terms[3]?.toLowerCase())) ||
          (result.description?.toLowerCase().includes(terms[0]?.toLowerCase()) &&
            result.description?.toLowerCase().includes(terms[1]?.toLowerCase()) &&
            result.description?.toLowerCase().includes(terms[2]?.toLowerCase()) &&
            result.description?.toLowerCase().includes(terms[3]?.toLowerCase()))
      );
    case 5:
      results = searchResults.filter(
        (result) =>
          (result.title?.toLowerCase().includes(terms[0]?.toLowerCase()) &&
            result.title?.toLowerCase().includes(terms[1]?.toLowerCase()) &&
            result.title?.toLowerCase().includes(terms[2]?.toLowerCase()) &&
            result.title?.toLowerCase().includes(terms[3]?.toLowerCase()) &&
            result.title?.toLowerCase().includes(terms[4]?.toLowerCase())) ||
          (result.description?.toLowerCase().includes(terms[0]?.toLowerCase()) &&
            result.description?.toLowerCase().includes(terms[1]?.toLowerCase()) &&
            result.description?.toLowerCase().includes(terms[2]?.toLowerCase()) &&
            result.description?.toLowerCase().includes(terms[3]?.toLowerCase()) &&
            result.description?.toLowerCase().includes(terms[4]?.toLowerCase()))
      );
    default:
      results = [];
  }

  const includeTerm = `[term${terms.length > 1 ? terms.length : ""}]`;
  const excludeTerm = `[term${terms.length + 1}]`;

  const randomResults = searchResults.filter((result) => {
    if (
      result.description?.toLowerCase().includes(includeTerm) &&
      result.title?.toLowerCase().includes(includeTerm) &&
      !result.description?.toLowerCase().includes(excludeTerm) &&
      !result.title?.toLowerCase().includes(excludeTerm)
    ) {
      return true;
    }
    return false;
  });

  const randomAmount = Math.floor(Math.random() * 10) + 10;

  while (results.length < randomAmount && randomResults.length > 0) {
    const randomIndex = Math.floor(Math.random() * randomResults.length);
    const randomResult = randomResults.splice(randomIndex, 1)[0];
    results.push(randomResult);
  }

  return results.map((result) => {
    // replace each term in the title and description with the query - it goes [term], [term2], [term3], etc.
    let title = result.title.replace(`[term]`, terms[0]);
    let description = result.description.replace(`[term]`, terms[0]?.toLowerCase());
    for (let i = 1; i <= terms.length; i++) {
      title = title.replace(`[term${i + 1}]`, terms[i]);
      description = description.replace(`[term${i + 1}]`, terms[i]?.toLowerCase());
    }

    return {
      title,
      description,
      route: result.route,
      icon: result.icon,
    };
  });
}
