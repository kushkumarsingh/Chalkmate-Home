import React from 'react'

import styles from '../../Profile.module.css'

export default class EditFeatured extends React.Component {

    state = {
        featuredImage: this.props.featuredImage,
        imageIds:[]
    }


    render() {

        return (
            <div
                id={styles.template_modal}
                style={{
                    backgroundColor: '#fff',
                    padding: 30,
                    borderRadius: 12,
                    width: 600
                }}
            >

                <div id={styles.header}
                    style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #5555555A', paddingBottom: 20, marginBottom: 20 }}
                >
                    <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <img src="./assets/add.svg" height={30} />
                        <p className="modal-title">{this.props.title}</p>
                    </div>
                    <div
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            this.props.changeEditFeatured(false)
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
                    {
                        this.state.featuredImage.map((img, idx) => {
                            

                            return (
                                <div style={{ margin: 5, flex: 1 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            marginBottom: 20,
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <div
                                            style={{ display: 'flex' }}
                                        >
                                            <div
                                                style={{  width: '40%', marginRight: 20 }}
                                            >
                                                <img className={styles.card_img_top} src={img} alt="Card image cap" height="120px" width="100%" />

                                            </div>
                                            <div style={{ margin: '10px 0px 10px 0px', width: '40%' }}>
                                                <p className={styles.modal_heading} style={{marginLeft: 0}}>Crash Course</p>
                                                <p className={styles.section_desc}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src="Image/Icons/delete.svg"
                                                style={{
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => {
                                                    let imgs = this.state.featuredImage
                                                    let imgIdx = imgs.indexOf(img)
                                                    imgs.splice(imgIdx, 1)
                                                    this.setState({featuredImage: imgs})
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
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
                        }}
                        onClick={() => {
                            
                            this.props.changeEditFeaturedState(this.state.featuredImage)
                            this.props.changeEditFeatured(false)
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