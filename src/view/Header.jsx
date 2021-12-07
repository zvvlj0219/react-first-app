import logo from '../assets/logo.png'

const Header = () =>{

  return (
    <section className="header">
      <div>
        <img src={logo} alt=''/>
        <p>React memo app</p>
      </div>
      <p>email adress</p>
    </section>
  )
}

export default Header