import React,{useState} from 'react'
import {  Modal,  ModalBody} from 'reactstrap';
import styles from './style.module.css'
import {GiCancel} from 'react-icons/gi'
import {AiOutlineMinus} from 'react-icons/ai'
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function Segment() {

    const [modal, setModal] = useState(false);
    const [segment,setsegment] = useState();
    const options = [
        {id: 1, Label: 'Add schema to segment', value:""},
        {id: 1, Label: 'First Name', value:"first_name"},
        {id: 2, Label: 'Last Name', value:"last_name"},
        {id:3, Label: 'Gender', value:"gender"},
        {id:4, Label: "Age", value:"age"},
        {id:5, Label: 'Account Name', value:"account_name"},
        {id:6, Label: 'City', value:"city"},
        {id:7, Label: 'State', value:"state"}
      ];
    const [finalval,setfinalval] = useState(

        {
            "segment_name": "",
            "schema": [
            {"first_name": ""},
            {"last_name": ""},
            {"gender": ""},
            {"age": ""},
            {"account_name": ""},
            {"city": ""},
            {"state": ""},
            ]
        }
            
    )
    const [list,setlist] = useState([]);  
    const [val,setVal] = useState("");  
    const [blval,setblval] = useState("");

    const toggle = () => setModal(!modal);

    const handledropdown = (e) =>
    {
        setVal(e.target.value);
        setblval(e.target.value);
    }
    
    const Additem = () =>
    {
        if(blval === "")
        {
            NotificationManager.error('Pls select segment!');
        }
        else
        {
            if(list.includes(blval))
            {
                NotificationManager.error('Already Exit!');
            }
            else
            {
                setlist((list) => [
                    ...list,
                    blval,
                  ]);
                  
              setVal("");
            }
        }


    }
    
    const handledelete = (item) =>
    {
        console.log(item)
        setlist(list.filter(x => x !== item));
    }

    const Save = () =>
    {
           var temp = finalval;
           temp.segment_name = segment;
           list.map((x)=>
            {
               if(x ==="first_name")
                {
                    temp.schema[0].first_name = "First Name";
                }
               if(x ==="last_name")
                {
                    temp.schema[1].last_name = 'Last Name';
                }
                if(x ==="gender")
                {
                    temp.schema[2].gender = 'Gender';
                }
                if(x ==="age")
                {
                    temp.schema[3].age = "Age";
                }
                if(x ==="account_name")
                {
                    temp.schema[4].account_namee = 'Account Name';
                }
                if(x ==="city")
                {
                    temp.schema[5].city = 'City';
                }
                if(x ==="state")
                {
                    temp.schema[6].state = 'State';
                }
            })
            setfinalval(temp);
            console.log(finalval);
            NotificationManager.success('Saved Successfully');
    }

    return (
        <>
        <div className = {styles.btn_container}>
            <button className = {styles.btn} onClick={toggle}>Save Segment</button>
        </div>

              {/*       ******* PopUp *******          */}
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalBody>
                   <div className = {styles.header}>
                       <h6>Saving Segment</h6> 
                       <div className = {styles.cancel}><GiCancel onClick = {toggle} color = "red"/></div>
                   </div>
                   <div className = {styles.lineWrapper}>
                        <div className = {styles.line}></div>
                   </div>
                   <div className = {styles.content}>
                       <label>Enter the Name of the Segment</label>
                       <div className = {styles.input}>
                       <input type = "text" 
                       className = {styles.name}
                       placeholder = "Name of the Segment"
                       value = {segment}
                       onChange = {e => setsegment(e.target.value)}
                       />
                       </div>
                       <label className = {styles.text}>To Save your segment, you need to add the schemas to build the query</label>
                       <div className = {styles.dot_con}>
                           <div className = {styles.dot}>
                               <div className = {styles.option}></div>
                               <p> - User trails</p>
                           </div>
                           <div className = {styles.dot}>
                               <div className = {styles.optionone}></div>
                               <p> - User trails</p>
                           </div>
                       </div>
                   </div>
              {/*BLUE BOX*/}
                   <div className = {styles.bluecontainer}>
                        {list.map((x) =>
                         {
                            return  <>
                           <div className = {x ==="account_name"?`${styles.option}`:`${styles.optionone}`}></div>
                           <div className={styles.searchWrapper}>
                           <select className={`${styles.select} ${styles.text_base}`}
                           value = {x}
                           onChange = {handledropdown}

                           >
                               {options.map((option) => {
                               return <option value={option.value}>{option.Label}</option>
                            })}
                           </select>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute pointer-events-none right-2 top-4 inset-y-0"><polyline points="6 9 12 15 18 9"></polyline></svg>
                       </div>
                       <button className = {styles.btncan} onClick = {() =>handledelete(x)}><AiOutlineMinus size = "30"/></button>   
                           </>
                        })} 
                   </div>


                   <div className = {styles.container}>
                       <div className = {styles.re_dot}></div>
                        <div className={styles.searchWrapper}>
                            <select className={`${styles.select} ${styles.text_base}`}
                            value = {val}
                            onChange = {handledropdown}

                            >
                                {options.map((option) => {
                                return <option value={option.value}>{option.Label}</option>
                             })}
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute pointer-events-none right-2 top-4 inset-y-0"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div> 
                        <button className = {styles.btncan}><AiOutlineMinus size = "30"/></button>   
                   </div>

                   <div className = {styles.add}
                   onClick = {() =>Additem()}
                   >
                       + Add new schema
                   </div>

                   <div className = {styles.footer}>
                   <button className = {styles.btnone} onClick = {() =>Save()}>Save the Segment</button>
                   <button className = {styles.btntwo} onClick = {toggle}>Cancel</button>
                   </div>
                </ModalBody>
            </Modal>
        </div>
        <NotificationContainer/>
        </>
    )
}
