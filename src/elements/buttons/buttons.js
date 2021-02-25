import './buttons.css';

const classNames = classnames => classnames.join(" ");

// button--primary: SAVE, FILTER

const Button = ({className="", primary, ...props}) => {
  return (
     <button
      type="button"
      className={classNames([
          "button",
          className,
          primary ? "button--primary" : "",
      ])}
      {...props}
      />
  );
}

// button--secondary: DELETE, CLEAR
const ButtonSec = ({className="", secondary, ...props}) => {
  return (
     <button
      type="button"
      className={classNames([
          "button",
          className,
          secondary ? "button--secondary" : "",
      ])}
      {...props}
      /> 
  );
}

//button--disabled
const ButtonDisabled = ({className="", disabled, ...props}) => {
  return (
     <button
      type="button"
      className={classNames([
          "button",
          className,
          disabled ? "button--disabled" : "",
      ])}
      {...props}
      /> 
  );
}
// button--square: GO!
const ButtonSquare = ({ className = "", square, ...props}) => {
  return (
      <Button
          className={classNames([
              "button--square",
              className
          ])}
          {...props}
      />
  );
}

export {Button as default, Button, ButtonSec, ButtonDisabled, ButtonSquare};