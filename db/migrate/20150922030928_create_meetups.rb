class CreateMeetups < ActiveRecord::Migration
  def change
    create_table :meetups do |t|
      t.string :title
      t.text :description
      t.datetime :date
      t.integer :duration
      t.integer :capacity
      t.references :user, index: true, foreign_key: true
      t.string :place

      t.timestamps null: false
    end
  end
end
