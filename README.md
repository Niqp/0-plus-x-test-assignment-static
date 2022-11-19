# 0+X Test Assignment

This is a draft for the new frontend test assignment for 0+X.

The purpose of this assignment is to see how a candidate can:

- Navigate in someone else's code and blend their code into the code base;
- Extend the code with a new feature they're tasked with;
- Search for improvements in the code and conduct a code review.

## Add New Feature

In this project, we have a source code for a static HTML/CSS/JS app.

The candidate will be tasked with a _new feature_—to implement a toggler for different sortings for the image list.

They will need to add a correct HTML control for that and program its behaviour so that the image list can be sorted by different properties and in different directions (ascending / descending).

## Find Problems in Code

The current source code contains some _flaws_ which are marked with comments in the `script.js` file.

First of all, it contains a bug that leads to _incorrect rendering_ of the image in the last block.

(The reason is in-place sorting of the array that changes the order of its elements which results in the incorrect image being selected for the render.)

Except for that, the code contains _less noticable problems_. These problems are offered to the candidate to find and fix. Optionally, we can ask them to not fix these problems but perform a code review to see how they give the feedback.

## Use Git and Deploy

For the real assignment it's better to use a repository in GitHub.

The candidate then will be able to fork the repo and show their proficiency with git, atomic commits, and the flow in general.

Another thing is, with GitHub, the candidate will be able to deploy assignment result to GitHub Pages. It will make it easier for us to evaluate the result.

## Candidate's POV

You can check how the candidate will see the assignment in the `assignment.md` file.
