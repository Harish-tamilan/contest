import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { javaLanguage, java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { langs, loadLanguage } from '@uiw/codemirror-extensions-langs';

function App() {
  const [code, setCode] = useState();

  useEffect(()=>{
    console.log('code, ', code);
  }, [code]);

  function handleChange(value) {
    setCode(value);
  }

  const getCodeMirrorComponent = () => {
    return (
      <>
        <CodeMirror
          value={code}
          onChange={handleChange}
          extensions={[
            javascript(),
            langs.java(),
            langs.python(),
            loadLanguage("python")
          ]}
          tabIndex={2}
          color='black'
          theme={okaidia}
          
        />
      </>
    );
  };
  
  return (
    <>
      <h1>Edit Code:</h1>
      {getCodeMirrorComponent()}
    </>
  );
}

export default App;
