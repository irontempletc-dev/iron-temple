
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Quiz {
  moduleId: string;
  title: string;
  questions: QuizQuestion[];
}

export const QUIZZES: Quiz[] = [
  {
    moduleId: 'de-escalate-to-safe-state',
    title: 'De-escalation to Safe State Quiz',
    questions: [
        {
            question: "What is the purpose of maintaining a larger Reactionary Gap™ during a crisis?",
            options: [
                "To intimidate the individual into compliance",
                "To allow space for emergency staff to observe",
                "To provide time and distance to safely respond",
                "To make room for medical equipment"
            ],
            correctAnswerIndex: 2
        },
        {
            question: "Why is it important to avoid sudden movements or aggressive gestures during de-escalation?",
            options: [
                "They are often misinterpreted and can escalate the situation",
                "They slow down communication",
                "They help establish control",
                "They create a stronger presence"
            ],
            correctAnswerIndex: 0
        },
        {
            question: "What should a staff member do when entering an unfamiliar room?",
            options: [
                "Ask a colleague to accompany them",
                "Immediately begin engaging with the person inside",
                "Scan the room for exits, objects, and hiding places",
                "Turn their back to the door to appear non-threatening"
            ],
            correctAnswerIndex: 2
        },
        {
            question: "What is the ‘Sphere of Influence™’ in de-escalation training?",
            options: [
                "The effect your tone has on a group",
                "The physical reach and control area around an individual",
                "The area a patient occupies in a hospital room",
                "The influence a senior staff member has on behavior"
            ],
            correctAnswerIndex: 1
        },
        {
            question: "What does it mean to ‘fall to the level of your training’ in a crisis?",
            options: [
                "You will always react according to instinct",
                "Training overrides professional conduct",
                "Your response in high-stress situations reflects how well you've trained — consistent practice is essential to stay prepared",
                "You lose decision-making ability and freeze"
            ],
            correctAnswerIndex: 2
        },
        {
            question: "Which of the following is a sign of tension escalation?",
            options: [
                "Open, relaxed body language",
                "Soft-spoken responses",
                "Rapid pacing and clenched fists",
                "Calm breathing and smiling"
            ],
            correctAnswerIndex: 2
        },
        {
            question: "What role does personal awareness play in workplace safety?",
            options: [
                "It helps you avoid your own responsibilities",
                "It keeps you aware of others’ medical records",
                "It reduces alertness to environmental threats",
                "It ensures that you are aware of everything on your body and the risks associated"
            ],
            correctAnswerIndex: 3
        },
        {
            question: "When should you share key situational information with your team?",
            options: [
                "Once a patient has escalated",
                "At the end of your shift",
                "During shift changes, huddles, or roll call",
                "Only if a supervisor asks for it"
            ],
            correctAnswerIndex: 2
        },
        {
            question: "How can establishing common ground help during de-escalation?",
            options: [
                "It allows you to gain control faster",
                "It provides a distraction from the real issue",
                "It reduces tension by creating a connection",
                "It makes the person more compliant with orders"
            ],
            correctAnswerIndex: 2
        },
        {
            question: "Why is it important to wear logical clothing in a healthcare setting?",
            options: [
                "It creates a professional appearance for patients",
                "It ensures staff comfort in long meetings",
                "It allows quick movement and reduces safety risks",
                "It shows compliance with the hospital dress code"
            ],
            correctAnswerIndex: 2
        }
    ]
  },
  {
    moduleId: 'response-control-techniques-1',
    title: 'Response Control Techniques Module 1 Quiz',
    questions: [
        {
            question: "What is the main objective of the Response Control Techniques (RCT) program?",
            options: [
                "To train security personnel in physical restraint methods.",
                "To assist individuals in achieving a Safe State so they can receive proper care.",
                "To ensure the safety of security staff during incidents.",
                "To minimize the role of clinical staff in crisis situations."
            ],
            correctAnswerIndex: 1
        },
        {
            question: "Which mental health diagnoses are important for staff to recognize when responding to a crisis?",
            options: [
                "Autism Spectrum Disorder and Bipolar Disorder",
                "Schizophrenia and Borderline Personality Disorder",
                "ADHD, Anxiety Disorders, and substance use disorder",
                "All the above"
            ],
            correctAnswerIndex: 3
        },
        {
            question: "What does the term \"Reactionary Gap\" refer to?",
            options: [
                "The amount of time it takes for assistance to arrive.",
                "The physical space that allows a person time to react to a potential threat.",
                "The pause between someone making a threat and acting on it.",
                "The distance between objects in a room."
            ],
            correctAnswerIndex: 1
        },
        {
            question: "When using wanding techniques during a security screening, how far should the device be held from the individual's body?",
            options: [
                "Direct contact with the body",
                "About 8 to 12 inches from the body",
                "Approximately 4 to 6 inches from the body",
                "15 to 20 inches away"
            ],
            correctAnswerIndex: 2
        },
        {
            question: "True or False. Always do a “look-see” before putting your hands in a bag.",
            options: [
                "True",
                "False"
            ],
            correctAnswerIndex: 0
        }
    ],
  },
  {
    moduleId: 'response-control-techniques-2',
    title: 'Response Control Techniques Module 2 Quiz',
    questions: [
      {
        question: 'What are the three areas of awareness discussed in this module?',
        options: ['Environmental, Personal, and Situational Awareness', 'Physical, Verbal, and Emotional Awareness', 'Personal, Tactical, and Equipment Awareness', 'Clinical, Environmental, and Communication Awareness'],
        correctAnswerIndex: 0,
      },
      {
        question: 'How is the Reactionary Gap™ best defined?',
        options: ['The moment you become aware of a developing problem', 'The physical space and time needed to safely and effectively respond to a person in crisis', 'A fixed distance you must always keep from others', 'The delay between calling and receiving help from security'],
        correctAnswerIndex: 1,
      },
      {
        question: 'What is the trigger in the context of mental and behavioral health?',
        options: ['A tool used to calm patients quickly', 'A type of therapy used during crisis', 'A stimulus that causes a reaction, often worsening symptoms or leading to crisis', 'A diagnosis given to those with anxiety or PTSD'],
        correctAnswerIndex: 2,
      },
      {
        question: 'True or False. Situational awareness includes knowing your surroundings, identifying signs of violence or addiction, and having a plan to stay safe.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
      },
      {
        question: 'Which of the following is true about individuals with autism?',
        options: ['Autism is a spectrum disorder with a wide range of symptoms and severity', 'Autism only affects communication skills', 'All individuals with autism have the same symptoms and challenges', 'Individuals with autism do not have co-occurring conditions'],
        correctAnswerIndex: 0,
      },
    ],
  },
  {
    moduleId: 'response-control-techniques-3',
    title: 'Response Control Techniques Module 3 Quiz',
    questions: [
      {
        question: 'Which of the following is an effective verbal de-escalation technique?',
        options: ['Speaking loudly to establish control', 'Listening actively and responding with empathy', 'Making physical contact to gain compliance', 'Focusing only on emotional or situational cues without communication'],
        correctAnswerIndex: 1,
      },
      {
        question: 'True or False. When a person becomes verbally aggressive, it’s best to immediately interrupt them and correct their behavior.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
      },
      {
        question: 'True or False. Maintaining calm and non-threatening body language is equally as important as verbal communication during de-escalation.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
      },
      {
        question: 'When preparing to move a patient or individual to a Safe State™, what is the correct timing of the team’s movement after the lead counts?',
        options: ['Move on “three” as stated to the individual', 'Wait for the individual to relax, then move', 'Move on “two” even though the lead says “three”', 'Let the individual initiate the movement before responding'],
        correctAnswerIndex: 2,
      },
      {
        question: 'How can keeping your hands open and visible help during a de-escalation attempt?',
        options: ['It conveys a non-threatening demeanor and helps build trust', 'It shows you are ready to take physical control', 'It creates confusion and distracts the individual', 'It signals that you are in charge and expect compliance'],
        correctAnswerIndex: 0,
      },
    ],
  }
];
