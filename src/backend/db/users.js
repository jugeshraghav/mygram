import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "t7cZfWIp-q",
    firstName: "Jugesh",
    lastName: "Raghav",
    password: "jugesh15",
    username: "jugeshRaghav01",
    bio: "Aspiring Frontend Developer",
    website: "https://jugeshraghav.tech",
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
    firstName: "David",
    lastName: "Brown",
    password: "david123",
    username: "browndavid",
    bio: "Sports enthusiast and traveler!",
    website: "https://davidbrown.com",
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
    firstName: "Sophia",
    lastName: "Lee",
    password: "sophia123",
    username: "leesophia",
    bio: "Lover of books and nature!",
    website: "https://sophialee.com",
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
    firstName: "Michael",
    lastName: "Smith",
    password: "michael123",
    username: "smithm",
    bio: "Music lover and foodie!",
    website: "https://michaelsmith.com",
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
    firstName: "Emily",
    lastName: "Johnson",
    password: "emily123",
    username: "emilyj",
    bio: "Dreamer and explorer!",
    website: "https://emilyjohnson.com",
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
];
