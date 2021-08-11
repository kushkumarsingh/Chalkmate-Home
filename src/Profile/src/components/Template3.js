// imports

// packages
import React from 'react';
import desc from './desc';
import './Template3.css';
import AspectRatio from 'react-aspect-ratio';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

// components
import TitleColorTemp3 from '../components/TitleColorTemp3';
import ProgressBarStatic from '../components/ProgressBarStatic';
import CircularProgress from '../components/CircularProgress';
import TitleIconDescComp from '../components/TitleIconDescComp';
import ExpTimelineVerticalTemp4 from '../components/ExpTimelineVerticalTemp4'


// icons
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CreateIcon from '@material-ui/icons/Create';
import SportsIcon from '@material-ui/icons/Sports';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';



export default class Template3 extends React.Component {


    // data
    skills = [
        {
            "lang": "Music",
            "progress": 90,
            "color": "#6564DB"
        },
        {
            "lang": "Art",
            "progress": 10,
            "color": "#23E6E8"
        },
        {
            "lang": "Teaching",
            "progress": 40,
            "color": "#FFAF02"
        },
        {
            "lang": "Outdoor",
            "progress": 70,
            "color": "#236AE8"
        },
        {
            "lang": "Sports",
            "progress": 50,
            "color": "#fe0574"
        },
    ]


    interests = [
        {
            "lang": "Music",
            "color": "#062f89",
            icon: <FlightTakeoffIcon style={{ color: '#fff' }} />
        },
        {
            "lang": "Reading",
            "color": "#fc790a",
            icon: <MenuBookIcon style={{ color: '#fff' }} />
        },
        {
            "lang": "Swimming",
            "color": "#177df8",
            icon: <CreateIcon style={{ color: '#fff' }} />
        },
        {
            "lang": "Fishing",
            "color": "#fe0574",
            icon: <SportsIcon style={{ color: '#fff' }} />
        },
    ]




    // main render
    render() {
        return (
            <div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >

                <AspectRatio ratio="3/4" style={{ maxWidth: "85em", userSelect: 'none', }}>

                    <div
                        id="topviewable"
                        style={{}}
                    >
                        <div
                            style={{
                                // display: 'flex',
                                // alignItems: 'center',
                                // flexDirection: 'column',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}
                            >
                                <p
                                    style={{
                                        fontWeight: 600,
                                        fontSize: 55,
                                        textTransform: 'uppercase',
                                        marginBottom: 10,
                                        color: '#2a2a2a'
                                    }}
                                >{desc.fname}<br />{desc.lname}</p>
                                <p
                                    style={{
                                        fontWeight: 500,
                                        fontSize: 30,
                                        marginTop: 10,
                                        color: '#2E302F',
                                        opacity: 0.7
                                    }}
                                >{desc.profession}</p>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    paddingLeft: 400,
                                    paddingRight: 400
                                }}
                            >
                                {/* <MailOutlineIcon width={10} height={10} style={{ color: '#fff' }} /> */}
                                {/* <div style={styles.scard}>
                                    <TitleIconDescComp title={desc.dob} desc="Date of Birth" titleSize={16} descSize={13} titleColor="#555555" descColor="#555555" src="../assets/dob-blue.png" iconbgcolor="#fff" iconSize={40} />
                                </div> */}
                                <div style={styles.scard}>
                                    <TitleIconDescComp title={desc.nationality} desc="Nationality" titleSize={16} descSize={13} titleColor="#555555" descColor="#555555" src="../assets/nationality-blue.png" iconbgcolor="#fff" iconSize={40} />
                                </div>
                                <div style={styles.scard}>
                                    <TitleIconDescComp title={desc.residencecity} desc={desc.residencestate} titleSize={16} descSize={13} titleColor="#555555" descColor="#555555" src="../assets/location-blue.png" iconbgcolor="#fff" iconSize={40} />
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                marginTop: 50,
                                display: 'flex',
                            }}
                        >
                            <div
                                style={{
                                    flex: 1,
                                }}
                            >
                                <div>
                                    <TitleColorTemp3 justifycontent='flex-end' bgcolor={['#fb0188', '#fb077a']} title='Profile' dir='left' />
                                    <div
                                        style={{
                                            display: 'flex',
                                            padding: '20px 0px 20px 80px'
                                        }}
                                    >
                                        <p
                                            style={{
                                                color: '#555555',
                                                fontWeight: 500,
                                                fontSize: 15,
                                            }}
                                        >{desc.about}</p>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div>
                                    <TitleColorTemp3 justifycontent='flex-end' bgcolor={['#ffa204', '#fb8418']} title='Education' dir='left' />
                                    <div
                                        style={{
                                            padding: '20px 0px 20px 80px',
                                        }}
                                    >
                                        <ExpTimelineVerticalTemp4 data={desc.educationWork} durationColor="#FE7D05" durationWeight={600} />

                                    </div>


                                </div>
                                <br />
                                <br />
                                <div>
                                    <TitleColorTemp3 justifycontent='flex-end' bgcolor={['#17aaff', '#1b87f1']} title='Skills' dir='left' />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            padding: '0px 0px 20px 80px',

                                        }}
                                    >
                                        <p></p>
                                        {
                                            desc.languages.map((item, index) => {
                                                return <CircularProgress title={item.lang} progress={item.progress} fg={item.color} weight={500} />
                                            })
                                        }
                                    </div>
                                </div>
                                <br />
                                <br />
                            </div>

                            <div
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: 'column',
                                    padding: '50px 0px 100px 0px',
                                    margin: '0px 30px 0px 30px',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <div>
                                        <div
                                            style={{
                                                marginTop: 100,
                                                borderRadius: 200,
                                                padding: 20,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                boxShadow: '0px 0px 20px 20px #f0f0f0',
                                            }}
                                        >
                                            <img src={'../assets/dpic.png'} style={{ boxShadow: '0px 0px 10px 10px #55555529', borderRadius: 200 }} />

                                            <div
                                                style={{ position: 'relative' }}
                                            >
                                                <img src={'../assets/profile-line.png'} style={{ position: 'absolute', width: 550, zIndex: -1, left: -690, top: -320 }} id="lines" />
                                                <img src={'../assets/contacts-line.png'} style={{ position: 'absolute', width: 180, left: -54, top: -250, zIndex: -1 }} id="lines" />
                                                <img src={'../assets/education-line.png'} style={{ position: 'absolute', width: 500, left: -600, top: -20, zIndex: -1 }} id="lines" />
                                                <img src={'../assets/skills-line.png'} style={{ position: 'absolute', width: 570, left: -690, top: -30, zIndex: -1 }} id="lines" />
                                                <img src={'../assets/languages-line.png'} style={{ position: 'absolute', width: 600, left: -320, top: -10, zIndex: -1 }} id="lines" />
                                                <img src={'../assets/experience-line.png'} style={{ position: 'absolute', width: 170, left: -60, top: -40, zIndex: -1 }} id="lines" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img src={'../assets/qrcode.png'} style={{ height: 180 }} />

                                </div>
                            </div>

                            <div
                                style={{
                                    flex: 1
                                }}
                            >
                                <div>
                                    <TitleColorTemp3 justifycontent='flex-start' bgcolor={['#133daa', '#023085']} title='Contact' dir='right' />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            marginLeft: 20,
                                            fontSize: 15
                                        }}
                                    >
                                        <p></p>
                                        <div style={{ display: 'flex', color: '#555555', textTransform: 'none', fontWeight: 500, marginBottom: 10 }}>
                                            <img src="../assets/phone-temp3.png" style={{ height: 35 }} />
                                            <p style={{ margin: 0, alignSelf: 'center', marginLeft: 15 }}>{desc.phone}</p>
                                        </div>
                                        <div style={{ display: 'flex', color: '#555555', textTransform: 'none', fontWeight: 500, marginBottom: 10 }}>
                                            <img src="../assets/mail-temp3.png" style={{ height: 35 }} />
                                            <p style={{ margin: 0, alignSelf: 'center', marginLeft: 15 }}>{desc.email}</p>
                                        </div>
                                        <div style={{ display: 'flex', color: '#555555', textTransform: 'none', fontWeight: 500, marginBottom: 10 }}>
                                            <img src="../assets/website-temp3.png" style={{ height: 35 }} />
                                            <p style={{ margin: 0, alignSelf: 'center', marginLeft: 15 }}>{desc.website}</p>
                                        </div>
                                        <div style={{ display: 'flex', color: '#555555', textTransform: 'none', fontWeight: 500 }}>
                                            <img src="../assets/location-temp3.png" style={{ height: 35 }} />
                                            <p style={{ margin: 0, alignSelf: 'center', marginLeft: 15 }}>{desc.nationality, desc.residencecity, desc.residencestate}</p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <br />
                                <div>
                                    <TitleColorTemp3 justifycontent='flex-start' bgcolor={['#17aaff', '#1b87f1']} title='Experience' dir='right' />
                                    <div
                                        style={{
                                            padding: '20px 0px 20px 30px'
                                        }}
                                    >
                                        <ExpTimelineVerticalTemp4 data={desc.educationWork} durationColor="#FE7D05" durationWeight={600} />

                                    </div>
                                </div>
                                <br />
                                <br />
                                <div>
                                    <TitleColorTemp3 justifycontent='flex-start' bgcolor={['#feab11', '#fc8c00']} title='Interests' dir='right' />
                                    <p></p>
                                    <div
                                        style={{
                                            padding: '20px 0px 20px 30px'
                                        }}
                                    >
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
                                </div>
                            </div>

                        </div>



                    </div>
                    <div style={{ margin: '30px 0px 100px 0px', display: 'flex', justifyContent: 'space-around' }}>

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

                </AspectRatio>
            </div>

        )
    }
}

const styles = {
    scard: {
        borderRadius: 10,
        padding: '10px 10px 10px 20px'
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
}