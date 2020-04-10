class ChangeTimeToBeStringInTasks < ActiveRecord::Migration[6.0]
  def change
    change_column :tasks, :time, :string
  end
end
