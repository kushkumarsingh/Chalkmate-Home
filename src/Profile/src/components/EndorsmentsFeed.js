import React from 'react'
import Modal from './Modals/Modal'
import EditSkills from './Modals/EditSkills'
import AddSkills from './Modals/AddSkills'

export default class EndorsementsFeed extends React.Component {

    state = {
        add: false,
        edit: false,
        endIdx: 4,

        featuredImage: ["Image/dummy/html.png", "Image/dummy/scss.png", "Image/dummy/ReactJS.png", "Image/dummy/vue.png"],
        featuredName: ["HTML", "SCSS", "React JS", "Vue"]
    }


    changeState(img, name, add) {
        let oldImgs = this.state.featuredImage
        let oldNames = this.state.featuredName
        let newImgs = [...img, ...oldImgs]
        let newName = [...name, ...oldNames]
        this.setState({ featuredImage: newImgs, featuredName: newName, add: add })
    }

    changeEditState(img, name, edit) {
        this.setState({ featuredImage: img, featuredName: name, edit: edit })
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
                                <img class="inner-icon" src="Image/Icons/intrests.svg" alt=" " />
                            </div>
                            <div>
                                <p class="icon-text" >Skills and Endorsements</p>
                            </div>


                        </div>
                        {
                            this.props.editpage ?
                                <div
                                    onClick={() => {
                                        this.setState({ edit: true })
                                        document.body.style.overflow = 'hidden'
                                    }}
                                >

                                    <img src='Image/Chalkmate_Edit.svg' style={{ height: 20, cursor: 'pointer' }} />
                                </div>
                                :
                                null

                        }
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

                    <div
                        style={{
                            borderBottom: '1px solid #5555551A',
                            padding: 10
                        }}
                    >
                        {
                            this.props.editpage ?
                                <div>

                                    <p
                                        class="edit-info"
                                    >
                                        Add your interests
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
                                            this.setState({ add: true })
                                            document.body.style.overflow = 'hidden'
                                        }}
                                    >
                                        <p
                                            class="btn-text"

                                        >+ ADD SKILLS</p>
                                    </button>
                                </div>
                                :
                                null
                        }


                        <div>
                            <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap' }}>
                                {
                                    this.state.featuredImage.slice(0, this.state.endIdx).map((img, idx) => {
                                        return (
                                            <div style={{ width: "50%" }}>
                                                <div style={{ display: 'flex' }}>
                                                    <div>
                                                        <img
                                                            src={img}
                                                            height="60px"
                                                            width="60px"
                                                            style={{ borderRadius: 40, margin: 10 }}
                                                        />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                        <p class="section-title">{this.state.featuredName[idx]}</p>
                                                        <p class="followers">2356452 followers</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>
                    <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}

                        onClick={() => {
                            if (this.state.endIdx > 4) {
                                this.setState({ endIdx: 4 })

                            } else {
                                this.setState({ endIdx: this.state.featuredImage.length })

                            }
                        }}
                    >
                        <btn style={{ fontSize: 12, fontWeight: 600, color: '#555555', margin: 10 }}>{this.state.endIdx <= 4 ? "SEE ALL" : "COLLAPSE"}</btn>
                    </div>
                </div>

                {
                    this.state.add ?
                        <Modal card={<AddSkills
                            title="Add Skills"
                            changeState={this.changeState.bind(this)}
                        />} />

                        :
                        null
                }

                {
                    this.state.edit ?
                        <Modal card={<EditSkills
                            title="Edit Skills Post"
                            featuredImage={this.state.featuredImage}
                            featuredName={this.state.featuredName}
                            changeEditState={this.changeEditState.bind(this)}


                        />} />

                        :
                        null
                }
            </div>
        )
    }
}