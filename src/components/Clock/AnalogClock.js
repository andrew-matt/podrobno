import React from "react";
import styles from "./AnalogClock.module.css";

export default class AnalogClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            console.log("TICK")
            this.setState({
                time: new Date()
            });
        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.timerId);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className={styles.clock}>
                <div
                    className={styles.hour_hand}
                    style={{
                        transform: `rotateZ(${this.state.time.getHours() * 30}deg)`
                    }}
                />
                <div
                    className={styles.min_hand}
                    style={{
                        transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
                    }}
                />
                <div
                    className={styles.sec_hand}
                    style={{
                        transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`
                    }}
                />
                <span className={styles.twelve}>12</span>
                <span className={styles.one}>1</span>
                <span className={styles.two}>2</span>
                <span className={styles.three}>3</span>
                <span className={styles.four}>4</span>
                <span className={styles.five}>5</span>
                <span className={styles.six}>6</span>
                <span className={styles.seven}>7</span>
                <span className={styles.eight}>8</span>
                <span className={styles.nine}>9</span>
                <span className={styles.ten}>10</span>
                <span className={styles.eleven}>11</span>
            </div>
        );
    }
}
