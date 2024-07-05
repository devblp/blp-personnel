import { Box, Typography } from "@mui/material";
import React from "react";
import { ReactTyped } from "react-typed";

const CodeBanner = () => {
  return (
    <Box sx={{ background: "black", color: "white", p: 3,width:{xs:280,md:410},borderRadius:4,my:3 }}>
      <pre>
        <code>
          <Typography sx={{fontSize:{xs:13,md:18}}}>
            &lt;head&gt;{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;
            <ReactTyped

              strings={["Example", "sina", "test"]}
              typeSpeed={50}
              backSpeed={50}
              loop
              style={{color:"green"}}
            />
            &lt;/title&gt;{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&lt;link rel=<span className="code-red">"<span style={{color:"red"}}>stylesheet</span>"</span> href=
            <span >"styles.css"</span>&gt;{"\n"}
            &lt;/head&gt;{"\n"}
            &lt;body&gt;
          </Typography>
        </code>
      </pre>
    </Box>
  );
};

export default CodeBanner;
