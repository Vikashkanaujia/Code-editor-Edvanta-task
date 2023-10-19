import React, { useState } from 'react';

const CodeEditor = () => {
    const [code, setCode] = useState('');
    const [isLocked, setIsLocked] = useState(false);
    const [text,setText] = useState('// Copied code here');
    const handleCopy = () => {
            
         navigator.clipboard.writeText(code).then(() => {
            navigator.clipboard.readText().then((copiedText) => {
                setText(copiedText);
              });
            
        }).catch(err => {
            console.error('Unable to copy code: ', err);
        });
    };

    const handleSave = () => {
        alert('Code saved.');
    };

    const handleLockUnlock = () => {
        setIsLocked(!isLocked);
    };

    return (
        <div className="code-editor">
            <div className='editor'>

            
            <div className='editor-inputbox'>
                <textarea disabled={isLocked} id="text1" placeholder='Write something...' rows="20" cols="50" onChange={(e) => setCode(e.target.value)}>
                   
                </textarea>
            </div>

            <div className="code-toolbar">
                <button className="button" onClick={handleCopy}>Copy</button>
                <button className="button" onClick={handleSave}>Save</button>
                <button className={`button ${isLocked ? 'button--locked' : ''}`} onClick={handleLockUnlock}>
                    {isLocked ? 'Unlock' : 'Lock'}
                </button>
            </div>
            
            </div>
            <div className='copied'>
                <p className='paragraph'>{text}</p>
            </div>
        </div>
    );
};

export default CodeEditor;
