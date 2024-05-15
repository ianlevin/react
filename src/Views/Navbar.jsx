
const Navbar = (params) =>{
    var links = params.links
    console.log(links)
    return(
        <div className="navbar">
            <ul>
                {links.map((link) => <li><a href={link}>{link}</a></li>)}
            </ul>
        </div>
    )
}

export default Navbar;