import React from 'react';

class Introduction extends React.Component{
    goodFace = ":)";
    badFace = ":(";
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true
        };

        this.CaseByClick = this.CaseByClick.bind(this);
    }

    CaseByClick(){
        this.setState(prev => ({
            isToggleOn: !prev.isToggleOn
        }));
    }
    
    render(){
        if (this.state.isToggleOn){
            return (
                <div>
                    <button onClick={this.CaseByClick}>{this.goodFace}</button>
                    <h1>So Cool!</h1>
                </div>
            );
        }
        return (
            <div>
                <button onClick={this.CaseByClick}>{this.badFace}</button>
                <h1>You are stupid!</h1>
            </div>
        );
    }
}

export default Introduction