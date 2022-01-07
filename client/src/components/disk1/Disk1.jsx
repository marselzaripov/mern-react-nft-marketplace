import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createDir, getFiles, uploadFile} from "../../actions/file";
import FileList from "./fileList/FileList";
//import './disk.css'
import Popup from "./Popup";
import {setCurrentDir, setFileView, setPopupDisplay} from "../../reducers/fileReducer";
import Uploader from "./uploader/Uploader";

const Disk1 = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const loader = useSelector(state => state.app.loader)
    const dirStack = useSelector(state => state.files.dirStack)
    const [dragEnter, setDragEnter] = useState(false)
    const [sort, setSort] = useState('type')

    useEffect(() => {
        dispatch(getFiles(currentDir, sort))
    }, [currentDir, sort])

    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    function backClickHandler() {
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }

    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }

    if(loader) {
        return (
            <div className="loader">
                <div className="lds-dual-ring"></div>
            </div>
        )
    }

    return (
        <div className="picks">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-7 col-12">
                        {/*<div className="picks__filters">*/}
                        {/*    <div className="picks__filter">*/}
                        {/*        <div className="picks__btn">All categories <i className="fas fa-angle-down"></i></div>*/}
                        {/*        <ul className="picks__list">*/}
                        {/*            <li className="picks__item">Art</li>*/}
                        {/*            <li className="picks__item">Music</li>*/}
                        {/*            <li className="picks__item">Domain Names</li>*/}
                        {/*            <li className="picks__item">Virtual World</li>*/}
                        {/*            <li className="picks__item">Trading Cards</li>*/}
                        {/*            <li className="picks__item">Sports</li>*/}
                        {/*            <li className="picks__item">Utility</li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*    <div className="picks__filter">*/}
                        {/*        <div className="picks__btn">Buy Now <i className="fas fa-angle-down"></i></div>*/}
                        {/*        <ul className="picks__list">*/}
                        {/*            <li className="picks__item">On Auctions</li>*/}
                        {/*            <li className="picks__item">Has Offers</li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*    <div className="picks__filter">*/}
                        {/*        <div className="picks__btn">All Items <i className="fas fa-angle-down"></i></div>*/}
                        {/*        <ul className="picks__list">*/}
                        {/*            <li className="picks__item">Single Items</li>*/}
                        {/*            <li className="picks__item">Bundles</li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="col-lg-4 offset-lg-2 col-sm-5 col-12">
                        <div className="picks__filters picks__filters_rg">
                            {/*<div className="picks__filter">*/}
                            {/*    <div className="picks__btn">All Artworks <i className="fas fa-angle-down"></i></div>*/}
                            {/*    <ul className="picks__list">*/}
                            {/*        <li className="picks__item">Abstraction</li>*/}
                            {/*        <li className="picks__item">Skecthify</li>*/}
                            {/*        <li className="picks__item">Patternlicious</li>*/}
                            {/*        <li className="picks__item">Virtuland</li>*/}
                            {/*        <li className="picks__item">Papercut</li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                            <div className="picks__filter">
                                <div className="picks__btn">Sort by <i className="fas fa-angle-down"></i></div>
                                <ul className="picks__list">
                                    <li className="picks__item">Top rate</li>
                                    <li className="picks__item">Mid rate</li>
                                    <li className="picks__item">Low rate</li>
                                </ul>
                            </div>
                            <select className="picks__filter" value={sort}
                                    onChange={(e) => setSort(e.target.value)}
                                    className='disk__select'>
                                <option className="picks__item" value="name">By name</option>
                                <option className="picks__item" value="type">By type</option>
                                <option className="picks__item" value="date">By date</option>
                            </select>
                        </div>
                    </div>
                    <FileList/>

                </div>
            </div></div>
        // !dragEnter ?
        //     <div className="disk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
        //         <div className="disk__btns">
        //             <button className="disk__back" onClick={() => backClickHandler()}>Назад</button>
        //             <button className="disk__create" onClick={() => showPopupHandler()}>Создать папку</button>
        //             <div className="disk__upload">
        //                 <label htmlFor="disk__upload-input" className="disk__upload-label">Загрузить файл</label>
        //                 <input multiple={true} onChange={(event)=> fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input"/>
        //             </div>
        //             <select value={sort}
        //                     onChange={(e) => setSort(e.target.value)}
        //                     className='disk__select'>
        //                 <option value="name">По имени</option>
        //                 <option value="type">По типу</option>
        //                 <option value="date">По дате</option>
        //             </select>
        //             <button className="disk__plate" onClick={() => dispatch(setFileView('plate'))}/>
        //             <button className="disk__list" onClick={() => dispatch(setFileView('list'))}/>
        //         </div>
        //         <FileList/>
        //         <Popup/>
        //         <Uploader/>
        //     </div>
        //     :
        //     <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
        //         Перетащите файлы сюда
        //     </div>
    );
};

export default Disk1;
