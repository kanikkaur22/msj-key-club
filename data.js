// ============================================================
//  EDIT THIS FILE to update the website's content.
//  Everything below is sample content — replace it with real info.
// ============================================================

window.CLUB = {
  contact: {
    email: "msjhs.keyclub@gmail.com",
    social: "@msjkeyclub",
    socialUrl: "https://www.instagram.com/msjkeyclub/",
  },
  secretary: "2023–2024 Club Secretary Gitali",
  links: {
    division: "https://cnhkeyclub.org/",   // replace with the Division 12 East site
    district: "https://cnhkeyclub.org/",
    mrp: "https://cnhkeyclub.org/",        // replace with the MRP requirements page
    joinForm: "https://docs.google.com/forms/d/e/1FAIpQLSe7C7E6-EDNABAYABYwzYHd2ATHWpNh25tOTW3Xxr3UxFadrg/viewform",
  },

  // Officer board — replace "Officer name" with real names. "photo" is optional
  // (e.g. "assets/officers/jane.jpg"); without a photo, initials are shown.
  officerYear: "2026–2027",
  officers: {
    executives: [
      { role: "President", name: "Officer name", grade: "", bio: "Leads the officer board and sets the club's direction for the year.", photo: "" },
      { role: "Vice President", name: "Officer name", grade: "", bio: "Supports the President and helps run club projects.", photo: "" },
      { role: "Vice President", name: "Officer name", grade: "", bio: "Supports the President and helps run club projects.", photo: "" },
      { role: "Secretary", name: "Officer name", grade: "", bio: "Tracks service hours and MRP forms. Questions about hours? Ask here.", photo: "" },
      { role: "Treasurer", name: "Officer name", grade: "", bio: "Manages dues, fundraisers, and the club account.", photo: "" },
      { role: "Bulletin Editor", name: "Officer name", grade: "", bio: "Writes the club bulletin and keeps members informed.", photo: "" },
    ],
    nonExecutives: [
      { role: "Activity Coordinator", name: "Officer name", grade: "", bio: "Plans service events and volunteer opportunities.", photo: "" },
      { role: "Activity Coordinator", name: "Officer name", grade: "", bio: "Plans service events and volunteer opportunities.", photo: "" },
      { role: "Meeting Coordinator", name: "Officer name", grade: "", bio: "Organizes club meetings and gatherings.", photo: "" },
      { role: "Publicist", name: "Officer name", grade: "", bio: "Runs @msjkeyclub and spreads the word about events.", photo: "" },
    ],
  },

  // Categories: "Service", "Fundraiser", "Social", "Division"
  events: [
    { title: "Park Cleanup at Central Park", date: "2026-10-11", time: "9:00 AM – 12:00 PM", place: "Fremont Central Park", category: "Service",
      description: "Help pick up litter and restore trails around Lake Elizabeth.", hours: 3 },
    { title: "Halloween Bake Sale", date: "2026-10-24", time: "Lunch", place: "MSJ Quad", category: "Fundraiser",
      description: "Bake or volunteer at our booth — proceeds go to the Pediatric Trauma Program." },
    { title: "Division Council Meeting (DCM)", date: "2026-11-02", time: "4:00 PM", place: "Virtual", category: "Division",
      description: "Monthly division meeting with clubs across Division 12 East." },
    { title: "Food Bank Sorting", date: "2026-11-15", time: "10:00 AM – 1:00 PM", place: "Tri-City Volunteers", category: "Service",
      description: "Sort and pack donations for families in our community.", hours: 3 },
    { title: "Holiday Social", date: "2026-12-12", time: "6:00 PM", place: "MSJ Library", category: "Social",
      description: "Games, snacks, and a gift exchange with the hive." },
  ],

  // Club goals for the year. Set "current" to show a progress bar (leave null to hide it).
  goals: [
    { target: 15, label: "Dues-paid members", note: "Minimum", current: null },
    { target: 40, label: "Combined members", note: "At least — including non-dues-paid", current: null },
    { target: 200, label: "Service hours", note: "", current: null },
    { target: 800, prefix: "$", label: "In the club account", note: "At least", current: null },
  ],
  // Attendance goals for DCMs and major events
  attendance: [
    { event: "DCMs", full: "Division Council Meetings", people: 1, note: "At least 1 person at most DCMs" },
    { event: "FRN", people: 4, note: "" },
    { event: "KCTC / RTC", people: 2, note: "" },
    { event: "DCON", full: "District Convention", people: 2, note: "Hopefully!" },
  ],

  mrpLevels: {
    Bronze: "Starting level — complete the required service hours and fulfillments listed in the CNH MRP guide.",
    Silver: "Build on Bronze with more service hours and additional club involvement.",
    Gold: "For members who go above and beyond in service and leadership.",
    Platinum: "The highest recognition for outstanding dedication to Key Club.",
  },
};
