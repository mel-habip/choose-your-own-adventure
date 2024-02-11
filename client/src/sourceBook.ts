interface PageAction {
    to: number
    text: string
    condition?: any
}

interface Page {
    text: string
    actions?: PageAction[]

}

export const sourceBookChapterOne: Page[] = [
    {
        text: `Another monday morning. Time to start the day.`
    },
    {
        text: `Mondays are often slow here at the library. Well, any day really... I've been thinking of what became of my life. I don't entirely know what to do, but I need to do something.`
    },
    {
        text: `I've liked books ever since I was a kiddo. `
    }
];

export default {
    sourceBookChapterOne
}