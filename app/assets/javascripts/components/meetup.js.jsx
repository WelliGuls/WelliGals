var  Meetup = React.createClass({
    render: function () {
        return (
            <div className="meetup">
              <MeetupTitle meetup={this.props.meetup} />
              <MeetupDescription meetup={this.props.meetup} />
            </div>
        );
    }
});

var MeetupTitle = React.createClass({
    render: function () {
        return (
            <div className="meetup-title">
              <h2>{this.props.meetup.title}</h2>
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


