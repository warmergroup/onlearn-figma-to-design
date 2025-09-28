export interface GiftCard {
  id: number;
  title: string;
  features: string[];
  buttonText: string;
  image: string;
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
}

export const giftCard: GiftCard = {
  id: 1,
  title: "Why You should buy \n gift cards?",
  features: [
    "Teachers don't get lost in the grid view and have a dedicated Podium space.",
    "TA's and presenters can be moved to the front of the class.",
    "Teachers can easily see all students and class data at one time."
  ],
  buttonText: "BUY NOW",
  image: "/gift-card-woman.png",
  backgroundColor: "bg-red-500",
  textColor: "text-white",
  buttonColor: "bg-white text-red-500 border border-red-500"
};
