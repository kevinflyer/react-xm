import React from 'react'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {EditorState} from 'draft-js';

export default class EditorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState:EditorState.createEmpty()
        };
    }

    onEditorStateChange=(editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <Editor editorState={editorState} wrapperClasssName="demo-wrapper" editorClassName="demo-editor" onEditorStateChange={this.onEditorStateChange} toolbar={{
                history:{inDropdown:true},
                list:{inDropdown:true},
                textAlign:{inDropdown:true},
                fontFamily:{options:['宋体', '黑体', '楷体', '微软雅黑','Arial',]}
            }}
            />
        )
    }
}