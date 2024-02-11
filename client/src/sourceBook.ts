const designatedLastPage = 9999999;

export const sourceBookChapterOne: Page[] = [
    { //page 0
        x: 0,
        text: `Another monday morning. Time to start the day.`,
        to: 1
    },
    {
        x: 1,
        text: `Mondays are often slow here at the library. Well, any day really... I've been thinking of what became of my life. I don't entirely know what to do, but I need to do something.`,
        to: 2,
    },
    {
        x: 2,
        text: `I've liked books ever since I was a kiddo. Oh, I know!`,
        to: 3
    },
    {
        x: 3,
        text: `I should write a book! A choose-your-own-adventure book!`,
        to: 4,
    },
    {
        //page 4
        x: 4,
        text: `Hmm... where to begin?`,
        actions: [
            {
                text: 'Grab a coffee & a notebook',
                to: 5
            },
            {
                text: 'Pass the day & start after work',
                to: 6
            }
        ]
    },
    {
        x: 5,
        text: 'Good thing I bring my favourite fountain pen to work every-day.',
        to: 7
    },
    {
        x: 6,
        text: `The day goes by, slow but peaceful. I can't wait to go home and start the book!`,
        to: designatedLastPage
    },
    {
        x: designatedLastPage,
        text: 'LAST PAGE',
        to: designatedLastPage
    }
];

export default {
    sourceBookChapterOne
}