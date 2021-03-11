 
<h2 align="center"> Parasite API </h1> <br/>
<p align="center">
    <a href="https://parasite.todack.com/api">
        <img alt="Parasite API" title="Parasite API" src="" width="450">
    </a>
</p>

<p align="center">
    An unified API for machine learning models.
</p>

### Philosophy

> The data may not contain the answer. The combination of some data
> and an aching desire for an answer does not ensure that a resonable 
> answer can be extracted from a given body of data.
>
> By John Tukey, Father of modern exploratory data analysis.

## Table of Contents

- [Overview](#overview)
- [Services](#services)
- [Feedback](#feedback)
- [Contribution](#contribution)
- [References](#references)

## Overview

[![Build Status](https://travis-ci.com/todack/parasite.svg?branch=main)](https://travis-ci.com/todack/parasite)
![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=http%3A%2F%2Fparasite.todack.com%2F)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
![GitHub](https://img.shields.io/github/license/todack/parasite)

Parasite API provides an unified access to a large number of machine learning applications. 

### Features

- A huge catalouge of machine learning applications.

## Services

| Service Name | Status | Link |
|--------------|--------|------|
| Image Classifier | Inactive | http://parasite.todack.com |
| Language Translation | Inactive | http://parasite.todack.com |

## Feedback

- For bugs, complaints and issues, follow the [Issue Template]() and report [here](https://github.com/todack/parasite/issues).
- For questions and feature requests, create a new discussion [here]().
- If you find an issue, pull-request or discussion useful, upvote it.
- For any other concerns reach us at parasite@todack.com.

## Contribution

If, for some strange reason, you wish to contribute to this project then follow the guidelines below to locally setup this project.

### Prerequisites
- `node-14` and `npm`. If you don't have it installed on your system, follow the guide [here](https://nodejs.org/en/download/).
- Fundamentals of web programming using `Javascript`.
- Basics of `NodeJS`, `Express` and `MongoDB`. All of these have great documentation to get started.
 
### Local Setup
- Fork the repo to your preferred account. Look for a `fork` button on the top right corner of the github repo page.
- Clone the forked repo.
```sh
git clone https://github.com/<username>/parasite.git 
```
- Install project dependencies.
```sh
cd parasite
npm install
```
- Run the project.
```sh
npm run serve
```

### Workflow

The follwing workflow is recommended to contribute to this project. Follow each step carefully.

- Create a topic branch.
```sh
git checkout -b <topic-name>
```
- Make changes and run tests to check if it breaks anything.
```sh
npm run test:unit
```
- If nothing breaks, commit the changes.
```sh
git commit -a -m "descriptive message"
```
- Push the changes to GitHub repo.
```sh
git push origin <topic-name>
```
- Finally, check for the `pull-request` option on GitHub and submit with proper details.

For a more descriptive guide follow the [link](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project).

## References
- [TODO] Add research papers and relevant examples.
