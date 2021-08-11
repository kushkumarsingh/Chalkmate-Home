import React from 'react'

export default class EditSkills extends React.Component {

    state = {
        imgs: this.props.featuredImage,
        names: this.props.featuredName
    }

    render() {
        return (
            <div
                id="template-modal"
                style={{
                    backgroundColor: '#fff',
                    padding: 30,
                    borderRadius: 12,
                    width: 550
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
                            this.props.changeEditState(this.state.imgs, this.state.names, false)
                            document.body.style.overflow = 'visible'
                        }}
                    >
                        <img src="./assets/cross.svg" height={30} />
                    </div>
                </div>

                <div
                    id="scroll-div"
                    style={{
                        maxHeight: 400,
                        overflow: 'scroll',
                        padding: 3,
                    }}
                >
                    {
                        this.state.imgs.map((img, idx) => {


                            return (
                                <div style={{ margin: 5, flex: 1 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            marginBottom: 20,
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <div style={{display: 'flex'}}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <div
                                                    style={{ display: 'flex', alignItems: 'center' }}
                                                >
                                                    <img
                                                        src={img}
                                                        height="60px"
                                                        width="60px"
                                                        style={{ borderRadius: 40, marginRight: 10 }}
                                                    />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                    <p class="section-title">{this.state.names[idx]}</p>
                                                    <p class="followers">2356452 followers</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                        >
                                            <img src="Image/Icons/delete.svg"
                                                style={{
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => {
                                                    let imgs = this.state.imgs
                                                    let imgIdx = imgs.indexOf(img)
                                                    imgs.splice(imgIdx, 1)
                                                    this.setState({ imgs: imgs })
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div
                    style={{
                        marginTop: 30
                    }}
                >
                    <button
                        class='btn'
                        style={{
                            border: '2px solid #6798ef',
                            padding: '12px 60px',
                            borderRadius: 40,
                            cursor: 'pointer',
                        }}
                        onClick={() => {

                            this.props.changeEditState(this.state.imgs, this.state.names, false)
                            document.body.style.overflow = 'visible'
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

            </div>
        )
    }
}