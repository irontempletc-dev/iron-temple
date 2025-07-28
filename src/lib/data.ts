import type { TrainingModule, GlossaryTerm } from './types';

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: 'de-escalate-to-safe-state',
    title: 'De-escalate to Safe State',
    description: 'Master techniques for peacefully resolving conflict.',
    longDescription: 'This module provides comprehensive training on de-escalation techniques. Learn to recognize signs of agitation, use verbal and non-verbal communication to calm tense situations, and guide interactions towards a safe and positive outcome. Ideal for professionals in security, customer service, and law enforcement.',
    image: '/de-escalate-banner.jpg',
    imageHint: 'healthcare professionals',
    price: 49.99,
    purchased: true,
    content: {
      videos: [
        { title: 'Introduction to De-escalation', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { title: 'Verbal Judo Basics', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { title: 'Body Language and Proxemics', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      ],
      documents: [{ title: 'De-escalation Handbook (PDF)', url: '#' }],
    },
  },
  {
    id: 'response-control-techniques-1',
    title: 'Response Control Techniques 1',
    description: 'Fundamental control techniques for safety and security.',
    longDescription: 'Module 1 introduces the foundational principles of Response Control Techniques. Participants will learn basic stances, movements, and non-pain compliance holds designed to ensure safety with minimal force. This is the starting point for mastering physical control.',
    image: '/rct-1.jpg',
    imageHint: 'martial arts',
    price: 79.99,
    purchased: true,
    content: {
      videos: [
        { title: 'Stance and Balance', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { title: 'Basic Escort Position', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      ],
      documents: [{ title: 'RCT Module 1 Guide (PDF)', url: '#' }],
    },
  },
  {
    id: 'response-control-techniques-2',
    title: 'Response Control Techniques 2',
    description: 'Intermediate methods for complex situations.',
    longDescription: 'Building on Module 1, this course covers intermediate techniques, including takedowns and ground control. The focus remains on safe, effective control with an emphasis on leverage and positioning over strength.',
    image: '/rct-2.jpg',
    imageHint: 'training demonstration',
    price: 99.99,
    purchased: false,
    content: {
      videos: [
        { title: 'Controlled Takedowns', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { title: 'Introduction to Ground Control', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      ],
      documents: [{ title: 'RCT Module 2 Manual (PDF)', url: '#' }],
    },
  },
  {
    id: 'response-control-techniques-3',
    title: 'Response Control Techniques 3',
    description: 'Advanced skills for high-risk encounters.',
    longDescription: 'The final module in the RCT series, this course teaches advanced techniques for disarming and defense against common attacks. This is for professionals who may face high-risk situations and need to ensure public and personal safety.',
    image: '/rct-3.jpg',
    imageHint: 'security personnel',
    price: 129.99,
    purchased: false,
    content: {
      videos: [
        { title: 'Weapon Disarmament', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { title: 'Defense Against Multiple Subjects', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      ],
      documents: [{ title: 'RCT Module 3 Advanced Guide (PDF)', url: '#' }],
    },
  },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
    {
        id: '1',
        term: 'Safe State',
        definition: 'A trademarked term referring to a condition where an individual is no longer a threat to themselves or others, achieved through verbal and/or physical de-escalation techniques. The primary goal of all Iron Temple interventions.'
    },
    {
        id: '2',
        term: 'Response Control Techniques (RCT)',
        definition: 'A proprietary system of physical control and defense tactics developed by Iron Temple Training Center. It emphasizes leverage, positioning, and minimal force to achieve a Safe State.'
    },
    {
        id: '3',
        term: 'Verbal Judo',
        definition: 'A term used to describe the tactical use of language and communication to redirect behavior, defuse confrontation, and generate voluntary compliance. A core component of the "De-escalate to Safe State" module.'
    }
]
