import { Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import AppearingText from "src/components/AppearingText";
import { sourceBookChapterOne } from "src/sourceBook";

export default function StoryPage() {

    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const historyHelper = usePageHistory();

    const currentPage = useMemo<Page>(() => {
        if (currentPageIndex) {
            return sourceBookChapterOne[currentPageIndex] || {
                x: 0,
                text: '',
                actions: []
            };
        }

        else return {
            x: 0,
            text: `START HERE`,
            to: 1,
        };
    }, [currentPageIndex, sourceBookChapterOne]);

    const isAtEnd = useMemo(() => {
        return currentPageIndex === (sourceBookChapterOne.length - 1);
    }, [currentPageIndex, sourceBookChapterOne]);

    useEffect(() => {
        let localPageIndex = parseInt(localStorage.getItem('page-index') || '');
        if (localPageIndex) {
            setCurrentPageIndex(localPageIndex);
        }
    }, []);

    return <>
        <div style={{
            width: '100dvw',
            height: '100dvh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            position: 'relative'
        }} >
            <div style={{
                marginLeft: '25%',
                marginRight: '25%',
                width: '50%',
                textAlign: 'left',
                position: 'absolute',
                top: '25%',
                height: '100%'
            }} >
                <div style={{
                    minHeight: '33%',
                }} >
                    <AppearingText text={currentPage.text} />
                </div>
                {!!currentPage.actions?.length && <>
                    {currentPage.actions.map(action => {
                        return <div style={{
                            border: '1px solid',
                            borderRadius: '8px',
                            margin: '8px',
                            paddingLeft: '12px',
                        }}
                            className="hoverable-button"
                            onClick={() => {
                                setCurrentPageIndex(action.to);
                            }}  >
                            <AppearingText text={action.text} />
                        </div>
                    })}
                </>}
                <Button disabled={isAtEnd} onClick={() => {
                    setCurrentPageIndex(p => {
                        historyHelper.travelTo(currentPage.to as number);
                        return p + 1;
                    });
                }} >NEXT</Button>
                {historyHelper.lastPage != null && <Button onClick={() => {
                    setCurrentPageIndex(p => {
                        const to = historyHelper.lastPage as number;
                        historyHelper.travelTo(to);
                        return to;
                    });
                }} >Back</Button>}
            </div>
        </div>
    </>
}




function usePageHistory() {

    const [history, setHistory] = useState<number[]>([0]);

    return {
        get lastPage() {
            return history.at(-2); //-1 at a given time is the current one
        },
        travelTo: (to: number) => {
            setHistory(p => p.concat(to))
        },
        reset: () => {
            setHistory([]);
        },
    }
}