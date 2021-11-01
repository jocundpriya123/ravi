
import React, {Component} from "react";

export class Header extends Component{
    constructor(){
        super();
        this.state={
            title: 'Crud operations',
            address: 'chennai'
        }
    }

    updateaddress= () => {
        this.setstate({address : 'urapakkam', 'chennai'},)
        

    };
}
    

render() {
    return(
        <div>{this.state.address}</div>

    )
}
}
