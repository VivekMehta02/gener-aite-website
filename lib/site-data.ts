import {
  Activity,
  BarChart3,
  Building2,
  Camera,
  Car,
  CheckCircle2,
  CircuitBoard,
  CloudCog,
  Database,
  Droplets,
  Factory,
  Flame,
  Gauge,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  Layers3,
  MapPinned,
  Network,
  ParkingCircle,
  Recycle,
  Route,
  ShieldCheck,
  Siren,
  Sparkles,
  TrainFront,
  Truck,
  Users,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  slide: string;
};

export type Solution = {
  title: string;
  eyebrow: string;
  description: string;
  features: string[];
  benefits: string[];
  icon: LucideIcon;
  slide: string;
};

export type Industry = {
  title: string;
  subtitle: string;
  outcomes: string[];
  icon: LucideIcon;
};

export type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type WhyReason = {
  title: string;
  description: string;
};

export const navigationItems: NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Why", href: "#why-generaite" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" }
];

export const heroHighlights = [
  { label: "AI Surveillance", icon: Camera },
  { label: "Smart Utilities", icon: Droplets },
  { label: "IT Solutions", icon: CloudCog },
  { label: "Control Centers", icon: Network },
  { label: "IoT Platforms", icon: CircuitBoard }
];

export const metrics = [
  { value: "12,540+", label: "Connected devices" },
  { value: "98%", label: "System health" },
  { value: "46", label: "Incidents resolved today" },
  { value: "24/7", label: "Operational visibility" }
];

export const values: Value[] = [
  {
    title: "Continuous Innovation",
    description: "We embrace creativity and technology to build future-ready solutions.",
    icon: Sparkles
  },
  {
    title: "Trusted Reliability",
    description: "We deliver consistent quality and dependable solutions clients can trust.",
    icon: ShieldCheck
  },
  {
    title: "Execution Integrity",
    description: "We operate with honesty, transparency, and strong ethical standards.",
    icon: CheckCircle2
  },
  {
    title: "Strategic Agility",
    description: "We adapt quickly with discipline to deliver measurable results.",
    icon: Gauge
  },
  {
    title: "Collaboration",
    description: "We combine diverse strengths to create greater impact.",
    icon: Handshake
  }
];

export const whyGenerAiteReasons: WhyReason[] = [
  {
    title: "End-to-End Capability",
    description:
      "From consulting and design to deployment and support, GenerAite delivers complete solutions."
  },
  {
    title: "Multi-Technology Expertise",
    description:
      "Deep expertise across IT, IoT, AI, and infrastructure for complex business challenges."
  },
  {
    title: "Customised Solutions",
    description:
      "Tailored systems designed around each client’s goals, environment, and operating model."
  },
  {
    title: "Scalable Architecture",
    description: "Future-ready platforms that grow cleanly with business and infrastructure needs."
  },
  {
    title: "Fast Execution",
    description: "Agile processes, proven methods, and strong discipline for on-time delivery."
  }
];

export const services: Service[] = [
  {
    title: "Software & IT",
    description:
      "Custom applications, dashboards, enterprise platforms, and web or mobile solutions.",
    bullets: [
      "Custom applications",
      "Dashboards and MIS",
      "Enterprise solutions",
      "Web and mobile solutions",
      "Platforms and integrations"
    ],
    icon: CloudCog,
    slide: "/assets/optimized/slide-06.jpg"
  },
  {
    title: "Infrastructure",
    description:
      "Networking, datacentres, AI surveillance, IoT systems, and command control centers.",
    bullets: [
      "Networking",
      "Datacentres",
      "AI surveillance",
      "IoT-based solutions",
      "Command and control centre"
    ],
    icon: Network,
    slide: "/assets/optimized/slide-07.jpg"
  },
  {
    title: "Managed Services",
    description:
      "AMC, support, monitoring, preventive maintenance, and consulting for reliable operations.",
    bullets: ["AMC", "Support", "Monitoring", "Preventive maintenance", "Consulting"],
    icon: Activity,
    slide: "/assets/optimized/slide-05.jpg"
  }
];

export const solutions: Solution[] = [
  {
    title: "IT Solutions",
    eyebrow: "Secure. Reliable. Scalable.",
    description:
      "Robust IT, network, security, and datacenter solutions tailored for operational needs.",
    features: ["Network solutions", "Network security", "Datacenter solutions", "Backup and recovery"],
    benefits: ["High availability", "Data protection", "Scalable architecture"],
    icon: Database,
    slide: "/assets/optimized/slide-07.jpg"
  },
  {
    title: "IoT Monitoring",
    eyebrow: "Real-time sensing",
    description:
      "Connected monitoring for water, environment, utilities, fuel, equipment, and infrastructure.",
    features: ["Sensor telemetry", "Utility metering", "Predictive analytics", "Real-time KPI views"],
    benefits: ["Live visibility", "Faster alerts", "Better resource utilization"],
    icon: CircuitBoard,
    slide: "/assets/optimized/slide-08.jpg"
  },
  {
    title: "Smart Parking",
    eyebrow: "Parking reimagined",
    description:
      "Smart slot detection, ANPR, entry-exit automation, occupancy dashboards, and revenue views.",
    features: ["Slot detection", "ANPR recognition", "Entry and exit automation", "Revenue reports"],
    benefits: ["Reduced congestion", "Faster movement", "Better monetization"],
    icon: ParkingCircle,
    slide: "/assets/optimized/slide-09.jpg"
  },
  {
    title: "Disaster Management",
    eyebrow: "Predict. Prevent. Respond. Recover.",
    description:
      "Active disaster monitoring with GIS maps, alerts, incident status, and response coordination.",
    features: ["Early warning", "Flood monitoring", "Emergency communication", "Response management"],
    benefits: ["Faster response", "Reduced loss", "Data-driven decisions"],
    icon: Siren,
    slide: "/assets/optimized/slide-10.jpg"
  },
  {
    title: "Smart Mobility",
    eyebrow: "Fleet and asset visibility",
    description:
      "Fleet command dashboards for live tracking, route optimization, fuel monitoring, and safety.",
    features: ["Live fleet tracking", "Route optimization", "Driver monitoring", "Vehicle health"],
    benefits: ["Higher accountability", "Fleet efficiency", "Cost optimization"],
    icon: Truck,
    slide: "/assets/optimized/slide-11.jpg"
  },
  {
    title: "AI Surveillance",
    eyebrow: "Intelligent security ecosystems",
    description:
      "AI-driven analytics enabling real-time monitoring, predictive alerts, and automated response.",
    features: ["Intrusion detection", "Object detection", "Crowd analysis", "Face recognition"],
    benefits: ["Secure monitoring", "Instant alerts", "Enhanced safety"],
    icon: Camera,
    slide: "/assets/optimized/slide-13.jpg"
  },
  {
    title: "Smart Waste Management",
    eyebrow: "Cleaner tomorrow",
    description:
      "IoT-powered smart bins, live map views, collection routing, black spot monitoring, and reports.",
    features: ["Smart bins", "Smart routing", "Collection tracking", "Analytics reports"],
    benefits: ["Cleaner cities", "Lower costs", "Citizen satisfaction"],
    icon: Recycle,
    slide: "/assets/optimized/slide-14.jpg"
  },
  {
    title: "Smart Water Management",
    eyebrow: "Sustainable distribution",
    description:
      "Water monitoring for reservoirs, quality, flow, pressure, metering, leak detection, and SCADA.",
    features: ["Water levels", "Quality monitoring", "Flow and pressure", "Leak detection"],
    benefits: ["Reduced losses", "Improved safety", "Reliable service"],
    icon: Droplets,
    slide: "/assets/optimized/slide-15.jpg"
  },
  {
    title: "Integrated Command & Control Center",
    eyebrow: "Centralized. Intelligent. Integrated.",
    description:
      "Unified city operations with multi-system integration, analytics, alerts, GIS, and response workflows.",
    features: ["System integration", "Live GIS overview", "Incident management", "Resource deployment"],
    benefits: ["Centralized operations", "Faster decisions", "Improved emergency response"],
    icon: Layers3,
    slide: "/assets/optimized/slide-16.jpg"
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Data Collection",
    description: "IoT sensors, CCTV, SCADA, GPS, cameras, meters, and operational systems.",
    icon: CircuitBoard
  },
  {
    title: "Data Transmission",
    description: "Secure networks carry field information into unified cloud or on-prem platforms.",
    icon: Network
  },
  {
    title: "Analytics",
    description: "AI, ML, forecasting, pattern detection, and KPI intelligence convert data into decisions.",
    icon: BarChart3
  },
  {
    title: "Command Center",
    description: "Dashboards, GIS maps, alerts, workflows, and role-based controls unify operations.",
    icon: MapPinned
  },
  {
    title: "Response",
    description: "Teams, vehicles, resources, notifications, and reports close the operational loop.",
    icon: Route
  }
];

export const industries: Industry[] = [
  {
    title: "Public Sector",
    subtitle: "Smart cities, municipalities, utilities",
    outcomes: ["Smart governance", "Public safety", "Water utilities", "Sustainable infrastructure"],
    icon: Landmark
  },
  {
    title: "Transport",
    subtitle: "Airports, metro, railways, logistics, ports",
    outcomes: ["Seamless mobility", "Route optimization", "Asset utilization", "Operational efficiency"],
    icon: TrainFront
  },
  {
    title: "Enterprise",
    subtitle: "Offices, factories, warehouses, campuses",
    outcomes: ["Asset productivity", "Energy efficiency", "Intelligent workspaces", "Safety and security"],
    icon: Factory
  },
  {
    title: "Institutions",
    subtitle: "Hospitals, schools, hotels, universities, government",
    outcomes: ["Smart learning", "Patient care", "Facility management", "Secure environments"],
    icon: GraduationCap
  }
];

export const whyNowItems = [
  {
    title: "Operational Efficiency",
    description: "Optimize manpower, resources, and costs through intelligent automation.",
    icon: Gauge
  },
  {
    title: "Real-time Visibility",
    description: "Monitor assets, sites, utilities, fleets, and operations live.",
    icon: Globe2
  },
  {
    title: "Safety & Security",
    description: "Use AI-driven alerts and predictive monitoring to reduce risk.",
    icon: ShieldCheck
  },
  {
    title: "Data-driven Decisions",
    description: "Dashboards, analytics, trends, and reports improve decision velocity.",
    icon: BarChart3
  },
  {
    title: "Sustainability",
    description: "Energy optimization, water monitoring, and reduced wastage support cleaner growth.",
    icon: Zap
  }
];

export const contact = {
  company: "GenerAite Private Limited",
  address: "B-206, Okhla Industrial Area, Phase 1, New Delhi, India",
  email: "contact@wegeneraite.com",
  emailHref: "mailto:contact@wegeneraite.com",
  website: "www.wegeneraite.com",
  websiteHref: "https://www.wegeneraite.com"
};

export const deckSlides = [
  { src: "/assets/optimized/slide-01.jpg", alt: "GenerAite hero slide with smart city command center" },
  { src: "/assets/optimized/slide-02.jpg", alt: "GenerAite about us and core pillars" },
  { src: "/assets/optimized/slide-03.jpg", alt: "GenerAite mission vision and core values" },
  { src: "/assets/optimized/slide-04.jpg", alt: "Why GenerAite strengths slide" },
  { src: "/assets/optimized/slide-18.jpg", alt: "Why now infrastructure modernization slide" },
  { src: "/assets/optimized/slide-20.jpg", alt: "GenerAite contact and future together slide" }
];

export const finalCta = {
  title: "Let's Build the Future Together",
  description:
    "Collaborative partnerships that drive innovation, intelligent solutions, and sustainable communities.",
  pillars: [
    { title: "Stronger Together", icon: Users },
    { title: "Smarter Tomorrow", icon: Sparkles },
    { title: "Sustainable Future", icon: Recycle },
    { title: "Resilient Operations", icon: Flame },
    { title: "Connected Platforms", icon: Building2 }
  ]
};
