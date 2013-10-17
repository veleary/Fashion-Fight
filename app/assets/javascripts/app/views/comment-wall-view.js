(function () {

  window.CommentWallView = Backbone.View.extend({
    initialize: function (options) {
      this.listenTo(this.collection, 'add', this.addCommentToWall);
      this.listenTo(this.collection, 'destroy', this.deleteCommentFromWall);
    },

    addCommentToWall: function (comment) {
      var view = new CommentView({ model: comment });
      view.render();
      $(this.el).append(view.el);
    },

    deleteCommentFromWall: function(comment){
      console.log('deleteCommentFromWall');
      view.remove();
      view.render();
    }
  });

})();
