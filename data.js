// ============================================================
//  EDIT THIS FILE to update the website's content.
//  Everything below is sample content — replace it with real info.
// ============================================================

window.CLUB = {
  meeting: { day: "Tuesdays at 3:15 PM", place: "Room 214 · Mission San Jose High" },
  contact: {
    email: "",          // e.g. "msjkeyclub@gmail.com" — leave "" to show a placeholder
    social: "",         // e.g. "@msjkeyclub"
    socialUrl: "",      // e.g. "https://instagram.com/msjkeyclub"
  },
  secretary: "2023–2024 Club Secretary Gitali",
  links: {
    division: "https://cnhkeyclub.org/",   // replace with the Division 12 East site
    district: "https://cnhkeyclub.org/",
    mrp: "https://cnhkeyclub.org/",        // replace with the MRP requirements page
    joinForm: "",                          // optional Google Form link; if set, "Join" goes there
  },

  // Officer board — replace names/bios. "photo" is optional (e.g. "assets/officers/jane.jpg");
  // without a photo, the officer's initials are shown.
  officerYear: "2026–2027",
  officers: [
    { role: "President", name: "Officer name", grade: "", bio: "Leads the board and runs weekly meetings.", photo: "" },
    { role: "Vice President", name: "Officer name", grade: "", bio: "Supports the President and coordinates committees.", photo: "" },
    { role: "Secretary", name: "Gitali", grade: "", bio: "Tracks service hours and MRP forms. Questions about hours? Ask here.", photo: "" },
    { role: "Treasurer", name: "Officer name", grade: "", bio: "Manages dues, fundraisers, and club finances.", photo: "" },
    { role: "Editor", name: "Officer name", grade: "", bio: "Writes the monthly newsletter and keeps members informed.", photo: "" },
    { role: "Webmaster", name: "Officer name", grade: "", bio: "Maintains this website and club social media.", photo: "" },
  ],
  advisor: { name: "Faculty advisor name", room: "Room 214" },

  // Categories: "Service", "Fundraiser", "Meeting", "Social", "Division"
  events: [
    { title: "General Meeting", date: "2026-10-07", time: "3:15 PM", place: "Room 214", category: "Meeting",
      description: "Weekly club meeting — announcements, upcoming events, and sign-ups." },
    { title: "Park Cleanup at Central Park", date: "2026-10-11", time: "9:00 AM – 12:00 PM", place: "Fremont Central Park", category: "Service",
      description: "Help pick up litter and restore trails around Lake Elizabeth.", hours: 3 },
    { title: "Halloween Bake Sale", date: "2026-10-24", time: "Lunch", place: "MSJ Quad", category: "Fundraiser",
      description: "Bake or volunteer at our booth — proceeds go to the Pediatric Trauma Program." },
    { title: "Division 12 East Council Meeting", date: "2026-11-02", time: "4:00 PM", place: "Virtual", category: "Division",
      description: "Monthly division meeting with clubs across Division 12 East." },
    { title: "Food Bank Sorting", date: "2026-11-15", time: "10:00 AM – 1:00 PM", place: "Tri-City Volunteers", category: "Service",
      description: "Sort and pack donations for families in our community.", hours: 3 },
    { title: "Holiday Social", date: "2026-12-12", time: "6:00 PM", place: "MSJ Library", category: "Social",
      description: "Games, snacks, and a gift exchange with the hive." },
  ],

  impact: {
    goalHours: 5000,
    stats: [
      { value: 3240, suffix: "", label: "Service hours logged this year" },
      { value: 120, suffix: "+", label: "Active members" },
      { value: 28, suffix: "", label: "Service events hosted" },
      { value: 4200, prefix: "$", suffix: "", label: "Raised for charity" },
      { value: 9, suffix: "", label: "Community partners" },
      { value: 35, suffix: "", label: "MRP award recipients" },
    ],
    highlights: [
      { title: "Pediatric Trauma Program", text: "Funds raised help children receive critical trauma care across the CNH District." },
      { title: "Local food security", text: "Members volunteer monthly to sort and distribute food to families in Fremont." },
      { title: "Environmental service", text: "Park and creek cleanups keep our neighborhoods green and safe." },
    ],
  },

  mrpLevels: {
    Bronze: "Starting level — complete the required service hours and fulfillments listed in the CNH MRP guide.",
    Silver: "Build on Bronze with more service hours and additional club involvement.",
    Gold: "For members who go above and beyond in service and leadership.",
    Platinum: "The highest recognition for outstanding dedication to Key Club.",
  },
};
