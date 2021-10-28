import React, { useState } from "react";
import ReactDom from "react-dom";
import Upload from "../src";

function Comp() {
  const [files, setFiles] = useState([]);
  const onCheck = (files) => {
    const flag = files.every((f) => f.type === "image/png");

    return flag;
  };

  // console.log(files);
  return (
    <div>
      <Upload
        onChange={setFiles}
        url="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        // onCheck={onCheck}
        disabled={true}
      >
        eee
      </Upload>
      {files.map((file, index) => {
        return (
          <div key={index}>
            {file?.name} ({file?.status})
            <a onClick={() => file.cancel()}>取消</a>
          </div>
        );
      })}
    </div>
  );
}

ReactDom.render(<Comp />, document.getElementById("root"));
