import {
 IonCard,
 IonCardContent,
 IonCardHeader,
 IonCardSubtitle,
 IonCardTitle,
 IonContent,
 IonHeader,
 IonIcon,
 IonItem,
 IonLabel,
 IonList,
 IonListHeader,
 IonPage,
 IonTitle,
 IonToolbar,
 IonButtons,
 IonText,
 IonFab,
 IonButton,
 IonSlides,
 IonSlide,
 IonChip,
 IonSegment,
 IonModal,
 IonItemDivider,
 IonTextarea,
 IonInput,
 IonCheckbox,
 IonRow,
 IonRadio,
 IonRadioGroup
} from "@ionic/react";
import {
 book,
 build,
 colorFill,
 grid,
 contact,
 notificationsOutline,
 heartEmpty,
 add,
 close,
 checkbox,
 remove,
 heart
} from "ionicons/icons";
import React, {Component} from "react";
import axios from "axios";
import "./Tab1.css";
import useWindowDimensions from "../component/dimensions";
import ApiSlider from "../utils/Api/api-slider.json";
import ApiFeature from "../utils/Api/api-featured-product.json";
import LastPurch from "../utils/Api/api-last-purchased.json";
import {useState} from "react";
import {useEffect} from "react";

const slideOpts = {
 initialSlide: 0,
 autoplay: {
  disableOnInteraction: false
 },
 loop: true,
 speed: 600
};

const slideCard = {
 slidePerView: 10
};

// interface ProductProps {
//  name: string;
// }

// interface ProductState {
//  slider: [];
// }

const Tab1: React.FC = () => {
 const [showModal, setShowModal] = useState(false);
 const [slider, setSlider] = useState([]);
 const [feature, setFeature] = useState([]);
 const [last, setLast] = useState([]);

 useEffect(() => {
  const fecthData = async () => {
   const result = await axios("./api-slider.json");
   setSlider(result.data.data);
   console.log(result.data.data);
  };

  fecthData();
 }, []);

 useEffect(() => {
  const fecthData = async () => {
   const result = await axios("./api-featured-product.json");
   setFeature(result.data.data);
   console.log(result.data.data);
  };

  fecthData();
 }, []);

 useEffect(() => {
  const fecthData = async () => {
   const result = await axios("./api-last-purchased.json");
   setLast(result.data.data);
   console.log(result.data.data);
  };

  fecthData();
 }, []);
 //  constructor() {
 //   super();
 //   this.state = {
 //    slider: []
 //   };
 //  }

 //  componentDidMount() {
 //   axios
 //    .get("./api-slider.json")
 //    .then(response => {
 //     console.log(response);
 //     this.setState({
 //      slider: response.data.data
 //     });
 //    })
 //    .catch(err => {
 //     console.log(err);
 //    });
 //  }

 console.log(ApiSlider);
 const formatter = new Intl.NumberFormat(["ban", "id"]);
 // const slide = this.state.slider;
 const {height, width} = useWindowDimensions();
 const wid = width - parseInt("50%");
 return (
  <IonPage>
   <IonContent no-border='true'>
    <IonToolbar className='space'>
     <IonButtons slot='start'>
      <IonIcon slot='icon-only' icon={contact}></IonIcon>
      <IonText className='space1'>Halo, Niko!</IonText>
     </IonButtons>

     <IonButtons slot='end'>
      <IonIcon slot='icon-only' icon={notificationsOutline}></IonIcon>
     </IonButtons>
    </IonToolbar>

    <div className='color' style={{paddingLeft: "30px", paddingBottom: "15px"}}>
     <img className='color' src='../janjijiwa.png' />
    </div>

    <IonRow
     style={{marginBottom: "-70px", justifyContent: "center", padding: "0px"}}
    >
     <IonButton
      color='dark'
      shape='round'
      expand='full'
      size='large'
      style={{textTransform: "none", width: wid, fontSize: "20px"}}
     >
      Pesan Sekarang!
     </IonButton>
    </IonRow>

    <div className='color' style={{padding: "20px"}}></div>
    <div className='color'>
     <div
      style={{
       border: "solid white 30px",
       borderTopLeftRadius: 30,
       backgroundColor: "#f9ddd1",
       borderTopRightRadius: 30
      }}
      className='color'
     ></div>
    </div>
    <IonSlides className='bullets' pager={true} options={slideOpts}>
     {slider &&
      slider.map((item, index) => (
       <IonSlide
        className='slides'
        style={{
         paddingLeft: "10px",
         paddingRight: "10px"
        }}
       >
        <IonCard style={{borderRadius: "35px"}}>
         <img
          style={{
           height: "200px",
           width: width
          }}
          src={item.img}
         />
        </IonCard>
       </IonSlide>
      ))}
    </IonSlides>
    <section style={{paddingLeft: "20px"}}>
     <IonButton
      size='small'
      fill='default'
      style={{borderBottom: "2px solid black", textTransform: "none"}}
     >
      Popular
     </IonButton>
     <IonButton size='small' fill='default' style={{textTransform: "none"}}>
      Untukmu
     </IonButton>
     <IonButton size='small' fill='default' style={{textTransform: "none"}}>
      Kopi
     </IonButton>
     <IonButton size='small' fill='default' style={{textTransform: "none"}}>
      Teh
     </IonButton>
     <IonButton size='small' fill='default' style={{textTransform: "none"}}>
      Snack
     </IonButton>
    </section>

    <IonModal cssClass='modals' isOpen={showModal}>
     <IonContent>
      <IonList lines='none'>
       <IonRow
        style={{alignSelf: "flex-end", zIndex: 150, marginBottom: "-15px"}}
       >
        <IonButton
         onClick={() => setShowModal(false)}
         fill='clear'
         style={{
          backgroundColor: "transparent",
          margin: "0px 0px -20px auto",
          zIndex: 150
         }}
        >
         <IonIcon icon={close} style={{color: "black"}} />
        </IonButton>
       </IonRow>
       <IonItem
        style={{paddingLeft: "10px", paddingRight: "20px", paddingTop: "18px"}}
       >
        <IonItemDivider style={{paddingLeft: "0px"}}>
         <IonItem
          className='listss'
          style={{
           justifyContent: "space-between",
           marginBottom: "10px",
           paddingLeft: "1px"
          }}
         >
          <div style={{display: "flex"}}>
           <img
            style={{width: "70px", height: "70px"}}
            src='https://b.zmtcdn.com/data/pictures/chains/1/18731481/d60a7f41de179c18cbec5e9250c9d322.jpg'
           />
           <div style={{paddingLeft: "10px"}}>
            <IonTitle
             style={{
              paddingLeft: "0px",
              paddingBottom: "3px",
              fontSize: "17px"
             }}
            >
             Es Cocopreso
            </IonTitle>
            <IonTitle
             style={{
              paddingLeft: "1px",
              fontSize: "15px",
              paddingBottom: "7px"
             }}
            >
             Rp 21.000
            </IonTitle>
            <IonTitle style={{paddingLeft: "1px", fontSize: "12px"}}>
             Lorem Ipsum dolor sit amet
            </IonTitle>
           </div>
          </div>
          <IonButton
           slot='end'
           fill='clear'
           style={{paddingLeft: "10px", paddingTop: "5px"}}
          >
           <IonIcon
            slot='icon-only'
            icon={heartEmpty}
            style={{color: "black"}}
           />
          </IonButton>
         </IonItem>
        </IonItemDivider>
       </IonItem>
       <IonHeader
        no-border='true'
        style={{marginTop: "25px", marginBottom: "5px", paddingLeft: "10px"}}
       >
        <IonTitle style={{fontSize: "18px", fontWeight: 580}}>
         Additional Topping:
        </IonTitle>
       </IonHeader>
       <IonItem className='spaceMode'>
        <div style={{display: "flex"}}>
         <div style={{border: "1px solid black", borderRadius: "5px"}}>
          <IonCheckbox
           className='check'
           style={{
            height: "14px",
            marginTop: "1px",
            padding: "0.5px 1px 0.3px 1px",
            marginBottom: "1px",
            width: "15px"
           }}
           checked={true}
           color='dark'
          />
         </div>
         <IonText style={{paddingLeft: "10px"}} className='menuText'>
          Cincau
         </IonText>
        </div>
        <IonText slot='end' style={{paddingTop: "1px"}} className='textPrice'>
         +3.000
        </IonText>
       </IonItem>

       <IonItem className='spaceMode'>
        <div style={{display: "flex"}}>
         <div style={{border: "1px solid black", borderRadius: "5px"}}>
          <IonCheckbox
           className='check'
           style={{
            height: "14px",
            marginTop: "1px",
            padding: "0.5px 1px 0.3px 1px",
            marginBottom: "1px",
            width: "15px"
           }}
           checked={true}
           color='dark'
          />
         </div>
         <IonText style={{paddingLeft: "10px"}} className='menuText'>
          Coffee Jelly
         </IonText>
        </div>
        <IonText slot='end' style={{paddingTop: "1px"}} className='textPrice'>
         +3.000
        </IonText>
       </IonItem>

       <IonItem className='spaceMode'>
        <div style={{display: "flex"}}>
         <div style={{border: "1px solid black", borderRadius: "5px"}}>
          <IonCheckbox
           className='check'
           style={{
            height: "14px",
            marginTop: "1px",
            padding: "0.5px 1px 0.3px 1px",
            marginBottom: "1px",
            width: "15px"
           }}
           checked={true}
           color='dark'
          />
         </div>
         <IonText style={{paddingLeft: "10px"}} className='menuText'>
          Extra Espresso
         </IonText>
        </div>
        <IonText slot='end' style={{paddingTop: "1px"}} className='textPrice'>
         +5.000
        </IonText>
       </IonItem>

       <IonItem className='spaceMode'>
        <div style={{display: "flex"}}>
         <div style={{border: "1px solid black", borderRadius: "5px"}}>
          <IonCheckbox
           className='check'
           style={{
            height: "14px",
            marginTop: "1px",
            padding: "0.5px 1px 0.3px 1px",
            marginBottom: "1px",
            width: "15px"
           }}
           color='dark'
          />
         </div>
         <IonText style={{paddingLeft: "10px"}} className='menuText'>
          Vanilla Ice Cream
         </IonText>
        </div>
        <IonText slot='end' style={{paddingTop: "1px"}} className='textPrice'>
         +8.000
        </IonText>
       </IonItem>

       <IonItem className='spaceMode'>
        <div style={{display: "flex"}}>
         <div style={{border: "1px solid black", borderRadius: "5px"}}>
          <IonCheckbox
           className='check'
           style={{
            height: "14px",
            marginTop: "1px",
            padding: "0.5px 1px 0.3px 1px",
            marginBottom: "1px",
            width: "15px"
           }}
           color='dark'
          />
         </div>
         <IonText style={{paddingLeft: "10px"}} className='menuText'>
          Matcha Ice Cream
         </IonText>
        </div>
        <IonText slot='end' style={{paddingTop: "1px"}} className='textPrice'>
         +8.000
        </IonText>
       </IonItem>

       <IonItem className='spaceMode'>
        <div style={{display: "flex"}}>
         <div style={{border: "1px solid black", borderRadius: "5px"}}>
          <IonCheckbox
           className='check'
           style={{
            height: "14px",
            marginTop: "1px",
            padding: "0.5px 1px 0.3px 1px",
            marginBottom: "1px",
            width: "15px"
           }}
           color='dark'
          />
         </div>
         <IonText style={{paddingLeft: "10px"}} className='menuText'>
          Chocolate Ice Cream
         </IonText>
        </div>
        <IonText slot='end' style={{paddingTop: "1px"}} className='textPrice'>
         +8.000
        </IonText>
       </IonItem>

       <IonHeader
        no-border='true'
        style={{marginTop: "25px", marginBottom: "5px", paddingLeft: "10px"}}
       >
        <IonTitle style={{fontSize: "18px", fontWeight: 580}}>
         Sugar Level:
        </IonTitle>
       </IonHeader>

       <IonList style={{paddingTop: "0px"}}>
        <IonRadioGroup>
         <IonItem className='spaceMode'>
          <div style={{display: "flex"}}>
           <IonRadio
            checked
            color='dark'
            style={{height: "16px", width: "16px", margin: "1.5px 0px 0px 0px"}}
           />
           <IonText style={{paddingLeft: "10px"}} className='menuText'>
            Normal
           </IonText>
          </div>
         </IonItem>

         <IonItem className='spaceMode'>
          <div style={{display: "flex"}}>
           <IonRadio
            color='dark'
            style={{height: "16px", width: "16px", margin: "1.5px 0px 0px 0px"}}
           />
           <IonText style={{paddingLeft: "10px"}} className='menuText'>
            Half
           </IonText>
          </div>
         </IonItem>

         <IonItem className='spaceMode'>
          <div style={{display: "flex"}}>
           <IonRadio
            color='dark'
            style={{height: "16px", width: "16px", margin: "1.5px 0px 0px 0px"}}
           />
           <IonText style={{paddingLeft: "10px"}} className='menuText'>
            Less
           </IonText>
          </div>
         </IonItem>
        </IonRadioGroup>
       </IonList>

       <IonHeader
        no-border='true'
        style={{marginTop: "25px", marginBottom: "5px", paddingLeft: "10px"}}
       >
        <IonTitle style={{fontSize: "18px", fontWeight: 580}}>
         Ice Level:
        </IonTitle>
       </IonHeader>

       <IonList style={{paddingTop: "0px"}}>
        <IonRadioGroup>
         <IonItem className='spaceMode'>
          <div style={{display: "flex"}}>
           <IonRadio
            checked
            color='dark'
            style={{height: "16px", width: "16px", margin: "1.5px 0px 0px 0px"}}
           />
           <IonText style={{paddingLeft: "10px"}} className='menuText'>
            Normal
           </IonText>
          </div>
         </IonItem>

         <IonItem className='spaceMode'>
          <div style={{display: "flex"}}>
           <IonRadio
            color='dark'
            style={{height: "16px", width: "16px", margin: "1.5px 0px 0px 0px"}}
           />
           <IonText style={{paddingLeft: "10px"}} className='menuText'>
            Half
           </IonText>
          </div>
         </IonItem>

         <IonItem className='spaceMode'>
          <div style={{display: "flex"}}>
           <IonRadio
            color='dark'
            style={{height: "16px", width: "16px", margin: "1.5px 0px 0px 0px"}}
           />
           <IonText style={{paddingLeft: "10px"}} className='menuText'>
            Less
           </IonText>
          </div>
         </IonItem>
        </IonRadioGroup>
       </IonList>

       <IonHeader
        no-border='true'
        style={{marginTop: "25px", marginBottom: "5px", paddingLeft: "10px"}}
       >
        <IonTitle style={{fontSize: "18px", fontWeight: 580}}>
         Add Instructions:
        </IonTitle>
       </IonHeader>

       <IonItem style={{paddingLeft: "10px", paddingRight: "20px"}}>
        <input
         placeholder='Add Instructions'
         style={{
          width: "100%",
          borderRadius: "8px",
          padding: "10px",
          borderColor: "grey"
         }}
        ></input>
       </IonItem>

       <IonHeader
        no-border='true'
        style={{marginTop: "25px", marginBottom: "0px", paddingLeft: "10px"}}
       >
        <IonTitle style={{fontSize: "18px", fontWeight: 580}}>Qty:</IonTitle>
       </IonHeader>

       <IonItem
        style={{display: "flex", paddingLeft: "8px", paddingBottom: "10px"}}
       >
        <IonButton
         color='dark'
         size='small'
         style={{
          paddingLeft: "1px",
          paddingRight: "1px",
          alignSelf: "flex-end"
         }}
        >
         <IonIcon slot='icon-only' icon={remove} />
        </IonButton>
        <IonButton
         color='light'
         size='small'
         style={{
          paddingLeft: "1px",
          paddingRight: "1px",
          alignSelf: "flex-end"
         }}
        >
         <IonText>1</IonText>
        </IonButton>
        <IonButton
         color='dark'
         size='small'
         style={{
          paddingLeft: "1px",
          paddingRight: "1px",
          alignSelf: "flex-end"
         }}
        >
         <IonIcon slot='icon-only' icon={add} />
        </IonButton>
       </IonItem>
      </IonList>
     </IonContent>
     <IonItem
      color='background'
      style={{borderTopLeftRadius: "30px", borderTopRightRadius: "30px"}}
     >
      <IonButtons slot='start' style={{display: "block"}}>
       <IonText style={{color: "grey"}}>Price</IonText> <br />
       <IonText style={{color: "black"}}>Rp 32.000</IonText>
      </IonButtons>
      <IonButton
       color='dark'
       shape='round'
       style={{
        width: "100%",
        height: "60px",
        fontSize: "15px",
        textTransform: "none"
       }}
       onClick={() => setShowModal(false)}
      >
       Pesan Sekarang
      </IonButton>
     </IonItem>
    </IonModal>

    {/* {showModal ? (
     <div className='modal'>
      <div className='modal-content'>
       <span className='close'>&times;</span>
      </div>
     </div>
    ) : (
     <div className='modal'>
      <div className='modal-content'>
       <span className='close'>&times;</span>
      </div>
     </div>
    )} */}

    <div className='scrollable'>
     {feature.map((item, index) => (
      <div style={{paddingBottom: "10px"}}>
       <IonCard
        style={{
         height: "265px",
         width: "180px",
         borderRadius: "18px",
         marginBottom: "-20px"
        }}
       >
        <img style={{height: "200px"}} src={item.img} />
        <div
         style={{
          paddingLeft: "15px",
          paddingTop: "10px",
          display: "flex",
          justifyContent: "space-between"
         }}
        >
         <div>
          <IonText
           style={{color: "#393939", fontWeight: "100px", fontSize: "15px"}}
          >
           {item.name}
          </IonText>
          <br />
          <IonText>Rp {formatter.format(parseInt(item.price))}</IonText>
         </div>
         <IonButtons style={{paddingRight: "10px"}}>
          <IonIcon slot='icon-only' icon={heartEmpty} />
         </IonButtons>
        </div>
       </IonCard>
       <IonButton
        className='round'
        color='dark'
        size='small'
        onClick={() => setShowModal(true)}
        style={{
         paddingLeft: "1px",
         height: "35px",
         alignSelf: "flex-end",
         marginLeft: "130px"
        }}
       >
        <IonIcon slot='icon-only' icon={add} />
       </IonButton>
      </div>
     ))}
    </div>

    <div style={{display: "flex"}}>
     <IonTitle
      style={{fontSize: "16px", marginTop: "10px", paddingLeft: "30px"}}
     >
      Terakhir Dibeli
     </IonTitle>
     <IonText
      style={{
       alignSelf: "flex-end",
       paddingRight: "20px",
       fontSize: "13px",
       color: "grey"
      }}
     >
      Lihat Semua
     </IonText>
    </div>

    <div className='scrollable'>
     {last.map((item, index) => (
      <div style={{paddingBottom: "10px"}}>
       <IonCard
        style={{
         height: "265px",
         width: "180px",
         borderRadius: "18px",
         marginBottom: "-20px"
        }}
       >
        <img style={{height: "200px"}} src={item.img} />
        <div
         style={{
          paddingLeft: "15px",
          paddingTop: "10px",
          display: "flex",
          justifyContent: "space-between"
         }}
        >
         <div>
          <IonText
           style={{color: "#393939", fontWeight: "100px", fontSize: "15px"}}
          >
           {item.name}
          </IonText>
          <br />
          <IonText>Rp {formatter.format(parseInt(item.price))}</IonText>
         </div>
         <IonButtons style={{paddingRight: "10px"}}>
          <IonIcon slot='icon-only' icon={heart} />
         </IonButtons>
        </div>
       </IonCard>
       <IonButton
        className='round'
        color='dark'
        size='small'
        onClick={() => setShowModal(true)}
        style={{
         paddingLeft: "1px",
         height: "35px",
         alignSelf: "flex-end",
         marginLeft: "130px"
        }}
       >
        <IonIcon slot='icon-only' icon={add} />
       </IonButton>
      </div>
     ))}
    </div>

    <div style={{display: "flex"}}>
     <IonTitle
      style={{fontSize: "16px", marginTop: "10px", paddingLeft: "30px"}}
     >
      Artikel Untukmu
     </IonTitle>
     <IonText
      style={{
       alignSelf: "flex-end",
       paddingRight: "20px",
       fontSize: "13px",
       color: "grey"
      }}
     >
      Lihat Semua
     </IonText>
    </div>

    <div className='scrollable'>
     <div style={{paddingBottom: "10px"}}>
      <IonCard
       style={{
        height: "270px",
        width: "180px",
        borderRadius: "18px"
       }}
      >
       <img
        style={{height: "200px"}}
        src='https://b.zmtcdn.com/data/pictures/chains/1/18731481/d60a7f41de179c18cbec5e9250c9d322.jpg'
       />
       <div
        style={{
         paddingLeft: "15px",
         paddingTop: "10px",
         display: "block",
         justifyContent: "space-between"
        }}
       >
        <IonText
         text-wrap='true'
         style={{
          color: "#393939",
          fontWeight: "bold",
          fontSize: "12px"
         }}
        >
         Lorem Ipsum Dolor Sit Amet, In Commune
        </IonText>
        <br />
        <IonText style={{color: "grey", paddingTop: "1px"}}>
         Rp 1hr ago{" "}
        </IonText>
       </div>
      </IonCard>
     </div>
    </div>
   </IonContent>
  </IonPage>
 );
};

export default Tab1;
