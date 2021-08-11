// imports

// packages
import React from 'react';
import desc from './desc';
import './Template1.css';
import { defaults, Chart } from 'react-chartjs-2';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { AspectRatio } from 'react-aspect-ratio';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// components
import TitleIconDescComp from '../components/TitleIconDescComp';
import ProgressBarStatic from '../components/ProgressBarStatic';
import TimeTitleDescComp from '../components/TimeTitleDescComp';

// global config

// charts
defaults.interaction.mode = 'index';
defaults.plugins.borderWidth = 10;
defaults.plugins.legend.display = false;
defaults.plugins.tooltip.displayColors = false;
defaults.plugins.tooltip.enabled = false;


// main
export default class Template1 extends React.Component {

    componentDidMount() {

        this.getCanvasIds()
        // new Chart(this.ctx0, {
        //     type: 'doughnut',
        //     data: desc.interests,
        //     options: {
        //         plugins: {
        //             tooltip: {
        //                 enabled: true
        //             }
        //         }
        //     }
        // });

        new Chart(this.ctx1, {
            type: 'doughnut',
            data: desc.skills.art,
        });
        new Chart(this.ctx2, {
            type: 'doughnut',
            data: desc.skills.adventure,
        });
        new Chart(this.ctx3, {
            type: 'doughnut',
            data: desc.skills.teaching,
        });
        new Chart(this.ctx4, {
            type: 'doughnut',
            data: desc.skills.outdoor,
        });
        new Chart(this.ctx5, {
            type: 'doughnut',
            data: desc.skills.music,
        });
        new Chart(this.ctx6, {
            type: 'doughnut',
            data: desc.skills.sports,
        });

    }

    getCanvasIds() {

        // this.ctx0 = document.getElementById('cv-0').getContext('2d');

        this.ctx1 = document.getElementById('cv-1').getContext('2d');
        this.ctx2 = document.getElementById('cv-2').getContext('2d');
        this.ctx3 = document.getElementById('cv-3').getContext('2d');
        this.ctx4 = document.getElementById('cv-4').getContext('2d');
        this.ctx5 = document.getElementById('cv-5').getContext('2d');
        this.ctx6 = document.getElementById('cv-6').getContext('2d');
    }



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

    render() {
        return (
            <div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20}}
            >
                <AspectRatio ratio="3/4" style={{ maxWidth: "100em", userSelect: 'none'}}>


                    <div
                        id='main'
                        class='page'
                        style={{
                            margin: "1em 8em 10px 8em"
                        }}
                    >
                        <div style={styles.topviewable} id='topviewable' >

                            <div>
                                <img
                                    style={{
                                        opacity: 0.1,
                                        position: 'absolute',
                                        top: '50%',
                                        marginLeft: '-29em',
                                        left: '50%',
                                        marginTop: '-30em',
                                        height: '60em',
                                        width: '56em'
                                    }}
                                    src="../assets/Chalkmate_Watermark.png"
                                />
                            </div>
                            <div style={{ marginLeft: 10 }}>
                                <div id="vw-prsc" style={styles.vwps}>
                                    <div id="vw-la" style={styles.vwla} >
                                        <div id="vw-flname" style={styles.vwflname}>
                                            <h1 style={{ color: '#000000', fontSize: 42 }}>{desc.fname}</h1>
                                            <h1 style={{ color: '#555555', fontSize: 42 }}>{desc.lname}</h1>
                                        </div>
                                        <div id="vw-profmail" style={{ paddingBottom: '10px' }}>
                                            <TitleIconDescComp title="" desc={desc.profession} titleSize={0} descSize={15} titleColor="#555555" descColor="#555555" src="../assets/designation.png" />
                                            <br />
                                            <TitleIconDescComp title={""} desc={desc.email} titleSize={0} descSize={15} titleColor="#555555" descColor="#555555" src="../assets/mail.png" />
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <img src={'../assets/dpic.png'} style={{ height: 162 }} />
                                        </div>
                                        <div>
                                            <p style={{ color: '#555555' }}>{desc.about}</p>
                                        </div>
                                    </div>

                                    <div id="vw-rl" style={styles.vwrl}>
                                        <div style={{ marginBottom: 10 }}>
                                            <img src={'../assets/map.png'} style={{ margin: 'auto', display: 'block', height: '18em' }} />
                                        </div>
                                        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-around' }}>
                                            <div style={{ flex: 1 }}>
                                                <div style={styles.scard}>
                                                    <TitleIconDescComp title={desc.website} desc="Profile" titleSize={16} descSize={13} titleColor="#555555" descColor="#555555" src="../assets/dob.png" />
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
                                            <div style={{ flex: 1.2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                                <div>
                                                    <img src={'../assets/qrcode.png'} style={{ height: 180 }} />

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ margin: '30px 0px 0px 0px' }}>
                                <div style={{ marginLeft: 10 }}>
                                    <TitleIconDescComp title="Work History" desc="" titleSize={16} descSize={13} titleColor="#000" descColor="#555555" src="../assets/education.png" />
                                </div>
                                <div style={{ flex: 1, boxShadow: '0px 0px 10px #5555551A', padding: "30px 0px 40px 30px", borderRadius: 10, marginTop: 15 }}>
                                    <TimeTitleDescComp data={desc.educationWork} />
                                </div>
                            </div>

                            <div style={{ margin: '30px 0px 0px 00px' }}>
                                <div style={{ marginLeft: 10 }}>
                                    <TitleIconDescComp title="Education" desc="" titleSize={16} descSize={13} titleColor="#000" descColor="#555555" src="../assets/experience.png" />
                                </div>
                                <div style={{ flex: 1, boxShadow: '0px 0px 10px #5555551A', padding: "30px 0px 40px 30px", borderRadius: 10, marginTop: 15 }}>
                                    <TimeTitleDescComp data={desc.educationWork} />
                                </div>
                            </div>

                            <div style={{ margin: '30px 0px 0px 0px', display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ marginLeft: 10, marginBottom: 10 }}>
                                        <TitleIconDescComp title="Languages" desc="" titleSize={16} descSize={13} titleColor="#000" descColor="#555555" src="../assets/language.png" />
                                    </div>
                                    <div style={styles.lcard}>
                                        {
                                            desc.languages.map((lval) => {
                                                return (
                                                    <ProgressBarStatic fg={lval.color} progress={lval.progress} title={lval.lang} bgcolor='#E5E7E7' weight={500} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div style={{ marginLeft: 10, marginBottom: 10 }}>
                                        <TitleIconDescComp title="Interests" desc="" titleSize={16} descSize={13} titleColor="#000" descColor="#555555" src="../assets/intrests.png" />
                                    </div>
                                    <div style={styles.intlcard}>
                                        <div style={{ height: '20em', width: '20em' }}>
                                            {/* <canvas id='cv-0' /> */}
                                            <div style={{ fontSize: 15, height: '100%' }}>
                                                <ResponsiveContainer width="100%" height="100%" >
                                                    <PieChart>
                                                        <Pie data={this.skillsDp} dataKey="val" label={e => e.name} cx="50%" cy="50%" innerRadius={40} outerRadius={70} fill="#82ca9d">
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
                                </div>
                                <div>
                                    <div style={{ marginLeft: 10, marginBottom: 10 }}>
                                        <TitleIconDescComp title="Skills" desc="" titleSize={16} descSize={13} titleColor="#000" descColor="#555555" src="../assets/skills.png" />
                                    </div>
                                    <div style={styles.skillslcard}>
                                        <div style={styles.sklcrdinside}>
                                            <div style={styles.ssklsrd}>
                                                <div style={styles.vwcnv}>
                                                    <canvas id='cv-1' />
                                                </div>
                                                <p style={styles.cvtitle}>{Object.keys(desc.skills)[0]}</p>
                                            </div>
                                            <div style={styles.ssklsrd}>
                                                <div style={styles.vwcnv}>
                                                    <canvas id='cv-2' />
                                                </div>
                                                <p style={styles.cvtitle}>{Object.keys(desc.skills)[1]}</p>
                                            </div>
                                            <div style={styles.ssklsrd}>
                                                <div style={styles.vwcnv}>
                                                    <canvas id='cv-3' />
                                                </div>
                                                <p style={styles.cvtitle}>{Object.keys(desc.skills)[2]}</p>
                                            </div>
                                        </div>
                                        <div style={styles.sklcrdinside}>
                                            <div style={styles.ssklsrd}>
                                                <div style={styles.vwcnv}>
                                                    <canvas id='cv-4' />
                                                </div>
                                                <p style={styles.cvtitle}>{Object.keys(desc.skills)[3]}</p>
                                            </div>
                                            <div style={styles.ssklsrd}>
                                                <div style={styles.vwcnv}>
                                                    <canvas id='cv-5' />
                                                </div>
                                                <p style={styles.cvtitle}>{Object.keys(desc.skills)[4]}</p>
                                            </div>
                                            <div style={styles.ssklsrd}>
                                                <div style={styles.vwcnv}>
                                                    <canvas id='cv-6' />
                                                </div>
                                                <p style={styles.cvtitle}>{Object.keys(desc.skills)[5]}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>




                        </div>
                        <div style={{ margin: '30px 0px 0px 0px', display: 'flex', justifyContent: 'space-around' }}>
                            <div
                                onClick={() => {
                                    document.body.style.maxWidth = '90em'
                                    const input = document.getElementById('topviewable')

                                    html2canvas(input, {
                                        y: -30,
                                        x: -20
                                    }).then((canvas) => {
                                        const imgData = canvas.toDataURL('image/png');
                                        const pdf = new jsPDF('p', 'px', 'a4', true,);
                                        var width = pdf.internal.pageSize.getWidth();
                                        var height = pdf.internal.pageSize.getHeight();

                                        pdf.addImage(imgData, 'JPEG', 0, 0, width-20, height-20);
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
                </AspectRatio>
            </div>

        );
    }
}


const styles = {
    topviewable: {
        overflow: 'hidden',
        position: 'relative'
    },

    vwps: {
        display: 'flex',
    },

    vwla: {
        flex: 0.9
    },

    vwflname: {
        marginBottom: '50px',
        lineHeight: 0.8
    },


    vwrl: {
        flex: 1,
        marginLeft: 20
    },

    scard: {
        flex: 1,
        boxShadow: '0px 0px 10px #5555551A',
        borderRadius: 10,
        padding: '10px 10px 10px 20px',

    },

    mcard: {
        display: 'flex',
        justifyContent: 'center'
    },

    lcard: {
        borderRadius: 10,
        display: 'flex',
        boxShadow: '0px 0px 10px #5555551A',
        alignItems: 'center',
        flexDirection: 'column',
        lineHeight: 0.6,
        padding: 15,
        height: '12em'
    },

    intlcard: {
        borderRadius: 10,
        display: 'flex',
        boxShadow: '0px 0px 10px #5555551A',
        alignItems: 'center',
        flexDirection: 'column',
        lineHeight: 0.6,
        padding: '15px 100px 15px 100px',
        height: '12em'
    },

    skillslcard: {
        borderRadius: 10,
        display: 'flex',
        boxShadow: '0px 0px 10px #5555551A',
        flexDirection: 'column',
        lineHeight: 0.6,
        padding: 20,
        height: '12em',
        justifyContent: 'space-around'
    },

    sklcrdinside: {
        display: 'flex',
        justifyContent: 'space-around',
    },

    ssklsrd: {
        boxShadow: '0px 0px 10px #5555551A',
        borderRadius: 10,
        padding: '4px 12px 4px 12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: "0px 10px 0px 10px"
    },

    cvtitle: {
        fontSize: 10,
        lineHeight: 0.1,
    },

    vwcnv: {
        height: 40,
        width: 40,
        position: 'relative'
    },

    vwbtnftr: {
        display: 'flex',
        flexDirection: 'row'
    },

    footerbtn: {
        borderRadius: 30,
        border: '2px solid #297CED',
    },

    btntitle: {
        padding: "3px 40px 3px 40px",
        fontSize: 10,
        fontWeight: 600
    }

};
