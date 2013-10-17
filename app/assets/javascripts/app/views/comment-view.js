(function () {

  window.CommentView = Backbone.View.extend({
    className: 'row comment',
    template: _.getTemplate('comment'),
    render: function () {
      var newCommentHtml = this.template( this.model.toJSON() );
      $(this.el).html(newCommentHtml);
    },
    
    events: {
    	"click .delete" : "delete_comment"
    },

    delete_comment: function(e){
    	$(this.el).remove();
    	this.model.destroy();
    }
  });

})();
