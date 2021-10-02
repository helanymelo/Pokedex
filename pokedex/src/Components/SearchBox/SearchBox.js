import React from "react";

import styled from "styled-components";

const ToolBar = styled.div`
  display: flex;



`


function SearchBox (){
  return(
    <ToolBar>
      
        <input type="text" placeholder="Pesquise um Pokemon"/>

      
    </ToolBar>
  )
}

export default SearchBox;

