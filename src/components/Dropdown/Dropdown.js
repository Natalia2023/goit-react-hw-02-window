import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
   state = {
    visible: false,
   };

   toggle = () => {
    this.setState(prevState => ({
        visible: !prevState.visible,
    }));
   };

//    show = () => {
//     this.setState({ visible: true });
//    };
//    hide = () => {
//     this.setState({ visible: false });
//    };
   

   
    render() {
        const { visible } = this.state;
        return (
            <div className="Dropdown">
                <button type="button" 
                className="Dropdown_tooggle" 
                onClick={this.toggle}
                // onMouseOver={this.toggle} під час ховеру рендер
                >
                   {visible ?'Закрити' : 'Відкрити'}
                   
                </button>
               
                {visible && (
                <div className="Dropdown_menu">Випадающее окно</div>
                )}
                </div>
                
        );
    }
}


export default Dropdown;