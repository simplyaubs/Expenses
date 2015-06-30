angular.module('starter.services', [])

.factory('fireBaseData', function($firebase) {
    var ref = new Firebase("https://the-expenses.firebaseio.com/"),
        refExpenses = new Firebase("https://the-expenses.firebaseio.com/expenses"),
        refRoomMates = new Firebase("https://the-expenses.firebaseio.com/room-mates");
    return {
        ref: function() {
            return ref;
        },
        refExpenses: function() {
            return refExpenses;
        },
        refRoomMates: function() {
            return refRoomMates;
        }
    }
});

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
