import { chapter1 } from './chapters/chapter1.js';
import { chapter2 } from './chapters/chapter2.js';
import { chapter3 } from './chapters/chapter3.js';
import { chapter4 } from './chapters/chapter4.js';

const tutorialContent = {
    chapter1,
    chapter2,
    chapter3,
    chapter4
};

window.tutorialContent = tutorialContent; // Make it globally available
export { tutorialContent };
