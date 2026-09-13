/**
 * Every fact about the school lives here so it can be corrected in one sitting
 * with the proprietor. Anything marked PLACEHOLDER has not been confirmed.
 *
 * Confirmed from public sources (Sep 2026):
 *  - Names: Gudmerc Kiddies Academy and Gudmerc High School (Edusko, YouTube, WAEC-derived lists).
 *  - Location: Kurudu, along the Orozo–Karshi road (Edusko).
 *  - Founded 8 September 2003 by Pastor A. A. Tanda (Edusko).
 *  - Day school, Nigerian curriculum, WAEC exam centre (Edusko, WAEC centre number).
 *  - Tagline "A place for future giants" (Edusko listing).
 *  - Took part in the 2025 FCT Inter-Private Schools Debate Competition (YouTube).
 *  - Uniform: blue and white gingham (YouTube).
 * Everything else is a realistic placeholder.
 */
export const site = {
  name: 'Gudmerc Schools', // PLACEHOLDER umbrella name for the two schools
  shortName: 'Gudmerc',
  tagline: 'A place for future giants.',
  founded: 2003,
  foundedDate: '8 September 2003',
  founder: 'Pastor A. A. Tanda',
  isDemo: true,

  // PLACEHOLDER numbers. Replace with the school office and admissions lines.
  phoneDisplay: '0800 000 0000',
  phoneTel: '+2348000000000',
  whatsapp: '2348000000000',
  email: 'admissions@gudmercacademy.com', // PLACEHOLDER (domain is the school's, currently parked)

  address: {
    line1: 'Along Orozo–Karshi Road', // confirmed
    line2: 'Kurudu, Abuja',
    landmarks: [
      // PLACEHOLDER directions, to be confirmed on a visit
      'From Kurudu Junction, follow the Orozo–Karshi road towards Orozo.',
      'The school gate is on the right, before Kurudu Police Station.',
      'Parking is inside the compound. Ask for the admissions office at the gate.',
    ],
    mapsQuery: 'Gudmerc Kiddies Academy, Kurudu, Abuja',
  },

  hours: [
    { label: 'School day', value: 'Mon to Fri, 7:30am to 2:30pm' },
    { label: 'Early Years', value: 'Mon to Fri, 7:30am to 1:00pm' },
    { label: 'After-school club', value: 'Mon to Fri, until 5:00pm' },
    { label: 'Admissions office', value: 'Mon to Fri, 8:00am to 4:00pm' },
  ],

  // PLACEHOLDER dates for the 2027/28 admissions cycle.
  admissions: {
    session: '2027/28',
    examDate: 'Saturday 20 March 2027',
    examDateShort: 'Sat 20 Mar 2027',
    examTime: '9:00am',
    resumption: 'Monday 13 September 2027',
    steps: [
      {
        title: 'Enquire',
        body: 'Send us a WhatsApp message or visit the office. We answer questions about fees, classes, and transport the same day.',
        when: 'Now until March 2027',
      },
      {
        title: 'Entrance assessment',
        body: 'A short assessment in English and Mathematics. Early Years children are invited for a play session instead.',
        when: 'Saturday 20 March 2027, 9:00am',
      },
      {
        title: 'Meeting and offer',
        body: 'Parents meet the head teacher, see the classrooms, and receive an offer letter within one week.',
        when: 'March to May 2027',
      },
      {
        title: 'Resumption',
        body: 'Pay the acceptance fee to hold the place. Uniforms and books are available on campus before term starts.',
        when: 'Monday 13 September 2027',
      },
    ],
  },

  schools: [
    {
      id: 'early',
      name: 'Early Years',
      ages: 'Ages 1 to 5',
      classes: 'Creche, Nursery 1 and 2, Reception',
      hours: '7:30am to 1:00pm',
      exams: 'No exams. Termly progress reports.',
      day: 'Phonics, numbers, songs, and outdoor play, with a nap for the youngest.',
      ratio: 'One adult to eight children', // PLACEHOLDER
      img: '/images/early.jpg',
      alt: 'A nursery pupil concentrating on a colouring activity',
    },
    {
      id: 'primary',
      name: 'Primary',
      ages: 'Ages 5 to 11',
      classes: 'Primary 1 to 6',
      hours: '7:30am to 2:00pm',
      exams: 'National Common Entrance in Primary 6',
      day: 'English, Mathematics, Basic Science, and a reading period every day.',
      ratio: 'One teacher to twenty pupils', // PLACEHOLDER
      img: '/images/primary.jpg',
      alt: 'Primary pupils in gingham uniforms working at their desks',
    },
    {
      id: 'secondary',
      name: 'High School',
      ages: 'Ages 11 to 17',
      classes: 'JSS1 to SS3',
      hours: '7:30am to 2:30pm',
      exams: 'BECE in JSS3. WAEC and NECO in SS3, with JAMB preparation.',
      day: 'Science and arts streams from SS1, a well-used laboratory, and debate on Fridays.',
      ratio: 'One teacher to twenty-five students', // PLACEHOLDER
      img: '/images/secondary.jpg',
      alt: 'Secondary students in a science practical',
    },
  ],

  // PLACEHOLDER fee ranges per term, in naira. Session = three terms.
  fees: [
    { level: 'Early Years', perTerm: [85000, 120000] as const },
    { level: 'Primary', perTerm: [120000, 160000] as const },
    { level: 'High School', perTerm: [160000, 220000] as const },
  ],
  feesInclude: ['Tuition', 'Textbooks and workbooks', 'Continuous assessment and exams', 'Sick bay and first aid', 'Clubs and sports'],
  feesExclude: ['Uniforms and sportswear', 'School bus, by route', 'After-school club', 'External exam fees, WAEC and NECO'],

  // PLACEHOLDER results. Replace with the school's own figures.
  results: {
    waec: [
      { year: 2023, fiveCredits: 84 },
      { year: 2024, fiveCredits: 88 },
      { year: 2025, fiveCredits: 92 },
    ],
    proofs: [
      { title: 'WAEC and NECO exam centre', body: 'Students sit their exams on our own campus, in rooms they know.' },
      { title: '2025 FCT Inter-Private Schools Debate', body: 'Our High School team represented Kurudu at the FCT competition.' },
      { title: 'BECE, every candidate placed', body: 'Every JSS3 candidate in the last three years progressed to SS1.' },
    ],
    universities: [
      'University of Abuja',
      'Ahmadu Bello University',
      'University of Nigeria, Nsukka',
      'Bingham University',
      'Nile University',
      'Baze University',
      'University of Lagos',
      'Covenant University',
      'Federal University of Technology, Minna',
      'University of Jos',
    ],
  },

  day: [
    { time: '7:15am', title: 'Gates open', body: 'Breakfast club for early drop-offs. A teacher is at the gate.', img: '/images/day-1.jpg' },
    { time: '7:45am', title: 'Assembly', body: 'Prayers, the anthem, and notices. Fifteen minutes, then to class.', img: '/images/day-2.jpg' },
    { time: '8:00am', title: 'Lessons', body: 'Four periods before break. Reading period every day for Primary.', img: '/images/day-3.jpg' },
    { time: '10:30am', title: 'Break', body: 'Snacks from home or the tuck shop, and the field.', img: '/images/day-4.jpg' },
    { time: '12:15pm', title: 'Lunch', body: 'Supervised lunch. Early Years children rest afterwards.', img: '/images/day-5.jpg' },
    { time: '2:30pm', title: 'Close and pick-up', body: 'Pick-up cards checked at the gate. Buses leave at 2:45pm.', img: '/images/day-6.jpg' },
    { time: 'Until 5pm', title: 'After-school club', body: 'Homework help, chess, and reading, for parents who close late.', img: '/images/day-7.jpg' },
  ],

  // PLACEHOLDER safety details, to be confirmed.
  safety: [
    { icon: 'shield', title: 'Gated compound with security', body: 'One entrance, guarded during school hours.' },
    { icon: 'camera', title: 'CCTV at the gate and corridors', body: 'Recorded and reviewed by the head teacher.' },
    { icon: 'heart', title: 'Sick bay with a nurse on duty', body: 'Parents are called first, then the nearest hospital.' },
    { icon: 'card', title: 'Pick-up card system', body: 'Children leave only with the adult on the card.' },
    { icon: 'bus', title: 'School bus with an attendant', body: 'Routes across Kurudu, Jikwoyi, and Orozo.' },
    { icon: 'fire', title: 'Fire drill every term', body: 'Assembly points are marked and rehearsed.' },
  ],

  // Current session, PLACEHOLDER dates.
  terms: [
    { name: 'First term', dates: 'Mon 14 Sep to Fri 11 Dec 2026', midterm: 'Mon 26 to Fri 30 Oct' },
    { name: 'Second term', dates: 'Mon 11 Jan to Fri 9 Apr 2027', midterm: 'Mon 22 to Fri 26 Feb' },
    { name: 'Third term', dates: 'Mon 3 May to Fri 23 Jul 2027', midterm: 'Mon 14 to Fri 18 Jun' },
  ],
  keyDates: [
    { label: 'Open day', date: 'Saturday 6 March 2027' },
    { label: 'Entrance assessment', date: 'Saturday 20 March 2027' },
    { label: 'Inter-house sports', date: 'Friday 26 March 2027' },
    { label: 'Graduation and prize day', date: 'Saturday 17 July 2027' },
  ],

  proprietorNote:
    'We opened in 2003 with a handful of children and a promise to their parents: your child will be known by name, taught properly, and kept safe. Twenty-three years on, the promise is the same. Come and see the school on an ordinary day.',

  people: [
    { name: 'Pastor A. A. Tanda', role: 'Founder and Proprietor', initials: 'AT' }, // confirmed name
    { name: 'Mrs. Ngozi Eze', role: 'Head Teacher, Kiddies Academy', initials: 'NE' }, // PLACEHOLDER
    { name: 'Mr. Yusuf Bello', role: 'Principal, High School', initials: 'YB' }, // PLACEHOLDER
    { name: 'Mrs. Grace Okon', role: 'Head of Early Years', initials: 'GO' }, // PLACEHOLDER
  ],

  gallery: [
    { src: '/images/gallery-1.jpg', alt: 'Students walking together across the school compound' },
    { src: '/images/gallery-2.jpg', alt: 'A teacher helping a pupil at her desk' },
    { src: '/images/gallery-3.jpg', alt: 'Pupils raising their hands in class' },
    { src: '/images/gallery-4.jpg', alt: 'Children playing during break' },
    { src: '/images/gallery-5.jpg', alt: 'A student reading in the library corner' },
    { src: '/images/gallery-6.jpg', alt: 'Students at work in the laboratory' },
    { src: '/images/gallery-7.jpg', alt: 'Nursery children at a group activity' },
    { src: '/images/gallery-8.jpg', alt: 'The school building' },
  ],

  developer: { name: 'Samad', url: '#' }, // PLACEHOLDER: your name and portfolio link
} as const

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}`
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&output=embed`

export const naira = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 })
