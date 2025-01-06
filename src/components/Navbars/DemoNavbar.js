import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/logo_white.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">
                        Nuestra Empresa
                      </span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        {/* Quienes Somos */}
                        <Media
                          className="d-flex align-items-center"
                          href="#quienes-somos" // Update this link to the actual section URL or path if needed
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-single-02" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Quienes Somos
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Conoce nuestra historia, valores y el equipo que
                              forma Campos Peñate.
                            </p>
                          </Media>
                        </Media>

                        {/* Tecnología */}
                        <Media
                          className="d-flex align-items-center"
                          href="#tecnologia" // Update this link to the actual section URL or path if needed
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-laptop" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Tecnología
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Innovación en tecnología para ofrecer soluciones
                              publicitarias de alta calidad.
                            </p>
                          </Media>
                        </Media>

                        {/* Servicios */}
                        <Media
                          className="d-flex align-items-center"
                          href="#servicios" // Update this link to the actual section URL or path if needed
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-briefcase-24" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-warning mb-md-1">
                              Servicios
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Descubre la amplia gama de servicios que ofrecemos
                              en publicidad y POP.
                            </p>
                          </Media>
                        </Media>

                        {/* Trabajo */}
                        <Media
                          className="d-flex align-items-center"
                          href="#trabajo" // Update this link to the actual section URL or path if needed
                        >
                          <div className="icon icon-shape bg-gradient-info rounded-circle text-white">
                            <i className="ni ni-building" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-info mb-md-1">
                              Trabajo
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Conoce cómo trabajamos y algunos de nuestros
                              proyectos destacados.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>

                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/campospenate"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="tel:+50322135500" // "+503" is the country code for El Salvador; adjust if needed
                      id="tooltipPhoneCall"
                    >
                      <i className="fa fa-phone" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Llamar
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltipPhoneCall">
                      Llama al 2213 5500
                    </UncontrolledTooltip>
                  </NavItem>

                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href=""
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-phone" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Contactanos
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
