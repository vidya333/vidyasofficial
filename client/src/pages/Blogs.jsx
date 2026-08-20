import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Clock,
  X,
  Share2,
  Bookmark
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Quiet Coder: Creative Intelligence in the AI Era",
    url: "https://medium.com/@vidyatandel/the-quiet-coder-4d6030e19167",
    date: "Dec 2025",
    readTime: "4 min read",
    category: "Software Philosophy",
    fullContent: `As a quiet coder, I don’t share everything I build. But I’ve realized something — while everyone is racing with AI, the real gap is forming somewhere else. Not in how fast you build, but in how well and how deeply you think. Speed is common now. Clarity is not. The next era might be of creative intelligence, because everyone will be artificially intelligent.

I’ve never been the loudest person in the room. While others were networking, speaking, or constantly sharing updates, I was usually the one sitting quietly with my laptop, trying to understand why my code wasn’t working — debugging for hours, reading documentation, rewriting the same logic again and again until it finally made sense.

For a long time, I thought this was a disadvantage. Tech feels like a fast, noisy space. Everyone is building, posting, shipping, talking. And if you’re an introvert, it’s easy to feel like you’re behind — not because you lack skill, but because you don’t show it the same way. But over time, I started noticing something. The ability to sit quietly and think deeply is not a weakness in tech. It’s actually one of the most valuable skills you can have.

The Technology Revolution
When I started with development, everything was about learning the basics — understanding React, figuring out how APIs work, connecting frontend and backend, breaking things, fixing them, and repeating the process. This phase wasn’t just personal; it reflects a larger shift the world has already gone through.

The Technology Revolution changed everything. Software became the foundation of modern systems, and developers became the builders of this new world. At this stage, the focus was simple: learn how to build. Effort mattered more than creativity. You followed patterns, learned from others, and tried to make things work. This phase was necessary. There was no shortcut around it.

The AI Revolution
Then came the next shift — the AI Revolution. Suddenly, things changed. Code that used to take hours could now be generated in minutes. Bugs that took days to understand could be explained instantly. You could ask questions and get structured answers without digging through endless documentation. At first, this felt like a superpower.

But slowly, I started noticing a small problem. I was solving things faster, but understanding less. Instead of thinking deeply, I was starting to rely on suggestions. Instead of struggling through a problem, I was skipping the struggle.

It reminded me of something simple. When calculators became common, people stopped doing manual calculations. The tool made things easier — but it also reduced a basic skill. AI feels similar. It’s powerful, it’s useful, but if used without awareness, it can quietly reduce your ability to think.

The Next Revolution: Creative Intelligence
This is where I think things are heading next. If the Technology Revolution was about building, and the AI Revolution is about accelerating, then the next revolution will be about something deeper — Creative Intelligence.

Because when tools become powerful enough to remove friction, they also remove the visible difference between people. When everyone can generate code, design systems, and solve problems with assistance, the surface-level advantage disappears. What remains is not speed, but depth.

The difference is no longer who can code faster or who can generate better answers. The difference becomes who can think clearly when there is too much information, who can ask questions that others don’t even consider, and who can see meaning where others only see output.

AI can generate code, but it doesn’t experience confusion, curiosity, or doubt. It doesn’t sit with a problem long enough to question whether the problem itself is worth solving. It doesn’t define purpose, direction, or meaning. That still comes from humans.

And this is where introverts might actually have an advantage. We are more comfortable with silence, with slow thinking, with staying longer in uncertainty. We observe patterns, connect ideas, and go deeper instead of wider. That depth is not just knowledge — it becomes perspective. And in a world where everything can be generated, perspective is what turns something ordinary into something meaningful.

Creative intelligence is not about being artistic or different for the sake of it. It is about seeing beyond what is obvious, choosing what matters, and building with intention. And that is something no tool can automate.

The Risk: Becoming Dependent
The real problem is not AI itself. The problem is becoming dependent on it. If every time you face a problem, you immediately ask a tool instead of trying to solve it — even for a few minutes — you slowly lose your ability to think independently. You become fast, but shallow. And in the long run, that’s dangerous.

Because tools will keep improving. But if your thinking doesn’t improve, you get left behind.

How I’m Trying to Avoid That
I’m still learning, still figuring things out. But I’ve started following a few simple rules. I try to think before I search. I struggle with problems a little longer before asking for help. I use AI to verify or improve, not to replace my thinking. And I focus on building things, not just understanding them.

This slows me down sometimes, but it also makes my understanding stronger.

The Quiet Advantage
Being an introvert in tech can feel like a disadvantage at first, but if you use it well, it becomes your edge. You don’t need to compete in noise — you can compete in depth. While others are rushing to build faster, you can focus on building better. While others rely completely on tools, you can use them carefully.

And in a world where everyone has access to the same AI, the real advantage won’t be speed. It will be clarity.

Final Thought
Technology will keep evolving. AI will keep getting better. But the one thing that will always matter is how you think.

So instead of trying to keep up with everything, I’m trying to do something simpler: build slowly, think deeply, and not lose the ability to solve problems on my own. Because in the end, tools can assist you — but they shouldn’t replace you.`
  },
  {
    id: 2,
    title: "Freedom Is Living a Boring Life Without Getting Bored",
    url: "https://medium.com/@vidyatandel/freedom-is-living-a-boring-life-without-getting-bored-5cea822727c5",
    date: "Nov 24, 2025",
    readTime: "3 min read",
    category: "Mindset & Life",
    fullContent: `When we talk about freedom, we often picture adventure: traveling across continents, chasing dreams, pushing boundaries, and living a life filled with extraordinary events. But maybe freedom isn’t always about intensity. Maybe it’s about something quieter — something we often overlook.

Maybe true freedom is living a boring life… without getting bored.

The Myth of Constant Excitement
Modern culture worships excitement. We are told to hustle, dream big, never settle, and make every day extraordinary. If we are not constantly stimulated or progressing toward something dramatic, we feel like we are failing.

Scrolling through social media doesn’t help either. Everyone seems to be skydiving, changing jobs, getting promotions, traveling, starting companies, or reinventing themselves. Ordinary life begins to feel like a punishment.

But what if the real curse is the addiction to stimulation?

The Surprising Value of the “Ordinary”
A regular day — waking up slowly, making coffee, doing your job, spending time with loved ones, walking, cooking, reading — might sound boring. But boring doesn’t mean bad. It means predictable. It means peaceful. It means safe.

The ability to be content with the everyday moments is not dullness — it’s emotional wealth. A calm life becomes a boring life only when you need chaos to feel alive.

When Boredom Disappears, Joy Emerges
Think of children. Give them an empty room, and somehow they turn it into an adventure. Their minds are alive even when life is not. That’s the superpower we lose as adults.

When you can find meaning in the ordinary…
When you can enjoy the routines that don’t impress anyone…
When your happiness isn’t dependent on entertainment…
You become free.

Freedom Isn’t Escaping Life — It’s Being at Home in It
Freedom isn’t found in constantly running toward the next big thing. It’s found in the quiet confidence that life doesn’t need to excite you every second.

Freedom is:
• Taking a slow morning without guilt
• Spending an evening doing nothing and enjoying it
• Not needing to buy, upgrade, or chase anything to feel alive
• Feeling safe in your own mind, not restless

Freedom is when inner peace becomes more important than external excitement.

The Paradox of a Meaningful Life
A meaningful life isn’t always dramatic. In fact, most meaning is hidden in moments that look boring from the outside:
• Watering plants
• Talking about your day with someone you love
• Working on skills quietly over time
• Listening to music while doing dishes
• Showing up every day for something that matters

These aren’t Instagram highlights — but they’re the foundation of a fulfilled life.

Boring Is Not the Opposite of Freedom
Boredom is not caused by life being uneventful. Boredom is caused by the mind rejecting the present moment.

When the mind is settled, even simple moments feel rich. When the mind is restless, even the wildest adventures feel dull.

And that’s why freedom is living a boring life without getting bored. The world tells us to chase excitement. Peace tells us we already have enough. The real revolution is not to escape the ordinary, but to love it.`
  },
  {
    id: 3,
    title: "The Power of Detachment",
    url: "https://medium.com/@vidyatandel/the-power-of-detachment-9254bc299a94",
    date: "Oct 10, 2025",
    readTime: "4 min read",
    category: "Inner Strength",
    fullContent: `When you stop clinging, life stops slipping away. Detachment is not about giving up. It is about waking up. It is the art of loving, living, and creating without losing yourself in the process.

To live is to experience the ebb and flow of attachment. We hold on to moments, people, ambitions, and identities as if they define our very essence. Yet beneath this clinging lies a quiet truth: nothing in this world truly belongs to us. Detachment is not a rejection of life, but a deeper participation in it, one that is rooted in awareness rather than possession.

At the heart of philosophy lies a simple yet profound observation: everything is impermanent. Empires crumble, bodies age, emotions change, relationships evolve. To resist this impermanence is to resist the very rhythm of existence. Detachment, therefore, is not an act of withdrawal; it is the recognition that all things are in motion. It is the art of being present without being possessed by the present.

When we attach ourselves to outcomes, we hand over our peace to forces beyond our control. We say, in effect, “I will be happy only if the world moves according to my wishes.” But the world does not bend to our will. The Stoics called this the great error of mankind, to seek control over what is uncontrollable. Detachment restores our alignment with reality. It reminds us that we can choose our actions, but not their fruits. We can love, but not command love in return. We can strive, but not guarantee success. When we accept this truth, we begin to live freely.

Detachment is not coldness. It is a refined sensitivity that no longer seeks to own what it appreciates. It is the philosopher’s gaze, clear, gentle, and unclouded by desire. One who is detached can stand amidst chaos and remain still, not because they feel nothing, but because they have learned to see everything as it is. They understand that clinging distorts perception, while detachment reveals clarity.

In love, detachment deepens connection. To love someone without clinging is to honor their freedom, to allow them to exist as they are, not as we imagine them to be. Attachment disguises itself as devotion, but often it is fear. Fear of loss, of solitude, of change. True love does not demand possession; it delights in presence. It knows that the beauty of a flower lies in its fragility, not in the attempt to make it last forever.

In ambition, detachment refines purpose. When we act for the sake of truth, excellence, or creation itself, our work becomes sacred. But when we act from the hunger for recognition, we lose touch with the essence of what we do. The Bhagavad Gita calls this the wisdom of action without attachment — to act fully, sincerely, yet to release the outcome into the hands of the universe. Such a mind works with precision and rests with peace.

Even suffering transforms under the light of detachment. Pain becomes a teacher rather than a punishment. When we no longer resist discomfort, it loses its power to torment us. We begin to see that suffering is born not from what happens, but from our insistence that it should not have happened. Detachment turns adversity into insight, grief into depth, loss into liberation.

To be detached is not to renounce life, but to see it clearly. It is to walk through the marketplace of existence with open eyes and an open heart, touching everything but grasping nothing. It is to realize that all things like pleasure, sorrow, gain, and loss are passing waves upon the still ocean of consciousness.

The detached soul is not indifferent; it is awake. It lives with intensity, yet without anxiety. It gives everything to the moment, yet asks for nothing in return. Such a life is neither dependent on success nor destroyed by failure. It is anchored in something deeper than circumstance — the quiet knowing that nothing external can complete what is already whole within.

The power of detachment is the power of freedom. It frees us from the tyranny of desire and the fear of change. It reminds us that peace is not found by controlling the world, but by understanding it. To live with detachment is to dance with life without clinging to the rhythm to act, to love, to feel, yet to remain untouched by the storm.

And in that still center of detachment, we discover the essence of wisdom: to be in the world, yet not of it.`
  },
  {
    id: 4,
    title: "Waiting Is Easy",
    url: "https://medium.com/@vidyatandel/waiting-is-easy-426d8600910e",
    date: "Jun 13, 2025",
    readTime: "4 min read",
    category: "Perspective",
    fullContent: `We live in a world that moves fast. Messages are instant, deliveries come in a day, and news spreads within seconds. In such a world, waiting feels like a pause we didn’t ask for.

Most of us think waiting is hard. We say it when we’re in line, when results are delayed, or when someone doesn’t call us back. We feel stuck, powerless, or anxious. But maybe, just maybe, waiting isn’t hard.

Yesterday, while taking a slow walk, I noticed two tall street lamps standing a few meters apart. At first glance, they looked like they were facing opposite directions and distant, unaware of each other. But as I kept walking, something shifted. From a new angle, they suddenly seemed to lean toward one another, like quiet friends in conversation.

That small moment stayed with me. Because life is like that too. We often feel far from the things we want, disconnected from what we’re hoping for. But as time moves, so do we. And what felt far off can slowly come into alignment.

That’s when I realized, maybe waiting is easy… when we stop resisting it. Have you ever heard of a God who waits? Yes, Vitthala is a form of Lord Krishna, standing on a brick and teaching the divinity of waiting. Maybe waiting is just misunderstood.

The Quiet Growth of Waiting
Let’s think about nature. A flower doesn’t bloom just because you want it to. You water it, you care for it, but you still have to wait. You cannot pull its petals open. Even seasons take time to change. The snow doesn’t melt overnight. Spring takes slow steps. And that’s beautiful.

In all of this, we see something: Waiting isn’t about doing nothing. It’s about letting time do its part.

What We Feel When We Wait
Sometimes, waiting feels like being lost. Like sitting in a room with no doors or windows. You may be waiting for love, for a job, for a message, or for a dream to come true. You keep checking your phone. You overthink. You lose sleep. You start believing the wait is a sign that something’s wrong.

But what if it isn’t? What if it’s just not the right time yet?

When a train is late, it doesn’t mean it won’t come. When the sky is cloudy, it doesn’t mean the sun is gone. Maybe something is being arranged behind the scenes. Maybe your story is being woven with threads you can’t yet see.

The Beauty of Trusting Time
Here’s a little truth that calms the heart: The best things in life never arrive rushed.

Imagine if you got everything you ever wanted instantly. Would you grow? Would you appreciate it? Would you even know how to hold it?

Waiting prepares you. It builds strength. It softens edges. It helps you choose better, live deeper, and see clearer. And when that long-awaited thing finally comes — the letter, the chance, the person, the peace — you’re ready. Not just happy, but deeply ready.

The world may not value slow things, but your heart does. Your soul does.

So… How Is Waiting Easy?
It becomes easy when we stop seeing it as empty time.
It becomes easy when we stop fighting it.
It becomes easy when we realize: the wait is also part of the miracle.

Don’t rush the magic. Don’t rush the message. Good things not only come to those who wait, they come better to those who wait well.

Final Thought
Waiting doesn’t make you weak. It makes you wise.
It doesn’t stop your story, it shapes it.
It doesn’t mean nothing’s happening, it means something beautiful is on its way.

So, sit back for a moment. Breathe. Smile. You’re not stuck. You’re just in the gentle hands of time.`
  },
  {
    id: 5,
    title: "Missing Someone is the Most Beautiful Feeling",
    url: "https://medium.com/@vidyatandel/missing-someone-is-the-most-beautiful-feeling-7b8520426f7c",
    date: "May 27, 2025",
    readTime: "3 min read",
    category: "Reflections",
    fullContent: `Missing someone is one of the most beautiful feelings we can experience. It is like a heart started breathing. It is like the heart saw something real & meaningful in the mundane world. It is like staring at the wind or the weight we don’t want to put down. It’s a rare kind of feeling nowadays, really difficult to experience. It feels really thankful that such a deep, honest connection even existed. I really like those weird tides which keep returning to the shore of my heart. They remind me that I’m still capable of feeling something real.

Otherwise, we are always surrounded by thoughts, values, manners, boundaries, hurries, plans, desires, goals, dreams, impressions, questions, and so on. All these things rarely feel realistic; they make us feel abstract and disconnected. Their base is always in the future. They always ask about what’s next.

And then, suddenly, missing someone pauses it all.

In this chaos, missing someone is like a place where all those things just disappear, and the pure feeling of that memory stands still in front of us. It was a moment of pure aliveness. In a long chain of hurry, we find a small glimpse of harmony.

I find myself reflecting on this feeling because that one state reminded me of the real shades of who I am, what I truly like. People are so unaware of how important it is to know what they truly like. The answer to this one question is a solution to a hundred different aches of the modern human mind. Whoever has an answer to this can rarely be bored, rarely lost, never truly lonely, and can never get confused, because they know what truly makes sense for them. And once you’ve tasted realness, you know how to follow it without caring about anything.

Missing someone hides all those secrets within, which could pull us so close to what we truly are. Without that, those memories cannot make such a deep mark on you.

If you can remember what you ate yesterday, what you wore the day before, or what someone said that made you smile a year ago, then you’re alive in the truest sense. Memories are a gift. And if you’ve ever met someone who gave you those, then consider yourself lucky. If you can believe someone, you are the luckiest. We give gifts to keep memories. But some memories are truly more than gifts. You can share them, but still they don’t leave you empty. The older they get, the more precious they become. Every time they revisit us, they bring new meaning, new understanding, a new emotion.

So if you’re missing someone today, don’t rush to distract yourself. Sit with it. Listen to what it’s trying to tell you. Sometimes, in those quiet moments of longing, we rediscover not only who we miss but who we truly are.`
  },
  {
    id: 6,
    title: "Focus on Strengths, Forget the Weaknesses !",
    url: "https://medium.com/@vidyatandel/the-myth-of-perfection-focus-on-strengths-forget-the-weaknesses-c7ab694235cb",
    date: "Oct 2024",
    readTime: "4 min read",
    category: "Personal Growth",
    fullContent: `The smarter path to growth is strengthening what already makes you shine. And why trying to be good at everything slows you down.

In a world that constantly pushes us to "fix" ourselves, we often forget one simple truth — not everything needs fixing. Most of us are raised to believe that success lies in overcoming our weaknesses. While growth is essential, there's a far more powerful and fulfilling path to excellence: focusing on our strengths.

The Misguided Obsession with Weaknesses
From early childhood, we’re told to work harder on the subjects we score low in. If you’re bad at math but great at art, the system will likely push you toward extra math classes, ignoring your talent for creativity. But is this truly the best approach?

Think about it — would you ask a fish to climb a tree? It would fail miserably, not because it isn’t capable, but because it's simply not built for that task. Similarly, when we spend excessive time trying to correct our shortcomings, we end up draining energy that could be used to enhance what we’re naturally good at.

The Strength-First Strategy
Success is not about being good at everything. It’s about being excellent at something.

In exams, we instinctively answer the questions we’re confident about first. We don’t waste time struggling over the toughest ones from the beginning. We apply strategy. The same should go for life. Work on what you know, what you love, and what gives you energy — that’s your strength zone.

Once you start building on your strengths, you’ll notice momentum. You’ll improve faster, feel more fulfilled, and achieve more — not because you’re perfect, but because you’re playing to your advantage.

Real-World Examples
Think about the most successful people in any field — athletes, artists, entrepreneurs, scientists. Do you think they’re flawless? Absolutely not. They have weaknesses like everyone else. The difference is, they don’t let those weaknesses define them. They pour their energy into what they’re exceptional at, until it shines so brightly that the world doesn’t even notice their flaws.

Consider Steve Jobs — known for his vision and innovation, not his coding skills. Or Serena Williams — celebrated for her powerful game, not for playing every shot perfectly. Their success didn’t come from trying to fix everything they weren't; it came from amplifying what they were.

The Invisible Weakness Effect
When you maximize your strengths to their full potential, something amazing happens — your weaknesses start to fade into the background. It’s not that they disappear, but they become irrelevant in the light of your excellence. People won’t see your flaws when your strengths speak louder. This is the power of the "invisible weakness effect."

So What Should You Do?
1. Identify Your Strengths: Reflect on the tasks you enjoy, the skills people compliment you on, and the work that energizes you.
2. Invest in Them: Take courses, find mentors, read books — anything that helps you grow in your strength areas.
3. Delegate or Minimize Weaknesses: Where possible, collaborate with others whose strengths complement your gaps.
4. Celebrate Progress: Don’t wait for perfection. Every step you take in your strength zone is a leap forward.

Final Thought
Time is your most valuable resource. Don’t waste it trying to climb trees if you’re meant to swim. Let your strengths carry you. Nurture them. Sharpen them. And let the world be so dazzled by your brilliance that your weaknesses go unnoticed — not just by others, but by you as well.`
  }
];

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleShare = (e, url) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <main className="min-h-screen py-16 px-4 md:px-10 container max-w-6xl mx-auto">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 mt-10 text-sm font-mono mb-10 no-underline transition-opacity hover:opacity-75"
        style={{ color: "var(--pink)" }}
      >
        <ArrowLeft size={16} /> Back to Main Portfolio
      </Link>

      {/* Header Section */}
      <div className="mb-12">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 border"
          style={{ background: "var(--bg2)", borderColor: "var(--border)", color: "var(--pink)" }}
        >
          <BookOpen size={14} /> Thought Stream
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display" style={{ color: "var(--text)" }}>
          Blogs & <span className="gradient-text">Reflections</span>
        </h1>
        <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text2)" }}>
          Essays on software philosophy, inner growth, life observations, and finding quiet clarity in a noisy world. Writing is how I defragment my mind. Code fixes logical architecture, but writing fixes personal clarity. Here is a curated selection of thoughts originally published on Medium.
        </p>
      </div>

      {/* Blog Grid */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => {
            const firstParagraph = post.fullContent.split("\n\n")[0];
            return (
              <div
                key={post.id}
                onClick={() => setSelectedBlog(post)}
                className="group relative cursor-pointer rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
              >
                <div>
                  {/* Meta info */}
                  <div className="flex items-center justify-between text-xs font-mono mb-4" style={{ color: "var(--text2)" }}>
                    <span className="px-2.5 py-0.5 rounded-full border text-xs" style={{ borderColor: "var(--border)", color: "var(--pink)" }}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 font-display transition-colors group-hover:text-[var(--pink)]" style={{ color: "var(--text)" }}>
                    {post.title}
                  </h3>

                  {/* Excerpt pulled directly from actual essay text */}
                  <div className="relative overflow-hidden mb-6">
                    <p className="text-sm leading-relaxed line-clamp-4" style={{ color: "var(--text2)" }}>
                      {firstParagraph}
                    </p>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none bg-gradient-to-t"
                      style={{
                        backgroundImage: `linear-gradient(to top, var(--bg2), transparent)`
                      }}
                    />
                  </div>
                </div>

                {/* Action area */}
                <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
                  <span className="text-xs font-mono font-semibold flex items-center gap-1" style={{ color: "var(--pink)" }}>
                    Read Essay →
                  </span>
                  <button
                    onClick={(e) => handleShare(e, post.url)}
                    className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                    style={{ color: "var(--text2)" }}
                    title="Share Link"
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Expanded Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-3xl max-h-[85vh] rounded-3xl border overflow-hidden flex flex-col shadow-2xl"
            style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
          >
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b flex items-start justify-between relative" style={{ borderColor: "var(--border)" }}>
              <div>
                <div className="flex items-center gap-3 text-xs font-mono mb-2" style={{ color: "var(--pink)" }}>
                  <span>{selectedBlog.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {selectedBlog.readTime}
                  </span>
                  <span>•</span>
                  <span>{selectedBlog.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-display" style={{ color: "var(--text)" }}>
                  {selectedBlog.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className="p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body - Full Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-4 text-base leading-relaxed" style={{ color: "var(--text2)" }}>
              {selectedBlog.fullContent.split("\n\n").map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line">{paragraph}</p>
              ))}
            </div>

            {/* Modal Footer with Medium Link */}
            <div className="p-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
              <div className="text-xs font-mono" style={{ color: "var(--text2)" }}>
                Originally published on Medium
              </div>
              <a
                href={selectedBlog.url}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 shadow-md"
                style={{ background: "linear-gradient(135deg, #00ab6c, #000000)" }}
              >
                <ExternalLink size={16} /> Read Original Article on Medium
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <footer
        className="rounded-3xl border p-8 md:p-12 text-center flex flex-col items-center justify-center"
        style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
      >
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border"
          style={{ background: "rgba(236, 72, 153, 0.1)", borderColor: "rgba(236, 72, 153, 0.2)" }}
        >
          <Bookmark size={24} className="text-pink-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2 font-display" style={{ color: "var(--text)" }}>
          Follow along on Medium
        </h3>
        <p className="text-sm max-w-md mb-6" style={{ color: "var(--text2)" }}>
          I regularly post fresh perspectives on engineering mindsets, creative habits, and technical life.
        </p>

        <a
          href="https://medium.com/@vidyatandel"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 shadow-lg"
          style={{ background: "linear-gradient(135deg, #00ab6c, #121212)" }}
        >
          <ExternalLink size={16} /> Visit Medium Profile (@vidyatandel)
        </a>
      </footer>
    </main>
  );
}