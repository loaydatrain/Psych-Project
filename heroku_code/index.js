const express = require('express')
const app = express()
const port = process.env.PORT || 5000

var req1 = 0
var req2 = 0
var req3 = 0

// [11:50 AM, 11/10/2020] Avinash: https://forms.gle/f7Wby2UGhP7KodQj9 - form 1, part 1
// [11:50 AM, 11/10/2020] Avinash: https://forms.gle/ZaUMkZcm6d8dcd7y5 - form 1, part 2
// [11:51 AM, 11/10/2020] Avinash: https://forms.gle/hcP2j7kd3PyPVzjJ6 - f

// Survey 2, uplifting -

// https://forms.gle/6oLJKZeF2cVumF8w7 

// Survey 2, neutral- 

// https://forms.gle/w8xBZazP51ivJQK37

// Survery 2, sad- 
// https://forms.gle/LMpJGF2SM467kBRi6


app.get('/', (req, res) => {

  choice = 0
  console.log("Set 1 Count " + req1)
  console.log("Set 2 Count " + req2)
  console.log("Set 3 Count " + req3)

  if(req1 <= req2) {
    req1++
    console.log("Chosen 1")
    res.redirect('https://forms.gle/6oLJKZeF2cVumF8w7')
  }
  else if(req3 <= req2){
    console.log("Chosen 3")
    req3++
    res.redirect('https://forms.gle/w8xBZazP51ivJQK37')
  }
  else{
      console.log("Chosen 2")
  	  req2++
      res.redirect('https://forms.gle/LMpJGF2SM467kBRi6')
  }
})

app.get('/wakeUp', (req, res) => {
  return res.send("I am awake!")
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})


// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))