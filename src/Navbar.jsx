import { Link } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
	useEffect(() => {
		document.title = 'Home';
	}, []);

  return (
		<nav>
			<Link to='/' className='title'>Apps</Link>
			<ul>
				<li><Link to='/Advice'>Advice</Link></li>
				<li><Link to='Dictionary'>Dictionary</Link></li>
			</ul>
		</nav>
  )
}

export default Navbar;
