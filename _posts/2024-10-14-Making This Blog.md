---
layout: post
author: Will
---

## Getting a Website Done

To follow up on my first post about the The Cult of Done Manifesto, I wanted to talk about the creation of this website as a bit of an example of that logic and how I use it to try to stay on track during projects. Specifically the blog section.

At the beginning of the project I had a very simple goal. I wanted a website I could point people towards to advertise my business. At the start I imagined that site should include:
- A picture of me
- The company logo I had made
- Resume style information about me and the projects I've worked on as a contractor
- Ways to get in touch with me

After some very brief research I determined that this should be possible with the simplest possible web tech stack: pure HTML and CSS. No additional cruft needed, not even javascript! So I got started with my extremely simple workflow of only HTML and CSS. It had been a really long time since I had made a website and I learned a lot. Eventually the overall layout of the site began to take shape. A landing page with my company's logo and some information about my services, some links to an about page for more information about me, and a contact page. That site certainly would have fulfilled the original goal. If I were truly following my "cult of done" motivations I would have stopped there. But it looked a bit empty and I had also recently been inundated with youtube content about the benefits of writing essays as a way of organizing your thoughts. So as a compromise between feature creep and shipping I decided I would pursue the blog, but I would focus on getting a version of the website live without it first. How hard can it be? Everyone has a blog!

However, the more I looked into setting up the blog section, the more I got a bit overwhelmed and felt like I was getting pulled away from the main goal of the project. Pulled down into rabbit holes of CMSes, self hosting vs paid, static website generators, frameworks, and all of the other technology that can be used to make a modern website. All of which seemed to have their own merits for the long term, but my goal was to be done more than to be correct or scalable.

So my goal for the project has shifted from : “get a website working at my domain that I can point people to with my business cards”. To: “maybe it should have a blog section, where I can better develop my thoughts through writing and share them.” In that moment I added quite a bit of complexity, but I didn’t know enough about web dev to know that![^1] As I began to research things further, I got that sinking feeling. The feeling any developer gets when they realize their new pet feature is producing the dreaded “scope creep”. 

In honor of the “Cult of Done” I asked myself what is the shortest possible path to get from where I am now: a website that is purely CSS and HTML hosted on github pages. To where I want to be: a website that is purely CSS and HTML hosted on github pages, with a blog written in markdown![^2] The answer of course was: read the docs!

It turns out that under the hood “Github Pages” is already powered by Jekyll. After reading up a bit on Jekyll I had the distinct realization that all of the tools were in place, and I just needed to understand how to connect the "wires". I find this is a common feeling if you venture even slightly off of the well trodden path. Or as some might say the “smart” or “sensible” path. After a few more hours of research, work, and installing Jekyll for local testing,  I was able to create the blog that you are reading. The final product is still 90% raw HTML and CSS for the landing page, contact, and about pages. Jekyll only really touches the blog section and handles the posts. All of the code is available for perusal on the public [github repo](https://github.com/Wbrown633/astrotino_website). It's all hosted through github pages, which will host static web pages for free! I think there are quite a few improvements that can be made to the code if I get a firmer grasp on Jekyll, but remember there is no editing stage! That will have to wait for another project. 

If I simply would have followed one of the many tutorials available from the beginning for Hugo or Jekyll or any of the other hundreds of static website generators, I almost certainly would have been done quicker. But, the purpose of this site isn’t just to make it, it’s to learn. I really wanted to dedicate myself to understanding how the building blocks of a website work. The modern instinct is to reach for very complex frameworks anytime we want to do anything on the web. Experienced developers can look at this problem and immediately identify that as bringing way too much bloat to what should be a simple solution. But I think they often miss the fact that beginners have to LEARN all of that bloat. You do not need a million lines of production quality code to publish your blog that is a glorified journal. You shouldn’t have to learn a web templating engine that is the equivalent of a 5 axis milling machine when what you want to do is cut a 2x4 in half. In this project I wanted to push hard in the other direction as a bit of a technological and mindset reset. And while that definitely wasn’t the most efficient way to get the job done. I feel like I learned a lot about both making a website and about learning!


Some things I learned along the way:

- Basics of web dev 
	- HTML, CSS, Jekyll, DNS, hosting options, and more!
- Publish early and publish often. 
	- Once I had the website bones ready, I got it up and running online with a classic “still working on it” section for the blog. That counts as done to me. No need to agonize over a feature you only added last minute. Cut out what is taking too long. Make that a new project, finish the current project (hooray!!), and then start the next.
- Don't fight the tooling just to be a zealot. 
	- At the end of the day I relented to using a static site generator because I didn't think it would be worth it to write all of the code needed to make even a super basic blog just for the experiment of it all. Maybe that was wrong, but my instinct was at some point you have to know when to compromise. 
- Sometimes doing things simply takes a lot of time and research
	- Looking back at it this post can feel a bit silly. Of course it's not that hard to write a blog that uses markdown for posts! Surely no one is writing their blog posts in raw HTML in the year 2024?! Well that is certainly all true, and it's good that we have that instinct when we are overcomplicating things, but that doesn't always mean we know what the simple solution is! I didn't even end up at what I think IS the simplest solution. Which is just getting off my high horse and hand writing the posts. How many posts will this site even have? Will it kill me to write four, five, ten posts without fancy markdown? Hopefully not, but it does nicely illustrate the tradeoffs we grapple with all the time in engineering and programming. 


Thanks for reading if you made it this far. My goal is to keep posts at a quick read but still meaty enough to be worth your time! If you're interested in my help with your next project please reach out at any of the links on the contact page!

[^1]: For a total web beginner such as myself, a simple blog is trivial for anyone with experience of course

[^2]: I should mention if I wrote the posts in raw HTML I certainly could have still used my original setup. But I really wanted to edit the posts in markdown (surely due at least in part to the brainwashing the wonderful podcast Cortex has done to me over the years). For a while I considered converting my markdown posts to HTML locally in a bash script or something similar using [pandoc](https://pandoc.org) (a cool tool I found during the research process!). But I ended up going with the more standard route. I think either would work but I went with the one that didn't feel like it was fighting with the tools as much.