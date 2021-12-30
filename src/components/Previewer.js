import { useState } from "react";
import {marked} from 'marked';
import Toolbar from "./Toolbar";

const defaultValue = `# Welcome to my Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://all-under-1.netlify.app/), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![image](https://user-images.githubusercontent.com/40293642/147754718-9a1ea367-1413-4fbf-b25f-4e33488a2490.png)`;

function Previewer() {
const [editorText, setEditorText] = useState(defaultValue);

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const handleChange = (e) => {
    setEditorText(e.target.value)
}
  return (
    <div className="main">
      <div className="wrapper">
          <Toolbar text={'Editor'} />
        <textarea id="editor" type="text" onChange={handleChange} value={editorText}></textarea>
      </div>
      <div className="previewWrapper">
          <Toolbar text={'Preview'} />
        <div id="preview" dangerouslySetInnerHTML={{
        __html: marked(editorText)
      }}></div>
      </div>
    </div>
  );
}

export default Previewer;
