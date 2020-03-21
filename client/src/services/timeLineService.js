const timelineData = [
    {
        id: 1,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 1',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },

    {
        id: 2,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 2',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 3,
        date: '2014-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 3',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 4,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 4',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 5,
        date: '2017-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 5',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 6,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 6',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 7,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 7',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 8,
        date: '2015-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 8',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 9,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 9',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 10,
        date: '2011-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 10',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 11,
        date: '1998-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 11',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
];

class TimeLineService {
    static getEvents() {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                let yearsEvents = timelineData.map(item => {
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

                resolve(yearsEvents)
            }, 600);
        });
    }
}

export default TimeLineService;
