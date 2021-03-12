import styles from './RoyalBrosSearch.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { ViewFleetModal } from './ViewFleetModal'

let howItWorksArr = [
    {
        imgUrl:"https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_scooter-340840f2aa3263cef93a01a80ae023a2022c50e9b0294492bc991348859c82ec.png",
        title:"Select your ride"
    },
    {
        imgUrl:"https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_deposit-a2db02190834c271e9cbe48e0f26e22e6099769c9ade8886ba6fb4e44a6ffc98.png",
        title:"Pay deposit & booking amount for first month"
    },
    {
        imgUrl:"https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_kyc-8422dfb7da6bac4e7bbc8ef8908c3a8063fb02a4c5a7a95aad15a9b11a4f1150.png",
        title:"Get KYC approved online & start riding"
    },
    {
        imgUrl:"https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_rent-ba691edeb88c3c0f8ffb1b70148122e48b37d148f421511383c07e2387cf5a5e.png",
        title:"Pay for upcoming months at the start of every month"
    },
    {
        imgUrl:"https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_exchange-ddece91b095998b3b4783edb0f53c65431350248da8ee437b58843e647e961fa.png",
        title:"Our team will service the vehicle periodically at no cost"
    }
]

let whyRentFromUs = [
    {
        imgUrl:"https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/freedom-4181bdd49f6b25fbfc20c87362163cfb6ec16bc822079e14382f8f0aeb5e7470.jpg",
        title:"True Travel Freedom",
        desc:"Our team will service the vehicle periodically at no cost Our team will service the vehicle periodically at no cost"
    },
    {
        imgUrl:"https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/convinient-f602dcca9636d57d0f4429e1dff654408400248819e10ba338a98058785f4b4d.jpg",
        title:"Safe and Convenient",
        desc:"Pay for upcoming months at the start of every month Our team will service the vehicle periodically at no Pay for upcoming months at the start of every month cost Our team will service the vehicle periodically at no cost"
    },
    {
        imgUrl:"https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/maintainence-d19ba04b2340287ab6ce1327a4d8cbd98ca0b2c8e053c795f600b9dfc39fd763.jpg",
        title:"Zero Maintenance",
        desc:"booking amount for first month Our team Pay for upcoming months at the start of every month will service the vehicle periodically at no cost Our team will service the Pay for upcoming months at the start of every month vehicle periodically at no cost"
    }
]

const RoyalBrosXSearch = () => {
    const[date,setDate]=React.useState('')
    const[time,setTime]=React.useState('')

    const handleDateTime=()=>{
        //console.log(date,time)
        let dateTime = {date:date,time:time}
        //console.log(dateTime)
        localStorage.getItem("dateTime")
        localStorage.setItem("dateTime",JSON.stringify(dateTime))
    }

    return (
        <>
            <div className={styles.backImg}>
                {/* <img 
                    src='https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/long_term_back-4d2eb3c71b43421cef32f02284dd4221a0f380ed2711bb3d4efba0cf63604331.jpg' 
                    alt=''
                /> */}
                <div className={styles.headerInfoHolder}>
                    <h1>Introducing RoyalBrothersX - <br/> monthly rental subscription</h1>
                    <div className={styles.checkMarksDiv}>
                        <p><i class="fas fa-check"> </i> Pay every month</p>
                        <p><i class="fas fa-check"> </i> Sanitised vehicle</p>
                        <p><i class="fas fa-check"> </i> Free maintenance</p>
                        <p><i class="fas fa-check"> </i> Free door delivery</p>
                    </div>
                    <div className={styles.inputFeildsDiv}>
                        <h2>Pick Up</h2>
                        <div>
                            <input type="date" placeholder='date' onChange={(e)=>setDate(e.target.value)} value={date}/>
                            <input type="time" placeholder='time' onChange={(e)=>setTime(e.target.value)} value={time}/>
                            {/* <input type="submit" name='search' to='/search'/> */}
                            <button className={styles.searchBtn} onClick={handleDateTime}><Link to='/royalXSearch' style={{textDecoration:"none",color:"black"}}>SEARCH</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className={styles.howItWorksH1}>HOW IT WORKS</h1>
            <div className={styles.howItWorksDiv}>
                {howItWorksArr.map((item)=>(
                    <div className={styles.howItWorksIndItem}>
                        <img src={item.imgUrl} alt='img'/>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
            <br/>
            <div className={styles.whyRentFrmUs}>
                <h1>Why rent from us ?</h1>
                {whyRentFromUs.map((item)=>(
                    <div className={styles.whyRentFrmUsIndItem}>
                        <img src={item.imgUrl} alt='img'/>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
            <div style={{margin:"40px 10px 50px 10px"}}>
                <h3>* Prices are exclusive of taxes</h3>
                <ViewFleetModal/>
            </div>
            <div className={styles.footer}>

            </div>
        </>
    )
}

export {RoyalBrosXSearch}
