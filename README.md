# Wardrobify

Team:

* Person 1 - Joel - Pair Programming 
* Person 2 - Lander - Pair Programming

## Design

## Shoes microservice

- Make model with shoes.
-- manufacturer, model name, color, picture url, and bin in the wardrobe where it exists
--- Pulling the bin from the wardrobe microservice using polling
- Restful API
-- get list of shoes
-- create new shoe
-- delete a shoe
- react component to show a list of all shoes and their details
- react component to show a form to create new shoe
- provide a way to delete a shoe
-- possible way: grab the list of shoes, and then choose one, and then when you "submit", it deletes it
- route nav links to component

## Hats microservice

x- Make model with hats
x-- fabric, style name, color, picture url, location in wardrobe where it exists
x--- Pulling the location from the wardrobe microservice using polling
- Restful API
x-- get a list of hats
x-- create a new hat
x -- delete a hat
x - react component to show a list of all hats and their details
- react component to show a form to create new hat
- provide a way to delete a hat
-- possible way: grab the list of hats, and then choose one, and then when you "submit", it deletes it
- route nav links to component