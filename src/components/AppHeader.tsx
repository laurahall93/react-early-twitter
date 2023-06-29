import NavItem from "./NavItem";

function AppHeader(): JSX.Element {
  return (
    <header>
      <h2>twitter</h2>
      <nav>
        <NavItem label={"updates"} />
        <NavItem label={"archive"} />
        <NavItem label={"preference"} />
        <NavItem label={"help"} />
        <NavItem label={"sign-out"} />    
      </nav>
    </header>
  );
}

export default AppHeader;
