import React, { Component } from 'react'
import MiddleContain from './MiddleContain'
import { ModalWithHeader } from '../shared/ui/Modal/Modal'

export default class ClassModal extends Component {
    render() {
        return (
            <div>
                <ModalWithHeader
                    title="Create a Group"
                    show={this.props.show}
                    closeHandler={this.props.closeModal}
                    maxWidth="605px"
                >
                <div style={{backgroundColor: '#fff', borderRadius: '0 0 15px 15px'}}>
                    <MiddleContain />
                </div>
                </ModalWithHeader>
            </div>
        )
    }
}
