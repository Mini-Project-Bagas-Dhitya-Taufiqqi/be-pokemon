**Pokemon API**

Welcome to the Pokemon API!

This API provides endpoints for various Pokemon-related features. Please note that while the functionality is related to Pokemon, it is currently using a random domain due to being deployed for free.

To access the API, use the following link
https://noon-neighborly-bobcat.glitch.me

This API provides several endpoints to interact with Pokemon data:

1. /catch-pokemon: This endpoint is used to catch a new Pokemon. When accessed with the GET method, the catchPokemon() function is called to catch a Pokemon, and the result is sent as a JSON response.

2. /release-pokemon: This endpoint is used to release a Pokemon from the captured Pokemon list. When accessed with the POST method, the identification number of the Pokemon to be released is received from the request body (req.body). The releasePokemon(number) function is called with the Pokemon number as an argument, and the result is sent as a JSON response.

3. /rename-pokemon: This endpoint is used to rename a captured Pokemon. When accessed with the POST method, the new name for the Pokemon is received from the request body (req.body). The renamePokemon(name) function is called with the new Pokemon name as an argument, and the result is sent as a JSON response.
