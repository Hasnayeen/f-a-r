import { Lamp } from "../components/ui/lamp";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Lamp>Just Text</Lamp>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative px-4 md:px-0">
          {content.map((item, index) => (
            <div
              key={`content-${index}`}
              className="mb-10 prose prose-lg prose-invert"
            >
              <h2 className="bg-violet-900 text-white font-semibold rounded-full text-lg w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <h3>{item.title}</h3>

              <div className="">{item.description}</div>
            </div>
          ))}
          <div className="text-white pb-64">
            So long,
            <br />
            <span className="text-2xl font-semibold">Nehal Hasnayeen</span>
            <div className="pt-2 flex space-x-4">
              <a href="https://github.com/Hasnayeen/">Github</a>
              <span>|</span>
              <a href="https://x.com/nhasnayeen">𝕏</a>
            </div>
          </div>
        </div>
      </TracingBeam>
    </main>
  );
}

const content = [
  {
    title: "Love at first sight?",
    description: (
      <>
        <p>I saw your following post on 𝕏</p>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            I&#39;m looking to hire freelance software engineers for an upcoming
            project. 💰👨🏻‍💻
            <br />
            <br />
            You are
            <br />
            &gt; A builder, not only a coder (ideally indie hacker)
            <br />
            &gt; Write &amp; speak english
            <br />
            &gt; Versatile
            <br />
            <br />
            You will work
            <br />
            &gt; On your own terms
            <br />
            &gt; On cool sh*t
            <br />
            <br />
            Comment &quot;Interested&quot; with your skills.
            <br />
            <br />
            I&#39;ll DM you…
          </p>
          &mdash; Anthony Riera (@_anthonyriera){" "}
          <a href="https://twitter.com/_anthonyriera/status/1797650704149934581?ref_src=twsrc%5Etfw">
            June 3, 2024
          </a>
        </blockquote>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
        <p>
          And it piqued my curiosity as the post was to the point and no BS, I
          liked that. So I checked out your profile and your product
          &quot;Breeew&quot; (Interesting name by the way) and liked what your
          doing with it. I have a feeling you&apos;re the kind of person
          I&apos;ll enjoy working with. So I decided to build this personalized
          website in few hours in a stack I&apos;m not familiar with for your
          kind consideration.
        </p>
      </>
    ),
    badge: "Why I built this",
  },
  {
    title: "A wild dev just appeared",
    description: (
      <>
        <p>
          I&apos;m Nehal Hasnayeen, a developer from Bangladesh. I&apos;ve been
          working as a developer for last 9 years in different settings. While
          PHP/Laravel is my primary stack but I like to learn new stuff, build
          things and experiment with intresting ideas. I started learning React
          last week and today built this site with nextjs without any prior
          experience, but learning is always fun, well most of the time.
        </p>
      </>
    ),
    badge: "Who am I",
  },
  {
    title: "A dropout! Oh, how orginal.",
    description: (
      <>
        <p>
          I was at a crossroads in my final year at university. I was studying
          Chemical Engineering and I wasn&apos;t enjoying it at all and I was
          severely depressed. I had enough. I had to take a decision, either
          finish my degree no matter how long it takes and be miserable or look
          for an alternative. One day at a random shop I saw a DVD (remember
          those things) with a catchy title, earn money with something called
          Joomla. So I decided to check it out and started learning, so my dev
          journey began. Then I started learning HTML, CSS and web development
          in general and finally decided to drop out of university and moved to
          the capital to become a professional developer.
        </p>
        <p>
          I enrolled in a course and learned PHP that lead to my first job where
          I stared working on, wait for it, &quot;Java&quot;. Worked on some ERP
          for two month and was moved to a different team to work on, again wait
          for it, &quot;Python&quot;. After a month I decided to quit and focus
          on PHP + Laravel through self learing. Few months later joined a
          software team in a major corporation where I got the opportunity to
          work with and learn from some talented folks. But the corporate
          environment didn&apos;t suit me so after one and half year I decided
          to move on and worked only in remote jobs ever since.
        </p>
      </>
    ),
    badge: "My developer journey",
  },
  {
    title: "Done is better than perfect",
    description: (
      <>
        <p>
          While I try to follow the general industry standard best practices in
          my work but I don&apos;t mind unconventional approach and non standard
          solution, because at the end of the day, I care more about solving
          real-world problems than wasting time with silly technical dogma.
          That&apos;s why I learn new stuff to broaden my perspective. I&apos;ve
          tried elixir and rust and learing front end stuff more seriously just
          recently.
        </p>
        <p>
          I&apos;ve written some open source project available at{" "}
          <a href="https://github.com/Hasnayeen">github</a>. Please do check out
          if you can.
        </p>
      </>
    ),
    badge: "My development philosopy",
  },
  {
    title: "Successfully failed or failed successfully",
    description: (
      <>
        I built a product once couple of years back, while it didn&apos;t went
        as I intended but it made tiny profit and taught me a very costly
        lesson. I won&apos;t bore you with the lesson but if you&apos;re curious
        let me know.
      </>
    ),
    badge: "My indie hacking story",
  },
  {
    title: "The Million 💸 question",
    description: (
      <>
        <p>
          I&apos;m looking to work on a project where I won&apos;t be a code
          monkey, just ticking off some task list. I want to take ownership of
          the work, have valued input, have a impact on the business. While I
          don&apos;t know what kind of tech skill you&apos;re looking for but
          one thing I can asure you is honesty. I don&apos;t BS you, if I
          don&apos;t know then I&apos;ll tell so, if I failed then I failed. You
          won&apos;t have to guess.
        </p>
        <p>
          As for unknown things, I like to learn new stuff you know that, right?
          right?
        </p>
      </>
    ),
    badge: "Should you hire me?",
  },
  {
    title: "End of the 🛣",
    description: (
      <p>
        If you have reached this far then a big &quot;Thank You&quot; from my
        heart. Means a lot to me. Whether you hire me or not I hope you get the
        person you&apos;re looking for your project and have a successful
        endeavor. All the best.
      </p>
    ),
    badge: "Final thoughts",
  },
  {
    title: "What now!",
    description: (
      <p>
        If you be kind enough to let me know what you think of the site or how
        it should have been, I&apos;ll greatly appreciate that, thanks.
      </p>
    ),
    badge: "One final request",
  },
];
