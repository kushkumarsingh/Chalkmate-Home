import React from 'react'
import Modal from './Modals/Modal'
import EditLicences from './Modals/EditLicences'

export default class LicencesFeed extends React.Component {

    state = {

        edit: false,

        title: "",
        id: null,
        heading: "",
        subheading: "",
        desc: "",

        add: false,

        endIdx: 2,

        edContent: [
            {
                id: 0,
                img: "Image/dummy/Udemy.png",
                heading: "Blockchain A-Z™: Learn How To Build Your First Blockchain",
                subheading: "Udemy",
                desc: "Intensive, 6 week business program for liberal arts majors at the #1 ranked undergraduate business & accounting school Studied Accounting, Finance, Marketing, Information Technology, Entrepreneurship, the Legal Environment of Business, Business Strategy, Quantitative Analysis, Business Life, and a Business Simulation Earned 1st place in the cumulative business simulation competition (which emphasized marketing strategy and encompassed the disciplines mentioned above)"
            },

            {
                id: 1,
                img: "Image/dummy/coursera.png",
                heading: "Blockchain A-Z™: Build Your First Blockchain",
                subheading: "Coursera",
                desc: "Intensive, 6 week business program for liberal arts majors at the #1 ranked undergraduate business & accounting school Studied Accounting, Finance, Marketing, Information Technology, Entrepreneurship, the Legal Environment of Business, Business Strategy, Quantitative Analysis, Business Life, and a Business Simulation Earned 1st place in the cumulative business simulation competition (which emphasized marketing strategy and encompassed the disciplines mentioned above)"
            }
        ]
    }

    changeStates(id, heading, subheading, desc, edit) {
        this.setState({ id: id, heading: heading, subheading: subheading, desc: desc, edit: edit })
    }

    addEdContent(heading, subheading, desc) {

        var oldEdContent = this.state.edContent
        oldEdContent.forEach(elm => {
            elm.id += 1
        })
        var newEdContent = {
            id: 0,
            img: "Image/dummy/starbucks.png",
            heading: heading,
            subheading: subheading,
            desc: desc
        }

        var updatedEd = [newEdContent, ...oldEdContent]
        this.setState({ edContent: updatedEd })

    }





    render() {
        return (
            <div>
                <div
                    class="profile-title"
                >

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: "0px 20px",
                            alignItems: 'center'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >

                            <div class="icon-container">
                                <img class="inner-icon" src="Image/Chalkmate_Certification.svg" alt=" " />
                            </div>
                            <div>
                                <p class="icon-text" >Licenses & certifications </p>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <div
                    class="desc"
                    style={{
                        boxShadow: '0px 0px 20px #5555551a',
                        padding: 10,
                        borderRadius: 10,
                    }}
                >
                    {
                        this.props.editpage ?
                            <div
                                style={{
                                    padding: 10
                                }}
                            >
                                <p
                                    class="edit-info"
                                >
                                    Add licenses & certifications.
                                </p>
                                <button
                                    class='btn'
                                    style={{
                                        border: '2px solid #6798ef',
                                        padding: '12px 20px',
                                        borderRadius: 40,
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => {
                                        this.setState({ title: 'Add Licences', edit: true, add: true, id: null, heading: "", subheading: "", desc: "" })
                                        document.body.style.overflow = 'hidden'
                                    }}
                                >
                                    <p
                                        class="btn-text"
                                        style={{
                                            margin: 0,
                                            fontWeight: 600,
                                            textTransform: 'uppercase'
                                        }}
                                    >+ Add Licenses & certifications</p>
                                </button>
                            </div>
                            :
                            null
                    }
                    <div style={{
                        padding: 20,
                        borderBottom: '1px solid #5555551A'
                    }}>

                        {
                            this.state.edContent.slice(0, this.state.endIdx).map((item, idx) => {
                                if (this.state.id != null && this.state.id == idx) {
                                    item.heading = this.state.heading === "" ? item.heading : this.state.heading
                                    item.subheading = this.state.subheading === "" ? item.subheading : this.state.subheading
                                    item.desc = this.state.desc === "" ? item.desc : this.state.desc
                                }

                                return (
                                    <div style={{ borderBottom: idx != this.state.endIdx - 1 ? '1px solid #5555555A' : 'none', paddingBottom: idx == 0 ? 15 : 0, marginTop: idx == 0 ? 0 : 20 }}>
                                        <div style={{ display: 'flex' }}>
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
                                                        <p class="section-title">{item.heading}<br /><span class="followers">{item.subheading}</span></p>

                                                    </div>
                                                    {
                                                        this.props.editpage ?
                                                            <div>
                                                                <img src='Image/Chalkmate_Edit.svg'
                                                                    style={{
                                                                        height: 20,
                                                                        cursor: 'pointer'
                                                                    }}
                                                                    onClick={() => {
                                                                        console.log(idx, "ejfiowhnef")
                                                                        this.setState({ title: 'Edit Licences', edit: true, add: false, id: idx, heading: item.heading, subheading: item.subheading, desc: item.desc })
                                                                        document.body.style.overflow = 'hidden'
                                                                    }}
                                                                />
                                                            </div>
                                                            :
                                                            null
                                                    }
                                                </div>
                                                <p class="followers" style={{ opacity: 0.7, color: '#555555', marginBottom: 6 }}>Jan 2011 - Nov 2015</p>
                                                <p class="section-desc">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}

                        onClick={() => {
                            if (this.state.endIdx > 2) {
                                this.setState({ endIdx: 2 })

                            } else {
                                this.setState({ endIdx: this.state.edContent.length })

                            }
                        }}
                    >
                        <btn style={{ fontSize: 12, fontWeight: 600, color: '#555555', margin: 10 }}>{this.state.endIdx <= 2 ? "SEE ALL" : "COLLAPSE"}</btn>
                    </div>
                </div>

                {
                    this.state.edit ?
                        <Modal card={<EditLicences
                            id={this.state.id}
                            title={this.state.title}
                            heading={this.state.heading}
                            subheading={this.state.subheading}
                            desc={this.state.desc}
                            add={this.state.add}
                            changeStates={this.changeStates.bind(this)}
                            addEdContent={this.addEdContent.bind(this)}
                        />} />

                        :
                        null
                }
            </div>
        )
    }
}