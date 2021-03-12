import React from 'react'


class ProfileStatus extends React.Component {



    state = {
        editMode : true,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode:false
        })
    }
    deactivatedEditMode = () => {
        this.setState({
            editMode:true
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState) {

        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render () {

        return (

            <>

                <div>Мой статус</div>
                <div>
                    {this.state.editMode ? <span onDoubleClick={ this.activeEditMode }>{this.props.status}</span>
                        : <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivatedEditMode } type="text"
                                 value={this.state.status || "Изменить статус"}/>   }

                </div>


                <br/><br/>

            </>

        )
    }

}

export default ProfileStatus