import { useEffect, useState } from "react";
export const SearchPanel = ({ param, users, setParam }) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.mame}
          onChange={(evt) => setParam({ ...param, name: evt.target.value })}
        />
        <select
          value={param.personId}
          onChange={(evt) => setParam({ ...param, personId: evt.target.value })}
        >
          <option value="">负责人</option>
          {users.map((item) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};
