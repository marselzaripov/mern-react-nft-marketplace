import React, { useRef, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createDir, getFiles, uploadFile} from "../../actions/file";
import Input from "../../utils/input/Input"
import ht from '../../assets/img/ht.png'
import tp1 from '../../assets/img/tp1.png'
import la7 from '../../assets/img/la7.png'
import la8 from '../../assets/img/la8.png'
import ref from '../../assets/img/ref.png'
//import Textarea from "../../utils/textarea/Textarea"

function Disk() {
    const [file, setFile] = useState(''); // storing the uploaded file
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element
    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accesing file
        //console.log(file);
        setFile(file); // storing file
    }
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const uploadFilex = () => {
        const formData = new FormData();
        formData.append('file', file); // appending file
        formData.append('price', price);
        formData.append('title', title);
        formData.append('description', description);
        dispatch(uploadFile(formData, currentDir));
    }
    return (
        <div>

            <div className="create">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <h5 className="create__title">Preview item</h5>
                            <div className="live__block today__block">
                                <div className="live__cover">
                                    <div className="live__like"><img src={ht} alt="HT" className="live__ht"/>
                                        <p>100</p></div>
                                    <img src={tp1} alt="Live" className="live__img"/>
                                </div>
                                <div className="live__head">
                                    <h6 className="live__desig">"Hamlet Contemplates ...</h6>
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
                                        <p className="live__many today__many">4.89 eTH <img src={ref}
                                                                                            alt="Refresh"
                                                                                            className="today__ic"/></p>
                                    </div>
                                    <div className="live__bid today__bid">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M12.8759 4.39163H13.0555C15.4169 4.39163 17.3334 6.26663 17.3334 8.56663V13.1666C17.3334 15.4666 15.4169 17.3333 13.0555 17.3333H4.94464C2.58324 17.3333 0.666748 15.4666 0.666748 13.1666V8.56663C0.666748 6.26663 2.58324 4.39163 4.94464 4.39163H5.12431C5.14142 3.39163 5.54355 2.45829 6.27079 1.75829C7.00659 1.04996 7.94772 0.691626 9.00864 0.666626C11.1305 0.666626 12.8502 2.33329 12.8759 4.39163ZM7.16916 2.64996C6.69003 3.11663 6.4248 3.73329 6.40769 4.39163H11.5925C11.5668 3.02496 10.4204 1.91663 9.00865 1.91663C8.34985 1.91663 7.66539 2.17496 7.16916 2.64996ZM12.2513 7.59996C12.6106 7.59996 12.8929 7.31662 12.8929 6.97496V6.00829C12.8929 5.66663 12.6106 5.38329 12.2513 5.38329C11.9005 5.38329 11.6096 5.66663 11.6096 6.00829V6.97496C11.6096 7.31662 11.9005 7.59996 12.2513 7.59996ZM6.31354 6.97496C6.31354 7.31663 6.0312 7.59996 5.67186 7.59996C5.32107 7.59996 5.03018 7.31663 5.03018 6.97496V6.00829C5.03018 5.66663 5.32107 5.38329 5.67186 5.38329C6.0312 5.38329 6.31354 5.66663 6.31354 6.00829V6.97496Z"
                                                  fill="white"/>
                                        </svg>
                                        <p>Place Bid</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <form className="create__form">
                                <div className="create__block__top">
                                    <h5 className="create__title">Upload file</h5>
                                    <div className="create__file">
                                        <p className="create__type-img">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                                        <label className="create__upload" htmlFor="file">Upload file</label>
                                        <input type="file" id="file" ref={el} onChange={handleChange} name="file" accept=".png, .jpg, .gif, .webp, .mp4"
                                               className="create__file-input"/>


                                    </div>
                                </div>
                                <div className="create__block__top">
                                    <h5 className="create__title">Select method</h5>
                                    <div className="create__checks">
                                        <input type="radio" id="fix" name="check" className="create__checkbox"
                                               value="Fixed price"/>
                                            <label className="create__check" htmlFor="fix">
                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg" className="create__ic">
                                                    <path
                                                        d="M8.74736 16.3068C8.30569 16.3084 7.88069 16.1318 7.56903 15.8184L1.0382 9.28926C0.867923 9.11955 0.736523 8.9149 0.653074 8.68944C0.569625 8.46398 0.536116 8.2231 0.554862 7.98342L0.971528 2.51176C1.00031 2.11341 1.17197 1.73885 1.45491 1.45697C1.73786 1.1751 2.11307 1.00487 2.51153 0.977591L7.98319 0.560924C8.02653 0.551758 8.06903 0.551758 8.11236 0.551758C8.55403 0.551758 8.97653 0.726758 9.28736 1.04009L15.819 7.56842C15.9739 7.7232 16.0967 7.90696 16.1805 8.10921C16.2643 8.31147 16.3074 8.52825 16.3074 8.74717C16.3074 8.9661 16.2643 9.18288 16.1805 9.38514C16.0967 9.58739 15.9739 9.77115 15.819 9.92592L9.92569 15.8184C9.77132 15.9737 9.58769 16.0968 9.38544 16.1806C9.18318 16.2644 8.9663 16.3073 8.74736 16.3068ZM5.21153 3.54509C4.93745 3.54517 4.66763 3.61284 4.42595 3.7421C4.18427 3.87136 3.9782 4.05823 3.82599 4.28616C3.67378 4.51408 3.58013 4.77603 3.55333 5.04879C3.52653 5.32155 3.56741 5.59671 3.67235 5.8499C3.77729 6.10309 3.94305 6.32649 4.15494 6.50032C4.36684 6.67415 4.61834 6.79304 4.88716 6.84646C5.15598 6.89988 5.43382 6.88618 5.69608 6.80658C5.95834 6.72697 6.19692 6.58392 6.39069 6.39009L6.39653 6.38509L6.40236 6.37926L6.39569 6.38509C6.62735 6.1514 6.78464 5.85436 6.84775 5.53141C6.91086 5.20846 6.87697 4.87406 6.75033 4.57035C6.62369 4.26664 6.40999 4.00721 6.13615 3.82475C5.86231 3.6423 5.54058 3.54499 5.21153 3.54509V3.54509Z"
                                                        fill="#5142FC"/>
                                                </svg>
                                                <p>Fixed price</p>
                                            </label>
                                            <input type="radio" id="time" name="check" className="create__checkbox"
                                                   value="Time auctions"/>
                                                <label className="create__check" htmlFor="time">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg" className="create__ic">
                                                        <path
                                                            d="M8.99151 0.666504C4.3915 0.666504 0.666504 4.39984 0.666504 8.99984C0.666504 13.5998 4.3915 17.3332 8.99151 17.3332C13.5998 17.3332 17.3332 13.5998 17.3332 8.99984C17.3332 4.39984 13.5998 0.666504 8.99151 0.666504ZM12.3332 12.3332C12.2561 12.4104 12.1645 12.4717 12.0637 12.5135C11.9629 12.5553 11.8548 12.5769 11.7457 12.5769C11.6365 12.5769 11.5285 12.5553 11.4277 12.5135C11.3268 12.4717 11.2353 12.4104 11.1582 12.3332L8.41651 9.5915C8.33777 9.51433 8.27512 9.42229 8.23221 9.32073C8.1893 9.21916 8.16696 9.11009 8.16651 8.99984V5.6665C8.16651 5.20817 8.54151 4.83317 8.99984 4.83317C9.45817 4.83317 9.83317 5.20817 9.83317 5.6665V8.65817L12.3332 11.1582C12.6582 11.4832 12.6582 12.0082 12.3332 12.3332Z"
                                                            fill="#8A8AA0"/>
                                                    </svg>
                                                    <p>Time auctions</p>
                                                </label>
                                                <input type="radio" id="open" name="check" className="create__checkbox"
                                                       value="Open for bids"/>
                                                    <label className="create__check" htmlFor="open">
                                                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg" className="create__ic">
                                                            <path
                                                                d="M12 3C12 3.79565 11.6839 4.55871 11.1213 5.12132C10.5587 5.68393 9.79565 6 9 6C8.20435 6 7.44129 5.68393 6.87868 5.12132C6.31607 4.55871 6 3.79565 6 3C6 2.20435 6.31607 1.44129 6.87868 0.87868C7.44129 0.316071 8.20435 0 9 0C9.79565 0 10.5587 0.316071 11.1213 0.87868C11.6839 1.44129 12 2.20435 12 3Z"
                                                                fill="#8A8AA0"/>
                                                            <path
                                                                d="M17 5C17 5.53043 16.7893 6.03914 16.4142 6.41421C16.0391 6.78929 15.5304 7 15 7C14.4696 7 13.9609 6.78929 13.5858 6.41421C13.2107 6.03914 13 5.53043 13 5C13 4.46957 13.2107 3.96086 13.5858 3.58579C13.9609 3.21071 14.4696 3 15 3C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5Z"
                                                                fill="#8A8AA0"/>
                                                            <path
                                                                d="M13 12C13 10.9391 12.5786 9.92172 11.8284 9.17157C11.0783 8.42143 10.0609 8 9 8C7.93913 8 6.92172 8.42143 6.17157 9.17157C5.42143 9.92172 5 10.9391 5 12V15H13V12Z"
                                                                fill="#8A8AA0"/>
                                                            <path
                                                                d="M5 5C5 5.53043 4.78929 6.03914 4.41421 6.41421C4.03914 6.78929 3.53043 7 3 7C2.46957 7 1.96086 6.78929 1.58579 6.41421C1.21071 6.03914 1 5.53043 1 5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3C3.53043 3 4.03914 3.21071 4.41421 3.58579C4.78929 3.96086 5 4.46957 5 5Z"
                                                                fill="#8A8AA0"/>
                                                            <path
                                                                d="M15 14.9998V11.9998C15.0014 10.9831 14.7433 9.98285 14.25 9.09382C14.6933 8.98036 15.1568 8.96966 15.6049 9.06254C16.053 9.15541 16.474 9.34941 16.8357 9.62973C17.1974 9.91005 17.4903 10.2693 17.6921 10.68C17.8939 11.0908 17.9992 11.5422 18 11.9998V14.9998H15Z"
                                                                fill="#8A8AA0"/>
                                                            <path
                                                                d="M3.75 9.0938C3.25675 9.98285 2.9986 10.9831 3 11.9998V14.9998H2.6572e-07V11.9998C-0.000192468 11.5418 0.104463 11.0899 0.305947 10.6787C0.507431 10.2674 0.800394 9.90773 1.16238 9.62721C1.52437 9.3467 1.94578 9.15278 2.39431 9.06031C2.84284 8.96785 3.30658 8.97931 3.75 9.0938Z"
                                                                fill="#8A8AA0"/>
                                                        </svg>
                                                        <p>Open for bids</p>
                                                    </label>
                                    </div>
                                </div>
                                <div className="create__block">
                                    <h5 className="create__title">Price</h5>
                                    <Input value={price} setValue={setPrice} type="text" name="price" className="create__input"
                                           placeholder="Enter price for one item (ETH)" required/>
                                </div>
                                <div className="create__block">
                                    <h5 className="create__title">Title</h5>
                                    <Input value={title} setValue={setTitle} type="text" name="title" className="create__input" placeholder="Item Name"
                                           required/>
                                </div>
                                <div className="create__block">
                                    <h5 className="create__title">Description</h5>
                                    <textarea name="description" id="" cols="30" rows="3" className="create__textarea"
                                              placeholder="e.g. “This is very limited item”"></textarea>
                                </div>
                                {/*<div className="create__wrap">*/}
                                {/*    <div className="create__block">*/}
                                {/*        <h5 className="create__title">Royalties</h5>*/}
                                {/*        <input type="text" name="royalties" className="create__input"*/}
                                {/*               placeholder="Enter price for one item (ETH)" required/>*/}
                                {/*    </div>*/}
                                {/*    <div className="create__block">*/}
                                {/*        <h5 className="create__title">Size</h5>*/}
                                {/*        <input type="text" name="title" className="create__input"*/}
                                {/*               placeholder="Item Name" required/>*/}
                                {/*    </div>*/}
                                {/*    <div className="create__block">*/}
                                {/*        <h5 className="create__title">Collection</h5>*/}
                                {/*        <div className="__select" data-state="">*/}
                                {/*            <div className="__select__title"></div>*/}
                                {/*            <div className="__select__content">*/}
                                {/*                <input id="singleSelect0" className="__select__input" type="radio"*/}
                                {/*                       name="singleSelect" checked/>*/}
                                {/*                <label htmlFor="singleSelect0" tabIndex="0" className="__select__label"*/}
                                {/*                       data-value="Abstraction"></label>*/}
                                {/*                <input id="singleSelect1" className="__select__input" type="radio"*/}
                                {/*                       name="singleSelect"/>*/}
                                {/*                <label htmlFor="singleSelect1" tabIndex="0" className="__select__label"*/}
                                {/*                       data-value="Art"></label>*/}
                                {/*                <input id="singleSelect2" className="__select__input" type="radio"*/}
                                {/*                       name="singleSelect"/>*/}
                                {/*                <label htmlFor="singleSelect2" tabIndex="0" className="__select__label"*/}
                                {/*                       data-value="Music"></label>*/}
                                {/*                <input id="singleSelect3" className="__select__input" type="radio"*/}
                                {/*                       name="singleSelect"/>*/}
                                {/*                <label htmlFor="singleSelect3" tabIndex="0" className="__select__label"*/}
                                {/*                       data-value="Domain Names"></label>*/}
                                {/*                <input id="singleSelect4" className="__select__input" type="radio"*/}
                                {/*                       name="singleSelect"/>*/}
                                {/*                <label htmlFor="singleSelect4" tabIndex="0" className="__select__label"*/}
                                {/*                       data-value="Virtual World"></label>*/}
                                {/*                <input id="singleSelect2" className="__select__input" type="radio"*/}
                                {/*                       name="singleSelect"/>*/}
                                {/*                <label htmlFor="singleSelect2" tabIndex="0" className="__select__label"*/}
                                {/*                       data-value="Trading Cards"></label>*/}
                                {/*                <input id="singleSelect3" className="__select__input" type="radio"*/}
                                {/*                       name="singleSelect"/>*/}
                                {/*                <label htmlFor="singleSelect3" tabIndex="0" className="__select__label"*/}
                                {/*                       data-value="Sports"></label>*/}
                                {/*                <input id="singleSelect4" className="__select__input" type="radio"*/}
                                {/*                       name="singleSelect"/>*/}
                                {/*                <label htmlFor="singleSelect4" tabIndex="0" className="__select__label"*/}
                                {/*                       data-value="Utility"></label>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <button className="today__btn create__save"
                                        onClick={uploadFilex}

                                >Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="file-upload">*/}
            {/*    <input type="file" ref={el} onChange={handleChange} />*/}
            {/*    <div className="progessBar" style={{ width: progress }}>*/}
            {/*        {progress}*/}
            {/*    </div>*/}
            {/*    <button onClick={uploadFilex} className="upbutton">*/}
            {/*        Upload*/}
            {/*    </button>*/}
            {/*    <hr />*/}

            {/*    {data.path && <video src={data.path} autoPlay controls />}*/}
            {/*</div>*/}
        </div>
    );
}
export default Disk;