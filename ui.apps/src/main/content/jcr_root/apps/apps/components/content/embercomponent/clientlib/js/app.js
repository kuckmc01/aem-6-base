
//shared variable between spaceships/spaceship routes
var spaceships;

App = Ember.Application.create({
    rootElement: '#ember-container'
});

App.Router.map(function() {
    // put your routes here
    this.resource('spaceships', function(){
        this.resource('spaceship', {path: ':spaceship_id'});
    });
});

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return '';
    }
});
App.SpaceshipsRoute = Ember.Route.extend({
    model: function() {
        //get content from backend
        var path = CQ.HTTP.noCaching(CQ.HTTP.getPath()+'/jcr:content/par/embercomponent/jcr:content/json.json');
        var jcrContent = CQ.shared.HTTP.eval(path);
        spaceships = JSON.parse(jcrContent.json);

        return spaceships;
    }
});
App.SpaceshipRoute = Ember.Route.extend({
    model: function(params) {
        return spaceships.findBy('id', params.spaceship_id);
    }
});
App.SpaceshipController = Ember.Controller.extend({
    isEditing: false,
    isEditable: (CQ.WCM.getMode() == 'edit'),
    actions: {
        edit: function() {
            this.set('isEditing', true);
        },
        doneEditing: function(){
            this.set('isEditing',false);
            //update backend
            var path = CQ.HTTP.getPath()+'/jcr:content/par/embercomponent/jcr:content';
            var params = {'json':JSON.stringify(spaceships)};
            var serverResponse = CQ.utils.HTTP.post(path,null,params,this);
            if(CQ.utils.HTTP.isOk(serverResponse)){
                CQ.Notification.notify('Update','Ok',.5,true);
            }else{
                CQ.Notification.notify('Update','Failed',.5,true);
            }
        }
    }
});


