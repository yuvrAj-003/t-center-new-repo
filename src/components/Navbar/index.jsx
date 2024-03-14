import NavItem from "../NavItem"

function Navbar() {
  return (
    <div className="flex items-center p-4 shadow-md justify-between px-9">
        <div>
          <NavItem text="T-CENTER" style="text-lg font-bold" link="/" />
        </div>
        <div className="flex">
          <NavItem text="Home" link="/"/>
          <NavItem text="Customizer" style="mx-3"/>
          <NavItem text="Account" />
        </div>
    </div>
  )
}

export default Navbar
