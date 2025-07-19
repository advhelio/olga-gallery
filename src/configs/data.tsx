import { Header, Social, Galleries } from "../types";

export const header: Header = {
  title: "Hello, I'm Olga Panasenco.",
  description: "Welcome to my art gallery!",
  image: require("./Olga_portret_2.png"),
  disabled: false,
};


export const galleries: Galleries = [
  {
    category: "Paintings",
    images: [
      {
        name: "Green_cow.jpg", // Important: specify the extension
        description: "Description of image 1",
      }, // duplicate image object for more
    ],
  }, // duplicate gallery object for more
];

{
    category: "Art Prints/Cyanotype",
    images: [
      {
        name: "image.png", // Important: specify the extension
        description: "Description of image 1",
      }, // duplicate image object for more
    ],
  }, // duplicate gallery object for more
];
{
    category: "Paintings",
    images: [
      {
        name: "image.png", // Important: specify the extension
        description: "Description of image 1",
      }, // duplicate image object for more
    ],
  }, // duplicate gallery object for more
];
