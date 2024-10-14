---
layout: post
author: Will
---

## Making This Blog
In honor of my first post about the cult of done, I wanted to talk about the creation of this blog section. I almost cut it from the site a few times but if I’m totally honest it felt a bit empty without it. However, the more I looked into setting up the blog section, the more I got a bit overwhelmed and felt like I was getting pulled away from the main goal of the project. Get the website live. I felt myself being pulled down into rabbit holes of CMSes, self hosting vs paid, static website generators, frameworks, and all of the other technology that can be used to make a modern website.To be perfectly honest those are almost certainly the correct way to make this website long term. But my goal was to be done more than to be correct. So I decided to stay the course with my extremely simple workflow of only HTML and CSS hosted through github pages, at least for now. But I wasn’t willing to give up editing the posts in markdown (surely due at least in part to the brainwashing the wonderful podcast Cortex has done to me over the years). At first I thought this might mean I’d need to do some sort of hack that involved converting my markdown posts to HTML locally in a bash script or something similar using pandoc (a cool tool I found during the research process!).

### Diversions
I think this is a good time to mention that my goal for this project seems to have shifted mid flight. I started out with the goal of: “get a website working at my domain that I can point people to with my business cards”. My initial plan for that goal was: a simple static website in HTML and CSS (maybe javascript) should easily be able to accomplish that goal. After doing some research I confirmed that would be the case and that I could host it all for free publicly on github using github pages. A perfectly reasonable plan. At some point during this adventure I thought “maybe it should have a blog section, where I can better develop my thoughts through writing and share them.” In that moment I added quite a bit of complexity (for a total web beginner such as myself, a simple blog is trivial for anyone with experience of course) but I didn’t know enough to know that I was doing it! But as I began to research things further I got that sinking feeling that any developer does when they realize their new pet feature is producing the dreaded “scope creep”. In honor of the “Cult of Done” I asked myself what is the shortest possible path to get from where I am now: a website that is purely CSS and HTML hosted on github pages. To where I want to be: a website that is purely CSS and HTML hosted on github pages, with a blog written in markdown! The answer of course was, read the docs!

### Back on Track
It turns out that under the hood “Github Pages” is already powered by Jekyll. I say “under the hood” but it’s not like github is hiding this fact, quite the opposite they advertise it very plainly throughout their documentation for anyone willing to listen. Unfortunately for me, I didn’t know what Jekyll was, so that didn’t really help me! 
After reading up a bit on it I had the distinct realization that all of the tools were in place, and I just needed to understand how to connect the wires. I find this is a common feeling if you venture even slightly off of the well trodden (some might say “smart” or “sensible”) path. If I simply would have followed one of the myriad tutorials available from the beginning that assumed I’d be using the built in templates of any of these services, I would get to the section they have about blogging roughly 75% of the way through the video and I’d have no questions about how to get my first few posts up and ready. But, the purpose of this site isn’t just to make it, it’s to learn. And to learn I really wanted to dedicate myself to understanding how the building blocks of a website work. The modern instinct is to reach for very complex frameworks anytime we want to do anything on the web. Experienced developers can look at this problem and immediately identify that as bringing way too much bloat to what should be a simple solution. But I think they often miss one of the other major problems. Beginners have to LEARN all of that bloat. Not only do you not need a million lines of production quality code to publish your blog that is a glorified journal, you shouldn’t have to learn a web templating engine that is the web equivalent of a 5 axis milling machine when what you want to do is cut a 2x4 in half. In this project I wanted to push myself hard in the other direction as a bit of a technological and learning reset. However, at a certain point you have to prevent yourself from over correcting. Which I think is something we all can be prone to as well. The moment I found myself reaching for bash scripts to convert markdown files I got another familiar feeling: surely this is all baked in. And it is, right there in the docs jekyll will walk you through the process and where to put your files. At this point I simply had to put away my zealotry (and abandon the orignial direction of this blog post) and download jekyll. After wrangling all of the dependencies I wasn't too far away from the blog format that you're reading now, though of course it didnt' come without some additional formatting challenges. Because I'm not using the tool the way it's meant to be used with templates and such, all of my styling wasn't updating as I expected from the beginning. But that's a job for another day. 

And while that definitely wasn’t the most efficient way to get the job done. I feel like I learned a lot about making a website and about learning!
Some things I learned along the way:
- Basics of web dev (HTML, CSS, Jekyll, DNS, hosting options, and more!)
- Publish early and publish often. I was so focused on being “done” that I neglected another great piece of productivity advice: batching. Once I had the website bones ready, I got it up and running online with a classic “still working on it” section for the blog. That counts as done to me. No need to agonize over a feature you only added last minute. Cut out what is taking too long. Make that a new project, finish the current project (hooray), and then start the next.
- The very very basics of Jekyll! I've enjoyed the little I've used and I'm impressed with how beginner friendly it is. I'm sure if I put any amount of research into it I'd be able to write my entire site in a much cleaner fashion.
- Sometimes you have to change course, so it's important to know what you're willing to comprimise on and what you won't. I started out zealously wanting this site to be "as simple and cheap as possible" and quickly realized that wasn't going to work for the features I wanted. I decided to budge (slightly) on the simplicity in an effort to maintain the low cost and reliability of using github pages. Once I made that decision it felt like it only made sense to go along with the tooling that was already in use. 