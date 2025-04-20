const contactlist = [
    {
        "id": "contact-id-1",
        "type": "favorite",
        "active": false,
        "name": "Bella Cote",
        "imageURL": "assets/images/users/avatar-2.jpg",
        "badgeCount": 18
    },
    {
        "id": "contact-id-2",
        "type": "favorite",
        "active": false,
        "name": "Steven Jury",
        "imageURL": "assets/images/users/avatar-7.jpg"
    },
    {
        "id": "contact-id-3",
        "type": "favorite",
        "active": true,
        "name": "James Pinard"
    },
    {
        "id": "contact-id-4",
        "type": "favorite",
        "active": false,
        "name": "Alissa Richards",
        "imageURL": "assets/images/users/avatar-4.jpg"
    },

]

const Messages = [
    {
        "id": "contact-id-5",
        "type": "direct-message",
        "name": "Pickleball Booking",
        "imageURL": "assets/images/users/avatar-3.jpg",
        "badgeCount": null
    },
    {
        "id": "contact-id-6",
        "type": "direct-message",
        "name": "Kathryn Swarey",
        "imageURL": "assets/images/users/avatar-12.jpg",
        "badgeCount": 8
    },
    {
        "id": "contact-id-7",
        "type": "direct-message",
        "name": "Robert Ledonne",
        "imageURL": "assets/images/users/avatar-5.jpg",
        "badgeCount": null
    },
    {
        "id": "contact-id-8",
        "type": "direct-message",
        "name": "Steven Jury",
        "imageURL": "assets/images/users/avatar-7.jpg",
        "badgeCount": null
    },
    {
        "id": "contact-id-9",
        "type": "direct-message",
        "name": "Jessica Lewis",
        "badgeCount": null
    },
    {
        "id": "contact-id-10",
        "type": "direct-message",
        "name": "John Foss",
        "imageURL": "assets/images/users/avatar-10.jpg",
        "badgeCount": 5
    },
    {
        "id": "contact-id-11",
        "type": "direct-message",
        "name": "Gloria Underhill",
        "imageURL": "assets/images/users/avatar-10.jpg",
        "badgeCount": null
    }
]

const actionmenu = [
    {
        "id": "contact-id-1",
        "type": "action-menu",
        "name": "Pickleball Booking",
        "imageURL": "assets/icons/calender-tick-icon.svg",
        "badgeCount": null
    },
    {
        "id": "contact-id-6",
        "type": "action-menu",
        "name": "Events",
        "imageURL": "assets/icons/events-icon.svg",
        "badgeCount": 8
    },
    {
        "id": "contact-id-7",
        "type": "action-menu",
        "name": "Membership",
        "imageURL": "assets/icons/profile-circle-icon.svg",
        "badgeCount": null
    },
    {
        "id": "contact-id-8",
        "type": "action-menu",
        "name": "Shopping",
        "imageURL": "assets/icons/shopping-bag-icon.svg",
        "badgeCount": null
    },
    {
        "id": "contact-id-9",
        "type": "action-menu",
        "name": "Contact Support",
        "imageURL": "assets/icons/headphone-icon.svg",
        "badgeCount": null
    },
]


const channel =
    [
        {
            "id": "contact-id-12",
            "type": "channel",
            "name": "Landing Design",
            "badgeCount": 12,
            "imageURL": "assets/images/users/avatar-10.jpg",
        },
        {
            "id": "contact-id-13",
            "type": "channel",
            "name": "Design Phase 2",
            "badgeCount": null,
            "imageURL": "assets/images/users/avatar-10.jpg",
        },
        {
            "id": "contact-id-14",
            "type": "channel",
            "name": "Brand Suggestion",
            "badgeCount": 85,
            "imageURL": "assets/images/users/avatar-10.jpg",
        },
        {
            "id": "contact-id-15",
            "type": "channel",
            "name": "Reporting",
            "badgeCount": null,
            "imageURL": "assets/images/users/avatar-10.jpg",
        }
    ]



const chat = [
    {
        "id": "1",
        "sender": "left",
        "message": "Good morning 😊",
        "time": "10:07 am",
        "isdataSender": false,
    },
    {
        "id": "2",
        "sender": "right",
        "message": "Good morning, How are you? What about our next meeting?",
        "time": "10:12 am",
        "isdataSender": true,
    },
    {
        "id": "3",
        "sender": "left",
        "message": "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM",
        "message2": "Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁.",
        "time": "10:13 am",
        "isdataSender": false,
    },

    {
        "id": "5",
        "sender": "right",
        "message": "Wow that's great",
        "time": "10:14 am",
        "isdataSender": true,
    },
    {
        "id": "6",
        "sender": "left",
        "images": [
            "assets/images/small/img-1.jpg",
            "assets/images/small/img-2.jpg"
        ],
        "isImage": true,
        "isdataSender": false,
        "time": "10:15 am",

    },
    {
        "id": "7",
        "sender": "right",
        "file": {
            "name": "design-phase-1-approved.pdf",
            "size": "12.5 MB",
            "url": "assets/images/pdf/design-phase-1-approved.pdf"
        },
        "isFile": true,
        "isdataSender": true,
        "time": "10:16 am",
    },
    {
        "id": "8",
        "sender": "left",
        "message": "typing...",
        "isdataSender": false,
        "options": []
    },
]



const channel_chat = [
    {
        "id": 1,
        "from_id": 2,
        "to_id": 1,
        "msg": "Good morning Everyone",
        "isSender": false,
        "datetime": "10:07 am",
        "image": "assets/images/users/avatar-2.jpg"
    },
    {
        "id": 2,
        "from_id": 1,
        "to_id": 2,
        "has_dropDown": true,
        "msg": "Good morning, How are you? What about our next meeting?",
        "isSender": true,
        "datetime": "10:12 am"
    },
    {
        "id": 3,
        "from_id": 7,
        "to_id": 6,
        "msg": "Yeah everything is fine, Our next meeting tomorrow at 10.00 am AM",
        "message2": "Wow that's great",
        "isSender": false,
        "datetime": "10:13 am",
        "image": "assets/images/users/avatar-8.jpg"
    },
    {
        "id": 5,
        "from_id": 1,
        "to_id": 2,
        "isSender": true,
        "msg": "@Jean Berwick, Please Assign AB-123 to me",
        "datetime": "10:14 am"
    },
    {
        "id": 6,
        "from_id": 2,
        "to_id": 1,
        "msg": "Okay, Sure",
        "image": "assets/images/users/avatar-2.jpg",
        "isSender": false,
        "datetime": "10:15 am"
    }
]


export { contactlist, Messages, channel, chat, channel_chat, actionmenu }