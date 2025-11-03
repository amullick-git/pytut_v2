# Python Adventure: Learn to Code (Ages ~9–11)

> A story‑driven, hands‑on journey through Python for curious kids! Each chapter mixes storytelling, step‑by‑step explanations, fun examples, and challenges. Every topic comes alive with colorful analogies and creative exercises.

---

## How to Use This Book
- **Work a little each day** (20–30 minutes is perfect).
- **Type every example** — that’s how you learn!
- **Try before looking at answers.**
- **Earn badges** for finishing chapters.
- **Ask questions!** Python loves curious minds.

---

## Adventure Map
1. Meet Python — what coding means
2. Talking to the Computer — print and strings
3. Treasure Boxes — variables and types
4. Decisions, Decisions — if/elif/else
5. Loops of Power — for and while
6. Your Own Magic Spells — functions
7. Collections of Things — lists, dicts, tuples, sets
8. Super Shortcuts — comprehensions and slices
9. The World of Files — saving and reading
10. Oops! That’s an Error — handling exceptions
11. Building a Game — Number Guess
12. Level Up — testing with pytest
13. Text Art — drawing shapes with text
14. Time and Randomness — making things move and surprise
15. Data Detectives — CSV and tiny charts
16. The Pet Notebook — your first app
17. Level Next — keep exploring Python

---

## 1. The Beginning — Hello, Python! 🐍✨

**Story:**
You stand at the **Gates of Pythonia**.
A whisper says:

> “Speak the ancient code to awaken me.”

You raise your keyboard and type:

```python
print("Hello, world!")
```

Output:

```
Hello, world!
```

🎉 The gates open — your first Python spell worked!

---

### 🪄 How the Magic Works

* `print` — tells Python to show something.
* `()` — hold what you want to show.
* `" "` — marks it as text (a **string**).

Try more:

```python
print("Welcome to Pythonia!")
print("Magic + Logic = Python!")
```

---

### 🔢 Python Does Math Too

```python
print(5 + 3)
print("2 + 3 =", 2 + 3)
```

Python can talk and count at the same time!

---

### ⚠️ Be Careful

```python
print(Hello)   # ❌ Error — forgot quotes!
```

Always wrap words in quotes so Python knows they’re text.

---

### 🧩 Mini Challenges

1. **Greeting Scroll:**
   Print

   ```
   Welcome to Pythonia!
   Let’s begin our journey!
   ```
2. **Math Wizard:**
   Show results for `2 + 3` and `7 * 2`.
3. **Echo Chamber:**
   Print your name 5 times.

---

### 🌟 What You Learned

* `print()` makes Python speak.
* Text needs quotes; numbers don’t.
* You can mix words + numbers in one print.

**Badge Earned:** 🐍 *Python Apprentice!*

---


## 2. Talking to the Computer 🗣️💻

**Story:**
You’ve just discovered Python’s “Chat Crystal.” When you speak to it, it listens carefully — and answers!
But here’s the trick: you must speak in Python’s special language. Ready to learn how to *talk* to your computer?

---

### Step 1: Saying Hello

Let’s begin the conversation.
In Python, when you want to show something on the screen, you use a **function** called `print()`.

```python
print("Hello, world!")
```

Output:

```
Hello, world!
```

🎉 You just made your computer talk back to you!

Every message must go inside **quotes** — `" "` or `' '` — because that tells Python it’s **text**, not code.

```python
print("I am learning Python!")
print('This is fun!')
```

---

### Step 2: Talking with Words and Numbers

Python can talk about **words** (called *strings*) and **numbers** too!

```python
print("2 + 2 =", 2 + 2)
```

Output:

```
2 + 2 = 4
```

It’s like the computer is explaining what you asked — pretty smart, right?

---

### Step 3: Your Own Sentences

You can print multiple things in one line:

```python
print("My name is", "Ava")
print("I am", 10, "years old")
```

Python automatically adds spaces between the pieces.
But what if you want to **join words** yourself?

---

### Step 4: Joining Words (String Concatenation)

This long word means “stick together.”
You can glue words using the **`+`** sign:

```python
print("I" + " love" + " pizza!")
```

Output:

```
I love pizza!
```

⚠️ Careful — you must add spaces inside the quotes or it’ll look squished!

---

### Step 5: Saving Words for Later (Variables)

Let’s store a name inside a box (a variable) so you can use it again.

```python
name = "Ari"
print("Hello,", name)
```

Now, Python remembers your name!
You can reuse it anywhere in the program.

---

### Step 6: Making the Computer Listen

Now let’s let the computer ask **you** something.

```python
name = input("What is your name? ")
print("Nice to meet you,", name)
```

Whatever you type after the question is saved in the variable `name`.

🪄 Try adding another question:

```python
color = input("What is your favorite color? ")
print(name, "likes the color", color)
```

Now you’re having a real conversation with your program! 💬

---

### Step 7: The Power of F-Strings (Magic Blanks)

There’s an easier and cooler way to mix words and variables: **f-strings** (they start with `f` before the quotes).

```python
name = "Ari"
age = 10
print(f"My name is {name}, and I am {age} years old!")
```

The `{}` are like little windows that show what’s inside your variables.
You can even do math inside them:

```python
print(f"Next year, I’ll be {age + 1} years old!")
```

---

### Step 8: Changing Case

You can make your text louder (uppercase) or softer (lowercase):

```python
word = "Python"
print(word.upper())  # PYTHON
print(word.lower())  # python
```

Or make only the first letter uppercase:

```python
print(word.capitalize())  # Python
```

---

### Step 9: Practice Time 🧠

Let’s mix what you’ve learned.

**Challenge 2A — The Name Game**
Ask for the user’s first and last name. Print their initials like this:

```
A.M.
```

⭐ **Hint:**
Use `.upper()` to make letters capital, and `[0]` to get the first letter.

Example:

```python
first = input("First name: ")
last = input("Last name: ")
print(f"{first[0].upper()}.{last[0].upper()}.")
```

---

**Challenge 2B — The Compliment Machine**
Ask for the user’s name and favorite hobby, then print a compliment like:

```
Ari loves painting — that’s awesome!
```

---

### Step 10: Combine It All!

Here’s a fun little interactive program:

```python
print("Welcome to Chatty Python!")
name = input("What's your name? ")
color = input("What's your favorite color? ")
animal = input("What's your favorite animal? ")

print()
print(f"Hi {name}! So you like {color} {animal}s? Cool choice!")
print(f"I think {animal}s are the best — especially the {color} ones!")
```

Try running it and having a real chat with your computer.
You’re building your very first interactive chatbot. 🤖

---

### Reflection — What You Learned

* `print()` lets your program *speak*.
* Text in quotes = **string**.
* You can mix text and numbers in the same print.
* `input()` lets your program *listen*.
* F-strings `{}` make sentences easier and cleaner.
* String methods like `.upper()` and `.lower()` change how words look.

---

**Badge Earned:** 🔤 *Word Wizard!*

---

Awesome 😄 — let’s keep the story going!
Here’s your fully rewritten **Chapter 3: Treasure Boxes (Variables & Types)** — fun, story-based, and rich with clear explanations and examples for a 10-year-old coder.

---

## 3. Treasure Boxes (Variables & Types) 💎📦

**Story:**
Deep inside the Code Forest, you find glowing treasure boxes of different shapes and colors. Each one can hold something special — a number, a word, or even a True/False switch.
These are **variables** — Python’s magical storage boxes that remember things for you!

---

### Step 1: What’s a Variable?

A **variable** is like a labeled box where you can store a value.
You can open the box later and see what’s inside — or replace it with something new.

```python
coins = 10
player = "Ari"
print(coins)
print(player)
```

Output:

```
10
Ari
```

🪄 You just created two boxes — one named `coins`, one named `player`.

---

### Step 2: Naming Your Boxes

Variable names can be almost anything you like — but they must follow the rules:

* Use **letters**, **numbers**, or **underscores**.
* Can’t start with a number.
* No spaces! (use `_` instead)
* Python is **case-sensitive** → `Name` ≠ `name`.

✅ Good:

```python
score = 100
player_name = "Ari"
speed_level = 3
```

❌ Bad:

```
1st_place = "Ava"    # starts with number
player name = "Bo"   # has space
```

---

### Step 3: Variables Can Change

You can change what’s inside the box at any time:

```python
coins = 10
print(coins)

coins = coins + 5
print(coins)
```

Output:

```
10
15
```

✨ The box `coins` first held 10, now it holds 15.
That’s why they’re called **variables** — their value can *vary*!

---

### Step 4: Different Kinds of Boxes (Data Types)

Python boxes can hold different kinds of treasures — called **types**.

| Type    | Example            | What it means   |
| ------- | ------------------ | --------------- |
| `int`   | `10`, `-3`         | Whole numbers   |
| `float` | `2.5`, `0.1`       | Decimal numbers |
| `str`   | `"Hello"`, `'Cat'` | Text (strings)  |
| `bool`  | `True`, `False`    | Yes/No values   |

Examples:

```python
coins = 12              # int
height = 1.42           # float
name = "Ari"            # str
has_sword = True        # bool
```

You can check what’s inside with:

```python
print(type(name))
```

Output:

```
<class 'str'>
```

---

### Step 5: Mixing Types (and Why It Matters)

You can do math with numbers:

```python
total = 5 + 3
print(total)
```

But what happens if you mix types?

```python
age = 10
print("I am " + age + " years old")  # ❌ Error!
```

Python can’t mix text and numbers directly.
To fix it, turn the number into a string using `str()`:

```python
print("I am " + str(age) + " years old")  # ✅
```

Or use **f-strings** (the magic way):

```python
print(f"I am {age} years old")  # ✅
```

---

### Step 6: Shortcuts in Math (Operators)

```python
coins = 10
coins += 5   # same as coins = coins + 5
coins -= 2   # subtract
coins *= 3   # multiply
coins /= 4   # divide
```

These shortcuts make your code tidy and quick!

---

### Step 7: Turning One Type into Another (Casting)

Sometimes, you’ll want to convert between types.

```python
num = "42"
print(type(num))  # str

num = int(num)
print(type(num))  # int
```

Other useful conversions:

```python
float("3.14")  # from string to decimal
str(123)       # from number to text
bool(0)        # False
bool(10)       # True
```

---

### Step 8: Real-Life Example — Piggy Bank Tracker 🐷

Let’s use what we know to track coins in a piggy bank.

```python
coins = int(input("How many coins do you have? "))
value = 0.25  # each coin is 25 cents
total = coins * value

print(f"You have ${total} worth of coins!")
```

Try it a few times with different numbers!
Python does the math for you.

---

### Step 9: Challenge Time 🎯

**Challenge 3A — The Circle Area Calculator**
Ask for the radius of a circle, then print the area using `π × r²`.
Use `pi = 3.14159`.

Example:

```python
r = float(input("Enter radius: "))
pi = 3.14159
area = pi * r * r
print(f"The area is {area:.2f}")
```

⭐ **Hint:** `{area:.2f}` rounds to 2 decimal places.

---

**Challenge 3B — The Name & Age Story**
Ask for someone’s name and age, then print:
`"Ari is 10 years old and will be 11 next year!"`

---

**Challenge 3C — True or False**
Ask:

```python
has_pet = input("Do you have a pet? (yes/no): ")
```

Convert it into a Boolean value (`True` or `False`) and print a message:

```python
is_pet_owner = has_pet.lower() == "yes"
print("Pet owner:", is_pet_owner)
```

---

### Step 10: Reflection — What You Learned

* Variables are like **boxes** that store data.
* Each box has a name and holds a value (like a number or text).
* Data comes in types: **int**, **float**, **str**, **bool**.
* You can change, add, or reuse variables easily.
* Converting types helps combine text and numbers.

---

**Badge Earned:** 📦 *Box Boss!*

---

Awesome! 🎯
Here’s your fully rewritten, story-rich **Chapter 4: Smart Decisions (If / Elif / Else)** — designed for a 10-year-old learner to *feel* what decision-making in code means.

---

## 4. Smart Decisions (If / Elif / Else) 🧠⚖️

**Story:**
You arrive at the “Temple of Choices.” The walls are covered in glowing doors. Each door opens only if the right condition is met.
Python, your trusty robot guide, says:

> “In coding, I can make decisions too! Just tell me *when* to open each door.”

Let’s learn how to help Python choose wisely!

---

### Step 1: What’s a Decision?

A **decision** in code helps your program pick what to do next.
If something is true → do this.
If not → do something else.

It’s just like in real life:

* *If* it’s raining → take an umbrella.
* *Else* → wear your sunglasses! 😎

---

### Step 2: The `if` Statement

Let’s teach Python to make its first choice.

```python
age = 10

if age >= 13:
    print("Welcome to the teen zone!")
else:
    print("Sorry, you’re not old enough yet.")
```

Output:

```
Sorry, you’re not old enough yet.
```

How it works:

1. Python checks the **condition** (`age >= 13`).
2. If it’s **True**, it runs the code inside the `if`.
3. If it’s **False**, it runs the code inside the `else`.

---

### Step 3: Understanding Conditions

Conditions are questions Python can answer with **True** or **False**.

| Symbol | Meaning          | Example          |
| ------ | ---------------- | ---------------- |
| `==`   | equal to         | `score == 100`   |
| `!=`   | not equal to     | `color != "red"` |
| `>`    | greater than     | `height > 1.5`   |
| `<`    | less than        | `coins < 10`     |
| `>=`   | greater or equal | `age >= 10`      |
| `<=`   | less or equal    | `speed <= 5`     |

Try this:

```python
score = 85
print(score >= 90)  # False
print(score < 100)  # True
```

Python checks each one and gives you the truth! 🪞

---

### Step 4: Multiple Doors (`elif`)

Sometimes there are *more than two* options.

```python
score = 87

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: D")
```

Output:

```
Grade: B
```

Python checks each door **from top to bottom** and stops at the first one that’s true.

---

### Step 5: Nesting Decisions

You can even put one decision *inside another!*

```python
age = 10
has_ticket = True

if age >= 10:
    if has_ticket:
        print("You can ride the roller coaster!")
    else:
        print("You need a ticket first!")
else:
    print("You’re too young for this ride.")
```

This is called **nested ifs** — like boxes inside boxes.

---

### Step 6: Logical Operators — Combining Conditions

What if you want **two things to be true**?
Use `and`, `or`, and `not`.

| Operator | Meaning            | Example                  |
| -------- | ------------------ | ------------------------ |
| `and`    | both must be True  | `age > 8 and has_ticket` |
| `or`     | either can be True | `age > 8 or has_ticket`  |
| `not`    | flips True/False   | `not tired`              |

Example:

```python
age = 9
height = 120
if age >= 8 and height >= 100:
    print("You can play the big slide!")
else:
    print("Sorry, maybe next time.")
```

---

### Step 7: Real-Life Example — Weather Advisor ☀️❄️🌧️

Let’s build something useful!

```python
temp = int(input("What’s the temperature (°C)? "))

if temp < 0:
    print("❄️ It’s freezing! Wear a jacket.")
elif temp < 20:
    print("🧥 It’s a bit chilly. Take a sweater.")
elif temp <= 30:
    print("😎 It’s warm and nice outside.")
else:
    print("🔥 It’s hot! Stay cool and drink water.")
```

Try it with different numbers — see how it changes!

---

### Step 8: Mini-Game — “Guess My Mood!” 🎭

```python
mood = input("How are you feeling? (happy/sad/tired): ")

if mood == "happy":
    print("Yay! Keep smiling 😊")
elif mood == "sad":
    print("Here’s a hug 💖")
elif mood == "tired":
    print("Time for a nap 💤")
else:
    print("Hmm, that’s a mysterious mood 🤔")
```

---

### Step 9: Challenge Time 🧩

**Challenge 4A — Adventure Door Game**
Write a game that asks the player:

> “You see three doors: red, blue, and green. Which do you open?”

Then print what’s behind each one, like:

* Red → “You found a dragon!”
* Blue → “You found treasure!”
* Green → “You fell into a trap!”

**Challenge 4B — The Smart Vending Machine**
Ask for an amount of money.
If it’s less than 5 → print “Not enough for a snack.”
If between 5–10 → print “You can buy chips.”
If above 10 → print “You can buy a meal.”

---

### Step 10: Reflection — What You Learned

* `if`, `elif`, and `else` help Python make choices.
* A **condition** must be True or False.
* You can chain or nest decisions.
* Use `and`, `or`, and `not` to combine rules.
* Decision-making makes your programs *smart!*

---

**Badge Earned:** 🦉 *Wise Owl!*

---


Perfect! 🎢
Let’s continue the adventure with **Chapter 5: Loops of Power (for & while)** — written for a 10-year-old, full of story, humor, and step-by-step discovery to make loops fun and easy to understand.

---

## 5. Loops of Power (for & while) 🔁⚡

**Story:**
You step into the **Tower of Time**, where the walls spin with gears and circles.
A voice whispers:

> “Why do something once… when you can make Python do it *again and again* for you?”

Welcome to **loops** — the magical spell that repeats things automatically!

---

### Step 1: What Is a Loop?

A **loop** is how you tell Python:

> “Do this, not once, but many times.”

Just like brushing your teeth every morning, or jumping rope 10 times — loops repeat actions until it’s time to stop.

---

### Step 2: The `for` Loop — Counting Like a Pro

Let’s count to five!

```python
for i in range(5):
    print("Jump!", i)
```

Output:

```
Jump! 0
Jump! 1
Jump! 2
Jump! 3
Jump! 4
```

Whoa, it started at 0!
That’s because computers like to count from zero (they’re quirky like that 🤓).

---

### Step 3: Understanding `range()`

`range()` is like a magical counting list — but invisible!

```python
range(5)     # counts 0, 1, 2, 3, 4
range(1, 6)  # counts 1, 2, 3, 4, 5
```

So:

```python
for i in range(1, 6):
    print("Jump number", i)
```

Output:

```
Jump number 1
Jump number 2
Jump number 3
Jump number 4
Jump number 5
```

✨ You’re in control of how far it counts!

---

### Step 4: The `while` Loop — Repeat Until Done

The `while` loop keeps going **as long as** something is true.

```python
count = 3
while count > 0:
    print("Countdown:", count)
    count -= 1

print("Blast off!")
```

Output:

```
Countdown: 3
Countdown: 2
Countdown: 1
Blast off!
```

It’s like saying: “While there are still cookies left, keep eating!” 🍪

---

### Step 5: The Difference Between `for` and `while`

| Type    | When to Use                             | Example                    |
| ------- | --------------------------------------- | -------------------------- |
| `for`   | When you know how many times to repeat  | Counting 1–10              |
| `while` | When you repeat until something happens | Until player wins the game |

Example:

```python
# for loop: fixed
for i in range(5):
    print("Clap!")

# while loop: depends on condition
answer = ""
while answer != "stop":
    answer = input("Say 'stop' to end: ")
```

---

### Step 6: Skipping and Stopping

You can skip steps or stop early using:

* `continue` → skip this turn
* `break` → stop the loop entirely

```python
for i in range(1, 6):
    if i == 3:
        continue  # skip 3
    if i == 5:
        break     # stop completely
    print(i)
```

Output:

```
1
2
4
```

---

### Step 7: Looping Over Lists

Loops can go through any list you make!

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print("I like", fruit)
```

Output:

```
I like apple
I like banana
I like cherry
```

This is perfect for checking scores, names, or anything in a collection.

---

### Step 8: Nested Loops — Loops Inside Loops 😲

Like having two clocks ticking at once!

```python
for row in range(3):
    for col in range(3):
        print(f"({row}, {col})")
```

Output:

```
(0, 0)
(0, 1)
(0, 2)
(1, 0)
(1, 1)
(1, 2)
(2, 0)
(2, 1)
(2, 2)
```

That’s how you draw grids or build small games like tic-tac-toe! 🎮

---

### Step 9: Real-Life Example — Even Number Parade 🎉

```python
for num in range(1, 21):
    if num % 2 == 0:
        print(num, end=" ")
```

Output:

```
2 4 6 8 10 12 14 16 18 20
```

✨ `%` means “remainder.”
`num % 2 == 0` checks if it’s even.

---

### Step 10: Challenge Time 🧩

**Challenge 5A — The Cheerleader**
Write a program that prints:

```
Go!
Go!
Go!
Team!
```

(using a loop)

**Challenge 5B — Sum 1 to N**
Ask the player for a number `n`, then calculate the sum of all numbers from 1 to n.
⭐ **Hint:** Use a variable like `total = 0` and add each number inside the loop.

**Challenge 5C — Star Ladder 🌟**
Print:

```
*
**
***
****
*****
```

(using `for` and `range()`)

---

### Step 11: Reflection — What You Learned

* **Loops** repeat code so you don’t have to write it over and over.
* Use `for` when you know *how many* times.
* Use `while` when you loop *until* something happens.
* `break` stops; `continue` skips.
* Loops + lists = power combos for games and data!

---

**Badge Earned:** 🪜 *Loop Ladder!*

---


## 6. Your Own Magic Spells (Functions) 🪄🔮

**Story:**
You arrive at the **Wizard Academy of Pythonia**, where every student learns to cast **spells** — small reusable bits of magic written in code!
Master Pyther says:

> “If you find yourself writing the same code again and again, that’s your clue… make it a *spell!*”

Let’s learn how to create, cast, and power up your own magic spells — Python-style! ⚡

---

### Step 1: What Is a Function?

A **function** is like a magic spell — you write it once, and use it whenever you need!
Instead of copying code, you just say the spell’s name.

```python
def greet():
    print("Hello, Adventurer!")
    print("Welcome to Pythonia!")
```

Now to **cast** your spell:

```python
greet()
```

Output:

```
Hello, Adventurer!
Welcome to Pythonia!
```

🧙 You just created your first custom spell — `greet()`!

---

### Step 2: Understanding the Magic Words

Each spell starts with:

```python
def spell_name():
    # magic instructions
```

* `def` = “define a new spell”
* `spell_name` = your chosen name (no spaces)
* `()` = parentheses — where you’ll later pass ingredients
* `:` = the magic colon that starts the spell
* Everything **indented** below belongs to the spell

---

### Step 3: Adding Ingredients (Parameters)

Spells can take **ingredients** — information they need to work.

```python
def greet(name):
    print(f"Hello, {name}! Welcome back to the Wizard Academy.")
```

Now cast it with an ingredient:

```python
greet("Ari")
```

Output:

```
Hello, Ari! Welcome back to the Wizard Academy.
```

Here, `"Ari"` is the *ingredient*, and `name` is the *parameter* inside the spell.

---

### Step 4: Multiple Ingredients

You can pass more than one ingredient!

```python
def mix_potion(ingredient1, ingredient2):
    print(f"You mix {ingredient1} and {ingredient2}...")
    print("💥 It bubbles and glows!")
```

Cast it:

```python
mix_potion("frog juice", "moonlight dust")
```

Output:

```
You mix frog juice and moonlight dust...
💥 It bubbles and glows!
```

---

### Step 5: Return — When a Spell Gives You Something Back

Some spells don’t just print—they *return* something for you to use later.

```python
def square(number):
    return number * number

result = square(5)
print("The result is", result)
```

Output:

```
The result is 25
```

Think of `return` as *sending energy back* to whoever cast the spell.
Without it, the spell just does an action; with it, the spell gives a result.

---

### Step 6: Default Ingredients

Sometimes your spell can work even if you don’t give it an ingredient.

```python
def greet(name="Apprentice"):
    print(f"Hello, {name}!")
```

Now both work:

```python
greet()
greet("Ava")
```

Output:

```
Hello, Apprentice!
Hello, Ava!
```

Default parameters make your spells friendlier and more flexible.

---

### Step 7: Secret Notes (Docstrings)

Every good wizard labels their spell with a **docstring** so others know what it does.

```python
def multiply(x, y):
    """Return the product of x and y."""
    return x * y
```

Now when you type:

```python
help(multiply)
```

Python shows your note!

---

### Step 8: Magic + Logic Together ✨

Let’s mix decisions inside a spell:

```python
def magic_door(color):
    if color == "red":
        print("🔥 You enter the dragon’s lair!")
    elif color == "blue":
        print("💧 You find a hidden waterfall cave.")
    else:
        print("🌿 You walk into a peaceful forest.")
```

Cast it:

```python
magic_door("blue")
```

Output:

```
💧 You find a hidden waterfall cave.
```

---

### Step 9: Returning to the Lab — Spells That Compute

Let’s make a **calculator spell**:

```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "❌ You can’t divide by zero!"
    return a / b
```

Now try:

```python
print(add(3, 4))
print(divide(8, 0))
```

---

### Step 10: Challenge Time 🧩

**Challenge 6A — Power Spell**
Write a spell `power(base, exponent)` that returns base raised to the exponent.
Example:

```python
power(2, 3) → 8
```

⭐ **Hint:** use `base ** exponent`

---

**Challenge 6B — Weather Spell**
Write a function that takes `temperature` and prints:

* “Cold ❄️” if below 10
* “Warm 🌤️” if 10–25
* “Hot 🔥” if above 25

---

**Challenge 6C — Name Reverser Spell**
Write a function that takes your name and returns it backward.

Example:

```python
reverse_name("Ari") → "irA"
```

---

### Step 11: Reflection — What You Learned

* Functions are **spells** that make your code reusable.
* `def` starts a function.
* **Parameters** are ingredients you give your spell.
* `return` gives back a result.
* You can have **default parameters** for flexibility.
* Docstrings help you and others understand your magic.

---

**Badge Earned:** 🧙 *Spell Caster!*

---


Wonderful! 🧺✨
Here’s **Chapter 7: Collections of Things**, rewritten in the same enchanting, story-rich way — turning lists, tuples, dictionaries, and sets into magical objects in a wizard’s vault of treasures.

---

## 7. Collections of Things 🧺📚

**Story:**
You step into the **Hall of Magical Bags and Boxes** inside the Wizard Academy.
Every shelf is filled with enchanted containers — some that hold *ordered treasures*, some that lock their contents forever, and some that keep only *unique* items.

> Master Pyther smiles and says:
> “A wizard must know where to store their ingredients! Each kind of collection has its own magic.”

Let’s explore these enchanted containers one by one.

---

### Step 1: The Magic Bag — **Lists** 📜

A **list** is like a stretchy magic bag. You can add, remove, or change the treasures inside.

```python
potions = ["healing", "invisibility", "strength"]
print(potions)
print(potions[0])   # first item
```

Output:

```
['healing', 'invisibility', 'strength']
healing
```

You can change or expand your list anytime:

```python
potions[1] = "flying"        # replace item
potions.append("speed")      # add item
print(potions)
```

Output:

```
['healing', 'flying', 'strength', 'speed']
```

🧙‍♀️ Lists are perfect when you need to **keep things in order** and **update them often**.

---

### Step 2: The Unbreakable Chest — **Tuples** 🔒

A **tuple** looks like a list but can’t be changed — ever!
Once it’s sealed, it’s permanent.

```python
coordinates = (3, 4)
print(coordinates)
```

Output:

```
(3, 4)
```

If you try:

```python
coordinates[0] = 10
```

You’ll get an error — the chest is *locked!*

🧊 Use tuples when you want your data to **stay safe and never change**, like map coordinates or colors in an image.

---

### Step 3: The Labeled Drawers — **Dictionaries** 🗄️

A **dictionary** stores treasures as **pairs**: a *label* (key) and a *value*.
It’s like drawers with name tags!

```python
wizard = {
    "name": "Ari",
    "level": 5,
    "house": "Stormvale"
}
print(wizard["name"])
print(wizard["level"])
```

Output:

```
Ari
5
```

You can add or update drawers anytime:

```python
wizard["staff"] = "Oak Wand"
wizard["level"] = 6
print(wizard)
```

Output:

```
{'name': 'Ari', 'level': 6, 'house': 'Stormvale', 'staff': 'Oak Wand'}
```

Dictionaries are awesome for storing **related information** together — like player stats, inventory, or settings.

---

### Step 4: The Bag of Uniques — **Sets** 🔮

A **set** is a magic bag that keeps *only unique* items.
If you drop duplicates in, it quietly ignores them.

```python
ingredients = {"herb", "mushroom", "crystal", "herb"}
print(ingredients)
```

Output:

```
{'herb', 'crystal', 'mushroom'}
```

🧂 Sets are useful when you only care about **what items exist**, not how many.

---

### Step 5: What You Can Do with These Magical Containers

#### Lists

```python
spells = ["light", "shield", "heal"]
spells.append("freeze")
print(len(spells))        # number of items
print("heal" in spells)   # check if exists
```

#### Dictionaries

```python
book = {"title": "Fireball Tome", "pages": 120}
for key, value in book.items():
    print(key, "→", value)
```

#### Sets

```python
found = {"gem", "key"}
hidden = {"key", "map"}
print(found | hidden)   # union
print(found & hidden)   # intersection
```

Output:

```
{'gem', 'key', 'map'}
{'key'}
```

---

### Step 6: Mixing Collections

You can even mix these together for extra magic!

```python
students = [
    {"name": "Ava", "score": 95},
    {"name": "Bo", "score": 88}
]

for s in students:
    print(f"{s['name']} scored {s['score']}")
```

Output:

```
Ava scored 95
Bo scored 88
```

This is how real-world data is stored — like lists of players, books, or pets! 🐾

---

### Step 7: When to Use Which

| Collection | Looks Like        | Can Change? | Keeps Order? | Best For                 |
| ---------- | ----------------- | ----------- | ------------ | ------------------------ |
| **List**   | `["a", "b"]`      | ✅           | ✅            | Ordered, editable groups |
| **Tuple**  | `("a", "b")`      | ❌           | ✅            | Fixed data               |
| **Dict**   | `{"name": "Ava"}` | ✅           | ✅            | Labeled data             |
| **Set**    | `{"a", "b"}`      | ✅           | ❌            | Unique items only        |

---

### Step 8: Challenge Time 🧩

**Challenge 7A — Inventory Bag**
Make a list of 3 items in your backpack.
Then add a new item, remove one, and print what’s left.

**Challenge 7B — Wizard’s Record**
Create a dictionary with your name, age, house, and favorite spell.
Print them all in a friendly sentence using f-strings.

**Challenge 7C — The Unique Ingredient Finder**
Make two sets of ingredients and print:

* all ingredients (`|` union)
* common ones (`&` intersection)
* ingredients in only one bag (`^` symmetric difference)

---

### Step 9: Reflection — What You Learned

* Lists = **flexible bags** for ordered treasures
* Tuples = **locked chests** that can’t change
* Dictionaries = **labeled drawers** with key → value pairs
* Sets = **bags of uniques** (no duplicates!)
* You can loop through and combine them for endless possibilities

---

**Badge Earned:** 🧺 *Collection Keeper!*

---


Perfect! ⚡✨
Here’s your beautifully reimagined **Chapter 8: Super Shortcuts (Comprehensions & Slices)** — written as a fast-paced adventure through the **Hall of Speed and Mirrors**, where the young wizard learns how to write shorter, smarter, and faster Python code.

---

## 8. Super Shortcuts (Comprehensions & Slices) ⚡🪞

**Story:**
You enter the **Hall of Speed and Mirrors**.
Crystals float in the air, reflecting lists that transform and duplicate themselves in seconds.

Master Pyther whispers:

> “When you grow strong in code, you learn to do more… with less.
> Welcome to the world of **comprehensions** and **slices** — the shortcuts of true coding masters.”

---

### Step 1: Why Shortcuts Matter 🏎️

Imagine this:
You have a list of numbers and want to double each one.
Normally you’d do this:

```python
nums = [1, 2, 3, 4, 5]
doubled = []
for n in nums:
    doubled.append(n * 2)
print(doubled)
```

That works, but it’s a lot of typing! 😅

Now watch this:

```python
nums = [1, 2, 3, 4, 5]
doubled = [n * 2 for n in nums]
print(doubled)
```

Output:

```
[2, 4, 6, 8, 10]
```

Same magic, one simple line.
That’s the power of **comprehensions**! 💨

---

### Step 2: Understanding List Comprehensions

List comprehensions are like a spell that **loops, checks, and builds** all in one go.

**Pattern:**

```python
[ new_item  for item in old_list  if condition ]
```

Example — get all even numbers:

```python
nums = [1, 2, 3, 4, 5, 6]
evens = [n for n in nums if n % 2 == 0]
print(evens)
```

Output:

```
[2, 4, 6]
```

**How to read it:**

> “Take each `n` in `nums`, keep it *if it’s even*, and build a list of them.”

---

### Step 3: Transforming with Style

Let’s add some flair! 🎨

Make a list of uppercase words:

```python
words = ["apple", "banana", "cherry"]
loud = [w.upper() for w in words]
print(loud)
```

Output:

```
['APPLE', 'BANANA', 'CHERRY']
```

Turn numbers into their squares:

```python
squares = [x ** 2 for x in range(1, 6)]
print(squares)
```

Output:

```
[1, 4, 9, 16, 25]
```

---

### Step 4: Dictionary Comprehensions 🗝️

You can build entire **dictionaries** in one line too!

```python
nums = [1, 2, 3, 4]
squares = {n: n * n for n in nums}
print(squares)
```

Output:

```
{1: 1, 2: 4, 3: 9, 4: 16}
```

⭐ Perfect for turning lists into lookup tables, like `{word: length}`.

Example:

```python
words = ["fire", "earth", "air", "water"]
lengths = {w: len(w) for w in words}
print(lengths)
```

Output:

```
{'fire': 4, 'earth': 5, 'air': 3, 'water': 5}
```

---

### Step 5: Set Comprehensions 💎

Want only **unique** results? Use a set comprehension!

```python
nums = [1, 2, 2, 3, 3, 3]
unique_squares = {n * n for n in nums}
print(unique_squares)
```

Output:

```
{1, 4, 9}
```

Sets are great for removing duplicates automatically.

---

### Step 6: Slice Magic — Cutting Lists Like a Pro 🔪

In the **Mirror Chamber**, you find floating lists that can be sliced in half!

A **slice** takes a *part* of a list (or string).

```python
nums = [10, 20, 30, 40, 50]
print(nums[1:4])   # from index 1 to 3
```

Output:

```
[20, 30, 40]
```

| Syntax            | Meaning            |
| ----------------- | ------------------ |
| `list[start:end]` | from start → end-1 |
| `list[:end]`      | from beginning     |
| `list[start:]`    | to the end         |
| `list[::step]`    | skip items         |
| `list[::-1]`      | reverse!           |

Examples:

```python
print(nums[:3])    # [10, 20, 30]
print(nums[::2])   # [10, 30, 50]
print(nums[::-1])  # [50, 40, 30, 20, 10]
```

---

### Step 7: Slice Spells for Strings

Slicing works on strings too!

```python
word = "PYTHON"
print(word[:3])   # 'PYT'
print(word[-3:])  # 'HON'
print(word[::-1]) # 'NOHTYP'
```

🎭 You can even reverse a word to make secret spells!

---

### Step 8: Combining Comprehensions + Slices

Let’s mix both for true speed wizardry!

```python
names = ["ava", "ben", "cal", "dia"]
short_names = [n.capitalize() for n in names if len(n) <= 3]
print(short_names)
```

Output:

```
['Ava', 'Ben', 'Cal']
```

Or take only part of a list:

```python
scores = [90, 85, 100, 95, 70, 60]
top3 = sorted(scores)[-3:]
print(top3)
```

Output:

```
[90, 95, 100]
```

---

### Step 9: Challenge Time 🧩

**Challenge 8A — Even Squares**
Use a list comprehension to make a list of the *squares of all even numbers* from 1 to 20.

**Challenge 8B — Word Length Map**
Given a list of words, create a dictionary `{word: length}` using a comprehension.

**Challenge 8C — Slice Fun**
Ask for a word, then:

1. Print the first 3 letters.
2. Print the last 2 letters.
3. Print it backward.

---

### Step 10: Reflection — What You Learned

* **Comprehensions** let you build new lists, sets, or dictionaries fast.
* **Slices** let you grab or reverse parts of lists and strings.
* These shortcuts make your code **cleaner**, **faster**, and **easier** to read.
* Real programmers use these every day to process data quickly!

---

**Badge Earned:** ⚡ *Speed Sorcerer!*

---

Would you like me to continue next with **Chapter 9 (“The World of Files”)**, keeping the same narrative — maybe like “The Library of Living Scrolls,” where kids learn how to save and read data from magical scrolls (files)?

## 9. The World of Files
**Story:** You’ve reached the Library of Knowledge — shelves filled with glowing books. Each book is like a **file**, and inside each book are lines of text that your programs can read or write. Once you learn to talk to these books, your programs can *remember* things even after they stop running!

### What Is a File?
A **file** is a place on your computer where information is stored — like a notebook for your program. When you close Python, everything in memory disappears… unless you’ve written it to a file!

Files can store different types of data:
- **Text files** — words, numbers, sentences (e.g., `.txt`, `.csv`)
- **Image files** — pictures (e.g., `.png`, `.jpg`)
- **Data files** — structured information (e.g., `.json`, `.csv`)

In this chapter, we’ll focus on text files because they’re easiest to see and understand.

---

### Why Do We Use Files?
Without files, every time you close your program, all your data disappears. Using files lets your program:
- **Save progress** (like scores or notes)
- **Load information** when it starts
- **Share data** between programs

**Example:** A diary app could save each entry to a file and read it next time you open it.

---

### Writing to a File
Let’s make a file and write something inside!
```python
with open("notes.txt", "w", encoding="utf-8") as f:
    f.write("Today I learned about Python files!
")
    f.write("They are like digital notebooks.
")
```

When you open `notes.txt` later, you’ll see those sentences.

**How It Works:**
- `open("notes.txt", "w")` opens a file called `notes.txt` in **write** mode.
- The letter `w` means *start fresh* (it replaces the old content).
- The `with` keyword automatically **closes** the file when done.

---

### Reading from a File
Now, let’s read what we wrote!
```python
with open("notes.txt", "r", encoding="utf-8") as f:
    text = f.read()
    print(text)
```
**`r`** means *read mode*. The `.read()` method grabs everything inside the file.

You can also read line by line:
```python
with open("notes.txt", "r", encoding="utf-8") as f:
    for line in f:
        print("Line:", line.strip())
```
`strip()` removes extra spaces and newlines at the end.

---

### Adding to an Existing File (Append Mode)
Want to add more lines without deleting the old ones?
```python
with open("notes.txt", "a", encoding="utf-8") as f:
    f.write("This line was added later!
")
```
**`a`** stands for *append*. It adds to the end of the file.

---

### Example: Saving a List of Items
Suppose you have a list of your favorite games:
```python
games = ["Minecraft", "Roblox", "Zelda"]
with open("games.txt", "w", encoding="utf-8") as f:
    for game in games:
        f.write(game + "
")
```
Now your games are saved line by line in a text file.

You can read them back later:
```python
with open("games.txt", "r", encoding="utf-8") as f:
    for line in f:
        print("I love", line.strip())
```

---

### CSV Files — Data Tables
Sometimes data comes in *rows and columns*, like a spreadsheet. CSV (Comma‑Separated Values) files store that kind of data.
```python
import csv

with open("scores.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "score"])
    writer.writerow(["Ari", 98])
    writer.writerow(["Bo", 87])
```

Now you can open `scores.csv` in Excel or Google Sheets!

To read it:
```python
with open("scores.csv", encoding="utf-8") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
```

---

### When to Use Files
| Task | Type of File | Example |
|------|---------------|----------|
| Saving notes or logs | `.txt` | Diary, story, checklist |
| Storing data tables | `.csv` | Scores, grades, prices |
| Remembering settings | `.json` | Game options, user data |

---

### Challenge 9: Favorite Animals File
Ask the user for their 3 favorite animals. Write them to `animals.txt`. Then read the file and print the animals one by one.

⭐ **Extra Challenge:** After reading, print “I like [animal] too!” for each one.

**Badge:** 📁 *File Friend!* 

---

## 10. Oops! That’s an Error (Exceptions & `try`/`except`)
**Story:** Your robot slips on a banana peel (uh‑oh!) — that slip is an **error**. Good engineers don’t just hope slips never happen; they learn how to catch them safely so the adventure can continue. In Python, we use **exceptions** to signal slips, and **`try`/`except`** to catch them.

### Why `try`/`except` Is Important
Without `try`/`except`, one mistake can **crash the whole program**. With it, your app can:
- Show a **friendly message** instead of scary red text.
- **Recover** and keep going (ask again, choose a default, skip one item).
- **Log** what went wrong (so you can fix it later).

### What Is an Exception?
An exception is a special signal Python raises when something goes wrong.
Common ones you’ll meet:
- `ValueError` → bad value (e.g., “hello” where a number is needed)
- `ZeroDivisionError` → dividing by 0
- `FileNotFoundError` → the file doesn’t exist
- `IndexError` → list index out of range
- `KeyError` → a dictionary key isn’t there
- `TypeError` → wrong type for an operation

### Catching Exceptions (Basic Pattern)
```python
try:
    n = int(input("Pick a number: "))
    print(10 / n)
except ValueError:
    print("Please type a real number, like 3 or 7.")
except ZeroDivisionError:
    print("We can’t divide by zero. Try again!")
```
Python tries the code in `try:`. If a matching problem happens, it jumps to the right `except`.

### One `except` for Many Problems
```python
try:
    n = int(input("Number: "))
    print(100 / n)
except (ValueError, ZeroDivisionError):
    print("That didn’t work — need a non‑zero number.")
```

### Getting the Error Message
```python
try:
    with open("story.txt") as f:
        print(f.read())
except FileNotFoundError as e:
    print("Couldn’t open file:", e)
```
`as e` lets you print or log the exact message.

### `else` and `finally`
- **`else:`** runs only when no error happened.
- **`finally:`** runs **always** (success or error) — great for cleanup.
```python
try:
    n = int(input("How many candies? "))
except ValueError:
    print("That wasn’t a number.")
else:
    print("Yum!", n)
finally:
    print("Thanks for visiting the candy shop!")
```

### Validating Input (Keep Asking Until It’s Good)
```python
def ask_int(prompt: str) -> int:
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            print("Please enter a whole number.")

age = ask_int("Your age: ")
print("Got it:", age)
```
This pattern (loop + `try`/`except`) is super useful in games and apps.

### Safer File Work
```python
filename = input("File to read: ")
try:
    with open(filename, encoding="utf-8") as f:
        for i, line in enumerate(f, start=1):
            print(i, line.strip())
except FileNotFoundError:
    print("Hmm, I can’t find that file.")
```

### Raising Your Own Exceptions
Sometimes *you* decide something is wrong and want to stop.
```python
def percent(p):
    if not 0 <= p <= 100:
        raise ValueError("percent must be 0..100")
    return p / 100
```
Raising an exception is like throwing a flag that says “Stop! Something’s off.”

### Custom (Optional) — Make Your Own Error Type
```python
class NotEnoughCoinsError(Exception):
    pass

def buy(cost, coins):
    if coins < cost:
        raise NotEnoughCoinsError("Need more coins!")
    return coins - cost
```
You can `except NotEnoughCoinsError` to handle that special case.

### Putting It Together — Mini ATM
```python
def withdraw(balance: int) -> int:
    try:
        amt = int(input("Withdraw how much? "))
        if amt <= 0:
            raise ValueError("Amount must be positive")
        if amt > balance:
            raise ValueError("Too much — not enough balance")
    except ValueError as e:
        print("Try again:", e)
        return balance  # no change
    else:
        print("Dispensing", amt)
        return balance - amt
    finally:
        print("Transaction complete (or cancelled).")

balance = 100
balance = withdraw(balance)
print("New balance:", balance)
```

### Debugging Tips for Kids
- **Read the red text** top to bottom; the **last line** names the exception.
- **Print clues** with `print()` to see values before they break.
- **Handle only what you expect.** Don’t write `except:` by itself (it hides problems).

### Challenge 10A — Friendly Divider
Write a program that asks for two numbers and prints the result of dividing them. Handle `ValueError` and `ZeroDivisionError` with friendly messages and ask again until it works.

### Challenge 10B — Safe Opener
Ask for a filename, try to open it, and if it doesn’t exist, offer to create it and write a first line.

**Badge:** 🐞 *Bug Bouncer!* 

---

## 11. Building a Game — Number Guess 🎮

**Story:** The robot challenges you to a guessing duel! It thinks of a secret number, and you must find it by guessing. The robot gives hints — “too high” or “too low.” Each guess teaches you something.

Let’s build this game together, step by step.

---

### Step 1: The Idea

We want a program that:

1. Picks a random number between 1 and 100.
2. Asks the player to guess.
3. Tells them if the guess is too high or too low.
4. Stops when they guess right.

Let’s start simple.

---

### Step 2: Making a Random Secret Number

To pick random numbers, we’ll use Python’s **`random`** module.

```python
import random
secret = random.randint(1, 100)
print(secret)  # for now, we’ll print it to test
```

Run this a few times — see how the number changes? Great!

---

### Step 3: Getting the Player’s Guess

We can use `input()` to ask for a number.

```python
guess = int(input("Guess a number (1–100): "))
print("You guessed:", guess)
```

If you type letters instead of numbers, it’ll crash — we’ll fix that later with `try`/`except` (remember the last chapter!).

---

### Step 4: Compare Guess and Secret

We’ll use **if / elif / else** to give hints.

```python
if guess < secret:
    print("Too low!")
elif guess > secret:
    print("Too high!")
else:
    print("You got it!")
```

Try running this once manually by typing `secret = 42` at the top, so you can test without randomness first.

---

### Step 5: Repeat Until Correct (The Loop!)

We want to keep asking until the player guesses right.

```python
import random
secret = random.randint(1, 100)

while True:
    guess = int(input("Guess the number: "))
    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")
    else:
        print("You got it!")
        break
```

Now it repeats until the correct guess! 🎉

---

### Step 6: Count the Number of Tries

We can track how many guesses the player makes.

```python
import random
secret = random.randint(1, 100)
tries = 0

while True:
    guess = int(input("Guess: "))
    tries += 1
    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")
    else:
        print(f"You got it in {tries} tries!")
        break
```

Now it’s a real game! 🕹️

---

### Step 7: Handle Wrong Inputs Gracefully

What if the player types “apple”? That causes a crash. We can fix that:

```python
import random
secret = random.randint(1, 100)
tries = 0

while True:
    try:
        guess = int(input("Guess: "))
    except ValueError:
        print("Please enter a number!")
        continue

    tries += 1
    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")
    else:
        print(f"🎉 You got it in {tries} tries!")
        break
```

---

### Step 8: Add a Limit (Challenge Mode)

Let’s give the player only 7 tries to win.

```python
import random
secret = random.randint(1, 100)
tries = 0
max_tries = 7

while tries < max_tries:
    try:
        guess = int(input(f"Guess ({max_tries - tries} left): "))
    except ValueError:
        print("Numbers only!")
        continue

    tries += 1

    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")
    else:
        print(f"You got it in {tries} tries! 🏆")
        break
else:
    print(f"Out of tries! The number was {secret}.")
```

Now it’s more exciting — can you guess before your chances run out?

---

### Step 9: Bonus Ideas 💡

Here are fun ways to expand the game:

* **Add difficulty levels** (Easy: 1–50, Hard: 1–200)
* **Keep score** over multiple rounds
* **Give warmer/colder hints** (if the new guess is closer or farther)
* **Save the best score** to a file (use your file skills!)

---

### Reflection — What You Learned

* You combined **variables**, **loops**, **if/else**, **try/except**, and **input/output**.
* You built your first interactive game — that’s a big deal!

**Badge Earned:** 🎮 *Game Maker!*

---
Sure! Here’s the new **Chapter 12** rewritten to make it engaging and educational for a 10-year-old — focusing on *why* testing matters, how to do it, and adding plenty of examples and explanations 👇

---

## 12. Level Up: Testing 🧪

**Story:** You’ve built your first game — awesome! 🎮
Now imagine you’ve made 10 more programs. One day, something breaks. You fix it… but suddenly your old game stops working. Uh oh!

That’s where **tests** come to the rescue — your little robot helpers that check your code automatically.

---

### Why Testing Is Important

**Imagine this:**
You bake a new cookie recipe. Before serving it to your friends, you *taste* one cookie to make sure it’s good.
That’s exactly what testing does — it “tastes” your code before you give it to users.

Testing helps you:

* Catch mistakes *before* they cause big problems
* Feel confident when changing old code
* Save time (you don’t need to test manually every time)
* Make teamwork easier (others can see what the code should do)

---

### How to Test by Hand (the Old Way)

Before automation, we might test like this:

```python
from math import sqrt
print(sqrt(9))  # expecting 3
print(sqrt(16)) # expecting 4
```

If the numbers look right, yay.
But what if you forget one? Or have 100 tests? That’s a lot of printing! 😅

---

### Automated Testing to the Rescue

Python has a superhero library called **pytest** that runs tests *for you*.

Let’s start fresh:

1️⃣ **Install pytest** once:

```bash
pip install pytest
```

2️⃣ **Create a file** named `test_math.py`
Tests usually start with the word **test_**.

```python
def test_addition():
    assert 2 + 3 == 5
```

3️⃣ **Run your tests:**

```bash
pytest -q
```

If everything works, you’ll see:

```
.
1 passed in 0.01s
```

That means your code is perfect (for now 😄).

---

### Understanding `assert`

`assert` means *“I expect this to be true.”*

Example:

```python
x = 5
assert x == 5     # passes
assert x < 10     # passes
assert x > 100    # fails ❌
```

When the test fails, pytest tells you exactly what went wrong.

---

### Testing a Real Function

Let’s test the function we made earlier — `is_prime`.

First, make sure it’s in a file called `math_tools.py`:

```python
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True
```

Now create `test_math_tools.py`:

```python
from math_tools import is_prime

def test_is_prime_basic():
    assert is_prime(2)
    assert is_prime(3)
    assert not is_prime(4)

def test_is_prime_edge_cases():
    assert not is_prime(0)
    assert not is_prime(1)
    assert is_prime(17)
```

Then run:

```bash
pytest -q
```

You should see:

```
..
2 passed in 0.01s
```

Two dots = two tests passed! ✅

---

### What If Something Breaks?

Let’s make a small mistake:

```python
def add(a, b):
    return a - b   # oops, should be +
```

Run your test:

```python
def test_add():
    assert add(3, 2) == 5
```

Output:

```
F
>       assert add(3, 2) == 5
E       AssertionError: assert 1 == 5
```

pytest points straight to the line and shows what went wrong — like a detective clue! 🕵️

---

### Testing More Than Math

You can test **games**, **functions**, even **files**:

```python
from pathlib import Path

def test_file_writing(tmp_path):
    file = tmp_path / \"hello.txt\"
    file.write_text(\"hi!\")
    assert file.read_text() == \"hi!\"
```

`tmp_path` is a safe sandbox pytest gives you — no real files are harmed.

---

### When to Write Tests

Write tests:

* When you finish a new feature
* When you fix a bug (add a test so it doesn’t happen again)
* Before refactoring (so you know you didn’t break anything)

It’s like saving your progress in a video game before entering a boss fight.

---

### Challenge 12A — Test Your Prime Checker

* Write a few tests for `is_prime()` that include small, big, and edge numbers.
* Try to break your code — can it handle `-5` or `1001`?

### Challenge 12B — Test the Number Guess Game

* Move your guessing logic into a function like `check_guess(secret, guess)` that returns “low”, “high”, or “correct”.
* Then test it with pytest!

---

### Reflection: What You Learned

* Tests are like code check-ups that prevent bugs.
* You can use **assert** to express what should be true.
* pytest helps you run many tests automatically.
* Good programmers write **tests first** — it’s called *Test-Driven Development* (TDD).

---

**Badge Earned:** 🥅 *Safety Netter!*

---

Perfect 😊 Here’s **Chapter 13** — rewritten in the same child-friendly, story-driven way, showing how to *draw with text* and making it fun and creative.

---

## 13. Draw With Text (ASCII Art) 🎨

**Story:** You step into the Hall of Artisans. Instead of brushes, the artists use keyboards! They paint with letters, numbers, and symbols. You too can create art — with *code!*

---

### What Is ASCII Art?

ASCII means **American Standard Code for Information Interchange** — it’s just fancy talk for “keyboard characters.”
Every picture you draw here is made of the symbols you already know:
`# * | - + / \`

When you arrange them cleverly, you can draw boxes, mountains, cats, even spaceships!

---

### Step 1: Your First Shape

Let’s start simple: a small rectangle.

```python
print("********")
print("*      *")
print("*      *")
print("********")
```

Output:

```
********
*      *
*      *
********
```

That’s a box! You just made your first *ASCII drawing!* 🖼️

---

### Step 2: Make It Smarter with a Function

Instead of typing every line, let’s make Python do it.

```python
def box(width, height):
    print("+" + "-" * (width - 2) + "+")
    for _ in range(height - 2):
        print("|" + " " * (width - 2) + "|")
    print("+" + "-" * (width - 2) + "+")
```

Now call it:

```python
box(10, 5)
```

Output:

```
+--------+
|        |
|        |
|        |
+--------+
```

Ta-da! You just automated your art.

---

### Step 3: Make a Triangle

Triangles are fun — each line grows one more `*`.

```python
def triangle(height):
    for i in range(1, height + 1):
        print("*" * i)
```

Try:

```python
triangle(5)
```

Output:

```
*
**
***
****
*****
```

Want to flip it upside down?

```python
def upside_down(height):
    for i in range(height, 0, -1):
        print("*" * i)
```

---

### Step 4: Adding Patterns

Let’s make a checkerboard!

```python
def checkerboard(rows, cols):
    for r in range(rows):
        line = ""
        for c in range(cols):
            if (r + c) % 2 == 0:
                line += "#"
            else:
                line += " "
        print(line)
```

Try:

```python
checkerboard(8, 8)
```

Output:

```
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
```

Now you’ve drawn a pattern with code!

---

### Step 5: Add Input — Make It Interactive!

```python
w = int(input("Width: "))
h = int(input("Height: "))
box(w, h)
```

You’re now letting the player choose the size of the art.
This is how real drawing apps start — small shapes, drawn by code.

---

### Step 6: Bonus Art Ideas 💡

* **Pyramid:** Center the `*` by adding spaces.

  ```python
  def pyramid(height):
      for i in range(1, height + 1):
          print(" " * (height - i) + "*" * (2 * i - 1))
  ```

* **Diamond:**

  ```python
  def diamond(size):
      for i in range(1, size + 1):
          print(" " * (size - i) + "*" * (2 * i - 1))
      for i in range(size - 1, 0, -1):
          print(" " * (size - i) + "*" * (2 * i - 1))
  ```

* **Name Banner:**

  ```python
  name = input("Your name: ")
  print("*" * (len(name) + 4))
  print(f"* {name} *")
  print("*" * (len(name) + 4))
  ```

---

### Step 7: Use What You Learned

Here’s what you just used:

* **Loops** → repeat drawing steps
* **Strings** → building lines
* **Functions** → reuse patterns
* **Variables** → change size or shape

You mixed logic and art — that’s the magic of programming! 💫

---

### Challenge 13A — Creative Shape

Draw a **house** using characters like `#` and `/`.
Can you add a door and windows?

### Challenge 13B — Animation (Extra Fun!)

Use the `time` module to make shapes “grow” or “move.”

```python
import time
for i in range(1, 10):
    print("*" * i)
    time.sleep(0.2)
```

---

### Reflection: What You Learned

* You can use code to draw shapes and patterns.
* Loops + text = simple graphics!
* Your imagination is the only limit — combine loops, math, and symbols to draw anything.

---

**Badge Earned:** 🖼️ *Text Artist!*

---


Awesome! 🌟
Here’s the new **Chapter 14: Time & Randomness** — written in the same fun, kid-friendly storytelling style. It helps the learner *feel* what time and randomness do, with examples, experiments, and creative mini-projects.

---

## 14. Time & Randomness ⏱🎲

**Story:**
You enter the Hall of Chaos and Clocks — one side filled with ticking gears, the other with swirling dice and spinning wheels.
The **Clocks** control *when* things happen.
The **Dice** control *what* happens.
Together, they make your programs come alive!

---

### Why Learn About Time and Randomness?

So far, all your programs have been *predictable*: you type something, and Python instantly replies.
But real games and stories have **timing** and **surprises**:

* Enemies that move after a short delay 🕒
* Treasure that appears in a random room 🎁
* A countdown before the race starts 🏁

Let’s learn to control time and chance!

---

### Step 1: Using Time (Pausing & Waiting)

Python can wait — like counting “1 Mississippi…” between actions.
To do that, use the **`time`** module.

```python
import time

print("Get ready...")
time.sleep(2)   # waits for 2 seconds
print("Go!")
```

Output:

```
Get ready...
(2 seconds pass)
Go!
```

Try different numbers: `time.sleep(0.5)` (half a second) or `time.sleep(3)` (3 seconds).

---

### Step 2: Timers and Stopwatches

You can use time to measure *how long something takes.*

```python
import time

start = time.perf_counter()
input("Press Enter to stop the timer! ")
end = time.perf_counter()

print(f"You waited {end - start:.2f} seconds.")
```

Try it! How close can you get to **exactly 5 seconds**? 😄

---

### Step 3: Randomness — The Magic of Unpredictability

Python’s **`random`** module lets you roll dice, pick cards, or make choices.

```python
import random

number = random.randint(1, 6)   # like a 6-sided die
print("You rolled:", number)
```

Each time you run it, you might get a different number.

---

### Step 4: Picking Random Items

Let Python make decisions for you!

```python
import random

colors = ["red", "blue", "green", "yellow"]
choice = random.choice(colors)
print("The chosen color is:", choice)
```

Or shuffle a deck of cards:

```python
deck = ["A", "2", "3", "4", "5"]
random.shuffle(deck)
print(deck)
```

Now every run feels new — that’s the magic of randomness!

---

### Step 5: Combining Time + Randomness

Let’s make a **reaction timer** game!

```python
import time, random

print("Get ready...")
time.sleep(random.uniform(1, 4))  # wait 1–4 seconds randomly
print("GO!")

start = time.perf_counter()
input("Press Enter now! ")
end = time.perf_counter()

reaction = end - start
print(f"Your reaction time: {reaction:.3f} seconds!")
```

Can you beat **0.3 seconds**? 👀
Try again and again — see how your times change.

---

### Step 6: Random Challenges

Here’s how you can mix randomness into your own programs:

**Random Events:**

```python
import random

events = ["found treasure!", "met a dragon!", "fell into a pit!", "found gold!"]
print("You", random.choice(events))
```

**Random Password Generator:**

```python
import random, string

chars = string.ascii_letters + string.digits
password = "".join(random.choice(chars) for _ in range(8))
print("Your new password is:", password)
```

**Random Story:**

```python
import random

names = ["Ava", "Ben", "Cal", "Dina"]
places = ["forest", "castle", "desert", "moon"]
actions = ["found", "lost", "built", "destroyed"]
objects = ["a sword", "a map", "a robot", "a dragon egg"]

print(f"{random.choice(names)} {random.choice(actions)} {random.choice(objects)} in the {random.choice(places)}!")
```

Every time you run it, you get a brand-new story! ✨

---

### Step 7: Practice Ideas

**Mini-Projects to Try:**

1. **Rock–Paper–Scissors Game**
   Use `random.choice()` to make the computer pick one.
2. **Countdown Timer**
   Ask for seconds, count down using `time.sleep(1)` each loop.
3. **Slot Machine**
   Print random emojis each spin and check for matches.
4. **Lucky Draw**
   Randomly choose a winner from a list of names.

---

### Reflection — What You Learned

* `time.sleep()` lets your code *pause or delay actions.*
* `time.perf_counter()` measures how long something takes.
* The `random` module adds surprise and variety to your programs.
* Combining time + randomness helps make *games, animations,* and *simulations* feel real!

---

**Badge Earned:** ⏱️ *Time Tamer!*

---


