import './commands.ts'
import './apiCommands'
const addContext = require('mochawesome/addContext')

Cypress.Screenshot.defaults({
  screenshotOnRunFailure: false,
  capture: 'fullPage',
})


Cypress.on('test:after:run', (test) => {
    
    addContext(     
      {
        test,
      },
      `assets/videos/${Cypress.spec.name}.mp4`,
    )
  })
