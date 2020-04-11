class Api::V1::TasksController < ApplicationController
   

    def index
        tasks = Task.all
        render json: tasks
    end

    def create
      # byebug
      @task = Task.new(task_params)
      user = User.find(params[:task][:user_id])
      if @task.save
        user_tasks = user.tasks
        # byebug
        # format.json { render :user_tasks}
        render json: {user: user, tasks: user_tasks}
      else
        format.json { render json: @task.errors  }
      end
    end

    def destroy
      # byebug
        task = Task.find(params[:id])
        task.delete
    end

    def update
      user = User.find(params[:id])
      user_tasks = user.tasks
      task = Task.find(params[:id])
      if task.update(task_params)
            render json: user.tasks
        else
            render json: {errors: task.errors.full_messages}
        end
    end

  private

    def task_params
      params.require(:task).permit(:time, :completed, :text, :user_id)
    end

end