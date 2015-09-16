
var  Meetup = React.createClass({
    render: function () {
        return (
            <div className="meetup">
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
            <div className="meetup-title">
              <h2>{this.props.meetup.title} by {this.props.user.name} </h2>
              <img className="avatar" src={avatar} />
            </div>
        );
    }
});

var MeetupDescription = React.createClass({
    render: function () {
        return (
            <div className="meetup-description">
              {this.props.meetup.description}
            </div>
        );
    }
});

var MeetupDate = React.createClass({
    render: function () {
        return (
            <div className="meetup-date">
                <p>When: {this.props.meetup.date}</p>
            </div>
        );
    }
});

var MeetupPlace = React.createClass({
    render: function () {
        return (
            <div className="meetup-place">
                <p>Where: {this.props.meetup.place}</p>
            </div>
        );
    }
});

var MeetupCapacity = React.createClass({
    render: function () {
        return (
            <div className="meetup-capacity">
                <p>How many people can go: {this.props.meetup.capacity}</p>
            </div>
        );
    }
});


