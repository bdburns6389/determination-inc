import request from "superagent";

const CALENDAR_ID = "ljc82e1ntos6i4cltl99fff7p4@group.calendar.google.com";
const API_KEY = "AIzaSyDTxhr8uytkZMqHxw30oFPwyO6UdDaotsc";
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
  request.get(url).end((err, resp) => {
    if (!err) {
      const events = [];
      JSON.parse(resp.text).items.map(event => {
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
          description: event.summary
        });
      });
      callback(events);
    }
  });
}
