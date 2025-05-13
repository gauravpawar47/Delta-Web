import "./Task.css"

export default function Activitiy({ name, color }) {
  let styles = { color: color };
  return (
    <div className='Tasks'>
      <h4>Hello <span style={styles}>{name}</span></h4>
    </div>
  );
}
