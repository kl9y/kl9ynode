const Nav = () => {
    return <div>
         <nav>
    <div class="navbar">
      <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>  
        <div class="menu-items">
          <li><a href="https://kl9y.com/">Home</a></li>
          <li><a href="https://kl9y.com/LimitlessPotential">New Releases</a></li>
          <li><a href="https://kl9y.com/about">About Us</a></li>
          <li><a href="https://kl9y.com/contact">Contact</a></li>
        </div>
      </div>
    </div>
  </nav>

<div class="navBar" style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '40px' }}>
    <nav>
        <ul style={{ listStyleType: 'none', margin: '0', padding: '0', display: 'inline-block' }}>
        <li style={{ display: 'inline' }}>
                <a class="navElem" href="https://kl9y.com/">Shop All</a>
            </li>
            <li style={{ display: 'inline' }}>
                <a class="navElem">|</a>
            </li>
            <li class="dropdown1">
                <a class="navElem">New Releases</a>
                <div class="dropdown-content">
                    <a href="https://kl9y.com/LimitlessPotential">Limitless Potential</a>
                </div>
            </li>
            <li style={{ display: 'inline' }}>
                <a class="navElem">|</a>
            </li>
            <li style={{ display: 'inline' }}>
                <a class="navElem" href="https://kl9y.com/about">About Us</a>
            </li>
            <li style={{ display: 'inline' }}>
                <a class="navElem">|</a>
            </li>
            <li class="dropdown1">
                <a class="navElem" href="https://kl9y.com/contact">Contact</a>
            </li>
        </ul>
    </nav>
 </div>
    
         </div>
}

export default Nav
