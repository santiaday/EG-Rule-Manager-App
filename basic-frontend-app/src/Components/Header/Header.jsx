import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Grid } from '@material-ui/core';
import useStyles from './headerStyles';
import { Link, useNavigate } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai"

const Header = () => {

  const classes = useStyles();

  const[page, setPage] = useState(1);

  const navigate = useNavigate();

  const handleNavigateFileConverter = () => {
    if(page != 1){
      navigate("/")
    }
  }

  const handleNavigateRuleGenerator = () => {
    if(page != 2){
      navigate("/generator")
    }
  }

  useEffect(() => {
    console.log(window.location.href)

    let tempHref = window.location.href.substring(window.location.href.lastIndexOf('#') + 1, window.location.href.length);
    console.log(tempHref)
    if((tempHref) === "/" || tempHref  === "/settings"|| tempHref === "/#/settings" || tempHref === "/#/" || window.location.path === "/"){
      setPage(1)
    }else if((tempHref) === "/generator" || (tempHref) === "/generator/generate-rule" || tempHref === "/#/generator" || tempHref === "/#/generator/generate-rule"){
      setPage(2)
    }
  }, [window.location.path, window.location.href])

  return (
    <AppBar style={{ height: '164px'}} className={classes.appBar} color="#000099" >

        <Typography inline style={{maxHeight: "130px"}}>
            <img src={'/expedia-group-logo-white.svg'} alt="EG_Logo_White" className={classes.logo}/>
        </Typography>
        <Typography inline style={{display: "inline"}}>

          {page == 1 ? <><span className={classes.headerLinks} style={{textDecoration: "underline 2px", textUnderlineOffset: "5px",}} onClick={handleNavigateFileConverter}>File Converter</span>
          <span className={classes.headerLinks} onClick={handleNavigateRuleGenerator}>Rule Manager</span><span className={classes.headerLinks} ><a href="https://github.expedia.biz/saaday/eg-rule-manager" target="_blank" style={{textDecoration: "none", color: "white"}}><AiFillGithub style={{fontSize: "23px", textDecoration: "none", color: "white"}}/></a></span></>
          
            : <><span className={classes.headerLinks} onClick={handleNavigateFileConverter}>File Converter</span>
          <span className={classes.headerLinks} style={{textDecoration: "underline 2px", textUnderlineOffset: "5px",}} onClick={handleNavigateRuleGenerator}>Rule Manager</span><span className={classes.headerLinks} ><a href="https://github.expedia.biz/saaday/eg-rule-manager" target="_blank" style={{textDecoration: "none", color: "white"}}><AiFillGithub style={{fontSize: "23px", textDecoration: "none", color: "white"}}/></a></span></>}

        </Typography>

    </AppBar>
  )
}

export default Header