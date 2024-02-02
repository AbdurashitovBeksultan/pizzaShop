import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import scss from './Header.module.scss'

const links = [
	{
		name: 'Пицца',
		href: '/',
	},
	{
		name: 'Закуски',
		href: '/закуски',
	},
	{
		name: 'Салаты',
		href: '/салаты',
	},
	{
		name: 'Супы',
		href: '/супы',
	},
	{
		name: 'Горячие блюда',
		href: '/Горячий',
	},
]

const Header = () => {
	const location = useLocation()
	console.log(location.pathname)

	return (
		<>
			<header className={scss.Header}>
				<div className='container'>
					<div className={scss.content}>
						<div className={scss.logo}>
							<h1 className={scss.menyi}>Welcome to the menu of Empire Pizza</h1>
            
						</div>

						<nav>
							<ul>
								{links.map((item, index) => (
									<li key={index}>
										<NavLink
                    active
											to={item.href}
											className={
												location.pathname === item.href
													? `${scss.link} ${scss.active}`
													: `${scss.link}`
											}
										>
											{item.name}
										</NavLink>
									</li>
								))}
								{/* <li>
									<NavLink
										to="/"
										className={
											location.pathname === "/"
												? `${scss.link} ${scss.active}`
												: `${scss.link}`
										}>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/about"
										className={
											location.pathname === "/about"
												? `${scss.link} ${scss.active}`
												: `${scss.link}`
										}>
										About
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/contact"
										className={
											location.pathname === "/contact"
												? `${scss.link} ${scss.active}`
												: `${scss.link}`
										}>
										Contact
									</NavLink>
								</li> */}
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
