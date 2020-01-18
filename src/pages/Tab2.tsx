import React from "react";
import {
 IonContent,
 IonHeader,
 IonItem,
 IonLabel,
 IonList,
 IonPage,
 IonTitle,
 IonToolbar,
 IonFab,
 IonButton,
 IonListHeader,
 IonButtons,
 IonIcon,
 IonText,
 IonRow
} from "@ionic/react";
import {heartEmpty, add} from "ionicons/icons";
import "./Tab1.css";

const Tab2: React.FC = () => {
 return (
  <IonPage>
   <IonContent no-border='true'>
    <IonToolbar
     className='space'
     style={{paddingTop: "40px", paddingBottom: "20px"}}
    >
     <IonTitle style={{fontWeight: "bold", color: "black"}}>
      Pilih Menu
     </IonTitle>
    </IonToolbar>

    <IonRow
     style={{
      display: "flex",
      marginBottom: "-70px",
      justifyContent: "center",
      padding: "0px"
     }}
    >
     <IonButton
      color='dark'
      shape='round'
      expand='full'
      size='large'
      style={{
       textTransform: "none",
       width: 150,
       fontSize: "20px",
       marginRight: "10px"
      }}
     >
      Delivery
     </IonButton>
     <IonButton
      color='light'
      shape='round'
      expand='full'
      size='large'
      style={{textTransform: "none", width: 150, fontSize: "20px"}}
     >
      Pick Up
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

    <IonList lines='none'>
     <IonListHeader>
      <IonTitle style={{paddingLeft: "10px"}}>Your Favorite</IonTitle>
     </IonListHeader>

     <IonItem
      className='listss'
      style={{justifyContent: "space-between", marginBottom: "10px"}}
     >
      <div style={{display: "flex", paddingLeft: "7px"}}>
       <img
        style={{width: "70px", height: "70px", borderRadius: "5px"}}
        src='https://b.zmtcdn.com/data/pictures/chains/1/18731481/d60a7f41de179c18cbec5e9250c9d322.jpg'
       />
       <div style={{paddingLeft: "10px"}}>
        <IonTitle
         style={{paddingLeft: "0px", paddingBottom: "5px", fontSize: "17px"}}
        >
         Es Cocopreso
        </IonTitle>
        <IonTitle
         style={{
          paddingLeft: "1px",
          fontSize: "15px",
          paddingBottom: "2px",
          color: "grey"
         }}
        >
         Rp 21.000
        </IonTitle>
        <IonText style={{paddingLeft: "1px", fontSize: "12px"}}>
         Lorem Ipsum dolor sit amet
        </IonText>
       </div>
      </div>
      <div slot='end'>
       <IonButtons style={{paddingLeft: "10px"}}>
        <IonIcon slot='icon-only' icon={heartEmpty} />
       </IonButtons>
       <IonButton
        color='dark'
        size='small'
        style={{
         paddingLeft: "1px",
         paddingRight: "1px",
         alignSelf: "flex-end",
         width: "48px"
        }}
       >
        <IonIcon slot='icon-only' icon={add} />
       </IonButton>
      </div>
     </IonItem>

     <IonItem
      className='listss'
      style={{justifyContent: "space-between", marginBottom: "10px"}}
     >
      <div style={{display: "flex", paddingLeft: "7px"}}>
       <img
        style={{width: "70px", height: "70px", borderRadius: "5px"}}
        src='https://b.zmtcdn.com/data/pictures/chains/1/18731481/d60a7f41de179c18cbec5e9250c9d322.jpg'
       />
       <div style={{paddingLeft: "10px"}}>
        <IonTitle
         style={{paddingLeft: "0px", paddingBottom: "5px", fontSize: "17px"}}
        >
         Es Cocopreso
        </IonTitle>
        <IonTitle
         style={{
          paddingLeft: "1px",
          fontSize: "15px",
          paddingBottom: "2px",
          color: "grey"
         }}
        >
         Rp 21.000
        </IonTitle>
        <IonText style={{paddingLeft: "1px", fontSize: "12px"}}>
         Lorem Ipsum dolor sit amet
        </IonText>
       </div>
      </div>
      <div slot='end'>
       <IonButtons style={{paddingLeft: "10px"}}>
        <IonIcon slot='icon-only' icon={heartEmpty} />
       </IonButtons>
       <IonButton
        color='dark'
        size='small'
        style={{
         paddingLeft: "1px",
         paddingRight: "1px",
         alignSelf: "flex-end",
         width: "48px"
        }}
       >
        <IonIcon slot='icon-only' icon={add} />
       </IonButton>
      </div>
     </IonItem>

     <IonItem
      className='listss'
      style={{justifyContent: "space-between", marginBottom: "10px"}}
     >
      <div style={{display: "flex", paddingLeft: "7px"}}>
       <img
        style={{width: "70px", height: "70px", borderRadius: "5px"}}
        src='https://b.zmtcdn.com/data/pictures/chains/1/18731481/d60a7f41de179c18cbec5e9250c9d322.jpg'
       />
       <div style={{paddingLeft: "10px"}}>
        <IonTitle
         style={{paddingLeft: "0px", paddingBottom: "5px", fontSize: "17px"}}
        >
         Es Cocopreso
        </IonTitle>
        <IonTitle
         style={{
          paddingLeft: "1px",
          fontSize: "15px",
          paddingBottom: "2px",
          color: "grey"
         }}
        >
         Rp 21.000
        </IonTitle>
        <IonText style={{paddingLeft: "1px", fontSize: "12px"}}>
         Lorem Ipsum dolor sit amet
        </IonText>
       </div>
      </div>
      <div slot='end'>
       <IonButtons style={{paddingLeft: "10px"}}>
        <IonIcon slot='icon-only' icon={heartEmpty} />
       </IonButtons>
       <IonButton
        color='dark'
        size='small'
        style={{
         paddingLeft: "1px",
         paddingRight: "1px",
         alignSelf: "flex-end",
         width: "48px"
        }}
       >
        <IonIcon slot='icon-only' icon={add} />
       </IonButton>
      </div>
     </IonItem>
    </IonList>

    <IonList lines='none'>
     <IonListHeader>
      <IonTitle style={{paddingLeft: "10px"}}>Iced Coffee</IonTitle>
     </IonListHeader>

     <IonItem
      className='listss'
      style={{justifyContent: "space-between", marginBottom: "10px"}}
     >
      <div style={{display: "flex", paddingLeft: "7px"}}>
       <img
        style={{width: "70px", height: "70px", borderRadius: "5px"}}
        src='https://b.zmtcdn.com/data/pictures/chains/1/18731481/d60a7f41de179c18cbec5e9250c9d322.jpg'
       />
       <div style={{paddingLeft: "10px"}}>
        <IonTitle
         style={{paddingLeft: "0px", paddingBottom: "5px", fontSize: "17px"}}
        >
         Es Cocopreso
        </IonTitle>
        <IonTitle
         style={{
          paddingLeft: "1px",
          fontSize: "15px",
          paddingBottom: "2px",
          color: "grey"
         }}
        >
         Rp 21.000
        </IonTitle>
        <IonText style={{paddingLeft: "1px", fontSize: "12px"}}>
         Lorem Ipsum dolor sit amet
        </IonText>
       </div>
      </div>
      <div slot='end'>
       <IonButtons style={{paddingLeft: "10px"}}>
        <IonIcon slot='icon-only' icon={heartEmpty} />
       </IonButtons>
       <IonButton
        color='dark'
        size='small'
        style={{
         paddingLeft: "1px",
         paddingRight: "1px",
         alignSelf: "flex-end",
         width: "48px"
        }}
       >
        <IonIcon slot='icon-only' icon={add} />
       </IonButton>
      </div>
     </IonItem>

     <IonItem
      className='listss'
      style={{justifyContent: "space-between", marginBottom: "10px"}}
     >
      <div style={{display: "flex", paddingLeft: "7px"}}>
       <img
        style={{width: "70px", height: "70px", borderRadius: "5px"}}
        src='https://b.zmtcdn.com/data/pictures/chains/1/18731481/d60a7f41de179c18cbec5e9250c9d322.jpg'
       />
       <div style={{paddingLeft: "10px"}}>
        <IonTitle
         style={{paddingLeft: "0px", paddingBottom: "5px", fontSize: "17px"}}
        >
         Es Cocopreso
        </IonTitle>
        <IonTitle
         style={{
          paddingLeft: "1px",
          fontSize: "15px",
          paddingBottom: "2px",
          color: "grey"
         }}
        >
         Rp 21.000
        </IonTitle>
        <IonText style={{paddingLeft: "1px", fontSize: "12px"}}>
         Lorem Ipsum dolor sit amet
        </IonText>
       </div>
      </div>
      <div slot='end'>
       <IonButtons style={{paddingLeft: "10px"}}>
        <IonIcon slot='icon-only' icon={heartEmpty} />
       </IonButtons>
       <IonButton
        color='dark'
        size='small'
        style={{
         paddingLeft: "1px",
         paddingRight: "1px",
         alignSelf: "flex-end",
         width: "48px"
        }}
       >
        <IonIcon slot='icon-only' icon={add} />
       </IonButton>
      </div>
     </IonItem>

     <IonItem
      className='listss'
      style={{justifyContent: "space-between", marginBottom: "10px"}}
     >
      <div style={{display: "flex", paddingLeft: "7px"}}>
       <img
        style={{width: "70px", height: "70px", borderRadius: "5px"}}
        src='https://b.zmtcdn.com/data/pictures/chains/1/18731481/d60a7f41de179c18cbec5e9250c9d322.jpg'
       />
       <div style={{paddingLeft: "10px"}}>
        <IonTitle
         style={{paddingLeft: "0px", paddingBottom: "5px", fontSize: "17px"}}
        >
         Es Cocopreso
        </IonTitle>
        <IonTitle
         style={{
          paddingLeft: "1px",
          fontSize: "15px",
          paddingBottom: "2px",
          color: "grey"
         }}
        >
         Rp 21.000
        </IonTitle>
        <IonText style={{paddingLeft: "1px", fontSize: "12px"}}>
         Lorem Ipsum dolor sit amet
        </IonText>
       </div>
      </div>
      <div slot='end'>
       <IonButtons style={{paddingLeft: "10px"}}>
        <IonIcon slot='icon-only' icon={heartEmpty} />
       </IonButtons>
       <IonButton
        color='dark'
        size='small'
        style={{
         paddingLeft: "1px",
         paddingRight: "1px",
         alignSelf: "flex-end",
         width: "48px"
        }}
       >
        <IonIcon slot='icon-only' icon={add} />
       </IonButton>
      </div>
     </IonItem>
    </IonList>
   </IonContent>
  </IonPage>
 );
};

export default Tab2;
