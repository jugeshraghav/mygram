import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "The best stories are written with laughter.😄✍️",
    image:
      "https://images.pexels.com/photos/8944892/pexels-photo-8944892.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "laughter",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jacobmitch",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Jugesh",
        lastName: "Raghav",
        username: "jugeshRaghav01",
        avatarURL:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331085/socialMedia/Emily-Smith_jfepcx.jpg",
        text: "yeah Boiii",
        createdAt: "2023-04-07T12:31:25Z",
      },
      {
        _id: uuid(),
        firstName: "David",
        lastName: "Brown",
        username: "david123",
        avatarURL:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331082/socialMedia/Sarah-Wilson_io6cpx.jpg",
        text: "Nicely Said...",
        createdAt: "2023-04-07T07:31:25Z",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Just had my mind blown at the A.R. Rahman concert! 🎶🤩 An absolute musical genius, his melodies transported me to another world. The energy, the soul-stirring compositions, and the electrifying atmosphere... it was an unforgettable experience! 🎵✨",
    image:
      "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "Concert ",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "leesophia",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "💻🌐 Web development is the gateway to digital possibilities! From crafting engaging user experiences to bringing ideas to life, it's a world where creativity meets technology. Embrace the power of code and let's build a better web together! ✨🚀",
    image:
      "https://images.pexels.com/photos/4050301/pexels-photo-4050301.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "Laptop",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "emilyj",
    createdAt: "2023-03-17T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Indulging in the beauty of nature. 🍃🌸",
    image:
      "https://images.pexels.com/photos/1834407/pexels-photo-1834407.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "Nature",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jacobmitch",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Enjoying a cup of coffee and a good book. ☕📚",
    image:
      "https://images.pexels.com/photos/7063773/pexels-photo-7063773.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "Book and Coffee",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jacobmitch",
    createdAt: "2021-09-15T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Taking a moment to pause and appreciate the beauty around us. 🌼🌿 ",
    image:
      "https://images.pexels.com/photos/17310920/pexels-photo-17310920/free-photo-of-close-up-of-daisies.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "Plant",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "leesophia",
    createdAt: "2021-03-11T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "In the midst of chaos, find your inner peace. 🌸🕊️",
    image:
      "https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "Peace",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "leesophia",
    createdAt: "2022-05-11T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Life is a canvas waiting to be painted with vibrant colors and bold strokes. Don't hold back. Let your imagination run wild and express yourself fearlessly. Dive into new experiences, meet different souls, and listen to their stories. Cherish the moments that take your breath away and the ones that make you laugh until your sides ache. Embrace the journey, for it is these moments that shape who you are and who you will become.",
    image:
      "https://images.pexels.com/photos/811575/pexels-photo-811575.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "Beautiful Picture",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "livparker",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Food is my love language, and every bite tells a delicious story! From savory delights to sweet indulgences, I'm on a gastronomic adventure to explore flavors, share recipes, and celebrate the culinary wonders of the world. Join me on this mouthwatering journey as we savor the joys of good food together! Bon appétit! 🍽️✨",
    image:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "food",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jacobmitch",
    createdAt: "2023-06-12T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Inspiring others with a smile and a kind word.😊🌟",
    image:
      "https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "Inspiring Quote",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "livparker",
    createdAt: "2023-06-10T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Grateful for the journey, excited for what lies ahead. 🙏💫",
    image:
      "https://images.pexels.com/photos/2530131/pexels-photo-2530131.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "My award",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "browndavid",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: " Sunsets are proof that there's beauty in endings.🌅✨",
    image:
      "https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "sunset",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "browndavid",
    createdAt: "2022-10-22T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Catching waves and chasing dreams.🏄‍♀️🌊",
    image:
      "https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "Beach",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jugeshRaghav01",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Growth happens outside your comfort zone.🌱💪",
    image:
      "https://images.pexels.com/photos/4132301/pexels-photo-4132301.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "workout of mind",
    likes: {
      likeCount: 13,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jugeshRaghav01",
    createdAt: "2022-11-02T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "From nurturing tiny seeds to witnessing blooms unfold, this newfound hobby has brought me closer to nature's beauty. Each touch of soil and every whisper with plants is a gentle reminder of life's delicate balance. Grateful for this peaceful escape and the joy it brings. Join me in cultivating beauty, one seed at a time! 🌷🌼",
    image:
      "https://images.pexels.com/photos/6231847/pexels-photo-6231847.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "Flower",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "emilyj",
    createdAt: "2020-09-30T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Excited to strum the strings of my new musical companion! 🎶🎉 Just bought a new Guitar! This beautiful guitar is now an extension of my soul, ready to accompany me on melodies and lyrics yet to be discovered. From heartfelt ballads to energetic riffs, we're about to create magic together. Get ready for some soul-stirring tunes coming your way!",
    image:
      "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "Guitar",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jugeshRaghav01",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "🍽️📸 Embarking on a mouthwatering journey as I dive into the world of food blogging! 🌟✨ From savoring delectable dishes to capturing culinary delights, I'm thrilled to share my gastronomic adventures with fellow food enthusiasts. Join me as we explore flavors, unravel hidden gems, and celebrate the joy of good food together. Let the foodie adventures begin! ",
    image:
      "https://images.pexels.com/photos/12673974/pexels-photo-12673974.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "Blogging",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "smithm",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Went for a casual walk! Came across this beauty!",
    image:
      "https://images.pexels.com/photos/4936213/pexels-photo-4936213.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "cute Doggy",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "leesophia",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Through the lens, I capture moments that tell stories, freeze memories, and ignite emotions. Photography, my window to the world, where creativity meets vision. From breathtaking landscapes to candid portraits, I'm endlessly inspired by the beauty that surrounds us.",
    image:
      "https://images.pexels.com/photos/814822/pexels-photo-814822.jpeg?auto=compress&cs=tinysrgb&w=400",
    mediaAlt: "camera",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jugeshRaghav01",
    createdAt: "2023-01-27T01:06:00+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
];
