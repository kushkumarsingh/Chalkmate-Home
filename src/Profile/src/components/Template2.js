// imports

// packages
import React from 'react';
import desc from './desc';
import AspectRatio from 'react-aspect-ratio';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

// compoments
import CircularProgress from './CircularProgress';
import ProgressBarStatic from './ProgressBarStatic';
import ExpTimelineTemp2 from './ExpTimelineTemp2';



// global defaults

//charts
// defaults.color = '#676767';


export default class Template2 extends React.Component {


    // data modified..
    bgcolor = [
        '#6564db',
        '#23e6e8',
        '#236ae8',
        '#ffaf02'
    ]


    skillsDp = [
        { "name": "Music", val: 12 },
        { "name": "Reading", val: 19 },
        { "name": "Swimming", val: 3 },
        { "name": "Fishing", val: 5 }
    ]








    // main render
    render() {
        return (
            <div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >


                <AspectRatio ratio="3/4" style={{ maxWidth: "85em", userSelect: 'none', }}>

                    <div style={styles.topviewable} id='topviewable' >

                        <div
                            style={{ position: 'relative' }}
                        >
                            <img
                                style={{
                                    opacity: 0.1,
                                    position: 'absolute',
                                    // top: '50%',
                                    marginLeft: '-29em',
                                    left: '50%',
                                    marginTop: '30em',
                                    height: '60em',
                                    width: '56em'
                                }}
                                src="../assets/Chalkmate_Watermark.png"
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                backgroundColor: '#236ae8',
                                padding: 50,
                                alignItems: 'center'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    backgroundColor: '#236ae8',
                                    alignItems: 'center'
                                }}
                            >

                                <div style={{ alignItems: 'center', display: 'flex', marginRight: 60 }}>
                                    <div>
                                        <img src={"../assets/dpic.png"} style={{ height: 230 }} />
                                    </div>
                                </div>
                                <div>
                                    <p style={{ color: "#fff", margin: 0, fontWeight: 500, fontSize: 60, textTransform: 'uppercase' }}>{desc.fname}</p>
                                    <p style={{ color: "#fff", margin: 0, fontWeight: 500, fontSize: 60, textTransform: 'uppercase' }}>{desc.lname}</p>
                                    <p style={{ color: "#bdd2f8", margin: 0, marginTop: 20, fontSize: 30 }}>{desc.profession}</p>
                                </div>
                            </div>

                            <div>
                                <img src={'../assets/qr-code.png'} style={{ height: 150 }} />

                            </div>
                        </div>
                        <div
                            style={{
                                backgroundColor: '#fff',
                                padding: 100,
                                paddingBottom: 0
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'row', textTransform: 'uppercase', color: '#0c1b7a', fontWeight: 600 }}>
                                <div style={{ flex: 1.5, marginRight: 40 }}>
                                    <p style={{ fontSize: 25 }}>about</p>
                                    <p style={{ textTransform: 'none', color: '#7e7e7e', fontWeight: 500, lineHeight: 1.5 }}>{desc.about}</p>
                                </div>
                                <div style={{ flex: 1, paddingLeft: 100, borderLeft: '2px solid #e9e9e9' }}>
                                    <p style={{ fontSize: 25 }}>contact</p>
                                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
                                        <div style={{ display: 'flex', color: '#7e7e7e', textTransform: 'none', fontWeight: 300, marginBottom: 10 }}>
                                            <img src={'../assets/phone-gray.png'} style={{ height: 28 }} />
                                            <p style={{ margin: 0, alignSelf: 'center', marginLeft: 15 }}>{desc.phone}</p>
                                        </div>
                                        <div style={{ display: 'flex', color: '#7e7e7e', textTransform: 'none', fontWeight: 300, marginBottom: 10 }}>
                                            <img src={'../assets/location-gray.png'} style={{ height: 28 }} />
                                            <p style={{ margin: 0, alignSelf: 'center', marginLeft: 15 }}>{desc.nationality, desc.residencecity, desc.residencestate}</p>
                                        </div>
                                        <div style={{ display: 'flex', color: '#7e7e7e', textTransform: 'none', fontWeight: 300, marginBottom: 10 }}>
                                            <img src={'../assets/mail-gray.png'} style={{ height: 28 }} />
                                            <p style={{ margin: 0, alignSelf: 'center', marginLeft: 15 }}>{desc.email}</p>
                                        </div>
                                        <div style={{ display: 'flex', color: '#7e7e7e', textTransform: 'none', fontWeight: 300, marginBottom: 10 }}>
                                            <img src={'../assets/website-gray.png'} style={{ height: 28 }} />
                                            <p style={{ margin: 0, alignSelf: 'center', marginLeft: 15 }}>{desc.website}</p>
                                        </div>
                                        <div style={{ display: 'flex', color: '#7e7e7e', textTransform: 'none', fontWeight: 300, marginBottom: 10 }}>
                                            <img src={'../assets/nationality-gray.png'} style={{ height: 28 }} />
                                            <p style={{ margin: 0, alignSelf: 'center', marginLeft: 15 }}>{desc.nationality}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: 60, flex: 1 }}>
                                <p style={{ fontSize: 25, textTransform: 'uppercase', fontWeight: 600, color: '#0c1b7a' }}>experience</p>
                                <div>
                                    <ExpTimelineTemp2 data={desc.educationWork} />
                                </div>
                            </div>
                            <div style={{ marginTop: 60, flex: 1 }}>
                                <p style={{ fontSize: 25, textTransform: 'uppercase', fontWeight: 600, color: '#0c1b7a' }}>education</p>
                                <div>
                                    <ExpTimelineTemp2 data={desc.educationWork} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 30, marginTop: 60 }}>

                                <div
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <p style={{ fontSize: 25, textTransform: 'uppercase', fontWeight: 600, color: '#0c1b7a', marginBottom: -5 }}>skills</p>


                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{ height: '23em', width: '23em', fontSize: 15 }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                    <Pie data={this.skillsDp} dataKey="val" label={e => e.name} cx="50%" cy="40%" innerRadius={60} outerRadius={90} fill="#82ca9d">
                                                        {
                                                            this.skillsDp.map((entry, index) => (
                                                                <Cell key={`cell-${index}`} fill={this.bgcolor[index % this.bgcolor.length]} />
                                                            ))
                                                        }
                                                    </Pie>
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{ marginLeft: 20, flex: 1, paddingLeft: 40 }}
                                >
                                    <p style={{ fontSize: 25, textTransform: 'uppercase', fontWeight: 600, color: '#0c1b7a' }}>interests</p>

                                    {
                                        desc.languages.map((item, index) => {
                                            return <CircularProgress title={item.lang} progress={item.progress} fg={item.color} weight={500} />
                                        })
                                    }
                                </div>
                                <div
                                    style={{
                                        flex: 1,
                                        paddingLeft: 10
                                    }}
                                >
                                    <p style={{ fontSize: 25, textTransform: 'uppercase', fontWeight: 600, color: '#0c1b7a', marginBottom: 15 }}>languages</p>
                                    {/* <div
                                        style={{
                                            borderLeft: '5px solid #dcdcdc',
                                            position: 'absolute',
                                            height: 200,
                                            borderRadius: 10,
                                        }}
                                    /> */}
                                    <div style={styles.lcard}>
                                        {
                                            desc.languages.map((lval) => {
                                                return (
                                                    <ProgressBarStatic fg={lval.color} progress={lval.progress} title={lval.lang} bgcolor='#E5E7E7' weight={500} marginBottom={20} />
                                                )
                                            })
                                        }
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </AspectRatio>

                <div style={{ margin: '30px 0px 100px 0px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

                    <div
                        onClick={() => {
                            document.body.style.maxWidth = '85em'
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
        fontSize: 17,
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
    },

    lcard: {
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        lineHeight: 0.6,
        padding: 15,
        height: '12em'
    }
}

