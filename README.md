# Cash Float & Till Counter

A fast, mobile-friendly web calculator built to streamline counting cash register floats and end-of-day tills.

## Why I Built This
Counting the cash float manually at work used to take around 10 minutes—and if there were a lot of coins, we often had to recount everything from scratch just to be sure we didn't make a mistake. I built this tool so staff can simply count the quantity of each note and coin, type them in, and let the app calculate the running total automatically.

## Features
* **Live Running Total:** Updates instantly as numbers are typed—no "Calculate" or "Submit" button needed.
* **Denomination Breakdown:** Supports standard notes and coins using custom `data-value` multipliers.
* **Input Guardrails:** Prevents negative values and decimal counts so till calculations stay accurate.
* **Mobile-Friendly Layout:** Responsive CSS Grid layout designed to be easy to tap and read on a phone at the counter, numeric keypad also prevents having to switch keyboard screens.
* **Reset Feature:** Clears all inputs so restarting is easy.

## Live Demo
👉 **[Use the Cash Float Counter here](https://ammicamia.github.io/float-calculator/)**

## How to Use
1. Open the live link on your phone or till computer.
2. Count the number of each note and coin in the drawer.
3. Enter the **count** (not the dollar value) into each matching denomination box.
4. Read the **Running Total** at the top.
5. Click **Reset** to clear all fields for the next till.

## Tech Stack
* **HTML5:** Semantic form structure using `<output>` and `data-*` attributes.
* **CSS3:** Responsive CSS Grid and Flexbox layout.
* **Vanilla JavaScript:** Event delegation (`input` listener) for real-time calculation with zero external dependencies.

## Running Locally
No build tools or installations required:
1. Clone or download this repository.
2. Open `index.html` in any web browser.
