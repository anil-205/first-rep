import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { application, initialState } from './reducers'
import App from './App'

const app = Express()
const port = 3000

//Serve static files
app.use('/static', Express.static('static'))
console.log('hello')
// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(application, initialState);

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const finalSate = store.getState()
  console.log(html, finalSate, 'finalSate')
  // Send the rendered page back to the client
  res.send(renderFullPage(html, finalSate))
}
function renderFullPage(html, finalSate) {
  return `
  <!doctype html>
  <html>
    <head>
      <title>Redux Universal Example</title>
    </head>
    <body>
      <div id="root">${html}
      </div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(finalSate).replace(
          /</g,
          '\\u003c'
        )}
      </script>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
  `
}

app.listen(port)