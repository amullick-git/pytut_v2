export const chapter2 = {
    title: "Talking to the Computer 🗣️💻",
    content: `
        <h2>2. Talking to the Computer 🗣️💻</h2>

        <p><strong>Story:</strong><br>
            You've just discovered Python's "Chat Crystal." When you speak to it, it listens carefully — and answers!
            But here's the trick: you must speak in Python's special language. Ready to learn how to <em>talk</em> to your computer?</p>

        <h3>Step 1: Saying Hello</h3>
        <p>Let's begin the conversation.<br>
            In Python, when you want to show something on the screen, you use a <strong>function</strong> called <code>print()</code>.</p>

        <pre><code>print("Hello, world!")</code></pre>

        <p>Output:</p>
        <pre>Hello, world!</pre>

        <p>🎉 You just made your computer talk back to you!</p>

        <p>Every message must go inside <strong>quotes</strong> — <code>" "</code> or <code>' '</code> — because that tells Python it's <strong>text</strong>, not code.</p>

        <pre><code>print("I am learning Python!")
            print('This is fun!')</code></pre>

        <h3>Step 2: Talking with Words and Numbers</h3>
        <p>Python can talk about <strong>words</strong> (called <em>strings</em>) and <strong>numbers</strong> too!</p>

        <pre><code>print("2 + 2 =", 2 + 2)</code></pre>

        <p>Output:</p>
        <pre>2 + 2 = 4</pre>

        <p>It's like the computer is explaining what you asked — pretty smart, right?</p>

        <h3>Step 3: Your Own Sentences</h3>
        <p>You can print multiple things in one line:</p>

        <pre><code>print("My name is", "Ava")
            print("I am", 10, "years old")</code></pre>

        <p>Python automatically adds spaces between the pieces.</p>

        <h3>Step 4: Joining Words (String Concatenation)</h3>
        <p>This long word means "stick together."<br>
            You can glue words using the <strong><code>+</code></strong> sign:</p>

        <pre><code>print("I" + " love" + " pizza!")</code></pre>

        <p>Output:</p>
        <pre>I love pizza!</pre>

        <p>⚠️ Careful — you must add spaces inside the quotes or it'll look squished!</p>

        <h3>Step 5: Saving Words for Later (Variables)</h3>
        <p>Let's store a name inside a box (a variable) so you can use it again.</p>

        <pre><code>name = "Ari"
            print("Hello,", name)</code></pre>

        <p>Now, Python remembers your name!<br>
            You can reuse it anywhere in the program.</p>

        <h3>Step 6: Making the Computer Listen</h3>
        <p>Now let's let the computer ask <strong>you</strong> something.</p>

        <pre><code>name = input("What is your name? ")
            print("Nice to meet you,", name)</code></pre>

        <p>Whatever you type after the question is saved in the variable <code>name</code>.</p>

        <p>🪄 Try adding another question:</p>

        <pre><code>color = input("What is your favorite color? ")
            print(name, "likes the color", color)</code></pre>

        <p>Now you're having a real conversation with your program! 💬</p>
    `,
    exercises: [
        {
            id: 'name_game',
            title: 'The Initials Game',
            description: `Given the variables below, print the user's initials. The output should be in uppercase, followed by periods, like "A.L."
<pre><code>first_name = "ada"
last_name = "lovelace"</code></pre>`,
            solution: `first_name = "ada"
last_name = "lovelace"
print(f"{first_name[0].upper()}.{last_name[0].upper()}.")`,
            hint: 'Get the first character of each string using [0] and make it uppercase with .upper().'
            ,
            starter_code: `first_name = "ada"
last_name = "lovelace"

# Your code here to print the initials like "A.L."`
        },
        {
            id: 'compliment_machine',
            title: 'The Compliment Machine',
            description: `Using the provided variables, print a compliment like: "Zelda loves exploring — that's awesome!"
<pre><code>name = "Zelda"
hobby = "exploring"</code></pre>`,
            solution: `name = "Zelda"
hobby = "exploring"
print(f"{name} loves {hobby} — that's awesome!")`,
            hint: 'Use an f-string to combine the variables into the sentence.'
            ,
            starter_code: `name = "Zelda"
hobby = "exploring"

# Your code here to print the compliment.`
        }
    ]
};
