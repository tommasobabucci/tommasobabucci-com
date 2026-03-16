---
title: "My 12-Hour Conversation with Claude Code"
description: "A weekend visa application turned into a 12-hour AI coding spiral. What I learned about creative direction, skill floors, and the collapse of activation energy."
date: 2026-03-02
tags: ["Tech and Innovation", "Future of Work"]
published: true
coverImage: "/images/articles/04.png"
---

This was supposed to be a two-hour weekend project.

For weeks, I had been dreading a visa application, one of those life-consuming bureaucratic marathons that eats your weekend before you've even started. To get it done, I had to pull out my personal laptop. It was literally covered in dust. That's how long it had been since I worked on a personal project.

After two hours of visa paperwork and a two-year-old OS update that felt equally painful, I told myself I'd earned a reward: a coding session. Just for me. No client deliverable, no sprint deadline, no long corporate circus of approvals and green lights. Just me and an idea I'd been carrying around for weeks.

But I was also realistic. This would be short-lived. Monday at 8 AM, the pings start again. If I wanted to actually finish something, I couldn't do it alone. I needed AI. Specifically, Anthropic Claude Code.

What was supposed to be a fun two-hour Saturday activity turned into, as it often does with me, a spiraling tunnel of obsession and laser-focus. Translated: a 12-hour conversation with AI.

Here's what that looked like, and what it taught me.

## 🧠 Hour 0: The part that doesn't happen in the terminal

I did not start in Claude Code. I started in my Notes app.

My friend Dan Diasio reminds me of this constantly: the framework has to be human-AI-human. Human thinks first. AI processes second. Human decides and refines third. I've written about this framework in the context of enterprise workflows, but I'd never stress-tested it on a solo weekend project. This was the test.

So I wrote. Pages and pages of thoughts. What was I building? Why did it matter? Who was it for? What should it feel like? What was the scope, what was in, and more importantly, what was out?

Then I loaded everything into a Claude Project and used it to help me create a system prompt, my future CLAUDE.md file (will explain this in a second!). From there, I built a knowledge base: document after document, structured like "bibles," outlining strategy, scope, audience, goals, technical constraints. Each one designed to give Claude Code the context it would need to execute my vision, not its own.

Then I did something that felt a little silly but ended up being one of the most valuable steps: I asked Claude to ask me 100 questions. Everything I may have missed. Every assumption I hadn't articulated. Every edge case I glossed over.

It ended up only asking me 46 (it got confused at some point), but answering those questions forced me to refine my thinking in ways I wouldn't have on my own. Like having a relentless thought partner who never got tired of asking "but why?"

This setup phase took almost two hours. Two hours before I wrote a single line of code. And it was the most important part of the entire day.

Without this step, the moment I turned to Claude Code, it would have been AI setting the vision. And that's the trap. Claude Code is extraordinarily capable, but capable of building what? If you haven't defined the "what" with precision and conviction, Claude will fill in the gaps. It'll make reasonable choices. Plausible choices. Choices that look a lot like what everyone else is building.

You need to be a little selfish. A little protective. These are your ideas. Define them with enough depth that AI becomes an executor of your vision, not an author of a generic one. Don't forget who's in charge.

## ⚡ Hour 2: "Claude wants to access your..."

I opened the terminal and initialized Claude Code. Within the first fifteen minutes, it was requesting permissions to access all sorts of things on my machine. Files, directories, system configurations.

Which means it can read your files. Edit them. Delete them. The possibilities as extraordinary as terrifying.

There's a mechanism that saves you: Claude Code asks for permission before executing certain commands. It's a small friction, a pause in the workflow that can feel tedious when you're in a flow state. But that tedious step is exactly what stopped me from giving Claude access to my Apple Keychain passwords.

That's a little too much for me!

If you're starting out with Claude Code for the first time, go slow. Read what it's asking before you approve. Not every permission request deserves a "yes." The speed is intoxicating, but the surface area of what you're granting access to is real. Treat permissions like you'd treat giving a new employee the keys to the building: thoughtfully, and not all on day one.

## 🔧 Hours 2 to 4: The skill floor nobody talks about

My background is data science. I can code, but app development? Never my lane. I ended up doing about six months of real development work at the beginning of my career before reinventing myself into the AI strategy role I'm in now (but that story is for another article). Point being: I know just enough to not get lost.

And "just enough" matters more than people think.

Claude Code operates in the terminal. It uses Git for version control. It interacts with package managers like Homebrew and npm. It reads and writes to your file system. It runs shell commands. If terms like bash, git commit, npm install, or .env are unfamiliar, you will struggle. Not because Claude Code is broken, but because you won't understand what it's doing.

A critical step of any Claude Code project is setting up your workspace properly. Your CLAUDE.md file (think of it as your project's constitution, the persistent set of instructions Claude reads every time it starts a conversation) needs to be thoughtful. Your project structure needs to make sense. Your environment variables need to be configured. These aren't optional. They're foundational.

This is a real barrier. Right now, Claude Code's power is gated behind a skill floor that most non-technical workers haven't crossed. Is that a temporary friction that tools will eventually smooth out (Claude Cowork is already a bit more friendly)? Or a structural divide that will separate the people who can leverage AI for building from those who can only leverage it for chatting?

I don't think this bar is too high for anyone. A short investment in learning the basics can go a long way. But let me tell you: those few months of development experience are the reason I didn't bounce off this tool within an hour.

## 🚀 Hours 4 to 10: The spiral

This is where it got dangerous, in the best way.

Once the workspace was set up and Claude Code understood the project, the building began. And it was unlike anything I'd experienced coding alone.

I wasn't writing code and debugging for hours. I was directing, reviewing, and iterating in tight loops. Claude would scaffold an entire feature. I'd test it, catch what was off, describe the fix in plain English, and watch it rebuild. The feedback loop was minutes, not hours.

But what made it truly different wasn't just speed. It was the quality of the partnership. Especially once I started building custom commands: reusable prompt patterns that let Claude Code execute complex workflows with a single instruction. Skills, essentially. The more I taught it about my project, the smarter it got. Not in a general-intelligence way, but in a deeply contextual way. It knew my codebase. It knew my conventions. It knew my intent.

During this stretch, I built things I would have never attempted solo: multiple apps and a website, including a pipeline for an AI comic book generator, one that maintains character consistency across generations through structured knowledge bases. Why a comic book generator? Well, you'll have to give me a few weeks before the big reveal.

But the point isn't what I built. It's that I built things I had previously filed away as "someday, when I have a team and a budget." The ideas existed. The activation energy to build them was always too high.

Not anymore.

Fair warning, though: it gets expensive. I found myself upgrading to the Max plan ($100/month) almost instantly because I was too impatient to wait in queue. When you're six hours into a creative spiral at 11 PM on a Saturday, throttling feels like a personal offense. Budget accordingly.

## 🌙 Hours 10 to 12: Midnight and the dust is gone

Somewhere around hour ten, I looked up from my screen. It was past midnight. I had eaten dinner at my desk. My back hurt. I was starting to get lost in the little orange "Claude is vibing" animation.

But here I felt something I hadn't felt in a long time: the specific satisfaction of building something that didn't exist twelve hours ago.

Not a deck. Not a strategy document. Not a prompt. An actual, working thing. Several of them.

The dust was gone.

## 💡 The uncomfortable question

Here's what I keep coming back to.

My personal laptop was collecting dust because the gap between having an idea and being able to build it was too wide. I didn't have a development team. I didn't have funding. I didn't have time, not the kind of time it takes to build software from scratch as a non-expert.

Claude Code collapsed that gap in twelve hours.

And I don't think I'm special here. I think there are millions of people, inside companies and outside of them, sitting on ideas that have been collecting dust for years. The side project that never got started. The internal tool that never got prioritized. The product concept that never survived the resourcing conversation.

That barrier is dissolving. Not slowly. Right now.

People have been talking about the "death of SaaS," the idea that if anyone can build custom software for their specific needs in a weekend, the market for generic, one-size-fits-all software starts to erode. I'm not ready to write that obituary. But I will say this: after twelve hours with Claude Code, I understand why the conversation is happening. When building becomes this accessible, the status quo changes. The question shifts from "which tool should we buy?" to "should we just build exactly what we need?" Trust me, it's faster than it takes you to say "procurement."

That's a profound shift. Not because the tools are perfect. They're not. Not because everyone can do this today. They can't. But because the trajectory is unmistakable. The gap between imagination and creation is shrinking.

So here's the question I'll leave you with: how many ideas are collecting dust, in your company, in your life, because the activation energy to build them was always too high?

That dusty laptop is back on my desk now. And it's staying there.

---

*The perspectives shared in this article are entirely my own and do not reflect the views of my employer, clients, or any organizations I'm affiliated with. References to specific companies and technologies are used for illustrative and analytical purposes only. This content should not be interpreted as investment advice, financial guidance, endorsements, or predictions about the future of any technology or business model. Also, Claude Code helped me build the things in this article. It did not write the article. That was the human part.*
