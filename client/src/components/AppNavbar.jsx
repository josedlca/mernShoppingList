import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';


class AppNavbar extends Component{
    // constructor(props){
    //     super(props);
        // normalmente cuando usas un metodo externo a los de react
        // debes bicular ese metodo con la variable this mediante bind
        // this.toggle = this.toggle.bind(this);
    // }
    // si no quieres hacerlo , puedes usar arrow functions a la ves del metodo normal
    // de esta forma this ya esta viculado a este nuevo metodo
    state = {
        isOpen: false
    }
    toggle=()=>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/josedlca">
                                        Github
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default AppNavbar;