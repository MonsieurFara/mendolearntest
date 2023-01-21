import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../actions/layoutActions';
import { State } from '../../interfaces';

const SideNavLeft = () => {
    const dispatch = useDispatch();

    const {modalType} = useSelector((state:State) => state.layout);
    return (
        <ul className="sidenav sidenav-left shadow">
            <li>
            <li>
                <button className="btn btn-primary" onClick={() => {
                    if(modalType !== ""){
                        return;
                    }
                    
                    dispatch(openModal("post"))
                }}>Create Post +</button>
            </li>
            </li>
            <li>
                <button className="btn btn-add-friend btn-outline-success">Add Friend +</button>
            </li>
            <li className="clickable">Mon compte <i className="fas fa-user"></i></li>
            <li className="clickable">Communaute <i className="fas fa-users"></i></li>
            <li className="clickable">Articles <i className="fas fa-newspaper"></i></li>
            <li className="clickable">Problemes <i className="fas fa-brain"></i></li>
            <li className="clickable">Parametres <i className="fas fa-gear"></i></li>
        </ul>
        
    )
}

export default SideNavLeft
