class CreateMeetups < ActiveRecord::Migration
  def change
    create_table :meetups do |t|
      t.string :title
      t.references :user
      t.text :description
      t.date :date
      t.integer :capacity
      t.integer :going
      t.string :place

      t.timestamps null: false
    end
  end
end
