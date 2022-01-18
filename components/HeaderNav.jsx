import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Config } from "../utils/Config";
import { useRouter } from "next/router";
import Link from "next/link";

export default function HeaderNav() {
  const router = useRouter();

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {Config.menuLinks.map((link) => {
                const isActive = router.asPath
                  .toLowerCase()
                  .includes(link.path.toLowerCase());

                if (link.dropdownId && link.levelTwoLinks) {
                  let subLinks = link.levelTwoLinks.map((lvlTwo) => {
                    const isLvlTwoActive =
                      router.asPath.toLowerCase() === lvlTwo.path.toLowerCase();
                    return (
                      <Link
                        key={lvlTwo.displayName}
                        href={lvlTwo.path}
                        passHref
                      >
                        <NavDropdown.Item active={isLvlTwoActive}>
                          {lvlTwo.displayName}
                        </NavDropdown.Item>
                      </Link>
                    );
                  });

                  return (
                    <NavDropdown
                      title={link.displayName}
                      key={link.dropdownId}
                      active={isActive}
                    >
                      {subLinks}
                    </NavDropdown>
                  );
                } else {
                  return (
                    <Link key={link.displayName} href={link.path} passHref>
                      <Nav.Link active={isActive}>{link.displayName}</Nav.Link>
                    </Link>
                  );
                }
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
