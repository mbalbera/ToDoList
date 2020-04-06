class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.references :user
      t.boolean :completed
      t.datetime :time
      t.timestamps
    end
  end
end
