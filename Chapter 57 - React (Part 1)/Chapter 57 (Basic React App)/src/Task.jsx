import "./Task.css";

export default function Task({ name, description, featured }) {
  const list = featured.map((feature) => <li>{feature}</li>);

  let styles = {backgroundColor : "yellow", color : "red"}

  return (
    <div className="Tasks">
      <h2>{name}</h2>
      <h4>{description}</h4>
      {name === "DSA" && <p>follow <a style={styles} href="https://www.apnacollege.in/" target="_blank">apnacollege.in</a></p>}
      <p>{list}</p>
    </div>
  );
}
