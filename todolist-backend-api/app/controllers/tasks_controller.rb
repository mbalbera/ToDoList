class TasksController < ApplicationController
   

    def index
        tasks = Task.all
        render json: tasks
    end


    def create
       @task = current_user.tasks.new(task_params)

      respond_to do |format|
        if @task.save
         format.json { render :index, status: :created}
        else
         format.json { render json: @task.errors  }
        end
      end
    end

    def destroy
        task = Task.find(params[:id])
        task.delete
    end

  private

    def task_params
      params.require(:task).permit(:name, :time, :completed, :text)
    end

end