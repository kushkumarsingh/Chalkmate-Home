import React from 'react'

export default class EditSocial extends React.Component {

    socialImages = [
        "./Image/facebook-colored.svg",
        "./Image/linkedin-colored.svg",
        "./Image/twitter-colored.svg",
        "./Image/instagram-colored.svg",
        "./Image/medium-colored.svg"
    ]

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
                            this.props.changeEdit(false)
                            document.body.style.overflow = 'visible'
                        }}
                    >
                        <img src="./assets/cross.svg" height={30} />
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >

                    {
                        this.socialImages.map((img, idx) => {
                            return (
                                <pre
                                    style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: 15}}
                                >
                                    
                                    {/* <p style={{margin: 0}}>{img}</p> */}
                                    <img src={img} style={{height: 35, marginRight: 15}} />
                                    <input class="modal-para" id="textarea" type="text" placeholder="Ex : Add social link"
                                        style={{
                                            border: '1px solid #5555555A',
                                            padding: 10,
                                            fontSize: 13,
                                            borderRadius: 50,
                                            width: '90%'
                                        }}
                                    />
                                </pre>
                            )
                        })
                    }
                    {/* <p style={{ fontWeight: 600, marginLeft: 20 }}>Summary</p> */}
                    {/* <textarea id="textarea" cols={80} rows={15} placeholder="Ex : Write something about yourself"
                        style={{
                            border: '1px solid #5555555A',
                            padding: 10,
                            fontSize: 15,
                            borderRadius: 10
                        }}
                        value={this.state.text}
                        onChange={(event) => {
                            this.changeText(event.target.value)
                        }}
                    /> */}

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
                            // this.props.changeText(this.state.text)
                            this.props.changeEdit(false)
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