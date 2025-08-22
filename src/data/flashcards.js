export const flashcardsData = [
  {
    id: 1,
    category: 'JavaScript',
    difficulty: 'beginner',
    question: 'What is the difference between var, let, and const?',
    answer: 'var: function-scoped, can be redeclared and updated, hoisted with undefined. let: block-scoped, can be updated but not redeclared, hoisted but not initialized. const: block-scoped, cannot be updated or redeclared, hoisted but not initialized.',
    tags: ['variables', 'scope', 'hoisting']
  },
  {
    id: 2,
    category: 'JavaScript',
    difficulty: 'intermediate',
    question: 'Explain closures in JavaScript',
    answer: 'A closure is when a function has access to variables in its outer (enclosing) scope even after the outer function has returned. This allows for data privacy and the creation of function factories.',
    tags: ['closures', 'scope', 'functions']
  },
  {
    id: 3,
    category: 'React',
    difficulty: 'beginner',
    question: 'What is JSX?',
    answer: 'JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It gets compiled to React.createElement() calls.',
    tags: ['jsx', 'syntax', 'react']
  },
  {
    id: 4,
    category: 'React',
    difficulty: 'intermediate',
    question: 'What are React Hooks?',
    answer: 'Hooks are functions that allow you to use state and lifecycle features in functional components. Common hooks include useState, useEffect, useContext, useReducer, etc.',
    tags: ['hooks', 'state', 'lifecycle']
  },
  {
    id: 5,
    category: 'CSS',
    difficulty: 'beginner',
    question: 'What is the CSS Box Model?',
    answer: 'The box model describes how elements are rendered: content → padding → border → margin. Each element is essentially a rectangular box with these layers.',
    tags: ['box-model', 'layout', 'css']
  },
  {
    id: 6,
    category: 'CSS',
    difficulty: 'intermediate',
    question: 'Explain CSS Flexbox',
    answer: 'Flexbox is a one-dimensional layout method for arranging items in rows or columns. It provides efficient alignment, distribution, and ordering of items within a container.',
    tags: ['flexbox', 'layout', 'alignment']
  },
  {
    id: 7,
    category: 'JavaScript',
    difficulty: 'advanced',
    question: 'What is the Event Loop?',
    answer: 'The Event Loop is how JavaScript handles asynchronous operations. It continuously checks the call stack and executes callbacks from the task queue when the stack is empty, enabling non-blocking code execution.',
    tags: ['event-loop', 'async', 'concurrency']
  },
  {
    id: 8,
    category: 'React',
    difficulty: 'advanced',
    question: 'What is React Reconciliation?',
    answer: 'Reconciliation is the process React uses to update the DOM efficiently by comparing the new virtual DOM tree with the previous one and applying only the necessary changes.',
    tags: ['reconciliation', 'virtual-dom', 'performance']
  },
  {
    id: 9,
    category: 'Data Structures',
    difficulty: 'intermediate',
    question: 'Explain the difference between Array and Linked List',
    answer: 'Arrays store elements in contiguous memory with O(1) random access but O(n) insertion/deletion. Linked Lists use pointers with O(n) access but O(1) insertion/deletion at known positions.',
    tags: ['array', 'linked-list', 'time-complexity']
  },
  {
    id: 10,
    category: 'Algorithms',
    difficulty: 'intermediate',
    question: 'What is Big O Notation?',
    answer: 'Big O notation describes the worst-case time or space complexity of an algorithm as input size approaches infinity. Common complexities: O(1), O(log n), O(n), O(n log n), O(n²).',
    tags: ['big-o', 'complexity', 'algorithms']
  }
];

export const quizQuestions = [
  {
    id: 1,
    category: 'JavaScript',
    difficulty: 'beginner',
    question: 'Which of the following is NOT a JavaScript data type?',
    options: ['string', 'boolean', 'integer', 'undefined'],
    correctAnswer: 2,
    explanation: 'JavaScript does not have a specific "integer" type. Numbers are represented as floating-point values.'
  },
  {
    id: 2,
    category: 'React',
    difficulty: 'beginner',
    question: 'Which hook is used to manage state in functional components?',
    options: ['useEffect', 'useState', 'useContext', 'useReducer'],
    correctAnswer: 1,
    explanation: 'useState is the hook specifically designed for managing state in functional components.'
  },
  {
    id: 3,
    category: 'CSS',
    difficulty: 'beginner',
    question: 'Which CSS property is used to control the space between elements?',
    options: ['padding', 'margin', 'border', 'spacing'],
    correctAnswer: 1,
    explanation: 'margin controls the space outside an element, between elements.'
  },
  {
    id: 4,
    category: 'JavaScript',
    difficulty: 'intermediate',
    question: 'What will console.log(typeof null) output?',
    options: ['null', 'undefined', 'object', 'boolean'],
    correctAnswer: 2,
    explanation: 'This is a well-known JavaScript quirk. typeof null returns "object" due to a bug in the original implementation.'
  },
  {
    id: 5,
    category: 'React',
    difficulty: 'intermediate',
    question: 'When does useEffect run by default?',
    options: ['Before render', 'After every render', 'Only on mount', 'Only on unmount'],
    correctAnswer: 1,
    explanation: 'useEffect runs after every render by default, including the initial render and every update.'
  }
];