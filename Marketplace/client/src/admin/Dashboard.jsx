import React, { useEffect, useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CategoryIcon from '@mui/icons-material/Category';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';



const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

function Dashboard({shownav}) {
    const [openCli, setOpenCli] = React.useState(true);
    const [openSel, setOpenSel] = React.useState(true);
    const [openCat, setOpenCat] = React.useState(true);
    const [openProd, setOpenProd] = React.useState(true);
    const [admin,setAdmin]=useState([])
    const [clients,setclients]=useState([])
    const [sellers,setSellers]=useState([])
    const [categorys,setCategorys]=useState([])
    const [products,setProducts]=useState([])
    const [listCl,SetListCl]=useState(false)
    const [listS,SetListS]=useState(false)
    const [listCat,SetListCat]=useState(false)
    const [listP,SetListP]=useState(false)
    const [update,setUpdate]=useState(false)
    const [add,setAdd]=useState(false)
    const [image,setImage]=useState("")
    const [file,setFile]=useState(null)
    const [namecat,setNamecat]=useState("")
    const [refresh,setRefresh]=useState(false)
    axios.defaults.withCredentials=true
    shownav(false)

let infoupdate={
    name:namecat,
    image:image
}

useEffect(()=>{
    getclients()
    getproduct()
    getsellers()
    getCateg()
    getadmin()
    setRefresh(!refresh)
},[refresh])
////FUNCTION///////
    let getclients=()=>{
        axios.get("http://localhost:3000/api/admin/clients")
        .then((res)=>{
            console.log("clients :",res.data);
            setclients(res.data)
        })
        .catch((err)=>{
            alert("Error clientes",err);
        })
    }

    let getsellers=()=>{
        axios.get("http://localhost:3000/api/admin/sellers")
        .then((res)=>{
            setSellers(res.data)
            console.log("seller :",res.data)
        })
        .catch((err)=>{
            alert("Error sellers",err)
        })
    }

    let getCateg=()=>{
        axios.get("http://localhost:3000/api/admin/categorys")
        .then((res)=> {
            setCategorys(res.data)
            console.log('Categories',res.data)
        })
    }
    let getproduct=()=>{
        axios.get("http://localhost:3000/api/admin/products")
        .then((res)=>{
            setProducts(res.data)
        console.log("Productos ",res.data)
        })
    }
    let getadmin=()=>{
        axios.get("http://localhost:3000/api/admin/getadmin")
        .then((res)=>{
            setAdmin(res.data)
            console.log(res.data);
        })
    }
    let deletecateg=(id)=>{
        axios.delete("http://localhost:3000/api/admin/deletecateg/"+id)
        .then(()=>{
            console.log("poduct deleted");
        })
        .catch((err)=>{
            console.error("delete product",err);
        })
    }

    let deleteprod=(id)=>{
        axios.delete("http://localhost:3000/api/admin/deleteprod/"+id)
        .then(()=>{
            console.log("category deleted");
        })
        .catch((err)=>{
            console.error("delete categ :",err);
        })
    }

    let updatecategory=(id,newcateg)=>{
        axios.put("http://localhost:3000/api/admin/updatecat"+id,newcateg)
        .then(()=>{
            console.log("category updated");
        })
        .catch((err)=>{
            console.error("update category :",err);
        })
    }
    let createcategory=(infocat)=>{
        axios.post("http://localhost:3000/api/admin/creatcat",infocat)
        .then(()=>{
            console.log("category adedd");
        })
        .catch((err)=>{
            console.error("add category:",err);
        })
    }

    const uploadImage = ()=>{
 
        const data =new FormData()
        data.append('file', file)
        data.append("upload_preset" , "marketplace")
        console.log("data",data,file);
        const obj={}
        obj.file=file
        obj.upload_preset = "marketplace"
        console.log(obj);
        fetch("https://api.cloudinary.com/v1_1/djc7yq80i/image/upload",
        {
            method:"post",
            body:data
        }
        )
        .then((resp)=>resp.json())
        .then(
            result=>{
                console.log(result);
                setImage(result.secure_url)}
        )
        .catch(err=>{console.error("error cloudinary",err);})
      }

 //////////////RENDRING///////////////     

        const renderlistuser=(list)=>{
            return (
                <div className="list-container">
                {list.map((el, index) => (
                <div className='list_client'>
                <Stack direction="row" spacing={2} className='stack_admin'>
                    <Avatar sx={{ bgcolor: 'gray' }}>{index+1}</Avatar>
                    <h4 className='h4_admin'>Name :</h4>
                    <h5 className='h5_admin'>{el.name}</h5>
                    <h4 className='h4_admin'>Email :</h4>
                    <h5 className='h5_admin'>{el.email}</h5>
                </Stack>
                <hr />
                </div>
      ))}
    </div>
              )
        }
        const rendercateglist=()=>{
            return(
                <div className="list-container">
                    {categorys.map((el,index)=>(
                          <div className='list_client'>
                          <Stack direction="row" spacing={2} className='stack_admin'>
                              <Avatar sx={{ bgcolor: 'gray' }}>{index+1}</Avatar>
                              <img className='img_catadmin' src={el.image} alt="" />
                              <h4 className='h4_admin'>Category :</h4>
                              <h5 className='h5_admin'>{el.name}</h5>
                              <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    '& > *': {
                                    m: 1,
                                    },
                                }}
                                >
                                <ButtonGroup sx={{"margin-left":"39em"}} variant="outlined" aria-label="outlined button group">
                                    <Button onClick={()=>{setUpdate(!update)}}>Update</Button>
                                    <Button onClick={()=>{deletecateg(el.idcat)}} variant="outlined" startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                </ButtonGroup>
                                </Box>
                          </Stack>
                          <hr />
                          {update&& <div className='stack_admin'>
                            <h4 className='h4_admin'>Icon : </h4>
                            <Button  sx={{"margin-left":"35px"}} component="label"  variant="contained" startIcon={<CloudUploadIcon />}>
                            Upload file
                            <VisuallyHiddenInput type="file" onChange={(e) => setFile(e.target.files[0])} />
                            </Button>
                            <Button sx={{"margin-right":"5em"}} onClick={()=>{uploadImage()
                            console.log(file)}}>valider</Button>
                            <h4 className='h4_admin'>Name of new category: </h4>
                            <TextField sx={{"margin-left":"20px","margin-right":"10em"}} onChange={(e)=>{handleInput(setNamecat,e)}} id="outlined-basic" label="New Category :" variant="outlined" />                          
                            <Button  onClick={()=>{
                                updatecategory(el.idcat,infoupdate)
                                setUpdate(!update)
                                }} variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                          </div> }
                          </div>
                    ))}
                </div>
            )
        }
        const renderproductlist=()=>{
            return(
                <div className="list-container">
                    {products.map((el,index)=>(
                         <div className='list_client'>
                         <Stack direction="row" spacing={2} className='stack_admin'>
                             <Avatar sx={{ bgcolor: 'gray' }}>{index+1}</Avatar>
                             <img className='img_catadmin' src={el.image[0]} alt="" />
                             <h4 className='h4_admin'>Name:</h4>
                             <h5 className='h5_admin'>{el.name}</h5>
                             <h4 className='h4_admin'>New Price :</h4>
                             <h5 className='h5_admin'>{el.newprice}</h5>
                             <h4 className='h4_admin'>Rate :</h4>
                             <Rating name="half-rating-read" defaultValue={el.rate} precision={0.5} readOnly />
                             <h4 className='h4_admin'>Seller Name :</h4>
                             <h5 className='h5_admin'>{el.sellername}</h5>
                         </Stack>
                         <hr />
                         </div>
                    ))}
                </div>
            )
        }
        
        const renderaddcategory=()=>{
            return(
                <div className='list-container'>
                     <div className='stack_admin'>
                            <h4 className='h4_admin'>Icon : </h4>
                            <Button  sx={{"margin-left":"35px"}} component="label"  variant="contained" startIcon={<CloudUploadIcon />}>
                            Upload file
                            <VisuallyHiddenInput type="file" onChange={(e) => setFile(e.target.files[0])} />
                            </Button>
                            <Button sx={{"margin-right":"5em"}} onClick={()=>{uploadImage()
                            console.log(file)}}>valider</Button>
                            <h4 className='h4_admin'>Name of new category: </h4>
                            <TextField sx={{"margin-left":"20px","margin-right":"10em"}} onChange={(e)=>{handleInput(setNamecat,e)}} id="outlined-basic" label="New Category :" variant="outlined" />                          
                            <Button  onClick={()=>{
                                createcategory(infoupdate)
                                }} variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                          </div> 
                </div>
            )
        }

    const handleInput=(calback,e)=>{
        calback(e.target.value)
    }

    const handleShow=(calback,show)=>{
        SetListCl(false)
        SetListS(false)
        SetListCat(false)
        SetListP(false)
        setAdd(false)
        calback(!show)
    }

    const handleClick = (calback,openx) => {
        calback(!openx);
    }
  return (
    <div>
        <div>
    <nav className='nav_admin'>
        <h1 className='h1_admin'>Admin Page </h1>
    </nav>
        </div>
        <div>
        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Dashboard 
        </ListSubheader>
      }
    >
      <ListItemButton onClick={()=>handleClick(setOpenCli,openCli)}>
        <ListItemIcon>
          <ContactEmergencyIcon />
        </ListItemIcon>
        <ListItemText primary="Clients" />
        {openCli ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCli} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}  onClick={()=>{handleShow(SetListCl,listCl)}} >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="View List & Manage" />
          </ListItemButton>
        </List>
      </Collapse>


      <ListItemButton onClick={()=>handleClick(setOpenSel,openSel)}>
        <ListItemIcon>
          <SupervisedUserCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Sellers" />
        {openSel ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSel} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={()=>{handleShow(SetListS,listS)}}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="View List & Manage" />
          </ListItemButton>
        </List>
      </Collapse>
      
      <ListItemButton onClick={()=>handleClick(setOpenCat,openCat)}>
         <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Category" />
        {openCat ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openCat} timeout="auto" unmountOnExit>


        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={()=>{handleShow(setAdd,add)}} >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Category" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={()=>{handleShow(SetListCat,listCat)}}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="View & Update Category" />
          </ListItemButton>
        </List>
      </Collapse>


      <ListItemButton onClick={()=>handleClick(setOpenProd,openProd)}>
         <ListItemIcon>
          <ProductionQuantityLimitsIcon  />
        </ListItemIcon>
        <ListItemText primary="Products" />
        {openProd ? <ExpandLess /> : <ExpandMore /> }
        </ListItemButton>
        <Collapse in={openProd} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={()=>{handleShow(SetListP,listP)}}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="View & Manage Products" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
        </div>
        <div>
            {listCl&&renderlistuser(clients)}
            {listS&&renderlistuser(sellers)}
            {listCat&&rendercateglist()}
            {listP&&renderproductlist()}
            {add&&renderaddcategory()}
        </div>
    </div>
  )
}

export default Dashboard