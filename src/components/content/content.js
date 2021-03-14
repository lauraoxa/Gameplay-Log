import './content.css';

// FOR SCROLLABLE CONTENT

function Content(props) {
  return(
    <div className="content">
    {props.children}
    </div>
  );
}

export default Content;