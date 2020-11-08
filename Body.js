import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import casino7 from "./casino7.svg" 
import './body.css';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

import { Card } from 'react-casino';

function Body() {
   
    const [cntini, setcnt] = useState(20);
    const[slctcard,setslctcard]= useState('null');
    const [open, setOpen] = useState(false);
    const [openrslt, setOpenrslt] = useState(false);
    const [initamnt, setamnt] = useState("Your Amount");
    const [showresult, setshowresult] = useState()
    const [initcard, setcard]=useState(<Card  className="khali_card" style={{width:"50px", height:"80px" }}  suit="l" face="k" />);
const[false1,settrue]= useState(false);
const [openalrt, setopenalrt] = useState(false)
    
    const cards = [


        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="S" face="2" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="C" face="2" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="D" face="2" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="H" face="2" />,

        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="S" face="3" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="C" face="3" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="D" face="3" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="H" face="3" />,

        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="S" face="4" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="C" face="4" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="D" face="4" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="H" face="4" />,

        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="S" face="5" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="C" face="5" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="D" face="5" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="H" face="5" />,

        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="S" face="6" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="C" face="6" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="D" face="6" />,
        <Card className="low_card" style={{width:"50px", height:"80px" }} suit="H" face="6" />,

        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="S" face="8" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="C" face="8" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="D" face="8" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="H" face="8" />,

        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="S" face="9" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="C" face="9" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="D" face="9" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="H" face="9" />,

        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="S" face="T" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="C" face="T" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="D" face="T" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="H" face="T" />,

        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="S" face="J" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="C" face="J" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="D" face="J" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="H" face="J" />,

        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="S" face="K" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="C" face="K" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="D" face="K" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="H" face="K" />,

        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="S" face="Q" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="C" face="Q" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="D" face="Q" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="H" face="Q" />,

        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="S" face="A" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="C" face="A" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="D" face="A" />,
        <Card className="high_card" style={{width:"50px", height:"80px" }} suit="H" face="A" />,


      ];
      
let luckycard = cards[Math.floor(Math.random() * cards.length)];

 const change=()=>{
   setcard(luckycard);
 };
    console.log(cntini);
    const timestrt =()=>{
      settrue(true);
   if(slctcard==="null"){
      alert("plss select card value");
   }
   else{
        let updt= cntini;
    const updatecnt =() => {
       if(updt>0){  
         updt= (updt-1)
        setcnt(updt);
        
      }
      
     
        };
    setInterval(updatecnt, 1000);
    
}}
const timeout=()=>{
  setTimeout(reset,20000);
}
const reset=()=>{
  setcard(luckycard);
 
  setTimeout(result,3000);
  setTimeout(cngcard,6000) ;
  
}
const result=()=>{
  if(cards.indexOf(luckycard) <= 20 &&  slctcard==="low_card"){
    setshowresult("Congratulations ! You Win")
    setOpenrslt(true)
  }
  else if(cards.indexOf(luckycard) > 20 &&  slctcard==="high_card"){
    setshowresult("Congratulations ! You Win");
    setOpenrslt(true);
  }
  else {
    setshowresult("Oops ! You loose");
    setOpenrslt(true);
  }
}
const cngcard=()=>{
  setcard(<Card style={{width:"50px", height:"80px" }}  suit="l" face="k" />);
  setcnt(20);
  setslctcard("null");
  settrue(false);
  setOpenrslt(false);
 
}

const low_card =()=>{
    setslctcard("low_card");
    setopenalrt(false);
}
const high_card =()=>{
    setslctcard("high_card");
    setopenalrt(false);
}

console.log(slctcard);
const handleClickOpen = () => {
    if(slctcard==='null'){
       setopenalrt(true);
       setTimeout(hidealrt,3000);
    }
 else setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};
const hidealrt =()=>{
  setopenalrt(false);
}





    return (
        <div className='body'>
        
             <img src="https://cartamundi.com/app/uploads/2016/07/Casino-Royale-0784.jpg" alt=''></img>
             <div className="luckyn">{initcard}</div>
             <div className="counter">{cntini}</div>
           <center> <Button onClick={handleClickOpen} style={{background:'#28d',marginTop:'20px',padding:'5px 80px',}}>Play</Button></center> 
           <Collapse
           style={{
             width:'80%',
             marginLeft:"10%",
             marginTop:'5px',
           }}
            in={openalrt}>
<Alert  variant="filled" severity="error">
  Please Select Card ! (ex. low card / high card ) 👇
</Alert>
</Collapse>
            
             <div className="section">

                 <Button disabled={false1} className="bothbtn" onClick={low_card} variant="outlined" color="primary">low Card</Button>
                <div className="casino7"> <img src={casino7} alt="lucky 7 card" style={{width:'40px'}} ></img></div>
                 
                 <Button disabled={false1} className="bothbtn" onClick={high_card} variant="outlined" color="primary">High Card</Button>
             </div>
          
              <div>
 
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Select Amount 
        </DialogTitle>
        <DialogContent dividers>
      
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={initamnt}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <p >
   <a href="https://rzp.io/l/q4HS5NZU"><Button onClick={()=>{setamnt('50')}} variant="outlined" color="primary">50</Button></a> 
       <Button onClick={()=>{setamnt('100')}} variant="outlined" color="primary">100</Button>
       <Button onClick={()=>{setamnt('150')}} variant="outlined" color="primary">150</Button>
       <Button onClick={()=>{setamnt('200')}} variant="outlined" color="primary">200</Button></p>
      <p> <Button onClick={()=>{setamnt('300')}} variant="outlined" color="primary">300</Button>
       <Button onClick={()=>{setamnt('400')}} variant="outlined" color="primary">400</Button>
       <Button onClick={()=>{setamnt('500')}} variant="outlined" color="primary">500</Button>
       <Button onClick={()=>{setamnt('1000')}} variant="outlined" color="primary">1000</Button>
        </p>
         
        </DialogContent>
     
          <Button onClick={()=>{handleClose();timestrt(); timeout();}} autoFocus  color="primary">
            Next
          </Button>
      {/*timestrt(); */}
      </Dialog>
    </div>
  
    <div className="slider" >
        <div className="img">    <img className="sliderimg" src="https://i0.wp.com/europeangaming.eu/portal/wp-content/uploads/2020/04/best-casinos-games.jpg?resize=1000%2C600&ssl=1" alt=""></img><p>Sic Bo</p></div>
        <div className="img">    <img className="sliderimg" src="https://tech4gamers.com/wp-content/uploads/2019/10/casino-gaming.jpg" alt=""></img> <p>Slot Machines</p></div>
        <div className="img">    <img className="sliderimg" src="https://azbigmedia.com/wp-content/uploads/2018/12/online-casino.jpg" alt=""></img><p>Baccarat</p></div>
        <div className="img">    <img className="sliderimg" src="https://i2.wp.com/europeangaming.eu/portal/wp-content/uploads/2020/03/casino-software-providers.jpg?resize=1000%2C600&ssl=1" alt=""></img><p>Blackjack</p></div>
       </div>
        <div className="slider" style={{
          marginTop:'0px',
        }} >
 
       <div className="img">    <img className="sliderimg" src="https://i0.wp.com/europeangaming.eu/portal/wp-content/uploads/2020/04/best-casinos-games.jpg?resize=1000%2C600&ssl=1" alt=""></img><p>Sic Bo</p></div>
        <div className="img">    <img className="sliderimg" src="https://tech4gamers.com/wp-content/uploads/2019/10/casino-gaming.jpg" alt=""></img> <p>Slot Machines</p></div>
        <div className="img">    <img className="sliderimg" src="https://azbigmedia.com/wp-content/uploads/2018/12/online-casino.jpg" alt=""></img><p>Baccarat</p></div>
        <div className="img">    <img className="sliderimg" src="https://i2.wp.com/europeangaming.eu/portal/wp-content/uploads/2020/03/casino-software-providers.jpg?resize=1000%2C600&ssl=1" alt=""></img><p>Blackjack</p></div>
 
        </div>
    

    
<center style={{
  marginTop:"10px",
  color:"#28d",
  cursor:"pointer",
}}>
  <LanguageIcon />
  <InstagramIcon />
  <LinkedInIcon />
 
</center>
<Dialog 
 style={{
    border:'1px solid #28d',
    padding:'10px',
    borderRadius:'10px',
  }}
onClose={handleClose} aria-labelledby="customized-dialog-title" open={openrslt}>
  <DialogTitle 
 
  >{showresult}</DialogTitle>
  
</Dialog>

        </div>
    )
}

export default Body;
