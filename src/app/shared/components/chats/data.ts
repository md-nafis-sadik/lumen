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
  `Last night’s match under the lights was probably one of the most intense games I’ve played this year. The score was neck and neck the entire time, and I could feel the energy from the crowd. What really stood out was how well our team communicated—every point felt like a joint effort. My paddle control was better than usual, especially at the kitchen line. I landed two crosscourt dinks that forced our opponents to pop up the ball, giving us easy putaways. After the match, several players came up to compliment our strategy and teamwork. That kind of feedback makes the hard work worth it. I’m excited to keep building on this momentum.`,

  'You’ve really improved your serve placement—keep it up!',

  `I've been experimenting with a new paddle this week, and the difference is incredible. The carbon fiber face gives me much more control and touch, especially during dinks and drop shots. At first, I was skeptical because the grip felt smaller than I’m used to, but after three matches, I’ve completely adjusted. It’s amazing how just a slight change in equipment can elevate your confidence and technique. I’ve even noticed fewer unforced errors and better consistency with my spin serves. If anyone’s thinking of upgrading, I’d highly recommend trying a few demo paddles before committing—it really makes a difference.`,

  'Great hustle on that last rally—you didn’t give up on a single point!',

  `Our community pickleball night has grown from 6 players to over 30 in just a few months. It’s awesome to see new faces every week, from teenagers to retirees. We’ve started organizing beginner-friendly courts and more advanced round-robins to accommodate everyone. Last Friday, we even had music playing and a food truck parked nearby—it felt like a festival. What really warms my heart is seeing people who met on the court now becoming good friends outside of it. That’s the beauty of this sport—it brings people together in such a unique and joyful way.`,

  'I’ll bring extra balls tomorrow, just in case we run low.',

  `I watched the PPA Tour semifinals yesterday and was blown away by the level of play. The angles those pros hit, especially on the backhand flicks and ATPs (around-the-post shots), are insane. It’s given me a new appreciation for shot selection and footwork. I took notes during the match and plan to try a few of their strategies in our doubles game this weekend—especially the staggered positioning and how they reset the ball after fast volleys. If you haven’t seen it yet, definitely check out the replay on YouTube. It’s like a masterclass in competitive pickleball.`,

  'Game at 7 AM tomorrow—don’t be late!',

  `After taking a short break due to a shoulder injury, today was my first day back on the court—and it felt incredible. I was worried I’d be rusty, but muscle memory kicked in pretty quickly. I took it easy during warm-ups and focused more on placement than power. Everyone was super welcoming and even adjusted their pace to help me ease back in. I missed the game more than I realized. There’s something about the rhythm of rallies and the satisfaction of a perfect drop shot that you can’t get anywhere else. Looking forward to rebuilding my stamina again.`,

  'Try switching sides next round—we’ll have a better angle.',

  `We need to have a serious talk about strategy before our next tournament. Last match, we kept getting caught off guard by lobs and didn’t communicate well on switching sides. If we designate who covers middle balls and commit to staying at the kitchen line, we’ll cut our errors in half. Also, let’s start calling out spin serves and deep returns out loud to stay in sync. I know we’ve got the skills—we just need better coordination. Let’s plan a 30-minute session after Wednesday’s games to go over these tactics together.`,

  'I’ll reserve Court 2 for Thursday evening.',

  `The pickleball ladder league has been such a motivating experience for me. Every week, I face new players with different styles, which pushes me to adapt and grow. Last night, I played against someone who relied heavily on soft dinks and lured me into making mistakes at the net. It forced me to slow down, be more patient, and read the game better. I’ve started recording my matches to analyze them afterward and it’s helped tremendously. Small adjustments in paddle angle or positioning can make a huge difference over the course of a game.`,

  'Nice shot down the line—clean and fast!',

  `Tonight’s match was a rollercoaster. We started off strong, taking the first game 11-4, but lost focus in the second and barely scraped by 13-11 in the third. It taught me how crucial it is to stay mentally locked in, especially when fatigue sets in. I caught myself rushing serves and overreaching at the net, which cost us a few points. But I also had some of my best moments—like returning a slam with a soft block and catching them off guard. Even when things got tense, we stuck together and pulled through.`,

  'I’ll be bringing snacks and water for everyone on Saturday!',

  `One thing I’ve learned playing mixed doubles is how important it is to play to your partner’s strengths. If they’re better at net play, I stay back and focus on setting them up. Communication is key—we’ve developed subtle signals for poaching and switching, which has made our teamwork seamless. It’s not about who takes the shot—it’s about what gives us the best chance of winning the point. That mindset shift has made me a better teammate and more thoughtful player overall.`,

  "Who's bringing the score sheets for the weekend games?",

  `During today’s drills, I realized my backhand is still my biggest weakness. I’ve been avoiding it too long and it’s holding me back, especially during fast-paced exchanges. So I’m committing to practicing nothing but backhands for the next two weeks—whether it’s drives, blocks, or slices. I know it’ll be frustrating at first, but I’m confident that focusing on this one area will make a noticeable difference in my overall performance. Let’s see how much progress I can make by the end of the month.`,

  'That rally was insane—almost 30 hits!',
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
