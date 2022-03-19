import { Link } from "react-router-dom";
import TodoContProv from "context";
import { useContext, useEffect, useState } from "react";

function BoardOptions() {
  const { tasks } = useContext(TodoContProv);
  console.log(tasks);
  const [dinamicLinks, setDinamicLinks] = useState([]);

  console.log("links");
  console.log(dinamicLinks);

  useEffect(() => {
    let links = tasks.map(({ type }) => type);
    setDinamicLinks(
      links.filter((item, index) => links.indexOf(item) === index)
    );
  }, [tasks]);

  return (
    <>
      <h2>Menu</h2>
      <ul>
        <li>
          <Link className="links" to={"/todos"}>
            See all
          </Link>
        </li>
        {dinamicLinks.map((link) => (
          <li>
            <Link className="links" to={`/todos/${link.toLowerCase()}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export { BoardOptions };
