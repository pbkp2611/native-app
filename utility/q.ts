export const c = [
  {
    id: 1,
    code: "name",
    text: "What is your name?",
    type: "text",
    options:null,
    dependent:0,
    mandantory:1,
    response:null
  },
  {
    id: 2,
    code: "car",
    text: "Do you own a car?",
    type: "dropdown",
    options: [
      {value:1, label:'Yes', next:'3,4,5,6,7,16,17,18,19'},
      {value:2, label:'No', next:null},
    ],
    dependent:0,
    mandantory:1,
    response:null
  },
  {
    id: 3,
    code: "car2",
    text: "What car you have?",
    type: "text",
    option:null,
    dependent:1,
    mandantory:1,
    response:null
  },
  {
    id: 4,
    code: "color",
    text: "What color is your car?",
    type: "text",
    option:null,
    dependent:1,
    mandantory:1,
    response:null
  },
  {
    id: 5,
    code: "mileage",
    text: "What is the current mileage on your car?",
    type: "text",
    option:null,
    dependent:1,
    mandantory:1,
    response:null
  },
  {
    id: 6,
    code: "transmission",
    text: "What type of transmission does your car have?",
    type: "dropdown",
    options: [
      {value:1, label:'Manual', next:null},
      {value:2, label:'Automatic', next:null},
    ],
    dependent:1,
    mandantory:1,
    response:null
  },
  {
    id: 7,
    code: "fuelType",
    text: "What type of fuel does your car use?",
    type: "dropdown",
    options: [
      {value:1, label:'Gasoline', next:'8'},
      {value:2, label:'Diesel', next:'8'},
      {value:3, label:'Electric', next:'9,10'},
      {value:4, label:'Hybrid', next:'8'},
    ],
    dependent:1,
    mandantory:1,
    response:null
  },
  {
    id: 8,
    code: "engineSize",
    text: "What size is your car's engine?",
    type: "text",
    option:null,
    dependent:1,
    mandantory:1,
    response:null
  },
  {
      id: 9,
      code: "electric",
      text: "What is the range of 1 charging?",
      type: "dropdown",
      options: [
        {value:1, label:'200km', next:null},
        {value:2, label:'500km', next:null},
        {value:3, label:'700km', next:null},
      ],
      dependent:1,
      mandantory:1,
      response:null
    },
  {
    id: 10,
    code: "electric1",
    text: "What size is your car's battery company?",
    type: "dropdown",
    options: [
      {value:1, label:'TATA', next:'11,12'},
      {value:2, label:'SONY', next:null},
      {value:3, label:'TESLA', next:null},
    ],
    dependent:1,
    mandantory:1,
    response:null
  },
  {
      id: 11,
      code: "electric2",
      text: "What type of tata battery?",
      type: "text",
      options:null,
      dependent:1,
      mandantory:1,
      response:null
  },
  {
      id: 12,
      code: "electric5",
      text: "IS tata good?",
      type: "dropdown",
      options: [
        {value:1, label:'YES', next:'13,14'},
        {value:2, label:'NO', next:null},
      ],
      dependent:1,
      mandantory:1,
      response:null
  },
  {
      id: 13,
      code: "electric7",
      text: "What did you like about tata?",
      type: "text",
      options:null,
      dependent:1,
      mandantory:1,
      response:null
  },
  {
      id:14,
      code: "electric8",
      text: "Do u have any another from tata?",
      type: "dropdown",
      options: [
          {value:1, label:'YES', next:'15'},
          {value:2, label:'NO', next:null},
        ],
      dependent:1,
      mandantory:1,
      response:null
  },
  {
      id:15,
      code: "electric8",
      text: "What is that expectation",
      type: "text",
      option:null,
      dependent:1,
      mandantory:1,
      response:null
  },
  {
    id: 16,
    code: "numberOfDoors",
    text: "How many doors does your car have?",
    type: "text",
    option:null,
    dependent:1,
    mandantory:1,
    response:null
  },
  {
    id: 17,
    code: "driveType",
    text: "What type of drive does your car have?",
    type: "dropdown",
    options: [
      {value:1, label:'Front-wheel drive', next:null},
      {value:2, label:'Rear-wheel drive', next:null},
      {value:3, label:'All-wheel drive', next:null},
    ],
    dependent:1,
    mandantory:1,
    response:null
  },
  {
    id: 18,
    code: "bodyStyle",
    text: "What is the body style of your car?",
    type: "text",
    option:null,
    dependent:1,
    mandantory:1,
    response:null
  },
  {
    id: 19,
    code: "price",
    text: "What is your asking price for the car?",
    type: "text",
    option:null,
    dependent:1,
    mandantory:1,
    response:null
  },
  {
    id: 20,
    code: "thanks",
    text: "Can we approch you for survey again?",
    type: "text",
    options:null,
    dependent:0,
    mandantory:1,
    response:null
  }
];