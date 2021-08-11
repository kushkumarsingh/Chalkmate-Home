import React from 'react'

export default class DpicFeed extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            // file: './assets/default-user.png'
            file: this.props.props.dpfileloc || './assets/default-user.png'
        }

        this.handleImageChange = this.handleImageChange.bind(this)
    }



    handleImageChange(event) {
        // this.setState({
        //     file: URL.createObjectURL(event.target.files[0])
        // })

        this.props.props.updateDp(URL.createObjectURL(event.target.files[0]))
    }




    render() {

        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >

                <div
                    style={{
                        marginTop: 15,
                        backgroundColor: '#5555555A',
                        height: 160,
                        width: 160,
                        borderRadius: 100,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginBottom: 30,
                    }}
                >
                    <div
                        style={{ position: 'absolute', width: 160, height: 160, overflow: 'hidden', borderRadius: 100 }}
                    >
                        <img src={this.props.props.dpfileloc} style={{ width: '100%', height: 'auto', }} />

                    </div>




                    {
                        this.props.props.props.editpage ?
                            <div
                                style={{
                                    padding: 8,
                                    backgroundColor: '#fff',
                                    borderRadius: 100,
                                    cursor: 'pointer',
                                    height: 15,
                                    width: 15,
                                    margin: 5,
                                    position: 'absolute',
                                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',

                                }}

                            >
                                <label for="iconimage-dp">
                                    <div>
                                        <img src="Image/camera.svg" alt="" height="15px" width="15px" style={{ cursor: 'pointer' }} />

                                    </div>
                                </label>
                                <input
                                    type="file"
                                    // className="inputfield-dp"
                                    id="iconimage-dp"
                                    onChange={this.handleImageChange}
                                    style={{ display: "none", cursor: 'pointer' }}
                                    accept="image/png, image/jpeg, image/svg"
                                />
                            </div>
                            :
                            null
                    }





                    <div
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 20 }}
                    >
                        <div
                            style={{
                                border: '5px solid #fff',
                                padding: 8,
                                borderRadius: 20,
                                backgroundColor: '#00FF80',
                                zIndex: 2
                            }}
                        />
                    </div>
                </div>
            </div>
        )

    }
}