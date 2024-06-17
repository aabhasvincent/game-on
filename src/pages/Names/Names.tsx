import React, { useId, useCallback, ChangeEvent } from "react";

export const Names = () => {
  const id = useId();
  const [search, setSearch] = React.useState("");
  const [result, setResult] = React.useState([]);

  const getData = (name: string) => {
    fetch(`http://localhost:4000/search?name=${name}`)
      .then((response) => response.json())
      .then((json) => {
        setResult(json);
      });
  };

  const debounce = (fn: (name: string) => void) => {
    let timer: NodeJS.Timeout;
    return (name: string) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(name);
      }, 500);
    };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const deboucedSearch = useCallback(debounce(getData), []);

  //A function to handle display condition for the names list.
  const handlechange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setSearch(event.target.value);
      deboucedSearch(event.target.value);
    } else {
      setSearch("");
      setResult([]);
    }
  };

  return (
    <>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-3 mt-5">
        <label className="mx-2">Search Names starting with</label>
        <input
          id={id}
          className="border-2"
          type="text"
          name="searchBox"
          value={search}
          onChange={handlechange}
        />
      </div>
      <div>
        {result.length > 0 && search ? (
          <div className="flex gap-2 flex-wrap m-5">
            {result.map((users, index) => {
              return (
                <div
                  key={index}
                  className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase bg-white odd:bg-blue-100"
                >
                  <span>{users}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
