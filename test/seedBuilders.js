import "dotenv/config";
import axios from "axios";

const seedBuilders = [
  {
    packageSelected: "Intimate Rendezvous",
    roles: [
      "Project Manager",
      "Wedding Planner",
      "Caterer",
      "Priest/Minister",
      "Venue",
      "Photographer",
    ],
    tasks: [
      {
        taskName: "Initial Meeting/Assign a Wedding Planner",
        taskDescription: "Meet with the couple to understand their vision, budget, and preferences. Assign a Wedding Planner to the couple to start going over plans.",
        startDate: "",
        endDate: "",
        status: "Completed",
        roles: ["Project Manager"],
        users: [
          {
            firstName: "Adrianna",
            lastName: "Crooks",
            email: "Adrianna.Crooks8@yahoo.com",
           
          },
        ],
      },
    //   {
    //     taskName: "Assign a Wedding Planner",
    //     taskDescription: "Assign a Wedding Planner to the couple to start going over plans.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Project Manager" ],
    //     users: [
    //         {
    //             firstName: "Adrianna",
    //             lastName: "Crooks",
    //             email: "Adrianna.Crooks8@yahoo.com",
               
    //           },
    //     ],
    //   },
      {
        taskName: "Project Timeline/Budgeting/Approve Budget with Couple/Venue Selection/Venue Management",
        taskDescription: "Develop a project plan, timeline, and budget. Track and manage the wedding budget, ensuring that expenses stay within the allocated amount. Research and select a suitable venue based on the couple's preferences and budget. Coordinate with the venue to ensure availability on the desired date and time.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Wedding Planner" ],
        users: [
            {
                firstName: "Rashawn",
                lastName: "Zieme",
                email: "Rashawn_Zieme@gmail.com",
              
              },
        ],
      },
    //   {
    //     taskName: "Approve Budget with Couple",
    //     taskDescription: "Track and manage the wedding budget, ensuring that expenses stay within the allocated amount.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
               
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Venue Selection",
    //     taskDescription: "Research and select a suitable venue based on the couple's preferences and budget.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
               
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Venue Management",
    //     taskDescription: "Coordinate with the venue to ensure availability on the desired date and time.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
              
    //           },
    //     ],
    //   },
      {
        taskName: "Menu Selection/Cake Selection",
        taskDescription: "Coordinate with the couple what will be served at the Wedding Food/Beverages. Coordinate with the couple what style cake, and cake accessories.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Caterer" ],
        users: [
            {
                firstName: "Bennett",
                lastName: "Sipes",
                email: "Bennett_Sipes@hotmail.com",
               
              },
        ],
      },
    //   {
    //     taskName: "Cake Selection",
    //     taskDescription: "Coordinate with the couple what style cake, and cake accessories.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Caterer" ],
    //     users: [
    //         {
    //             firstName: "Bennett",
    //             lastName: "Sipes",
    //             email: "Bennett_Sipes@hotmail.com",
              
    //           },
    //     ],
    //   },
      {
        taskName: "Wedding Vows Selection/Ceremony Type",
        taskDescription: "Coordinate with the couple what wedding vows will be used and type of ceremony they would like.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Priest/Minister" ],
        users: [
            {
                firstName: "Taryn",
                lastName: "Gleichner",
                email: "Taryn.Gleichner95@gmail.com",
                
              },
        ],
      },
      {
        taskName: "Vendor Coordination",
        taskDescription: "Oversee the delivery and setup of catering, decorations, and breakdown of services received from Wedding Planner.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Venue" ],
        users: [
            {
                firstName: "Otha",
                lastName: "Hamill",
                email: "Otha.Hamill@yahoo.com",
               
              },
        ],
      },
      {
        taskName: "Photography Schedule",
        taskDescription: "Plan photo shoot timeline with the couple and what shots they prefer of them, wedding party, decorations, ceremony, etc.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Photographer" ],
        users: [
            {
                firstName: "Joan",
                lastName: "Turcotte",
                email: "Joan.Turcotte16@yahoo.com",
               
              },
        ],
      },
    ],
  },

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
      "Makeup Artist/Hair Stylist"
    ],
    tasks: [
        {
            taskName: "Initial Meeting/Assign a Wedding Planner",
            taskDescription: "Meet with the couple to understand their vision, budget, and preferences. Assign a Wedding Planner to the couple to start going over plans.",
            startDate: "",
            endDate: "",
            status: "Completed",
            roles: ["Project Manager"],
            users: [
              {
                firstName: "Adrianna",
                lastName: "Crooks",
                email: "Adrianna.Crooks8@yahoo.com",
               
              },
            ],
          },
    //   {
    //     taskName: "Initial Meeting",
    //     taskDescription: "Meet with the couple to understand their vision, budget, and preferences",
    //     startDate: "",
    //     endDate: "",
    //     status: "Completed",
    //     roles: ["Project Manager"],
    //     users: [
    //       {
    //         firstName: "Adrianna",
    //         lastName: "Crooks",
    //         email: "Adrianna.Crooks8@yahoo.com",
            
    //       },
    //     ],
    //   },
    //   {
    //     taskName: "Assign a Wedding Planner",
    //     taskDescription: "Assign a Wedding Planner to the couple to start going over plans.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Project Manager" ],
    //     users: [
    //         {
    //             firstName: "Adrianna",
    //             lastName: "Crooks",
    //             email: "Adrianna.Crooks8@yahoo.com",
                
    //           },
    //     ],
    //   },
    {
        taskName: "Project Timeline/Budgeting/Approve Budget with Couple/Venue Selection/Venue Management",
        taskDescription: "Develop a project plan, timeline, and budget. Track and manage the wedding budget, ensuring that expenses stay within the allocated amount. Research and select a suitable venue based on the couple's preferences and budget. Coordinate with the venue to ensure availability on the desired date and time.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Wedding Planner" ],
        users: [
            {
                firstName: "Rashawn",
                lastName: "Zieme",
                email: "Rashawn_Zieme@gmail.com",
              
              },
        ],
      },  
    // {
    //     taskName: "Project Timeline/Budgeting",
    //     taskDescription: "Develop a project plan, timeline, and budget.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Approve Budget with Couple",
    //     taskDescription: "Track and manage the wedding budget, ensuring that expenses stay within the allocated amount.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Venue Selection",
    //     taskDescription: "Research and select a suitable venue based on the couple's preferences and budget.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Venue Management",
    //     taskDescription: "Coordinate with the venue to ensure availability on the desired date and time.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
               
    //           },
    //     ],
    //   },
      {
        taskName: "Wedding Timeline for day of event/Wedding Timeline With all Vendors",
        taskDescription: "Coordinate with the couple and Wedding Planner the exact time line for the day of the event. Coordinate with vendors the exact time line on deliveries and pickup.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Event Coordinator" ],
        users: [
            {
                firstName: "Nathanial",
                lastName: "Berge",
                email: "Nathanial.Berge@gmail.com",
               
              },
        ],
      },
    //   {
    //     taskName: "Wedding Timeline With all Vendors",
    //     taskDescription: "Coordinate with vendors the exact time line on deliveries and pickup.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Event Coordinator" ],
    //     users: [
    //         {
    //             firstName: "Nathanial",
    //             lastName: "Berge",
    //             email: "Nathanial.Berge@gmail.com",
               
    //           },
    //     ],
    //   },
    {
        taskName: "Menu Selection/Cake Selection",
        taskDescription: "Coordinate with the couple what will be served at the Wedding Food/Beverages. Coordinate with the couple what style cake, and cake accessories.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Caterer" ],
        users: [
            {
                firstName: "Bennett",
                lastName: "Sipes",
                email: "Bennett_Sipes@hotmail.com",
               
              },
        ],
      },
    //   {
    //     taskName: "Menu Selection",
    //     taskDescription: "Coordinate with the couple what will be served at the Wedding Food/Beverages.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Caterer" ],
    //     users: [
    //         {
    //             firstName: "Bennett",
    //             lastName: "Sipes",
    //             email: "Bennett_Sipes@hotmail.com",
               
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Cake Selection",
    //     taskDescription: "Coordinate with the couple what style cake, and cake accessories.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Caterer" ],
    //     users: [
    //         {
    //             firstName: "Bennett",
    //             lastName: "Sipes",
    //             email: "Bennett_Sipes@hotmail.com",
               
    //           },
    //     ],
    //   },
      {
        taskName: "Bar/Drink Selection",
        taskDescription: "Coordinate with the couple what drinks will be served, amount per guest and hours of operation for day of event.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Bar Services" ],
        users: [
            {
                firstName: "Eloy",
                lastName: "Johnston",
                email: "Eloy.Johnston46@hotmail.com",
                
              },
        ],
      },
      {
        taskName: "Wedding Vows Selection/Ceremony Type",
        taskDescription: "Coordinate with the couple what wedding vows will be used and type of ceremony they would like.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Priest/Minister" ],
        users: [
            {
                firstName: "Taryn",
                lastName: "Gleichner",
                email: "Taryn.Gleichner95@gmail.com",
                
              },
        ],
      },
      {
        taskName: "Vendor Coordination",
        taskDescription: "Oversee the delivery and setup of catering, decorations, and breakdown of services received from Wedding Planner.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Venue" ],
        users: [
            {
                firstName: "Otha",
                lastName: "Hamill",
                email: "Otha.Hamill@yahoo.com",
                
              },
        ],
      },
      {
        taskName: "Transportation Coordination",
        taskDescription: "Develope transportation schedule, max distance to travel, what hotel guest are staying out, where couple is going after the event.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Transportation Services" ],
        users: [
            {
                firstName: "Providenci",
                lastName: "Ward",
                email: "Providenci.Ward@gmail.com",
               
              },
        ],
      },
      {
        taskName: "Photography Schedule",
        taskDescription: "Plan photo shoot timeline with the couple and what shots they prefer of them, wedding party, decorations, ceremony, etc.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Photographer" ],
        users: [
            {
                firstName: "Joan",
                lastName: "Turcotte",
                email: "Joan.Turcotte16@yahoo.com",
               
              },
        ],
      },
      {
        taskName: "Videography Schedule",
        taskDescription: "Plan videography timeline with the couple and timeline of event to be recorded",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Videographer" ],
        users: [
            {
                firstName: "Hilma",
                lastName: "Bechtelar-Grant",
                email: "Hilma_Bechtelar-Grant@hotmail.com",
               
              },
        ],
      },
      {
        taskName: "Flower Selection",
        taskDescription: "Meet with couple to discuss flower selection and arrangements",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Florist" ],
        users: [
            {
                firstName: "Era",
                lastName: "Abbott",
                email: "Era_Abbott54@gmail.com",
                
              },
        ],
      },
      {
        taskName: "Entertainment Schedule/Song List",
        taskDescription: "Meet with couple to discuss Entertainment Selection and schedule. Meet with couple to discuss song selection, and what dances they want mother/son, and father/daughter dance",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Music/Entertainment" ],
        users: [
            {
                firstName: "Unique",
                lastName: "Leuschke",
                email: "Unique_Leuschke70@yahoo.com",
                
              },
        ],
      },
    //   {
    //     taskName: "Song List",
    //     taskDescription: "Meet with couple to discuss song selection, and what dances they want mother/son, and father/daughter dance",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Music/Entertainment" ],
    //     users: [
    //         {
    //             firstName: "Unique",
    //             lastName: "Leuschke",
    //             email: "Unique_Leuschke70@yahoo.com",
               
    //           },
    //     ],
    //   },
      {
        taskName: "Schedule Hair/Makeup Appointment and Location",
        taskDescription: "Meet with Bride to discuss hair/make up and wedding party hair/makeup",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Makeup Artist/Hair Stylist" ],
        users: [
            {
                firstName: "Janick",
                lastName: "Schumm",
                email: "Janick_Schumm86@hotmail.com",
               
              },
        ],
      },

    ],
  },

  {
    packageSelected: "Magical Matrimony",
    roles: [
      "Project Manager",
      "Wedding Planner",
      "Event Coordinator",
      "Bar Services",
      "Florist",
      "Caterer",
      "Priest/Minister",
      "Venue",
      "Music/Entertainment",
      "Photographer",
      "Videographer",
      "Makeup Artist/Hair Stylist"
    ],
    tasks: [
        {
            taskName: "Initial Meeting/Assign a Wedding Planner",
            taskDescription: "Meet with the couple to understand their vision, budget, and preferences. Assign a Wedding Planner to the couple to start going over plans.",
            startDate: "",
            endDate: "",
            status: "Completed",
            roles: ["Project Manager"],
            users: [
              {
                firstName: "Adrianna",
                lastName: "Crooks",
                email: "Adrianna.Crooks8@yahoo.com",
               
              },
            ],
          },
    //   {
    //     taskName: "Initial Meeting",
    //     taskDescription: "Meet with the couple to understand their vision, budget, and preferences",
    //     startDate: "",
    //     endDate: "",
    //     status: "Completed",
    //     roles: ["Project Manager"],
    //     users: [
    //       {
    //         firstName: "Adrianna",
    //         lastName: "Crooks",
    //         email: "Adrianna.Crooks8@yahoo.com",
            
    //       },
    //     ],
    //   },
    //   {
    //     taskName: "Assign a Wedding Planner",
    //     taskDescription: "Assign a Wedding Planner to the couple to start going over plans.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Project Manager" ],
    //     users: [
    //         {
    //             firstName: "Adrianna",
    //             lastName: "Crooks",
    //             email: "Adrianna.Crooks8@yahoo.com",
               
    //           },
    //     ],
    //   },
    {
        taskName: "Project Timeline/Budgeting/Approve Budget with Couple/Venue Selection/Venue Management",
        taskDescription: "Develop a project plan, timeline, and budget. Track and manage the wedding budget, ensuring that expenses stay within the allocated amount. Research and select a suitable venue based on the couple's preferences and budget. Coordinate with the venue to ensure availability on the desired date and time.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Wedding Planner" ],
        users: [
            {
                firstName: "Rashawn",
                lastName: "Zieme",
                email: "Rashawn_Zieme@gmail.com",
              
              },
        ],
      },
    //   {
    //     taskName: "Project Timeline/Budgeting",
    //     taskDescription: "Develop a project plan, timeline, and budget.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Approve Budget with Couple",
    //     taskDescription: "Track and manage the wedding budget, ensuring that expenses stay within the allocated amount.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
               
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Venue Selection",
    //     taskDescription: "Research and select a suitable venue based on the couple's preferences and budget.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Venue Management",
    //     taskDescription: "Coordinate with the venue to ensure availability on the desired date and time.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
                
    //           },
    //     ],
    //   },
    {
        taskName: "Wedding Timeline for day of event/Wedding Timeline With all Vendors",
        taskDescription: "Coordinate with the couple and Wedding Planner the exact time line for the day of the event. Coordinate with vendors the exact time line on deliveries and pickup.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Event Coordinator" ],
        users: [
            {
                firstName: "Nathanial",
                lastName: "Berge",
                email: "Nathanial.Berge@gmail.com",
               
              },
        ],
      },
    //   {
    //     taskName: "Wedding Timeline for day of event",
    //     taskDescription: "Coordinate with the couple and Wedding Planner the exact time line for the day of the event.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Event Coordinator" ],
    //     users: [
    //         {
    //             firstName: "Nathanial",
    //             lastName: "Berge",
    //             email: "Nathanial.Berge@gmail.com",
               
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Wedding Timeline With all Vendors",
    //     taskDescription: "Coordinate with vendors the exact time line on deliveries and pickup.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Event Coordinator" ],
    //     users: [
    //         {
    //             firstName: "Nathanial",
    //             lastName: "Berge",
    //             email: "Nathanial.Berge@gmail.com",
               
    //           },
    //     ],
    //   },
    {
        taskName: "Menu Selection/Cake Selection",
        taskDescription: "Coordinate with the couple what will be served at the Wedding Food/Beverages. Coordinate with the couple what style cake, and cake accessories.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Caterer" ],
        users: [
            {
                firstName: "Bennett",
                lastName: "Sipes",
                email: "Bennett_Sipes@hotmail.com",
               
              },
        ],
      },
    //   {
    //     taskName: "Menu Selection",
    //     taskDescription: "Coordinate with the couple what will be served at the Wedding Food/Beverages.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Caterer" ],
    //     users: [
    //         {
    //             firstName: "Bennett",
    //             lastName: "Sipes",
    //             email: "Bennett_Sipes@hotmail.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Cake Selection",
    //     taskDescription: "Coordinate with the couple what style cake, and cake accessories.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Caterer" ],
    //     users: [
    //         {
    //             firstName: "Bennett",
    //             lastName: "Sipes",
    //             email: "Bennett_Sipes@hotmail.com",
                
    //           },
    //     ],
    //   },
      {
        taskName: "Bar/Drink Selection",
        taskDescription: "Coordinate with the couple what drinks will be served, amount per guest and hours of operation for day of event.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Bar Services" ],
        users: [
            {
                firstName: "Eloy",
                lastName: "Johnston",
                email: "Eloy.Johnston46@hotmail.com",
                
              },
        ],
      },
      {
        taskName: "Wedding Vows Selection/Ceremony Type",
        taskDescription: "Coordinate with the couple what wedding vows will be used and type of ceremony they would like.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Priest/Minister" ],
        users: [
            {
                firstName: "Taryn",
                lastName: "Gleichner",
                email: "Taryn.Gleichner95@gmail.com",
               
              },
        ],
      },
      {
        taskName: "Vendor Coordination",
        taskDescription: "Oversee the delivery and setup of catering, decorations, and breakdown of services received from Wedding Planner.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Venue" ],
        users: [
            {
                firstName: "Otha",
                lastName: "Hamill",
                email: "Otha.Hamill@yahoo.com",
                
              },
        ],
      },
      {
        taskName: "Photography Schedule",
        taskDescription: "Plan photo shoot timeline with the couple and what shots they prefer of them, wedding party, decorations, ceremony, etc.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Photographer" ],
        users: [
            {
                firstName: "Joan",
                lastName: "Turcotte",
                email: "Joan.Turcotte16@yahoo.com",
                
              },
        ],
      },
      {
        taskName: "Videography Schedule",
        taskDescription: "Plan videography timeline with the couple and timeline of event to be recorded",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Videographer" ],
        users: [
            {
                firstName: "Hilma",
                lastName: "Bechtelar-Grant",
                email: "Hilma_Bechtelar-Grant@hotmail.com",
                
              },
        ],
      },
      {
        taskName: "Flower Selection",
        taskDescription: "Meet with couple to discuss flower selection and arrangements",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Florist" ],
        users: [
            {
                firstName: "Era",
                lastName: "Abbott",
                email: "Era_Abbott54@gmail.com",
                
              },
        ],
      },
      {
        taskName: "Entertainment Schedule/Song List",
        taskDescription: "Meet with couple to discuss Entertainment Selection and schedule. Meet with couple to discuss song selection, and what dances they want mother/son, and father/daughter dance",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Music/Entertainment" ],
        users: [
            {
                firstName: "Unique",
                lastName: "Leuschke",
                email: "Unique_Leuschke70@yahoo.com",
                
              },
        ],
      },
    //   {
    //     taskName: "Entertainment Schedule",
    //     taskDescription: "Meet with couple to discuss Entertainment Selection and schedule",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Music/Entertainment" ],
    //     users: [
    //         {
    //             firstName: "Unique",
    //             lastName: "Leuschke",
    //             email: "Unique_Leuschke70@yahoo.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Song List",
    //     taskDescription: "Meet with couple to discuss song selection, and what dances they want mother/son, and father/daughter dance",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Music/Entertainment" ],
    //     users: [
    //         {
    //             firstName: "Unique",
    //             lastName: "Leuschke",
    //             email: "Unique_Leuschke70@yahoo.com",
                
    //           },
    //     ],
    //   },
      {
        taskName: "Schedule Hair/Makeup Appointment and Location",
        taskDescription: "Meet with Bride to discuss hair/make up and wedding party hair/makeup",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Makeup Artist/Hair Stylist" ],
        users: [
            {
                firstName: "Janick",
                lastName: "Schumm",
                email: "Janick_Schumm86@hotmail.com",
                
              },
        ],
      },

    ],
  },

  {
    packageSelected: "Passionate Promise",
    roles: [
      "Project Manager",
      "Wedding Planner",
      "Florist",
      "Caterer",
      "Priest/Minister",
      "Venue",
      "Music/Entertainment",
      "Photographer",
      "Videographer",
      "Makeup Artist/Hair Stylist"
    ],
    tasks: [
        {
            taskName: "Initial Meeting/Assign a Wedding Planner",
            taskDescription: "Meet with the couple to understand their vision, budget, and preferences. Assign a Wedding Planner to the couple to start going over plans.",
            startDate: "",
            endDate: "",
            status: "Completed",
            roles: ["Project Manager"],
            users: [
              {
                firstName: "Adrianna",
                lastName: "Crooks",
                email: "Adrianna.Crooks8@yahoo.com",
               
              },
            ],
          },
    //   {
    //     taskName: "Initial Meeting",
    //     taskDescription: "Meet with the couple to understand their vision, budget, and preferences",
    //     startDate: "",
    //     endDate: "",
    //     status: "Completed",
    //     roles: ["Project Manager"],
    //     users: [
    //       {
    //         firstName: "Adrianna",
    //         lastName: "Crooks",
    //         email: "Adrianna.Crooks8@yahoo.com",
           
    //       },
    //     ],
    //   },
    //   {
    //     taskName: "Assign a Wedding Planner",
    //     taskDescription: "Assign a Wedding Planner to the couple to start going over plans.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Project Manager" ],
    //     users: [
    //         {
    //             firstName: "Adrianna",
    //             lastName: "Crooks",
    //             email: "Adrianna.Crooks8@yahoo.com",
                
    //           },
    //     ],
    //   },
    {
        taskName: "Project Timeline/Budgeting/Approve Budget with Couple/Venue Selection/Venue Management",
        taskDescription: "Develop a project plan, timeline, and budget. Track and manage the wedding budget, ensuring that expenses stay within the allocated amount. Research and select a suitable venue based on the couple's preferences and budget. Coordinate with the venue to ensure availability on the desired date and time.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Wedding Planner" ],
        users: [
            {
                firstName: "Rashawn",
                lastName: "Zieme",
                email: "Rashawn_Zieme@gmail.com",
              
              },
        ],
      },
    //   {
    //     taskName: "Project Timeline/Budgeting",
    //     taskDescription: "Develop a project plan, timeline, and budget.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Approve Budget with Couple",
    //     taskDescription: "Track and manage the wedding budget, ensuring that expenses stay within the allocated amount.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
               
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Venue Selection",
    //     taskDescription: "Research and select a suitable venue based on the couple's preferences and budget.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Venue Management",
    //     taskDescription: "Coordinate with the venue to ensure availability on the desired date and time.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
                
    //           },
    //     ],
    //   },
    {
        taskName: "Menu Selection/Cake Selection",
        taskDescription: "Coordinate with the couple what will be served at the Wedding Food/Beverages. Coordinate with the couple what style cake, and cake accessories.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Caterer" ],
        users: [
            {
                firstName: "Bennett",
                lastName: "Sipes",
                email: "Bennett_Sipes@hotmail.com",
               
              },
        ],
      },

    //   {
    //     taskName: "Menu Selection",
    //     taskDescription: "Coordinate with the couple what will be served at the Wedding Food/Beverages.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Caterer" ],
    //     users: [
    //         {
    //             firstName: "Bennett",
    //             lastName: "Sipes",
    //             email: "Bennett_Sipes@hotmail.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Cake Selection",
    //     taskDescription: "Coordinate with the couple what style cake, and cake accessories.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Caterer" ],
    //     users: [
    //         {
    //             firstName: "Bennett",
    //             lastName: "Sipes",
    //             email: "Bennett_Sipes@hotmail.com",
                
    //           },
    //     ],
    //   },
      {
        taskName: "Wedding Vows Selection/Ceremony Type",
        taskDescription: "Coordinate with the couple what wedding vows will be used and type of ceremony they would like.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Priest/Minister" ],
        users: [
            {
                firstName: "Taryn",
                lastName: "Gleichner",
                email: "Taryn.Gleichner95@gmail.com",
                
              },
        ],
      },
      {
        taskName: "Vendor Coordination",
        taskDescription: "Oversee the delivery and setup of catering, decorations, and breakdown of services received from Wedding Planner.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Venue" ],
        users: [
            {
                firstName: "Otha",
                lastName: "Hamill",
                email: "Otha.Hamill@yahoo.com",
               
              },
        ],
      },
      {
        taskName: "Photography Schedule",
        taskDescription: "Plan photo shoot timeline with the couple and what shots they prefer of them, wedding party, decorations, ceremony, etc.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Photographer" ],
        users: [
            {
                firstName: "Joan",
                lastName: "Turcotte",
                email: "Joan.Turcotte16@yahoo.com",
               
              },
        ],
      },
      {
        taskName: "Videography Schedule",
        taskDescription: "Plan videography timeline with the couple and timeline of event to be recorded",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Videographer" ],
        users: [
            {
                firstName: "Hilma",
                lastName: "Bechtelar-Grant",
                email: "Hilma_Bechtelar-Grant@hotmail.com",
                
              },
        ],
      },
      {
        taskName: "Flower Selection",
        taskDescription: "Meet with couple to discuss flower selection and arrangements",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Florist" ],
        users: [
            {
                firstName: "Era",
                lastName: "Abbott",
                email: "Era_Abbott54@gmail.com",
               
              },
        ],
      },
      {
        taskName: "Entertainment Schedule/Song List",
        taskDescription: "Meet with couple to discuss Entertainment Selection and schedule. Meet with couple to discuss song selection, and what dances they want mother/son, and father/daughter dance",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Music/Entertainment" ],
        users: [
            {
                firstName: "Unique",
                lastName: "Leuschke",
                email: "Unique_Leuschke70@yahoo.com",
                
              },
        ],
      },
    //   {
    //     taskName: "Entertainment Schedule",
    //     taskDescription: "Meet with couple to discuss Entertainment Selection and schedule",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Music/Entertainment" ],
    //     users: [
    //         {
    //             firstName: "Unique",
    //             lastName: "Leuschke",
    //             email: "Unique_Leuschke70@yahoo.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Song List",
    //     taskDescription: "Meet with couple to discuss song selection, and what dances they want mother/son, and father/daughter dance",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Music/Entertainment" ],
    //     users: [
    //         {
    //             firstName: "Unique",
    //             lastName: "Leuschke",
    //             email: "Unique_Leuschke70@yahoo.com",
                
    //           },
    //     ],
    //   },
      {
        taskName: "Schedule Hair/Makeup Appointment and Location",
        taskDescription: "Meet with Bride to discuss hair/make up and wedding party hair/makeup",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Makeup Artist/Hair Stylist" ],
        users: [
            {
                firstName: "Janick",
                lastName: "Schumm",
                email: "Janick_Schumm86@hotmail.com",
               
              },
        ],
      },

    ],
  },

  {
    packageSelected: "Love's Journey",
    roles: [
      "Project Manager",
      "Wedding Planner",
      "Event Coordinator",
      "Florist",
      "Caterer",
      "Priest/Minister",
      "Venue",
      "Music/Entertainment",
      "Photographer",
      "Videographer",
    ],
    tasks: [
        {
            taskName: "Initial Meeting/Assign a Wedding Planner",
            taskDescription: "Meet with the couple to understand their vision, budget, and preferences. Assign a Wedding Planner to the couple to start going over plans.",
            startDate: "",
            endDate: "",
            status: "Completed",
            roles: ["Project Manager"],
            users: [
              {
                firstName: "Adrianna",
                lastName: "Crooks",
                email: "Adrianna.Crooks8@yahoo.com",
               
              },
            ],
          },
    //   {
    //     taskName: "Initial Meeting",
    //     taskDescription: "Meet with the couple to understand their vision, budget, and preferences",
    //     startDate: "",
    //     endDate: "",
    //     status: "Completed",
    //     roles: ["Project Manager"],
    //     users: [
    //       {
    //         firstName: "Adrianna",
    //         lastName: "Crooks",
    //         email: "Adrianna.Crooks8@yahoo.com",
           
    //       },
    //     ],
    //   },
    //   {
    //     taskName: "Assign a Wedding Planner",
    //     taskDescription: "Assign a Wedding Planner to the couple to start going over plans.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Project Manager" ],
    //     users: [
    //         {
    //             firstName: "Adrianna",
    //             lastName: "Crooks",
    //             email: "Adrianna.Crooks8@yahoo.com",
               
    //           },
    //     ],
    //   },
    {
        taskName: "Project Timeline/Budgeting/Approve Budget with Couple/Venue Selection/Venue Management",
        taskDescription: "Develop a project plan, timeline, and budget. Track and manage the wedding budget, ensuring that expenses stay within the allocated amount. Research and select a suitable venue based on the couple's preferences and budget. Coordinate with the venue to ensure availability on the desired date and time.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Wedding Planner" ],
        users: [
            {
                firstName: "Rashawn",
                lastName: "Zieme",
                email: "Rashawn_Zieme@gmail.com",
              
              },
        ],
      },
    //   {
    //     taskName: "Project Timeline/Budgeting",
    //     taskDescription: "Develop a project plan, timeline, and budget.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Approve Budget with Couple",
    //     taskDescription: "Track and manage the wedding budget, ensuring that expenses stay within the allocated amount.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Venue Selection",
    //     taskDescription: "Research and select a suitable venue based on the couple's preferences and budget.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Venue Management",
    //     taskDescription: "Coordinate with the venue to ensure availability on the desired date and time.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Wedding Planner" ],
    //     users: [
    //         {
    //             firstName: "Rashawn",
    //             lastName: "Zieme",
    //             email: "Rashawn_Zieme@gmail.com",
                
    //           },
    //     ],
    //   },
    {
        taskName: "Wedding Timeline for day of event/Wedding Timeline With all Vendors",
        taskDescription: "Coordinate with the couple and Wedding Planner the exact time line for the day of the event. Coordinate with vendors the exact time line on deliveries and pickup.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Event Coordinator" ],
        users: [
            {
                firstName: "Nathanial",
                lastName: "Berge",
                email: "Nathanial.Berge@gmail.com",
               
              },
        ],
      },
    //   {
    //     taskName: "Wedding Timeline for day of event",
    //     taskDescription: "Coordinate with the couple and Wedding Planner the exact time line for the day of the event.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Event Coordinator" ],
    //     users: [
    //         {
    //             firstName: "Nathanial",
    //             lastName: "Berge",
    //             email: "Nathanial.Berge@gmail.com",
                
    //           },
    //     ],
    //   },
    //   {
    //     taskName: "Wedding Timeline With all Vendors",
    //     taskDescription: "Coordinate with vendors the exact time line on deliveries and pickup.",
    //     startDate: "",
    //     endDate: "",
    //     status: "In Process",
    //     roles: [ "Event Coordinator" ],
    //     users: [
    //         {
    //             firstName: "Nathanial",
    //             lastName: "Berge",
    //             email: "Nathanial.Berge@gmail.com",
                
    //           },
    //     ],
    //   },
      {
        taskName: "Menu Selection",
        taskDescription: "Coordinate with the couple what will be served at the Wedding Food/Beverages.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Caterer" ],
        users: [
            {
                firstName: "Bennett",
                lastName: "Sipes",
                email: "Bennett_Sipes@hotmail.com",
                
              },
        ],
      },
      {
        taskName: "Cake Selection",
        taskDescription: "Coordinate with the couple what style cake, and cake accessories.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Caterer" ],
        users: [
            {
                firstName: "Bennett",
                lastName: "Sipes",
                email: "Bennett_Sipes@hotmail.com",
                
              },
        ],
      },
      {
        taskName: "Wedding Vows Selection/Ceremony Type",
        taskDescription: "Coordinate with the couple what wedding vows will be used and type of ceremony they would like.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Priest/Minister" ],
        users: [
            {
                firstName: "Taryn",
                lastName: "Gleichner",
                email: "Taryn.Gleichner95@gmail.com",
               
              },
        ],
      },
      {
        taskName: "Vendor Coordination",
        taskDescription: "Oversee the delivery and setup of catering, decorations, and breakdown of services received from Wedding Planner.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Venue" ],
        users: [
            {
                firstName: "Otha",
                lastName: "Hamill",
                email: "Otha.Hamill@yahoo.com",
                
              },
        ],
      },
      {
        taskName: "Photography Schedule",
        taskDescription: "Plan photo shoot timeline with the couple and what shots they prefer of them, wedding party, decorations, ceremony, etc.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Photographer" ],
        users: [
            {
                firstName: "Joan",
                lastName: "Turcotte",
                email: "Joan.Turcotte16@yahoo.com",
                
              },
        ],
      },
      {
        taskName: "Videography Schedule",
        taskDescription: "Plan videography timeline with the couple and timeline of event to be recorded",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Videographer" ],
        users: [
            {
                firstName: "Hilma",
                lastName: "Bechtelar-Grant",
                email: "Hilma_Bechtelar-Grant@hotmail.com",
                
              },
        ],
      },
      {
        taskName: "Flower Selection",
        taskDescription: "Meet with couple to discuss flower selection and arrangements",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Florist" ],
        users: [
            {
                firstName: "Era",
                lastName: "Abbott",
                email: "Era_Abbott54@gmail.com",
                
              },
        ],
      },
      {
        taskName: "Entertainment Schedule",
        taskDescription: "Meet with couple to discuss Entertainment Selection and schedule",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Music/Entertainment" ],
        users: [
            {
                firstName: "Unique",
                lastName: "Leuschke",
                email: "Unique_Leuschke70@yahoo.com",
                
              },
        ],
      },
      {
        taskName: "Song List",
        taskDescription: "Meet with couple to discuss song selection, and what dances they want mother/son, and father/daughter dance",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Music/Entertainment" ],
        users: [
            {
                firstName: "Unique",
                lastName: "Leuschke",
                email: "Unique_Leuschke70@yahoo.com",
                
              },
        ],
      },
    ],
  },

  {
    packageSelected: "Eternal Love",
    roles: [
      "Project Manager",
      "Wedding Planner",
      "Event Coordinator",
      "Florist",
      "Caterer",
      "Priest/Minister",
      "Venue",
      "Music/Entertainment",
      "Photographer",
    ],
    tasks: [
      {
        taskName: "Initial Meeting",
        taskDescription: "Meet with the couple to understand their vision, budget, and preferences",
        startDate: "",
        endDate: "",
        status: "Completed",
        roles: ["Project Manager"],
        users: [
          {
            firstName: "Adrianna",
            lastName: "Crooks",
            email: "Adrianna.Crooks8@yahoo.com",
            
          },
        ],
      },
      {
        taskName: "Assign a Wedding Planner",
        taskDescription: "Assign a Wedding Planner to the couple to start going over plans.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Project Manager" ],
        users: [
            {
                firstName: "Adrianna",
                lastName: "Crooks",
                email: "Adrianna.Crooks8@yahoo.com",
                
              },
        ],
      },
      {
        taskName: "Project Timeline/Budgeting",
        taskDescription: "Develop a project plan, timeline, and budget.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Wedding Planner" ],
        users: [
            {
                firstName: "Rashawn",
                lastName: "Zieme",
                email: "Rashawn_Zieme@gmail.com",
                
              },
        ],
      },
      {
        taskName: "Approve Budget with Couple",
        taskDescription: "Track and manage the wedding budget, ensuring that expenses stay within the allocated amount.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Wedding Planner" ],
        users: [
            {
                firstName: "Rashawn",
                lastName: "Zieme",
                email: "Rashawn_Zieme@gmail.com",
               
              },
        ],
      },
      {
        taskName: "Venue Selection",
        taskDescription: "Research and select a suitable venue based on the couple's preferences and budget.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Wedding Planner" ],
        users: [
            {
                firstName: "Rashawn",
                lastName: "Zieme",
                email: "Rashawn_Zieme@gmail.com",
               
              },
        ],
      },
      {
        taskName: "Venue Management",
        taskDescription: "Coordinate with the venue to ensure availability on the desired date and time.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Wedding Planner" ],
        users: [
            {
                firstName: "Rashawn",
                lastName: "Zieme",
                email: "Rashawn_Zieme@gmail.com",
                
              },
        ],
      },
      {
        taskName: "Wedding Timeline for day of event",
        taskDescription: "Coordinate with the couple and Wedding Planner the exact time line for the day of the event.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Event Coordinator" ],
        users: [
            {
                firstName: "Nathanial",
                lastName: "Berge",
                email: "Nathanial.Berge@gmail.com",
               
              },
        ],
      },
      {
        taskName: "Wedding Timeline With all Vendors",
        taskDescription: "Coordinate with vendors the exact time line on deliveries and pickup.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Event Coordinator" ],
        users: [
            {
                firstName: "Nathanial",
                lastName: "Berge",
                email: "Nathanial.Berge@gmail.com",
                
              },
        ],
      },
      {
        taskName: "Menu Selection",
        taskDescription: "Coordinate with the couple what will be served at the Wedding Food/Beverages.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Caterer" ],
        users: [
            {
                firstName: "Bennett",
                lastName: "Sipes",
                email: "Bennett_Sipes@hotmail.com",
                
              },
        ],
      },
      {
        taskName: "Cake Selection",
        taskDescription: "Coordinate with the couple what style cake, and cake accessories.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Caterer" ],
        users: [
            {
                firstName: "Bennett",
                lastName: "Sipes",
                email: "Bennett_Sipes@hotmail.com",
               
              },
        ],
      },
      {
        taskName: "Wedding Vows Selection/Ceremony Type",
        taskDescription: "Coordinate with the couple what wedding vows will be used and type of ceremony they would like.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Priest/Minister" ],
        users: [
            {
                firstName: "Taryn",
                lastName: "Gleichner",
                email: "Taryn.Gleichner95@gmail.com",
                
              },
        ],
      },
      {
        taskName: "Vendor Coordination",
        taskDescription: "Oversee the delivery and setup of catering, decorations, and breakdown of services received from Wedding Planner.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Venue" ],
        users: [
            {
                firstName: "Otha",
                lastName: "Hamill",
                email: "Otha.Hamill@yahoo.com",
                
              },
        ],
      },
      {
        taskName: "Photography Schedule",
        taskDescription: "Plan photo shoot timeline with the couple and what shots they prefer of them, wedding party, decorations, ceremony, etc.",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Photographer" ],
        users: [
            {
                firstName: "Joan",
                lastName: "Turcotte",
                email: "Joan.Turcotte16@yahoo.com",
                
              },
        ],
      },
      {
        taskName: "Flower Selection",
        taskDescription: "Meet with couple to discuss flower selection and arrangements",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Florist" ],
        users: [
            {
                firstName: "Era",
                lastName: "Abbott",
                email: "Era_Abbott54@gmail.com",
                
              },
        ],
      },
      {
        taskName: "Entertainment Schedule",
        taskDescription: "Meet with couple to discuss Entertainment Selection and schedule",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Music/Entertainment" ],
        users: [
            {
                firstName: "Unique",
                lastName: "Leuschke",
                email: "Unique_Leuschke70@yahoo.com",
               
              },
        ],
      },
      {
        taskName: "Song List",
        taskDescription: "Meet with couple to discuss song selection, and what dances they want mother/son, and father/daughter dance",
        startDate: "",
        endDate: "",
        status: "In Process",
        roles: [ "Music/Entertainment" ],
        users: [
            {
                firstName: "Unique",
                lastName: "Leuschke",
                email: "Unique_Leuschke70@yahoo.com",
                
              },
        ],
      },
    ],
  },

 
];

seedBuilders.forEach(async (builder) => {
  const newBuilder = await axios.post(
    `${process.env.SERVER_URL}/builders`,
    builder
  );
  console.log("newBuilder", newBuilder.data);
});