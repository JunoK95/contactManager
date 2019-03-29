import React, {Component} from 'react';
import Contact from './Contact.js'
import {Consumer} from '../context.js'

class Contacts extends Component{
    render(){
        return(
            <Consumer>
                {
                    value => {
                        const {contacts} = value
                        return(
                            <React.Fragment>
                                {contacts.map(contact => <Contact key={contact.id} name={contact.name} />)}
                            </React.Fragment>
                        )
                    }
                }
            </Consumer>
        )
        
    }
}

export default Contacts