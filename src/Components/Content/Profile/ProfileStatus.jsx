import React from 'react';
import style from './ProfileStatus.module.css';


export default class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        statusText: this.props.status,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    };

    ChangeActiveMode = () => {
        // this.setState(state => ({
        //     editMode: !!state.editMode
        // }))
        this.state.editMode
            ? this.setState({editMode: false})
            : this.setState({editMode: true});
    };
    UpdateStatus = () => {
        const { updateUserStatus } = this.props;
        const { ChangeActiveMode } = this;
        updateUserStatus(this.state.statusText);
        ChangeActiveMode();
    };

    changeStatusText = (e) => {
        this.setState({
            statusText: e.currentTarget.value
        });
    };





    render() {

        return (
            <>
                {this.state.editMode ?
                    <div className={style.statusInput}>
                        <input
                            autoFocus={true}
                            onBlur={this.UpdateStatus}
                            defaultValue={this.state.statusText}
                            onChange={this.changeStatusText}
                        />
                    </div>
                    :
                    <div className={style.statusBlock}
                         onDoubleClick={this.ChangeActiveMode.bind(this)}>
                        <span>{this.state.statusText}</span>
                    </div>
                }
            </>

        )
    };

};

