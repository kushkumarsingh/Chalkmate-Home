import React from 'react'

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import AddIcon from '@material-ui/icons/Add';

import Modal from './Modals/Modal'
import AddFeatured from './Modals/AddFeatured'
import AddFeaturedLink from './Modals/AddFeaturedLink';
import EditFeatured from './Modals/EditFeatured';

import CorouselFeatured from './CorouselFeatured';

import styles from '../Profile.module.css'

export default class FeaturedFeed extends React.Component {

    state = {
        edit: false,
        editLink: false,
        editFeatured: false,
        featuredImage: ["Image/dummy/maths.png", "Image/dummy/featured1.png", "Image/dummy/featured4.png"]
    }




    changeState(img) {
        let imgList = [...img, ...this.state.featuredImage]
        this.setState({ featuredImage: imgList })
    }

    changeEdit(edit) {
        this.setState({ edit: edit })
    }

    changeEditLink(editLink) {
        this.setState({ editLink: editLink })
    }


    changeEditFeaturedState(img) {
        this.setState({ featuredImage: img })
    }

    changeEditFeatured(editFeatured) {
        this.setState({ editFeatured: editFeatured })
    }



    scrollLeft() {
        const scrollElm = document.getElementById("featured-scroll")
        scrollElm.scrollLeft -= 200
    }

    scrollRight() {
        const scrollElm = document.getElementById("featured-scroll")
        scrollElm.scrollLeft += 200
    }

    render() {
        return (
            <div
                className={styles.featured_div}
            >
                <div
                    className={styles.profile_title}
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
                            <div className={styles.icon_container}>
                                <img className={styles.inner_icon} src="Image/Chalkmate_Featured.svg" alt=" " />
                            </div>
                            <div>
                                <p className={styles.icon_text} >Featured </p>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                            }}
                        >
                            <div
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 20 }}
                            >
                                <div
                                    style={{
                                        background: '#E5E5E5 0% 0% no-repeat padding-box',
                                        borderRadius: 30,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: 15,
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => this.scrollLeft()}
                                >
                                    <KeyboardArrowLeftIcon style={{ width: 22, height: 22 }} />
                                </div>
                                <div
                                    onClick={() => this.scrollRight()}
                                    style={{ cursor: 'pointer', backgroundColor: '#E5E5E5', borderRadius: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 15 }}
                                >
                                    <KeyboardArrowRightIcon style={{ width: 22, height: 22 }} />
                                </div>
                                <div className={styles.dropdown_featured}>
                                    {
                                        this.props.editpage ?
                                            <div
                                                className={styles.dropbtn_featured}
                                                style={{ backgroundColor: '#E5E5E5', borderRadius: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}

                                            >
                                                <AddIcon style={{ width: 22, height: 22 }} />
                                            </div>
                                            :
                                            null
                                    }
                                    <div className={styles.dropdown_content_featured}>
                                        <a
                                            onClick={() => {
                                                this.setState({ title: 'Add Featured Post', edit: true })
                                                document.body.style.overflow = 'hidden'
                                            }}
                                        >Post</a>
                                        <a
                                            onClick={() => {
                                                this.setState({ title: 'Add Featured Post', editLink: true })
                                                document.body.style.overflow = 'hidden'
                                            }}
                                        >Link</a>
                                    </div>
                                </div>

                            </div>
                            {
                                this.props.editpage ?
                                    <div
                                        onClick={() => {
                                            this.setState({ editFeatured: true })
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
                </div>
                <br />

                <div
                    className={styles.desc}
                    style={{
                        boxShadow: '0px 0px 20px #5555551a',
                        borderRadius: 10,
                        display: 'flex',
                        justifyContent: 'center',
                        padding: 10,
                    }}
                >
                    <div
                        style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
                    >

                        <div id='featured-scroll' className={styles.scroll_div} style={{ display: 'flex', padding: 0, maxWidth: 600, overflow: 'scroll' }}>
                            {
                                this.state.featuredImage.map((img, _) => {
                                    return (
                                        <div style={{ margin: 5 }}>
                                            <div>
                                                <img className={styles.card_img_top} src={img} alt="Card image cap" style={{ height: 128, width: '250px' }} />
                                                <div style={{ margin: '10px 0px 10px 0px' }}>
                                                    <p className={styles.section_title}>Crash Course</p>
                                                    <p className={styles.featured_desc}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            {/* <CorouselFeatured content={this.state.featuredImage} /> */}
                        </div>

                    </div>

                </div>
                {
                    this.state.edit ?
                        <Modal card={<AddFeatured
                            title="Add Featured Post"
                            changeState={this.changeState.bind(this)}
                            changeEdit={this.changeEdit.bind(this)}
                        />} />

                        :
                        null
                }

                {
                    this.state.editLink ?
                        <Modal card={<AddFeaturedLink
                            title="Add Featured Link"
                            changeEditLink={this.changeEditLink.bind(this)}
                        />} />

                        :
                        null
                }

                {
                    this.state.editFeatured ?
                        <Modal card={<EditFeatured
                            title="Edit Featured Post"
                            featuredImage={this.state.featuredImage}
                            changeEditFeatured={this.changeEditFeatured.bind(this)}
                            changeEditFeaturedState={this.changeEditFeaturedState.bind(this)}
                        />} />

                        :
                        null
                }
            </div>
        )
    }
}