import { Link } from "react-router-dom";
import TodoContProv from "context";
import { useContext, useEffect, useState } from "react";
import "./style.css";

function BoardOptions() {
  const { tasks } = useContext(TodoContProv);
  const [dinamicLinks, setDinamicLinks] = useState([]);

  useEffect(() => {
    let links = tasks.map(({ type }) => type);
    setDinamicLinks(
      links.filter((item, index) => links.indexOf(item) === index)
    );
  }, [tasks]);

  return (
    <>
      <h2>Menu</h2>
      <nav className="menu">
        <ul>
          <li className="link--SeeAll">
            <Link to={"/todos"}>See all</Link>
          </li>
          {dinamicLinks.map((link) => (
            <li key={`link_${link}`} className={`link--${link}`}>
              <Link to={`/todos/${link.toLowerCase()}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export { BoardOptions };
