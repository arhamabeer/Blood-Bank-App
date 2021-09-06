import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

export default function Search({getSearchItem}) {
  const [search, setSearch] = useState("");
  
  return (
    <div>
      <input
        type="text"
        style={{width: '63%', marginLeft: '7%', height: 39, paddingLeft: 15, paddingRight: 15, fontSize: 16, borderColor: 'black', borderWidth: 2, borderRadius: 5}}
        placeholder="Search by Blood Group"
        onChange={(e) => setSearch(e.target.value)}
        
      />
        <SearchIcon onClick={()=>getSearchItem(search)} style={{backgroundColor: 'white',borderRadius: 5, marginBottom: -15, height: 41, marginLeft: -47, width: 45, cursor: 'pointer' }} />
    </div>
  );
}
