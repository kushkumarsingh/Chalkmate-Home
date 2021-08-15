// imports 
import React from 'react';
import desc from './desc'
import './Template4.css';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import AspectRatio from 'react-aspect-ratio';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

// icons
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

// compoents
import RightTitleDescComponentTemp4 from '../components/RightTitleDescComponentTemp4'
import TitleIconDescComp from '../components/TitleIconDescComp';
import ExpTimelineVerticalTemp4 from '../components/ExpTimelineVerticalTemp4'
import ProgressBarStatic from '../components/ProgressBarStatic';


export default class Template4 extends React.Component {


    bgcolor = [
        '#ffaf02',
        '#00d498',
        '#7569de',
        '#0c1b7a',
        '#ff0289'
    ]

    skillsDp = [
        [{ "name": "Music", val: 12 }, { "name": "Music", val: 8 }],
        [{ "name": "Reading", val: 19 }, { "name": "Reading", val: 1 }],
        [{ "name": "Swimming", val: 3 }, { "name": "Swimming", val: 17 }],
        [{ "name": "Fishing", val: 5 }, { "name": "Fishing", val: 15 }],
        [{ "name": "Art", val: 15 }, { "name": "Art", val: 5 }],

    ]

    skillsName = ["Music", "Reading", "Swimming", "Fishing", "Art"]




    render() {
        return (
            <div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >

                <AspectRatio ratio="3/4" style={{ maxWidth: "100em", userSelect: 'none', }}>
                    <div
                        id="topviewable"
                        style={{
                            display: 'flex'
                        }}
                    >
                        <div>
                            <img
                                style={{
                                    opacity: 0.1,
                                    position: 'absolute',
                                    marginLeft: '13em',
                                    marginTop: '20em',
                                    height: '60em',
                                    width: '56em'
                                }}
                                src="../assets/Chalkmate_Watermark.png"
                            />
                        </div>
                        <img src={'../assets/bgtop1.png'} style={{ width: '65em', height: 'auto', position: 'absolute', zIndex: -1, }} />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                // flex: 1,
                                width: 600
                            }}
                        >
                            <div
                                style={{
                                    marginTop: 140,
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <img
                                    src={'../assets/dpic.png'}
                                    style={{
                                        border: '5px solid #f5a700',
                                        borderRadius: 200,
                                        marginLeft: 130,
                                        position: 'absolute',
                                        marginTop: 60
                                    }}
                                />
                                <div
                                    style={{ position: 'relative' }}
                                >
                                    <img src={'../assets/bgline.png'} style={{ position: 'absolute', zIndex: -1, height: 900, width: 'auto', left: 280, top: -70 }} />
                                    <img src={'../assets/bglinestart.png'} style={{ position: 'absolute', zIndex: -1, height: 900, width: 'auto', left: 170, top: -70 }} />

                                </div>

                            </div>
                            <div
                                style={{
                                    padding: '320px 80px 0px 100px',
                                }}
                            >
                                <p
                                    style={{
                                        color: '#000000',
                                        margin: '30px 0px 0px 0px',
                                        fontSize: 40,
                                        fontWeight: 500
                                    }}
                                >Hello</p>
                                <p
                                    style={{
                                        color: '#0c1b7a',
                                        margin: '8px 0px 0px 0px',
                                        fontSize: 45,
                                        fontWeight: 600
                                    }}
                                >I'am {desc.fname}<br />{desc.lname}</p>
                                <p
                                    style={{
                                        color: '#0c1b7a',
                                        margin: '20px 0px 0px 0px',
                                        fontSize: 35,
                                        fontWeight: 500
                                    }}
                                >{desc.profession}</p>
                                <p
                                    style={{
                                        color: '#656565',
                                        margin: '30px 0px 0px 0px',
                                        fontSize: 17,
                                        fontWeight: 500,
                                        lineHeight: 1.5
                                    }}
                                >{desc.about}</p>
                            </div>
                            <div
                                style={{
                                    padding: 50
                                }}
                            >
                                {
                                    this.skillsDp.map((item, idx) => {
                                        return (

                                            <div style={{ height: '8em', width: '8em', fontSize: 15, textAlign: 'center', display: 'inline-block', width: '30%', marginBottom: 0 }}>
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <PieChart>
                                                        <Pie data={item} dataKey="val" cx="50%" cy="50%" innerRadius={23} outerRadius={50} fill="#82ca9d" startAngle={90}
                                                            endAngle={-270} isAnimationActive={false}
                                                        >
                                                            {
                                                                this.skillsDp.map((entry, index) => (
                                                                    <Cell key={`cell-${index}`} fill={index == 0 ? this.bgcolor[idx] : '#dddddd'} />
                                                                ))
                                                            }
                                                        </Pie>
                                                    </PieChart>
                                                </ResponsiveContainer>
                                                <p style={styles.cvtitle}>{this.skillsName[idx]}</p>

                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '30px 0px 60px 50px', }}>
                                <div style={styles.scard}>
                                    <TitleIconDescComp title={desc.phone} desc="Phone" titleSize={16} descSize={13} titleColor="#555555" descColor="#555555" src="../assets/dob.png" />
                                </div>
                                <br />
                                <div style={styles.scard}>
                                    <TitleIconDescComp title={desc.nationality} desc="Nationality" titleSize={16} descSize={13} titleColor="#555555" descColor="#555555" src="../assets/nationality.png" />
                                </div>
                                <br />
                                <div style={styles.scard}>
                                    <TitleIconDescComp title={desc.residencecity} desc={desc.residencestate} titleSize={16} descSize={13} titleColor="#555555" descColor="#555555" src="../assets/state.png" />
                                </div>
                            </div>
                            <div
                                style={{
                                    backgroundColor: '#236ae8',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    borderTopRightRadius: 50,
                                    borderBottomRightRadius: 50,
                                    alignItems: 'center',
                                    // marginRight: 60,
                                    marginBottom: 100
                                }}
                            >

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: 25,
                                        marginRight: 10
                                    }}
                                >
                                    {/* <EmailIcon width={10} height={10} style={{ color: '#fff' }} /> */}
                                    <img src={'../assets/mail.png'} style={{ height: 25 }} />
                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: 13,
                                            paddingLeft: 10,
                                            color: '#fff'
                                        }}
                                    >{desc.email}</p>

                                    <img src='../assets/website4.png' width={35} style={{ color: '#fff', paddingLeft: 50 }}/>
                                    {/* <CallIcon width={10} height={10} style={{ color: '#fff', paddingLeft: 50 }} /> */}
                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: 13,
                                            paddingLeft: 10,
                                            color: '#fff'
                                        }}
                                    >{desc.website}</p>
                                </div>
                                {/* <div
                                    style={{ position: 'relative' }}
                                >
                                    <img src={'../assets/bgbottom1.png'} style={{ position: 'absolute', zIndex: -1, width: '65em', height: 'auto', top: "-83em", left: -330 }} />

                                </div> */}
                            </div>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                // flex: 1,
                                marginTop: 50,
                                justifyContent: 'center',
                                width: 400,
                                marginLeft: 250
                            }}
                        >
                            <div>
                                <div
                                    style={{ flex: 1 }}
                                >
                                    <RightTitleDescComponentTemp4 title='My Experience' />
                                    <ExpTimelineVerticalTemp4 data={desc.educationWork} />
                                </div>
                                <div
                                    style={{ marginTop: 70, flex: 1 }}
                                >
                                    <RightTitleDescComponentTemp4 title='Specializing' />
                                    {
                                        desc.languages.slice(0, 4).map((lval) => {
                                            return (
                                                <ProgressBarStatic fg={lval.color} progress={lval.progress} title={lval.lang} bgcolor='#E5E7E7' weight={500} />
                                            )
                                        })
                                    }
                                </div>
                                <br />
                                <br />
                                <div
                                    style={{ marginTop: 70, flex: 1 }}
                                >
                                    <RightTitleDescComponentTemp4 title='My Education' />
                                    <ExpTimelineVerticalTemp4 data={desc.educationWork} />
                                </div>
                                <div
                                    style={{ marginTop: 80, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <div>
                                        <img src={'../assets/qrcode.png'} style={{ height: 180 }} />

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </AspectRatio>
                    <br />
                    <br />
                    <br />

                    <div style={{ margin: '30px 0px 100px 0px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

                    <div
                        onClick={() => {
                            document.body.style.maxWidth = '100em'
                            const input = document.getElementById('topviewable')

                            html2canvas(input, {
                                y: 0
                            }).then((canvas) => {
                                const imgData = canvas.toDataURL('image/png');
                                const pdf = new jsPDF('p', 'px', 'a4', true,);
                                var width = pdf.internal.pageSize.getWidth();
                                var height = pdf.internal.pageSize.getHeight();

                                pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
                                pdf.save("resume.pdf")
                                // window.open(pdf.output('datauristring'))
                                document.body.style.maxWidth = '100%'


                            });

                        }}
                    >
                        <div id="btn-ftr" style={styles.footerbtn}>
                            <p style={styles.btntitle}>PRINT THIS RESUME</p>
                        </div>
                    </div>
                    <div>
                        <div id="btn-ftr" style={styles.footerbtn}>
                            <p style={styles.btntitle}>SHARE THIS RESUME</p>
                        </div>
                    </div>
                    <div>
                        <div id="btn-ftr" style={styles.footerbtn}>
                            <p style={styles.btntitle}>VIEW DETAILED RESUME</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const styles = {
    ssklsrd: {
        // boxShadow: '0px 0px 10px #5555551A',
        borderRadius: 10,
        padding: '4px 12px 4px 12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: "0px 10px 0px 10px"
    },

    vwcnv: {
        height: 80,
        width: 80,
        position: 'relative'
    },

    cvtitle: {
        fontSize: 17,
        fontWeight: 500,
        color: '#5e5e5e',
        textTransform: 'capitalize',
        margin: 0
    },

    scard: {
        flex: 1,
        boxShadow: '0px 0px 10px #5555551A',
        borderRadius: 10,
        padding: '10px 10px 10px 20px',
    },

    li: {
        margin: 0,
        color: '#236ae8',
        fontSize: 40,
        display: 'flex',
        alignItems: 'center',
        marginLeft: -5,
        marginBottom: 20
        // zIndex: 10
    },

    lihead: {
        color: '#7d7d7d',
        margin: 0,
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 1.5
    },

    lidesc: {
        color: '#606060',
        margin: '0px 0px 0px 0px',
        fontSize: 19,
        fontWeight: 600,
        lineHeight: 1.5
    },

    vwbtnftr: {
        display: 'flex',
        flexDirection: 'row'
    },

    footerbtn: {
        borderRadius: 30,
        border: '2px solid #297CED',
        margin: '10px 60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    btntitle: {
        padding: "3px 40px 3px 40px",
        fontSize: 10,
        fontWeight: 600
    }
}