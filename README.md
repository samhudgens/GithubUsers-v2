# GithubUsers-v2

To run first do:   npm install

Then:    ionic serve


The "master" branch has the basic features, which include getting all the users from the Github Users API and showing them in an infinitely-scrollable list. Other branches show separate features or works in progress, such as integrating the Redux pattern.

Use caution when scrolling, because this code requires making a separate call to the Github API for each user it loads, and you might find yourself blocked due to rate-limiting very quickly. Currently, the API allows 60 calls per hour for a non-auth user.

The search feature allows searching an individual user.

Users with more than 2 public repositories are shown in red. 
