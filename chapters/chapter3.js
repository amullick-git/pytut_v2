console.log("Loading chapter3.js...");

export const chapter3 = {
    title: "The Treasure Boxes 💎📦<br><small class='text-muted'>Variables & Types</small>",
    story: `
        <div class="alert alert-info">
            <p>
                Deep inside the Code Forest, you find glowing treasure boxes of different shapes and colors. Each one can hold something special—a number, a word, or even a True/False switch.
                These are <strong>variables</strong> — Python's magical storage boxes that remember things for you!
            </p>
        </div>
    `,
    sections: [
        {
            title: "1: What’s a Variable?",
            content: `<p>A <strong>variable</strong> is like a labeled box where you can store a value. You can open the box later and see what’s inside—or replace it with something new.</p>
        <pre><code>coins = 10
player = "Ari"
print(coins)
print(player)</code></pre>
        <p>🪄 You just created two boxes—one named <code>coins</code>, one named <code>player</code>.</p>
        `},
        {
            title: "2: Naming Your Boxes",
            content: `<p>Variable names can be almost anything you like—but they must follow the rules:</p>
        <ul>
            <li>Use <strong>letters</strong>, <strong>numbers</strong>, or <strong>underscores</strong>.</li>
            <li>Can’t start with a number.</li>
            <li>No spaces! (use <code>_</code> instead)</li>
            <li>Python is <strong>case-sensitive</strong> → <code>Name</code> ≠ <code>name</code>.</li>
        </ul>

        `},
        {
            title: "3: Variables Can Change",
            content: `<p>You can change what’s inside the box at any time:</p>
        <pre><code>coins = 10
print(coins)
coins = coins + 5
print(coins)</code></pre>
        <p>✨ The box <code>coins</code> first held 10, now it holds 15. That’s why they’re called <strong>variables</strong>—their value can <em>vary</em>!</p>
        `},
        {
            title: "4: Different Kinds of Boxes (Data Types)",
            content: `<p>Python boxes can hold different kinds of treasures—called <strong>types</strong>.</p>
        <ul>
            <li><code>int</code>: Whole numbers like <code>10</code> or <code>-3</code>.</li>
            <li><code>float</code>: Decimal numbers like <code>2.5</code> or <code>0.1</code>.</li>
            <li><code>str</code>: Text (strings) like <code>"Hello"</code> or <code>'Cat'</code>.</li>
            <li><code>bool</code>: Yes/No values like <code>True</code> or <code>False</code>.</li>
        </ul>
        <pre><code>coins = 12              # int
height = 1.42           # float
name = "Ari"            # str
has_sword = True        # bool</code></pre>

        `},
        {
            title: "5: Mixing Types (and Why It Matters)",
            content: `<p>You can do math with numbers, but what happens if you mix types?</p>
        <pre><code>age = 10
print("I am " + age + " years old")  # ❌ Error!</code></pre>
        <p>To fix it, turn the number into a string using <code>str()</code> or use an f-string:</p>
        <pre><code>age = 10
print("I am " + str(age) + " years old")  # ✅
print(f"I am {age} years old")  # ✅ Also great!</code></pre>
        `},
        {
            title: "6: Shortcuts in Math (Operators)",
            content: `<pre><code>coins = 10
coins += 5   # same as coins = coins + 5
coins -= 2   # subtract
coins *= 3   # multiply
coins /= 4   # divide</code></pre>
        <p>These shortcuts make your code tidy and quick!</p>
        `},
        {
            title: "7: Turning One Type into Another (Casting)",
            content: `<p>Sometimes, you’ll want to convert between types.</p>
        <pre><code>num_as_string = "42"
num_as_int = int(num_as_string)
print(num_as_int * 2) # Output: 84</code></pre>
    `}
    ], // <-- The comma was moved here, after the closing brace of the last object.
    exercises: [
        {
            id: 'circle_area',
            title: 'The Circle Area Calculator',
            description: `<p>Calculate the area of a circle with a radius of 5. 🎯</p>
<p>The formula is <code>π × r²</code>. Use the provided variables and print the result.</p>
<pre><code>radius = 5
pi = 3.14159</code></pre>`,
            solution: `radius = 5
pi = 3.14159
area = pi * radius * radius
print(area)`,
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
        if isinstance(node, ast.Assign) and getattr(node.targets[0], 'id', '') == 'area':
            return True, "Correctly assigned the result to the 'area' variable."
    return False, "💡 Hint: Make sure you are creating a variable named 'area' to store the result."
`
                }
            ],
            hint: 'Multiply pi by the radius, and then by the radius again. Or use the exponent operator: `pi * radius ** 2`.',
            starter_code: `radius = 5
pi = 3.14159

# Your code here to calculate and print the area.`
        },
        {
            id: 'name_age_story',
            title: 'The Name & Age Story',
            description: `<p>Using the variables below, create a story. ✍️</p>
<p>The output should be: "Ari is 10 years old and will be 11 next year!"</p>
<pre><code>name = "Ari"
age = 10</code></pre>`,
            solution: `name = "Ari"
age = 10
print(f"{name} is {age} years old and will be {age + 1} next year!")`,
            validation: [
                { 
                    type: 'ast_check',
                    script: `
def check():
    try:
        tree = ast.parse(user_code)
    except SyntaxError:
        return False, "Your code has a syntax error and could not be checked."

    for node in ast.walk(tree):
        if isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'print':
            if not (node.args and isinstance(node.args[0], ast.JoinedStr)):
                continue # Not a print call with an f-string, check next one

            # It's a print call with an f-string, now check its contents
            fstring_vars = set()
            for value in node.args[0].values:
                if isinstance(value, ast.FormattedValue):
                    # Check for simple variables like {name}
                    if isinstance(value.value, ast.Name):
                        fstring_vars.add(value.value.id)
                    # Check for variables inside expressions like {age + 1}
                    elif isinstance(value.value, ast.BinOp):
                        if isinstance(value.value.left, ast.Name):
                            fstring_vars.add(value.value.left.id)
            
            if 'name' in fstring_vars and 'age' in fstring_vars:
                return True, "Correctly used variables in f-string."

    return False, "💡 Hint: Make sure you are using an f-string with the {name} and {age} variables inside a print() call."
`
                }
            ],
            hint: 'Use an f-string to combine the variables. You can do math like `age + 1` right inside the curly braces!',
            starter_code: `name = "Ari"
age = 10

# Your code here to print the story.`
        },
        {
            id: 'pet_owner_check',
            title: 'True or False Pet Owner',
            description: `<p>A user told us if they have a pet. We need to turn their answer into a "boolean" value (True or False). 🐾</p>
<p>Check if the <code>has_pet_answer</code> is "yes" (ignoring case). Print <code>True</code> if it is, and <code>False</code> otherwise.</p>
<pre><code>has_pet_answer = "Yes"</code></pre>`,
            solution: `has_pet_answer = "Yes"
is_pet_owner = has_pet_answer.lower() == "yes"
print(is_pet_owner)`,
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
            if '.lower()' in ast.unparse(node):
                return True, "Correctly used the .lower() method in the comparison."
    return False, '💡 Hint: Remember to use the .lower() method to compare the strings.'
`
                }
            ],
            hint: 'First, convert the `has_pet_answer` to lowercase using `.lower()`. Then, compare it to the string "yes" using `==`.',
            starter_code: `has_pet_answer = "Yes"

# Your code here to check if the answer is "yes"
# and print the boolean result.`
        }
    ]
};

console.log("chapter3 object:", chapter3);
