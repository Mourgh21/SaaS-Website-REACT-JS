const CardPrices = [
  {
    id: 1,
    image: require('./Assets/ImageCardOne.png'),
    subtitle: "Basic Plan",
    price: "FREE",
    desc: "Simplify and succeed with our basic plan.",
    button: {
      text: "Get started free",
      style: {
      
      },
    },
    features: ["Limited Projects", "Limited Projects", "Limited Projects", "Limited Projects", "Limited Projects"],
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
    features: ["Limited Projects", "Limited Projects", "Limited Projects", "Limited Projects", "Limited Projects"],
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
    features: ["Limited Projects", "Limited Projects", "Limited Projects", "Limited Projects", "Limited Projects"],
  },
];

export default CardPrices;
