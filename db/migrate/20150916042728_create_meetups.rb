class CreateMeetups < ActiveRecord::Migration
  def change
    create_table :meetups do |t|
      t.string :title
      t.text :description
      t.string :place
      t.date :event_date
      t.time :duration
      t.integer :capacity

      t.timestamps null: false
    end
  end
end
