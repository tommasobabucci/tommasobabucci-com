---
title: "A Month Managing AI Agents (Part 2)"
description: "One month after the exhilarating Day 1 with AI agents: what sustained it, what broke down, and the new skills nobody told me I'd need."
date: 2026-02-16
tag: "AI & Work"
tags: ["AI", "People and Work"]
published: true
coverImage: "/images/articles/02.png"
---

A month ago, I wrote about a single day that felt like a glimpse of the future. Ermioni Clemence and I spent eight hours in an office in Chicago, building three app prototypes with Replit's AI agents while taking literal laps around the building. We shipped something in a day that would have taken a development team weeks.

[Read "A Day Managing AI Agents — Part 1"](/articles/01-a-day-managing-ai-agents-part1/)

People reached out asking: "Is this sustainable?" "What happened next?" "Does it still feel like the future?"

Honest answer: yes and no.

That day was a snapshot. The last month has been the real experiment. And it turns out the future is more complicated than a single exhilarating workday.

🏠 Week 1: The remote reality check

Emmi went back to her home office. I went back to mine. We were pumped to keep building on App 3, the one that got the best feedback on Day 1. We jumped on a call, shared screens, and started our first remote agent sprint.

"Okay, agents are running. Should take about 15 minutes."

In the office, this was when we'd walk, brainstorm, run into people, test ideas. The physical movement created mental space for creative collaboration. But now we were just on a call, staring at our screens. Still collaborating, but something was missing.

The magic of those walks wasn't just the conversation. It was the movement, the environment, the ability to step away from the work while it happened. On a video call, you can't really step away. You're just waiting.

By the end of Week 1, we'd made progress. But something had shifted. The guilt-free freedom we felt over lunch that day in January was gone. Now we felt guilty for not working while the agents worked. We'd refresh Teams, check emails, half-focus on the build. The waiting wasn't meditative anymore. It was dead time that felt like it should be repurposed for another high-value activity.

⚡ Week 2: The 80/20 wall

Here's what nobody tells you about AI agents: getting from 0 to 80% is thrilling. You throw in a big, ambitious prompt, the agents break it down, and suddenly you have a working prototype. It feels like magic.

Getting from 80% to 100% is a different story.

"The login flow needs to redirect to the dashboard, not the homepage." "Can we make the button blue instead of green?" "The email validation isn't catching typos in domain names."

Each enhancement, no matter how small, had to be its own run. The agents couldn't just handle our multi-page technical briefs and backlogs. Too many competing changes, too much nuance. We learned this in our first build, but now we were living it for weeks.

And each run still took 5 to 10 minutes.

Emmi and I decided to divide and conquer. Word had gotten out, and now there was more demand for vibe-coded apps than ever before.

One afternoon, while working on a new build, I caught myself just staring. Not thinking. Not planning. Just waiting.

"This isn't sustainable," I thought.

🔀 Week 3: The context-switching breakthrough (and curse)

I was midway through another agent run, fixing a date picker bug, when it hit me.

Why am I sitting here waiting?

I opened a new tab and fired up another Replit project I'd been meaning to start: a different internal tool for our team. I uploaded a brief and started a new agent team.

Then I switched back to the first project. Still running.

Then I opened ChatGPT: "Generate a series of detailed development prompts based on this backlog…"

Suddenly, I wasn't waiting anymore. I was orchestrating.

I called Emmi. "What if we don't just manage one team of agents? What if we manage multiple?"

She got it immediately. Within days, we were both running two to three projects in parallel. While one set of agents worked on App 3's refinements, another built a landing page. A third prototyped a new feature we'd been discussing.

We started using Custom GPTs to generate our development briefs at scale. Feed in rough ideas, get back structured prompts, upload them to Replit, start new agent teams. Rinse and repeat.

For the first time in weeks, I felt like we'd unlocked something. We were scaling ourselves. Not just building faster, but building more.

But then the cracks started showing.

🧠 Week 4: The cognitive cost

By the end of the month, I had six Replit tabs open and five ChatGPT conversations. Pages of notes with prompts I still needed to run.

I'd check Project A, see an error, leave a comment for the agents. Switch to Project B, realize I forgot what the original goal was. Jump back to Project A, see the agents had resolved the error. Switch to Project C, which I hadn't checked in two days, and discover it had gone completely off track.

The context switching was brutal.

I'd finish a day having touched several different projects, and I couldn't tell you if any of them had moved forward in a meaningful way. The quality was inconsistent. Some builds were great. Others felt half-baked, like I hadn't given them enough attention.

One night, I closed my laptop and realized I'd spent eight hours "managing AI agents," and I felt more scattered than I ever did writing code myself.

We'd discovered a new capability, managing multiple agent teams in parallel, but we hadn't developed the discipline to do it well.

🔮 What we learned (and what's still missing)

A month ago, I thought the future was about letting agents do the work while we went for walks. That was true for a day. Sustaining it for a month required something different.

The new skill set isn't just prompting. It's project management at scale. You need to know when to let agents run, when to intervene, when to kill a thread and start over. You need to batch context switches intentionally, not reactively. You need to resist the temptation to scale yourself into oblivion.

The new mindset isn't "do less." It's "direct more." We're not using AI to work less. We're using it to work differently. But that means we're now in a weird in-between state: not quite coding, not quite managing, not quite strategizing. We're doing all three, constantly.

And here's the thing: the tools aren't built for this yet.

Right now, managing multiple AI agent projects means juggling a dozen tabs, apps, and interfaces. What we need is a single dashboard, an "Agent Control Center," where we can monitor all our projects, see which agents are running, track progress, triage issues, and make decisions without drowning in context switches.

Imagine something like a project management tool built specifically for agent work, not humans. You'd see:

A live "run board" for every agent workflow (queued, running, blocked, completed) with timestamps, owners, and dependencies
Prompt and context versioning: diff what changed, roll back to a prior prompt, and see which run produced which behavior
Autogenerated "context capsules" per project: a continuously updated summary of the goal, current state, decisions, and open issues so you can switch back in instantly
Drift and risk signals: alerts when an agent starts inventing APIs, expanding scope, failing tests, or repeatedly looping on the same error
Cost and throughput telemetry: time spent per run, number of retries, compute usage, and what you're paying for each increment of progress
One-click interventions: pause a run, reroute to a different agent, constrain scope, inject a new requirement, or fork the workflow safely
Unified triage feed: errors, completions, test failures, and "needs human input" prompts across all projects in one place

That doesn't exist yet. So we're improvising. And honestly, some days it feels messy.

🚀 But here's what does work

Despite the chaos, Emmi and I shipped several working apps this month. Not prototypes, actual tools our team is using.

A month ago, that would have taken a quarter. Maybe two.

We're not replacing developers. We're not eliminating work. But we are compressing timelines in a way that still feels surreal.

The key lessons?

Start big, then go small. Let agents handle the 0 to 80% with broad prompts. Then slow down and handle the 80 to 100% with precision.
Remote collaboration needs new rituals. We lost the walks, but we found other rhythms: async demo videos reviewing builds, shared prompt books tracking what each agent team is working on.
Context switching is the real bottleneck. If you're going to manage multiple projects, you need systems.
The tools will catch up. Right now, working with AI agents feels like the early days of the internet: powerful but clunky. But this is just the beginning. The UIs will improve. The orchestration will get smarter. The workflows will consolidate.

💭 One month later

That day in January felt like a glimpse of the future. This month felt like living in it.

And living in the future is messier than glimpsing it.

There are new skills to build. New habits to form. New tools we desperately need that don't exist yet. But there's also something undeniable: Emmi and I are doing work we couldn't have done before. Not faster, different.

We're not just building apps. We're building a new way of working. And yes, it's chaotic. But that's what the future always feels like when you're in the middle of it.

So here's to the next month: fewer tabs, better systems, and maybe, just maybe, an Agent Control Center that makes this whole thing feel a little less like juggling chainsaws.

Because if one day showed us a glimpse, one month showed us the reality: the future isn't just about what AI can do. It's about what we learn to do with it.

P.S. If someone builds that Agent Control Center dashboard, please let me know. I'll be your first beta tester. Right after I close these 47 browser tabs.

---

*Disclaimer: The perspectives shared in this article are entirely my own and do not reflect the views of my employer, clients, or any organizations I'm affiliated with. References to specific companies and technologies are used for illustrative and analytical purposes only. This content should not be interpreted as investment advice, financial guidance, endorsements, or predictions of who will win the AI race.*
