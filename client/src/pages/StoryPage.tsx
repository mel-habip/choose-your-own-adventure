import { Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import AppearingText from "src/components/AppearingText";
import { sourceBookChapterOne } from "src/sourceBook";

export default function () {

    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const currentPage = useMemo(() => {
        if (currentPageIndex) {
            return sourceBookChapterOne[currentPageIndex] || { text: '' };
        }

        else return {
            text: `START HERE`
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
            alignContent: 'center'
        }} >
            <div style={{
                marginLeft: '25%',
                marginRight: '25%',
                width: '50%',
                textAlign: 'left'
            }} >
                <AppearingText text={currentPage.text} />
            </div>
            {isAtEnd && <AppearingText text="thank you for taking this trip!" />}
            <Button disabled={isAtEnd} onClick={() => {
                setCurrentPageIndex(p => p + 1);
            }} >NEXT</Button>
        </div>
    </>
}