export interface Benefit {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
  tagColor: string;
  features: {
    icon: string;
    text: string;
  }[];
}

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "Get Student ID card",
    description: "Get your official student ID card with all the benefits and access to campus facilities.",
    image: "/id-card.svg",
    tag: "Benefits",
    tagColor: "bg-green-100 text-green-800",
    features: [
      {
        icon: "/src/assets/svg/windows.svg",
        text: "Teachers don't get lost in the grid view and have a dedicated Podium space."
      },
      {
        icon: "/src/assets/svg/spaces.svg",
        text: "TA's and presenters can be moved to the front of the class."
      },
      {
        icon: "/src/assets/svg/team.svg",
        text: "Teachers can easily see all students and class data at one time."
      }
    ]
  },
  {
    id: 2,
    title: "Staff training",
    description: "Comprehensive training programs for staff to enhance their skills and knowledge.",
    image: "/training.svg",
    tag: "Training",
    tagColor: "bg-blue-100 text-blue-800",
    features: [
      {
        icon: "/src/assets/svg/windows.svg",
        text: "Teachers don't get lost in the grid view and have a dedicated Podium space."
      },
      {
        icon: "/src/assets/svg/spaces.svg",
        text: "TA's and presenters can be moved to the front of the class."
      },
      {
        icon: "/src/assets/svg/team.svg",
        text: "Teachers can easily see all students and class data at one time."
      }
    ]
  }
];
