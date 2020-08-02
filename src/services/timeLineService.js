const mapEventsToProperShape = (events) => {
    let yearsEvents = events.map(item => {
        item['year'] = new Date(item.date).getFullYear();
        return item;
    }).reduce((acc, cur) => {
        if (acc.some(item => item.year === cur.year)) {
            let block = acc.find(item => item.year === cur.year);
            block.events.push(cur);
        } else {
            acc.push({
                year: cur.year,
                events: [
                    cur
                ]
            });
        }

        return acc;
    }, []).sort((a, b) => {
        return a.year - b.year;
    });

    return yearsEvents
} ;

class TimeLineService {
    static getEvents() {
        return fetch('http://localhost:3000/events')
            .then(response => response.json())
            .then(data => mapEventsToProperShape(data));
    }
}

export default TimeLineService;
