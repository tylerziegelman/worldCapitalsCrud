'use strict'
//let capitals = [{country:"United States", capital:"Washington D.C.", population:693972},{country: "Botswana", capital: "Gaborone", population:231592}]
const Capitals = use('App/Models/Country')

class WorldcapitalController {
  
  async displayCapital({request,response}){
      const capitals = await Capitals.all()
      response.json({
        message: "Here are the capitals",
        data: capitals
      })

  }

  async addCapital({request, response}) {
    const {country,capital,population} = request.post()
    const addCap = await Capitals.create({country,capital,population})
    response.json({
      message: "Capital was added",
      data: addCap
    })
    
  }

  async deleteCapital({params,request, response}) {
    const {id} = params
    const country = await Capitals.find(id)
    await country.delete()
   
    
  }

  async updateCapital({params,request, response}){
      const {id} = params
      const foundCap = await Capitals.find(id)
      const {country, capital, population} = request.post()
      
      foundCap.country = country
      foundCap.capital = capital
      foundCap.population = population

     await foundCap.save()
     
     response.json({
       message: "Capital updated!",
       data: foundCap
     })
  }

  


}

module.exports = WorldcapitalController
