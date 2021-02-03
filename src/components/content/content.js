import './content.css';

function Content(props) {
  return(
    <div className="content">
    {props.children}
    </div>
  );
}

export default Content;