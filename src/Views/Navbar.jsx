
const Navbar = (params) =>{
    console.log(params.links)
    return(
        <div>
            <ul>
                {(params.links).foreach((link) => <li><a href="#">{link}</a></li>)}
            </ul>
        </div>
    )
}

export default Navbar;