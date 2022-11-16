import { Link } from "react-router-dom";

export function NavigationLinks(props) {
  return (
    <>
      <Link className="link" to={props.path} />
    </>
  );
}
