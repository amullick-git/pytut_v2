console.log("Loading chapter3.js..."); // eslint-disable-line no-console

export const chapter3 = {
    title: "The Treasure Boxes 📦<br><small class='text-muted'>Variables & Types</small>",
    story: `
        <p>Deep inside the Code Forest, you find glowing treasure boxes of different shapes and colors. Each one can hold something special—a number, a word, or even a True/False switch.
        These are <strong>variables</strong> — Python's magical storage boxes that remember things for you!</p>
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
            content: `<p>Variable names can be almost anything you like, but they must follow a few rules:</p>
        <ul>
            <li>Must start with a letter (<code>a-z</code>, <code>A-Z</code>) or an underscore (<code>_</code>).</li>
            <li>The rest of the name can contain letters, numbers, or underscores.</li>
            <li>No spaces or special characters like <code>!</code>, <code>@</code>, <code>#</code>, <code>$</code>.</li>
            <li>They are <strong>case-sensitive</strong>, so <code>name</code> and <code>Name</code> are different variables.</li>
        </ul>
        <div class="row">
            <div class="col-md-6">
                <p class="text-success">✅ Good Names:</p>
                <pre><code>player_score\nlevel_3\nsecret_key</code></pre>
            </div>
            <div class="col-md-6">
                <p class="text-danger">❌ Bad Names:</p>
                <pre><code>3rd_level  # Starts with a number\nplayer score # Contains a space</code></pre>
            </div>
        </div>
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
height = 1.42           # float (for decimals)
name = "Ari"            # str (for text)
has_sword = True        # bool (for True/False)</code></pre>
        <p>You can ask Python what type a variable is using the <code>type()</code> function:</p>
        <pre><code>print(type(coins))  # Output: &lt;class 'int'&gt;</code></pre>
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
print(num_as_int * 2) # Output: 84</code></pre>`
        }
    ],
    exercises: [
        {
            id: 'circle_area',
            version: 1,
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

# --- DO NOT DELETE: Your code starts below ---`
        },
        {
            id: 'name_age_story',
            version: 1,
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

# --- DO NOT DELETE: Your code starts below ---`
        },
        {
            id: 'pet_owner_check',
            version: 1,
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

# --- DO NOT DELETE: Your code starts below ---`
        }
        ,
        {
            id: 'item_cost_calculator',
            version: 1,
            title: 'Item Cost Calculator',
            description: `<p>You're buying 3 potions that cost "15.5" gold each. The price is given as a string. 🧪</p>
<p>Calculate the total cost and print it in a user-friendly message: "Total cost: 46.5 gold"</p>
<pre><code>item_price_str = "15.5"
quantity = 3</code></pre>`,
            solution: `item_price_str = "15.5"
quantity = 3
item_price_float = float(item_price_str)
total_cost = item_price_float * quantity
print(f"Total cost: {total_cost} gold")`,
            validation: [
                {
                    type: 'ast_check',
                    script: `
def check():
    try:
        tree = ast.parse(user_code)
    except SyntaxError:
        return False, "Your code has a syntax error."

    has_float_cast = any(isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'float' for node in ast.walk(tree))
    if not has_float_cast:
        return False, "💡 Hint: Did you remember to convert the price from a string to a number using float()?"

    return True, "Correctly used float() to convert the price."
`
                }
            ],
            hint: 'First, convert `item_price_str` to a number using `float()`. Then, multiply it by the `quantity`. Finally, use an f-string to print the result.',
            starter_code: `item_price_str = "15.5"
quantity = 3

# --- DO NOT DELETE: Your code starts below ---`
        }
        ,
        {
            id: 'potion_distribution',
            version: 1,
            title: 'Potion Distribution',
            description: `<p>You have 17 health potions to distribute among 5 adventurers. 🧙‍♂️</p>
<p>Calculate how many potions each adventurer gets and how many are left over. This requires two special operators:</p>
<ul>
    <li><code>//</code> (Integer Division): Divides and rounds down to the nearest whole number.</li>
    <li><code>%</code> (Modulo): Gives you the remainder of a division.</li>
</ul>
<pre><code>potions = 17
adventurers = 5
adventurers = 5</code></pre>`,
            solution: `potions = 17
adventurers = 5
potions_per_adventurer = potions // adventurers
leftover_potions = potions % adventurers
print(f"Each adventurer gets {potions_per_adventurer} potions.")
print(f"There are {leftover_potions} potions left over.")`,
            validation: [
                {
                    type: 'ast_check',
                    script: `
def check():
    try:
        tree = ast.parse(user_code)
    except SyntaxError:
        return False, "Your code has a syntax error."

    has_floor_div = any(isinstance(node, ast.FloorDiv) for node in ast.walk(tree))
    has_mod = any(isinstance(node, ast.Mod) for node in ast.walk(tree))

    if not has_floor_div:
        return False, "💡 Hint: Did you use the integer division operator (//) to see how many potions each adventurer gets?"
    if not has_mod:
        return False, "💡 Hint: Don't forget to use the modulo operator (%) to find the leftover potions."

    return True, "Great use of // and % operators!"
`
                }
            ],
            hint: 'Use `//` to find how many whole potions each person gets. Use `%` to find what is remaining.',
            starter_code: `potions = 17
adventurers = 5

# --- DO NOT DELETE: Your code starts below ---`
        },
        {
            id: 'level_up',
            version: 1,
            title: 'Level Up!',
            description: `<p>A player's level is stored in a string. You need to extract the number, add 1 to it, and announce their new level. 🚀</p>
<p>The final output should be: "Level up! You are now level 9."</p>
<pre><code>level_string = "Level: 8"</code></pre>`,
            solution: `level_string = "Level: 8"
level_number_str = level_string.split(": ")[1]
level_number_int = int(level_number_str)
new_level = level_number_int + 1
print(f"Level up! You are now level {new_level}.")`,
            validation: [
                {
                    type: 'ast_check',
                    script: `
def check():
    try:
        tree = ast.parse(user_code)
    except SyntaxError:
        return False, "Your code has a syntax error."

    has_split = any('.split(' in ast.unparse(node) for node in ast.walk(tree) if isinstance(node, ast.Call))
    has_int_cast = any(isinstance(node, ast.Call) and getattr(node.func, 'id', '') == 'int' for node in ast.walk(tree))

    if not has_split:
        return False, "💡 Hint: Try using the .split() method to separate the text from the number."
    if not has_int_cast:
        return False, "💡 Hint: After you get the number as a string, did you remember to convert it to an integer using int()?"

    return True, "Excellent! You combined string splitting and type casting."
`
                }
            ],
            hint: 'First, use `.split(": ")[1]` to get the number part of the string. Then, convert that part to an integer with `int()`. Finally, add 1 and print the result in an f-string.',
            starter_code: `level_string = "Level: 8"

# --- DO NOT DELETE: Your code starts below ---`
        }
    ]
};
