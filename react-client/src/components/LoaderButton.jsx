import React from "react";

export default ({
  isLoading,
   text,
   loadingText,
   className = "",
   disabled = false,
   ...props
}) =>
   <button
      className="btn waves-effect waves-light"
      disabled={disabled || isLoading}
      {...props}
   >
      {isLoading && <div className="progress"><div className="indeterminate"></div></div>}
      {!isLoading ? text : loadingText}
   </button>;