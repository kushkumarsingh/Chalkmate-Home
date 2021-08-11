import React from 'react'
import {Link} from 'react-router-dom'

export default class TemplatePreviewCard extends React.Component {

    state = {
        showChooseView: false
    }

    render() {
        return (
            <div
                id="tp-card"
                style={{ padding: '30px 20px 30px 20px', backgroundColor: this.state.showChooseView ? '#236AE8' : '#DBDBDB', borderRadius: 8, height: 200, width: 150, margin: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                onMouseEnter={() => {
                    this.setState({ showChooseView: true })
                }}
                onMouseLeave={() => {
                    this.setState({ showChooseView: false })

                }}
            >
                {
                    this.state.showChooseView ?
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: "100%",
                                width: 'auto',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div
                                style={{ padding: 3.4 }}
                            >
                                <div>
                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: 15,
                                            color: '#fff'
                                        }}
                                    >Profile Template {this.props.idx + 1} <br /><br />Free</p>
                                </div>
                            </div>
                            <div>

                                <div
                                    style={{
                                        borderRadius: 20,
                                        border: '2px solid #fff',
                                        textAlign: 'center',
                                        padding: "8px 0px",
                                        marginBottom: 3,
                                        cursor: 'pointer'
                                    }}
                                    onClick={()=>{
                                        this.props.changeTemplatePreviewState(true, this.props.idx)
                                    }}
                                >
                                    <p style={{ margin: 0, color: "#fff", fontSize: 14 }}>VIEW</p>
                                </div>
                                <Link to={`/template/${this.props.idx + 1}`} style={{ textDecoration: 'none' }} target="_blank">
                                    <div
                                        style={{
                                            borderRadius: 20,
                                            border: '2px solid #236AE8',
                                            textAlign: 'center',
                                            padding: "10px 0px",
                                            backgroundColor: '#fff',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <p style={{ margin: 0, color: "#236AE8", fontSize: 12, fontWeight: 600, }}>USE</p>
                                    </div>

                                </Link>

                            </div>

                        </div>
                        :
                        <div
                            style={{ height: '100%', width: '140px' }}
                        >

                            <img src={this.props.img} alt="template"
                                style={{
                                    height: "100%",
                                    width: 'auto',
                                    boxShadow: '0px 10px 15px #969696'
                                }}
                                onLoad={() => "loading..."}
                            />
                        </div>
                    // null
                }
            </div>
        )
    }
}