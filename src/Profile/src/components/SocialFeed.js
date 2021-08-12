import React from 'react'
import Modal from './Modals/Modal'
import EditSocial from './Modals/EditSocial'

import styles from '../Profile.module.css'

export default class SocailFeed extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            edit: false
        }

    }





    changeEdit(edit) {
        this.setState({ edit: edit })
    }

    render() {
        return (
            <div
                className={styles.desc}
                style={{
                    boxShadow: '0px 0px 20px #5555551a',
                    padding: 10,
                    borderRadius: 10,

                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: 5 }}>
                    <img src="Image/facebook.svg" alt=" " style={{ height: 25, marginRight: 10, cursor: 'pointer' }} />
                    <img src="Image/linkedin.svg" alt=" " style={{ height: 25, marginRight: 10, cursor: 'pointer' }} />
                    <img src="Image/twitter.svg" alt=" " style={{ height: 25, marginRight: 10, cursor: 'pointer' }} />
                    <img src="Image/instagram.svg" alt=" " style={{ height: 25, marginRight: 10, cursor: 'pointer' }} />
                    <img src="Image/medium.svg" alt=" " style={{ height: 25, marginRight: 10, cursor: 'pointer' }} />

                    {
                        this.props.editpage ?
                            <div style={{ display: 'flex', alignItems: 'center' }}>


                                <div className={styles.hov} style={{ height: 40, width: 40, borderRadius: 100, border: '1px solid #236AE8', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                                    onClick={() => {
                                        document.body.style.overflow = 'hidden'
                                        this.changeEdit(true)
                                    }}
                                ><p className={styles.pilus} style={{ margin: 0, fontSize: 30 }}>+</p></div>

                            </div>
                            :
                            null
                    }

                </div>
                {
                    this.state.edit ?
                        <Modal card={<EditSocial title="Add Social Links" text={this.state.text} changeEdit={this.changeEdit.bind(this)} />} />

                        :
                        null
                }
            </div>


        )
    }
}