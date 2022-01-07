import React from 'react';
import './file.css'
import dirLogo from '../../../../assets/img/dir.svg'
import fileLogo from '../../../../assets/img/file.svg'
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentDir} from "../../../../reducers/fileReducer";
import {deleteFile, downloadFile} from "../../../../actions/file";
import sizeFormat from "../../../../utils/sizeFormat";

import ht from '../../../../assets/img/ht.png'
import la7 from '../../../../assets/img/la7.png'
import la8 from '../../../../assets/img/la8.png'
import ref from '../../../../assets/img/ref.png'
const path = require('path')

const File = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const fileView = useSelector(state => state.files.view)
    //alert(JSON.stringify(file))
    function openDirHandler(file) {
        if(file.type === 'dir') {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }
    }

    function downloadClickHandler(e) {
        e.stopPropagation()
        downloadFile(file)
    }

    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteFile(file))
    }

    if (fileView === 'list') {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="live__block today__block">
                    <div className="live__cover">
                        {/*<p className="today__soon">Coming soon</p>*/}
                        <div className="live__like"><img src={ht} alt="HT" className="live__ht"/><p>100</p></div>
                        <img src={`${path}/files/${file.user}/${file.name}`} alt="Live" className="live__img"/>
                    </div>
                    <div className="live__head">
                        <h6 className="live__desig">{file.title}</h6>
                        <p className="live__bsc">Bsc</p>
                    </div>
                    <div className="live__persons today__persons">
                        <div className="live__person">
                            <img src={la7} alt="Fc" className="live__ic"/>
                                <div className="live__data">
                                    <p className="live__vac">Creator</p>
                                    <p className="live__name">Pokras Lampas</p>
                                </div>
                        </div>
                        <div className="live__person">
                            <img src={la8} alt="Fc" className="live__ic"/>
                                <div className="live__data">
                                    <p className="live__vac">Owned </p>
                                    <p className="live__name">Oleksandr Sinitsyn</p>
                                </div>
                        </div>
                    </div>
                    <div className="live__wrap">
                        <div className="today__wrap">
                            <p className="live__cur">Current Bid</p>
                            <p className="live__many today__many">{file.price} eTH <img src={ref} alt="Refresh"
                                                                                className="today__ic"/></p>
                        </div>
                        <div className="live__bid today__bid today__bid_dis">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M12.8759 4.39163H13.0555C15.4169 4.39163 17.3334 6.26663 17.3334 8.56663V13.1666C17.3334 15.4666 15.4169 17.3333 13.0555 17.3333H4.94464C2.58324 17.3333 0.666748 15.4666 0.666748 13.1666V8.56663C0.666748 6.26663 2.58324 4.39163 4.94464 4.39163H5.12431C5.14142 3.39163 5.54355 2.45829 6.27079 1.75829C7.00659 1.04996 7.94772 0.691626 9.00864 0.666626C11.1305 0.666626 12.8502 2.33329 12.8759 4.39163ZM7.16916 2.64996C6.69003 3.11663 6.4248 3.73329 6.40769 4.39163H11.5925C11.5668 3.02496 10.4204 1.91663 9.00865 1.91663C8.34985 1.91663 7.66539 2.17496 7.16916 2.64996ZM12.2513 7.59996C12.6106 7.59996 12.8929 7.31662 12.8929 6.97496V6.00829C12.8929 5.66663 12.6106 5.38329 12.2513 5.38329C11.9005 5.38329 11.6096 5.66663 11.6096 6.00829V6.97496C11.6096 7.31662 11.9005 7.59996 12.2513 7.59996ZM6.31354 6.97496C6.31354 7.31663 6.0312 7.59996 5.67186 7.59996C5.32107 7.59996 5.03018 7.31663 5.03018 6.97496V6.00829C5.03018 5.66663 5.32107 5.38329 5.67186 5.38329C6.0312 5.38329 6.31354 5.66663 6.31354 6.00829V6.97496Z"
                                      fill="white"></path>
                            </svg>
                            <p>Place Bid</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (fileView === 'plate') {
        return (
            <div className='file-plate' onClick={() => openDirHandler(file)}>
                <img src={`http://localhost:5000/files/${file.user}/${file.name}`} alt="" className="file-plate__img"/>
                <div className="file-plate__name">{file.name}</div>
                <div className="file-plate__btns">
                    {file.type !== 'dir' &&
                    <button onClick={(e) => downloadClickHandler(e)} className="file-plate__btn file-plate__download">download</button>}
                    <button onClick={(e) => deleteClickHandler(e)} className="file-plate__btn file-plate__delete">delete</button>
                </div>
            </div>
        );
    }

};

export default File;
