import React, { useState } from 'react';

function TextWithReadMore(props) {
    const [showFullText, setShowFullText] = useState(false);

    const text = props.text;
    const maxChars = props.maxChars || 100; // set a default maximum number of characters

    if (text.length <= maxChars) {
        // If the text is shorter than the maximum, just display it without a "read more" link
        return <p>{text}</p>;
    } else if (showFullText) {
        // If the "show full text" flag is set, display the full text with a "read less" link
        return (
            <div>
                <p>{text}</p>
                {/* <a href="#" onClick={() => setShowFullText(false)}>Read less</a> */}
            </div>
        );
    } else {
        // If the "show full text" flag is not set, display a shortened version with a "read more" link
        const shortText = text.substr(0, maxChars) + '...';
        return (
            <div>
                <p>{shortText}</p>
                {/* <a href="#" onClick={() => setShowFullText(true)}>Read more</a> */}
            </div>
        );
    }
}

export default TextWithReadMore;
