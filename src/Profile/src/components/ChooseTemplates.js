import React from 'react'
import { Link } from 'react-router-dom'
import TemplatePreviewCard from './TemplatePreviewCard'


import CloseIcon from '@material-ui/icons/Close';


import styles from '../Profile.module.css'

export default class ChooseTemplates extends React.Component {


    state = {
        templatePreview: false,
        templateIndex: 0
    }


    changeTemplatePreviewState(st, tIdx) {
        this.setState({ templatePreview: st, templateIndex: tIdx })
    }


    templateViewImage = ["../assets/template1-preview.png", "../assets/template2-preview.png", "../assets/template3-preview.png", "../assets/template4-preview.png"]





    render() {


        return (

            <div

                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 999,
                    position: 'fixed',


                }}
            >
                <div
                    id={styles.template_modal}
                    style={{
                        backgroundColor: '#fff',
                        padding: 30,
                        borderRadius: 12,
                        height: this.state.templatePreview?'auto':320,
                        position: 'relative',
                        // width: 'auto'

                    }}
                >



                    <div
                        style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #5555551A', paddingBottom: 20, alignItems: 'center' }}
                    >
                        <p
                            style={{ margin: 0, fontWeight: 600, fontSize:16 }}
                        >
                            {this.state.templatePreview ? "Template Preview" : "Choose Template"}
                        </p>
                        {
                            this.state.templatePreview ?
                                <Link onClick={() => this.setState({ templatePreview: false })}>
                                    <CloseIcon />
                                </Link>
                                :
                                <Link to="/" onClick={() => document.body.style.overflow = 'visible'}>
                                    <CloseIcon />
                                </Link>

                        }
                    </div>

                    <div
                        className={styles.scroll_div}
                        id={styles.scroll_div}
                        style={{
                            position: 'relative',
                            overflowY: 'scroll',
                            height: this.state.templatePreview? 'auto':290,
                            display: this.state.templatePreview? 'block':'flex',
                            justifyContent: this.state.templatePreview? 'none':'center',
                        }}
                    >


                        {/* <div> */}


                            {
                                this.state.templatePreview ?
                                    <div
                                        style={{
                                            padding: 15, display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <img src={this.templateViewImage[this.state.templateIndex]} style={{ height: 450, width: 'auto', marginBottom: 10 }} />
                                        <Link to={`/template/${this.state.templateIndex + 1}`} style={{ textDecoration: 'none' }} target="_blank">
                                            <div
                                                style={{
                                                    borderRadius: 20,
                                                    border: '2px solid #236AE8',
                                                    textAlign: 'center',
                                                    padding: "10px 0px",
                                                    backgroundColor: '#236AE8',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                <p style={{ margin: 0, color: "#fff", fontSize: 12, fontWeight: 500, textTransform: 'uppercase' }}>use this template</p>
                                            </div>

                                        </Link>
                                    </div>
                                    :
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-around',
                                            marginTop: 10,
                                            flexWrap: 'wrap',

                                        }}
                                    >

                                        {
                                            this.templateViewImage.map((img, idx) => {
                                                return <TemplatePreviewCard img={img} idx={idx} changeTemplatePreviewState={this.changeTemplatePreviewState.bind(this)} />
                                            })
                                        }

                                    </div>
                            }
                        </div>


                    {/* </div> */}


                </div>




            </div>
        )
    }
}