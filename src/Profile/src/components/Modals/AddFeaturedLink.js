import React from 'react'
import styles from '../../Profile.module.css'
export default class AddFeaturedLink extends React.Component {



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
                            this.props.changeEditLink(false)

                            document.body.style.overflow = 'visible'
                        }}
                    >
                        <img src="./assets/cross.svg" height={30} />
                    </div>
                </div>

                <div
                    id={styles.scroll_div}
                    style={{
                        maxHeight: 400,
                        overflow: 'scroll',
                        padding: 3,
                    }}
                >
                    <div
                        style={{
                            paddingBottom: 20,

                        }}
                    >

                        <div
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >

                            <p className={styles.modal_heading}>Enter a link</p>
                            <input type="text" className={styles.modal_para} placeholder="Paste or type a link to a file or video"
                                style={{
                                    border: '1px solid #5555555A',
                                    padding: 10,
                                    fontSize: 15,
                                    borderRadius: 50
                                }}
                            />
                            <br />
                        </div>

                    </div>
                </div>

                <div
                >
                    <button
                        className={styles.btn}
                        style={{
                            border: '2px solid #6798ef',
                            padding: '12px 60px',
                            borderRadius: 40,
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            this.props.changeEditLink(false)
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