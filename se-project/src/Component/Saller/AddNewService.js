import React, { useState } from "react";

function TextEditor() {
    const [text, setText] = useState("");

    const handleBoldClick = () => {
        setText((prevText) => prevText + "<b></b>");
    };

    const handleItalicClick = () => {
        setText((prevText) => prevText + "<i></i>");
    };

    const handleOrderedListClick = () => {
        setText((prevText) => prevText + "<ol><li></li></ol>");
    };

    const handleUnorderedListClick = () => {
        setText((prevText) => prevText + "<ul><li></li></ul>");
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <button onClick={handleBoldClick}>Bold</button>
            <button onClick={handleItalicClick}>Italic</button>
            <button onClick={handleOrderedListClick}>Ordered List</button>
            <button onClick={handleUnorderedListClick}>Unordered List</button>
            <br />
            <textarea value={text} onChange={handleTextChange} />
            <br />
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
}

export default TextEditor;
