export const chapter2 = {
    title: "Talking to the Computer 🗣️💻",
    content: `
        <div class="alert alert-info">
            <p>
                You've just discovered Python's "Chat Crystal." 💎 When you speak to it, it listens carefully—and answers!
                But here's the trick: you must speak in Python's special language. Ready to learn how to <em>talk</em> to your computer?
            </p>
        </div>

        <h3>1: Saying Hello 👋</h3>
        <p>Let's begin the conversation.<br>
            In Python, when you want to show something on the screen, you use a <strong>function</strong> called <code>print()</code>.</p>

        <pre><code>print("Hello, world!")</code></pre>

        <p>Output:</p>
        <pre>Hello, world!</pre>

        <p>🎉 You just made your computer talk back to you!</p>

        <p>Every message must go inside <strong>quotes</strong> — <code>" "</code> or <code>' '</code> — because that tells Python it's <strong>text</strong>, not code.</p>

        <pre><code>print("I am learning Python!")
print('This is fun!')</code></pre>

        <h3>2: Talking with Words and Numbers 🔤+🔢</h3>
        <p>Python can talk about <strong>words</strong> (called <em>strings</em>) and <strong>numbers</strong> too!</p>

        <pre><code>print("2 + 2 =", 2 + 2)</code></pre>

        <p>Output:</p>
        <pre>2 + 2 = 4</pre>

        <p>It's like the computer is explaining what you asked — pretty smart, right?</p>

        <h3>3: Your Own Sentences ✍️</h3>
        <p>You can print multiple things in one line:</p>

        <pre><code>print("My name is", "Ava")
print("I am", 10, "years old")</code></pre>

        <p>Python automatically adds spaces between the pieces.</p>

        <h3>4: Joining Words (String Concatenation) 🔗</h3>
        <p>This long word means "stick together."<br>
            You can glue words using the <strong><code>+</code></strong> sign:</p>

        <pre><code>print("I" + " love" + " pizza!")</code></pre>

        <p>Output:</p>
        <pre>I love pizza!</pre>

        <div class="alert alert-warning mt-3">
            ⚠️ <strong>Careful!</strong> You must add spaces inside the quotes, or it'll look squished!
        </div>

        <h3>5: Saving Words for Later (Variables) 📦</h3>
        <p>Let's store a name inside a box (a variable) so you can use it again.</p>

        <pre><code>name = "Ari"
print("Hello,", name)</code></pre>

        <p>Now, Python remembers your name!<br>
            You can reuse it anywhere in the program.</p>

        <h3>6: Making the Computer Listen 👂</h3>
        <p>Now let's let the computer ask <strong>you</strong> something.</p>

        <pre><code>name = input("What is your name? ")
print("Nice to meet you,", name)</code></pre>

        <p>Whatever you type after the question is saved in the variable <code>name</code>.</p>

        <p>🪄 Try adding another question:</p>

        <pre><code>color = input("What is your favorite color? ")
print(name, "likes the color", color)</code></pre>

        <p>Now you're having a real conversation with your program! 💬</p>

        <h3>7: The Power of F-Strings (Magic Blanks) ✨</h3>
        <p>There’s an easier and cooler way to mix words and variables: <strong>f-strings</strong> (they start with <code>f</code> before the quotes).</p>
        <pre><code>name = "Ari"
age = 10
print(f"My name is {name}, and I am {age} years old!")</code></pre>
        <p>The <code>{}</code> are like little windows that show what’s inside your variables.
        You can even do math inside them:</p>
        <pre><code>print(f"Next year, I’ll be {age + 1} years old!")</code></pre>

        <h3>8: Changing Case ⬆️⬇️</h3>
        <p>You can make your text louder (uppercase) or softer (lowercase):</p>
        <pre><code>word = "Python"
print(word.upper())  # PYTHON
print(word.lower())  # python</code></pre>
        <p>Or make only the first letter uppercase:</p>
        <pre><code>print(word.capitalize())  # Python</code></pre>

        <h3>9: Cleaning Up Extra Spaces 🧹</h3>
        <p>Sometimes when people type, they add extra spaces at the beginning or end by accident. Python can clean these up for you with <code>.strip()</code>!</p>
        <pre><code>messy_input = "   hello there   "
clean_input = messy_input.strip()

print(f"Messy: '{messy_input}'")
print(f"Clean: '{clean_input}'")</code></pre>
        <p>Output:</p>
        <pre>Messy: '   hello there   '
Clean: 'hello there'</pre>

        <div class="alert alert-info mt-3">
            ✨ This is very useful with <code>input()</code> to make sure you get just the text you need. For example, if a user types " yes " instead of "yes", <code>strip()</code> will fix it!
        </div>
        <pre><code>answer = input("Do you like ice cream? (yes/no) ")
if answer.strip().lower() == "yes":
    print("Me too! 🍦")</code></pre>
    `,
    exercises: [
        {
            id: 'name_game',
            title: 'The Initials Game',
            description: `<p>Print the user's initials based on the variables below. 🎯</p>
<p>The output should be in uppercase, followed by periods, like "A.L."</p>
<pre><code>first_name = "ada"
last_name = "lovelace"</code></pre>`,
            solution: `first_name = "ada"
last_name = "lovelace"
print(f"{first_name[0].upper()}.{last_name[0].upper()}.")`,
            hint: 'You can get the first letter of a string like `first_name` by using index `[0]`. Then, use the `.upper()` method to make it a capital letter. Finally, use an f-string to combine the pieces!',
            validation: [
                {
                    type: 'ast_check',
                    script: `
def check():
    try:
        tree = ast.parse(user_code)
    except SyntaxError:
        return False, "Your code has a syntax error."

    for node in ast.walk(tree):
        if isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print':
            if not (node.args and isinstance(node.args[0], ast.JoinedStr)):
                continue

            fstring_code = ast.unparse(node.args[0])
            if 'first_name[0]' in fstring_code and 'last_name[0]' in fstring_code and '.upper()' in fstring_code:
                return True, "Correctly used f-string and methods."
    return False, "💡 Hint: Make sure you are using an f-string with 'first_name[0].upper()' and 'last_name[0].upper()' inside a print() call."
`
                }
            ],
            starter_code: `first_name = "ada"
last_name = "lovelace"

# Your code here to print the initials like "A.L."`
        },
        {
            id: 'compliment_machine',
            title: 'The Compliment Machine',
            description: `<p>Using the provided variables, print a compliment. 💬</p>
<p>The output should be: "Zelda loves exploring — that's awesome!"</p>
<pre><code>name = "Zelda"
hobby = "exploring"</code></pre>`,
            solution: `name = "Zelda"
hobby = "exploring"
print(f"{name} loves {hobby} — that's awesome!")`,
            hint: 'Use an f-string to build the sentence. Remember to place the variables `name` and `hobby` inside curly braces `{}` within the string.',
            validation: [
                {
                    type: 'ast_check',
                    script: `
def check():
    try:
        tree = ast.parse(user_code)
    except SyntaxError:
        return False, "Your code has a syntax error."

    for node in ast.walk(tree):
        if isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print':
            if not (node.args and isinstance(node.args[0], ast.JoinedStr)):
                continue
            fstring_code = ast.unparse(node.args[0])
            if '{name}' in fstring_code and '{hobby}' in fstring_code:
                return True, "Correctly used variables in f-string."
    return False, "💡 Hint: Make sure you are using an f-string with the {name} and {hobby} variables inside a print() call."
`
                }
            ],
            starter_code: `name = "Zelda"
hobby = "exploring"

# Your code here to print the compliment.`
        },
        {
            id: 'silly_sentence',
            title: 'Silly Sentence Builder',
            description: `<p>Combine the variables below to print a complete sentence. ✍️</p>
<p>The output should be: "The happy robot sings loudly."</p>
<pre><code>adjective = "happy"
noun = "robot"
verb = "sings"
adverb = "loudly"</code></pre>`,
            solution: `adjective = "happy"
noun = "robot"
verb = "sings"
adverb = "loudly"
print(f"The {adjective} {noun} {verb} {adverb}.")`,
            hint: 'Use an f-string to place the variables in the correct order. Don\'t forget the period at the end!',
            validation: [
                {
                    type: 'ast_check',
                    script: `
def check():
    try:
        tree = ast.parse(user_code)
    except SyntaxError:
        return False, "Your code has a syntax error."

    for node in ast.walk(tree):
        if isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print':
            if not (node.args and isinstance(node.args[0], ast.JoinedStr)):
                continue
            fstring_code = ast.unparse(node.args[0])
            if all(v in fstring_code for v in ['{adjective}', '{noun}', '{verb}', '{adverb}']):
                return True, "Correctly used variables in f-string."
    return False, "💡 Hint: Make sure you are using an f-string with all four variables inside a print() call."
`
                }
            ],
            starter_code: `adjective = "happy"
noun = "robot"
verb = "sings"
adverb = "loudly"

# Your code here to build the sentence.`
        },
        {
            id: 'symbol_repeater',
            title: 'Symbol Repeater',
            description: `<p>Create a line of 15 hash symbols using the variables below. ⛓️</p>
<p>The output should be a single line: "###############"</p>
<pre><code>symbol = "#"
count = 15</code></pre>`,
            solution: `symbol = "#"
count = 15
print(symbol * count)`,
            hint: 'In Python, you can multiply a string by a number to repeat it. For example, "a" * 3 results in "aaa".',
            validation: [
                {
                    type: 'ast_check',
                    script: `
def check():
    try:
        tree = ast.parse(user_code)
    except SyntaxError:
        return False, "Your code has a syntax error."

    for node in ast.walk(tree):
        if isinstance(node, ast.BinOp) and isinstance(node.op, ast.Mult):
            operands = {getattr(node.left, 'id', ''), getattr(node.right, 'id', '')}
            if 'symbol' in operands and 'count' in operands:
                return True, "Correctly used string multiplication."
    return False, "💡 Hint: Make sure you are multiplying the 'symbol' and 'count' variables together."
`
                }
            ],
            starter_code: `symbol = "#"
count = 15

# Your code here to print the repeated symbol.`
        },
        {
            id: 'password_check',
            title: 'Secret Password Check',
            description: `<p>A user entered a password, but we need to check it without worrying about capitalization. 🤫</p>
<p>Compare the <code>user_input</code> to the <code>secret_password</code> to see if they match when both are lowercase. Print <code>True</code> if they match, <code>False</code> otherwise.</p>
<pre><code>user_input = "PytHoN"
secret_password = "python"</code></pre>`,
            solution: `user_input = "PytHoN"
secret_password = "python"
print(user_input.lower() == secret_password.lower())`,
            hint: 'Use the .lower() method on both strings before comparing them with the `==` operator.',
            validation: [
                {
                    type: 'ast_check',
                    script: `
def check():
    try:
        tree = ast.parse(user_code)
    except SyntaxError:
        return False, "Your code has a syntax error."

    for node in ast.walk(tree):
        if isinstance(node, ast.Compare):
            # A bit simplified: check if .lower() is used anywhere in the code
            if '.lower()' in user_code:
                return True, "Correctly used the .lower() method."
    return False, "💡 Hint: Remember to use the .lower() method to compare the strings."
`
                }
            ],
            starter_code: `user_input = "PytHoN"
secret_password = "python"

# Your code here to check if the passwords match
# when both are converted to lowercase.`
        }
        ,
        {
            id: 'input_cleaner',
            title: 'Input Cleaner',
            description: `<p>A user typed their name, but accidentally added extra spaces. 🧼</p>
<p>Clean up the <code>user_name</code> variable by removing the spaces from the beginning and end, then print the cleaned name.</p>
<pre><code>user_name = "  alex  "</code></pre>`,
            solution: `user_name = "  alex  "
print(user_name.strip())`,
            hint: 'The `.strip()` method removes whitespace from both the start and end of a string. Call it on the `user_name` variable.',
            validation: [
                {
                    type: 'ast_check',
                    script: `
def check():
    try:
        tree = ast.parse(user_code)
    except SyntaxError:
        return False, "Your code has a syntax error."

    for node in ast.walk(tree):
        # Check for a call to .strip()
        if (isinstance(node, ast.Call) and
            getattr(node.func, 'attr', '') == 'strip'):
            
            # Check if it's called on the correct variable
            if getattr(node.func.value, 'id', '') == 'user_name':
                return True, "Correctly used the .strip() method."

    return False, "💡 Hint: Make sure you are calling .strip() on the 'user_name' variable."
`
                }
            ],
            starter_code: `user_name = "  alex  "

# Your code here to clean and print the name.`
        }
    ]
};
