console.log("Loading chapter2.js...");

export const chapter2 = {
    title: "The Chat Crystal 💎<br><small class='text-muted'>Talking to the Computer</small>",
    story: `
        <p>You've just discovered Python's "Chat Crystal." 💎 When you speak to it, it listens carefully—and answers!
        But here's the trick: you must speak in Python's special language. Ready to learn how to <em>talk</em> to your computer?</p>
    `,    
    sections: [
        {
            title: "1: Saying Hello",
            content: `<p>Let's begin the conversation.<br>
            In Python, when you want to show something on the screen, you use a <strong>function</strong> called <code>print()</code>.</p>

        <pre><code>print("Hello, world!")</code></pre>

        <p>Output:</p>
        <pre>Hello, world!</pre>

        <p>🎉 You just made your computer talk back to you!</p>

        <p>Every message must go inside <strong>quotes</strong> — <code>" "</code> or <code>' '</code> — because that tells Python it's <strong>text</strong>, not code.</p>

        <pre><code>print("I am learning Python!")
print('This is fun!')</code></pre>
        `,
        exercise: {
            id: 'saying_hello_exercise',
            version: 1,
            title: '🧠 Exercise: Your First Greeting',
            description: '<p>Use the <code>print()</code> function to display the message "Greetings, Pythonia!" on the screen.</p>',
            starter_code: '# Use the print() function to display your greeting below',
            solution: 'print("Greetings, Pythonia!")',
            hint: 'Use the `print()` function and put the exact text inside the parentheses and quotes.',
            validation: [{
                type: 'ast_check',
                script: [
                    "def check():",
                    "    try:",
                    "        tree = ast.parse(user_code)",
                    "        for node in ast.walk(tree):",
                    "            if isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print' and node.args and isinstance(node.args[0], ast.Constant) and node.args[0].value == \"Greetings, Pythonia!\":",
                    "                return True, \"Perfect! You've cast your first greeting spell.\"",
                    "    except (SyntaxError, IndexError):",
                    "        return False, \"Make sure your code has no syntax errors.\"",
                    "    return False, \"Hint: Check that the text inside your print() function is exactly \\\"Greetings, Pythonia!\\\"\"",
                ].join("\n")
            }]
        }}
    ,
        {
            title: "2: Talking with Words and Numbers",
            content: `
        <p>Python can talk about <strong>words</strong> (called <em>strings</em>) and <strong>numbers</strong> too!</p>

        <pre><code>print("2 + 2 =", 2 + 2)</code></pre>

        <p>Output:</p>
        <pre>2 + 2 = 4</pre>

        <p>It's like the computer is explaining what you asked — pretty smart, right?</p>
        `,
        exercise: {
            id: 'words_and_numbers_exercise',
            version: 1,
            title: '🧠 Exercise: Math Narration',
            description: '<p>Use a single <code>print()</code> function to show the result of <code>5 * 3</code>. The output should be exactly: <code>The result of 5 * 3 is 15</code></p>',
            starter_code: '# Use a single print() command to show the calculation and result',
            solution: 'print("The result of 5 * 3 is", 5 * 3)',
            hint: 'You can put multiple items inside `print()`, separated by commas. Python will add spaces for you.',
            validation: [{
                type: 'ast_check',
                script: [
                    "def check():",
                    "    try:",
                    "        tree = ast.parse(user_code)",
                    "        for node in ast.walk(tree):",
                    "            if isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print' and len(node.args) == 2:",
                    "                if isinstance(node.args[0], ast.Constant) and \"The result of 5 * 3 is\" in node.args[0].value and isinstance(node.args[1], ast.BinOp):",
                    "                    return True, \"Excellent! You combined text and a calculation.\"",
                    "    except (SyntaxError, IndexError):",
                    "        return False, \"Make sure your code has no syntax errors.\"",
                    "    return False, \"Hint: Make sure you have the text and the calculation 5 * 3 separated by a comma inside 'print()'.\"",
                ].join("\n")
            }]
        }}
    ,
        {
            title: "3: Your Own Sentences",
            content: `
        <p>You can print multiple things in one line:</p>

        <pre><code>print("My name is", "Ava")
print("I am", 10, "years old")</code></pre>

        <p>Python automatically adds spaces between the pieces.</p>
        `,
        exercise: {
            id: 'own_sentences_exercise',
            version: 1,
            title: '🧠 Exercise: Introduce a Character',
            description: '<p>Using a single <code>print()</code> command, introduce a character named "Leo" who is <code>12</code> years old. The output should be: <code>Leo is 12 years old</code></p>',
            starter_code: '# Use one print() command to introduce Leo',
            solution: 'print("Leo is", 12, "years old")',
            hint: 'Place the name, the number, and the surrounding text inside one `print()` function, separated by commas.',
            validation: [{
                type: 'ast_check',
                script: [
                    "def check():",
                    "    try:",
                    "        tree = ast.parse(user_code)",
                    "        for node in ast.walk(tree):",
                    "            if isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print' and len(node.args) == 4:",
                    "                return True, \"Great job introducing the character!\"",
                    "    except (SyntaxError, IndexError):",
                    "        return False, \"Make sure your code has no syntax errors.\"",
                    "    return False, \"Hint: Your print statement should have four parts separated by commas: `print(\\\"Leo is\\\", 12, \\\"years old\\\")`.\"",
                ].join("\n")
            }]
        }}
    ,
        {
            title: "4: Joining Words (String Concatenation)",
            content: `
        <p>This long word means "stick together."<br>
            You can glue words using the <strong><code>+</code></strong> sign:</p>

        <pre><code>print("I" + " love" + " pizza!")</code></pre><p>Output:</p><pre>I love pizza!</pre><div class="alert alert-warning mt-3">
                    ⚠️ <strong>Careful!</strong> You must add spaces inside the quotes, or it'll look squished!
                </div>
        `,
        exercise: {
            id: 'concatenation_exercise',
            version: 1,
            title: '🧠 Exercise: Build a Phrase',
            description: '<p>Using the <code>+</code> operator, combine the three separate strings <code>"Python"</code>, <code>" is"</code>, and <code>" fun!"</code> into a single sentence and print it.</p>',
            starter_code: '# Use the + operator to combine and print the strings',
            solution: 'print("Python" + " is" + " fun!")',
            hint: 'Remember to use the `+` sign between the strings to "glue" them together.',
            validation: [{
                type: 'ast_check',
                script: [
                    "def check():",
                    "    try:",
                    "        tree = ast.parse(user_code)",
                    "        for node in ast.walk(tree):",
                    "            if isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print' and isinstance(node.args[0], ast.BinOp) and isinstance(node.args[0].op, ast.Add):",
                    "                return True, \"Perfect use of concatenation!\"",
                    "    except (SyntaxError, IndexError):",
                    "        return False, \"Make sure your code has no syntax errors.\"",
                    "    return False, \"Hint: Your code should look something like \\`print(\\\"first\\\" + \\\"second\\\")\\`.\"",
                ].join("\n")
            }]
        }}
    ,
        {
            title: "5: Saving Words for Later (Variables)",
            content: `
        <p>Let's store a name inside a box (a variable) so you can use it again.</p>

        <pre><code>name = "Ari"
print("Hello,", name)</code></pre>

        <p>Now, Python remembers your name!<br>
            You can reuse it anywhere in the program.</p>
        `,
        exercise: {
            id: 'variables_exercise',
            version: 1,
            title: '🧠 Exercise: The Name Box',
            description: '<p>Create a variable named <code>player_name</code> and store the name "Zelda" in it. Then, use the <code>print()</code> function to display the contents of the variable.</p>',
            starter_code: '# 1. Create the player_name variable\n\n# 2. Print the variable',
            solution: 'player_name = "Zelda"\nprint(player_name)',
            hint: 'First, write `player_name = "Zelda"`. On the next line, write `print(player_name)`.',
            validation: [{
                type: 'ast_check',
                script: [
                    "def check():",
                    "    try:",
                    "        tree = ast.parse(user_code)",
                    "        has_assign = any(isinstance(node, ast.Assign) and node.targets[0].id == 'player_name' for node in ast.walk(tree))",
                    "        has_print = any(isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print' and node.args[0].id == 'player_name' for node in ast.walk(tree))",
                    "        if has_assign and has_print:",
                    "            return True, \"You correctly created and printed the variable!\"",
                    "    except (SyntaxError, IndexError, AttributeError): return False, \"Check for syntax errors.\"",
                    "    return False, \"Hint: Make sure you create a variable called `player_name` and then print it.\"",
                ].join("\n")
            }]
        }}
    ,
        {
            title: "6: Making the Computer Listen",
            content: `
        <p>Now let's let the computer ask <strong>you</strong> something.</p>

        <pre><code>name = input("What is your name? ")
print("Nice to meet you,", name)</code></pre>

        <p>Whatever you type after the question is saved in the variable <code>name</code>.
        <br>
        💡 <strong>Important:</strong> The <code>input()</code> function always gives you back a <strong>string</strong>, even if you type a number!
        </p>

        <p>🪄 Try adding another question:</p>

        <pre><code>color = input("What is your favorite color? ")
print(name, "likes the color", color)</code></pre>

        <p>Now you're having a real conversation with your program! 💬</p>
        `,
        exercise: {
            id: 'input_exercise',
            version: 1,
            title: 'Exercise: The Echo Crystal',
            description: '<p>A variable named <code>favorite_food</code> has been created, holding a food item. Print the value stored in this variable.</p>',
            starter_code: 'favorite_food = "pizza"\n\n# Print the value of the favorite_food variable',
            solution: 'favorite_food = "pizza"\nprint(favorite_food)',
            hint: 'Use the `print()` function to display the value of the `favorite_food` variable.',
            validation: [{
                type: 'ast_check',
                script: [
                    "def check():",
                    "    try:",
                    "        tree = ast.parse(user_code)",
                    "        for node in ast.walk(tree):",
                    "            if isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print' and node.args and isinstance(node.args[0], ast.Name) and node.args[0].id == 'favorite_food':",
                    "                return True, \"Great! You printed the value of the variable.\"",
                    "    except (SyntaxError, IndexError, AttributeError): return False, \"Check for syntax errors.\"",
                    "    return False, \"Hint: Make sure you use `print()` to show the value of the `favorite_food` variable.\"",
                ].join("\n")
            }]
        }}
    ,
        {
            title: "7: The Power of F-Strings (Magic Blanks)",
            content: `
        <p>There’s an easier and cooler way to mix words and variables: <strong>f-strings</strong> (they start with <code>f</code> before the quotes).</p>
        <pre><code>name = "Ari"
age = 10
print(f"My name is {name}, and I am {age} years old!")</code></pre>
        <p>The <code>{}</code> are like little windows that show what’s inside your variables.
        You can even do math inside them:</p>
        <pre><code>print(f"Next year, I’ll be {age + 1} years old!")</code></pre>

        `,
        exercise: {
            id: 'fstring_practice_2',
            version: 1,
            title: 'Exercise: F-String Practice',
            description: `<p>Using the provided variables, create a sentence with an f-string.</p>
<p>The output should be: "The quick brown fox jumps over the lazy dog."</p>
<pre><code>animal1 = "fox"
animal2 = "dog"</code></pre>`,
            starter_code: `animal1 = "fox"
animal2 = "dog"

# --- DO NOT DELETE: Your code starts below ---
`,
            solution: `animal1 = "fox"
animal2 = "dog"
print(f"The quick brown {animal1} jumps over the lazy {animal2}.")`,
            hint: 'Use an f-string and place the variables `animal1` and `animal2` inside curly braces `{}`.',
            validation: [
                {
                    type: 'ast_check',
                    script: [
                        "def check():",
                        "    try:",
                        "        tree = ast.parse(user_code)",
                        "        for node in ast.walk(tree):",
                        "            if isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print' and isinstance(node.args[0], ast.JoinedStr):",
                        "                return True, \"Great use of f-strings!\"",
                        "    except (SyntaxError, IndexError):",
                        "        return False, \"Make sure you are using a print statement with an f-string.\"",
                        "    return False, \"Hint: Use a print statement with an f-string like print(f'...').\"",
                    ].join("\n")
                }
            ]
        }
    },
    { // Section 8
        title: "8: Changing Case",
        content: `
        <p>You can make your text louder (uppercase) or softer (lowercase):</p>
        <pre><code>word = "Python"
print(word.upper())  # PYTHON
print(word.lower())  # python</code></pre>
        <p>Or make only the first letter uppercase:</p>
        <pre><code>print(word.capitalize())  # Python</code></pre>
        `
    ,   exercise: {
            id: 'changing_case_exercise',
            version: 1,
            title: '🧠 Exercise: Loud and Quiet',
            description: '<p>You have a variable holding a secret message. Print the message in all uppercase and then in all lowercase.</p><pre><code>message = "Whisper"</code></pre>',
            starter_code: 'message = "Whisper"\n\n# Print the message in uppercase\n\n# Print the message in lowercase',
            solution: 'message = "Whisper"\nprint(message.upper())\nprint(message.lower())',
            hint: 'Use the `.upper()` method for the loud version and the `.lower()` method for the quiet version.',
            validation: [{
                type: 'ast_check',
                script: [
                    "def check():",
                    "    try:",
                    "        tree = ast.parse(user_code)",
                    "        has_upper = any(isinstance(node, ast.Call) and getattr(node.func, 'attr', '') == 'upper' for node in ast.walk(tree))",
                    "        has_lower = any(isinstance(node, ast.Call) and getattr(node.func, 'attr', '') == 'lower' for node in ast.walk(tree))",
                    "        if has_upper and has_lower:",
                    "            return True, \"Excellent! You used both .upper() and .lower().\"",
                    "    except (SyntaxError, IndexError, AttributeError): return False, \"Check for syntax errors.\"",
                    "    return False, \"Hint: Make sure you call both `.upper()` and `.lower()` on the `message` variable and print the results.\"",
                ].join("\n")
            }]
        }}
    ,   
    { // Section 9
            title: "9: Cleaning Up Extra Spaces",
            content: `
        <p>Sometimes when people type, they add extra spaces at the beginning or end by accident. Python can clean these up for you with <code>.strip()</code>!</p>
        <pre><code>messy_input = "   hello there   "
clean_input = messy_input.strip()

print(f"Messy: '{messy_input}'")
print(f"Clean: '{clean_input}'")</code></pre>
        <p>Output:</p>
        <pre>Messy: '   hello there   '
Clean: 'hello there'</pre>

        <div class="alert alert-info mt-3">
            ✨ This is very useful for cleaning up text that might have accidental spaces. For example, if a user types " yes " instead of "yes" in a form, <code>strip()</code> will fix it! You can even combine it with other methods.
        </div>
        <pre><code># Chaining methods: first strip, then make it lowercase
user_response = "  yes  "
if user_response.strip().lower() == "yes":
    print("Me too! 🍦")</code></pre>
    `},
    ],
    exercises: [
        {
            id: 'name_game',
            version: 1,
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
                    script: [
                        "def check():",
                        "    try:",
                        "        tree = ast.parse(user_code)",
                        "    except SyntaxError:",
                        "        return False, \"Your code has a syntax error.\"",
                        "",
                        "    for node in ast.walk(tree):",
                        "        if isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print':",
                        "            if not (node.args and isinstance(node.args[0], ast.JoinedStr)):",
                        "                continue",
                        "",
                        "            fstring_code = ast.unparse(node.args[0])",
                        "            if 'first_name[0]' in fstring_code and 'last_name[0]' in fstring_code and '.upper()' in fstring_code:",
                        "                return True, \"Correctly used f-string and methods.\"",
                        "    return False, \"💡 Hint: Make sure you are using an f-string with 'first_name[0].upper()' and 'last_name[0].upper()' inside a print() call.\""
                    ].join("\n")
                }
            ],
            starter_code: `first_name = "ada"
last_name = "lovelace"

# --- DO NOT DELETE: Your code starts below ---`,
        },
        {
            id: 'compliment_machine',
            version: 1,
            title: 'The Compliment Machine',
            description: `<p>Using the provided variables, print a compliment. 💬</p>
<p>The output should be: "Zelda loves exploring, that's awesome!"</p>
<pre><code>name = "Zelda"
hobby = "exploring"</code></pre>`,
            solution: `name = "Zelda"
hobby = "exploring"
print(f"{name} loves {hobby}, that's awesome!")`,
            hint: 'Use an f-string to build the sentence. Remember to place the variables `name` and `hobby` inside curly braces `{}` within the string.',
            validation: [
                {
                    type: 'ast_check',
                    script: [
                        "def check():",
                        "    try:",
                        "        tree = ast.parse(user_code)",
                        "    except SyntaxError:",
                        "        return False, \"Your code has a syntax error.\"",
                        "",
                        "    for node in ast.walk(tree):",
                        "        if isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print':",
                        "            if not (node.args and isinstance(node.args[0], ast.JoinedStr)):",
                        "                continue",
                        "            fstring_code = ast.unparse(node.args[0])",
                        "            if '{name}' in fstring_code and '{hobby}' in fstring_code:",
                        "                return True, \"Correctly used variables in f-string.\"",
                        "    return False, \"💡 Hint: Make sure you are using an f-string with the {name} and {hobby} variables inside a print() call.\""
                    ].join("\n")
                }
            ],
            starter_code: `name = "Zelda"
hobby = "exploring"

# --- DO NOT DELETE: Your code starts below ---`,
        },
        {
            id: 'silly_sentence',
            version: 1,
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
                    script: [
                        "def check():",
                        "    try:",
                        "        tree = ast.parse(user_code)",
                        "    except SyntaxError:",
                        "        return False, \"Your code has a syntax error.\"",
                        "",
                        "    for node in ast.walk(tree):",
                        "        if isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print':",
                        "            if not (node.args and isinstance(node.args[0], ast.JoinedStr)):",
                        "                continue",
                        "            fstring_code = ast.unparse(node.args[0])",
                        "            if all(v in fstring_code for v in ['{adjective}', '{noun}', '{verb}', '{adverb}']):",
                        "                return True, \"Correctly used variables in f-string.\"",
                        "    return False, \"💡 Hint: Make sure you are using an f-string with all four variables inside a print() call.\""
                    ].join("\n")
                }
            ],
            starter_code: `adjective = "happy"
noun = "robot"
verb = "sings"
adverb = "loudly"

# --- DO NOT DELETE: Your code starts below ---`,
        },
        {
            id: 'symbol_repeater',
            version: 1,
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
                    script: [
                        "def check():",
                        "    try:",
                        "        tree = ast.parse(user_code)",
                        "    except SyntaxError:",
                        "        return False, \"Your code has a syntax error.\"",
                        "",
                        "    for node in ast.walk(tree):",
                        "        if isinstance(node, ast.BinOp) and isinstance(node.op, ast.Mult):",
                        "            operands = {getattr(node.left, 'id', ''), getattr(node.right, 'id', '')}",
                        "            if 'symbol' in operands and 'count' in operands:",
                        "                return True, \"Correctly used string multiplication.\"",
                        "    return False, \"💡 Hint: Make sure you are multiplying the 'symbol' and 'count' variables together.\""
                    ].join("\n")
                }
            ],
            starter_code: `symbol = "#"
count = 15

# --- DO NOT DELETE: Your code starts below ---`,
        },
        {
            id: 'password_check',
            version: 1,
            title: 'Secret Password Check',
            description: `<p>A user entered a password, but we need to check it without worrying about capitalization or extra spaces. 🤫</p>
<p>Compare the <code>user_input</code> to the <code>secret_password</code> to see if they match. Print <code>True</code> if they match, <code>False</code> otherwise.</p>
<pre><code>user_input = "  PytHoN  "
secret_password = "pYThOn"</code></pre>`,
            solution: `user_input = "  PytHoN  "
secret_password = "pYThOn"
print(user_input.strip().lower() == secret_password.lower())`,
            hint: 'First, clean up the user input by removing extra spaces with `.strip()`. Then, convert both strings to lowercase with `.lower()` before comparing them.',
            validation: [
                {
                    type: 'ast_check',
                    script: [
                        "def check():",
                        "    try:",
                        "        tree = ast.parse(user_code)",
                        "    except SyntaxError:",
                        "        return False, \"Your code has a syntax error.\"",
                        "",
                        "    for node in ast.walk(tree):",
                        "        if isinstance(node, ast.Compare):",
                        "            # Check if the user input side has both strip() and lower()",
                        "            left_side = ast.unparse(node.left)",
                        "            if 'user_input' in left_side and '.strip()' in left_side and '.lower()' in left_side:",
                        "                return True, \"Excellent! You chained .strip() and .lower() together.\"",
                        "    return False, \"💡 Hint: Remember to use both .strip() and .lower() on the user_input variable.\""
                    ].join("\n")
                }
            ],
            starter_code: `user_input = "  PytHoN  "
secret_password = "pYThOn"

# --- DO NOT DELETE: Your code starts below ---`,
        },
        {
            id: 'input_cleaner',
            version: 1,
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
                    script: [
                        "def check():",
                        "    try:",
                        "        tree = ast.parse(user_code)",
                        "    except SyntaxError:",
                        "        return False, \"Your code has a syntax error.\"",
                        "",
                        "    for node in ast.walk(tree):",
                        "        # Check for a call to .strip()",
                        "        if (isinstance(node, ast.Call) and",
                        "            getattr(node.func, 'attr', '') == 'strip'):",
                        "            ",
                        "            # Check if it's called on the correct variable",
                        "            if getattr(node.func.value, 'id', '') == 'user_name':",
                        "                return True, \"Correctly used the .strip() method.\"",
                        "",
                        "    return False, \"💡 Hint: Make sure you are calling .strip() on the 'user_name' variable.\""
                    ].join("\n")
                }
            ],
            starter_code: `user_name = "  alex  "

# --- DO NOT DELETE: Your code starts below ---`
        },
    ]
};

console.log("chapter2 object:", chapter2);
