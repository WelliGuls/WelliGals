
// <img className="avatar" src={avatar} />

var  Meetup = React.createClass({

    render: function () {
        var user = this.props.initialUser
        var meetup = this.props.initialMeetup
        return (
            <div className="demo-card-wide mdl-card mdl-shadow--2dp meetup meetups">
              <MeetupTitle meetup={meetup} user={user} />
              <MeetupDescription meetup={meetup} />
              <MeetupDate meetup={meetup} />
              <MeetupPlace meetup={meetup} />
              <MeetupCapacity meetup={meetup} />
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


