export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

export interface FooterLink {
  title: string;
  links: string[];
}

export const contactInfo: ContactInfo[] = [
  {
    icon: "/src/assets/svg/location.svg",
    label: "Address:",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: "/src/assets/svg/Calling.svg", 
    label: "Tel:",
    value: "+9229341037"
  },
  {
    icon: "/src/assets/svg/time-circle.svg",
    label: "Response hours:",
    value: "8 to 20"
  },
  {
    icon: "/src/assets/svg/message.svg",
    label: "Email:",
    value: "info@onlearn.com"
  }
];

export const footerLinks: FooterLink[] = [
  {
    title: "Categories",
    links: ["Counseling", "Health and fitness", "Individual development", "more"]
  },
  {
    title: "Links", 
    links: ["About us", "blog"]
  }
];
