const CardPrices = [
  {
    id: 1,
    image: require('./Assets/ImageCardOne.png'),
    subtitle: "Basic Plan",
    price: "FREE ",
    desc: "Simplify and succeed with our basic plan.",
    button: {
      text: "Get started free",
      style: {
      
      },
    },
    features: ["Unlimited custom fields", "30 day chat history", "Two-Way email sync", "Email support" ],
  },
  {
    id: 2,
    image: require('./Assets/ImageCardTwo.png'),
    subtitle: "Standard Plan",
    price: "$29 / month",
    desc: "Unlock advanced reporting and analytics.",
    button: {
      text: "Get standard plan",
      style: {
     
      },
    },
    features: ["Email automation", "Unlimited chat history", "Data import/export", "Call & Email Support" ],
  },
  {
    id: 3,
    image: require('./Assets/ImageCardThree.png'),
    subtitle: "Premium Plan",
    price: "$44 / month",
    desc: "Discover our exclusive premium plan.",
    button: {
      text: "Get premium plan",
      style: {
    
      },
    },
    features: ["Unlimited custom fields", "30 day chat history", "Two-Way email sync", "Email support", ],
  },
];

export default CardPrices;
