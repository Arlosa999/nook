[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Budgtr

Build an express app that lets you create and read budget items

## Learning Objectives

- Practice building an express app
- Practice making an index route
- Practice making a show route
- Practice making new/create routes
- Practice adding static assets (CSS)

## Deliverables

You'll be creating an app that can let you
- see a list of your income and expenditures
- show you one income/expenditure item
- create a new income/expenditure item

## Technical Requirements

1. Must be able to run without syntax errors
2. Must have index, show, create, new routes, using REST
3. Must have basic MVC structure (more details below)

## App Description

## Data
You are provided a `budget.js` file with data for you to use to populate your index and show routes

## Routes
- Index
  - GET `/budgets`
- Show
  - GET `/budgets/:index`
- New
  - GET `/budgets/new`
- Create
  - POST `/budgets`

## MVC
Models, Views, Controller

We only have one model, so it may seem all these folders are overkill. As we start building with more complexity these folders will gain utility

- Your app should follow the MVC format
- Models
  - `budget.js` - the data we provided
- Views
  - your EJS files go in here
- Controllers
  -  since we just have one set of routes, we'll include them in our `server.js` stay tuned for lessons that'll teach us how to organize our code when we have more sets of routes


## Styling
- Follow the steps in this [lesson](https://git.generalassemb.ly/SEIR-Flex-0821/SEIR-0821-Course-Materials/blob/main/Unit_2/week_11/2_thu/instructor_notes/2_static_files.md) so you can add style to yours EJS files.
- (OPTIONAL) Recommended to go to try a new css framework like [materialize CSS](https://materializecss.com/) in order to immediately modernize your HTML.


## Commits

Commit at least each time you get a route and/or view working. The order doesn't matter, but this will help you check your progress of completing this homework:


#### Getting Started

- server is working and displays a plain `res.send` with some text like 'hello world'
- Add and configured npm packages `express`, `ejs`


- created index.ejs
  - html boiler plate
  - div with the class `container`
  - `h1` with the text "Budgtr"


## Index

- Set your` models/budget.js` data to a variable named `Budget`
- Display your data on your index page as a `<table>`
 - each income/expenditure should be a `<tr>`
 - each piece of data should be its own table cell `<td>`
 - the `name` should be wrapped in an `<a>` (anchor) tag, that goes nowhere for the moment, but will eventually link to the show page for that item

Expected Apperance:

![index.ejs populated with data](https://i.imgur.com/Hf6TkJU.png)

<hr>


## Show
- A show route and `show.ejs`
- A link from `index.ejs` item name to its show page
  - html boilerplate
  - a `<div>` with the class of `container`
  - an `<h1>` with the name of your item
  - a `<button>` that takes you back to the `index.ejs` page
  - the rest of the details of the item

Sample Appearance:

![show route](https://i.imgur.com/dVBZicJ.png)


<hr>

## New EJS
- configured your server to receive data through the form by adding this middleware in your `server.js`
```js
app.use(express.urlencoded({extended: true}))
```
- Add a button in your `index.ejs` that links to a new route that displays `new.ejs`
- The `new.ejs` should contain
 - html boilerplate
 - links to your css files
 - a `div` with the class container
 - an `h1` with a descriptive title
 - a form, with the appropriate action and method
 - an input field for
    - date
     - name
    - amount
    - from
    - submit
   - tags (bonus)
- Styling forms are a pain, keep it simple for now

**Hint**: use the attribute `placeholder` in the input field to see a placeholder value, rather than putting a label of the input field outside. Here is an example:

![placeholder example](https://i.imgur.com/KZ0DSKn.png)


<hr>

## New ROUTE
- A new route that is a post route
- first just console.log the `req.body`
- once the `req.body` is what you'd an expect (an object with keys that match our data in our `models/budget.js` and values that were entered in your form) `.push()` the `req.body` to your `Budget`
- then redirect to the index
- when you redirect to your index page, your new item should appear

See new item at the bottom:

![new item in list](https://i.imgur.com/0OTjWiw.png)

Show page should also render properly

![new item show page](https://i.imgur.com/r6CvxlW.png)



# :tada: WELL DONE :tada: - Submit your work by creating a pull request.


## Hungry for More: Innovation Time! (Recommended)

Remember, this is just JavaScript, so you can write as much JS logic as you want to make the app more useful beyond just showing the data as is. Be sure you solve this on your own.

- Add a variable 'bankAccount'
    - display it at the top of the index.ejs
    - have this value update based on each item
    - if the value is less than 0, change the background to red
    - if the value is greater than 1000 change the background to blue or green

- Tips
    - pseudocode on your own, figure out YOUR way of solving it
    - have a code graveyard
    - talk it through with the TA
    - link to helpful articles on stack overflow/elsewhere
    - collaborate - have a friend help you solve it your way or help a friend solve it their way

<hr>

## Hungrier for even More :eyes:

Feel free to choose what you want and if you want to implement something differently than the suggestion, go for it! It is hungry for more time!

- render the tags as list items in an unordered list
- input the tags, and add them to the tags array, figure out how to properly add multiple tags
- override the amount input so that it defaults to a negative number
- add logic to check whether the item is an expenditure or income (use two different fields? a check box? separate buttons? The choice is yours) and then input the amount as negative or positive based on the user's input

**SUPER BONUS**
- try to store data in [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

- If you implemented tags, sort/filter your list by tags (no hints! There are many ways to solve this!)


---

*Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*

# Budgtr
<br>

---

Title: Budgtr <br>
Type: Homework <br>
Creator: Karolin Rafalski <br>
