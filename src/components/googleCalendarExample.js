import React from 'react'

function GoogleCalendar() {
    var gapi = window.gapi
    var CLIENT_ID = "337607065759-btac391r33mtmeodo9mulkavee8iig43.apps.googleusercontent.com"
    var API_KEY = "AIzaSyBuH4SuZdl0eB0EMj-CMC6XsQRkoydeIws"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar";

    const handleClick = () => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            })

            gapi.client.load('calendar', 'v3', () => console.log('success'))
            gapi.auth2.getAuthInstance().signIn()
                .then(()=> {
                    var event = {
                        'summary': 'Google I/O 2015',
                        'location': '800 Howard St., San Francisco, CA 94103',
                        'description': 'A chance to hear more about Google\'s developer products.',
                        'start': {
                          'dateTime': '2015-05-28T09:00:00-07:00',
                          'timeZone': 'America/Los_Angeles'
                        },
                        'end': {
                          'dateTime': '2015-05-28T17:00:00-07:00',
                          'timeZone': 'America/Los_Angeles'
                        },
                        'recurrence': [
                          'RRULE:FREQ=DAILY;COUNT=2'
                        ],
                        'attendees': [
                          {'email': 'lpage@example.com'},
                          {'email': 'sbrin@example.com'}
                        ],
                        'reminders': {
                          'useDefault': false,
                          'overrides': [
                            {'method': 'email', 'minutes': 24 * 60},
                            {'method': 'popup', 'minutes': 10}
                          ]
                        }
                      }

                    // var request = gapi.client.calendar.events.insert({
                    //     'calendarId': 'primary',
                    //     'resource': event
                    // })


                    // request.execute(event => {
                    //     window.open(event.htmlLink)
                    // })

                    gapi.client.calendar.events.list({
                        'calendarId': 'primary',
                        'timeMin': (new Date()).toISOString(),
                        'showDeleted': false,
                        'singleEvents': true,
                        'maxResults': 10,
                        'orderBy': 'startTime'
                    }).then(response => {
                        const events = response.result.items
                        console.log('EVENTS: ', events)
                    })

                })
        })
    }

    return(
        <div>
            <button onClick={handleClick}>Sign In to Google Calendar</button>
        </div>
    )
}

export default GoogleCalendar