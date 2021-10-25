import React from "react";
import ReactDom from "react-dom";
import Upload from "../src";

function Comp() {
  const onCheck = (files) => {
    const flag = files.every((f) => f.type === "image/png");

    return flag;
  };
  return (
    <div>
      <Upload
        onChange={(e) => console.log(e)}
        url="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onCheck={onCheck}
      >
        eee
      </Upload>
    </div>
  );
}

ReactDom.render(<Comp />, document.getElementById("root"));
