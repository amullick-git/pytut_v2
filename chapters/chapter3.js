export const chapter3 = {
    title: "Treasure Boxes (Variables & Types) 💎📦",
    content: `
        <div class="alert alert-info">
            <p><strong>Story:</strong><br>
                Deep inside the Code Forest, you find glowing treasure boxes of different shapes and colors. Each one can hold something special — a number, a word, or even a True/False switch.
                These are <strong>variables</strong> — Python's magical storage boxes that remember things for you!
            </p>
        </div>

        <h3>Step 1: Your First Treasure Box 📦</h3>
        <pre><code>age = 11
print("I am", age, "years old")</code></pre>

        <h3>Step 2: The Magic of Strings 📜</h3>
        <pre><code>greeting = "Hello, adventurer!"
print(greeting)</code></pre>

        <h3>Step 3: Numbers are Treasures Too! 🪙</h3>
        <pre><code>print("In 5 years, I will be", 11 + 5, "years old")</code></pre>

        <h3>Step 4: The Great Switcheroo (True/False) 🎚️</h3>
        <pre><code>is_adventurer = True
print("Are you an adventurer?", is_adventurer)</code></pre>
    `,
    exercises: [
        {
            id: 'circle_area',
            title: 'The Circle Area Calculator',
            description: 'Ask for the radius of a circle, then print the area using π × r².',
            solution: `r = float(input("Enter radius: "))
    pi = 3.14159
    area = pi * r * r
    print(f"The area is {area}:.2f}")`,
            hint: 'Remember to use float() for decimal numbers'
        }
    ]
};
