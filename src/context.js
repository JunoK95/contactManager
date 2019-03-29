import React, { Component } from 'react'

const Context = React.createContext()

const reducer= (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        default: return state
    }
}

export class Provider extends Component{
    state = {
        contacts: [
            {
                id: 1,
                name: 'Adam West',
                email: 'a@gmail.com',
                phone: '1111111'
            },
            {
                id: 2,
                name: 'Bill Murraa',
                email: 'b@gmail.com',
                phone: '2222222'
            },
            {
                id: 3,
                name: 'Chris Le',
                email: 'c@gmail.com',
                phone: '3333333'
            }
        ],
        dispatch: action => this.setState(state => reducer(state,action))
    }

    render(){
        return(
            <Context.Provider value ={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer