// English words for the site. hi.ts and bn.ts follow exactly the same shape.
// Keep every fact true: these also feed Google results, AI answers and the WhatsApp messages.

const en = {
  skip: 'Skip to content',
  nav: { home: 'Home', services: 'Halls & services', gallery: 'Gallery', contact: 'Contact' },
  landmark: 'On the VIP Road side of Bangur Avenue, near Bank of India and Domino’s Pizza',
  waDefault: "Hello Ridhi Sidhi Banquet, I'd like to check a date for an event.",

  meta: {
    homeTitle: 'Ridhi Sidhi Banquet | Banquet hall in Bangur Avenue, Kolkata',
    description:
      'Banquet hall in Bangur Avenue, Kolkata for weddings, receptions and parties. Two AC floors, up to 300 guests, a lift, and your own caterer allowed.',
    servicesTitle: 'Halls, catering and décor | Ridhi Sidhi Banquet, Bangur Avenue',
    servicesDescription:
      'Two AC floors of about 150 guests each in Bangur Avenue, Kolkata: a hall that splits in two, rooms, a caterers’ kitchen, a lift, partner caterers and decorators.',
    galleryTitle: 'Photo gallery | Ridhi Sidhi Banquet, Bangur Avenue',
    galleryDescription:
      'Photos from Ridhi Sidhi Banquet, Bangur Avenue, Kolkata: decorated entrances, wedding and reception stages, mandaps, the halls, dining and exhibitions.',
    contactTitle: 'Contact and booking | Ridhi Sidhi Banquet, Bangur Avenue, Kolkata',
    contactDescription:
      'Check dates and book Ridhi Sidhi Banquet in Bangur Avenue, Kolkata. WhatsApp or call +91 96811 04488, or email rsibanquet@gmail.com.',
    notFoundTitle: 'Page not found | Ridhi Sidhi Banquet',
  },

  hero: {
    title: 'A banquet hall in Bangur Avenue for weddings, receptions and family celebrations',
    line: 'Air-conditioned halls on two floors for up to 300 guests on VIP Road, with trusted caterers and decorators we work with.',
    ask: 'Ask about your date',
    photoAlt: 'The renovated front of Ridhi Sidhi Banquet by day, with a flower and drape entrance for a wedding',
  },

  ribbon: [
    { value: '300', label: 'guests at most' },
    { value: '2 floors', label: 'about 150 guests each' },
    { value: 'Lift', label: 'to the first floor' },
    { value: 'Full AC', label: 'with event lighting' },
  ],

  occasionsHead: {
    title: 'What people celebrate here',
    sub: 'Tap an occasion to ask about your date. The form fills in the occasion for you.',
  },
  // `photo` is a file inside src/assets/gallery.
  occasions: [
    {
      name: 'Wedding',
      detail: 'Use both floors for the ceremony and dinner, with changing rooms for the families.',
      photo: '03-mandaps-and-canopies/02-red-and-yellow-mandap.jpg',
      page: 'weddings',
    },
    {
      name: 'Reception',
      detail: 'A decorated stage and room for up to 300 guests across two floors.',
      photo: '02-stages/00-white-sofa-stage-with-rose-garlands.jpg',
      page: 'weddings',
    },
    {
      name: 'Engagement or anniversary',
      detail: 'One floor for a smaller, closer gathering of about 150.',
      photo: '02-stages/04-stage-with-pink-drapes.jpg',
      page: 'weddings',
    },
    {
      name: 'Birthday',
      detail: 'Balloon arches, a themed stage and a buffet, from first birthdays to milestones.',
      photo: '02-stages/00-first-birthday-balloon-backdrop.jpg',
      page: 'birthdays',
    },
    {
      name: 'Corporate event',
      detail: 'Meetings, launches and award nights, with sound and a projector arranged on request.',
      photo: '04-halls-and-dining/03-hall-laid-for-a-sit-down-dinner.jpg',
      page: 'corporate',
    },
    {
      name: 'Exhibition or sale',
      detail: 'Open floor space for saree, jewellery and lifestyle exhibitions.',
      photo: '06-exhibitions/01-saree-exhibition-in-the-hall.jpg',
      page: 'exhibitions',
    },
  ],

  included: {
    title: 'Everything arranged for you',
    lede: "We work with caterers, decorators and an electrician who know the halls well, so you don't have to find your own. Prefer your own caterer? That's allowed too.",
    link: 'See the halls and facilities',
    photoAlt: 'Buffet counter with chafing dishes laid out in the hall',
  },
  amenities: [
    'Fully air-conditioned halls with event lighting',
    'Ground floor hall that can be split into two parts',
    'First floor hall with two rooms and a common area',
    'Changing rooms for the families',
    'Separate kitchen for caterers, with two rooms and a passage',
    'Lift to the first floor',
    'Partner caterers, or bring your own',
    'Partner decorators for stage, flowers and lighting',
    'Sound, projector and generator backup through our electrician',
    'DJ and music allowed',
    'Street parking nearby on the VIP Road side',
  ],

  photos: { title: "Events we've hosted", all: 'See all photos' },

  how: {
    title: 'How booking works',
    steps: [
      { title: 'Send your date', text: 'Tell us the occasion, date and rough guest count on WhatsApp or by phone.' },
      { title: 'Visit the halls', text: 'Come and see both floors, the rooms and the kitchen.' },
      { title: 'Confirm the booking', text: 'Lock in your date with the banquet team.' },
      {
        title: 'Choose caterer and décor',
        text: "Pick from our partner caterers and decorators, or bring your own caterer. We'll help coordinate the setup.",
      },
    ],
  },

  form: {
    heading: 'Check your date',
    servicesHeading: 'Ask about prices and dates',
    intro: 'Fill this in and tap the button. WhatsApp opens with your details already written, ready to send to the banquet.',
    callPrompt: 'Prefer to talk? Call',
    name: 'Your name',
    occasion: 'Occasion',
    choose: 'Choose one',
    other: 'Something else',
    date: 'Event date',
    session: 'Lunch or dinner',
    either: 'Either',
    lunch: 'Lunch',
    dinner: 'Dinner',
    guests: 'Number of guests',
    guestsChoose: 'Choose a range',
    guestRanges: ['Under 100', '100–150', '150–200', '200–300', 'Not sure yet'],
    note: 'Anything else',
    optional: '(optional)',
    placeholder: 'Caterer, décor theme, a visit time…',
    submit: 'Send on WhatsApp',
    openWhatsapp: 'Open WhatsApp',
    errName: "Add your name so the banquet knows who's asking.",
    errOccasion: 'Choose the occasion.',
    errBoth: 'Add your name and choose the occasion.',
    msg: {
      hello: "Hello Ridhi Sidhi Banquet, I'd like to enquire about a booking.",
      name: 'Name',
      occasion: 'Occasion',
      date: 'Date',
      session: 'Session',
      guests: 'Guests',
      note: 'Note',
    },
  },

  faqTitle: 'Questions families ask',
  faqs: [
    {
      q: 'How many guests can Ridhi Sidhi Banquet hold?',
      a: 'Up to 300 guests across two floors, about 150 on each. The ground floor hall can also be divided into two parts.',
    },
    {
      q: 'How do I check if my date is available?',
      a: 'Send your date, occasion and guest count on WhatsApp to +91 96811 04488, or call the same number.',
    },
    {
      q: 'Do you provide catering?',
      a: "We don't cook ourselves. We work with partner caterers who know our kitchen, and you can also bring your own caterer. There is a separate kitchen with two rooms for the caterer.",
    },
    {
      q: 'Do you arrange decoration?',
      a: 'Yes, through our partner decorators, who handle the stage, flowers and lighting to your theme.',
    },
    { q: 'Is DJ or loud music allowed?', a: 'Yes, DJ and music are allowed.' },
    {
      q: 'Is there parking?',
      a: 'There is no private parking. Guests park on the street nearby, on the VIP Road side of Bangur Avenue.',
    },
    { q: 'Is there a lift?', a: "Yes, a lift goes to the first floor, so elders don't need the stairs." },
    {
      q: 'Where exactly is the banquet?',
      a: '117/2, Block C, Bangur Avenue, Kolkata 700055, on the VIP Road side near Bank of India and Domino’s Pizza.',
    },
    {
      q: 'Can we visit the hall before booking?',
      a: 'Yes. Message or call to fix a time and the team will show you both floors, the rooms and the kitchen.',
    },
    {
      q: 'When can we visit or call?',
      a: 'Every day from 10 am to 8 pm. You can send a WhatsApp message any time, and the team replies during these hours.',
    },
  ],

  hours: { label: 'Visits and calls', value: '10 am – 8 pm, every day' },

  occasionUi: {
    pointsTitle: 'How the venue works for you',
    photosTitle: 'From past events',
    faqTitle: 'Common questions',
    others: 'Other occasions',
  },
  // One page per main occasion. `formOccasion` must match a name in `occasions` so the form preselects it.
  occasionPages: {
    weddings: {
      nav: 'Weddings & receptions',
      metaTitle: 'Wedding venue in Bangur Avenue, Kolkata | Ridhi Sidhi Banquet',
      metaDescription:
        'Wedding, reception and boubhat venue in Bangur Avenue, Kolkata. Two AC floors for up to 300 guests, changing rooms, a lift, and your own caterer allowed.',
      title: 'Wedding and reception venue in Bangur Avenue',
      lede: 'Ridhi Sidhi Banquet hosts weddings, receptions, boubhat and engagements for up to 300 guests across two air-conditioned floors on VIP Road, Kolkata.',
      serviceType: 'Wedding and reception venue',
      formOccasion: 'Wedding',
      points: [
        'Hold the ceremony on one floor and dinner on the other, or use both for a 300-guest reception.',
        'The ground floor hall divides into two, so the stage and the dining can stay separate.',
        "Two rooms on the first floor work as changing rooms for the bride's and groom's families.",
        'Our partner decorators set up the mandap, stage, entrance and flowers to your theme.',
        'Use one of our partner caterers or bring your own; they get a separate kitchen.',
        "A lift to the first floor means elders don't need the stairs.",
        'DJ and music are allowed.',
      ],
      photos: [
        '03-mandaps-and-canopies/02-red-and-yellow-mandap.jpg',
        '02-stages/00-peach-drape-stage-with-floral-canopy.jpg',
        '01-entrance-and-exterior/00-renovated-entrance-lit-for-an-evening-event.jpg',
        '03-mandaps-and-canopies/00-floral-arch-inside-the-hall.jpg',
      ],
      faqs: [
        { q: 'How many wedding guests can the banquet hold?', a: 'Up to 300 across both floors, or about 150 if you use one floor.' },
        {
          q: 'Can we bring our own caterer for the wedding?',
          a: 'Yes. Bring your own caterer or choose one of our partner caterers. The caterer gets a separate kitchen with two rooms.',
        },
        { q: 'Is there space for the families to get ready?', a: 'Yes, the two rooms on the first floor are used as changing rooms.' },
        { q: 'Who decorates the mandap and stage?', a: 'Our partner decorators, to the theme and budget you choose.' },
      ],
    },
    birthdays: {
      nav: 'Birthday parties',
      metaTitle: 'Birthday party hall, Bangur Avenue, Kolkata | Ridhi Sidhi Banquet',
      metaDescription:
        'Birthday party hall in Bangur Avenue, Kolkata: one AC floor for about 150 guests or both for 300, balloon decoration, DJ allowed, own caterer welcome.',
      title: 'Birthday party hall in Bangur Avenue',
      lede: 'From first birthdays to 50th celebrations, Ridhi Sidhi Banquet gives you an air-conditioned floor for about 150 guests, or both floors for up to 300, on VIP Road, Kolkata.',
      serviceType: 'Birthday party venue',
      formOccasion: 'Birthday',
      points: [
        'Book one floor for a family party, or both for a big celebration.',
        'Partner decorators do balloon arches, themed stages and photo corners.',
        'DJ and music are allowed, so the party can dance.',
        'Choose a partner caterer or bring the caterer you already trust.',
        'The lift helps grandparents reach the first floor.',
      ],
      photos: [
        '02-stages/00-first-birthday-balloon-backdrop.jpg',
        '01-entrance-and-exterior/00-pink-balloon-arch-at-the-entrance.jpg',
        '02-stages/00-pink-balloon-birthday-backdrop.jpg',
        '02-stages/00-seventieth-birthday-sequin-backdrop.jpg',
      ],
      faqs: [
        { q: 'Can we book just one floor for a smaller birthday?', a: 'Yes, each floor holds about 150 guests.' },
        { q: 'Do you arrange balloon decoration?', a: 'Yes, through our partner decorators, including balloon arches and themed stages.' },
        { q: 'Is a DJ allowed at birthday parties?', a: 'Yes, DJ and music are allowed.' },
      ],
    },
    corporate: {
      nav: 'Corporate events',
      metaTitle: 'Corporate event venue, Bangur Avenue, Kolkata | Ridhi Sidhi Banquet',
      metaDescription:
        'Corporate event and meeting venue on VIP Road, Bangur Avenue, Kolkata. Up to 300 guests, full AC, with sound, projector and generator backup arranged.',
      title: 'Corporate event venue in Bangur Avenue',
      lede: 'Ridhi Sidhi Banquet hosts meetings, dealer meets, product launches and award nights for up to 300 people, on VIP Road in North Kolkata.',
      serviceType: 'Corporate event and meeting venue',
      formOccasion: 'Corporate event',
      points: [
        'Seat a meeting of about 150 on one floor, or use both floors for up to 300.',
        'The ground floor hall splits into two for a session room and a lunch area.',
        'Sound, projector, screen and generator backup are arranged through our electrician.',
        'Fully air-conditioned, with event lighting.',
        'Partner caterers for tea breaks and lunch, or bring your own.',
        'On VIP Road, which connects to the airport, for out-of-town guests.',
      ],
      photos: [
        '04-halls-and-dining/03-hall-laid-for-a-sit-down-dinner.jpg',
        '04-halls-and-dining/00-round-tables-for-a-reception.jpg',
        '04-halls-and-dining/00-buffet-line-in-the-hall.jpg',
      ],
      faqs: [
        { q: 'Is a projector available?', a: 'Yes, a projector, screen and sound system are arranged through our electrician.' },
        { q: 'Is there power backup?', a: 'Yes, generator backup is arranged through our electrician.' },
        {
          q: 'Is there parking for guests?',
          a: 'There is no private parking. Guests park on the street nearby, on the VIP Road side of Bangur Avenue.',
        },
      ],
    },
    exhibitions: {
      nav: 'Exhibitions & sales',
      metaTitle: 'Exhibition hall in Bangur Avenue, Kolkata | Ridhi Sidhi Banquet',
      metaDescription:
        'AC hall in Bangur Avenue, Kolkata for saree, jewellery and lifestyle exhibitions. Open floor space on two levels, event lighting and a lift.',
      title: 'Exhibition and sale hall in Bangur Avenue',
      lede: "Saree, jewellery and lifestyle exhibitions use Ridhi Sidhi Banquet's open, air-conditioned floors on VIP Road, within easy reach of shoppers from Bangur Avenue, Lake Town and Dum Dum.",
      serviceType: 'Exhibition and sale hall',
      formOccasion: 'Exhibition or sale',
      points: [
        'Open floor space on two levels for racks, tables and display stands.',
        'The ground floor splits into two for separate sellers or sections.',
        'Fully air-conditioned, with event lighting for displays.',
        'A lift to the first floor for shoppers carrying bags.',
      ],
      photos: ['06-exhibitions/01-saree-exhibition-in-the-hall.jpg', '04-halls-and-dining/00-buffet-line-in-the-hall.jpg'],
      faqs: [
        {
          q: 'Which floor works best for an exhibition?',
          a: 'Both work. The ground floor is at street level and can be split into two sections; the first floor is reached by stairs or the lift.',
        },
        { q: 'Is the hall air-conditioned?', a: 'Yes, both floors are fully air-conditioned.' },
        {
          q: 'How do I check dates for an exhibition?',
          a: 'Send your dates and the kind of exhibition on WhatsApp to +91 96811 04488.',
        },
      ],
    },
  },

  location: { title: 'Finding the banquet', directions: 'Get directions', lost: "Call if you're lost:" },

  services: {
    title: 'Halls, catering and décor',
    lede: 'We bring the hall, partner caterers, decorators and an electrician together, so you deal with one place from the first visit to the last guest leaving.',
    sections: [
      {
        id: 'ground-floor',
        title: 'Ground floor',
        photo: '04-halls-and-dining/00-ground-floor-hall-with-glass-doors.jpg',
        alt: 'The ground floor hall with marble panelling, glass doors and red-and-yellow drapes',
        body: 'A full hall of about 150 guests that can be divided into two parts, so you can keep the stage and dining separate or run two smaller functions.',
      },
      {
        id: 'first-floor',
        title: 'First floor',
        photo: '04-halls-and-dining/00-first-floor-hall-with-pillar.jpg',
        alt: 'The first floor hall with a chandelier, a pillar and a brick-pattern wall',
        body: 'A hall of about 150 guests with two rooms and a common area beside it, useful as changing rooms for the families. A lift goes up from the ground floor.',
      },
      {
        id: 'catering',
        title: 'Catering and kitchen',
        photo: '04-halls-and-dining/00-buffet-line-in-the-hall.jpg',
        alt: 'Buffet line with chafing dishes along the hall',
        body: "We don't cook ourselves. We work with partner caterers who know the venue, and you are welcome to bring your own. The caterer gets a separate kitchen with two rooms and a passage.",
      },
      {
        id: 'decor',
        title: 'Decoration and lighting',
        photo: '03-mandaps-and-canopies/01-white-flower-canopy.jpg',
        alt: 'Canopy of white flowers over pillars in the hall',
        body: 'Our partner decorators handle the entrance, stage, mandap, flowers and lighting to your theme. Sound, a projector and generator backup are arranged through our electrician.',
      },
    ],
    facilitiesTitle: 'Facilities',
  },

  gallery: {
    title: 'Gallery',
    lede: 'Weddings, receptions, birthdays and exhibitions held at Ridhi Sidhi Banquet. Tap a photo to see it larger.',
    sectionsLabel: 'Gallery sections',
    // Section headings, keyed by gallery folder name without its number.
    categories: {
      'entrance-and-exterior': 'Entrance and exterior',
      stages: 'Stages',
      'mandaps-and-canopies': 'Mandaps and canopies',
      'halls-and-dining': 'Halls and dining',
      'flowers-and-details': 'Flowers and details',
      exhibitions: 'Exhibitions',
    } as Record<string, string>,
    showCaptions: true,
    ctaText: 'Want to see the halls in person, or photos of a particular setup?',
    follow: 'More recent events on',
    and: 'and',
    message: 'Message us',
    waMessage: 'Hello Ridhi Sidhi Banquet, I saw your gallery and would like to know more.',
    empty: "New photos are on their way. Until then, ask on WhatsApp and we'll send pictures of recent events.",
    askPhotos: 'Ask for photos',
    viewer: 'Photo viewer',
    close: 'Close',
    prev: 'Previous photo',
    next: 'Next photo',
  },

  contact: {
    title: 'Contact and booking',
    whatsapp: 'WhatsApp',
    phone: 'Phone',
    email: 'Email',
    instagram: 'Instagram',
    facebook: 'Facebook',
  },

  notFound: {
    title: "This page doesn't exist",
    body: 'The link may be old.',
    home: 'Go to the home page',
    contact: 'contact the banquet',
    or: 'or',
  },

  footer: {
    occasions: 'Occasions',
    contact: 'Contact',
    pages: 'Pages',
    directions: 'Get directions',
    place: 'Bangur Avenue, Kolkata',
  },
  bar: { call: 'Call', whatsapp: 'WhatsApp' },
  language: 'Language',
};

export type Dict = typeof en;
export default en;
