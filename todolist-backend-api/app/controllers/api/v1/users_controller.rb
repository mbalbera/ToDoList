class Api::V1::UsersController < ApplicationController
    
    def login 
        user = User.find_or_create_by(name: params[:name])
        my_tasks = user.tasks
        render json: {user: user, tasks: my_tasks}
    end

end
