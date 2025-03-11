# Simple JS feature detection

Detect features supported in browsers to better inform CSS, JS and API usage.

## Overview

Add `browser-feature-detection.js` to `<head>` of single point of entry page (e.g. login): 

`<script defer src="/browser-feature-detection.js"></script>`

Everytime _(yes, everytime)_  page is loaded by a browser record the feature level data via JSON POST

## Usage

**Note**: requires backend support to record, store and display the results.

### JSON POST

JSON String structure: `css: {string}, api: {Array}`

`css` records a single CSS level as a string e.g. `2-grid`

`api` is an array of checked APIs e.g. `['customElements', 'intersectionObserver']`

note: an empty api array `[]` = `no-api-support` 

### Storing the analytics

Every time a match is found increment the associated value

### Viewing the analytics

Provide a simple table to review the results e.g. like this:

| level   | count | 
|---------|-------|
| 0-unknown | 2     |
| 2-grid  | 199   |
| no-api-support    | 3     |
| customElements | 100   |
| intersectionObserver | 30    |




