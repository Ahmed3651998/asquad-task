import React from "react";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@900&display=swap');
</style>

function HText({ children,classs}) {  
  return <h1 style={{fontFamily: "Mulish, sans-serif"}} class={classs}>{children}</h1>;
}

export default HText;
