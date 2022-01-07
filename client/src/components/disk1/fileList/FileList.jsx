import React from 'react';
import './fileList.css'
import {useSelector} from "react-redux";
import File from "./file/File";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const FileList = () => {

    const files = useSelector(state => state.files.files)
    const fileView = useSelector(state => state.files.view)

    if (files.length === 0) {
        return (
            <div className='loader'>Файлы не найдены</div>
        )
    }

    if (fileView === "list") {
        return (
            <div className='fileplate'>
                {files.map(file =>
                    <File key={file._id} file={file}/>
                )}
            </div>
        )
    }


};

export default FileList;
