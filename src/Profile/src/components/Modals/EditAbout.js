import React from 'react'

import styles from '../../Profile.module.css'

export default class EditAbout extends React.Component {

    state = {
        text: this.props.text
    }

    componentDidMount() {
        var id = document.getElementById('textarea');
        id.focus();
        id.select();
    }

    changeText(text) {
        this.setState({ text: text })
    }



    render() {



        return (
            <div
                id={styles.template_modal}
                style={{
                    backgroundColor: '#fff',
                    padding: 30,
                    borderRadius: 12,
                    width: 550
                }}
            >

                <div id={styles.header}
                    style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #5555555A', paddingBottom: 20, marginBottom: 20 }}
                >
                    <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <img src="./assets/add.svg" height={30} />
                        <p className={styles.modal_title}>{this.props.title}</p>
                    </div>
                    <div
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            // this.props.changeText(this.state.text)
                            this.props.changeEdit(false)
                            document.body.style.overflow = 'visible'
                        }}
                    >
                        <img src="./assets/cross.svg" height={30} />
                    </div>
                </div>
                

                <div>
                    <p className={styles.modal_heading}>Summary</p>
                    <div
                        style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >

                        <textarea id="textarea" className={styles.modal_para} rows={8} placeholder="Ex : Write something about yourself"

                            value={this.state.text}
                            onChange={(event) => {
                                this.changeText(event.target.value)
                            }}
                        />
                    </div>
                </div>

                <div
                    style={{
                        marginTop: 30
                    }}
                >
                    <button
                        className={styles.btn}
                        style={{
                            border: '2px solid #6798ef',
                            padding: '12px 60px',
                            borderRadius: 40,
                            cursor: 'pointer',
                            // backgroundColor: '#fff'
                        }}
                        onClick={() => {
                            this.props.changeText(this.state.text)
                            this.props.changeEdit(false)
                            document.body.style.overflow = 'visible'
                        }}
                    >
                        <p
                            className={styles.btn_text}
                            style={{
                                margin: 0,
                                fontWeight: 600,
                                textTransform: 'uppercase'
                            }}
                        >save</p>
                    </button>
                </div>

            </div>
        )
    }
}