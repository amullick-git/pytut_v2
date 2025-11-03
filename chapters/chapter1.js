export const chapter1 = {
    title: "The Beginning — Hello, Python! 🐍✨",
    content: `
        <div class="alert alert-info">
            <p>You stand at the <strong>Gates of Pythonia</strong>. A whisper says:
            <blockquote>"Speak the ancient code to awaken me."</blockquote>
            </p>
        </div>
        <p>You raise your keyboard and type:</p>
        <pre><code>print("Hello, world!")</code></pre>
        <p>Output:</p>
        <pre>Hello, world!</pre>
        <p>🎉 The gates open — your first Python spell worked!</p>
        <h3>How the Magic Works 🪄</h3>
        <ul>
            <li><code>print</code> — tells Python to show something.</li>
            <li><code>()</code> — hold what you want to show.</li>
            <li><code>" "</code> — marks it as text (a <strong>string</strong>).</li>
        </ul>
        <p>Try more:</p>
        <pre><code>print("Welcome to Pythonia!")
print("Magic + Logic = Python!")</code></pre>
        <h3>Python Does Math Too 🔢</h3>
        <pre><code>print(5 + 3)
print("2 + 3 =", 2 + 3)</code></pre>
        <p>Python can talk and count at the same time!</p>
        <div class="alert alert-warning mt-3">
            <h5>⚠️ Be Careful</h5>
            <pre><code>print(Hello)   # ❌ Error — forgot quotes!</code></pre>
            <p class="mb-0">Always wrap words in quotes so Python knows they're text.</p>
        </div>
        <h3>Mini Challenges 🧩</h3>
        <ol>
            <li><strong>Greeting Scroll:</strong><br>
            Print<br>
            <pre>Welcome to Pythonia!\nLet's begin our journey!</pre></li>
            <li><strong>Math Wizard:</strong><br>
            Show results for <code>2 + 3</code> and <code>7 * 2</code>.</li>
            <li><strong>Echo Chamber:</strong><br>
            Print your name 5 times.</li>
        </ol>
        <h3>What You Learned 🌟</h3>
        <ul>
            <li><code>print()</code> makes Python speak.</li>
            <li>Text needs quotes; numbers don't.</li>
            <li>You can mix words + numbers in one print.</li>
        </ul>
        <p><strong>Badge Earned:</strong> 🐍 <em>Python Apprentice!</em></p>
    `,
    exercises: [
        {
            id: 'greeting_scroll',
            title: 'Greeting Scroll',
            description: 'Print:\nWelcome to Pythonia!\nLet\'s begin our journey!',
            solution: `print("Welcome to Pythonia!")
print("Let's begin our journey!")`,
            hint: 'Remember to use print() for each line'
        },
        {
            id: 'math_wizard',
            title: 'Math Wizard',
            description: 'Show results for 2 + 3 and 7 * 2',
            solution: `print(2 + 3)
print(7 * 2)`,
            hint: 'Use print() with math expressions'
        },
        {
            id: 'echo_chamber',
            title: 'Echo Chamber',
            description: 'Print your name 5 times',
            solution: `print("Ari")
print("Ari")
print("Ari")
print("Ari")
print("Ari")`,
            hint: 'Use print() five times with your name'
        }
    ]
};
