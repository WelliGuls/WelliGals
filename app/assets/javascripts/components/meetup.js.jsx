
// <img className="avatar" src={avatar} />

var  Meetup = React.createClass({

    clickHandler: function(e) {
      console.log(e)
    },
    render: function () {
        var user = this.props.initialUser
        var meetup = this.props.initialMeetup
        return (
            <div onClick={this.clickHandler} className="demo-card-wide mdl-card mdl-shadow--2dp meetup meetups">
              <MeetupTitleS meetup={meetup} user={user} />
              <MeetupDescriptionS meetup={meetup} />
              <MeetupDateS meetup={meetup} />
              <MeetupPlaceS meetup={meetup} />
              <MeetupCapacityS meetup={meetup} />
            </div>
        );
    }

});

var MeetupTitleS = React.createClass({

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

var MeetupDescriptionS = React.createClass({
    render: function () {
        return (
            <div className="mdl-card__supporting-text">
              {this.props.meetup.description}
            </div>
        );
    }
});

var MeetupDateS = React.createClass({
    render: function () {
        return (
            <div className="mdl-card__actions mdl-card--border">
                <p>When: {this.props.meetup.date}</p>
            </div>
        );
    }
});

var MeetupPlaceS = React.createClass({
    render: function () {
        return (
            <div className="mdl-card__actions mdl-card--border">
                <p>Where: {this.props.meetup.place}</p>
            </div>
        );
    }
});

var MeetupCapacityS = React.createClass({
    render: function () {
        return (
            <div className="mdl-card__actions mdl-card--border">
                <p>How many people can go: {this.props.meetup.capacity}</p>
            </div>
        );
    }
});


