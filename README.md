# React State Searcher

## Table of contents

- [General info](#general-info)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

This application is a search engine for the United States of America. The search engine is built of a filter in the form of selecta, autocomplete input prompting possible values ​​based on the entered value and selecta that allows you to choose the form of presentation of the searched data. The source is a .json file located in the `src/services` directory.

<img src="https://res.cloudinary.com/dox1tzpb0/image/upload/v1644872384/state1_xv0lqf.jpg">

<img src="https://res.cloudinary.com/dox1tzpb0/image/upload/v1644872384/state2_wf1lph.jpg">

<img src="https://res.cloudinary.com/dox1tzpb0/image/upload/v1644872384/state3_nvekac.jpg">

<img src="https://res.cloudinary.com/dox1tzpb0/image/upload/v1644872384/state4_lmhqgx.jpg">

## Features

The main page contains a search engine for the United States of America with:

- filter select with name, state code or capital city to choose,
- autocomplete input with text suggestions based on the batch (depending on the selected filter),
- data presentation select with table, symbols or map to choose,
- display area presenting searched data (depending on the selected data presentation format).

## Technologies

Application has been moved from JS to TS on 30.05.2022.

- HTML,
- CSS,
- JS,
- React,
- Bulma,
- Parcel.

## Setup

If you want to run the application on the local machine, follow these steps:

1. Clone down this repository
2. Install dependencies with the command: `npm install`
3. Start development server with the command: `npm start`

The application will be available at `localhost:1234` to view in the browser.
