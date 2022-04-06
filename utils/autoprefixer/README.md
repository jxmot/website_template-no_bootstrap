# Using the Autoprefixer

This is a utility that I have found to be very useful. Especially since I can't remember all the browser CSS prefixes, can anyone?

After some searching I found [Autoprefixer](https://github.com/postcss/autoprefixer). And it's also on [npmjs](<https://www.npmjs.com/package/autoprefixer>). Which is what I'm using here, and sharing just a few steps on how to use it.

**NOTE:** Since software is certain to change I'll do my best to keep this information up to date. However, checking the Autoprefixer documentation probably wouldn't be a bad idea :)

## Install

First, you are required to have [NodeJS](<https://nodejs.org>) installed. A current version will do.

Install Autoprefixer:

```
npm install postcss postcss-cli autoprefixer
```

## Run

First copy your CSS files into the `autoprefixer/in` folder. 

And go!

```
npx postcss --no-map in/*.css --use autoprefixer -d out/
```

The `autoprefixer/out` folder will contain all of your CSS files whether they were modified or not. 

## What Changed?

Using a `diff` utility is a good idea, but if you are running on Windows I recommend [Winmerge](<https://winmerge.org/>) and there's a "WinMerge" file in this repository. It's called `compare_all.WinMerge`, just double-click it to run the diff.

