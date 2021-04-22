import React, {Component} from "react";

class Contact extends Component {
    render() {
        return (
            <section className="section_contact">
                <div className='infoContact'>
                    <p className="contactInf">{this.props.contact.firstName} {this.props.contact.lastName}</p>
                    <p className="contactInf">{this.props.contact.gender ===undefined? this.props.contact.gender = 'anon': this.props.contact.gender}</p>
                </div>
                <p className="contactInf">{this.props.contact.phone}</p>
            </section>
        )
    }
}

export default Contact;