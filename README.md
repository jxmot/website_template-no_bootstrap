<h1 align="center">Website Template - NO BOOTSTRAP<h1>
<p align="center">Chapter 1<p>

# Overview

This repository contains a website *template*. It is intended as a starting point for the primary page of a website.

# Purpose

The intent is to make it easier and quicker to create a website *without using Boostrap*.  

I wanted a *basic*, *simple* and *working* website template. It had to have a navigation bar and be *responsive*... it seems that everyone has a different definition of what *resposive* actually means. 

After some (*ok, more than just "some"*) frustration getting Bootstrap to cooperate on a number of issues:

* Not all browsers(or platforms!) produce the same results
* Bootstrap CSS is an excellent CSS framework, but too complicated and too much overhead for basic needs
* I'm tired of it lol

## The Result

After some research, experimentation, and playing around I put together what you see in this repository. Before I even started I had some expectations to fill:

* Must be responsive
* Must work, the navigation menu must operate and select targets
* Must work with or without the "logo" component of the navigation bar
* Must be usable as a *basic* starting point for other projects

It was also quite frustrating just *finding* **working** examples of a non-Bootstrap "responsive" page with a navigation menu. Too often I'd find something that(*pick one or more of the following...*):

* Did not work at all
* Was not truly "responsive"
* The "code" was poorly written and/or disorganized
* The author didn't test their work

So, here's what I've got now... (*although it's more like a framework*)

# High Level Details


## Technologies Used

Well, there is the *obvious* stuff like HTML, CSS, Javascript & JQuery. Beyond that in CSS I'm using *grid* to align elements on the page. At first it was slightly confusing especially coming from a Bootstrap mindset.

And I'm using those 4 technologies to do things like:

* Manipulate and create DOM objects
* Dynamically load CSS or JavaScript
* And more!

## File Organization

### Folder Hierarchy

```
/ ──public_html
    └───assets
        ├───css
        └───js
```

### Naming Conventions

Files have been named so that *common & non-site specific* files are easily located. The *site specific* files are also easy to identify:

* Files names that begin with `nobs_` are specific to this *project* and contain *references* to other *project specific* source file elements within it.
* Files without `nobs_` are generic and can be easily used with other projects. Some minor editing may be required.

Functions and globally used variables are also named so that their *purpose* and containing *file* can be determined easily. 

# Continue

To [chapter 2 - Features](CH2.md)...