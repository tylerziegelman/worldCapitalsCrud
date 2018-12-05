'use strict'
let capitals = [{country:"United States", capital:"Washington D.C.", population:693972},{country: "Botswana", capital: "Gaborone", population:231592}]
class WorldcapitalController {
  
  displayCapital({request,response}){
    response.send(capitals)
  }

  addCapital({request, response}) {
    const capital = request.post()
    capitals.push(capital)
    response.send(capitals)
  }

  async deleteCapital({request, response}) {
    const body = request.post()
    capitals = capitals.filter((element) => {
      console.log(element.country === body.country)
     return element.country !== body.country
    })
    console.log(capitals)
    response.send("country deleted")
  
  }

  


}

module.exports = WorldcapitalController
