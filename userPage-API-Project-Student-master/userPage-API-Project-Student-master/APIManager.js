//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {
            Quote: {},
            Pokemon: {},
            Meat: '',
            User:[],
            Friends:[],
        

        }
    }

    getQuote(){
        return $.get("https://api.kanye.rest/")
    }
    getPokemon(){
             const randomId = Math.floor(Math.random() * 949);
        return $.get("https://pokeapi.co/api/v2/pokemon/"+ randomId )
    } 
    getMeat(){
        return $.get("https://baconipsum.com/api/?type=meat-and-filler")
    }
    getUsers(){
        return $.get("https://randomuser.me/api/")
    }
    getFriends(){
        return $.get("https://randomuser.me/api/?results=7")
    }
    getAllData(){
    let Quote = this.getQuote()
    let Pokemon = this.getPokemon()
    let Meat = this.getMeat()
    let Users = this.getUsers()
    let Friends = this.getFriends()
    
    return Promise.all([Quote, Pokemon, Meat, Users, Friends]).then((values) => {
        [Quote, Pokemon, Meat, Users, Friends] = values 
        this.data.Quote = {quote: Quote.quote}
        this.data.Pokemon = { picture:Pokemon.sprites.front_default, name:Pokemon.name }
        this.data.Meat = {text:Meat[0]}
        this.data.User =({picture:Users.results[0].picture.medium, name:Users.results[0].name.first+""+Users.results[0].name.last, location:Users.results[0].location.city+","+Users.results[0].location.state})
        let friend = Friends.results.map((friend) => friend.name.first +" "+ friend.name.last); 
        this.data.Friends = ({friends:friend})
        console.log(this.data)
       
     })
      
        
    }

}