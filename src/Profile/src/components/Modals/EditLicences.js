import React from 'react'

export default class EditLicences extends React.Component {

    state = {
        title: this.props.title,
        id: this.props.id,
        heading: this.props.heading,
        subheading: this.props.subheading,
        desc: this.props.desc
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
                            this.props.changeStates(this.props.id, this.props.heading, this.props.subheading, this.props.desc, false)
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
                    <div
                        style={{
                            // borderBottom: '1px solid #5555555A',
                            paddingBottom: 20,

                        }}
                    >

                        <div
                            style={{ display: 'flex', flexDirection: 'column', marginBottom: 15 }}
                        >

                            <p class="modal-heading">Name</p>
                            <input class="modal-para" type="text" placeholder="Ex : Write something about yourself"
                                style={{
                                    // border: '1px solid #5555555A',
                                    padding: 10,
                                    fontSize: 15,
                                    borderRadius: 50
                                }}
                                value={this.state.heading}
                                onChange={(event) => {
                                    this.setState({ heading: event.target.value })
                                }}
                            />
                            <br />
                        </div>

                        <div
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >

                            <p class="modal-heading">Issuing Organization</p>
                            <input class="modal-para" type="text" placeholder="Ex : Write something about yourself"
                                style={{
                                    // border: '1px solid #5555555A',
                                    padding: 10,
                                    fontSize: 15,
                                    borderRadius: 50
                                }}
                                value={this.state.subheading}
                                onChange={(event) => {
                                    this.setState({ subheading: event.target.value })
                                }}
                            />
                        </div>
                        <p style={{ textAlign: 'right', fontSize: 12, color: '#555555', fontWeight: 500, marginRight: 10 }}>Learn More</p>
                    </div>




                    <div
                        style={{
                            display: 'flex'
                        }}
                    >
                        <div
                            style={{ display: 'flex', flexDirection: 'column', marginRight: 20 }}
                        >

                            <p class="modal-heading">Issue Date*</p>
                            <input class="modal-para" type="date" placeholder="Ex : Write something about yourself"
                                style={{
                                    border: '1px solid #5555555A',
                                    padding: 10,
                                    fontSize: 15,
                                    borderRadius: 50
                                }}
                            // value={this.state.subheading}
                            // onChange={(event) => {
                            //     this.setState({ subheading: event.target.value })
                            // }}
                            />
                            <br />
                        </div>
                        <div
                            style={{ display: 'flex', flexDirection: 'column', marginBottom: 15 }}
                        >

                            <p class="modal-heading">Expiration Date*</p>
                            <input class="modal-para" type="date" placeholder="Ex : Write something about yourself"
                                style={{
                                    border: '1px solid #5555555A',
                                    padding: 10,
                                    fontSize: 15,
                                    borderRadius: 50
                                }}
                            // value={this.state.subheading}
                            // onChange={(event) => {
                            //     this.setState({ subheading: event.target.value })
                            // }}
                            />
                            <br />
                        </div>
                    </div>

                    <div
                        style={{ display: 'flex', flexDirection: 'column', marginBottom: 15 }}
                    >

                        <p class="modal-heading">Credential ID</p>
                        <input class="modal-para" type="text" placeholder="Ex : Write something about yourself"
                            style={{
                                border: '1px solid #5555555A',
                                padding: 10,
                                fontSize: 15,
                                borderRadius: 50
                            }}
                            value={"Afwefewofbfwe"}
                        // onChange={(event) => {
                        //     this.setState({ subheading: event.target.value })
                        // }}
                        />
                        <br />
                    </div>
                    <p class="modal-heading">Description</p>
                    <div
                        style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >

                        <textarea class="modal-para" id="textarea" cols={60} rows={8} placeholder="Ex : Write something about yourself"
                            style={{
                                border: '1px solid #5555555A',
                                padding: 10,
                                fontSize: 15,
                                borderRadius: 10,
                                marginBottom: 15
                            }}
                            value={this.state.desc}
                            onChange={(event) => {
                                this.setState({ desc: event.target.value })
                            }}
                        />

                    </div>
                    <div
                        style={{ display: 'flex', flexDirection: 'column' }}
                    >

                        <p class="modal-heading">Credential URL</p>
                        <input class="modal-para" type="text" placeholder="Ex : Write something about yourself"
                            style={{
                                border: '1px solid #5555555A',
                                padding: 10,
                                fontSize: 15,
                                borderRadius: 50
                            }}
                            value={"ssl://someurl.domain"}
                        // onChange={(event) => {
                        //     this.setState({ subheading: event.target.value })
                        // }}
                        />
                        <br />
                    </div>
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
                            this.props.changeStates(this.state.id, this.state.heading, this.state.subheading, this.state.desc, false)
                            document.body.style.overflow = 'visible'
                            if (this.props.add) {
                                this.props.addEdContent(this.state.heading, this.state.subheading, this.state.desc)
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

            </div>
        )
    }
}