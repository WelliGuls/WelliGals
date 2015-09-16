var  MeetupsList = React.createClass({
    getInitialState: function () {
        return {meetups: this.props.initialMeetups}
    },

    render: function () {
        var meetups = this.state.meetups.map(function (meetup) {
          return <Meetup key={meetup.id} meetup={meetup} />
        })

        return (
            <div className="meetups">
              {meetups}
            </div>
        );
    }
});


