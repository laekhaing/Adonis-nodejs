'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

/*const Route = use('Route')

Route.get('/', () => {
  return `
  <html>
    <head>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <section>
        <div class="logo"></div>
        <div class="title"></div>
        <div class="subtitle"><p>AdonisJs simplicity will make you feel confident about your code</p></div>
      </section>
    </body>
  </html>
  `
}) */
const Route = use('Route')

Route.get('/', ({ request }) => {
  /** get number from the url query string */
  const guessedNumber = Number(request.input('number'))

  /** if number is not specified, let the user know about it */
  if (!guessedNumber) {
    return 'Please specify a number by passing ?number=<num> to the url'
  }

  /** generate a random number */
  const randomNumber = Math.floor(Math.random() * 20) + 1

  /** let the user know about the match */
  return randomNumber === guessedNumber
  ? 'Matched'
  : `Match failed. The actual number is ${randomNumber}`
})
