import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "t7cZfWIp-q",
    firstName: "Emily",
    lastName: "Smith",
    password: "emily@123Smith",
    username: "emilysmith",
    bio: "Aspiring Frontend Developer",
    website: "https://emilysmith.tech",
    avatar:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331085/socialMedia/Emily-Smith_jfepcx.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686332490/socialMedia/programming-bg_znumg2.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "79Gksh9otl",
    firstName: "Sarah",
    lastName: "Wilson",
    password: "sarah123",
    username: "wilsarah",
    bio: "Be Yourself!",
    website: "https://sarahwilson.com",
    avatar:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331082/socialMedia/Sarah-Wilson_io6cpx.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686341814/socialMedia/be-yourself-bg_rmxvmb.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Jacob",
    lastName: "Mitchell",
    password: "jacob123",
    username: "jacobmitch",
    bio: "An adventure-seeking explorer",
    website: "https://jacobmitchell.com",
    avatar:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331002/socialMedia/Jacob-Mitchell_elh9gg.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686342238/socialMedia/adventure-explorer-bg_i4p63w.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "Aditya",
    lastName: "Joshi",
    password: "aditya123",
    username: "adityaj",
    bio: "Composing musical journeys",
    website: "https://adityajoshi.com",
    avatar:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331041/socialMedia/Aditya-Joshi_ajn3sy.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686342526/socialMedia/musician-bg_qgesca.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "o5gzWjEeX_",
    firstName: "Rohan",
    lastName: "Roy",
    password: "rohan123",
    username: "rohaaan",
    bio: "Exploring one delicious bite at a time!",
    website: "https://rohan-roy.com",
    avatar:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686343623/socialMedia/food-bg_dgsyce.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "M1NR81Bzlz",
    firstName: "Kriti",
    lastName: "Desai",
    password: "kriti123",
    username: "imkriti",
    bio: "Storyteller Extraordinaire",
    website: "https://kriti-desai.com",
    avatar:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686343958/socialMedia/storyteller-bg_xzxtd7.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "qq8zWjEeXd",
    firstName: "Olivia",
    lastName: "Parker",
    password: "olivia@123",
    username: "livparker",
    bio: "A Creative Doodlebug",
    website: "https://oliviadraws.com",
    avatar:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686344328/socialMedia/pencil-sketch-bg_t0qfe9.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "ab8zWjEeXd",
    firstName: "James",
    lastName: "Murphy",
    password: "james@123",
    username: "jamesmurf",
    bio: "Fashion aficionado",
    website: "https://jamesmurf.com",
    avatar:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686344677/socialMedia/fashion-stage-bg_ykeinp.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "M1NR81Bert",
    firstName: "Ava",
    lastName: "Turner",
    password: "ava@123",
    username: "avaturn",
    bio: "Haute Couture Maven",
    website: "https://turnerava.com",
    avatar:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331028/socialMedia/Ava-Turner_vqavsz.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686344889/socialMedia/fashion-designer-bg_osgyw8.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "1NR81Bzmuh",
    firstName: "Aryan",
    lastName: "Patel",
    password: "aryan@123",
    username: "aryan987",
    bio: "An Ambitious Trailblazer",
    website: "https://aryanpatel.com",
    avatar:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686330990/socialMedia/Aryan-Patel_cwyebe.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686345193/socialMedia/businessman-table-bg_dhgla4.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
];
