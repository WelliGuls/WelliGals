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
      console.log(e)
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

var MeetupTitle = React.createClass({

    render: function () {
        var uid = this.props.user.uid
        var avatar = "http://graph.facebook.com/" + uid + "/picture"
        return (

            <div className="mdl-card__title">
              <div className="mdl-card__title-text">{this.props.meetup.title}</div>
              <div className="meetup-author">by {this.props.user.name}</div>
            </div>
        );
    }
});

var MeetupDescription = React.createClass({
    render: function () {
        return (
            <div className="mdl-card__supporting-text">
              {this.props.meetup.description}
            </div>
        );
    }
});

var MeetupDate = React.createClass({
    render: function () {
        return (
            <div className="mdl-card__actions mdl-card--border">
                <p>When: {this.props.meetup.date}</p>
            </div>
        );
    }
});

var MeetupPlace = React.createClass({
    render: function () {
        return (
            <div className="mdl-card__actions mdl-card--border">
                <p>Where: {this.props.meetup.place}</p>
            </div>
        );
    }
});

var MeetupCapacity = React.createClass({
    render: function () {
        return (
            <div className="mdl-card__actions mdl-card--border">
                <p>How many people can go: {this.props.meetup.capacity}</p>
            </div>
        );
    }
});


