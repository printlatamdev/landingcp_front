import React, { Component } from "react";
import Carousel from "./Carousel";

import {
  Badge,
  Button,
  Card,
  CardImg,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.js";

const images = [
  "/assets/img/portfolio/elpolvorin.jpg",
  "/assets/img/portfolio/geolac.jpg",
  "/assets/img/portfolio/kfc.jpg",
  "/assets/img/portfolio/Mibanco.jpg",
  "/assets/img/portfolio/optica_lacuracao.jpg",
  "/assets/img/portfolio/pizzahut.jpg",
  "/assets/img/portfolio/pronto.jpg",
  "/assets/img/portfolio/texaco.jpg",
  "/assets/img/portfolio/tropikong.jpg",
  "/assets/img/portfolio/tuvet.jpg",
  "/assets/img/portfolio/uno.jpg",
  "/assets/img/portfolio/wendys.jpg",
  "/assets/img/portfolio/b.jpg",
  "/assets/img/portfolio/bancozul.jpg",
  "/assets/img/portfolio/chinawok.jpg",
  "/assets/img/portfolio/cuscatlan.jpg",
  "/assets/img/portfolio/dennys.jpg",
];


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFocused: false,
      emailFocused: false,
      name: "",
      email: "",
      message: "",
      isBot: false,
      status: "", // Message status to display success or failure
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (
      !this.state.name ||
      !this.state.email ||
      !this.state.message ||
      !this.validateEmail(this.state.email)
    ) {
      alert("Please fill all fields with valid information.");
      return;
    }

    // Honeypot bot check
    if (this.state.isBot) {
      alert("Bot detected. Form submission blocked.");
      return;
    }

    const formData = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    try {
      // Show loading state
      this.setState({ status: "Sending message..." });

      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        this.setState({
          status: "Message sent successfully!",
          name: "",
          email: "",
          message: "",
        });
      } else {
        this.setState({
          status: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      this.setState({
        status:
          "An error occurred while sending the message. Please try again.",
      });
    }
  };

  validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
  <div className="col px-0">
    <Row>
      <Col lg="10">
        <h1
          className="display-3 text-white"
          style={{
            fontSize: "3rem",
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          Innovación en Soluciones{" "}
          <span style={{ color: "#f8f9fa" }}>Publicitarias y POP</span>
        </h1>
        <p
          className="lead text-white"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.8",
            marginBottom: "2rem",
          }}
        >
          Campos Peñate es una empresa líder en soluciones de publicidad y exhibición en puntos de venta (POP) con un enfoque en creatividad, calidad y precisión. Con años de experiencia en el sector, ofrecen una amplia gama de servicios que van desde la creación de displays personalizados y material promocional hasta la planificación y ejecución de campañas de marketing visual. Su compromiso con la innovación y la excelencia los ha posicionado como un socio de confianza para empresas que buscan destacar sus productos de manera impactante y eficaz en el mercado.
        </p>
        <div className="btn-wrapper" style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <Button
            className="btn-icon mb-3 mb-sm-0"
            color="info"
            href=""
            style={{
              padding: "12px 20px",
              fontSize: "1.1rem",
              width: "auto",
            }}
          >
            <span className="btn-inner--icon mr-1">
              <i className="fa fa-phone" />
            </span>
            <span className="btn-inner--text">Contactanos</span>
          </Button>
          <Button
            className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
            color="default"
            href=""
            style={{
              padding: "12px 20px",
              fontSize: "1.1rem",
              width: "auto",
              backgroundColor: "#fff",
              borderColor: "#fff",
              color: "#000",
            }}
          >
            <span className="btn-inner--icon mr-1">
              <i className="fa fa-info"></i>{" "}
            </span>
            <span className="btn-inner--text">
              Sobre Nosotros{" "}
            </span>
          </Button>
        </div>
      </Col>
    </Row>
  </div>
</Container>

              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ minHeight: "400px" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-ruler-pencil" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Diseño y Creación de Material POP
                          </h6>
                          <p className="description mt-3">
                            Diseñamos y producimos displays publicitarios,
                            stands, carteles, y otros materiales de exhibición
                            que ayudan a captar la atención en el punto de
                            venta, maximizando el impacto de marca y atrayendo a
                            los consumidores.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              diseño
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creatividad
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              impacto
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ minHeight: "400px" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-delivery-fast" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Producción y Logística
                          </h6>
                          <p className="description mt-3">
                            Gestionamos todo el proceso de producción y
                            logística de materiales publicitarios, garantizando
                            calidad y puntualidad en cada proyecto, desde su
                            concepción hasta su implementación en los puntos de
                            venta.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              producción
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              logística
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              calidad
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ minHeight: "400px" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-world-2" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Estrategia de Marketing Visual
                          </h6>
                          <p className="description mt-3">
                            Ofrecemos asesoramiento y desarrollo de estrategias
                            de marketing visual, diseñadas para maximizar la
                            visibilidad de sus productos y crear experiencias de
                            marca memorables en el punto de venta.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              estrategia
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              visibilidad
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              experiencia
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="Proyectos destacados"
                    className="img-fluid floating"
                    src={require("assets/img/collage/photo-collage.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-briefcase-24" />
                    </div>
                    <h3>Proyectos Destacados</h3>
                    <p>
                      En nuestra empresa, trabajamos con una variedad de
                      sectores para ayudar a nuestros clientes a destacar en sus
                      respectivas industrias. A continuación, te mostramos
                      algunos de nuestros proyectos más representativos, que
                      incluyen diseño y construcción de elementos publicitarios,
                      estructuras metálicas y más.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-shop" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Marca de Restaurante</h6>
                            <p className="text-muted">
                              Desarrollamos una identidad visual completa para
                              restaurantes, enfocándonos en crear una imagen de
                              marca coherente y atractiva que conecte con los
                              clientes. Esto incluye desde el diseño de
                              logotipos y menús hasta la ambientación del
                              espacio y los elementos gráficos que reflejan la
                              personalidad única de cada establecimiento.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-trophy" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Juegos Olímpicos</h6>
                            <p className="text-muted">
                              Diseño y producción de material publicitario para
                              los Juegos Olímpicos, con estructuras metálicas y
                              gráficos personalizados para diversas ubicaciones,
                              desde el transporte público hasta los estadios.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-building" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Gasolineras</h6>
                            <p className="text-muted">
                              Implementación de sistemas publicitarios en
                              gasolineras, incluyendo señalización, letreros
                              luminosos y la creación de puntos de información
                              para los clientes.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          
{/* import { Carousel } from "react-bootstrap"; */}


    <section className="section section-lg">
    <Carousel images={images} />
    </section>

          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="Instalación de iluminación LED"
                      src={require("assets/img/theme/torre_cuscatlan.jpeg")} // Cambia la imagen por una relacionada con iluminación LED
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Iluminación LED para Resaltar Estructuras
                      </h4>
                      <p className="lead text-italic text-white">
                        Resaltamos estructuras como edificios, vallas
                        publicitarias, muebles y mipis con la última tecnología
                        en iluminación LED, creando ambientes visualmente
                        impactantes y atractivos.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>¿Por qué elegir nuestra instalación LED?</h3>
                    <p className="lead">
                      Nuestra solución de iluminación LED es perfecta para
                      resaltar detalles arquitectónicos, anuncios publicitarios,
                      y muebles de forma eficiente y ecológica.
                    </p>
                    <p>
                      Ofrecemos productos de alta calidad y un servicio
                      profesional para la instalación de sistemas de iluminación
                      en una amplia variedad de estructuras.
                    </p>
                    <p>
                      Nuestros sistemas de LED son ideales para todo tipo de
                      proyectos, desde grandes edificios hasta elementos más
                      pequeños como mupis y pop, mejorando la visibilidad y el
                      atractivo de cualquier espacio.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      ¡Haz que tu estructura brille con iluminación LED de
                      calidad!
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <br />
                      <h1 className="lead text-white mt-3">
                        "Transformamos ideas en experiencias impactantes."
                        <br />
                        <strong>Campos Peñate</strong>
                      </h1>
                      <p className="text-white mt-4">
                        En Campos Peñate, somos expertos en dar vida a tus
                        proyectos, fusionando creatividad, innovación y
                        tecnología para ofrecer soluciones únicas que superan
                        las expectativas.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>

          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">
                    Más de 30 años transformando ideas en realidad
                  </h2>
                  <p className="lead text-white">
                    Con más de tres décadas de experiencia, en Campos Peñate nos
                    especializamos en ofrecer soluciones innovadoras y
                    personalizadas que resuelven las necesidades de nuestros
                    clientes, creando experiencias que dejan huella.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Innovación constante</h5>
                  <p className="text-white mt-3">
                    Siempre a la vanguardia, utilizando las mejores tecnologías
                    y métodos para brindar resultados óptimos y eficientes.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Soluciones personalizadas</h5>
                  <p className="text-white mt-3">
                    Cada cliente es único. Adaptamos nuestros servicios a sus
                    necesidades específicas, creando soluciones diseñadas para
                    maximizar el impacto.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Compromiso con la calidad</h5>
                  <p className="text-white mt-3">
                    Más de 30 años trabajando con un enfoque en la calidad, la
                    excelencia y el cumplimiento de los más altos estándares en
                    cada proyecto.
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Pongámonos en contacto</h4>
                      <p className="mt-0">
                        ¡Tus pensamientos son importantes para nosotros!
                        Contáctanos y te responderemos lo antes posible.
                      </p>

                      <FormGroup
                        className={`mt-5 ${
                          this.state.nameFocused ? "focused" : ""
                        }`}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            value={this.state.name}
                            onChange={(e) =>
                              this.setState({ name: e.target.value })
                            }
                            onFocus={() => this.setState({ nameFocused: true })}
                            onBlur={() => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>

                      <FormGroup
                        className={this.state.emailFocused ? "focused" : ""}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            value={this.state.email}
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                            onFocus={() =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={() =>
                              this.setState({ emailFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>

                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          value={this.state.message}
                          onChange={(e) =>
                            this.setState({ message: e.target.value })
                          }
                          cols="80"
                          name="message"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>

                      {/* Honeypot field to detect bots */}
                      <FormGroup style={{ display: "none" }}>
                        <Input
                          name="website"
                          type="text"
                          onChange={(e) =>
                            this.setState({ isBot: e.target.value !== "" })
                          }
                          placeholder="Leave this field empty"
                        />
                      </FormGroup>

                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                          onClick={this.handleSubmit}
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Landing;
