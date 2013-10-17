class ContestsController < ApplicationController
  def index
    @contests = Contest.all
  end

  def show
    @contest = Contest.find(params[:id])
  end

  def comment 
    @contest = Contest.find(params[:id])
    new_comment = @contest.comments.create(comment_params)
    render :json => new_comment.to_json, :status => 200
  end

  def destroy
    @comment = Comment.find(params[:commentid])
    @comment.destroy
    render :text => "", :status => 200
  end

  private

  def comment_params
    params.permit(:side, :username, :comment)
  end
end
