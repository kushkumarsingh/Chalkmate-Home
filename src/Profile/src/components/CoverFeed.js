import React from 'react'
import styles from '../Profile.module.css'

export default class CoverFeed extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            file: null
        }

        this.handleImageChange = this.handleImageChange.bind(this)
    }



    handleImageChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }




    render() {
        return (
            <div
                style={{
                    // backgroundColor: '#5555555A',
                    height: 180,
                    borderRadius: 8,
                    display: 'flex',
                    justifyContent: 'flex-end', position: 'relative'
                }}
            >
                <div
                    style={{ position: 'absolute', width: '100%', height: 180, overflow: 'hidden', borderRadius: 10 }}
                >
                    <img src={this.state.file ? this.state.file : './assets/samplebg.jpg'} style={{ width: '100%', height: 'auto', }} />

                </div>




                {
                    this.props.editpage ?
                        <div
                            style={{
                                padding: 8,
                                backgroundColor: '#fff',
                                borderRadius: 30,
                                cursor: 'pointer',
                                height: 15,
                                width: 15,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 10,
                                position: 'absolute'

                            }}

                        >
                            <label for="iconimage-cover">
                                <div>
                                    <img src="Image/camera.svg" alt=" " height="15px" width="15px" style={{ cursor: 'pointer' }} />
                                </div>
                            </label>

                            <input
                                type="file"
                                className={styles.inputfield_cover}
                                id="iconimage-cover"
                                onChange={this.handleImageChange}
                                style={{ display: "none", cursor: 'pointer' }}
                                accept="image/png, image/jpeg, image/svg"
                            />
                        </div>
                        :
                        null
                }
            </div>
        )

    }
}