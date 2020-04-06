class AddTextToTask < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :text, :string
  end
end
