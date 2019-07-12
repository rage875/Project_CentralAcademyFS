import React from "react";
import Button from "react-bootstrap/Button";

import "../styles/LoaderButton.css";

import refreshIcon from "../pics/octicons/sync.svg";

const loaderSyncIcon =
  (<img src={refreshIcon} width="15" height="15" alt="" />);

export default (
{
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <loaderSyncIcon className="spinning" />}
    {!isLoading ? text : loadingText}
  </Button>;
