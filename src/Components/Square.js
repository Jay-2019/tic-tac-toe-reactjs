import React from "react";
import style from "../style.module.css";
class Square extends React.Component {

    render() {
        return (
            <button
                className={style.square}
                onClick={this.props.onClick}
            >
                {this.props.value}
            </button>
        );
    }
}
export default Square;