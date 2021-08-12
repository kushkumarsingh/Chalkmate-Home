import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import styles from '../../Profile.module.css'

export default class AddFeatured extends React.Component {

    state = {
        img: [],
        selectId: []
    }


    expContent = [
        {
            key: 0,
            id: 0,
            img: "Image/dummy/award1.png",
            heading: "Singapore Business Events",
            subheading: "1,073,422 followings",
            desc: "Chrome versions of famous logos by Martin Naumann. Go give Martin a follow on Instagram via username @mnaumanndesign #logos #lego #adidas #nike #nasa #apple #reebok #logos #lego #adidas #nike #nasa #apple"
        },

        {
            key: 1,
            id: 1,
            img: "Image/dummy/slack.png",
            heading: "Singapore Business Events",
            subheading: "1,073,422 followings",
            desc: "Chrome versions of famous logos by Martin Naumann. Go give Martin a follow on Instagram via username @mnaumanndesign #logos #lego #adidas #nike #nasa #apple #reebok #logos #lego #adidas #nike #nasa #apple"
        },

        {
            key: 2,
            id: 2,
            img: "Image/dummy/award1.png",
            heading: "Singapore Business Events",
            subheading: "1,073,422 followings",
            desc: "Chrome versions of famous logos by Martin Naumann. Go give Martin a follow on Instagram via username @mnaumanndesign #logos #lego #adidas #nike #nasa #apple #reebok #logos #lego #adidas #nike #nasa #apple"
        }
    ]


    render() {

        return (
            <div
                id={styles.template_modal}
                style={{
                    backgroundColor: '#fff',
                    padding: 30,
                    borderRadius: 12,

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
                            // this.props.changeStates(this.props.id, this.props.heading, this.props.subheading, this.props.desc, false)
                            this.props.changeEdit(false)
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
                        maxWidth: 600,
                        overflow: 'scroll',
                        padding: 3,
                    }}
                >


                    <div style={{
                        padding: 20,
                        borderBottom: '1px solid #5555551A'
                    }}>

                        {
                            this.expContent.map((item, idx) => {
                                if (this.state.id != null && this.state.id == idx) {
                                    item.heading = this.state.heading === "" ? item.heading : this.state.heading
                                    item.subheading = this.state.subheading === "" ? item.subheading : this.state.subheading
                                    item.desc = this.state.desc === "" ? item.desc : this.state.desc
                                }

                                return (
                                    <div
                                        style={{
                                            overflow: 'hidden',
                                            border:'1px solid #5555555A',
                                            marginTop: idx == this.expContent.length - 1 || idx != 0 ? 20 : 0,
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => {
                                            if (this.state.selectId.includes(idx)) {
                                                let selectids = this.state.selectId
                                                const index = selectids.indexOf(idx);
                                                if (index > -1) {
                                                    selectids.splice(index, 1);
                                                }
                                                this.setState({ selectId: [...selectids] })

                                            } else {
                                                let selectids = this.state.selectId
                                                this.setState({ selectId: [idx, ...selectids] })
                                            }
                                        }}
                                    >

                                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: 10, paddingBottom: 0 }}>
                                            <div
                                                style={{ display: 'flex' }}
                                            >
                                                <div>
                                                    <img
                                                        src={item.img}
                                                        height="50px"
                                                        width="50px"
                                                        style={{ borderRadius: 40, marginRight: 15 }}
                                                    />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between'
                                                        }}
                                                    >
                                                        <div>
                                                        <p className={styles.section_title}>{item.heading}<br /><span className={styles.followers}>{item.subheading}</span></p>

                                                        </div>
                                                    </div>
                                                    <p className={styles.followers} style={{ opacity: 0.7, color: '#555555', marginBottom: 6 }}>Jan 2011 - Nov 2015</p>
                                                </div>
                                            </div>
                                            {
                                                this.state.selectId.includes(idx) ?
                                                    <div>
                                                        <CheckCircleIcon style={{ color: '#236AE8' }} />
                                                    </div> :
                                                    null

                                            }

                                        </div>
                                        <p className={styles.section_desc} style={{padding: 10}}>
                                            {item.desc}
                                        </p>
                                        <img src="./assets/AddFeatured.png" style={{ width: '100%', marginBottom: -10}} />
                                    </div>
                                )
                            })
                        }

                    </div>


                </div>
                <div
                    style={{
                        marginTop: 40
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
                            let img = []
                            this.expContent.forEach((elm) => {
                                if (this.state.selectId.includes(elm.id)) {
                                    img.push(elm.img)
                                }
                            })

                            console.log(img)
                            this.props.changeState(img)
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