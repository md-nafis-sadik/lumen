const contactlist = [
  {
    id: 'contact-id-1',
    type: 'favorite',
    active: false,
    name: 'Bella Cote',
    imageURL: 'assets/images/users/avatar-2.jpg',
    badgeCount: 18,
  },
  {
    id: 'contact-id-2',
    type: 'favorite',
    active: false,
    name: 'Steven Jury',
    imageURL: 'assets/images/users/avatar-7.jpg',
  },
  {
    id: 'contact-id-3',
    type: 'favorite',
    active: true,
    name: 'James Pinard',
  },
  {
    id: 'contact-id-4',
    type: 'favorite',
    active: false,
    name: 'Alissa Richards',
    imageURL: 'assets/images/users/avatar-4.jpg',
  },
];

const Messages = [
  {
    id: 'contact-id-5',
    type: 'direct-message',
    name: 'Pickleball Booking',
    imageURL: 'assets/images/users/avatar-3.jpg',
    badgeCount: null,
  },
  {
    id: 'contact-id-6',
    type: 'direct-message',
    name: 'Kathryn Swarey',
    imageURL: 'assets/images/users/avatar-12.jpg',
    badgeCount: 8,
  },
  {
    id: 'contact-id-7',
    type: 'direct-message',
    name: 'Robert Ledonne',
    imageURL: 'assets/images/users/avatar-5.jpg',
    badgeCount: null,
  },
  {
    id: 'contact-id-8',
    type: 'direct-message',
    name: 'Steven Jury',
    imageURL: 'assets/images/users/avatar-7.jpg',
    badgeCount: null,
  },
  {
    id: 'contact-id-9',
    type: 'direct-message',
    name: 'Jessica Lewis',
    badgeCount: null,
  },
  {
    id: 'contact-id-10',
    type: 'direct-message',
    name: 'John Foss',
    imageURL: 'assets/images/users/avatar-10.jpg',
    badgeCount: 5,
  },
  {
    id: 'contact-id-11',
    type: 'direct-message',
    name: 'Gloria Underhill',
    imageURL: 'assets/images/users/avatar-10.jpg',
    badgeCount: null,
  },
];

const actionmenu = [
  {
    id: 'contact-id-1',
    type: 'action-menu',
    name: 'Pickleball Booking',
    imageURL: 'assets/icons/calender-tick-icon.svg',
    badgeCount: null,
  },
  {
    id: 'contact-id-6',
    type: 'action-menu',
    name: 'Events',
    imageURL: 'assets/icons/events-icon.svg',
    badgeCount: 8,
  },
  {
    id: 'contact-id-7',
    type: 'action-menu',
    name: 'Membership',
    imageURL: 'assets/icons/profile-circle-icon.svg',
    badgeCount: null,
  },
  {
    id: 'contact-id-8',
    type: 'action-menu',
    name: 'Shopping',
    imageURL: 'assets/icons/shopping-bag-icon.svg',
    badgeCount: null,
  },
  {
    id: 'contact-id-9',
    type: 'action-menu',
    name: 'Contact Support',
    imageURL: 'assets/icons/headphone-icon.svg',
    badgeCount: null,
  },
];

const channel = [
  {
    id: 'contact-id-12',
    type: 'channel',
    name: 'Landing Design',
    badgeCount: 12,
    imageURL: 'assets/images/users/avatar-10.jpg',
  },
  {
    id: 'contact-id-13',
    type: 'channel',
    name: 'Design Phase 2',
    badgeCount: null,
    imageURL: 'assets/images/users/avatar-10.jpg',
  },
  {
    id: 'contact-id-14',
    type: 'channel',
    name: 'Brand Suggestion',
    badgeCount: 85,
    imageURL: 'assets/images/users/avatar-10.jpg',
  },
  {
    id: 'contact-id-15',
    type: 'channel',
    name: 'Reporting',
    badgeCount: null,
    imageURL: 'assets/images/users/avatar-10.jpg',
  },
];

const chat = [
  {
    id: '1',
    sender: 'left',
    message: ['Good morning 😊 Ready for practice today?'],
    time: '10:07 am',
    isdataSender: false,
  },
  {
    id: '2',
    sender: 'right',
    message: ['Yes! Do we meet at Court 3 again?'],
    time: '10:12 am',
    isdataSender: true,
  },
  {
    id: '3',
    sender: 'left',
    message: [
      'Exactly, same time — 10:30 AM.',
      "Also, don't forget to bring the new paddles 🏓.",
    ],
    time: '10:13 am',
    isdataSender: false,
  },
  {
    id: '5',
    sender: 'right',
    message: ["Got it, can't wait!"],
    time: '10:14 am',
    isdataSender: true,
  },
  {
    id: '6',
    sender: 'left',
    images: ['assets/images/small/img-1.jpg', 'assets/images/small/img-2.jpg'],
    isImage: true,
    isdataSender: false,
    time: '10:15 am',
  },
  {
    id: '7',
    sender: 'right',
    file: {
      name: 'pickleball-tournament-schedule.pdf',
      size: '5.2 MB',
      url: 'assets/images/pdf/pickleball-tournament-schedule.pdf',
    },
    isFile: true,
    isdataSender: true,
    time: '10:16 am',
  },
  {
    id: '8',
    sender: 'left',
    message: ['typing...'],
    isdataSender: false,
    options: [],
  },
];

const channel_chat = [
  {
    id: 1,
    from_id: 2,
    to_id: 1,
    msg: ['Good morning Pickleballers!'],
    isSender: false,
    datetime: '10:07 am',
    image: 'assets/images/users/avatar-2.jpg',
  },
  {
    id: 2,
    from_id: 1,
    to_id: 2,
    has_dropDown: true,
    msg: ['Morning! Is everyone ready for the club match this evening?'],
    isSender: true,
    datetime: '10:12 am',
  },
  {
    id: 3,
    from_id: 7,
    to_id: 6,
    msg: [
      'Absolutely, team meeting at 5 PM before the game.',
      'Let’s aim for a win today 💪',
    ],
    isSender: false,
    datetime: '10:13 am',
    image: 'assets/images/users/avatar-8.jpg',
  },
  {
    id: 5,
    from_id: 1,
    to_id: 2,
    isSender: true,
    msg: ['@Coach Kathryn, Can you review our doubles strategy?'],
    datetime: '10:14 am',
  },
  {
    id: 6,
    from_id: 2,
    to_id: 1,
    msg: ['Sure thing! Let’s discuss it after warm-ups.'],
    image: ['assets/images/users/avatar-2.jpg'],
    isSender: false,
    datetime: '10:15 am',
  },
];

const generatedChats = [
  'Let’s meet at Court 3 around 6:45 PM.',
  'You played really well today. That crosscourt dink was insane!',
  'Can someone bring the portable net for the outdoor game tomorrow?',
  "Don't forget, league playoffs start next week. Let’s practice over the weekend.",
  "I'm still sore from yesterday’s game. That last rally was brutal 😅",
  `I just wanted to share how much pickleball has impacted my life recently. I started playing casually a few months ago, not expecting much—just a fun way to get some exercise and meet people. But it’s turned into so much more than that. The first few weeks were all about learning the rules, getting used to the smaller court, and figuring out how to hit that awkward little plastic ball with holes in it.\n
I wasn’t great, but people were friendly and encouraging. Fast forward to today, and I’m playing in local tournaments, waking up early for 6 AM practice sessions, and watching YouTube videos of professional matches just to learn new techniques. The social side of it is what really surprised me. I’ve made so many friends through the game, and we often hang out even off the court. We organize pickleball potlucks, go for post-game smoothies, and even plan weekend trips together centered around tournaments. It’s not just about winning or losing—it’s about the shared love for the sport and the community that comes with it.\n
Physically, I’m in better shape now than I’ve been in years. My balance, agility, and reaction time have all improved, and I’ve even lost a few pounds without ever feeling like I’m working out. Mentally, I feel sharper, more focused, and just generally happier. I honestly didn’t expect this little game to have such a positive impact on my life, but I’m incredibly grateful it has. If you’ve ever considered trying it out, don’t hesitate. Pickleball might just surprise you too.`,
  'Practice got moved to Sunday due to rain.',
  'Nice job on the serve today! That spin really threw me off.',
  'We should schedule a rematch. That last game was way too close.',
  'I’m ordering new court shoes this week. Any recommendations?',
  'Who’s free for a quick game after work tomorrow?',
  'I left my paddle at the court—has anyone seen it?',
  'The new guy at the club is amazing at drop shots!',
  'Let’s try playing doubles this weekend—way more fun with teams.',
  'Do we have an official team name for the tournament yet?',
  'Reminder: Court reservations open at 8 AM sharp!',
  'Bring extra balls next time—the ones we used today were worn out.',
  'Great job today everyone, our teamwork is really improving!',
  'Should we invest in a ball machine for solo drills?',
  'That wind made playing almost impossible, but we pulled through!',
];

export {
  actionmenu,
  channel,
  channel_chat,
  chat,
  contactlist,
  generatedChats,
  Messages,
};
