console.log("Loading chapter4.js..."); // eslint-disable-line no-console

export const chapter4 = {
    title: "Smart Decisions 🧠⚖️<br><small class='text-muted'>If / Elif / Else</small>",
    story: `
        <p>You arrive at the “Temple of Choices.” The walls are covered in glowing doors. Each door opens only if the right condition is met.
        Python, your trusty robot guide, says:</p>
        <blockquote>
            “In coding, I can make decisions too! Just tell me <em>when</em> to open each door.”
        </blockquote>
        <p>Let’s learn how to help Python choose wisely!</p>    
    `,
    sections: [
        {
            title: "1: What’s a Decision?",
            content: `
                <p>A <strong>decision</strong> in code helps your program pick what to do next. If something is true → do this. If not → do something else.</p>
                <p>It’s just like in real life:</p>
                <ul>
                    <li><em>If</em> it’s raining → take an umbrella.</li>
                    <li><em>Else</em> → wear your sunglasses! 😎</li>
                </ul>
            `
        },
        {
            title: "2: The `if` Statement",
            content: `
                <p>Let’s teach Python to make its first choice.</p>
                <pre><code class="language-python">
age = 10

if age >= 13:
    print("Welcome to the teen zone!")
else:
    print("Sorry, you’re not old enough yet.")
                </code></pre>
                <p><b>How it works:</b></p>
                <ol>
                    <li>Python checks the <b>condition</b> (<code>age >= 13</code>).</li>
                    <li>If it’s <b>True</b>, it runs the code inside the <code>if</code>.</li>
                    <li>If it’s <b>False</b>, it runs the code inside the <code>else</code>.</li>
                </ol>
            `
        },
        {
            title: "3: Understanding Conditions",
            content: `
                <p>Conditions are questions Python can answer with <b>True</b> or <b>False</b>.</p>
                <table class="table">
                    <thead><tr><th>Symbol</th><th>Meaning</th><th>Example</th></tr></thead>
                    <tbody>
                        <tr><td><code>==</code></td><td>equal to</td><td><code>score == 100</code></td></tr>
                        <tr><td><code>!=</code></td><td>not equal to</td><td><code>color != "red"</code></td></tr>
                        <tr><td><code>&gt;</code></td><td>greater than</td><td><code>height > 1.5</code></td></tr>
                        <tr><td><code>&lt;</code></td><td>less than</td><td><code>coins < 10</code></td></tr>
                        <tr><td><code>&gt;=</code></td><td>greater or equal</td><td><code>age >= 10</code></td></tr>
                        <tr><td><code>&lt;=</code></td><td>less or equal</td><td><code>speed <= 5</code></td></tr>
                    </tbody>
                </table>
                <pre><code class="language-python">
score = 85
print(score >= 90)  # False
print(score < 100)  # True
                </code></pre>
            `
        },
        {
            title: "4: Multiple Doors (`elif`)",
            content: `
                <p>Sometimes there are <em>more than two</em> options. For that, you can add <code>elif</code> (short for "else if") doors.</p>
                <pre><code class="language-python">
score = 87

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: D")
                </code></pre>
                <p>Python checks each door <b>from top to bottom</b> and stops at the first one that’s true.</p>
            `
        },
        {
            title: "5: Nesting Decisions",
            content: `
                <p>You can even put one decision <em>inside another!</em> This is called <b>nested ifs</b> — like boxes inside boxes.</p>
                <pre><code class="language-python">
age = 10
has_ticket = True

if age >= 10:
    if has_ticket:
        print("You can ride the roller coaster!")
    else:
        print("You need a ticket first!")
else:
    print("You’re too young for this ride.")
                </code></pre>
            `
        },
        {
            title: "6: Logical Operators — Combining Conditions",
            content: `
                <p>What if you want <b>two things to be true</b>? Use <code>and</code>, <code>or</code>, and <code>not</code>.</p>
                <table class="table">
                    <thead><tr><th>Operator</th><th>Meaning</th><th>Example</th></tr></thead>
                    <tbody>
                        <tr><td><code>and</code></td><td>both must be True</td><td><code>age > 8 and has_ticket</code></td></tr>
                        <tr><td><code>or</code></td><td>either can be True</td><td><code>age > 8 or has_ticket</code></td></tr>
                        <tr><td><code>not</code></td><td>flips True/False</td><td><code>not tired</code></td></tr>
                    </tbody>
                </table>
                <pre><code class="language-python">
age = 9
height = 120
if age >= 8 and height >= 100:
    print("You can play the big slide!")
else:
    print("Sorry, maybe next time.")
                </code></pre>
            `
        },
        {
            title: "7: Real-Life Example — Weather Advisor",
            content: `
                <p>Let’s build something useful! This program gives advice based on the temperature.</p>
                <pre><code class="language-python">
temp = int(input("What’s the temperature (°C)? "))

if temp < 0:
    print("❄️ It’s freezing! Wear a jacket.")
elif temp < 20:
    print("🧥 It’s a bit chilly. Take a sweater.")
elif temp <= 30:
    print("😎 It’s warm and nice outside.")
else:
    print("🔥 It’s hot! Stay cool and drink water.")
                </code></pre>
                <p>Try it with different numbers — see how it changes!</p>
            `
        },
        {
            title: "8: Mini-Game — “Guess My Mood!”",
            content: `
                <p>Your program can even respond to words. Let's make a simple game that reacts to how you feel.</p>
                <pre><code class="language-python">
mood = input("How are you feeling? (happy/sad/tired): ")

if mood == "happy":
    print("Yay! Keep smiling 😊")
elif mood == "sad":
    print("Here’s a hug 💖")
elif mood == "tired":
    print("Time for a nap 💤")
else:
    print("Hmm, that’s a mysterious mood 🤔")
                </code></pre>
            `
        },
        {
            title: "9: Truthiness — What Else Is True or False?",
            content: `
                <p>In Python, some values are naturally “falsy” and others are “truthy.” This is a powerful shortcut!</p>
                <p><b>Falsy Values (act like <code>False</code>):</b></p>
                <ul>
                    <li>The number <code>0</code></li>
                    <li>An empty string <code>""</code></li>
                    <li>An empty list <code>[]</code> (you'll learn about these soon!)</li>
                    <li>The special value <code>None</code></li>
                </ul>
                <p>Almost everything else is <b>truthy</b> (acts like <code>True</code>), including any non-zero number and any non-empty string.</p>
                <pre><code class="language-python">
name = "" # An empty string

if name:
    print(f"Hello, {name}!")
else:
    print("I don't know your name.") # This will run

# ---

items_in_cart = 3 # A non-zero number

if items_in_cart:
    print("Time to check out!") # This will run
                </code></pre>
            `
        },
        {
            title: "10: One-Line Decisions (Conditional Expressions)",
            content: `
                <p>For simple if/else logic, you can write it all on one line. This is often called a "ternary operator."</p>
                <p><b>Syntax:</b> <code>value_if_true if condition else value_if_false</code></p>
                <pre><code class="language-python">
age = 15

# Instead of this:
# if age >= 18:
#     status = "adult"
# else:
#     status = "minor"

# You can write this:
status = "adult" if age >= 18 else "minor"

print(status) # Prints "minor"
                </code></pre>
            `
        },
        {
            title: "11: The `pass` Statement — A Placeholder for Later",
            content: `
                <p>What if you're designing your code but aren't ready to write the details yet? If you leave a code block empty, Python will give you an error.</p>
                <p>The <code>pass</code> statement is a special keyword that does nothing. It's a perfect placeholder to keep your code running while you think about what to write next.</p>
                <pre><code class="language-python">
score = 50

if score > 80:
    # TODO: Add a reward for high scores
    pass # No error!
else:
    print("Keep trying!")

# You can also use it in functions you plan to write later
def start_new_level():
    pass # I'll code this part tomorrow
                </code></pre>
                <p>Think of it as a note to yourself that says, "I'll come back to this later."</p>
            `
        },
    ],
    exercises: [
        {
            id: 'adventure_door_game',
            version: 1,
            title: "Adventure Door Game",
            description: `<p>Imagine a player chose a door. Based on the value of the <code>door</code> variable below, reveal what's behind it.</p>
            <ul>
                <li>If the door is "red", print "You found a dragon!"</li>
                <li>If the door is "blue", print "You found treasure!"</li>
                <li>If the door is "green", print "You fell into a trap!"</li>
                <li>For any other choice, print "That's not a valid door!"</li>
            </ul>`,
            starter_code: `door = "blue" # Try changing this to "red", "green", or "yellow"

# --- DO NOT DELETE: Your code starts below ---`,
            solution: `door = "blue"
if door == "red":
    print("You found a dragon!")
elif door == "blue":
    print("You found treasure!")
elif door == "green":
    print("You fell into a trap!")
else:
    print("That's not a valid door!")`,
            hint: "Use an `if`, `elif`, and `else` structure. Compare the `door` variable to 'red', 'blue', and 'green' using `==`.",
            validation: [
                {
                    type: 'ast_check',
                    script: `
def check():
    try:
        tree = ast.parse(user_code)
    except SyntaxError:
        return False, "Your code has a syntax error."

    has_if = any(isinstance(node, ast.If) for node in ast.walk(tree))
    if not has_if:
        return False, "💡 Hint: Make sure you are using an if statement to check the door."
    
    if_nodes = [node for node in ast.walk(tree) if isinstance(node, ast.If)]
    has_elif = any(node.orelse and isinstance(node.orelse[0], ast.If) for node in if_nodes)
    has_else = any(node.orelse and not isinstance(node.orelse[0], ast.If) for node in if_nodes)

    if not (has_elif and has_else):
        return False, "💡 Hint: Did you use both 'elif' and 'else' to handle all the choices?"

    return True, "Structure with if/elif/else looks correct!"
`
                },
                {
                    type: 'output_match_cases',
                    cases: [
                        {
                            name: 'Test with "red"',
                            setup_code: 'door = "red"',
                            expected_output: 'You found a dragon!\n'
                        },
                        {
                            name: 'Test with "blue"',
                            setup_code: 'door = "blue"',
                            expected_output: 'You found treasure!\n'
                        },
                        {
                            name: 'Test with "green"',
                            setup_code: 'door = "green"',
                            expected_output: 'You fell into a trap!\n'
                        },
                        {
                            name: 'Test with "yellow" (invalid)',
                            setup_code: 'door = "yellow"',
                            expected_output: "That's not a valid door!\n"
                        }
                    ]
                }
            ]
        },
        {
            id: 'smart_vending_machine',
            version: 1,
            title: "The Smart Vending Machine",
            description: `<p>A vending machine needs to decide what to offer based on the amount of money provided. Using the <code>money</code> variable, follow these rules:</p>
            <ul>
                <li>If money is less than 5, print "Not enough for a snack."</li>
                <li>If money is 5 or more, but 10 or less, print "You can buy chips."</li>
                <li>If money is more than 10, print "You can buy a meal."</li>
            </ul>`,
            starter_code: `money = 8 # Try changing this to 4 or 12

# --- DO NOT DELETE: Your code starts below ---`,
            solution: `money = 8
if money < 5:
    print("Not enough for a snack.")
elif money <= 10:
    print("You can buy chips.")
else:
    print("You can buy a meal.")`,
            hint: "You can check the conditions in order. First, check if `money < 5`. In the `elif`, you only need to check if `money <= 10`, because the first `if` already handled cases where it's less than 5.",
            validation: [
                {
                    type: 'output_match_cases',
                    cases: [
                        {
                            name: 'Test with 4 (not enough)',
                            setup_code: 'money = 4',
                            expected_output: 'Not enough for a snack.\n'
                        },
                        {
                            name: 'Test with 5 (can buy chips)',
                            setup_code: 'money = 5',
                            expected_output: 'You can buy chips.\n'
                        },
                        {
                            name: 'Test with 10 (can buy chips)',
                            setup_code: 'money = 10',
                            expected_output: 'You can buy chips.\n'
                        },
                        {
                            name: 'Test with 12 (can buy a meal)',
                            setup_code: 'money = 12',
                            expected_output: 'You can buy a meal.\n'
                        }
                    ]
                }
            ]
        },
        {
            id: 'roller_coaster_access',
            version: 1,
            title: "Roller Coaster Access",
            description: `<p>A roller coaster has strict safety rules. A rider must be at least 10 years old AND at least 140cm tall. 🎢</p>
            <p>Using the variables below, check if the rider is allowed. Print "Access granted!" if they meet both requirements, otherwise print "Access denied."</p>`,
            starter_code: `age = 12      # Rider's age
height_cm = 150 # Rider's height in cm

# --- DO NOT DELETE: Your code starts below ---`,
            solution: `age = 12
height_cm = 150
if age >= 10 and height_cm >= 140:
    print("Access granted!")
else:
    print("Access denied.")`,
            hint: "You need to check two conditions in the same `if` statement. Use the `and` keyword to connect them.",
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
        if isinstance(node, ast.If) and isinstance(node.test, ast.BoolOp) and isinstance(node.test.op, ast.And):
            return True, "Great! You've used the 'and' operator to combine conditions."

    return False, "💡 Hint: Make sure you are using the 'and' keyword in your if statement to check both age and height."
`
                },
                {
                    type: 'output_match_cases',
                    cases: [
                        { name: 'Test with valid rider', setup_code: 'age = 12\nheight_cm = 150', expected_output: 'Access granted!\n' },
                        { name: 'Test with rider too young', setup_code: 'age = 9\nheight_cm = 150', expected_output: 'Access denied.\n' },
                        { name: 'Test with rider too short', setup_code: 'age = 12\nheight_cm = 130', expected_output: 'Access denied.\n' },
                        { name: 'Test with rider too young and short', setup_code: 'age = 8\nheight_cm = 120', expected_output: 'Access denied.\n' }
                    ]
                }
            ]
        },
        {
            id: 'silent_greeter',
            version: 1,
            title: "The Silent Greeter",
            description: `<p>You have a program that should greet a user, but only if they have entered a name. 💬</p>
            <p>Check if the <code>user_name</code> variable has any text in it. If it does, print a welcome message. If it's empty, print "Please provide a name to continue."</p>`,
            starter_code: `user_name = "Ada" # Try changing this to "" (an empty string)

# --- DO NOT DELETE: Your code starts below ---`,
            solution: `user_name = "Ada"
if user_name:
    print(f"Welcome, {user_name}!")
else:
    print("Please provide a name to continue.")`,
            hint: "Remember the concept of 'truthiness'! In Python, a non-empty string is considered `True`. You can simply use `if user_name:` to check if it has content.",
            validation: [
                {
                    type: 'output_match_cases',
                    cases: [
                        { name: 'Test with a name', setup_code: 'user_name = "Ada"', expected_output: 'Welcome, Ada!\n' },
                        { name: 'Test with an empty name', setup_code: 'user_name = ""', expected_output: 'Please provide a name to continue.\n' }
                    ]
                }
            ]
        },
        {
            id: 'quick_grade_assignment',
            version: 1,
            title: "Quick Grade Assignment",
            description: `<p>Based on a student's score, you need to assign a "Pass" or "Fail" status. Let's do it in a single line! 🚀</p>
            <p>Using a <strong>conditional expression</strong>, assign the value "Pass" to the <code>status</code> variable if <code>score</code> is 50 or greater, and "Fail" otherwise. Then, print the <code>status</code>.</p>`,
            starter_code: `score = 75 # Try changing this to 40

# --- DO NOT DELETE: Your code starts below ---
status = "" # Assign the correct value here in one line
print(status)`,
            solution: `score = 75
status = "Pass" if score >= 50 else "Fail"
print(status)`,
            hint: "Use the structure: `value_if_true if condition else value_if_false`. The condition is `score >= 50`.",
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
        if isinstance(node, ast.Assign) and isinstance(node.value, ast.IfExp):
            return True, "Excellent! You used a conditional expression."

    return False, "💡 Hint: Make sure you're using the one-line \`... if ... else ...\` syntax to assign the value to the 'status' variable."
`
                },
                { type: 'output_match_cases', cases: [
                    { name: 'Test with passing score', setup_code: 'score = 75', expected_output: 'Pass\n' },
                    { name: 'Test with failing score', setup_code: 'score = 40', expected_output: 'Fail\n' },
                    { name: 'Test with boundary score', setup_code: 'score = 50', expected_output: 'Pass\n' }
                ]}
            ]
        }
    ]
};
