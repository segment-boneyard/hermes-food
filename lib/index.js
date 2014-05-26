
/**
 * Module dependencies.
 */

var random = require('pickrand');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Account that it's time for FOOD!
 *
 * @return {Function}
 */

function plugin(){
  return function(robot){
    robot.help('food', 'let everyone know food is ready');
    robot.on('mention', /food!?/i, function(res){
      res.say('@here FOOD! FOOD! FOOD! FOOD!');
      res.say(random(foods));
    });
  };
}

/**
 * GIFs.
 */

var foods = [
  'http://www.reactiongifs.com/r/pzz.gif',
  'http://www.reactiongifs.com/wp-content/uploads/2013/07/hoagie.gif',
  'http://www.reactiongifs.com/wp-content/uploads/2013/07/patrick-eating.gif',
  'http://www.reactiongifs.com/r/yum.gif',
  'http://www.reactiongifs.com/wp-content/uploads/2013/11/hungry.gif',
  'http://www.reactiongifs.com/wp-content/uploads/2013/11/feed-me.gif',
  'http://www.reactiongifs.com/wp-content/uploads/2013/08/seeing-food.gif',
  'http://www.reactiongifs.com/r/eat-it.gif',
  'http://www.reactiongifs.com/wp-content/uploads/2013/02/FEED-ME.gif',
  'http://www.reactiongifs.com/wp-content/uploads/2012/11/eating_pants.gif',
  'http://www.reactiongifs.com/wp-content/gallery/popcorn-gifs/ziLcI.gif',
  'http://www.reactiongifs.com/wp-content/gallery/popcorn-gifs/JjZHH.gif'
];
