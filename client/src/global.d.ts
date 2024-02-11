

declare global {
    /**
     * Now declare things that go in the global namespace,
     * or augment existing declarations in the global namespace.
     */

    interface PageAction {
        to: number
        text: string
        condition?: any
    }

    type Page = {
        text: string,
        x: number, //index
    } & ({
        actions: PageAction[],
        to?: never
    } | {
        actions?: never,
        to: number
    });

    interface gameState {
        bookName: string
        protagonistName: string
        protagonistPronoun: 'he' | 'she' | 'they'
        antagonistName: string
        sideKickType: 'wolfdog' | 'lynx' | 'hawk' | null
        sideKickName: string | null
        additionalCharacter?: any //LATER
        editorChosen: 'professional' | 'best friend' | 'mom' | null
    }


};

export { };