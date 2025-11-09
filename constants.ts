import { StudyMaterial, Quiz } from './types';

export const STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'mat1',
    title: 'Indian Polity Notes',
    description: 'Comprehensive notes on the Indian Constitution and political system.',
    type: 'pdf',
    url: '#',
  },
  {
    id: 'mat2',
    title: 'Modern Indian History Timeline',
    description: 'A visual timeline of key events in modern Indian history.',
    type: 'image',
    url: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: 'mat3',
    title: 'Daily Current Affairs',
    description: 'Link to a trusted source for daily current affairs updates.',
    type: 'link',
    url: '#',
  },
  {
    id: 'mat4',
    title: 'Geography of Tamil Nadu',
    description: 'Detailed PDF covering the geography of Tamil Nadu for TNPSC exams.',
    type: 'pdf',
    url: '#',
  },
];

export const QUIZZES: Quiz[] = [
  {
    id: 'quiz1',
    title: 'General Knowledge - Set 1',
    description: 'Test your general knowledge with these 5 quick questions.',
    duration: 5,
    questions: [
      {
        id: 'q1-1',
        text: 'Who is known as the "Father of the Indian Constitution"?',
        options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Dr. B.R. Ambedkar', 'Sardar Vallabhbhai Patel'],
        correctAnswer: 2,
        explanation: 'Dr. B.R. Ambedkar was the chairman of the Drafting Committee of the Constituent Assembly and is widely regarded as the Father of the Indian Constitution.',
      },
      {
        id: 'q1-2',
        text: 'What is the capital of Tamil Nadu?',
        options: ['Madurai', 'Coimbatore', 'Chennai', 'Trichy'],
        correctAnswer: 2,
        explanation: 'Chennai (formerly Madras) is the capital city of the Indian state of Tamil Nadu.',
      },
      {
        id: 'q1-3',
        text: 'The Sangam literature is associated with which ancient civilization of South India?',
        options: ['Cholas', 'Pandyas', 'Cheras', 'All of the above'],
        correctAnswer: 3,
        explanation: 'The Sangam literature was patronized by the Pandya kings of the Sangam age, but it reflects the life and culture of the Chera, Chola, and Pandya kingdoms.',
      },
      {
        id: 'q1-4',
        text: 'Which river is known as the "Ganges of the South"?',
        options: ['Krishna', 'Godavari', 'Kaveri', 'Narmada'],
        correctAnswer: 2,
        explanation: 'The Kaveri (or Cauvery) river is often referred to as the "Ganges of the South" due to its sacredness and importance to the region.',
      },
      {
        id: 'q1-5',
        text: 'What does TNPSC stand for?',
        options: ['Tamil Nadu Public Service Commission', 'Tamil Nadu Private Sector Commission', 'Tamil Nadu Police Service Commission', 'Tamil Nadu Power Supply Corporation'],
        correctAnswer: 0,
        explanation: 'TNPSC stands for Tamil Nadu Public Service Commission, which is responsible for recruiting personnel for the state\'s public services.',
      },
    ],
  },
  {
    id: 'quiz2',
    title: 'Indian History - Medieval Period',
    description: 'A short quiz on the Medieval period of Indian history.',
    duration: 10,
    questions: [
      {
        id: 'q2-1',
        text: 'The First Battle of Panipat was fought between Babur and whom?',
        options: ['Rana Sanga', 'Ibrahim Lodi', 'Sher Shah Suri', 'Akbar'],
        correctAnswer: 1,
        explanation: 'The First Battle of Panipat in 1526 was fought between the invading forces of Babur and the Lodi dynasty, led by Ibrahim Lodi.',
      },
      {
        id: 'q2-2',
        text: 'Who built the Taj Mahal?',
        options: ['Akbar', 'Jahangir', 'Shah Jahan', 'Aurangzeb'],
        correctAnswer: 2,
        explanation: 'The Taj Mahal was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.',
      },
    ],
  },
  {
    id: 'quiz3',
    title: 'தமிழ் இலக்கியம் - மாதிரி வினாத்தாள் 1',
    description: 'தமிழ் இலக்கியம் மற்றும் இலக்கணம் பற்றிய உங்கள் அறிவை சோதிக்கவும்.',
    duration: 10,
    questions: [
      {
        id: 'q3-1',
        text: 'திருக்குறளை இயற்றியவர் யார்?',
        options: ['கம்பர்', 'திருவள்ளுவர்', 'இளங்கோவடிகள்', 'ஔவையார்'],
        correctAnswer: 1,
        explanation: 'உலகப் பொதுமறையான திருக்குறளை இயற்றியவர் திருவள்ளுவர் ஆவார்.',
      },
      {
        id: 'q3-2',
        text: 'ஐம்பெரும் காப்பியங்களில் ஒன்றான சிலப்பதிகாரத்தின் ஆசிரியர் யார்?',
        options: ['சீத்தலைச் சாத்தனார்', 'திருத்தக்கதேவர்', 'இளங்கோவடிகள்', 'நாதகுத்தனார்'],
        correctAnswer: 2,
        explanation: 'சிலப்பதிகாரம், இளங்கோவடிகளால் எழுதப்பட்டது. இது குடிமக்கள் காப்பியம் என்று போற்றப்படுகிறது.',
      },
      {
        id: 'q3-3',
        text: '"யாமறிந்த மொழிகளிலே தமிழ்மொழி போல் இனிதாவது எங்கும் காணோம்" என்று பாடியவர் யார்?',
        options: ['பாரதிதாசன்', 'கவிமணி தேசிக விநாயகம் பிள்ளை', 'நாமக்கல் கவிஞர்', 'மகாகவி பாரதியார்'],
        correctAnswer: 3,
        explanation: 'இந்த வரிகளை மகாகவி சுப்பிரமணிய பாரதியார் பாடியுள்ளார்.',
      },
    ],
  },
  {
    id: 'quiz4',
    title: 'Mathematics - Aptitude Test',
    description: 'Basic aptitude and logical reasoning questions for TNPSC exams.',
    duration: 15,
    questions: [
      {
        id: 'q4-1',
        text: 'If the simple interest on a certain sum of money for 2 years at 5% per annum is Rs. 100, what is the principal amount?',
        options: ['Rs. 500', 'Rs. 1000', 'Rs. 1500', 'Rs. 2000'],
        correctAnswer: 1,
        explanation: 'Simple Interest (SI) = (P * R * T) / 100. Here, 100 = (P * 5 * 2) / 100 => 100 = (P * 10) / 100 => P = (100 * 100) / 10 = Rs. 1000.',
      },
      {
        id: 'q4-2',
        text: 'A can do a piece of work in 10 days, and B can do it in 15 days. In how many days will they do it together?',
        options: ['5 days', '6 days', '8 days', '12 days'],
        correctAnswer: 1,
        explanation: 'A\'s 1 day work = 1/10. B\'s 1 day work = 1/15. (A+B)\'s 1 day work = 1/10 + 1/15 = (3+2)/30 = 5/30 = 1/6. So, together they will complete the work in 6 days.',
      },
      {
        id: 'q4-3',
        text: 'Find the next number in the series: 2, 5, 10, 17, 26, ?',
        options: ['35', '37', '39', '41'],
        correctAnswer: 1,
        explanation: 'The pattern is n^2 + 1. For n=1,2,3,4,5, we get 2,5,10,17,26. The next term is for n=6, which is 6^2+1=37.',
      },
    ],
  },
    {
    id: 'quiz5',
    title: 'General Studies - Indian Polity',
    description: 'A quiz on the fundamental aspects of the Indian political system.',
    duration: 10,
    questions: [
      {
        id: 'q5-1',
        text: 'Which part of the Indian Constitution deals with Fundamental Rights?',
        options: ['Part I', 'Part II', 'Part III', 'Part IV'],
        correctAnswer: 2,
        explanation: 'Part III of the Indian Constitution, from Articles 12 to 35, deals with Fundamental Rights.',
      },
      {
        id: 'q5-2',
        text: 'Who is the supreme commander of the Indian Armed Forces?',
        options: ['The Prime Minister', 'The Defence Minister', 'The President', 'The Chief of Defence Staff'],
        correctAnswer: 2,
        explanation: 'The President of India is the supreme commander of the Indian Armed Forces.',
      },
      {
        id: 'q5-3',
        text: 'The 73rd Constitutional Amendment Act is related to which of the following?',
        options: ['Municipalities', 'Panchayati Raj', 'Official Languages', 'Fundamental Duties'],
        correctAnswer: 1,
        explanation: 'The 73rd Amendment Act of 1992 gave constitutional status to the Panchayati Raj institutions.',
      },
    ],
  },
  {
    id: 'quiz6',
    title: 'Current Affairs - Recent Events',
    description: 'Test your knowledge on recent national and international events.',
    duration: 5,
    questions: [
      {
        id: 'q6-1',
        text: 'Which country hosted the G20 summit in 2023?',
        options: ['Brazil', 'South Africa', 'India', 'Indonesia'],
        correctAnswer: 2,
        explanation: 'India hosted the 18th G20 Heads of State and Government Summit in New Delhi in September 2023.',
      },
      {
        id: 'q6-2',
        text: 'Who won the FIFA World Cup 2022?',
        options: ['France', 'Brazil', 'Argentina', 'Germany'],
        correctAnswer: 2,
        explanation: 'Argentina, led by Lionel Messi, won the FIFA World Cup 2022 held in Qatar, defeating France in the final.',
      },
    ],
  },
];
