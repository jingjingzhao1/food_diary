import {Link} from "react-router-dom";
import {BsCartCheck}from 'react-icons/bs';
import SideBar from '../sidebar/Sidebar';

const Navbar = () => {
  const sideBarOpen = SideBar();

  return (
    <nav className={`navbar bg-beige flex align-center`}>
      <div className='container w-100'>
        <div className='navbar-content'>
          <div className='brand-and-toggler flex align-center justify-between'>
            <Link to = "/" className='navbar-brand fw-3 fs-22 flex align-center'>
              <span className='navbar-brand-text fw-7'>Diary Food</span>
            </Link>
			<div className='navbar-btns flex align-center'>
              <button type = "button" className='navbar-show-btn' onClick={()=> sideBarOpen()}>
                <BsCartCheck size = {27} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar