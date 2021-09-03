const mockData = {
  get: (state) => {
    const ret = {
      total: "33",
      limit: "3",
      start: "0",
      data: [
        {
          id: "C08AD828-98FF-478E-A63C-614E7534274B",
          url: "https://www.nps.gov/alca/index.htm",
          fullName: "Alcatraz Island",
          parkCode: "alca",
          description:
            "Alcatraz reveals stories of American incarceration, justice, and our common humanity. This small island was once a fort, a military prison, and a maximum security federal penitentiary. In 1969, the Indians of All Tribes occupied Alcatraz for 19 months in the name of freedom and Native American civil rights. We invite you to explore Alcatraz's complex history and natural beauty.",
          latitude: "37.82676234",
          longitude: "-122.4230206",
          latLong: "lat:37.82676234, long:-122.4230206",
          activities: [
            {
              id: "1DFACD97-1B9C-4F5A-80F2-05593604799E",
              name: "Food",
            },
            {
              id: "0B685688-3405-4E2A-ABBA-E3069492EC50",
              name: "Wildlife Watching",
            },
            {
              id: "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
              name: "Birdwatching",
            },
            {
              id: "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
              name: "Shopping",
            },
            {
              id: "467DC8B8-0B7D-436D-A026-80A22358F615",
              name: "Bookstore and Park Store",
            },
          ],
          topics: [
            {
              id: "7F12224B-217A-4B07-A4A2-636B1CE7F221",
              name: "Colonization and Settlement",
            },
            {
              id: "988B4AFC-F478-4673-B66D-E6BDB0CCFF35",
              name: "Forts",
            },
            {
              id: "351EE154-87AA-46B0-BBA1-ED604368ACE9",
              name: "Incarceration",
            },
            {
              id: "50A3D2B2-C922-4749-89F1-E986A5D520AC",
              name: "Jails and Prisons",
            },
            {
              id: "4C9D4777-A9DA-47D1-A0B9-F4A3C98BC1B3",
              name: "Maritime",
            },
            {
              id: "7424754D-EB8B-4608-A69A-50D44992931B",
              name: "Maritime - Military",
            },
            {
              id: "263BAC6E-4DEC-47E4-909D-DA8AD351E06E",
              name: "Lighthouses",
            },
            {
              id: "4B3CD083-7500-434B-A8C2-D355925E0245",
              name: "Medicine",
            },
            {
              id: "97716EF5-D001-449C-993A-EC15AB8FD345",
              name: "Hospital",
            },
            {
              id: "3B0D607D-9933-425A-BFA0-21529AC4734C",
              name: "Military",
            },
            {
              id: "97CCB419-196C-4B95-BB3A-621458F78415",
              name: "US Army",
            },
            {
              id: "A1BAF33E-EA84-4608-A888-4CEE9541F027",
              name: "Native American Heritage",
            },
            {
              id: "40C0866A-3890-41A4-84CA-5935DEE181AE",
              name: "Social Movements",
            },
            {
              id: "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
              name: "Wars and Conflicts",
            },
            {
              id: "B564E9AA-95E9-4648-A7D1-48F94BFBEBB5",
              name: "Tribal Conflicts",
            },
            {
              id: "0D00073E-18C3-46E5-8727-2F87B112DDC6",
              name: "Animals",
            },
            {
              id: "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
              name: "Birds",
            },
          ],
          states: "CA",
          contacts: {
            phoneNumbers: [
              {
                phoneNumber: "4155614900",
                description: "",
                extension: "",
                type: "Voice",
              },
            ],
            emailAddresses: [
              {
                description: "",
                emailAddress: "goga_alca_socialmedia@nps.gov",
              },
            ],
          },
          entranceFees: [
            {
              cost: "39.90",
              description:
                "A daily scheduled ferry to Alcatraz has a round-trip fee. Reservations are strongly recommended as we often sell out. See www.alcatrazcruises.com for reservations, and ticket types and pricing.",
              title: "Adult Day Ticket (Ferry and audio tour)",
            },
            {
              cost: "47.30",
              description:
                "A daily scheduled ferry to Alcatraz has a round-trip fee. Reservations are strongly recommended as we often sell out. See www.alcatrazcruises.com for reservations, and ticket types and pricing.",
              title: "Adult Night Ticket (Ferry and audio tour)",
            },
            {
              cost: "92.30",
              description:
                "A daily scheduled ferry to Alcatraz has a round-trip fee. Reservations are strongly recommended as we often sell out. See www.alcatrazcruises.com for reservations, and ticket types and pricing.",
              title:
                "Adult Behind the Scenes Tour Ticket (Ferry and audio tour)",
            },
          ],
          entrancePasses: [],
          fees: [],
          directionsInfo:
            "The Alcatraz Ferry Terminal is located on The Embarcadero near the intersection of Bay Street at Pier 33.",
          directionsUrl:
            "http://home.nps.gov/alca/planyourvisit/directions.htm",
          operatingHours: [
            {
              exceptions: [
                {
                  exceptionHours: {
                    wednesday: "Closed",
                    monday: "Closed",
                    thursday: "Closed",
                    sunday: "Closed",
                    tuesday: "Closed",
                    friday: "Closed",
                    saturday: "Closed",
                  },
                  startDate: "2022-01-01",
                  name: "New Year's",
                  endDate: "2022-01-01",
                },
                {
                  exceptionHours: {
                    thursday: "Closed",
                  },
                  startDate: "2021-11-25",
                  name: "Thanksgiving",
                  endDate: "2021-11-25",
                },
                {
                  exceptionHours: {
                    wednesday: "Closed",
                    monday: "Closed",
                    thursday: "Closed",
                    sunday: "Closed",
                    tuesday: "Closed",
                    friday: "Closed",
                    saturday: "Closed",
                  },
                  startDate: "2021-12-25",
                  name: "Christmas",
                  endDate: "2021-12-25",
                },
              ],
              description:
                "Access to Alcatraz Island is via commercial ferry service . For ticket reservation call (415) 981-ROCK [415.981.7625] or go to www.alcatrazcruises.com. Once on the island you can stay as long as you wish up to the last ferry, which changes seasonally. Alcatraz is closed on Thanksgiving, Christmas and New Years Day. Be aware that  Alcatraz often sells out in advance. In summer and around holidays tickets can sell out a month or more in advance. Tickets go on sale 90 days in advance.",
              standardHours: {
                wednesday: "10:00AM - 9:00PM",
                monday: "10:00AM - 9:00PM",
                thursday: "10:00AM - 9:00PM",
                sunday: "10:00AM - 9:00PM",
                tuesday: "10:00AM - 9:00PM",
                friday: "10:00AM - 9:00PM",
                saturday: "10:00AM - 9:00PM",
              },
              name: "Alcatraz Island",
            },
          ],
          addresses: [
            {
              postalCode: "94133",
              city: "San Francisco Bay",
              stateCode: "CA",
              line1: "Alcatraz Island",
              type: "Physical",
              line3: "",
              line2: "",
            },
            {
              postalCode: "94123",
              city: "San Francisco",
              stateCode: "CA",
              line1: "Alcatraz Island",
              type: "Mailing",
              line3: "B201 Fort Mason",
              line2: "Golden Gate National Recreation Area",
            },
          ],
          images: [
            {
              credit: "NPS",
              title: "Alcatraz Island",
              altText:
                "View of the Alcatraz Lighthouse and Island from the water",
              caption: "Alcatraz Island",
              url: "https://www.nps.gov/common/uploads/structured_data/2514A14F-D5E3-BB31-4A0C4175BF61216A.jpg",
            },
            {
              credit: "NPS / Dave Rauenbuehler",
              title: "Alcatraz Cellhouse",
              altText:
                "A corridor extends between two rows and three tiers of cells. Skylights let in light from overhead.",
              caption: "Looking down Broadway in the Alcatraz Cellhouse",
              url: "https://www.nps.gov/common/uploads/structured_data/5482A294-DB42-56E0-FCCCD03C986AE1DC.jpg",
            },
            {
              credit: "NPS Photo",
              title: "Alcatraz Rangers and Firetruck",
              altText: "Alcatraz Rangers and Firetruck",
              caption: "Alcatraz Rangers and 1934 Diamond T Firetruck",
              url: "https://www.nps.gov/common/uploads/structured_data/A5C1D012-1DD8-B71B-0BA00C730D46F141.jpg",
            },
            {
              credit:
                "NPS Photo - Golden Gate National Recreation Area, GOGA 2316a",
              title: "Army Prisoners in the Stockade, 1902",
              altText: "Army Prisoners in the Stockade, 1902",
              caption: "Army Prisoners in the Stockade, 1902",
              url: "https://www.nps.gov/common/uploads/structured_data/A61F4F58-1DD8-B71B-0B981C552798242B.jpg",
            },
            {
              credit: "Darlyne Sheppard Alcatraz Photo Collection",
              title: "Serving the Christmas Meal, c 1951",
              altText: "Cook serving Christmas dinner with menu posted above.",
              caption:
                "An inmate worker distributes trays near the steam table. Bars separate the kitchen from the mess hall.  The day’s menu, the Christmas meal, appears on a sign over his head. The menu includes consomme, stuffed celery, green olives and mixed sweet pickles,",
              url: "https://www.nps.gov/common/uploads/structured_data/A64B4FF8-1DD8-B71B-0B63B232325C8081.jpg",
            },
          ],
          weatherInfo:
            "The climate on Alcatraz is unpredictable and can change suddenly. Cold, foggy mornings may give way to sunny afternoons, which in turn can shift quickly back to more fog and blustery winds. The most pleasant weather usually occurs in spring and fall. Summers tend to be cool and foggy, winter is our rainy season. Temperatures on Alcatraz seldom rise above 75°F (24°C) or fall below 38°",
          name: "Alcatraz Island",
          designation: "",
        },
        {
          id: "2DB09FB7-0408-44C9-8083-8F50039BD6DA",
          url: "https://www.nps.gov/cabr/index.htm",
          fullName: "Cabrillo National Monument",
          parkCode: "cabr",
          description:
            "Climbing out of his boat and onto shore in 1542, Juan Rodriguez Cabrillo stepped into history as the first European to set foot on what is now the West Coast of the United States. In addition to telling the story of 16th century exploration, the park is home to a wealth of cultural and natural resources. Join us and embark on your own Voyage of Exploration.",
          latitude: "32.6722503",
          longitude: "-117.2415985",
          latLong: "lat:32.6722503, long:-117.2415985",
          activities: [
            {
              id: "7CE6E935-F839-4FEC-A63E-052B1DEF39D2",
              name: "Biking",
            },
            {
              id: "8D778629-F603-4C50-A121-6F4BB2FE2C4B",
              name: "Road Biking",
            },
            {
              id: "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
              name: "Hiking",
            },
            {
              id: "B204DE60-5A24-43DD-8902-C81625A09A74",
              name: "Living History",
            },
            {
              id: "A8650547-1A30-4222-86C3-A7660A829670",
              name: "Reenactments",
            },
            {
              id: "237A1662-6018-4115-ABD1-B8CCF827E703",
              name: "Historic Weapons Demonstration",
            },
            {
              id: "28880A5B-3D29-41AC-BD8B-24743E7A070F",
              name: "First Person Interpretation",
            },
            {
              id: "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
              name: "Junior Ranger Program",
            },
            {
              id: "0B685688-3405-4E2A-ABBA-E3069492EC50",
              name: "Wildlife Watching",
            },
            {
              id: "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
              name: "Birdwatching",
            },
            {
              id: "0C0D142F-06B5-4BE1-8B44-491B90F93DEB",
              name: "Park Film",
            },
            {
              id: "C8F98B28-3C10-41AE-AA99-092B3B398C43",
              name: "Museum Exhibits",
            },
            {
              id: "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
              name: "Shopping",
            },
            {
              id: "467DC8B8-0B7D-436D-A026-80A22358F615",
              name: "Bookstore and Park Store",
            },
            {
              id: "43800AD1-D439-40F3-AAB3-9FB651FE45BB",
              name: "Gift Shop and Souvenirs",
            },
          ],
          topics: [
            {
              id: "607D41B0-F830-4C07-A557-BCEF880A3929",
              name: "Burial, Cemetery and Gravesite",
            },
            {
              id: "570E8E93-3A49-45FB-B11A-F2F984EAC862",
              name: "National Cemetery",
            },
            {
              id: "12EA2B56-17EC-410A-A10D-BFBA87A0669B",
              name: "Explorers and Expeditions",
            },
            {
              id: "4C9D4777-A9DA-47D1-A0B9-F4A3C98BC1B3",
              name: "Maritime",
            },
            {
              id: "123CE28E-0EFA-4330-8E6E-EEFF3D7BF772",
              name: "Coastal Defenses",
            },
            {
              id: "7424754D-EB8B-4608-A69A-50D44992931B",
              name: "Maritime - Military",
            },
            {
              id: "263BAC6E-4DEC-47E4-909D-DA8AD351E06E",
              name: "Lighthouses",
            },
            {
              id: "A079385C-3E71-4E18-9E42-B046BC22EA95",
              name: "Ships and Shipwrecks",
            },
            {
              id: "3B0D607D-9933-425A-BFA0-21529AC4734C",
              name: "Military",
            },
            {
              id: "BEB7E470-13B2-4E00-84B2-0402D98DAF69",
              name: "Monuments and Memorials",
            },
            {
              id: "0D00073E-18C3-46E5-8727-2F87B112DDC6",
              name: "Animals",
            },
            {
              id: "957EF2BD-AC6C-4B7B-BD9A-87593ADC6691",
              name: "Birds",
            },
            {
              id: "0E6D8503-CB65-467F-BCD6-C6D9E28A4E0B",
              name: "Oceans",
            },
            {
              id: "980D1693-65BF-4F29-8182-7BAC9796E605",
              name: "Whales",
            },
            {
              id: "9C9FCBB6-360B-4743-8155-6F9341CBE01B",
              name: "Scenic Views",
            },
          ],
          states: "CA",
          contacts: {
            phoneNumbers: [
              {
                phoneNumber: "6195234285",
                description: "",
                extension: "",
                type: "Voice",
              },
            ],
            emailAddresses: [
              {
                description: "",
                emailAddress: "cabr_info@nps.gov",
              },
            ],
          },
          entranceFees: [
            {
              cost: "20.00",
              description: "The pass is valid for seven full days.",
              title: "Cabrillo Entrance Fee - Per non commercial vehicle",
            },
            {
              cost: "15.00",
              description: "The pass is valid for seven full days.",
              title: "Cabrillo Entrance Fee - per motorcycle",
            },
            {
              cost: "10.00",
              description: "The pass is valid for seven full days.",
              title: "Cabrillo Entrance Fee - per walker or bicyclist",
            },
            {
              cost: "30.00",
              description:
                'Cabrillo National Monument welcomes your commercial tour group. A "commercial tour" is defined as an organized tour that is booked and paid through a third party. Your group is welcome to come whenever it\'s convenient for you (no reservations are necessary), and we have plenty of bus parking available.\n\n"Passenger Capacity" is based on the number of seats on the vehicle, rather than number of actual passengers.\n\nThe commercial pass is only valid for one visit.',
              title:
                "Cabrillo Entrance Fee - per commercical vehicle 1-6 Passenger Capacity*",
            },
            {
              cost: "45.00",
              description:
                'Cabrillo National Monument welcomes your commercial tour group. A "commercial tour" is defined as an organized tour that is booked and paid through a third party. Your group is welcome to come whenever it\'s convenient for you (no reservations are necessary), and we have plenty of bus parking available.\n\n"Passenger Capacity" is based on the number of seats on the vehicle, rather than number of actual passengers.\n\nThe commercial pass is only valid for one visit.',
              title:
                "Cabrillo Entrance Fee - per commercial vehicle 7-25 Passenger Capacity*",
            },
            {
              cost: "100.00",
              description:
                'Cabrillo National Monument welcomes your commercial tour group. A "commercial tour" is defined as an organized tour that is booked and paid through a third party. Your group is welcome to come whenever it\'s convenient for you (no reservations are necessary), and we have plenty of bus parking available.\n\n"Passenger Capacity" is based on the number of seats on the vehicle, rather than number of actual passengers.\n\nThe commercial pass is only valid for one visit.',
              title:
                "Cabrillo Entrance Fee - per commercial vehicle 26+ Passenger Capacity*",
            },
          ],
          entrancePasses: [
            {
              cost: "35.00",
              description:
                "Valid for 12 months from purchase date. Admits the pass holder(s) and passengers in a non-commercial vehicle (14 passenger capacity or less) to Cabrillo National Monument. The pass is available at the Entrance Station.\n\nPark passes are available at the Entrance Station until 4:20pm.",
              title: "Cabrillo Annual Pass",
            },
          ],
          fees: [],
          directionsInfo:
            "FROM DOWNTOWN SAN DIEGO Take Harbor Drive past the airport Turn left onto Rosecrans Street Turn right onto Canon Street Turn left onto Catalina Blvd. (also known as Cabrillo Memorial Drive) Follow Catalina Blvd. all the way to the end",
          directionsUrl:
            "http://www.nps.gov/cabr/planyourvisit/directionstocabr.htm",
          operatingHours: [
            {
              exceptions: [
                {
                  exceptionHours: {
                    wednesday: "9:00AM - 5:00PM",
                    monday: "9:00AM - 5:00PM",
                    thursday: "9:00AM - 5:00PM",
                    sunday: "9:00AM - Sunset",
                    tuesday: "9:00AM - 5:00PM",
                    friday: "9:00AM - Sunset",
                    saturday: "9:00AM - Sunset",
                  },
                  startDate: "2021-05-28",
                  name: "Summer Extended Hours - From Friday, May 28 (Memorial Day weekend) through Sunday, Sept. 5 (Labor Day weekend)",
                  endDate: "2021-09-05",
                },
              ],
              description:
                "The park is open 365 days a year including holidays from 9 am until 5 pm. \nThe Bayside Trail closes at 4pm and the tidepools close at 4:30pm.",
              standardHours: {
                wednesday: "9:00AM - 5:00PM",
                monday: "9:00AM - 5:00PM",
                thursday: "9:00AM - 5:00PM",
                sunday: "9:00AM - 5:00PM",
                tuesday: "9:00AM - 5:00PM",
                friday: "9:00AM - 5:00PM",
                saturday: "9:00AM - 5:00PM",
              },
              name: "Cabriilo National Monument",
            },
          ],
          addresses: [
            {
              postalCode: "92106",
              city: "San Diego",
              stateCode: "CA",
              line1: "1800 Cabrillo Memorial Drive",
              type: "Physical",
              line3: "",
              line2: "",
            },
            {
              postalCode: "92106",
              city: "San Diego",
              stateCode: "CA",
              line1: "1800 Cabrillo Memorial Drive",
              type: "Mailing",
              line3: "",
              line2: "",
            },
          ],
          images: [
            {
              credit: "NPS Photo / Dan Zeller",
              title: "Rocky Intertidal Zone",
              altText: "Tidepools at Cabrillo",
              caption: "Low Tide at the Tidepools",
              url: "https://www.nps.gov/common/uploads/structured_data/3C83BD0E-1DD8-B71B-0B8A7140406810C6.jpg",
            },
            {
              credit: "NPS Photo / Mike Nelson",
              title: "Sunset at Cabrillo",
              altText: "Sun setting over the Pacific",
              caption: "Sunset at Cabrillo",
              url: "https://www.nps.gov/common/uploads/structured_data/3C83BE4E-1DD8-B71B-0B056AAA8EA8AD24.jpg",
            },
            {
              credit: "NPS Photo / Mike Nelson",
              title: "Dusk at the Old Point Loma Lighthouse",
              altText: "Dusk at the Old Point Loma Lighthouse",
              caption: "Dusk over the Old Point Loma Lighthouse",
              url: "https://www.nps.gov/common/uploads/structured_data/3C83BF81-1DD8-B71B-0B1070022CDC04D6.jpg",
            },
            {
              credit: "NPS Photo / Mike Nelson",
              title: "Old Point Loma Lighthouse",
              altText: "Spring flowers in front of Old Point Loma Lighthouse",
              caption: "Spring flowers in front of Old Point Loma Lighthouse",
              url: "https://www.nps.gov/common/uploads/structured_data/3C83C0FF-1DD8-B71B-0B85BBD2186E9F44.jpg",
            },
            {
              credit: "NPS Photo / Mike Nelson",
              title: "View from Cabrillo",
              altText: "Looking out on San Diego from Cabrillo",
              caption: "View looking over to Coronado from Cabrillo",
              url: "https://www.nps.gov/common/uploads/structured_data/3C83C25D-1DD8-B71B-0B0658E975DC56A4.jpg",
            },
            {
              credit: "NPS Photo / Bill Griswold",
              title: "Pelican Point",
              altText: "View of Pelican Point at Cabrillo",
              caption: "Pelican Point at Cabrillo National Monument",
              url: "https://www.nps.gov/common/uploads/structured_data/3C83C3FC-1DD8-B71B-0B5EECDE9C8C44DE.jpg",
            },
          ],
          weatherInfo:
            "Check the current weather from the National Weather Service at https://www.weather.gov/. San Diego's climate is characterized by warm, dry summers and mild winters, with most of the annual precipitation falling between December and March. The city has a mild climate year-round, with an average of 201 days above 70 °F (21 °C) and low rainfall (9–13 inches [230–330 mm] annually).",
          name: "Cabrillo",
          designation: "National Monument",
        },
        {
          id: "B39C368F-CB27-49EC-B2A9-E6C1552430FB",
          url: "https://www.nps.gov/cali/index.htm",
          fullName: "California National Historic Trail",
          parkCode: "cali",
          description:
            "Follow in the footsteps of over 250,000 emigrants who traveled to the gold fields and rich farmlands of California during the 1840s and 1850s: the greatest mass migration in American history. The California National Historic Trail is over 5,000 miles long and covers portions of 10 states. Step into history along more than 1,000 miles of ruts and traces from travelers and their overland wagons.",
          latitude: "42.3999643979285",
          longitude: "-108.702415369046",
          latLong: "lat:42.3999643979285, long:-108.702415369046",
          activities: [
            {
              id: "5F723BAD-7359-48FC-98FA-631592256E35",
              name: "Auto and ATV",
            },
            {
              id: "0B4A5320-216D-451A-9990-626E1D5ACE28",
              name: "Scenic Driving",
            },
            {
              id: "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
              name: "Guided Tours",
            },
            {
              id: "C7D5A145-F8EB-4C37-9E92-2F6C6206B196",
              name: "Self-Guided Tours - Auto",
            },
            {
              id: "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA",
              name: "Hiking",
            },
            {
              id: "0307955A-B65C-4CE4-A780-EB36BAAADF0B",
              name: "Horse Trekking",
            },
            {
              id: "1886DA47-0AEC-4568-B9C2-8E9BC316AAAC",
              name: "Horseback Riding",
            },
            {
              id: "C8F98B28-3C10-41AE-AA99-092B3B398C43",
              name: "Museum Exhibits",
            },
          ],
          topics: [
            {
              id: "28AEAE85-9DDA-45B6-981B-1CFCDCC61E14",
              name: "African American Heritage",
            },
            {
              id: "7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",
              name: "Archeology",
            },
            {
              id: "00F3C3F9-2D67-4802-81AE-CCEA5D3BA370",
              name: "Arts",
            },
            {
              id: "9BD60DC0-C82B-42BA-A170-456B7423429D",
              name: "Photography",
            },
            {
              id: "156AD9B6-B377-418C-BC9A-F6E682D4BAF7",
              name: "Poetry and Literature",
            },
            {
              id: "607D41B0-F830-4C07-A557-BCEF880A3929",
              name: "Burial, Cemetery and Gravesite",
            },
            {
              id: "7F12224B-217A-4B07-A4A2-636B1CE7F221",
              name: "Colonization and Settlement",
            },
            {
              id: "12EA2B56-17EC-410A-A10D-BFBA87A0669B",
              name: "Explorers and Expeditions",
            },
            {
              id: "988B4AFC-F478-4673-B66D-E6BDB0CCFF35",
              name: "Forts",
            },
            {
              id: "BEB7E470-13B2-4E00-84B2-0402D98DAF69",
              name: "Monuments and Memorials",
            },
            {
              id: "A1BAF33E-EA84-4608-A888-4CEE9541F027",
              name: "Native American Heritage",
            },
            {
              id: "27BF8807-54EA-4A3D-B073-AA7AA361CD7E",
              name: "Wars and Conflicts",
            },
            {
              id: "C9C749E3-39C3-45F7-BCC5-9A609E30AA05",
              name: "Westward Expansion",
            },
            {
              id: "83DDFE66-914E-4402-AD3E-ACA731AB2537",
              name: "The Gold Rush",
            },
            {
              id: "4244F489-6813-4B7A-9D0C-20CE098C8FFF",
              name: "Rock Landscapes and Features",
            },
            {
              id: "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
              name: "Trails",
            },
          ],
          states: "CA,CO,ID,KS,MO,NE,NV,OR,UT,WY",
          contacts: {
            phoneNumbers: [
              {
                phoneNumber: "505-988-6098",
                description: "",
                extension: "",
                type: "Voice",
              },
              {
                phoneNumber: "505-988-6098",
                description: "",
                extension: "",
                type: "Fax",
              },
            ],
            emailAddresses: [
              {
                description: "",
                emailAddress: "ntir_information@nps.gov",
              },
            ],
          },
          entranceFees: [
            {
              cost: "0.00",
              description:
                "There are no user or entry fees for the California National Historic Trail. Fees may be charged at some trail-related federal, state, or locally owned historic sites and interpretive facilities. Please contact individual trail sites before visiting for more information.",
              title: "Entrance fees vary site by site",
            },
          ],
          entrancePasses: [],
          fees: [],
          directionsInfo:
            'Those portions of the California National Historic Trail authorized by Congress include nearly 2,000 miles of historic trail that was once the primary "road" taken by farmers, enterprising business managers, gold-seekers, and fortune hunters who chose to make a new life on the California frontier. The route passes through ten states from Missouri to California.',
          directionsUrl: "http://www.nps.gov/cali/planyourvisit/directions.htm",
          operatingHours: [
            {
              exceptions: [],
              description:
                "The California National Historic Trail is not a clearly marked hiking trail. Instead it is a corridor that passes through communities, urban areas, public lands, and Wilderness. The route travels across a variety of land ownerships and management, including private land. Each location varies as to the hours of operation and access. Please contact individual trail sites before your visit for more information.",
              standardHours: {
                wednesday: "All Day",
                monday: "All Day",
                thursday: "All Day",
                sunday: "All Day",
                tuesday: "All Day",
                friday: "All Day",
                saturday: "All Day",
              },
              name: "California National Historic Trail",
            },
          ],
          addresses: [
            {
              postalCode: "87505",
              city: "Santa Fe",
              stateCode: "NM",
              line1: "National Trails Office Regions 6|7|8",
              type: "Physical",
              line3: "1100 Old Santa Fe Trail",
              line2: "California National Historic Trail",
            },
            {
              postalCode: "87505",
              city: "Santa Fe",
              stateCode: "NM",
              line1: "National Trails Office Regions 6|7|8",
              type: "Mailing",
              line3: "1100 Old Santa Fe Trail",
              line2: "California National Historic Trail",
            },
          ],
          images: [
            {
              credit: "NPS Photo",
              title: "Wagon at Register Rock in City of Rocks National Reserve",
              altText:
                "A white canvas wagon sits in front of a large rock buttress with mountains in the distance.",
              caption:
                "Wagon at Register Rock in City of Rocks National Reserve",
              url: "https://www.nps.gov/common/uploads/structured_data/3C7B7987-1DD8-B71B-0B3C3123ED8F686B.jpg",
            },
            {
              credit: "NPS Photo",
              title: "A creek in Carlin Canyon, Nevada on the California Trail",
              altText: "A still creek winds through brown rolling hills.",
              caption:
                "A creek in Carlin Canyon, Nevada on the California Trail",
              url: "https://www.nps.gov/common/uploads/structured_data/3C7B7CDA-1DD8-B71B-0B999C4AC7A9D37C.jpg",
            },
            {
              credit: "NPS Photo",
              title: "Trail ruts on through Humboldt Wells in Nevada",
              altText:
                "A dirt road passes through sagebrush and a white post with a mountain in the background.",
              caption: "Trail ruts on through Humboldt Wells in Nevada",
              url: "https://www.nps.gov/common/uploads/structured_data/3C7B7E5D-1DD8-B71B-0B0A1BE6987E18AF.jpg",
            },
            {
              credit: "NPS Photo",
              title: "Devil's Gate, Wyoming",
              altText:
                "A rock buttress with a notch in it surrounded by sagebrush flats.",
              caption:
                "Devil's Gate was an important emigrant landmark in Wyoming.",
              url: "https://www.nps.gov/common/uploads/structured_data/3C7B7FCF-1DD8-B71B-0BA502EF5988BC47.jpg",
            },
            {
              credit: "NPS Photo",
              title: "View of West Pass on Carson Route",
              altText:
                "Pine trees partly obscure a distant mountain lake with snow-capped mountains.",
              caption:
                "View of West Pass on the Carson Route of the California NHT.",
              url: "https://www.nps.gov/common/uploads/structured_data/56ACD550-C0CE-423B-9448A9D0ABCDD9E7.jpg",
            },
          ],
          weatherInfo:
            "Due to the length of the California National Historic Trail, be sure to consult local weather sources for the region you'll be visiting. Check out the forecast with the National Weather Service and search for the area you'd like to visit: weather.gov",
          name: "California",
          designation: "National Historic Trail",
        },
      ],
    };
    return ret;
  },
};

export default mockData;
