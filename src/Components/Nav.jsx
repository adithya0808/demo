import bar from '../assets/images/bar.png'
const Nav = () => {
  return (
    <nav className='navigation'>
        <label className="title">Helix</label>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <img src={bar} alt="none" />
    </nav>
  )
}

export default Nav