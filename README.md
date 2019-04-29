# Dummy Card

Simply run 
npm install
npm start

click index.html

expected results
1) each time 3 cards will be show
2) click next button, if reaching the end of list, error msg "no more next cards" will be shown
3) click prev button, if reaching the beginning of the list, error msg "no more previous cards" will be show

# Dummy Card API is got from https://github.com/Mindera/dummy-card-api

Simple server exposing *dummy* data for display on cards.



and access ``http://127.0.0.1:3000/cards`` to get an array of data.

If you want to retrieve just a subset, specify the lower and upper limit as query parameters, for example:

    http://127.0.0.1:3000/cards?_start=8&_end=12
