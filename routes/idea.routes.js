

const idea_controllers=require('../controllers/idea.controllers')

module.exports=(app)=>{
    app.get('/ideaApp/api/v1/ideas',idea_controllers.getAllIdeas)

    app.get('/ideaApp/api/v1/ideas/:id',idea_controllers.getIdeaById)

    app.post('/ideaApp/api/v1/ideas',idea_controllers.createIdea)

    app.put('/ideaApp/api/v1/ideas/:id',idea_controllers.updateIdea)

    app.delete('/ideaApp/api/v1/ideas/:id',idea_controllers.deleteIdea)
}