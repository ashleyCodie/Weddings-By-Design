import { faker } from "@faker-js/faker";

const builderArray = [
  {
    packageSelected: "Enchanted Evening",
    roles: [
      "Project Manager",
      "Wedding Planner",
      "Event Coordinator",
      "Bar Services",
      "Transportation Services",
      "Florist",
      "Caterer",
      "Priest/Minister",
      "Venue",
      "Music/Entertainment",
      "Photographer",
      "Videographer",
      "Makeup Artist/Hair Stylist",
    ],
  },
];

const generateFakeTask = (builder) => {
  return {};
};

export const generateFakeTasks = () => {
  const tasks = [];
  builderArray.forEach((builder) => {
    tasks.push(generateFakeTask(builder));
  });
  return tasks;
};

// tasks: [
//     {
//     taskName: String,
//     taskDescription: String,
//     startDate: Date,
//     endDate: Date,
//     status: String,
//     roles: [ String ],
//     users: [
//         {
//         firstName: String, lastName: String, email: String, roles: [ String ]
//         }
//       ]
//     }
//    ],