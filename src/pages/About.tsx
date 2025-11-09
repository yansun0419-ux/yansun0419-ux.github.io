import "./About.css";

/**
 * About Page Component
 *
 * Provides information about the website owner
 */
function About() {
  return (
    <div className="about">
      <header>
        <h1>About Me</h1>
        <p>Get to know more about this website and its creator</p>
      </header>

      <main>
        <section className="about-content">
          <div className="about-card">
            <h2>👋 Hello!</h2>
            <p>
              Welcome to my personal website. This is a space where I share my
              thoughts, projects, and experiences.
            </p>
          </div>

          <div className="about-card">
            <h2>🚀 Technologies</h2>
            <p>This website is built with modern web technologies:</p>
            <ul>
              <li>React - UI Library</li>
              <li>TypeScript - Type Safety</li>
              <li>Vite - Build Tool</li>
              <li>React Router - Navigation</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>📫 Get in Touch</h2>
            <p>
              Feel free to reach out if you'd like to connect or collaborate!
            </p>
          </div>

          <div className="about-card">
            <h2>📫 Get in Touch</h2>
            <p>
              我的锻造哲学 <br />
              我们都向往小说里“一朝顿悟”的瞬间，却常常忽略了那些“十年磨一剑”的平常日夜。
              我们沉迷于游戏“升级”的快感，却忘记了“修炼”过程本身的枯燥。
              我相信，真正的“神兵”（卓越的作品）不是靠灵感凭空诞生的，而是用一行行代码、一次次调试，在无数个“平常”的锻造过程中打磨出来的。
              AI 可以“拼凑”，但“匠心”必须“修炼”。
              这个网站就是我的“修炼日志”。我在这里重铸根基、清剿“Bug兽兵”、并尝试锻造属于我的“神兵”。
              我不畏惧过程的平淡，因为我知道，这是通往“不凡”的唯一路径。 <br />
              My Philosophy <br />
              We celebrate the 'flash of inspiration' but often overlook the
              'daily grind.' We see the 'level-up' in the game, but not the
              hours of mundane practice it took to get there. I believe great
              work isn't born of genius; it is forged. It's built from countless
              lines of code, relentless debugging, and a deep commitment to the
              craft. AI can assemble, but craftsmanship must be cultivated. This
              website is my forge. It's my logbook for rebuilding my foundation,
              hunting down 'bugs' (the monsters), and attempting to craft my own
              'divine weapons' (exceptional projects). I don't fear the process.
              I embrace it as the only path to mastery.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 My Personal Website</p>
      </footer>
    </div>
  );
}

export default About;
