
(function() {
    //test to make sure require and jquery are working together
    require(['jquery'], function( $ ) {
        console.log( $('#test-me').html() ); // prints test component
    });

    define('Spaceship',['jquery','module'], function( $, module ) {
        var Spaceship = function(){
            //constructor
            var me = this;
            var equipment = {};
            equipment.weapon = (require.config.Spaceship != undefined)?require.config.Spaceship.defaults.weapon:'none';
            this.getEquipment = function(){
                return equipment;
            };
        };
        Spaceship.prototype.shoot = function(){
            var me = this;
            var equipment = this.getEquipment();
            if(equipment.weapon === 'none'){
                console.log('Retreat!');
            }else{
                console.log(equipment.weapon + ' fires');
            }
        };
        return Spaceship;
    });

    require(['Spaceship'],function(Spaceship){
        require.config = {
            'Spaceship' :{
                defaults: {
                    weapon : 'Laser Cannon'
                }
            }
        };
        var warship = new Spaceship();
        warship.shoot();
        require.config = {
            'Spaceship' :{
                defaults: {
                    weapon : 'none'
                }
            }
        };
        var cargoship = new Spaceship();
        cargoship.shoot();
    });
})();
