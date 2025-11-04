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
        }
    ]
};
