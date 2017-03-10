'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.group('api', function apiGroup () {
  Route.any('*', function* wrongApiRoutes (request, response) {
    yield response.status(404).json({message: 'Route does not exist'})
  })
}).prefix('api/v1')

Route.any('*', function* catchAllRoute (request, response) {
  yield response.sendView('master')
})
