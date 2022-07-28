# Wardrobify

Team:

* Person 1 - Joel - Pair Programming 
* Person 2 - Lander - Pair Programming

## Design

## Shoes microservice

x- Make model with shoes.
x-- manufacturer, model name, color, picture url, and bin in the wardrobe where it exists
x --- Pulling the bin from the wardrobe microservice using polling
x- Restful API
x-- get list of shoes
x-- create new shoe
x-- delete a shoe
x- react component to show a list of all shoes and their details
x- react component to show a form to create new shoe
x- provide a way to delete a shoe
x-- possible way: grab the list of shoes, and then choose one, and then when you "submit", it deletes it
x- route nav links to component

## Hats microservice

x- Make model with hats
x-- fabric, style name, color, picture url, location in wardrobe where it exists
x--- Pulling the location from the wardrobe microservice using polling
- Restful API
x-- get a list of hats
x-- create a new hat
x -- delete a hat
x - react component to show a list of all hats and their details
x - react component to show a form to create new hat
x - provide a way to delete a hat
x -- possible way: grab the list of hats, and then choose one, and then when you "submit", it deletes it
x - route nav links to component