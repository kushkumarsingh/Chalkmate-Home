import React from 'react'

export default class AddInterests extends React.Component {

    state = {
        imgs: [],
        names: []
    }

    intrestName = ["Maths", "Physics", "Social Studies", "History", "Organic Chemistry", "Biology", "Optics", "History", "Maths", "Chemistry", "Maths", "Physics", "Social Studies", "History", "Organic Chemistry", "History"]
    intrestImage = ["Image/dummy/Interests/interest1.png", "Image/dummy/physics.png", "Image/dummy/social-studies.png", "Image/dummy/history.png", "Image/dummy/Interests/interest5.png", "Image/dummy/Interests/interest6.png", "Image/dummy/Interests/interest7.png", "Image/dummy/Interests/interest8.png", "Image/dummy/Interests/interest9.png", "Image/dummy/Interests/interest10.png", "Image/dummy/Interests/interest1.png", "Image/dummy/physics.png", "Image/dummy/social-studies.png", "Image/dummy/history.png", "Image/dummy/Interests/interest5.png", "Image/dummy/Interests/interest5.png"]

    render() {
        return (
            <div
                id="template-modal"
                style={{
                    backgroundColor: '#fff',
                    padding: 30,
                    borderRadius: 12,

                }}
            >

                <div id="header"
                    style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #5555555A', paddingBottom: 20, marginBottom: 20 }}
                >
                    <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <img src="./assets/add.svg" height={30} />
                        <p class="modal-title">{this.props.title}</p>
                    </div>
                    <div
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            this.props.changeState(this.state.imgs, this.state.names, false)
                            document.body.style.overflow = 'visible'
                        }}
                    >
                        <img src="./assets/cross.svg" height={30} />
                    </div>
                </div>

                <div
                    id="scroll-div"
                    style={{
                        maxHeight: 350,
                        maxWidth: 550,
                        overflow: 'scroll',
                        padding: 3,
                    }}
                >
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                            this.intrestName.map((name, idx) => {
                                return (
                                    <div style={{ width: '50%', cursor: 'pointer' }}
                                        onClick={()=>{
                                            if (this.state.names.includes(name)) {
                                                let selectnames = this.state.names
                                                let selectimages = this.state.imgs
                                                const index = selectnames.indexOf(name);
                                                if (index > -1) {
                                                    selectnames.splice(index, 1)
                                                    selectimages.splice(index, 1)
                                                }
                                                this.setState({ names: selectnames, imgs: selectimages })

                                            } else {
                                                let selectnames = this.state.names
                                                let selectimages = this.state.imgs
                                                this.setState({ names: [name, ...selectnames], imgs: [this.intrestImage[idx], ...selectimages] })
                                            }
                                        }}
                                    >
                                        <div style={{ display: 'flex' }}>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <img
                                                    src={this.intrestImage[idx]}
                                                    height="60px"
                                                    width="60px"
                                                    style={{ borderRadius: 40, margin: "5px 10px 5px 10px", backgroundColor: this.state.names.includes(name)?"#2269E7":'#fff', padding: 2 }}
                                                />
                                            </div>
                                            <div className="col-7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                <p class="section-title" style={{ textDecoration: this.state.names.includes(name)?"underline":'none', color: this.state.names.includes(name)?"#2269E7":'#000' }}>{name}</p>
                                                <p class="followers">2356452 followers</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div
                    style={{
                        marginTop: 30,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <div>

                        <button
                            class='btn'
                            style={{
                                border: '2px solid #6798ef',
                                padding: '12px 60px',
                                borderRadius: 40,
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                this.props.changeState(this.state.imgs, this.state.names, false)
                                document.body.style.overflow = 'visible'
                                if (this.props.add) {
                                    this.props.addExpContent(this.state.heading, this.state.subheading, this.state.desc)
                                }
                            }}
                        >
                            <p
                                class="btn-text"
                                style={{
                                    margin: 0,
                                    fontWeight: 600,
                                    textTransform: 'uppercase'
                                }}
                            >save</p>
                        </button>
                    </div>
                    <div>
                        <p style={{fontSize: 14, color: '#2269E7', fontWeight: 500}}>{this.state.imgs.length + " Selected"}</p>
                    </div>
                </div>

            </div>
        )
    }
}