import React from 'react';
import {useDispatch} from "react-redux";
import {deleteAvatar, uploadAvatar} from "../../actions/user";

const Profile = () => {
    const dispatch = useDispatch()

    function changeHandler(e) {
        const file = e.target.files[0]
        dispatch(uploadAvatar(file))
    }

    return (
        // <div className="profile">
        //     <div className="container">
        //         <form action="" className="profile__form">
        //             <div className="row">
        //                 <div className="col-xl-5 offset-xl-1 col-md-6">
        //                     <div className="profile__left">
        //                         <div className="profile__block profile__block_photo">
        //                             <h6 className="profile__title">Profile photo</h6>
        //                             <div className="profile__photo">
        //                                 <img src="img/ath1.png" alt="Avatar" className="profile__img"/>
        //                                     <div className="profile__option">
        //                                         <p className="profile__type">Format PNG, JPG</p>
        //                                         <p className="profile__width">Max 30mb.</p>
        //                                         <button className="profile__btn">Upload photo</button>
        //                                     </div>
        //                             </div>
        //                         </div>
        //                         <div className="profile__block">
        //                             <h6 className="profile__title">Display name</h6>
        //                             <input type="text" className="profile__input" placeholder="Harper Wilcher"/>
        //                         </div>
        //                         <div className="profile__block">
        //                             <h6 className="profile__title">Receive email notifications</h6>
        //                             <input type="email" className="profile__input" placeholder="harper@gmail.com"/>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-5 col-md-6">
        //                     <div className="profile__right">
        //                         <div className="profile__block">
        //                             <h6 className="profile__title">Profile cover</h6>
        //                             <div className="profile__bg">
        //                                 <p className="profile__type">Recommended cover sixe 1140x260 px Format PNG,
        //                                     JPG</p>
        //                                 <p className="profile__width">Max 30mb.</p>
        //                                 <button className="profile__btn">Choose file</button>
        //                             </div>
        //                         </div>
        //                         <div className="profile__block">
        //                             <h6 className="profile__title">Custom URL</h6>
        //                             <input type="text" className="profile__input" placeholder="@harper_wilcher"/>
        //                         </div>
        //                         <div className="profile__block">
        //                             <h6 className="profile__title">Website</h6>
        //                             <input type="url" className="profile__input" placeholder="harper.com"/>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-10 offset-xl-1 col-12">
        //                     <div className="profile__left profile__left_area">
        //                         <div className="profile__block">
        //                             <h6 className="profile__title">Bio</h6>
        //                             <textarea name="textarea" cols="30" rows="5" className="profile__textarea"
        //                                       placeholder="Text"></textarea>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-5 offset-xl-1 col-md-6">
        //                     <div className="profile__left">
        //                         <div className="profile__block">
        //                             <h6 className="profile__title">Twitter</h6>
        //                             <input type="text" className="profile__input" placeholder="@harper_wilcher"/>
        //                         </div>
        //                         <div className="profile__block">
        //                             <h6 className="profile__title">Facebook</h6>
        //                             <input type="text" className="profile__input" placeholder="@harper_wilcher"/>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-5 col-md-6">
        //                     <div className="profile__right">
        //                         <div className="profile__block">
        //                             <h6 className="profile__title">Instagram</h6>
        //                             <input type="text" className="profile__input" placeholder="@harper_wilcher"/>
        //                         </div>
        //                         <div className="profile__block">
        //                             <h6 className="profile__title">YouTube</h6>
        //                             <input type="url" className="profile__input" placeholder="Your Address"/>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-xl-2 offset-xl-1 col-12">
        //                     <div className="profile__left profile__left_btn">
        //                         <button className="profile__btn">Save changes</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </div>
        <div>
            <button onClick={() => dispatch(deleteAvatar())}>Удалить аватар</button>
            <input accept="image/*" onChange={e => changeHandler(e)} type="file" placeholder="Загрузить аватар"/>
        </div>
    );
};

export default Profile;
