import React from 'react'

import EditAbout from './Modals/EditAbout'
import Modal from './Modals/Modal'
import styles from '../Profile.module.css'

export default class AboutFeed extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            text: "If I inspire hope,,ive done well...i am an independent freelance artist. You can view some of my work on my website at poeticimpressions.net here you will learn about my challenges and how i found the strength to overcome them through art and you will have a better understanding of why im so passionate about"
        }

        this.changeText = this.changeText.bind(this)
    }



    changeEdit(edit) {
        this.setState({ edit: edit })
    }

    changeText(text) {
        this.setState({ text: text })
    }


    render() {
        return (
            <div
                className={styles.about_div}
            >
                <div
                    className={styles.profile_title}
                >

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: "0px 20px",
                            alignItems: 'center'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >

                            <div className={styles.icon_container}>
                                <img className={styles.inner_icon} src="Image/Icons/about.svg" alt=" " />
                            </div>
                            <div>
                                <p className={styles.icon_text} >About </p>
                            </div>
                        </div>
                        {
                            this.props.editpage ?
                                <div>
                                    <img src='../Image/Chalkmate_Edit.svg' style={{ height: 20, cursor: 'pointer' }} onClick={() => {
                                        document.body.style.overflow = 'hidden'
                                        this.changeEdit(true)
                                    }} />
                                </div>
                                :
                                null
                        }
                    </div>
                </div>
                <br />
                <div
                    className={styles.desc}
                    style={{
                        boxShadow: '0px 0px 20px #5555551a',
                        padding: 10,
                        borderRadius: 10,

                    }}
                >
                    <p className={styles.section_desc}>
                        {
                            this.state.text
                        }
                    </p>
                </div>


                {
                    this.state.edit ?
                        <Modal card={<EditAbout title="Edit About" text={this.state.text} changeEdit={this.changeEdit.bind(this)} changeText={this.changeText.bind(this)} />} />

                        :
                        null
                }

            </div>
        )
    }
}