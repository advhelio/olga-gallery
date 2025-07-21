import { Header, Social, Galleries } from "../types";

export const header: Header = {
  title: "Hello, I'm Olga.",
  description: "Welcome to my art gallery!",
  image: require("images/Olga_portret_2.png"),
  disabled: false,
};


export const galleries: Galleries = [
  {
    category: "Paintings",
    images: [
      {
        name: "images/Green_cow.jpg",
        description: "Description of image Green_cow",
      },
      {
        name: "images/painting_1.jpg",
        description: "Description of image painting_1",
      },
    ],
  },
  {
    category: "Art Prints/Cyanotype",
    images: [
      {
        name: "images/cyan_ink_1.jpg",
        description: "Description of image 1",
      },
    ],
  },
  {
    category: "Photography",
    images: [
      {
        name: "images/Green_cow.jpg",
        description: "Description of image 1",
      },
    ],
  },
];
