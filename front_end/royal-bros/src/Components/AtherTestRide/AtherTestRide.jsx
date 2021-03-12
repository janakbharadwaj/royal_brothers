import React from 'react'
import styles from "./Ather.module.css"

const AtherTestRide = () => {
    return (
        <div className={styles.fullParent}>
            <div className={styles.headerText}>
                <h1>Test ride the <br/> Ather 450X at HSR and HBR</h1>
                <div className={styles.calenderDiv}>
                    <h2>Book The Test Ride</h2>
                    <div className={styles.inputDiv}>
                        <h3>Pick Up</h3>
                        <input type="date" placeholder='date'/>
                        <input type="time" placeholder='time'/>
                    </div>
                    <br/>
                    <div className={styles.optionsDiv}>
                        <h3>Duration</h3>
                        <select name="cars" id="cars">
                            <option >Choose Your Option</option>
                            <option >30 Minutes</option>
                        </select>
                    </div>
                    <button>Search</button>
                </div>
            </div>
        </div>
    )
}

export {AtherTestRide}
