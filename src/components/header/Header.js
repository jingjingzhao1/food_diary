import React from "react";
import {Link} from "react-router-dom";
import {BsCartCheck}from 'react-icons/bs';
import SearchBar from "../searchBar/SearchBar";
const Header = () => {
	return (
		<header className="header">
			<nav className={`navbar bg-beige flex align-center`}>
				<div className="container w-100">
					<div className="navbar-content">
						<div className="brand-and-toggler flex align-center justify-between">
							<Link
								to="/"
								className="navbar-brand fw-3 fs-22 flex align-center"
							>
								<span className="navbar-brand-text fw-7">Diary Food</span>
							</Link>
							<div className="navbar-btns flex align-center">
								<Link to = "/cart">
								<button
									type="button"
									className="navbar-show-btn"
									
								>
									<BsCartCheck size={27} />
								</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<p className="header-content flex justify-center fw-7">
				Happy Life, Happy Food
			</p>
			<SearchBar />
		</header>
	);
};

export default Header;
