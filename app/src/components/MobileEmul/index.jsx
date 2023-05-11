import './style.scss';

function MobileEmul({ children }) {
    return(
        <div className='mobileEmul_window'>
            <div className="mobileEmul_window_frame">
                { children }
            </div>
        </div>
    )
}

export default MobileEmul;