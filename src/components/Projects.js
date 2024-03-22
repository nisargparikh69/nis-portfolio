import { ProjectCard } from "./ProjectCard";
export const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description: "This is project 1",
      imgUrl: projImg1,
    },
    {
      name: "Project 2",
      description: "This is project 2",
      imgUrl: projImg2,
    },
    {
      name: "Project 3",
      description: "This is project 3",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem Ipsum Description dummy text for printing and demoing
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...projects} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Lorem Ipsum 2</Tab.Pane>
                  <Tab.Pane eventKey="third">Lorem Ipsum 3</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
