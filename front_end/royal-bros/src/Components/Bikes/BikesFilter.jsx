import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from "./BikesFilter.module.css"

 const BikesFilter = ({pickUpDate,pickUpTime,dropOffDate,dropOffTime,handleUpdateDateTiming}) => {
    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
      }));
      const classes = useStyles();

      

    return (
        <div>
            <p>select date and time</p>
                
                <div className={styles.date__time}>
                <form className={classes.container} noValidate>
                  <TextField
                    id="date"
                    label="Pickup date"
                    type="date"
                    value={pickUpDate}
                    name="pickUpDate"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
                    <label>
                        Time<br/>
                        <input type="time"
                        name="pickUpTime"
                         placeholder="pickupdate"
                         value={pickUpTime}
                         onChange={handleUpdateDateTiming}/>
                    </label>
                </div>
                <div className={styles.date__time}>
                <form className={classes.container} noValidate>
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    name="dropOffDate"
                    value={dropOffDate}
                    
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
                    <label>
                        Time<br/>
                        <input type="date"
                        name="dropOffTime"
                         placeholder="pickup date"
                         value={dropOffTime}
                         onChange={handleUpdateDateTiming}/>
                    </label>
                </div>
                
        </div>
    )
}
export default BikesFilter