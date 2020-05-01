# Chuck Norris Joke API

This is a JSON API that has full CRUD (Create, READ, Update, Delete) capability that allows the user to access a database filled with random Chuck Norris jokes.

# Technologies Used

Mongoose and Express

# CREATE

- URL for CREATE

/jokes

- Method

POST

Example Response:

{
"\_id": "5eab9b3b3de56ab305d03e10",
"value": "Insert new joke here.",
"jokeID": 61,
"\_\_v": 0
}

# READ

- URL to get all jokes

/jokes

- Method

GET

- URL to get a single by their jokeID

/jokes/jokeid number

Example: /joke/1

Example Response:
[
{
"_id": "5e9d1d26a4da0c2eb3713329",
"value": "Chuck Norris never had to knock on wood. But he knows some assholes he killed who have. Which make him wonder if you should. Because he knows it isn't good. That's the impression of his boot in your face that you'll get.",
"jokeID": 1,
"__v": 0
}
]

# UPDATE

- URL

/jokes/:id
Example URL: /jokes/5eab9b3b3de56ab305d03e10

- Method

PUT

Example Response:

{
"\_id": "5eab9b3b3de56ab305d03e10",
"value": "Insert new updated joke here.",
"jokeID": 61,
"\_\_v": 0
}

# DELETE

- URL

/jokes/:id
Example URL: /jokes/5eab9b3b3de56ab305d03e10

- Method DELETE

The joke with that specific ID will be deleted from the database.

Author:

Andrew Ly
