import React, { useRef } from "react";

function Upload({
  children,
  multiple = true,
  url = "",
  onCheck = () => {},
  onChange = () => {},
}) {
  const inputRef = useRef();

  const onClickInput = () => {
    const ele = inputRef.current;
    ele.click();
  };

  const onChangeFile = (e) => {
    const list = e?.target?.files;
    const files = Array.from(list);
    if (!onCheck(files)) return false;

    files.map((o) => {
      o.status = "uploading";

      fetch(url, { body: files, method: "POST" })
        .then((res, error) => {
          if (res.status === 200) return res.json();

          throw "error";
        })
        .then((res) => {
          o.res = res;
          o.status = "success";
        })
        .catch(() => {
          o.status = "error";
        });
    });

    onChange(files);
  };

  return (
    <div>
      <div onClick={() => onClickInput()}>{children}</div>
      <input
        type="file"
        multiple={multiple}
        ref={inputRef}
        onChange={onChangeFile}
        value=""
      />
    </div>
  );
}

export default Upload;
