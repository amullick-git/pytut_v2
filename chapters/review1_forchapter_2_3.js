console.log("Loading review1_forchapter_2_3.js..."); // eslint-disable-line no-console

export const review1_forchapter_2_3 = {
    title: "Review: The Adventure So Far 📜<br><small class='text-muted'>The Chat Crystal & Treasure Boxes</small>",
    story: `
        <p>You've learned to talk to the computer with the <strong>Chat Crystal</strong> and how to store your treasures in <strong>Magical Boxes</strong>. Now it's time to combine your powers!</p>
        <p>This review will test your skills in using <code>print()</code>, <code>input()</code>, variables, types, and f-strings together to build even cooler things. Let's see what you remember!</p>
    `,
    sections: [
        {
            title: "1: Core Skills Review",
            content: `
                <p>Let's quickly recap the essential spells you've learned.</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Concept</th>
                            <th>Example</th>
                            <th>What it does</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>print()</code></td>
                            <td><code>print("Hello!")</code></td>
                            <td>Displays a message on the screen.</td>
                        </tr>
                        <tr>
                            <td><code>input()</code></td>
                            <td><code>name = input("Name?")</code></td>
                            <td>Asks the user for text and gives it back as a string.</td>
                        </tr>
                        <tr>
                            <td>Variables</td>
                            <td><code>score = 100</code></td>
                            <td>Stores a value in a named box.</td>
                        </tr>
                        <tr>
                            <td>Data Types</td>
                            <td><code>"Hi"</code>, <code>42</code>, <code>3.14</code>, <code>True</code></td>
                            <td>The type of treasure (string, integer, float, boolean).</td>
                        </tr>
                        <tr>
                            <td>Type Casting</td>
                            <td><code>num = int("50")</code></td>
                            <td>Converts a value from one type to another (e.g., string to integer).</td>
                        </tr>
                        <tr>
                            <td>f-strings</td>
                            <td><code>print(f"Score: {score}")</code></td>
                            <td>Easily mixes variables and text in a single string.</td>
                        </tr>
                        <tr>
                            <td>String Methods</td>
                            <td><code>" Hi ".strip().upper()</code></td>
                            <td>Cleans up or changes text (e.g., removes spaces, makes uppercase).</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        {
            title: "2: Combining Input, Casting, and Variables",
            content: `
                <p>This is a very common and powerful pattern in programming. You ask the user for information, which always comes as a string, and you convert it to the type you need to work with.</p>
                <pre><code class="language-python">
# 1. Get input (always a string)
age_str = input("How old are you? ")

# 2. Cast it to the correct type (an integer)
age_int = int(age_str)

# 3. Use it in a calculation
age_in_dog_years = age_int * 7

# 4. Display the result
print(f"If you were a dog, you'd be {age_in_dog_years} years old! 🐶")
                </code></pre>
                <p>Mastering this sequence—input, cast, process, output—is key to creating interactive programs.</p>
            `
        }
    ],
    exercises: [
        {
            id: 'mad_libs_story',
            version: 1,
            title: "Mad Libs Story Creator",
            description: `<p>Let's create a silly story! Using the pre-defined variables for a noun, a verb, and an adjective, print a funny sentence.</p>
            <p>Your program should:</p>
            <ol>
                <li>Use the <code>noun</code>, <code>verb</code>, and <code>adjective</code> variables.</li>
                <li>Print a story in the format: "The [adjective] [noun] decided to [verb] on the moon."</li>
            </ol>
            <p>For example, if the adjective was "funny", the noun was "dragon", and the verb was "juggle", your program would print a sentence combining them in the specified format.</p>`,
            starter_code: `noun = "cat"
verb = "dance"
adjective = "silly"

# --- DO NOT DELETE: Your code starts below ---

# Print the final story using an f-string
`,
            solution: `noun = "cat"
verb = "dance"
adjective = "silly"
print(f"The {adjective} {noun} decided to {verb} on the moon.")`,
            hint: "Use a single `print()` with an f-string to build the final sentence using the provided variables.",
            validation: [
                {
                    type: 'output_match_cases',
                    cases: [
                        {
                            name: 'Test with "cat", "dance", "silly"',
                            setup_code: 'noun = "cat"\nverb = "dance"\nadjective = "silly"',
                            expected_output: 'The silly cat decided to dance on the moon.\n'
                        },
                        {
                            name: 'Test with "robot", "sing", "happy"',
                            setup_code: 'noun = "robot"\nverb = "sing"\nadjective = "happy"',
                            expected_output: 'The happy robot decided to sing on the moon.\n'
                        }
                    ]
                }
            ]
        },
        {
            id: 'simple_tip_calculator',
            version: 1,
            title: "Simple Tip Calculator",
            description: `<p>You're at a restaurant and need to calculate a tip. Using the given bill amount, calculate a 20% tip.</p>
            <p>Your program should:</p>
            <ol>
                <li>Use the <code>bill_str</code> variable which contains the bill amount as a string.</li>
                <li>Convert the string to a floating-point number.</li>
                <li>Calculate the tip (bill amount * 0.20).</li>
                <li>Print the tip amount in the format: "A 20% tip would be: $[tip_amount]".</li>
            </ol>
            <p>For example, if the bill amount was "100.00", a 20% tip would be 20.0.</p>
`,
            starter_code: `bill_str = "50.00"

# --- DO NOT DELETE: Your code starts below ---

# 1. Convert it to a float and calculate the tip


# 2. Print the result
`,
            solution: `bill_str = "50.00"
bill_float = float(bill_str)
tip = bill_float * 0.20
print(f"A 20% tip would be: ${'{tip}'}")`,
            hint: "You'll need to use `float()` to convert the `bill_str` to a number you can do math with. The formula for the tip is `bill * 0.20`.",
            validation: [
                {
                    type: 'output_match_cases',
                    cases: [
                        {
                            name: 'Test with 50.0',
                            setup_code: 'bill_str = "50.0"',
                            expected_output: 'A 20% tip would be: $10.0\n'
                        },
                        {
                            name: 'Test with 12.50',
                            setup_code: 'bill_str = "12.50"',
                            expected_output: 'A 20% tip would be: $2.5\n'
                        }
                    ]
                }
            ]
        },
        {
            id: 'profile_builder',
            version: 1,
            title: "User Profile Builder",
            description: `<p>Create a mini user profile. Using the provided name and age, greet the user with a message that also tells them their age next year.</p>
            <p>Your program should:</p>
            <ol>
                <li>Use the <code>name_input</code> and <code>age_input</code> variables.</li>
                <li>Clean the name by removing any extra spaces.</li>
                <li>Convert the age to an integer.</li>
                <li>Print a message in the format: "Hello [Name]! Next year you will be [age+1]."</li>
            </ol>
            <p>For example, if a user named "Zoe" was "25", the output would mention that they will be 26 next year.</p>`,
            starter_code: `name_input = "  Alex  "
age_input = "10"

# --- DO NOT DELETE: Your code starts below ---
`,
            solution: `name_input = "  Alex  "
age_input = "10"
cleaned_name = name_input.strip()
age_int = int(age_input)
print(f"Hello {cleaned_name}! Next year you will be {age_int + 1}.")`,
            hint: "Use `.strip()` on the `name_input` to clean it. Use `int()` on the `age_input` to convert it. You can do the `+ 1` math right inside the f-string's curly braces `{}`.",
            validation: [
                {
                    type: 'output_match_cases',
                    cases: [
                        {
                            name: 'Test with "  Alex  " and "10"',
                            setup_code: 'name_input = "  Alex  "\nage_input = "10"',
                            expected_output: 'Hello Alex! Next year you will be 11.\n'
                        },
                        {
                            name: 'Test with "Zoe" and "25"',
                            setup_code: 'name_input = "Zoe"\nage_input = "25"',
                            expected_output: 'Hello Zoe! Next year you will be 26.\n'
                        }
                    ]
                }
            ]
        }
    ]
};