import type { TrainingModule, GlossaryTerm } from './types';

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: 'de-escalate-to-safe-state',
    title: 'De-escalate to Safe State',
    description: 'Our first and best tool to calm a stressful and potentially dangerous situation.',
    longDescription: 'This program teaches empathy, patience, thoughtfulness, mindfulness, and self-control.  By using verbal and non-verbal cues, many situations can be de-escalated to a peaceful state, which would otherwise have become dangerous for all involved.  The DESS program teaches an effective and hands-free approach to bring the agitated, confused, or inebriatd client back to Safe State™.',
    image: '/de-escalate-banner.jpg',
    imageHint: 'healthcare professionals',
    price: 49.99,
    purchased: true,
    content: {
      videos: [
        { title: 'Introduction to De-escalation', url: '/de-escalate/res/index.html' },
      ],
      documents: [{ title: 'De-escalation Handbook (PDF)', url: '#' }],
    },
  },
  {
    id: 'response-control-techniques-1',
    title: 'Response Control Techniques 1',
    description: 'This module introduces the foundational concepts of the Response Control Techniques (RCT) program, including the definition of Safe State, the role of empathy, and an overview of de-escalation and redirection methods used in healthcare settings.',
    longDescription: `In Module 1 of the RCT Pre-Qualification Course, learners are introduced to the core philosophy, purpose, and techniques behind Response Control Techniques (RCT). Designed for security, emergency, and behavioral health staff, this module outlines how to safely and empathetically guide individuals in crisis back to a Safe State—a physical and mental condition where care can safely continue.<br /><br />Key learning objectives include:
<ul style="list-style: none; padding-left: 0;">
<li style="padding-left: 1.5em; text-indent: -1.5em;">• Learn the definition and importance of the Safe State.</li>
<li style="padding-left: 1.5em; text-indent: -1.5em;">• Understand the role of empathy and mental health awareness in de-escalation.</li>
<li style="padding-left: 1.5em; text-indent: -1.5em;">• Become familiar with key RCT terms and physical redirection strategies such as cradling, pressure compliance, energy manipulation, and appendage control.</li>
<li style="padding-left: 1.5em; text-indent: -1.5em;">• Explore biomechanical techniques and the use of minimal force to reduce harm and liability during high-risk encounters.</li>
</ul>
This course lays the groundwork for all future RCT modules and prepares participants for both the online and hands-on components of training.`,
    image: '/rct-1.jpg',
    imageHint: 'martial arts',
    price: 79.99,
    purchased: true,
    content: {
      videos: [
        { title: 'Response Control Techniques 1', url: '/rct-1/res/index.html' },
      ],
      documents: [{ title: 'RCT Module 1 Guide (PDF)', url: '#' }],
    },
  },
  {
    id: 'response-control-techniques-2',
    title: 'Response Control Techniques 2',
    description: 'This module introduces the three core safety awareness areas—Environmental, Personal, and Situational—to help staff stay prepared, identify risk factors early, and respond effectively to crises in healthcare settings.',
    longDescription: `In Module 2 of the RCT Pre-Qualification Course, learners will explore how conscious awareness of their surroundings, physical readiness, and situational context can enhance safety and de-escalation efforts.<br/><br/>Participants will:
<ul style="list-style: none; padding-left: 0;">
<li style="padding-left: 1.5em; text-indent: -1.5em;">• Understand how to evaluate Environmental Awareness, including room layout, exits, blind spots, and potential hazards.</li>
<li style="padding-left: 1.5em; text-indent: -1.5em;">• Recognize their own Personal Awareness, including physical readiness and the importance of maintaining a reactionary gap.</li>
<li style="padding-left: 1.5em; text-indent: -1.5em;">• Strengthen Situational Awareness by observing behaviors, nonverbal cues, and the emotional state of others.</li>
</ul>
This module also introduces key mental health considerations, including an overview of schizophrenia and the importance of empathy and professionalism when working with individuals in crisis.<br/><br/>
By the end of this session, participants will have the tools to anticipate, assess, and respond to real-world scenarios with greater confidence and safety awareness.`,
    image: '/rct-2.jpg',
    imageHint: 'training demonstration',
    price: 99.99,
    purchased: true,
    content: {
      videos: [
        { title: 'Controlled Takedowns', url: '/rct-2/res/index.html' },
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
    purchased: true,
    content: {
      videos: [
        { title: 'Weapon Disarmament', url: '/rct-3/res/index.html' },
      ],
      documents: [{ title: 'RCT Module 3 Advanced Guide (PDF)', url: '#' }],
    },
  },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
    {
        id: '1',
        term: 'Safe State™',
        definition: 'A physical and psychological place in which a person no longer poses an imminent threat to themselves, staff, or others. It is not defined by control or compliance, but by safety, restored communication, and the ability to proceed with care or de-escalation.'
    },
    {
        id: '4',
        term: 'Reactionary Gap™',
        definition: 'The minimum distance required between staff and an individual to allow time to react to a sudden movement or attack. Typically measured as 6 feet or two arms’ lengths.'
    },
    {
        id: '5',
        term: 'Arc of Power™',
        definition: 'The strongest range of motion or striking zone an aggressive person may use. Usually the zone from shoulder height to waist with full range of swing or strike.'
    },
    {
        id: '6',
        term: 'Bladed Stance',
        definition: 'Body turned at a 45-degree angle to reduce target surface area and create better balance and power positioning.'
    },
    {
        id: '7',
        term: 'Window of Opportunity',
        definition: 'A brief moment during an aggressive situation where disengagement or de-escalation is possible.'
    },
    {
        id: '8',
        term: 'Trigger Recognition',
        definition: 'The ability to spot and anticipate cues that may set off aggression or panic.'
    },
    {
        id: '9',
        term: 'Caregiver Stance',
        definition: 'A non-threatening yet protective posture used to convey empathy and compassion while maintaining safety. The stance involves hands gently clasped together at the waist or midline, with the body turned slightly at an angle. This softens the visual presentation, making the caregiver appear more approachable and endearing, while subtly preserving reactionary space and personal protection.'
    },
    {
        id: '10',
        term: 'Positive Feedback Loop',
        definition: 'A cycle in which staff responses de-escalate a situation, leading to a reduction in agitation or aggression. Calm demeanor, empathetic tone, and respectful body language encourage cooperation and help guide the person toward a Safe State™.'
    },
    {
        id: '11',
        term: 'Negative Feedback Loop',
        definition: 'A cycle in which reactive or poorly managed staff behavior causes an increase in agitation or aggression. Escalating tone, physical posturing, or lack of awareness amplifies the subject’s emotional response, often resulting in crisis or violence.'
    }
];
