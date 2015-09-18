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

          return <IndexMeetup key={meetup.id} meetup={meetup} user={user} />
        })

        return (
            <div className="meetups">
              {meetups}
            </div>
        )
    }
});

// <img className="avatar" src={avatar} />

var  IndexMeetup = React.createClass({
    clickHandler: function(e) {
      var url = "/meetups/" + this.props.meetup.id
      location = url
    },
    render: function () {
        return (
            <div onClick={this.clickHandler} className="demo-card-wide mdl-card mdl-shadow--2dp meetup">
              <MeetupTitle meetup={this.props.meetup} user={this.props.user} />
              <MeetupDescription meetup={this.props.meetup} />
              <MeetupDate meetup={this.props.meetup} />
              <MeetupPlace meetup={this.props.meetup} />
              <MeetupCapacity meetup={this.props.meetup} />
            </div>
        );
    }

});
