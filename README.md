## Installation

```sh
$ git clone git@github.com:amytangcodes/bridge_breaddit.git
$ yarn
```

You should only need to do this the first time.

## Run the app locally

```
$ cd /path/to/bridge_breddit
$ yarn dev
```
## Middleware

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle.

Middleware can be at the application level or at the router level.

## Testing

Using `jest` and `supertest` for API testing.

## Environment variables

Environment variables are to be loaded in through a `.env` file. Anything that needs to be configured by environment or kept a secret should live in the `.env` file and it should never be checked in.

## Commit messages

In order to keep a clean git history merges should always be squashed with a consistent commit message style.
