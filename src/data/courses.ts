export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  students: number;
  price: number;
  originalPrice: number;
  category: string;
  avatars: string[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Product Management Basic - Course",
    description: "Learn the fundamentals of product management with industry experts. Master user research, product strategy, and agile methodologies.",
    image: "/course-1.png",
    time: "15 Jan - 12 Feb 2024",
    students: 40,
    price: 380,
    originalPrice: 500,
    category: "design",
    avatars: ["Blink.svg", "Ander.svg", "Big Bird.svg", "Bartender.svg", "Bill.svg"]
  },
  {
    id: 2,
    title: "BM Data Science Professional Certificate",
    description: "Comprehensive data science program covering machine learning, statistical analysis, and data visualization techniques.",
    image: "/course-2.png",
    time: "22 Feb - 20 Mar 2024",
    students: 11,
    price: 678,
    originalPrice: 800,
    category: "development",
    avatars: ["Blink.svg", "Ander.svg", "Big Bird.svg", "Bartender.svg", "Bill.svg"]
  },
  {
    id: 3,
    title: "The Science of Well-Being",
    description: "Discover the psychology of happiness and learn evidence-based strategies for improving your mental health and life satisfaction.",
    image: "/course-3.png",
    time: "5 Mar - 2 Apr 2024",
    students: 234,
    price: 123,
    originalPrice: 200,
    category: "marketing",
    avatars: ["Blink.svg", "Ander.svg", "Big Bird.svg", "Bartender.svg", "Bill.svg"]
  },
  {
    id: 4,
    title: "Python for Everybody Specialization",
    description: "Complete Python programming course from basics to advanced topics including web development and data analysis.",
    image: "/course-4.png",
    time: "10 Apr - 8 May 2024",
    students: 342,
    price: 567,
    originalPrice: 700,
    category: "development",
    avatars: ["Blink.svg", "Ander.svg", "Big Bird.svg", "Bartender.svg", "Bill.svg"]
  },
  {
    id: 5,
    title: "Business Analytics & Intelligence",
    description: "Master business analytics tools and techniques to make data-driven decisions and drive business growth.",
    image: "/course-2.png",
    time: "18 May - 15 Jun 2024",
    students: 89,
    price: 445,
    originalPrice: 600,
    category: "business",
    avatars: ["Blink.svg", "Ander.svg", "Big Bird.svg", "Bartender.svg", "Bill.svg"]
  }
];
