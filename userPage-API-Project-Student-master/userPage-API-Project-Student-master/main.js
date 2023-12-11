const renderer = new Renderer();
const apiManager = new APIManager()

apiManager.getAllData()
.then (() =>{
    
    renderer.renderAll(apiManager.data)
})

const foo = function(){
    apiManager.getAllData()
    .then(() => {
    renderer.renderAll(apiManager.data)
})
}