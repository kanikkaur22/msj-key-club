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
  dues: { amount: "$10" },
  secretary: "2023–2024 Club Secretary Gitali",
  links: {
    division: "https://cnhkeyclub.org/",   // replace with the Division 12 East site
    district: "https://cnhkeyclub.org/",
    mrp: "https://cnhkeyclub.org/",        // replace with the MRP requirements page
    joinForm: "https://docs.google.com/forms/d/e/1FAIpQLSe7C7E6-EDNABAYABYwzYHd2ATHWpNh25tOTW3Xxr3UxFadrg/viewform",
    duesForm: "https://tinyurl.com/msjkeydues2627",
  },

  // Officer board — replace "Officer name" with real names. "photo" is optional
  // (e.g. "assets/officers/jane.jpg"); without a photo, initials are shown.
  officerYear: "2026–2027",
  officers: {
    executives: [
      { role: "President", name: "Riya", grade: "12", bio: "Hi everyone! I'm Riya, and I am so excited to lead this club and serve our community as MSJ Key Club's 2026-2027 president. In my free time, I love drawing, singing, cooking, watching soccer, and building F1 car legos!", photo: "assets/officers/riya.jpg" },
      { role: "Vice President", name: "Shravika", grade: "12", bio: "Hey, my name is Shravika, and I'm one of the Co-Vice Presidents! I help out with planning events and supporting the club however I can. In my free time, I enjoy playing piano, drawing, and playing badminton!", photo: "assets/officers/shravika.jpg" },
      { role: "Vice President", name: "Michelle", grade: "11", bio: "Hi there! I'm Michelle, and as Key Club VP I help organize volunteer events and keep our members engaged. In my free time, you'll find me hunting for the good cafe or sleeping on my floor.", photo: "assets/officers/michelle.jpg" },
      { role: "Secretary", name: "Celina", grade: "12", bio: "My name is Celina and I love crocheting, going out to study and trying new foods. If you have any questions about membership or division events feel free to ask me!", photo: "assets/officers/celina.jpg" },
      { role: "Treasurer", name: "Deborah", grade: "11", bio: "As treasurer for this club, my job consists of planning all our fundraisers and making sure all forms are turned in on time. I also turn in requisition forms to request reimbursements for all our fundraising or event items.", photo: "assets/officers/deborah.jpg" },
      { role: "Bulletin Editor", name: "Kanik", grade: "10", bio: "Hello all! My name is Kanik and I'm the bulletin editor for the 26-27 term! Outside of school, you can find me watching the latest show on Netflix, listening to music, and building LEGO sets!", photo: "assets/officers/kanik.jpg" },
    ],
    nonExecutives: [
      { role: "Activities Coordinator", name: "Elizabeth", grade: "11", bio: "HIII!! My name's Elizabeth and I'm one of the co-activity coordinators, which basically means I help plan and put together the service events we have! When I'm not looking for new events to plan, I'll probably be crocheting while I rewatch a sitcom :P.", photo: "assets/officers/elizabeth.jpg" },
      { role: "Activities Coordinator", name: "Vedansh", grade: "10", bio: "Hey key clubbers!!! I'm one of the Co-Activity Coordinators for the 26-27 school year which means I help to plan and organize all the fun events we do! In my free time, I love to hang out with friends, do anything Pokemon-related (especially Pokemon Go), and watch TV!", photo: "assets/officers/vedansh.jpg" },
      { role: "Meetings Coordinator", name: "Anant", grade: "10", bio: "Anant is a sophomore at MSJ, and he enjoys playing piano and reading books. At Key Club, he is in charge of preparing the slideshows for our meetings.", photo: "assets/officers/anant.jpg" },
      { role: "Publicist", name: "Aarna", grade: "11", bio: "As the publicist, I create content whether it's Instagram posts or reels for the MSJ Key Club account. Outside of being the publicist for Key Club, I like to watch TV and read.", photo: "assets/officers/aarna.jpg" },
    ],
  },

  // ===== Events =====
  // The club's Google Calendar ID (Google Calendar → Settings → your club calendar →
  // "Integrate calendar" → Calendar ID, e.g. "abc123@group.calendar.google.com").
  // The calendar must be public: "Access permissions" → "Make available to public".
  calendarId: "b374c234bd7eeef85aa92026c62116c8d6049e4dc35a9b34d4c1f02403b854a2@group.calendar.google.com",

  // ===== Impact page =====
  // Real numbers from recent terms. Each shows as a big stat card.
  // Example: { value: 1250, label: "Service hours logged", note: "2025–2026" }
  // Use prefix: "$" for money. Leave the list empty to hide the section.
  impactStats: [
    { value: 17, label: "Dues-paid members" },
    { value: 70, suffix: "+", label: "Total members", note: "On our mailing list" },
    { value: 7, label: "Service events", note: "Last year" },
    { value: 200, label: "Service hours given out" },
    { value: 400, prefix: "$", label: "Fundraised", note: "This year" },
  ],

  // Recent events with photos. Put photos in assets/impact/ and reference them here.
  // Example: { title: "Park Cleanup", date: "2026-09-20", photo: "assets/impact/park-cleanup.jpg",
  //            text: "18 members picked up 40 bags of litter at Central Park." }
  // Leave the list empty to hide the section.
  recentImpact: [
    { title: "Kids Against Hunger Meal Packing", date: "2025-09-13", photo: "assets/impact/kah-group.jpg",
      text: "Members packed and boxed meals with Kids Against Hunger in the MSJ gym to help feed families around the world and around the corner." },
    { title: "Shinn Park Garden", date: "2026-10-01", photo: "assets/impact/shinn-garden-2.jpg",
      text: "Members volunteered outdoors helping care for the garden at Shinn Park in Fremont." },
  ],

  // Photo gallery on the Impact page. Add photos to assets/impact/ and list them here.
  impactGallery: [
    { src: "assets/impact/kah-shirts.jpg", caption: "Kids Against Hunger meal packing" },
    { src: "assets/impact/kah-packing.jpg", caption: "Packing meals" },
    { src: "assets/impact/kah-sealing.jpg", caption: "Sealing meal bags" },
    { src: "assets/impact/kah-boxes.jpg", caption: "Boxing up meals" },
    { src: "assets/impact/kah-duo.jpg", caption: "Kids Against Hunger meal packing" },
    { src: "assets/impact/kah-filling.jpg", caption: "Filling boxes" },
    { src: "assets/impact/kah-banner.jpg", caption: "Kids Against Hunger meal packing" },
    { src: "assets/impact/kah-table.jpg", caption: "Sealing station" },
    { src: "assets/impact/kah-checkin.jpg", caption: "Volunteer check-in" },
    { src: "assets/impact/club-group.jpg", caption: "MSJ Key Club" },
    { src: "assets/impact/shinn-garden-2.jpg", caption: "Shinn Park garden" },
    { src: "assets/impact/shinn-garden.jpg", caption: "Shinn Park garden" },
  ],

  mrpLevels: {
    Bronze: "Starting level — complete the required service hours and fulfillments listed in the CNH MRP guide.",
    Silver: "Build on Bronze with more service hours and additional club involvement.",
    Gold: "For members who go above and beyond in service and leadership.",
    Platinum: "The highest recognition for outstanding dedication to Key Club.",
  },
};
