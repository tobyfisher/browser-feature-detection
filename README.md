# Simple JS feature detection

Detect features supported in browsers to better inform CSS, JS and API usage.

## Overview

Add `browser-feature-detection.js` to single point of entry page (e.g. login): 

`<script defer="" src="/browser-feature-detection.js"></script>`

Everytime _(yes, everytime)_  page is loaded by a browser recored the feature level data via JSON POST

## Implemenation

**Note**: requires backend support to manage and record the results

### CSS Features
