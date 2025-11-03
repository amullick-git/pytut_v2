console.log("Loading chapter1.js...");

export const chapter1 = {
    title: "The Spellbook is Open 📖<br><small class='text-muted'>Your Python Adventure Begins</small>",
    story: `
        <div class="alert alert-success">
            <h4 class="alert-heading">Welcome, Adventurer!</h4>
            <p>
                You've discovered a powerful, ancient spellbook. Its name is <strong>Python</strong>.
                This isn't just any book—it holds the secret language of computers, allowing you to bring your wildest ideas to life.
                Your journey to becoming a master coder starts now!
            </p>
        </div>
    `,
    sections: [
        {
            title: "1: The Secret Language of Computers",
            content: `<p>Imagine you have a friendly robot that can do anything you ask. There's just one catch: it only understands a special, secret language. <strong>Python is that language!</strong></p>
            <p>A "programming language" is just a set of words and rules that lets us give instructions to computers. Python is one of the most popular in the world because its rules are simple and clear, almost like writing in English. It's the perfect first language for a new code wizard like you.</p>
            `
        },
        {
            title: "2: Spells You Will Learn",
            content: `<p>What kind of magic can you create with Python? You'll learn the spells to become a...</p>
            <ul>
                <li><i class="bi bi-joystick"></i> <strong>Game Maker:</strong> Design your own heroes, build obstacle courses, and invent new worlds.</li>
                <li><i class="bi bi-palette-fill"></i> <strong>Digital Artist:</strong> Command the computer to draw stunning patterns, shapes, and generative art.</li>
                <li><i class="bi bi-robot"></i> <strong>Robot Trainer:</strong> Teach your computer to solve puzzles, automate boring tasks, and think faster than a human ever could.</li>
                <li><i class="bi bi-book-half"></i> <strong>Storyteller:</strong> Create interactive fiction where your reader's choices change the ending.</li>
            </ul>
            <p>Every line of code is a new enchantment at your fingertips.</p>
            `
        },
        {
            title: "3: Your First Magic Word: <code>print</code>",
            content: `<p>Every wizard's journey begins with a single magic word. Ours is <code>print</code>.</p>
            <p>This powerful command tells the computer to display a message on the screen. Anything you write inside the parentheses <code>()</code> and quotes <code>""</code> will instantly appear.</p>
            <pre><code>print("Hello, world!")</code></pre>
            <p>This is the most famous first spell in all of coding! Click the <strong><i class="bi bi-play-circle"></i> Try It</strong> button to send it to the Code Playground, then press <strong>Run Code</strong> to cast it yourself!</p>
            `
        },
        {
            title: "4: Your Alchemy Lab",
            content: `<p>The <strong>Code Playground</strong> is your personal alchemy lab. It's a safe place to mix, mash, and experiment with code without breaking anything. The best wizards are the most curious ones!</p>
            <p>Don't be afraid to change the spells. What happens if you change the message inside the quotes? What if you cast two <code>print</code> spells in a row?</p>
            <pre><code>print("I am a Python wizard!")
print("What will you create?")</code></pre>
            <p>True magic is discovered through experimentation. Your adventure has officially begun!</p>
            `
        }
    ],
    exercises: [
        {
            id: 'first_spell',
            title: `A Wizard's Greeting`,
            description: `<p>It's time to announce your arrival! Cast a spell to introduce yourself to the world. Use the <code>print()</code> function to display the exact message: "I am learning to code!"</p>`,
            solution: `print("I am learning to code!")`,
            hint: 'Remember your first magic word! Type `print()` and place the sentence "I am learning to code!" inside the parentheses and quotation marks.',
            validation: [
                {
                    type: 'ast_check',
                    script: `
def check():
    try:
        tree = ast.parse(user_code_to_check)
        for node in ast.walk(tree):
            if isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print':
                return True, "Correctly used the print() function."
        return False, "💡 Hint: Make sure you are using the print() function."
    except SyntaxError:
        return False, "Your code has a syntax error."
`
                }
            ],
            starter_code: `# Your code here to print the message.`
        }
    ]
};