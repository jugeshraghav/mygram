import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    image:
      "https://plus.unsplash.com/premium_photo-1687202582480-025b6d54f93d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686384490/socialMedia/love-yourself_juubpp.jpg",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "406acf0d-a683-4c80-a42d-92f0c6544dca",
    image:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686384788/socialMedia/singapore_p4bvfo.jpg",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalak",
    createdAt: "2022-05-15T12:00:28+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "b8574c86-df7a-46ed-8bc2-69dd4f99307b",
    image:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686385359/socialMedia/bts_qkwp0a.jpg",
    content: 'Hey what"s app guy"s what"s going on?',
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "anujkumar",
    createdAt: "2022-01-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "c789564c86-df7a-46ed-8bc2-69dd4f99307b",
    image:
      "https://plus.unsplash.com/premium_photo-1687202582480-025b6d54f93d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    content:
      "I am done with the social media project can please provide some valuable feebback",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalak",
    createdAt: "2022-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "r8fg5659641-d787a-46ed-8bc2-69dd4307b",
    image:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686383929/socialMedia/eye-sketch_hlwies.jpg",
    content:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "hrishi11",
    createdAt: "2021-10-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "99874gyu-4545-89-8bc2-69dd4307b",
    image: "",
    content:
      "awake at 3AM | tweeting stuff mostly related to code | learning @neogcamp🚀",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "hrishi11",
    createdAt: "2021-10-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "7845hyuff-8888-45ki-8bc2-69dd4307b",
    image:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686382827/socialMedia/fashion_vvomwh.jpg",
    content:
      "Presenting my new React Project Socially, A social Media app made using React, JavaScript, Redux, Tailwind CSS",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "rohanB",
    createdAt: "2021-10-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "eee4456-666-788vfghg-8bc2-69dd4307b",
    image:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686386278/socialMedia/cake_g0csez.jpg",
    content: "Wrote 2 blogs for NeoBlogging Marathon at @neogcamp ",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "rohanB",
    createdAt: "2021-10-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
