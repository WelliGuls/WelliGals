
// <img className="avatar" src={avatar} />

var  Meetup = React.createClass({

    render: function () {
        return (
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
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
              <h2 className="mdl-card__title-text">{this.props.meetup.title}</h2>

            by {this.props.user.name}

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


