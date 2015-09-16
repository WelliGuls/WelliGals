var  MeetupsList = React.createClass({

    getInitialState: function () {
        return {meetups: this.props.initialMeetups}
    },

    render: function () {
        var users = this.props.initialUsers

        var meetups = this.state.meetups.map(function (meetup) {

          var user = users.find(function (user) {
            return user.id === meetup.user_id
          })

          return <Meetup key={meetup.id} meetup={meetup} user={user} />
        })

        return (
            <div className="meetups">
              {meetups}
            </div>
        )
    }
})


