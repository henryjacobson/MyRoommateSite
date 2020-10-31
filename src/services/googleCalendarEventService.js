const url = "https://www.googleapis.com/calendar/v3/"

export const getEvent = (calendarId, eventId) => 
    fetch(`${url}/calendars/${calendarId}/events/${eventId}`)
        .then(response => response.json())

export const getAllEvents = (calendarId) => 
    fetch(`${url}/calendars/${calendarId}/events`)
        .then(response => response.json())

export const deleteEvent = (calendarId, eventId) => {

}

export const createEvent = (calendarId, event) => {

}

export const updateEvent = (calendarId, eventId) => {

}

export default {
    getEvent, getAllEvents
}

