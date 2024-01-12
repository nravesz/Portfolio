function highlightText(text: string, highlights: string[]) {
    const paragraphs = text.split('\n');
    const highlightedParagraphs: JSX.Element[] = [];
    
    for (let i = 0; i < paragraphs.length; i++) {
        let highlightParagraph = paragraphs[i];
        for (let j = 0; j < highlights.length; j++) {
            const regex = new RegExp(`\\b${highlights[j]}\\b`, 'gi');
            let aux = highlightParagraph;
            highlightParagraph = aux.replace(regex, `<span>${highlights[j]}</span>`);
        }
        highlightedParagraphs.push(
            <p key={i} dangerouslySetInnerHTML={{ __html: highlightParagraph }} />
        );
    }
    return <>{highlightedParagraphs}</>;
};

export default highlightText;