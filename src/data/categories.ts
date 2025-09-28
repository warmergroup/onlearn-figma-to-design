export interface Category {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  isActive?: boolean;
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Beauty",
    description: "Master the art of beauty and skincare with professional techniques and industry secrets.",
    icon: "/src/assets/svg/beauty.svg",
    iconBg: "bg-blue-100",
    isActive: false
  },
  {
    id: 2,
    title: "Medical",
    description: "Learn advanced medical procedures and healthcare practices from certified professionals.",
    icon: "/src/assets/svg/vaccine.svg",
    iconBg: "bg-purple-100",
    isActive: false
  },
  {
    id: 3,
    title: "Sports",
    description: "Achieve peak physical performance with expert training and fitness methodologies.",
    icon: "/src/assets/svg/sports.svg",
    iconBg: "bg-yellow-100",
    isActive: true
  },
  {
    id: 4,
    title: "Nutrition",
    description: "Discover healthy eating habits and nutritional science for optimal wellness.",
    icon: "/src/assets/svg/nutrition.svg",
    iconBg: "bg-purple-100",
    isActive: false
  }
];
